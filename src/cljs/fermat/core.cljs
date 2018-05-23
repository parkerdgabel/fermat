(ns fermat.core
  (:require
   [goog.string :as gstring]
   [goog.string.format]))
;; Specs
(defn assert-prime
  "Asserts that n is prime."
  [n]
  (assert (prime? n) (gstring/format "%s is not a prime." (str n))))

(defn assert-number
  "Asserts that a number is a positve integer."
  [n]
  (assert (and (int? n) (< 0 n)) (gstring/format "%s is not a positive integer." (str n))))

;; Basic operations
(defn abs
  "Returns the absolute value of x."
  [x]
  (cond
    (< 0 x) x
    (< x 0) (- x)
    :else 0))

(defn exp
  "Returns the base multiblied num times."
  [base num]
  (cond
    (< num 0) (exp (/ 1 base) (- num))
    (zero? num) 1
    :else
    (loop [b base, n num, a 1]
      (if (zero? n)
        a
        (if (even? n)
          (recur (* b b) (/ n 2) a)
          (recur b (dec n) (* b a)))))))

(defn divmod
  "Returns the quotient and remainder of a."
  [a n]
  (list (quot a n) (mod a n)))

(defn gcd
  "Returns the greatest common denominator of a and b."
  [a b]
  (if (zero? b)
    a
    (recur b (mod a b))))

(defn extended-gcd
  "The extended Euclidean algorithm
  Returns a list containing the GCD and the Bézout coefficients
  corresponding to the inputs. "
  [a b]
  (cond (zero? a) [(abs b) 0 1]
        (zero? b) [(abs a) 1 0]
        :else (loop [s 0
                     s0 1
                     t 1
                     t0 0
                     r (abs b)
                     r0 (abs a)]
                (if (zero? r)
                  [r0 s0 t0]
                  (let [q (quot r0 r)]
                    (recur (- s0 (* q s)) s
                           (- t0 (* q t)) t
                           (- r0 (* q r)) r))))))

(defn modexp
  "Computes the modular exponent of a mod m (i.e a^e mod m)"
  [a e m]
  (letfn [(m* [p q] (mod (* p q) m))]
         (loop [a a, e (mod e (totient m)), x 1]
           (if (zero? e)
             x
             (if (even? e)
               (recur (m* a a) (/ e 2) x)
               (recur (m* a a) (quot e 2) (m* a x)))))))

(defn modinv
  "Returns the modular inverse of a modulo n."
  [a n]
  (let [f (extended-gcd a n)
        gcd (get f 0)
        ainv (get f 1)]
    (if (= gcd 1)
      ainv)))

(defn totient
  "Euler-totient function for n"
  [n]
  (assert-number n)
  (if (prime? n)
    (dec n)
    (* n (reduce * (set (map #(- 1 (/ 1 %)) (factors n)))))))

(defn order
"Finds the order of a modulo n.(i.e. the smallest r > 1 such that a^r = 1 mod n)"
[a n]
(if (= (gcd a n) 1)
(loop [r 1]
  (if (= (modexp a r n) 1)
    r
    (recur (inc r))))))

(defn legendre
  "Computes the Legendre symbol for a and p. p must be prime."
  [a p]
  (assert-prime p)
  (let [val (modexp a (/ (dec p) 2) p)]
    (if (= 1 val)
      val
      (- 1))))

(defn chinese-remainder
  "Main routine to return the chinese remainder"
  [n a]
  (let [prod (apply * n)
        reducer (fn [sum [n_i a_i]]
                  (let [p (quot prod n_i)
                        egcd (extended-gcd p n_i)
                        inv_p (second egcd)]
                    (+ sum (* a_i inv_p p))))
        sum-prod (reduce reducer 0 (map vector n a))]
    (mod sum-prod prod)))

;; Prime functions

(defn- find-k-m
  "Rewrites n as 2k*m with m odd."
  [n]
  (loop [m (dec n)
         k 0]
    (if (odd? m)
      [k m]
      (recur (/ m 2) (inc k)))))

(defn- k-rand-nums
  "Generates k random numbers in between 2 and n-2. Helper function for Miller-Rabin Primality Test."
  [k n]
  (let [nums (range 2 (- n 2))]
    (loop [ret-set #{}]
      (if (= k (count ret-set))
        ret-set
        (recur (conj ret-set (rand-nth nums)))))))


(defn- miller-rabin
  "Miller-Rabin primality test. Note this is a probabalistic primality test. It is not guarenteed to work."
  [n]
  (let [[k m] (find-k-m n)
        single-test (fn [a m]
                      (let [y (modexp a k n)]
                        (if (some #{y} [1 (dec n)])
                          true
                          (loop [x (modexp y 2 n), r k]
                            (cond
                              (= x 1) false
                              (= x (dec n)) true
                              (= (dec k) r) false
                              :else (recur (modexp x 2 n) (dec r)))))))]
    (not-any? #(= true (single-test % m)) (k-rand-nums (min 1000 (quot n 2)) n))))

(defn- trial-division
  "Primality by trial division."
  [n]
  (let [divides? (fn [k n] (zero? (mod k n)))]
      (or (= 3 n)
          (and (< 1 n)
               (odd? n)
               (not-any? (partial divides? n)
                         (range 3 (inc (Math/sqrt n)) 2))))))
(defn prime?
  "Tests the primality of n. Note for n larger than 10000 this function is probalitic."
 [n]
  (assert-number n)
  (cond
   (= 2 n) true
   (even? n) false
   (and (= "5" (last (str n))) (< 1 (count (str n)))) false
   (< n 100000) (trial-division n)
   :else (miller-rabin n)))


(defn lazy-primes
  "Returns a lazy sequence of primes."
  []
  (letfn [(enqueue [sieve n step]
            (let [m (+ n step)]
              (if (sieve m)
                (recur sieve m step)
                (assoc sieve m step))))
          (next-sieve [sieve candidate]
            (if-let [step (sieve candidate)]
              (-> sieve
                  (dissoc candidate)
                  (enqueue candidate step))
              (enqueue sieve candidate (+ candidate candidate))))
          (next-primes [sieve candidate]
            (if (sieve candidate)
              (recur (next-sieve sieve candidate) (+ candidate 2))
              (cons candidate 
                    (lazy-seq (next-primes (next-sieve sieve candidate) 
                                           (+ candidate 2))))))]
    (cons 2 (lazy-seq (next-primes {} 3)))))

(defn primes
  "Returns a list of the first n primes."
  [n]
  (take n (lazy-primes)))

(defn nth-prime
  "Returns the nth prime."
  [n]
  (last (take n (lazy-primes))))

(defn primes<
  "Returns a list of all primes less than n"
  [n]
  (take-while #(< % n) (lazy-primes)))

;; Factorization
(defn- lenstra-elliptic-curve
  [n]
  (letfn [(pick-x-y-a
            [n]
            (for [_ (range 3)] (rand-int n)))
          (pick-curve
            [n]
            (let [[x y a] (pick-x-y-a n)]
              '(a (mod (- (modexp y 2 n) (modexp x 3 n) (mod (* a x)))))))
          (pick-point
            [n]
            ())]))

(defn p-1-factorization
  [n]
  (if (prime? n)
    n
    (letfn [(modular-factorial
              [a B n]
              (loop [b (mod a n)
                     j 1]
                (if (= j B)
                  b
                  (recur (modexp b (inc j) n) (inc j)))))
            (choose-coprime [n]
              (loop [a 3]
                (if (= 1 (gcd n a))
                  a
                  (recur (+ 2 a)))))]
      (loop [a (if (odd? n)
                 2
                 (choose-coprime n))
             B 5]
        (let [d (gcd (- (modular-factorial a B n) 1) n)]
          (if (< 1 d n)
            d
            (recur a (if (= d 1)
                       (inc B)
                       (dec B)))))))))

(defn factors
  "Finds all prime factors of n."
  [n]
  (assert-number n)
  (let [facts (for [x (primes 168) :let [y (mod n x)] :when (zero? y)] x)
        n (/ n (reduce * facts))]
    (loop [n n
           facts facts]
      (cond (= 1 n) (sort facts)
            (= "5" (last (str n))) (recur (/ n 5) (conj facts 5))
            (even? n) (recur (/ n 2) (conj facts 2))
            :else (let [f (p-1-factorization n)]
                    (if (prime? f)
                      (recur (/ n f) (conj facts f))
                      (recur (/ n f) (concat facts (factors f)))))))))
