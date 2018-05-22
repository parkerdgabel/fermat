// Compiled by ClojureScript 1.9.946 {}
goog.provide('fermat.core');
goog.require('cljs.core');
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
if(cljs.core._EQ_.call(null,num,(0))){
return (1);
} else {
var b = base;
var n = num;
while(true){
if((n === (0))){
return b;
} else {
if(cljs.core.even_QMARK_.call(null,n)){
var G__45503 = (b * b);
var G__45504 = (n / (2));
b = G__45503;
n = G__45504;
continue;
} else {
var G__45505 = (b * b);
var G__45506 = cljs.core.quot.call(null,n,(2));
b = G__45505;
n = G__45506;
continue;
}
}
break;
}

}
}
});
/**
 * Returns the greatest common denominator of a and b.
 */
fermat.core.gcd = (function fermat$core$gcd(a,b){
while(true){
if((b === (0))){
return a;
} else {
var G__45507 = b;
var G__45508 = cljs.core.mod.call(null,a,b);
a = G__45507;
b = G__45508;
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
var G__45509 = (s0 - (q * s));
var G__45510 = s;
var G__45511 = (t0 - (q * t));
var G__45512 = t;
var G__45513 = (r0 - (q * r));
var G__45514 = r;
s = G__45509;
s0 = G__45510;
t = G__45511;
t0 = G__45512;
r = G__45513;
r0 = G__45514;
continue;
}
break;
}

}
}
});
/**
 * Computes the modular exponent of a mod m (i.e a^e mod m)
 */
fermat.core.modexp = (function fermat$core$modexp(a,e,m){
fermat.core.m_STAR_ = (function fermat$core$modexp_$_m_STAR_(p,q){
return cljs.core.mod.call(null,(p * q),m);
});

var a__$1 = a;
var e__$1 = e;
var x = (1);
while(true){
if((e__$1 === (0))){
return x;
} else {
if(cljs.core.even_QMARK_.call(null,e__$1)){
var G__45515 = fermat.core.m_STAR_.call(null,a__$1,a__$1);
var G__45516 = (e__$1 / (2));
var G__45517 = x;
a__$1 = G__45515;
e__$1 = G__45516;
x = G__45517;
continue;
} else {
var G__45518 = fermat.core.m_STAR_.call(null,a__$1,a__$1);
var G__45519 = cljs.core.quot.call(null,e__$1,(2));
var G__45520 = fermat.core.m_STAR_.call(null,a__$1,x);
a__$1 = G__45518;
e__$1 = G__45519;
x = G__45520;
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
 *  Main routine to return the chinese remainder 
 */
fermat.core.chinese_remainder = (function fermat$core$chinese_remainder(n,a){
var prod = cljs.core.apply.call(null,cljs.core._STAR_,n);
var reducer = ((function (prod){
return (function (sum,p__45521){
var vec__45522 = p__45521;
var n_i = cljs.core.nth.call(null,vec__45522,(0),null);
var a_i = cljs.core.nth.call(null,vec__45522,(1),null);
var p = cljs.core.quot.call(null,prod,n_i);
var egcd = fermat.core.extended_gcd.call(null,p,n_i);
var inv_p = cljs.core.second.call(null,egcd);
return (sum + ((a_i * inv_p) * p));
});})(prod))
;
var sum_prod = cljs.core.reduce.call(null,reducer,(0),cljs.core.map.call(null,cljs.core.vector,n,a));
return cljs.core.mod.call(null,sum_prod,prod);
});
fermat.core.find_k_m = (function fermat$core$find_k_m(n){
var m = (n - (1));
var k = (0);
while(true){
if(cljs.core.odd_QMARK_.call(null,m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,m], null);
} else {
var G__45525 = (m / (2));
var G__45526 = (k + (1));
m = G__45525;
k = G__45526;
continue;
}
break;
}
});
fermat.core.miller_rabin = (function fermat$core$miller_rabin(n){
var km = fermat.core.find_k_m.call(null,n);
var a = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(n - (1))));
var b0 = fermat.core.modexp.call(null,a,cljs.core.nth.call(null,km,(1)),n);
if((cljs.core._EQ_.call(null,cljs.core.mod.call(null,b0,n),(1))) || (cljs.core._EQ_.call(null,cljs.core.mod.call(null,b0,n),(n - (1))))){
return true;
} else {
var b = fermat.core.modexp.call(null,b0,(2),n);
var cnt = (1);
while(true){
if(cljs.core._EQ_.call(null,cnt,(cljs.core.nth.call(null,km,(0)) - (1)))){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,b,n),(n - (1)));
} else {
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,b,n),(1))){
return false;
} else {
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,b,n),(n - (1)))){
return true;
} else {
var G__45527 = fermat.core.modexp.call(null,b,(2),n);
var G__45528 = (cnt + (1));
b = G__45527;
cnt = G__45528;
continue;

}
}
}
break;
}
}
});

//# sourceMappingURL=core.js.map?rel=1525550590682
