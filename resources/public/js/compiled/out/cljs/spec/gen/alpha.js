// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50211 = arguments.length;
var i__42351__auto___50212 = (0);
while(true){
if((i__42351__auto___50212 < len__42350__auto___50211)){
args__42357__auto__.push((arguments[i__42351__auto___50212]));

var G__50213 = (i__42351__auto___50212 + (1));
i__42351__auto___50212 = G__50213;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq50210){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50210));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50215 = arguments.length;
var i__42351__auto___50216 = (0);
while(true){
if((i__42351__auto___50216 < len__42350__auto___50215)){
args__42357__auto__.push((arguments[i__42351__auto___50216]));

var G__50217 = (i__42351__auto___50216 + (1));
i__42351__auto___50216 = G__50217;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq50214){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50214));
});

var g_QMARK__50218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_50219 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__50218){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__50218))
,null));
var mkg_50220 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__50218,g_50219){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__50218,g_50219))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__50218,g_50219,mkg_50220){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50218).call(null,x);
});})(g_QMARK__50218,g_50219,mkg_50220))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__50218,g_50219,mkg_50220){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_50220).call(null,gfn);
});})(g_QMARK__50218,g_50219,mkg_50220))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__50218,g_50219,mkg_50220){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_50219).call(null,generator);
});})(g_QMARK__50218,g_50219,mkg_50220))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42453__auto___50240 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42453__auto___50240){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50241 = arguments.length;
var i__42351__auto___50242 = (0);
while(true){
if((i__42351__auto___50242 < len__42350__auto___50241)){
args__42357__auto__.push((arguments[i__42351__auto___50242]));

var G__50243 = (i__42351__auto___50242 + (1));
i__42351__auto___50242 = G__50243;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50240))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50240){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50240),args);
});})(g__42453__auto___50240))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42453__auto___50240){
return (function (seq50221){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50221));
});})(g__42453__auto___50240))
;


var g__42453__auto___50244 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42453__auto___50244){
return (function cljs$spec$gen$alpha$list(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50245 = arguments.length;
var i__42351__auto___50246 = (0);
while(true){
if((i__42351__auto___50246 < len__42350__auto___50245)){
args__42357__auto__.push((arguments[i__42351__auto___50246]));

var G__50247 = (i__42351__auto___50246 + (1));
i__42351__auto___50246 = G__50247;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50244))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50244){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50244),args);
});})(g__42453__auto___50244))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42453__auto___50244){
return (function (seq50222){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50222));
});})(g__42453__auto___50244))
;


var g__42453__auto___50248 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42453__auto___50248){
return (function cljs$spec$gen$alpha$map(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50249 = arguments.length;
var i__42351__auto___50250 = (0);
while(true){
if((i__42351__auto___50250 < len__42350__auto___50249)){
args__42357__auto__.push((arguments[i__42351__auto___50250]));

var G__50251 = (i__42351__auto___50250 + (1));
i__42351__auto___50250 = G__50251;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50248))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50248){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50248),args);
});})(g__42453__auto___50248))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42453__auto___50248){
return (function (seq50223){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50223));
});})(g__42453__auto___50248))
;


var g__42453__auto___50252 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42453__auto___50252){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50253 = arguments.length;
var i__42351__auto___50254 = (0);
while(true){
if((i__42351__auto___50254 < len__42350__auto___50253)){
args__42357__auto__.push((arguments[i__42351__auto___50254]));

var G__50255 = (i__42351__auto___50254 + (1));
i__42351__auto___50254 = G__50255;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50252))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50252){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50252),args);
});})(g__42453__auto___50252))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42453__auto___50252){
return (function (seq50224){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50224));
});})(g__42453__auto___50252))
;


var g__42453__auto___50256 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42453__auto___50256){
return (function cljs$spec$gen$alpha$set(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50257 = arguments.length;
var i__42351__auto___50258 = (0);
while(true){
if((i__42351__auto___50258 < len__42350__auto___50257)){
args__42357__auto__.push((arguments[i__42351__auto___50258]));

var G__50259 = (i__42351__auto___50258 + (1));
i__42351__auto___50258 = G__50259;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50256))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50256){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50256),args);
});})(g__42453__auto___50256))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42453__auto___50256){
return (function (seq50225){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50225));
});})(g__42453__auto___50256))
;


var g__42453__auto___50260 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42453__auto___50260){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50261 = arguments.length;
var i__42351__auto___50262 = (0);
while(true){
if((i__42351__auto___50262 < len__42350__auto___50261)){
args__42357__auto__.push((arguments[i__42351__auto___50262]));

var G__50263 = (i__42351__auto___50262 + (1));
i__42351__auto___50262 = G__50263;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50260))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50260){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50260),args);
});})(g__42453__auto___50260))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42453__auto___50260){
return (function (seq50226){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50226));
});})(g__42453__auto___50260))
;


var g__42453__auto___50264 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42453__auto___50264){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50265 = arguments.length;
var i__42351__auto___50266 = (0);
while(true){
if((i__42351__auto___50266 < len__42350__auto___50265)){
args__42357__auto__.push((arguments[i__42351__auto___50266]));

var G__50267 = (i__42351__auto___50266 + (1));
i__42351__auto___50266 = G__50267;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50264))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50264){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50264),args);
});})(g__42453__auto___50264))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42453__auto___50264){
return (function (seq50227){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50227));
});})(g__42453__auto___50264))
;


var g__42453__auto___50268 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42453__auto___50268){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50269 = arguments.length;
var i__42351__auto___50270 = (0);
while(true){
if((i__42351__auto___50270 < len__42350__auto___50269)){
args__42357__auto__.push((arguments[i__42351__auto___50270]));

var G__50271 = (i__42351__auto___50270 + (1));
i__42351__auto___50270 = G__50271;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50268))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50268){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50268),args);
});})(g__42453__auto___50268))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42453__auto___50268){
return (function (seq50228){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50228));
});})(g__42453__auto___50268))
;


var g__42453__auto___50272 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42453__auto___50272){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50273 = arguments.length;
var i__42351__auto___50274 = (0);
while(true){
if((i__42351__auto___50274 < len__42350__auto___50273)){
args__42357__auto__.push((arguments[i__42351__auto___50274]));

var G__50275 = (i__42351__auto___50274 + (1));
i__42351__auto___50274 = G__50275;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50272))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50272){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50272),args);
});})(g__42453__auto___50272))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42453__auto___50272){
return (function (seq50229){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50229));
});})(g__42453__auto___50272))
;


var g__42453__auto___50276 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42453__auto___50276){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50277 = arguments.length;
var i__42351__auto___50278 = (0);
while(true){
if((i__42351__auto___50278 < len__42350__auto___50277)){
args__42357__auto__.push((arguments[i__42351__auto___50278]));

var G__50279 = (i__42351__auto___50278 + (1));
i__42351__auto___50278 = G__50279;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50276))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50276){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50276),args);
});})(g__42453__auto___50276))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42453__auto___50276){
return (function (seq50230){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50230));
});})(g__42453__auto___50276))
;


var g__42453__auto___50280 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42453__auto___50280){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50281 = arguments.length;
var i__42351__auto___50282 = (0);
while(true){
if((i__42351__auto___50282 < len__42350__auto___50281)){
args__42357__auto__.push((arguments[i__42351__auto___50282]));

var G__50283 = (i__42351__auto___50282 + (1));
i__42351__auto___50282 = G__50283;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50280))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50280){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50280),args);
});})(g__42453__auto___50280))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42453__auto___50280){
return (function (seq50231){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50231));
});})(g__42453__auto___50280))
;


var g__42453__auto___50284 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42453__auto___50284){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50285 = arguments.length;
var i__42351__auto___50286 = (0);
while(true){
if((i__42351__auto___50286 < len__42350__auto___50285)){
args__42357__auto__.push((arguments[i__42351__auto___50286]));

var G__50287 = (i__42351__auto___50286 + (1));
i__42351__auto___50286 = G__50287;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50284))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50284){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50284),args);
});})(g__42453__auto___50284))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42453__auto___50284){
return (function (seq50232){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50232));
});})(g__42453__auto___50284))
;


var g__42453__auto___50288 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42453__auto___50288){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50289 = arguments.length;
var i__42351__auto___50290 = (0);
while(true){
if((i__42351__auto___50290 < len__42350__auto___50289)){
args__42357__auto__.push((arguments[i__42351__auto___50290]));

var G__50291 = (i__42351__auto___50290 + (1));
i__42351__auto___50290 = G__50291;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50288))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50288){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50288),args);
});})(g__42453__auto___50288))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42453__auto___50288){
return (function (seq50233){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50233));
});})(g__42453__auto___50288))
;


var g__42453__auto___50292 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42453__auto___50292){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50293 = arguments.length;
var i__42351__auto___50294 = (0);
while(true){
if((i__42351__auto___50294 < len__42350__auto___50293)){
args__42357__auto__.push((arguments[i__42351__auto___50294]));

var G__50295 = (i__42351__auto___50294 + (1));
i__42351__auto___50294 = G__50295;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50292))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50292),args);
});})(g__42453__auto___50292))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42453__auto___50292){
return (function (seq50234){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50234));
});})(g__42453__auto___50292))
;


var g__42453__auto___50296 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42453__auto___50296){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50297 = arguments.length;
var i__42351__auto___50298 = (0);
while(true){
if((i__42351__auto___50298 < len__42350__auto___50297)){
args__42357__auto__.push((arguments[i__42351__auto___50298]));

var G__50299 = (i__42351__auto___50298 + (1));
i__42351__auto___50298 = G__50299;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50296))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50296),args);
});})(g__42453__auto___50296))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42453__auto___50296){
return (function (seq50235){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50235));
});})(g__42453__auto___50296))
;


var g__42453__auto___50300 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42453__auto___50300){
return (function cljs$spec$gen$alpha$return(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50301 = arguments.length;
var i__42351__auto___50302 = (0);
while(true){
if((i__42351__auto___50302 < len__42350__auto___50301)){
args__42357__auto__.push((arguments[i__42351__auto___50302]));

var G__50303 = (i__42351__auto___50302 + (1));
i__42351__auto___50302 = G__50303;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50300))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50300),args);
});})(g__42453__auto___50300))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42453__auto___50300){
return (function (seq50236){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50236));
});})(g__42453__auto___50300))
;


var g__42453__auto___50304 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42453__auto___50304){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50305 = arguments.length;
var i__42351__auto___50306 = (0);
while(true){
if((i__42351__auto___50306 < len__42350__auto___50305)){
args__42357__auto__.push((arguments[i__42351__auto___50306]));

var G__50307 = (i__42351__auto___50306 + (1));
i__42351__auto___50306 = G__50307;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50304))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50304),args);
});})(g__42453__auto___50304))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42453__auto___50304){
return (function (seq50237){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50237));
});})(g__42453__auto___50304))
;


var g__42453__auto___50308 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42453__auto___50308){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50309 = arguments.length;
var i__42351__auto___50310 = (0);
while(true){
if((i__42351__auto___50310 < len__42350__auto___50309)){
args__42357__auto__.push((arguments[i__42351__auto___50310]));

var G__50311 = (i__42351__auto___50310 + (1));
i__42351__auto___50310 = G__50311;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50308))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50308){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50308),args);
});})(g__42453__auto___50308))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42453__auto___50308){
return (function (seq50238){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50238));
});})(g__42453__auto___50308))
;


var g__42453__auto___50312 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42453__auto___50312){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50313 = arguments.length;
var i__42351__auto___50314 = (0);
while(true){
if((i__42351__auto___50314 < len__42350__auto___50313)){
args__42357__auto__.push((arguments[i__42351__auto___50314]));

var G__50315 = (i__42351__auto___50314 + (1));
i__42351__auto___50314 = G__50315;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42453__auto___50312))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42453__auto___50312){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42453__auto___50312),args);
});})(g__42453__auto___50312))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42453__auto___50312){
return (function (seq50239){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50239));
});})(g__42453__auto___50312))
;

var g__42466__auto___50337 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42466__auto___50337){
return (function cljs$spec$gen$alpha$any(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50338 = arguments.length;
var i__42351__auto___50339 = (0);
while(true){
if((i__42351__auto___50339 < len__42350__auto___50338)){
args__42357__auto__.push((arguments[i__42351__auto___50339]));

var G__50340 = (i__42351__auto___50339 + (1));
i__42351__auto___50339 = G__50340;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50337))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50337){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50337);
});})(g__42466__auto___50337))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42466__auto___50337){
return (function (seq50316){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50316));
});})(g__42466__auto___50337))
;


var g__42466__auto___50341 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42466__auto___50341){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50342 = arguments.length;
var i__42351__auto___50343 = (0);
while(true){
if((i__42351__auto___50343 < len__42350__auto___50342)){
args__42357__auto__.push((arguments[i__42351__auto___50343]));

var G__50344 = (i__42351__auto___50343 + (1));
i__42351__auto___50343 = G__50344;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50341))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50341){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50341);
});})(g__42466__auto___50341))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42466__auto___50341){
return (function (seq50317){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50317));
});})(g__42466__auto___50341))
;


var g__42466__auto___50345 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42466__auto___50345){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50346 = arguments.length;
var i__42351__auto___50347 = (0);
while(true){
if((i__42351__auto___50347 < len__42350__auto___50346)){
args__42357__auto__.push((arguments[i__42351__auto___50347]));

var G__50348 = (i__42351__auto___50347 + (1));
i__42351__auto___50347 = G__50348;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50345))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50345){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50345);
});})(g__42466__auto___50345))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42466__auto___50345){
return (function (seq50318){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50318));
});})(g__42466__auto___50345))
;


var g__42466__auto___50349 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42466__auto___50349){
return (function cljs$spec$gen$alpha$char(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50350 = arguments.length;
var i__42351__auto___50351 = (0);
while(true){
if((i__42351__auto___50351 < len__42350__auto___50350)){
args__42357__auto__.push((arguments[i__42351__auto___50351]));

var G__50352 = (i__42351__auto___50351 + (1));
i__42351__auto___50351 = G__50352;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50349))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50349){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50349);
});})(g__42466__auto___50349))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42466__auto___50349){
return (function (seq50319){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50319));
});})(g__42466__auto___50349))
;


var g__42466__auto___50353 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42466__auto___50353){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50354 = arguments.length;
var i__42351__auto___50355 = (0);
while(true){
if((i__42351__auto___50355 < len__42350__auto___50354)){
args__42357__auto__.push((arguments[i__42351__auto___50355]));

var G__50356 = (i__42351__auto___50355 + (1));
i__42351__auto___50355 = G__50356;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50353))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50353){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50353);
});})(g__42466__auto___50353))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42466__auto___50353){
return (function (seq50320){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50320));
});})(g__42466__auto___50353))
;


var g__42466__auto___50357 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42466__auto___50357){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50358 = arguments.length;
var i__42351__auto___50359 = (0);
while(true){
if((i__42351__auto___50359 < len__42350__auto___50358)){
args__42357__auto__.push((arguments[i__42351__auto___50359]));

var G__50360 = (i__42351__auto___50359 + (1));
i__42351__auto___50359 = G__50360;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50357))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50357){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50357);
});})(g__42466__auto___50357))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42466__auto___50357){
return (function (seq50321){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50321));
});})(g__42466__auto___50357))
;


var g__42466__auto___50361 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42466__auto___50361){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50362 = arguments.length;
var i__42351__auto___50363 = (0);
while(true){
if((i__42351__auto___50363 < len__42350__auto___50362)){
args__42357__auto__.push((arguments[i__42351__auto___50363]));

var G__50364 = (i__42351__auto___50363 + (1));
i__42351__auto___50363 = G__50364;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50361))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50361){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50361);
});})(g__42466__auto___50361))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42466__auto___50361){
return (function (seq50322){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50322));
});})(g__42466__auto___50361))
;


var g__42466__auto___50365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42466__auto___50365){
return (function cljs$spec$gen$alpha$double(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50366 = arguments.length;
var i__42351__auto___50367 = (0);
while(true){
if((i__42351__auto___50367 < len__42350__auto___50366)){
args__42357__auto__.push((arguments[i__42351__auto___50367]));

var G__50368 = (i__42351__auto___50367 + (1));
i__42351__auto___50367 = G__50368;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50365))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50365){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50365);
});})(g__42466__auto___50365))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42466__auto___50365){
return (function (seq50323){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50323));
});})(g__42466__auto___50365))
;


var g__42466__auto___50369 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42466__auto___50369){
return (function cljs$spec$gen$alpha$int(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50370 = arguments.length;
var i__42351__auto___50371 = (0);
while(true){
if((i__42351__auto___50371 < len__42350__auto___50370)){
args__42357__auto__.push((arguments[i__42351__auto___50371]));

var G__50372 = (i__42351__auto___50371 + (1));
i__42351__auto___50371 = G__50372;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50369))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50369){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50369);
});})(g__42466__auto___50369))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42466__auto___50369){
return (function (seq50324){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50324));
});})(g__42466__auto___50369))
;


var g__42466__auto___50373 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42466__auto___50373){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50374 = arguments.length;
var i__42351__auto___50375 = (0);
while(true){
if((i__42351__auto___50375 < len__42350__auto___50374)){
args__42357__auto__.push((arguments[i__42351__auto___50375]));

var G__50376 = (i__42351__auto___50375 + (1));
i__42351__auto___50375 = G__50376;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50373))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50373){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50373);
});})(g__42466__auto___50373))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42466__auto___50373){
return (function (seq50325){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50325));
});})(g__42466__auto___50373))
;


var g__42466__auto___50377 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42466__auto___50377){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50378 = arguments.length;
var i__42351__auto___50379 = (0);
while(true){
if((i__42351__auto___50379 < len__42350__auto___50378)){
args__42357__auto__.push((arguments[i__42351__auto___50379]));

var G__50380 = (i__42351__auto___50379 + (1));
i__42351__auto___50379 = G__50380;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50377))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50377){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50377);
});})(g__42466__auto___50377))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42466__auto___50377){
return (function (seq50326){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50326));
});})(g__42466__auto___50377))
;


var g__42466__auto___50381 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42466__auto___50381){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50382 = arguments.length;
var i__42351__auto___50383 = (0);
while(true){
if((i__42351__auto___50383 < len__42350__auto___50382)){
args__42357__auto__.push((arguments[i__42351__auto___50383]));

var G__50384 = (i__42351__auto___50383 + (1));
i__42351__auto___50383 = G__50384;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50381))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50381){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50381);
});})(g__42466__auto___50381))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42466__auto___50381){
return (function (seq50327){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50327));
});})(g__42466__auto___50381))
;


var g__42466__auto___50385 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42466__auto___50385){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50386 = arguments.length;
var i__42351__auto___50387 = (0);
while(true){
if((i__42351__auto___50387 < len__42350__auto___50386)){
args__42357__auto__.push((arguments[i__42351__auto___50387]));

var G__50388 = (i__42351__auto___50387 + (1));
i__42351__auto___50387 = G__50388;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50385))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50385){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50385);
});})(g__42466__auto___50385))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42466__auto___50385){
return (function (seq50328){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50328));
});})(g__42466__auto___50385))
;


var g__42466__auto___50389 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42466__auto___50389){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50390 = arguments.length;
var i__42351__auto___50391 = (0);
while(true){
if((i__42351__auto___50391 < len__42350__auto___50390)){
args__42357__auto__.push((arguments[i__42351__auto___50391]));

var G__50392 = (i__42351__auto___50391 + (1));
i__42351__auto___50391 = G__50392;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50389))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50389){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50389);
});})(g__42466__auto___50389))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42466__auto___50389){
return (function (seq50329){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50329));
});})(g__42466__auto___50389))
;


var g__42466__auto___50393 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42466__auto___50393){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50394 = arguments.length;
var i__42351__auto___50395 = (0);
while(true){
if((i__42351__auto___50395 < len__42350__auto___50394)){
args__42357__auto__.push((arguments[i__42351__auto___50395]));

var G__50396 = (i__42351__auto___50395 + (1));
i__42351__auto___50395 = G__50396;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50393))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50393){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50393);
});})(g__42466__auto___50393))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42466__auto___50393){
return (function (seq50330){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50330));
});})(g__42466__auto___50393))
;


var g__42466__auto___50397 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42466__auto___50397){
return (function cljs$spec$gen$alpha$string(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50398 = arguments.length;
var i__42351__auto___50399 = (0);
while(true){
if((i__42351__auto___50399 < len__42350__auto___50398)){
args__42357__auto__.push((arguments[i__42351__auto___50399]));

var G__50400 = (i__42351__auto___50399 + (1));
i__42351__auto___50399 = G__50400;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50397))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50397){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50397);
});})(g__42466__auto___50397))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42466__auto___50397){
return (function (seq50331){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50331));
});})(g__42466__auto___50397))
;


var g__42466__auto___50401 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42466__auto___50401){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50402 = arguments.length;
var i__42351__auto___50403 = (0);
while(true){
if((i__42351__auto___50403 < len__42350__auto___50402)){
args__42357__auto__.push((arguments[i__42351__auto___50403]));

var G__50404 = (i__42351__auto___50403 + (1));
i__42351__auto___50403 = G__50404;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50401))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50401){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50401);
});})(g__42466__auto___50401))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42466__auto___50401){
return (function (seq50332){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50332));
});})(g__42466__auto___50401))
;


var g__42466__auto___50405 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42466__auto___50405){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50406 = arguments.length;
var i__42351__auto___50407 = (0);
while(true){
if((i__42351__auto___50407 < len__42350__auto___50406)){
args__42357__auto__.push((arguments[i__42351__auto___50407]));

var G__50408 = (i__42351__auto___50407 + (1));
i__42351__auto___50407 = G__50408;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50405))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50405){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50405);
});})(g__42466__auto___50405))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42466__auto___50405){
return (function (seq50333){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50333));
});})(g__42466__auto___50405))
;


var g__42466__auto___50409 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42466__auto___50409){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50410 = arguments.length;
var i__42351__auto___50411 = (0);
while(true){
if((i__42351__auto___50411 < len__42350__auto___50410)){
args__42357__auto__.push((arguments[i__42351__auto___50411]));

var G__50412 = (i__42351__auto___50411 + (1));
i__42351__auto___50411 = G__50412;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50409))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50409){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50409);
});})(g__42466__auto___50409))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42466__auto___50409){
return (function (seq50334){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50334));
});})(g__42466__auto___50409))
;


var g__42466__auto___50413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42466__auto___50413){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50414 = arguments.length;
var i__42351__auto___50415 = (0);
while(true){
if((i__42351__auto___50415 < len__42350__auto___50414)){
args__42357__auto__.push((arguments[i__42351__auto___50415]));

var G__50416 = (i__42351__auto___50415 + (1));
i__42351__auto___50415 = G__50416;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50413))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50413){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50413);
});})(g__42466__auto___50413))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42466__auto___50413){
return (function (seq50335){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50335));
});})(g__42466__auto___50413))
;


var g__42466__auto___50417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42466__auto___50417){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50418 = arguments.length;
var i__42351__auto___50419 = (0);
while(true){
if((i__42351__auto___50419 < len__42350__auto___50418)){
args__42357__auto__.push((arguments[i__42351__auto___50419]));

var G__50420 = (i__42351__auto___50419 + (1));
i__42351__auto___50419 = G__50420;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});})(g__42466__auto___50417))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42466__auto___50417){
return (function (args){
return cljs.core.deref.call(null,g__42466__auto___50417);
});})(g__42466__auto___50417))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42466__auto___50417){
return (function (seq50336){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50336));
});})(g__42466__auto___50417))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__42357__auto__ = [];
var len__42350__auto___50423 = arguments.length;
var i__42351__auto___50424 = (0);
while(true){
if((i__42351__auto___50424 < len__42350__auto___50423)){
args__42357__auto__.push((arguments[i__42351__auto___50424]));

var G__50425 = (i__42351__auto___50424 + (1));
i__42351__auto___50424 = G__50425;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__50421_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50421_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq50422){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50422));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__50426_SHARP_){
return (new Date(p1__50426_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1524597522126
