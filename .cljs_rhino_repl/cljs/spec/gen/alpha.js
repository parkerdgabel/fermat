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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__42389__auto__ = [];
var len__42382__auto___43927 = arguments.length;
var i__42383__auto___43928 = (0);
while(true){
if((i__42383__auto___43928 < len__42382__auto___43927)){
args__42389__auto__.push((arguments[i__42383__auto___43928]));

var G__43929 = (i__42383__auto___43928 + (1));
i__42383__auto___43928 = G__43929;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq43926){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43926));
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
var args__42389__auto__ = [];
var len__42382__auto___43931 = arguments.length;
var i__42383__auto___43932 = (0);
while(true){
if((i__42383__auto___43932 < len__42382__auto___43931)){
args__42389__auto__.push((arguments[i__42383__auto___43932]));

var G__43933 = (i__42383__auto___43932 + (1));
i__42383__auto___43932 = G__43933;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq43930){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43930));
});

var g_QMARK__43934 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_43935 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__43934){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__43934))
,null));
var mkg_43936 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__43934,g_43935){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__43934,g_43935))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__43934,g_43935,mkg_43936){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__43934).call(null,x);
});})(g_QMARK__43934,g_43935,mkg_43936))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__43934,g_43935,mkg_43936){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_43936).call(null,gfn);
});})(g_QMARK__43934,g_43935,mkg_43936))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__43934,g_43935,mkg_43936){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_43935).call(null,generator);
});})(g_QMARK__43934,g_43935,mkg_43936))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42485__auto___43956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42485__auto___43956){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43957 = arguments.length;
var i__42383__auto___43958 = (0);
while(true){
if((i__42383__auto___43958 < len__42382__auto___43957)){
args__42389__auto__.push((arguments[i__42383__auto___43958]));

var G__43959 = (i__42383__auto___43958 + (1));
i__42383__auto___43958 = G__43959;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43956))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43956){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43956),args);
});})(g__42485__auto___43956))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42485__auto___43956){
return (function (seq43937){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43937));
});})(g__42485__auto___43956))
;


var g__42485__auto___43960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42485__auto___43960){
return (function cljs$spec$gen$alpha$list(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43961 = arguments.length;
var i__42383__auto___43962 = (0);
while(true){
if((i__42383__auto___43962 < len__42382__auto___43961)){
args__42389__auto__.push((arguments[i__42383__auto___43962]));

var G__43963 = (i__42383__auto___43962 + (1));
i__42383__auto___43962 = G__43963;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43960))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43960){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43960),args);
});})(g__42485__auto___43960))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42485__auto___43960){
return (function (seq43938){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43938));
});})(g__42485__auto___43960))
;


var g__42485__auto___43964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42485__auto___43964){
return (function cljs$spec$gen$alpha$map(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43965 = arguments.length;
var i__42383__auto___43966 = (0);
while(true){
if((i__42383__auto___43966 < len__42382__auto___43965)){
args__42389__auto__.push((arguments[i__42383__auto___43966]));

var G__43967 = (i__42383__auto___43966 + (1));
i__42383__auto___43966 = G__43967;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43964))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43964){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43964),args);
});})(g__42485__auto___43964))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42485__auto___43964){
return (function (seq43939){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43939));
});})(g__42485__auto___43964))
;


var g__42485__auto___43968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42485__auto___43968){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43969 = arguments.length;
var i__42383__auto___43970 = (0);
while(true){
if((i__42383__auto___43970 < len__42382__auto___43969)){
args__42389__auto__.push((arguments[i__42383__auto___43970]));

var G__43971 = (i__42383__auto___43970 + (1));
i__42383__auto___43970 = G__43971;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43968))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43968){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43968),args);
});})(g__42485__auto___43968))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42485__auto___43968){
return (function (seq43940){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43940));
});})(g__42485__auto___43968))
;


var g__42485__auto___43972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42485__auto___43972){
return (function cljs$spec$gen$alpha$set(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43973 = arguments.length;
var i__42383__auto___43974 = (0);
while(true){
if((i__42383__auto___43974 < len__42382__auto___43973)){
args__42389__auto__.push((arguments[i__42383__auto___43974]));

var G__43975 = (i__42383__auto___43974 + (1));
i__42383__auto___43974 = G__43975;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43972))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43972){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43972),args);
});})(g__42485__auto___43972))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42485__auto___43972){
return (function (seq43941){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43941));
});})(g__42485__auto___43972))
;


var g__42485__auto___43976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42485__auto___43976){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43977 = arguments.length;
var i__42383__auto___43978 = (0);
while(true){
if((i__42383__auto___43978 < len__42382__auto___43977)){
args__42389__auto__.push((arguments[i__42383__auto___43978]));

var G__43979 = (i__42383__auto___43978 + (1));
i__42383__auto___43978 = G__43979;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43976))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43976){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43976),args);
});})(g__42485__auto___43976))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42485__auto___43976){
return (function (seq43942){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43942));
});})(g__42485__auto___43976))
;


var g__42485__auto___43980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42485__auto___43980){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43981 = arguments.length;
var i__42383__auto___43982 = (0);
while(true){
if((i__42383__auto___43982 < len__42382__auto___43981)){
args__42389__auto__.push((arguments[i__42383__auto___43982]));

var G__43983 = (i__42383__auto___43982 + (1));
i__42383__auto___43982 = G__43983;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43980))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43980){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43980),args);
});})(g__42485__auto___43980))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42485__auto___43980){
return (function (seq43943){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43943));
});})(g__42485__auto___43980))
;


var g__42485__auto___43984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42485__auto___43984){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43985 = arguments.length;
var i__42383__auto___43986 = (0);
while(true){
if((i__42383__auto___43986 < len__42382__auto___43985)){
args__42389__auto__.push((arguments[i__42383__auto___43986]));

var G__43987 = (i__42383__auto___43986 + (1));
i__42383__auto___43986 = G__43987;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43984))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43984){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43984),args);
});})(g__42485__auto___43984))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42485__auto___43984){
return (function (seq43944){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43944));
});})(g__42485__auto___43984))
;


var g__42485__auto___43988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42485__auto___43988){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43989 = arguments.length;
var i__42383__auto___43990 = (0);
while(true){
if((i__42383__auto___43990 < len__42382__auto___43989)){
args__42389__auto__.push((arguments[i__42383__auto___43990]));

var G__43991 = (i__42383__auto___43990 + (1));
i__42383__auto___43990 = G__43991;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43988))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43988){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43988),args);
});})(g__42485__auto___43988))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42485__auto___43988){
return (function (seq43945){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43945));
});})(g__42485__auto___43988))
;


var g__42485__auto___43992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42485__auto___43992){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43993 = arguments.length;
var i__42383__auto___43994 = (0);
while(true){
if((i__42383__auto___43994 < len__42382__auto___43993)){
args__42389__auto__.push((arguments[i__42383__auto___43994]));

var G__43995 = (i__42383__auto___43994 + (1));
i__42383__auto___43994 = G__43995;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43992))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43992){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43992),args);
});})(g__42485__auto___43992))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42485__auto___43992){
return (function (seq43946){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43946));
});})(g__42485__auto___43992))
;


var g__42485__auto___43996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42485__auto___43996){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__42389__auto__ = [];
var len__42382__auto___43997 = arguments.length;
var i__42383__auto___43998 = (0);
while(true){
if((i__42383__auto___43998 < len__42382__auto___43997)){
args__42389__auto__.push((arguments[i__42383__auto___43998]));

var G__43999 = (i__42383__auto___43998 + (1));
i__42383__auto___43998 = G__43999;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___43996))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___43996){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___43996),args);
});})(g__42485__auto___43996))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42485__auto___43996){
return (function (seq43947){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43947));
});})(g__42485__auto___43996))
;


var g__42485__auto___44000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42485__auto___44000){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44001 = arguments.length;
var i__42383__auto___44002 = (0);
while(true){
if((i__42383__auto___44002 < len__42382__auto___44001)){
args__42389__auto__.push((arguments[i__42383__auto___44002]));

var G__44003 = (i__42383__auto___44002 + (1));
i__42383__auto___44002 = G__44003;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___44000))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___44000){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___44000),args);
});})(g__42485__auto___44000))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42485__auto___44000){
return (function (seq43948){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43948));
});})(g__42485__auto___44000))
;


var g__42485__auto___44004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42485__auto___44004){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44005 = arguments.length;
var i__42383__auto___44006 = (0);
while(true){
if((i__42383__auto___44006 < len__42382__auto___44005)){
args__42389__auto__.push((arguments[i__42383__auto___44006]));

var G__44007 = (i__42383__auto___44006 + (1));
i__42383__auto___44006 = G__44007;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___44004))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___44004){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___44004),args);
});})(g__42485__auto___44004))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42485__auto___44004){
return (function (seq43949){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43949));
});})(g__42485__auto___44004))
;


var g__42485__auto___44008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42485__auto___44008){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44009 = arguments.length;
var i__42383__auto___44010 = (0);
while(true){
if((i__42383__auto___44010 < len__42382__auto___44009)){
args__42389__auto__.push((arguments[i__42383__auto___44010]));

var G__44011 = (i__42383__auto___44010 + (1));
i__42383__auto___44010 = G__44011;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___44008))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___44008){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___44008),args);
});})(g__42485__auto___44008))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42485__auto___44008){
return (function (seq43950){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43950));
});})(g__42485__auto___44008))
;


var g__42485__auto___44012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42485__auto___44012){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44013 = arguments.length;
var i__42383__auto___44014 = (0);
while(true){
if((i__42383__auto___44014 < len__42382__auto___44013)){
args__42389__auto__.push((arguments[i__42383__auto___44014]));

var G__44015 = (i__42383__auto___44014 + (1));
i__42383__auto___44014 = G__44015;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___44012))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___44012){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___44012),args);
});})(g__42485__auto___44012))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42485__auto___44012){
return (function (seq43951){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43951));
});})(g__42485__auto___44012))
;


var g__42485__auto___44016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42485__auto___44016){
return (function cljs$spec$gen$alpha$return(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44017 = arguments.length;
var i__42383__auto___44018 = (0);
while(true){
if((i__42383__auto___44018 < len__42382__auto___44017)){
args__42389__auto__.push((arguments[i__42383__auto___44018]));

var G__44019 = (i__42383__auto___44018 + (1));
i__42383__auto___44018 = G__44019;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___44016))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___44016){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___44016),args);
});})(g__42485__auto___44016))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42485__auto___44016){
return (function (seq43952){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43952));
});})(g__42485__auto___44016))
;


var g__42485__auto___44020 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42485__auto___44020){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44021 = arguments.length;
var i__42383__auto___44022 = (0);
while(true){
if((i__42383__auto___44022 < len__42382__auto___44021)){
args__42389__auto__.push((arguments[i__42383__auto___44022]));

var G__44023 = (i__42383__auto___44022 + (1));
i__42383__auto___44022 = G__44023;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___44020))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___44020){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___44020),args);
});})(g__42485__auto___44020))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42485__auto___44020){
return (function (seq43953){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43953));
});})(g__42485__auto___44020))
;


var g__42485__auto___44024 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42485__auto___44024){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44025 = arguments.length;
var i__42383__auto___44026 = (0);
while(true){
if((i__42383__auto___44026 < len__42382__auto___44025)){
args__42389__auto__.push((arguments[i__42383__auto___44026]));

var G__44027 = (i__42383__auto___44026 + (1));
i__42383__auto___44026 = G__44027;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___44024))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___44024){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___44024),args);
});})(g__42485__auto___44024))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42485__auto___44024){
return (function (seq43954){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43954));
});})(g__42485__auto___44024))
;


var g__42485__auto___44028 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42485__auto___44028){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44029 = arguments.length;
var i__42383__auto___44030 = (0);
while(true){
if((i__42383__auto___44030 < len__42382__auto___44029)){
args__42389__auto__.push((arguments[i__42383__auto___44030]));

var G__44031 = (i__42383__auto___44030 + (1));
i__42383__auto___44030 = G__44031;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42485__auto___44028))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42485__auto___44028){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42485__auto___44028),args);
});})(g__42485__auto___44028))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42485__auto___44028){
return (function (seq43955){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43955));
});})(g__42485__auto___44028))
;

var g__42498__auto___44053 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42498__auto___44053){
return (function cljs$spec$gen$alpha$any(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44054 = arguments.length;
var i__42383__auto___44055 = (0);
while(true){
if((i__42383__auto___44055 < len__42382__auto___44054)){
args__42389__auto__.push((arguments[i__42383__auto___44055]));

var G__44056 = (i__42383__auto___44055 + (1));
i__42383__auto___44055 = G__44056;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44053))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44053){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44053);
});})(g__42498__auto___44053))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42498__auto___44053){
return (function (seq44032){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44032));
});})(g__42498__auto___44053))
;


var g__42498__auto___44057 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42498__auto___44057){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44058 = arguments.length;
var i__42383__auto___44059 = (0);
while(true){
if((i__42383__auto___44059 < len__42382__auto___44058)){
args__42389__auto__.push((arguments[i__42383__auto___44059]));

var G__44060 = (i__42383__auto___44059 + (1));
i__42383__auto___44059 = G__44060;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44057))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44057){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44057);
});})(g__42498__auto___44057))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42498__auto___44057){
return (function (seq44033){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44033));
});})(g__42498__auto___44057))
;


var g__42498__auto___44061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42498__auto___44061){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44062 = arguments.length;
var i__42383__auto___44063 = (0);
while(true){
if((i__42383__auto___44063 < len__42382__auto___44062)){
args__42389__auto__.push((arguments[i__42383__auto___44063]));

var G__44064 = (i__42383__auto___44063 + (1));
i__42383__auto___44063 = G__44064;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44061))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44061){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44061);
});})(g__42498__auto___44061))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42498__auto___44061){
return (function (seq44034){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44034));
});})(g__42498__auto___44061))
;


var g__42498__auto___44065 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42498__auto___44065){
return (function cljs$spec$gen$alpha$char(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44066 = arguments.length;
var i__42383__auto___44067 = (0);
while(true){
if((i__42383__auto___44067 < len__42382__auto___44066)){
args__42389__auto__.push((arguments[i__42383__auto___44067]));

var G__44068 = (i__42383__auto___44067 + (1));
i__42383__auto___44067 = G__44068;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44065))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44065){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44065);
});})(g__42498__auto___44065))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42498__auto___44065){
return (function (seq44035){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44035));
});})(g__42498__auto___44065))
;


var g__42498__auto___44069 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42498__auto___44069){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44070 = arguments.length;
var i__42383__auto___44071 = (0);
while(true){
if((i__42383__auto___44071 < len__42382__auto___44070)){
args__42389__auto__.push((arguments[i__42383__auto___44071]));

var G__44072 = (i__42383__auto___44071 + (1));
i__42383__auto___44071 = G__44072;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44069))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44069){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44069);
});})(g__42498__auto___44069))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42498__auto___44069){
return (function (seq44036){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44036));
});})(g__42498__auto___44069))
;


var g__42498__auto___44073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42498__auto___44073){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44074 = arguments.length;
var i__42383__auto___44075 = (0);
while(true){
if((i__42383__auto___44075 < len__42382__auto___44074)){
args__42389__auto__.push((arguments[i__42383__auto___44075]));

var G__44076 = (i__42383__auto___44075 + (1));
i__42383__auto___44075 = G__44076;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44073))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44073){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44073);
});})(g__42498__auto___44073))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42498__auto___44073){
return (function (seq44037){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44037));
});})(g__42498__auto___44073))
;


var g__42498__auto___44077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42498__auto___44077){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44078 = arguments.length;
var i__42383__auto___44079 = (0);
while(true){
if((i__42383__auto___44079 < len__42382__auto___44078)){
args__42389__auto__.push((arguments[i__42383__auto___44079]));

var G__44080 = (i__42383__auto___44079 + (1));
i__42383__auto___44079 = G__44080;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44077))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44077){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44077);
});})(g__42498__auto___44077))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42498__auto___44077){
return (function (seq44038){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44038));
});})(g__42498__auto___44077))
;


var g__42498__auto___44081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42498__auto___44081){
return (function cljs$spec$gen$alpha$double(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44082 = arguments.length;
var i__42383__auto___44083 = (0);
while(true){
if((i__42383__auto___44083 < len__42382__auto___44082)){
args__42389__auto__.push((arguments[i__42383__auto___44083]));

var G__44084 = (i__42383__auto___44083 + (1));
i__42383__auto___44083 = G__44084;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44081))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44081){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44081);
});})(g__42498__auto___44081))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42498__auto___44081){
return (function (seq44039){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44039));
});})(g__42498__auto___44081))
;


var g__42498__auto___44085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42498__auto___44085){
return (function cljs$spec$gen$alpha$int(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44086 = arguments.length;
var i__42383__auto___44087 = (0);
while(true){
if((i__42383__auto___44087 < len__42382__auto___44086)){
args__42389__auto__.push((arguments[i__42383__auto___44087]));

var G__44088 = (i__42383__auto___44087 + (1));
i__42383__auto___44087 = G__44088;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44085))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44085){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44085);
});})(g__42498__auto___44085))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42498__auto___44085){
return (function (seq44040){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44040));
});})(g__42498__auto___44085))
;


var g__42498__auto___44089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42498__auto___44089){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44090 = arguments.length;
var i__42383__auto___44091 = (0);
while(true){
if((i__42383__auto___44091 < len__42382__auto___44090)){
args__42389__auto__.push((arguments[i__42383__auto___44091]));

var G__44092 = (i__42383__auto___44091 + (1));
i__42383__auto___44091 = G__44092;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44089))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44089){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44089);
});})(g__42498__auto___44089))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42498__auto___44089){
return (function (seq44041){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44041));
});})(g__42498__auto___44089))
;


var g__42498__auto___44093 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42498__auto___44093){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44094 = arguments.length;
var i__42383__auto___44095 = (0);
while(true){
if((i__42383__auto___44095 < len__42382__auto___44094)){
args__42389__auto__.push((arguments[i__42383__auto___44095]));

var G__44096 = (i__42383__auto___44095 + (1));
i__42383__auto___44095 = G__44096;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44093))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44093){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44093);
});})(g__42498__auto___44093))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42498__auto___44093){
return (function (seq44042){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44042));
});})(g__42498__auto___44093))
;


var g__42498__auto___44097 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42498__auto___44097){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44098 = arguments.length;
var i__42383__auto___44099 = (0);
while(true){
if((i__42383__auto___44099 < len__42382__auto___44098)){
args__42389__auto__.push((arguments[i__42383__auto___44099]));

var G__44100 = (i__42383__auto___44099 + (1));
i__42383__auto___44099 = G__44100;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44097))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44097){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44097);
});})(g__42498__auto___44097))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42498__auto___44097){
return (function (seq44043){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44043));
});})(g__42498__auto___44097))
;


var g__42498__auto___44101 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42498__auto___44101){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44102 = arguments.length;
var i__42383__auto___44103 = (0);
while(true){
if((i__42383__auto___44103 < len__42382__auto___44102)){
args__42389__auto__.push((arguments[i__42383__auto___44103]));

var G__44104 = (i__42383__auto___44103 + (1));
i__42383__auto___44103 = G__44104;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44101))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44101){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44101);
});})(g__42498__auto___44101))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42498__auto___44101){
return (function (seq44044){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44044));
});})(g__42498__auto___44101))
;


var g__42498__auto___44105 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42498__auto___44105){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44106 = arguments.length;
var i__42383__auto___44107 = (0);
while(true){
if((i__42383__auto___44107 < len__42382__auto___44106)){
args__42389__auto__.push((arguments[i__42383__auto___44107]));

var G__44108 = (i__42383__auto___44107 + (1));
i__42383__auto___44107 = G__44108;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44105))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44105){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44105);
});})(g__42498__auto___44105))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42498__auto___44105){
return (function (seq44045){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44045));
});})(g__42498__auto___44105))
;


var g__42498__auto___44109 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42498__auto___44109){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44110 = arguments.length;
var i__42383__auto___44111 = (0);
while(true){
if((i__42383__auto___44111 < len__42382__auto___44110)){
args__42389__auto__.push((arguments[i__42383__auto___44111]));

var G__44112 = (i__42383__auto___44111 + (1));
i__42383__auto___44111 = G__44112;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44109))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44109){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44109);
});})(g__42498__auto___44109))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42498__auto___44109){
return (function (seq44046){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44046));
});})(g__42498__auto___44109))
;


var g__42498__auto___44113 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42498__auto___44113){
return (function cljs$spec$gen$alpha$string(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44114 = arguments.length;
var i__42383__auto___44115 = (0);
while(true){
if((i__42383__auto___44115 < len__42382__auto___44114)){
args__42389__auto__.push((arguments[i__42383__auto___44115]));

var G__44116 = (i__42383__auto___44115 + (1));
i__42383__auto___44115 = G__44116;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44113))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44113){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44113);
});})(g__42498__auto___44113))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42498__auto___44113){
return (function (seq44047){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44047));
});})(g__42498__auto___44113))
;


var g__42498__auto___44117 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42498__auto___44117){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44118 = arguments.length;
var i__42383__auto___44119 = (0);
while(true){
if((i__42383__auto___44119 < len__42382__auto___44118)){
args__42389__auto__.push((arguments[i__42383__auto___44119]));

var G__44120 = (i__42383__auto___44119 + (1));
i__42383__auto___44119 = G__44120;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44117))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44117){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44117);
});})(g__42498__auto___44117))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42498__auto___44117){
return (function (seq44048){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44048));
});})(g__42498__auto___44117))
;


var g__42498__auto___44121 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42498__auto___44121){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44122 = arguments.length;
var i__42383__auto___44123 = (0);
while(true){
if((i__42383__auto___44123 < len__42382__auto___44122)){
args__42389__auto__.push((arguments[i__42383__auto___44123]));

var G__44124 = (i__42383__auto___44123 + (1));
i__42383__auto___44123 = G__44124;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44121))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44121){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44121);
});})(g__42498__auto___44121))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42498__auto___44121){
return (function (seq44049){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44049));
});})(g__42498__auto___44121))
;


var g__42498__auto___44125 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42498__auto___44125){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44126 = arguments.length;
var i__42383__auto___44127 = (0);
while(true){
if((i__42383__auto___44127 < len__42382__auto___44126)){
args__42389__auto__.push((arguments[i__42383__auto___44127]));

var G__44128 = (i__42383__auto___44127 + (1));
i__42383__auto___44127 = G__44128;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44125))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44125){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44125);
});})(g__42498__auto___44125))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42498__auto___44125){
return (function (seq44050){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44050));
});})(g__42498__auto___44125))
;


var g__42498__auto___44129 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42498__auto___44129){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44130 = arguments.length;
var i__42383__auto___44131 = (0);
while(true){
if((i__42383__auto___44131 < len__42382__auto___44130)){
args__42389__auto__.push((arguments[i__42383__auto___44131]));

var G__44132 = (i__42383__auto___44131 + (1));
i__42383__auto___44131 = G__44132;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44129))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44129){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44129);
});})(g__42498__auto___44129))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42498__auto___44129){
return (function (seq44051){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44051));
});})(g__42498__auto___44129))
;


var g__42498__auto___44133 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42498__auto___44133){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44134 = arguments.length;
var i__42383__auto___44135 = (0);
while(true){
if((i__42383__auto___44135 < len__42382__auto___44134)){
args__42389__auto__.push((arguments[i__42383__auto___44135]));

var G__44136 = (i__42383__auto___44135 + (1));
i__42383__auto___44135 = G__44136;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});})(g__42498__auto___44133))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42498__auto___44133){
return (function (args){
return cljs.core.deref.call(null,g__42498__auto___44133);
});})(g__42498__auto___44133))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42498__auto___44133){
return (function (seq44052){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44052));
});})(g__42498__auto___44133))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__42389__auto__ = [];
var len__42382__auto___44139 = arguments.length;
var i__42383__auto___44140 = (0);
while(true){
if((i__42383__auto___44140 < len__42382__auto___44139)){
args__42389__auto__.push((arguments[i__42383__auto___44140]));

var G__44141 = (i__42383__auto___44140 + (1));
i__42383__auto___44140 = G__44141;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__44137_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__44137_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq44138){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44138));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__44142_SHARP_){
return (new Date(p1__44142_SHARP_));
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

//# sourceMappingURL=alpha.js.map
