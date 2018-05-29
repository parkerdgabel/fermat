// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('fermat.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.math');
goog.require('cats.core');
goog.require('cats.builtin');
goog.require('cats.monad.maybe');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fermat.core","pos-num","fermat.core/pos-num",1883639536),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50546#","p1__50546#",-550950505,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"p1__50546#","p1__50546#",-550950505,null))),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"%","%",-950237169,null))),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__50546_SHARP_){
return ((0) <= p1__50546_SHARP_);
}),cljs.core.int_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fermat.core","prime","fermat.core/prime",-196924276),new cljs.core.Symbol("fermat.core","prime?","fermat.core/prime?",151213317,null),fermat.core.prime_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fermat.core","coprime","fermat.core/coprime",-2050234310),new cljs.core.Symbol("fermat.core","coprime?","fermat.core/coprime?",-466983215,null),fermat.core.coprime_QMARK_);
/**
 * Returns the absolute value of x.
 */
fermat.core.abs = (function fermat$core$abs(x){
if(((0) < x)){
return x;
} else {
if((x < (0))){
return (- x);
} else {
return (0);

}
}
});
/**
 * Returns the base multiblied num times.
 */
fermat.core.exp = (function fermat$core$exp(base,num){
if((num < (0))){
return fermat.core.exp.call(null,((1) / base),(- num));
} else {
if((num === (0))){
return (1);
} else {
var b = base;
var n = num;
var a = (1);
while(true){
if((n === (0))){
return a;
} else {
if(cljs.core.even_QMARK_.call(null,n)){
var G__50547 = (b * b);
var G__50548 = (n / (2));
var G__50549 = a;
b = G__50547;
n = G__50548;
a = G__50549;
continue;
} else {
var G__50550 = b;
var G__50551 = (n - (1));
var G__50552 = (b * a);
b = G__50550;
n = G__50551;
a = G__50552;
continue;
}
}
break;
}

}
}
});
/**
 * Computes the factorial of n.
 */
fermat.core.factorial = (function fermat$core$factorial(n){
if((n <= (0))){
return (0);
} else {
var fact = (function fermat$core$factorial_$_fact(n__$1){
if(cljs.core._EQ_.call(null,(1),n__$1)){
return (1);
} else {
return (n__$1 * fermat$core$factorial_$_fact.call(null,(n__$1 - (1))));
}
});
return fact.call(null,n);
}
});
/**
 * Returns the quotient and remainder of a.
 */
fermat.core.divmod = (function fermat$core$divmod(a,n){
if(cljs.core.truth_((function (){var and__41174__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","pos-num","fermat.core/pos-num",1883639536),a);
if(cljs.core.truth_(and__41174__auto__)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","pos-num","fermat.core/pos-num",1883639536),n);
} else {
return and__41174__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (s/valid? :fermat.core/pos-num a) (s/valid? :fermat.core/pos-num n))"));
}

var x__42140__auto__ = cljs.core.quot.call(null,a,n);
return cljs.core._conj.call(null,(function (){var x__42140__auto____$1 = cljs.core.mod.call(null,a,n);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto____$1);
})(),x__42140__auto__);
});
/**
 * Returns the greatest common denominator of a and b.
 */
fermat.core.gcd = (function fermat$core$gcd(a,b){
while(true){
if(cljs.core.truth_((function (){var and__41174__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),a);
if(cljs.core.truth_(and__41174__auto__)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),b);
} else {
return and__41174__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (s/valid? :fermat.core/int a) (s/valid? :fermat.core/int b))"));
}

if((b === (0))){
return a;
} else {
var G__50553 = b;
var G__50554 = cljs.core.mod.call(null,a,b);
a = G__50553;
b = G__50554;
continue;
}
break;
}
});
/**
 * The extended Euclidean algorithm
 *   Returns a list containing the GCD and the Bézout coefficients
 *   corresponding to the inputs. 
 */
fermat.core.extended_gcd = (function fermat$core$extended_gcd(a,b){
if(cljs.core.truth_((function (){var and__41174__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),a);
if(cljs.core.truth_(and__41174__auto__)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),b);
} else {
return and__41174__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (s/valid? :fermat.core/int a) (s/valid? :fermat.core/int b))"));
}

if((a === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fermat.core.abs.call(null,b),(0),(1)], null);
} else {
if((b === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fermat.core.abs.call(null,a),(1),(0)], null);
} else {
var s = (0);
var s0 = (1);
var t = (1);
var t0 = (0);
var r = fermat.core.abs.call(null,b);
var r0 = fermat.core.abs.call(null,a);
while(true){
if((r === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r0,s0,t0], null);
} else {
var q = cljs.core.quot.call(null,r0,r);
var G__50555 = (s0 - (q * s));
var G__50556 = s;
var G__50557 = (t0 - (q * t));
var G__50558 = t;
var G__50559 = (r0 - (q * r));
var G__50560 = r;
s = G__50555;
s0 = G__50556;
t = G__50557;
t0 = G__50558;
r = G__50559;
r0 = G__50560;
continue;
}
break;
}

}
}
});
/**
 * Returns the nearest integer less than n.
 */
fermat.core.floor = (function fermat$core$floor(n){
if(cljs.core.int_QMARK_.call(null,n)){
return n;
} else {
return (n | (0));
}
});
/**
 * Returns the cieling of n.
 */
fermat.core.ciel = (function fermat$core$ciel(n){
if(cljs.core.int_QMARK_.call(null,n)){
return n;
} else {
if(((0) < n)){
return ((1) + (n | (0)));
} else {
return ((n | (0)) - (1));
}
}
});
/**
 * Checks whether a and n are coprime.
 */
fermat.core.coprime_QMARK_ = (function fermat$core$coprime_QMARK_(a,n){
if(cljs.core.truth_((function (){var and__41174__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),a);
if(cljs.core.truth_(and__41174__auto__)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),n);
} else {
return and__41174__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (s/valid? :fermat.core/int a) (s/valid? :fermat.core/int n))"));
}

return cljs.core._EQ_.call(null,(1),fermat.core.gcd.call(null,a,n));
});
/**
 * Computes the modular exponent of a mod m (i.e a^e mod m)
 */
fermat.core.modexp = (function fermat$core$modexp(a,e,m){
if(cljs.core.truth_((function (){var and__41174__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),a);
if(cljs.core.truth_(and__41174__auto__)){
var and__41174__auto____$1 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),e);
if(cljs.core.truth_(and__41174__auto____$1)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fermat.core","int","fermat.core/int",-825491930),m);
} else {
return and__41174__auto____$1;
}
} else {
return and__41174__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (s/valid? :fermat.core/int a) (s/valid? :fermat.core/int e) (s/valid? :fermat.core/int m))"));
}

var _STAR__STAR_ = (function fermat$core$modexp_$__STAR__STAR_(p,q,m__$1){
return cljs.core.mod.call(null,(p * q),m__$1);
});
var a__$1 = cljs.core.mod.call(null,a,m);
var e__$1 = cljs.core.mod.call(null,e,fermat.core.totient.call(null,m));
var x = (1);
while(true){
if((e__$1 === (0))){
return x;
} else {
if(cljs.core.even_QMARK_.call(null,e__$1)){
var G__50561 = _STAR__STAR_.call(null,a__$1,a__$1,m);
var G__50562 = (e__$1 / (2));
var G__50563 = x;
a__$1 = G__50561;
e__$1 = G__50562;
x = G__50563;
continue;
} else {
var G__50564 = _STAR__STAR_.call(null,a__$1,a__$1,m);
var G__50565 = cljs.core.quot.call(null,e__$1,(2));
var G__50566 = _STAR__STAR_.call(null,a__$1,x,m);
a__$1 = G__50564;
e__$1 = G__50565;
x = G__50566;
continue;
}
}
break;
}
});
/**
 * Returns the modular inverse of a modulo n.
 */
fermat.core.modinv = (function fermat$core$modinv(a,n){
var f = fermat.core.extended_gcd.call(null,a,n);
var gcd = cljs.core.get.call(null,f,(0));
var ainv = cljs.core.get.call(null,f,(1));
if(cljs.core._EQ_.call(null,gcd,(1))){
return ainv;
} else {
return null;
}
});
/**
 * Euler-totient function for n
 */
fermat.core.totient = (function fermat$core$totient(n){
fermat.core.assert_number.call(null,n);

if(cljs.core.truth_(fermat.core.prime_QMARK_.call(null,n))){
return (n - (1));
} else {
return (n * cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__50567_SHARP_){
return ((1) - ((1) / p1__50567_SHARP_));
}),fermat.core.factors.call(null,n)))));
}
});
/**
 * Finds the order of a modulo n.(i.e. the smallest r > 1 such that a^r = 1 mod n)
 */
fermat.core.order = (function fermat$core$order(a,n){
if(cljs.core.truth_(fermat.core.coprime_QMARK_.call(null,a,n))){
var r = (1);
while(true){
if(cljs.core._EQ_.call(null,fermat.core.modexp.call(null,a,r,n),(1))){
return r;
} else {
var G__50568 = (r + (1));
r = G__50568;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Returns the first primitve root of a given prime number.
 */
fermat.core.primitive_root = (function fermat$core$primitive_root(p){
fermat.core.assert_prime.call(null,p);

var s = (p - (1));
var facts = cljs.core.set.call(null,fermat.core.factors.call(null,s));
var a = (2);
while(true){
if(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (a,s,facts){
return (function (p1__50569_SHARP_){
return cljs.core._EQ_.call(null,(1),p1__50569_SHARP_);
});})(a,s,facts))
,cljs.core.map.call(null,((function (a,s,facts){
return (function (p1__50570_SHARP_){
return fermat.core.modexp.call(null,a,(s / p1__50570_SHARP_),p);
});})(a,s,facts))
,facts)))){
return a;
} else {
var G__50571 = (a + (1));
a = G__50571;
continue;
}
break;
}
});
/**
 * Computes the smoothness of n.
 */
fermat.core.smoothness = (function fermat$core$smoothness(n){
return cljs.core.reduce.call(null,cljs.core.max,fermat.core.factors.call(null,n));
});
/**
 * Estimates the number of primes less than n. THIS IS NOT THE NUMBER PI! Its just the name of the functio used by mathematicians.
 */
fermat.core.pi = (function fermat$core$pi(n){
return (n / Math.log(n));
});
/**
 * Computes the Legendre symbol for a and p. p must be prime.
 */
fermat.core.legendre = (function fermat$core$legendre(a,p){
fermat.core.assert_prime.call(null,p);

var val = fermat.core.modexp.call(null,a,((p - (1)) / (2)),p);
if(cljs.core._EQ_.call(null,(1),val)){
return val;
} else {
return (- (1));
}
});
/**
 * Main routine to return the chinese remainder
 */
fermat.core.chinese_remainder = (function fermat$core$chinese_remainder(n,a){
var prod = cljs.core.apply.call(null,cljs.core._STAR_,n);
var reducer = ((function (prod){
return (function (sum,p__50572){
var vec__50573 = p__50572;
var n_i = cljs.core.nth.call(null,vec__50573,(0),null);
var a_i = cljs.core.nth.call(null,vec__50573,(1),null);
var p = cljs.core.quot.call(null,prod,n_i);
var egcd = fermat.core.extended_gcd.call(null,p,n_i);
var inv_p = cljs.core.second.call(null,egcd);
return (sum + ((a_i * inv_p) * p));
});})(prod))
;
var sum_prod = cljs.core.reduce.call(null,reducer,(0),cljs.core.map.call(null,cljs.core.vector,n,a));
return cljs.core.mod.call(null,sum_prod,prod);
});
/**
 * Rewrites n as 2k*m with m odd.
 */
fermat.core.find_k_m = (function fermat$core$find_k_m(n){
var m = (n - (1));
var k = (0);
while(true){
if(cljs.core.odd_QMARK_.call(null,m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,m], null);
} else {
var G__50576 = (m / (2));
var G__50577 = (k + (1));
m = G__50576;
k = G__50577;
continue;
}
break;
}
});
/**
 * Generates k random numbers in between 2 and n-2. Helper function for Miller-Rabin Primality Test.
 */
fermat.core.k_rand_nums = (function fermat$core$k_rand_nums(k,n){
var nums = cljs.core.range.call(null,(2),(n - (2)));
var ret_set = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,k,cljs.core.count.call(null,ret_set))){
return ret_set;
} else {
var G__50578 = cljs.core.conj.call(null,ret_set,cljs.core.rand_nth.call(null,nums));
ret_set = G__50578;
continue;
}
break;
}
});
/**
 * Miller-Rabin primality test. Note this is a probabalistic primality test. It is not guarenteed to work.
 */
fermat.core.random_miller_rabin = (function fermat$core$random_miller_rabin(n){
fermat.core.assert_number.call(null,n);

var vec__50580 = fermat.core.find_k_m.call(null,n);
var k = cljs.core.nth.call(null,vec__50580,(0),null);
var m = cljs.core.nth.call(null,vec__50580,(1),null);
var single_test = ((function (vec__50580,k,m){
return (function (a,m__$1){
var y = fermat.core.modexp.call(null,a,k,n);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([y]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(n - (1))], null)))){
return true;
} else {
var x = fermat.core.modexp.call(null,y,(2),n);
var r = k;
while(true){
if(cljs.core._EQ_.call(null,x,(1))){
return false;
} else {
if(cljs.core._EQ_.call(null,x,(n - (1)))){
return true;
} else {
if(cljs.core._EQ_.call(null,(k - (1)),r)){
return false;
} else {
var G__50583 = fermat.core.modexp.call(null,x,(2),n);
var G__50584 = (r - (1));
x = G__50583;
r = G__50584;
continue;

}
}
}
break;
}
}
});})(vec__50580,k,m))
;
return cljs.core.not_any_QMARK_.call(null,((function (vec__50580,k,m,single_test){
return (function (p1__50579_SHARP_){
return cljs.core._EQ_.call(null,true,single_test.call(null,p1__50579_SHARP_,m));
});})(vec__50580,k,m,single_test))
,fermat.core.k_rand_nums.call(null,(function (){var x__41545__auto__ = (1000);
var y__41546__auto__ = cljs.core.quot.call(null,n,(2));
return ((x__41545__auto__ < y__41546__auto__) ? x__41545__auto__ : y__41546__auto__);
})(),n));
});
/**
 * Primality by trial division.
 */
fermat.core.trial_division = (function fermat$core$trial_division(n){
fermat.core.assert_number.call(null,n);

var divides_QMARK_ = (function (k,n__$1){
return (cljs.core.mod.call(null,k,n__$1) === (0));
});
if(((n === (0))) || (cljs.core._EQ_.call(null,(1),n))){
return false;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return true;
} else {
var prims = fermat.core.primes_LT_.call(null,(((1) + Math.sqrt(n)) | (0)));
while(true){
if(cljs.core.empty_QMARK_.call(null,prims)){
return true;
} else {
if(cljs.core.truth_(divides_QMARK_.call(null,n,cljs.core.first.call(null,prims)))){
return false;
} else {
var G__50585 = cljs.core.rest.call(null,prims);
prims = G__50585;
continue;

}
}
break;
}

}
}
});
fermat.core.fermat_primality = (function fermat$core$fermat_primality(n){
var a = ((cljs.core.odd_QMARK_.call(null,n))?(2):(function (){var x = (3);
while(true){
if(cljs.core.truth_(fermat.core.coprime_QMARK_.call(null,x,n))){
return x;
} else {
var G__50586 = ((2) + x);
x = G__50586;
continue;
}
break;
}
})());
return cljs.core._EQ_.call(null,(1),fermat.core.modexp.call(null,a,(n - (1)),n));
});
/**
 * Tests the primality of n. Note for n larger than 10000 this function is probalitic.
 */
fermat.core.prime_QMARK_ = (function fermat$core$prime_QMARK_(n){
fermat.core.assert_number.call(null,n);

if(cljs.core._EQ_.call(null,(2),n)){
return true;
} else {
if(cljs.core.even_QMARK_.call(null,n)){
return false;
} else {
if((n < (100000))){
return fermat.core.trial_division.call(null,n);
} else {
var and__41174__auto__ = fermat.core.fermat_primality.call(null,n);
if(cljs.core.truth_(and__41174__auto__)){
return fermat.core.random_miller_rabin.call(null,n);
} else {
return and__41174__auto__;
}

}
}
}
});
/**
 * Returns a lazy sequence of primes.
 */
fermat.core.lazy_primes = (function fermat$core$lazy_primes(){
var enqueue = (function fermat$core$lazy_primes_$_enqueue(sieve,n,step){
while(true){
var m = (n + step);
if(cljs.core.truth_(sieve.call(null,m))){
var G__50587 = sieve;
var G__50588 = m;
var G__50589 = step;
sieve = G__50587;
n = G__50588;
step = G__50589;
continue;
} else {
return cljs.core.assoc.call(null,sieve,m,step);
}
break;
}
});
var next_sieve = (function fermat$core$lazy_primes_$_next_sieve(sieve,candidate){
var temp__5455__auto__ = sieve.call(null,candidate);
if(cljs.core.truth_(temp__5455__auto__)){
var step = temp__5455__auto__;
return enqueue.call(null,cljs.core.dissoc.call(null,sieve,candidate),candidate,step);
} else {
return enqueue.call(null,sieve,candidate,(candidate + candidate));
}
});
var next_primes = (function fermat$core$lazy_primes_$_next_primes(sieve,candidate){
while(true){
if(cljs.core.truth_(sieve.call(null,candidate))){
var G__50590 = next_sieve.call(null,sieve,candidate);
var G__50591 = (candidate + (2));
sieve = G__50590;
candidate = G__50591;
continue;
} else {
return cljs.core.cons.call(null,candidate,(new cljs.core.LazySeq(null,((function (sieve,candidate){
return (function (){
return fermat$core$lazy_primes_$_next_primes.call(null,next_sieve.call(null,sieve,candidate),(candidate + (2)));
});})(sieve,candidate))
,null,null)));
}
break;
}
});
return cljs.core.cons.call(null,(2),(new cljs.core.LazySeq(null,(function (){
return next_primes.call(null,cljs.core.PersistentArrayMap.EMPTY,(3));
}),null,null)));
});
/**
 * Returns a list of the first n primes.
 */
fermat.core.primes = (function fermat$core$primes(n){
return cljs.core.take.call(null,n,fermat.core.lazy_primes.call(null));
});
/**
 * Returns the nth prime.
 */
fermat.core.nth_prime = (function fermat$core$nth_prime(n){
return cljs.core.last.call(null,cljs.core.take.call(null,n,fermat.core.lazy_primes.call(null)));
});
/**
 * Returns a list of all primes less than n
 */
fermat.core.primes_LT_ = (function fermat$core$primes_LT_(n){
return cljs.core.take_while.call(null,(function (p1__50592_SHARP_){
return (p1__50592_SHARP_ < n);
}),fermat.core.lazy_primes.call(null));
});
/**
 * Computes a single factor of n. May or may not be prime.
 */
fermat.core.p_1_factorization = (function fermat$core$p_1_factorization(n){
if(cljs.core.truth_(fermat.core.prime_QMARK_.call(null,n))){
return n;
} else {
var modular_factorial = (function fermat$core$p_1_factorization_$_modular_factorial(a,B,n__$1){
var b = cljs.core.mod.call(null,a,n__$1);
var j = (1);
while(true){
if(cljs.core._EQ_.call(null,j,B)){
return b;
} else {
var G__50593 = fermat.core.modexp.call(null,b,(j + (1)),n__$1);
var G__50594 = (j + (1));
b = G__50593;
j = G__50594;
continue;
}
break;
}
});
var choose_coprime = (function fermat$core$p_1_factorization_$_choose_coprime(n__$1){
var a = (3);
while(true){
if(cljs.core.truth_(fermat.core.coprime_QMARK_.call(null,a,n__$1))){
return a;
} else {
var G__50595 = ((2) + a);
a = G__50595;
continue;
}
break;
}
});
var a = ((cljs.core.odd_QMARK_.call(null,n))?(2):choose_coprime.call(null,n));
var B = (5);
while(true){
var d = fermat.core.gcd.call(null,(modular_factorial.call(null,a,B,n) - (1)),n);
if((((1) < d)) && ((d < n))){
return d;
} else {
var G__50596 = a;
var G__50597 = ((cljs.core._EQ_.call(null,d,(1)))?(B + (1)):(B - (1)));
a = G__50596;
B = G__50597;
continue;
}
break;
}
}
});
/**
 * Finds all prime factors of n.
 */
fermat.core.factors = (function fermat$core$factors(n){
fermat.core.assert_number.call(null,n);

var facts = (function (){var iter__42068__auto__ = (function fermat$core$factors_$_iter__50598(s__50599){
return (new cljs.core.LazySeq(null,(function (){
var s__50599__$1 = s__50599;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__50599__$1);
if(temp__5457__auto__){
var s__50599__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50599__$2)){
var c__42066__auto__ = cljs.core.chunk_first.call(null,s__50599__$2);
var size__42067__auto__ = cljs.core.count.call(null,c__42066__auto__);
var b__50601 = cljs.core.chunk_buffer.call(null,size__42067__auto__);
if((function (){var i__50600 = (0);
while(true){
if((i__50600 < size__42067__auto__)){
var x = cljs.core._nth.call(null,c__42066__auto__,i__50600);
var y = cljs.core.mod.call(null,n,x);
if((y === (0))){
cljs.core.chunk_append.call(null,b__50601,x);

var G__50602 = (i__50600 + (1));
i__50600 = G__50602;
continue;
} else {
var G__50603 = (i__50600 + (1));
i__50600 = G__50603;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50601),fermat$core$factors_$_iter__50598.call(null,cljs.core.chunk_rest.call(null,s__50599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50601),null);
}
} else {
var x = cljs.core.first.call(null,s__50599__$2);
var y = cljs.core.mod.call(null,n,x);
if((y === (0))){
return cljs.core.cons.call(null,x,fermat$core$factors_$_iter__50598.call(null,cljs.core.rest.call(null,s__50599__$2)));
} else {
var G__50604 = cljs.core.rest.call(null,s__50599__$2);
s__50599__$1 = G__50604;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__42068__auto__.call(null,fermat.core.primes.call(null,(168)));
})();
var n__$1 = (n / cljs.core.reduce.call(null,cljs.core._STAR_,facts));
var n__$2 = n__$1;
var facts__$1 = facts;
while(true){
if(cljs.core._EQ_.call(null,(1),n__$2)){
return cljs.core.sort.call(null,facts__$1);
} else {
if(cljs.core._EQ_.call(null,"5",cljs.core.last.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n__$2)].join('')))){
var G__50605 = (n__$2 / (5));
var G__50606 = cljs.core.conj.call(null,facts__$1,(5));
n__$2 = G__50605;
facts__$1 = G__50606;
continue;
} else {
if(cljs.core.even_QMARK_.call(null,n__$2)){
var G__50607 = (n__$2 / (2));
var G__50608 = cljs.core.conj.call(null,facts__$1,(2));
n__$2 = G__50607;
facts__$1 = G__50608;
continue;
} else {
var f = fermat.core.p_1_factorization.call(null,n__$2);
if(cljs.core.truth_(fermat.core.prime_QMARK_.call(null,f))){
var G__50609 = (n__$2 / f);
var G__50610 = cljs.core.conj.call(null,facts__$1,f);
n__$2 = G__50609;
facts__$1 = G__50610;
continue;
} else {
var G__50611 = (n__$2 / f);
var G__50612 = cljs.core.concat.call(null,facts__$1,fermat.core.factors.call(null,f));
n__$2 = G__50611;
facts__$1 = G__50612;
continue;
}

}
}
}
break;
}
});
fermat.core.baby_step_giant_step = (function fermat$core$baby_step_giant_step(alpha,beta,p,N){
fermat.core.assert_prime.call(null,p);

if(((p - (1)) <= (N * N))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%s^2 must be greater that %s.",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(N)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((p - (1)))].join(''))),"\n","(<= (dec p) (* N N))"].join('')));
}

var seq__50613_50620 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [alpha,beta,N], null));
var chunk__50614_50621 = null;
var count__50615_50622 = (0);
var i__50616_50623 = (0);
while(true){
if((i__50616_50623 < count__50615_50622)){
var x_50624 = cljs.core._nth.call(null,chunk__50614_50621,i__50616_50623);
fermat.core.assert_number.call(null,x_50624);

var G__50625 = seq__50613_50620;
var G__50626 = chunk__50614_50621;
var G__50627 = count__50615_50622;
var G__50628 = (i__50616_50623 + (1));
seq__50613_50620 = G__50625;
chunk__50614_50621 = G__50626;
count__50615_50622 = G__50627;
i__50616_50623 = G__50628;
continue;
} else {
var temp__5457__auto___50629 = cljs.core.seq.call(null,seq__50613_50620);
if(temp__5457__auto___50629){
var seq__50613_50630__$1 = temp__5457__auto___50629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50613_50630__$1)){
var c__42117__auto___50631 = cljs.core.chunk_first.call(null,seq__50613_50630__$1);
var G__50632 = cljs.core.chunk_rest.call(null,seq__50613_50630__$1);
var G__50633 = c__42117__auto___50631;
var G__50634 = cljs.core.count.call(null,c__42117__auto___50631);
var G__50635 = (0);
seq__50613_50620 = G__50632;
chunk__50614_50621 = G__50633;
count__50615_50622 = G__50634;
i__50616_50623 = G__50635;
continue;
} else {
var x_50636 = cljs.core.first.call(null,seq__50613_50630__$1);
fermat.core.assert_number.call(null,x_50636);

var G__50637 = cljs.core.next.call(null,seq__50613_50630__$1);
var G__50638 = null;
var G__50639 = (0);
var G__50640 = (0);
seq__50613_50620 = G__50637;
chunk__50614_50621 = G__50638;
count__50615_50622 = G__50639;
i__50616_50623 = G__50640;
continue;
}
} else {
}
}
break;
}

var build_baby_steps = (function fermat$core$baby_step_giant_step_$_build_baby_steps(alpha__$1,p__$1,N__$1){
var baby_map = cljs.core.PersistentArrayMap.EMPTY;
var j = (0);
while(true){
if(cljs.core._EQ_.call(null,j,N__$1)){
return baby_map;
} else {
var G__50641 = cljs.core.assoc.call(null,baby_map,fermat.core.modexp.call(null,alpha__$1,j,p__$1),j);
var G__50642 = (j + (1));
baby_map = G__50641;
j = G__50642;
continue;
}
break;
}
});
var check_giant_steps = (function fermat$core$baby_step_giant_step_$_check_giant_steps(alpha__$1,beta__$1,N__$1,p__$1,baby_steps){
var k = (0);
while(true){
var g_step = fermat.core.modexp.call(null,(beta__$1 * alpha__$1),(- (N__$1 * k)),p__$1);
if(cljs.core._EQ_.call(null,k,N__$1)){
return null;
} else {
if(cljs.core.contains_QMARK_.call(null,baby_steps,new cljs.core.Keyword(null,"g-step","g-step",2121505140))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,baby_steps,new cljs.core.Keyword(null,"g-step","g-step",2121505140)),(N__$1 * k)], null);
} else {
var G__50643 = (k + (1));
k = G__50643;
continue;

}
}
break;
}
});
var temp__5455__auto__ = check_giant_steps.call(null,alpha,beta,N,p,build_baby_steps.call(null,alpha,p,N));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__50617 = temp__5455__auto__;
var j = cljs.core.nth.call(null,vec__50617,(0),null);
var Nk = cljs.core.nth.call(null,vec__50617,(1),null);
return (j + Nk);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
