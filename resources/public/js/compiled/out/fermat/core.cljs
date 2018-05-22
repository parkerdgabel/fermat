(ns fermat.core)

(defn abs
  "Returns the absolute value of x."
  [x]
  (cond
    (< 0 x) x
    (< x 0) (- x)
    :else 0))
; Needs Fixing
(defn exp
  "Returns the base multiblied num times."
  [base num]
  (cond
    (< num 0) (exp (/ 1 base) (- num))
    (= num 0) 1
    :else
    (loop [b base, n num]
      (if (zero? n)
        b
        (if (even? n)
          (recur (* b b) (/ n 2))
          (recur (* b b) (quot n 2)))))))

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
  (defn m* [p q] (mod (* p q) m))
  (loop [a a, e e, x 1]
    (if (zero? e)
      x
      (if (even? e)
        (recur (m* a a) (/ e 2) x)
        (recur (m* a a) (quot e 2) (m* a x))))))

(defn modinv
  "Returns the modular inverse of a modulo n."
  [a n]
  (let [f (extended-gcd a n)
        gcd (get f 0)
        ainv (get f 1)]
    (if (= gcd 1)
      ainv)))

(defn chinese_remainder
  " Main routine to return the chinese remainder "
  [n a]
  (let [prod (apply * n)
        reducer (fn [sum [n_i a_i]]
                  (let [p (quot prod n_i)
                        egcd (extended-gcd p n_i)
                        inv_p (second egcd)]
                    (+ sum (* a_i inv_p p))))
        sum-prod (reduce reducer 0 (map vector n a))]
    (mod sum-prod prod)))

(defn- find-k-m
  [n]
  (loop [m (dec n)
         k 0]
    (if (odd? m)
      [k m]
      (recur (/ m 2) (inc k)))))

(defn miller-rabin
  [n]
  (let [km (find-k-m n)
        a (rand-nth (range 2 (dec n)))
        b0 (modexp a (nth km 1) n)]
    (if (or (= (mod b0 n) 1) (= (mod b0 n) (dec n)))
      true
      (loop [b (modexp b0 2 n),
             cnt 1]
        (cond
          (= cnt (dec (nth km 0))) (= (mod b n) (dec n))
          (= (mod b n) 1) false
          (= (mod b n) (dec n)) true
          :else (recur (modexp b 2 n) (inc cnt)))))))
