// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.gfredericks.exact.impl');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.math.Integer');
com.gfredericks.exact.impl.integer_QMARK_ = (function com$gfredericks$exact$impl$integer_QMARK_(x){
return (x instanceof goog.math.Integer);
});

/**
 * @interface
 */
com.gfredericks.exact.impl.Add = function(){};

com.gfredericks.exact.impl._add = (function com$gfredericks$exact$impl$_add(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$Add$_add$arity$2 == null)))){
return x.com$gfredericks$exact$impl$Add$_add$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._add[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._add["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"Add.-add",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.AddWithInteger = function(){};

com.gfredericks.exact.impl._add_with_integer = (function com$gfredericks$exact$impl$_add_with_integer(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$AddWithInteger$_add_with_integer$arity$2 == null)))){
return x.com$gfredericks$exact$impl$AddWithInteger$_add_with_integer$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._add_with_integer[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._add_with_integer["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"AddWithInteger.-add-with-integer",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.AddWithRatio = function(){};

com.gfredericks.exact.impl._add_with_ratio = (function com$gfredericks$exact$impl$_add_with_ratio(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$AddWithRatio$_add_with_ratio$arity$2 == null)))){
return x.com$gfredericks$exact$impl$AddWithRatio$_add_with_ratio$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._add_with_ratio[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._add_with_ratio["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"AddWithRatio.-add-with-ratio",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.Multiply = function(){};

com.gfredericks.exact.impl._multiply = (function com$gfredericks$exact$impl$_multiply(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$Multiply$_multiply$arity$2 == null)))){
return x.com$gfredericks$exact$impl$Multiply$_multiply$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._multiply[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._multiply["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"Multiply.-multiply",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.MultiplyWithInteger = function(){};

com.gfredericks.exact.impl._multiply_with_integer = (function com$gfredericks$exact$impl$_multiply_with_integer(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$MultiplyWithInteger$_multiply_with_integer$arity$2 == null)))){
return x.com$gfredericks$exact$impl$MultiplyWithInteger$_multiply_with_integer$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._multiply_with_integer[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._multiply_with_integer["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"MultiplyWithInteger.-multiply-with-integer",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.MultiplyWithRatio = function(){};

com.gfredericks.exact.impl._multiply_with_ratio = (function com$gfredericks$exact$impl$_multiply_with_ratio(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$MultiplyWithRatio$_multiply_with_ratio$arity$2 == null)))){
return x.com$gfredericks$exact$impl$MultiplyWithRatio$_multiply_with_ratio$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._multiply_with_ratio[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._multiply_with_ratio["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"MultiplyWithRatio.-multiply-with-ratio",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.Invert = function(){};

com.gfredericks.exact.impl._invert = (function com$gfredericks$exact$impl$_invert(x){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$Invert$_invert$arity$1 == null)))){
return x.com$gfredericks$exact$impl$Invert$_invert$arity$1(x);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._invert[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._invert["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Invert.-invert",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.Negate = function(){};

com.gfredericks.exact.impl._negate = (function com$gfredericks$exact$impl$_negate(x){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$Negate$_negate$arity$1 == null)))){
return x.com$gfredericks$exact$impl$Negate$_negate$arity$1(x);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._negate[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._negate["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Negate.-negate",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.Ordered = function(){};

com.gfredericks.exact.impl._compare = (function com$gfredericks$exact$impl$_compare(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$Ordered$_compare$arity$2 == null)))){
return x.com$gfredericks$exact$impl$Ordered$_compare$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._compare[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._compare["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"Ordered.-compare",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.CompareToInteger = function(){};

com.gfredericks.exact.impl._compare_to_integer = (function com$gfredericks$exact$impl$_compare_to_integer(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$CompareToInteger$_compare_to_integer$arity$2 == null)))){
return x.com$gfredericks$exact$impl$CompareToInteger$_compare_to_integer$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._compare_to_integer[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._compare_to_integer["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"CompareToInteger.-compare-to-integer",x);
}
}
}
});


/**
 * @interface
 */
com.gfredericks.exact.impl.CompareToRatio = function(){};

com.gfredericks.exact.impl._compare_to_ratio = (function com$gfredericks$exact$impl$_compare_to_ratio(x,y){
if((!((x == null))) && (!((x.com$gfredericks$exact$impl$CompareToRatio$_compare_to_ratio$arity$2 == null)))){
return x.com$gfredericks$exact$impl$CompareToRatio$_compare_to_ratio$arity$2(x,y);
} else {
var x__41836__auto__ = (((x == null))?null:x);
var m__41837__auto__ = (com.gfredericks.exact.impl._compare_to_ratio[goog.typeOf(x__41836__auto__)]);
if(!((m__41837__auto__ == null))){
return m__41837__auto__.call(null,x,y);
} else {
var m__41837__auto____$1 = (com.gfredericks.exact.impl._compare_to_ratio["_"]);
if(!((m__41837__auto____$1 == null))){
return m__41837__auto____$1.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"CompareToRatio.-compare-to-ratio",x);
}
}
}
});

com.gfredericks.exact.impl.gcd = (function com$gfredericks$exact$impl$gcd(x,y){
while(true){
if(cljs.core.truth_(y.isZero())){
return x;
} else {
var G__43455 = y;
var G__43456 = x.modulo(y);
x = G__43455;
y = G__43456;
continue;
}
break;
}
});
com.gfredericks.exact.impl.normalize = (function com$gfredericks$exact$impl$normalize(n,d){
if(cljs.core.truth_(d.isNegative())){
var n_SINGLEQUOTE_ = n.negate();
var d_SINGLEQUOTE_ = d.negate();
if(cljs.core.truth_(d_SINGLEQUOTE_.equals(goog.math.Integer.ONE))){
return n_SINGLEQUOTE_;
} else {
return com.gfredericks.exact.impl._ratio.call(null,n_SINGLEQUOTE_,d_SINGLEQUOTE_);
}
} else {
if(cljs.core.truth_(d.equals(goog.math.Integer.ONE))){
return n;
} else {
return com.gfredericks.exact.impl._ratio.call(null,n,d);
}
}
});

/**
* @constructor
 * @implements {com.gfredericks.exact.impl.Negate}
 * @implements {com.gfredericks.exact.impl.AddWithRatio}
 * @implements {com.gfredericks.exact.impl.MultiplyWithRatio}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {com.gfredericks.exact.impl.Invert}
 * @implements {com.gfredericks.exact.impl.Add}
 * @implements {com.gfredericks.exact.impl.AddWithInteger}
 * @implements {com.gfredericks.exact.impl.CompareToRatio}
 * @implements {com.gfredericks.exact.impl.Multiply}
 * @implements {com.gfredericks.exact.impl.Ordered}
 * @implements {com.gfredericks.exact.impl.MultiplyWithInteger}
 * @implements {com.gfredericks.exact.impl.Object}
 * @implements {cljs.core.IComparable}
 * @implements {com.gfredericks.exact.impl.CompareToInteger}
*/
com.gfredericks.exact.impl.Ratio = (function (n,d){
this.n = n;
this.d = d;
this.cljs$lang$protocol_mask$partition0$ = 6291456;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
com.gfredericks.exact.impl.Ratio.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["#ratio [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.d),"]"].join('');
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$AddWithInteger$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$AddWithInteger$_add_with_integer$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
return com.gfredericks.exact.impl._add_with_ratio.call(null,x__$1,com.gfredericks.exact.impl._ratio.call(null,y));
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$CompareToInteger$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$CompareToInteger$_compare_to_integer$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
return com.gfredericks.exact.impl._compare_to_ratio.call(null,x__$1,com.gfredericks.exact.impl._ratio.call(null,y));
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$AddWithRatio$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$AddWithRatio$_add_with_ratio$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
var _PLUS_ = com.gfredericks.exact.impl._add_with_integer;
var _STAR_ = com.gfredericks.exact.impl._multiply_with_integer;
var n_SINGLEQUOTE_ = _PLUS_.call(null,_STAR_.call(null,x__$1.n,y.d),_STAR_.call(null,x__$1.d,y.n));
var d_SINGLEQUOTE_ = _STAR_.call(null,x__$1.d,y.d);
var the_gcd = com.gfredericks.exact.impl.gcd.call(null,n_SINGLEQUOTE_,d_SINGLEQUOTE_);
return com.gfredericks.exact.impl.normalize.call(null,n_SINGLEQUOTE_.divide(the_gcd),d_SINGLEQUOTE_.divide(the_gcd));
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$CompareToRatio$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$CompareToRatio$_compare_to_ratio$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
var _STAR_ = com.gfredericks.exact.impl._multiply_with_integer;
return com.gfredericks.exact.impl._compare_to_integer.call(null,_STAR_.call(null,x__$1.n,y.d),_STAR_.call(null,y.n,x__$1.d));
});

com.gfredericks.exact.impl.Ratio.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((124790411) ^ cljs.core._hash.call(null,self__.n)) ^ cljs.core._hash.call(null,self__.d));
});

com.gfredericks.exact.impl.Ratio.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof com.gfredericks.exact.impl.Ratio)) && (cljs.core._EQ_.call(null,self__.n,other.n)) && (cljs.core._EQ_.call(null,self__.d,other.d));
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$MultiplyWithInteger$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$MultiplyWithInteger$_multiply_with_integer$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
return com.gfredericks.exact.impl._multiply.call(null,x__$1,com.gfredericks.exact.impl._ratio.call(null,y));
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Multiply$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Multiply$_multiply$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
return com.gfredericks.exact.impl._multiply_with_ratio.call(null,y,x__$1);
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Invert$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Invert$_invert$arity$1 = (function (x){
var self__ = this;
var x__$1 = this;
return com.gfredericks.exact.impl.normalize.call(null,self__.d,self__.n);
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Ordered$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Ordered$_compare$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
return (- com.gfredericks.exact.impl._compare_to_ratio.call(null,y,x__$1));
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Add$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Add$_add$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
return com.gfredericks.exact.impl._add_with_ratio.call(null,y,x__$1);
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Negate$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$Negate$_negate$arity$1 = (function (x){
var self__ = this;
var x__$1 = this;
return (new com.gfredericks.exact.impl.Ratio(com.gfredericks.exact.impl._negate.call(null,self__.n),self__.d));
});

com.gfredericks.exact.impl.Ratio.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
return com.gfredericks.exact.impl._compare.call(null,x__$1,y);
});

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$MultiplyWithRatio$ = cljs.core.PROTOCOL_SENTINEL;

com.gfredericks.exact.impl.Ratio.prototype.com$gfredericks$exact$impl$MultiplyWithRatio$_multiply_with_ratio$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
var _STAR_ = com.gfredericks.exact.impl._multiply_with_integer;
var n_SINGLEQUOTE_ = _STAR_.call(null,x__$1.n,y.n);
var d_SINGLEQUOTE_ = _STAR_.call(null,x__$1.d,y.d);
var the_gcd = com.gfredericks.exact.impl.gcd.call(null,n_SINGLEQUOTE_,d_SINGLEQUOTE_);
return com.gfredericks.exact.impl.normalize.call(null,n_SINGLEQUOTE_.divide(the_gcd),d_SINGLEQUOTE_.divide(the_gcd));
});

com.gfredericks.exact.impl.Ratio.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"d","d",-682293345,null)], null);
});

com.gfredericks.exact.impl.Ratio.cljs$lang$type = true;

com.gfredericks.exact.impl.Ratio.cljs$lang$ctorStr = "com.gfredericks.exact.impl/Ratio";

com.gfredericks.exact.impl.Ratio.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"com.gfredericks.exact.impl/Ratio");
});

com.gfredericks.exact.impl.__GT_Ratio = (function com$gfredericks$exact$impl$__GT_Ratio(n,d){
return (new com.gfredericks.exact.impl.Ratio(n,d));
});

com.gfredericks.exact.impl._ratio = (function com$gfredericks$exact$impl$_ratio(var_args){
var G__43458 = arguments.length;
switch (G__43458) {
case 1:
return com.gfredericks.exact.impl._ratio.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact.impl._ratio.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.gfredericks.exact.impl._ratio.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (new com.gfredericks.exact.impl.Ratio(n,goog.math.Integer.ONE));
});

com.gfredericks.exact.impl._ratio.cljs$core$IFn$_invoke$arity$2 = (function (n,d){
return (new com.gfredericks.exact.impl.Ratio(n,d));
});

com.gfredericks.exact.impl._ratio.cljs$lang$maxFixedArity = 2;

goog.math.Integer.prototype.com$gfredericks$exact$impl$AddWithInteger$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$AddWithInteger$_add_with_integer$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.add(y);
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$CompareToInteger$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$CompareToInteger$_compare_to_integer$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.compare(y);
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$AddWithRatio$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$AddWithRatio$_add_with_ratio$arity$2 = (function (x,y){
var x__$1 = this;
return com.gfredericks.exact.impl._add_with_ratio.call(null,com.gfredericks.exact.impl._ratio.call(null,x__$1),y);
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$CompareToRatio$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$CompareToRatio$_compare_to_ratio$arity$2 = (function (x,y){
var x__$1 = this;
return com.gfredericks.exact.impl._compare_to_ratio.call(null,com.gfredericks.exact.impl._ratio.call(null,x__$1),y);
});

goog.math.Integer.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.cljs$core$IHash$_hash$arity$1 = (function (self){
var self__$1 = this;
return cljs.core.reduce.call(null,cljs.core.bit_xor,(899242490),self__$1.bits_);
});

goog.math.Integer.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (x,y){
var x__$1 = this;
var and__41091__auto__ = com.gfredericks.exact.impl.integer_QMARK_.call(null,y);
if(cljs.core.truth_(and__41091__auto__)){
return x__$1.equals(y);
} else {
return and__41091__auto__;
}
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$MultiplyWithInteger$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$MultiplyWithInteger$_multiply_with_integer$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.multiply(y);
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$Multiply$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$Multiply$_multiply$arity$2 = (function (x,y){
var x__$1 = this;
return com.gfredericks.exact.impl._multiply_with_integer.call(null,y,x__$1);
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$Invert$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$Invert$_invert$arity$1 = (function (x){
var x__$1 = this;
return com.gfredericks.exact.impl._ratio.call(null,goog.math.Integer.ONE,x__$1);
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$Ordered$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$Ordered$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return (- com.gfredericks.exact.impl._compare_to_integer.call(null,y,x__$1));
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$Add$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$Add$_add$arity$2 = (function (x,y){
var x__$1 = this;
return com.gfredericks.exact.impl._add_with_integer.call(null,y,x__$1);
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$Negate$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$Negate$_negate$arity$1 = (function (x){
var x__$1 = this;
return x__$1.negate();
});

goog.math.Integer.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return com.gfredericks.exact.impl._compare.call(null,x__$1,y);
});

goog.math.Integer.prototype.com$gfredericks$exact$impl$MultiplyWithRatio$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Integer.prototype.com$gfredericks$exact$impl$MultiplyWithRatio$_multiply_with_ratio$arity$2 = (function (x,y){
var x__$1 = this;
return com.gfredericks.exact.impl._multiply_with_ratio.call(null,com.gfredericks.exact.impl._ratio.call(null,x__$1),y);
});
com.gfredericks.exact.impl.ZERO = goog.math.Integer.ZERO;
com.gfredericks.exact.impl.ONE = goog.math.Integer.ONE;
com.gfredericks.exact.impl.ratio_QMARK_ = (function com$gfredericks$exact$impl$ratio_QMARK_(x){
return (x instanceof com.gfredericks.exact.impl.Ratio);
});
com.gfredericks.exact.impl.add = (function com$gfredericks$exact$impl$add(x,y){
return com.gfredericks.exact.impl._add.call(null,x,y);
});
com.gfredericks.exact.impl.negate = (function com$gfredericks$exact$impl$negate(x){
return com.gfredericks.exact.impl._negate.call(null,x);
});
com.gfredericks.exact.impl.multiply = (function com$gfredericks$exact$impl$multiply(x,y){
return com.gfredericks.exact.impl._multiply.call(null,x,y);
});
com.gfredericks.exact.impl.invert = (function com$gfredericks$exact$impl$invert(x){
return com.gfredericks.exact.impl._invert.call(null,x);
});
com.gfredericks.exact.impl.compare = (function com$gfredericks$exact$impl$compare(x,y){
return com.gfredericks.exact.impl._compare.call(null,x,y);
});
com.gfredericks.exact.impl.string__GT_integer = (function com$gfredericks$exact$impl$string__GT_integer(s,radix){
return goog.math.Integer.fromString(s,radix);
});
com.gfredericks.exact.impl.integer__GT_string = (function com$gfredericks$exact$impl$integer__GT_string(n,radix){
return n.toString(radix);
});
com.gfredericks.exact.impl.numerator = (function com$gfredericks$exact$impl$numerator(x){
if(cljs.core.truth_(com.gfredericks.exact.impl.ratio_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (ratio? x)"));
}

return x.n;
});
com.gfredericks.exact.impl.denominator = (function com$gfredericks$exact$impl$denominator(x){
if(cljs.core.truth_(com.gfredericks.exact.impl.ratio_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (ratio? x)"));
}

return x.d;
});
com.gfredericks.exact.impl.quot = (function com$gfredericks$exact$impl$quot(x,n){
if(cljs.core.truth_(com.gfredericks.exact.impl.integer_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (integer? x)"));
}

if(cljs.core.truth_(com.gfredericks.exact.impl.integer_QMARK_.call(null,n))){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

return x.divide(n);
});
com.gfredericks.exact.impl.rem = (function com$gfredericks$exact$impl$rem(x,n){
if(cljs.core.truth_(com.gfredericks.exact.impl.integer_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (integer? x)"));
}

if(cljs.core.truth_(com.gfredericks.exact.impl.integer_QMARK_.call(null,n))){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

return x.modulo(n);
});
com.gfredericks.exact.impl.mod = (function com$gfredericks$exact$impl$mod(x,n){
var y = com.gfredericks.exact.impl.rem.call(null,x,n);
var G__43460 = y;
if(cljs.core.truth_(y.isNegative())){
return G__43460.add(n);
} else {
return G__43460;
}
});
com.gfredericks.exact.impl.odd_QMARK_ = (function com$gfredericks$exact$impl$odd_QMARK_(n){
return n.isOdd();
});
com.gfredericks.exact.impl.even_QMARK_ = (function com$gfredericks$exact$impl$even_QMARK_(n){
return cljs.core.not.call(null,n.isOdd());
});
com.gfredericks.exact.impl.two_to_fifty_three = cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,(53),(2)));
com.gfredericks.exact.impl.minus_two_to_fifty_three = (- com.gfredericks.exact.impl.two_to_fifty_three);
com.gfredericks.exact.impl.native_integer_QMARK_ = (function com$gfredericks$exact$impl$native_integer_QMARK_(num){
return (typeof num === 'number') && (((com.gfredericks.exact.impl.minus_two_to_fifty_three <= num)) && ((num <= com.gfredericks.exact.impl.two_to_fifty_three))) && (cljs.core.integer_QMARK_.call(null,num));
});
com.gfredericks.exact.impl.native__GT_integer = (function com$gfredericks$exact$impl$native__GT_integer(num){
if(cljs.core.truth_(com.gfredericks.exact.impl.native_integer_QMARK_.call(null,num))){
} else {
throw (new Error("Assert failed: (native-integer? num)"));
}

return goog.math.Integer.fromNumber(num);
});
com.gfredericks.exact.impl.integer__GT_native = (function com$gfredericks$exact$impl$integer__GT_native(x){
var _PERCENT_ = x.toNumber();
if(cljs.core.truth_(com.gfredericks.exact.impl.native_integer_QMARK_.call(null,_PERCENT_))){
} else {
throw (new Error("Assert failed: (native-integer? %)"));
}

return _PERCENT_;
});

//# sourceMappingURL=impl.js.map
