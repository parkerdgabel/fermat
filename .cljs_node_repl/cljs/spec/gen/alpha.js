// Compiled by ClojureScript 1.9.946 {:target :nodejs}
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__42472__auto__ = [];
var len__42465__auto___44010 = arguments.length;
var i__42466__auto___44011 = (0);
while(true){
if((i__42466__auto___44011 < len__42465__auto___44010)){
args__42472__auto__.push((arguments[i__42466__auto___44011]));

var G__44012 = (i__42466__auto___44011 + (1));
i__42466__auto___44011 = G__44012;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq44009){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44009));
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
var args__42472__auto__ = [];
var len__42465__auto___44014 = arguments.length;
var i__42466__auto___44015 = (0);
while(true){
if((i__42466__auto___44015 < len__42465__auto___44014)){
args__42472__auto__.push((arguments[i__42466__auto___44015]));

var G__44016 = (i__42466__auto___44015 + (1));
i__42466__auto___44015 = G__44016;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq44013){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44013));
});

var g_QMARK__44017 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_44018 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__44017){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__44017))
,null));
var mkg_44019 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__44017,g_44018){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__44017,g_44018))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__44017,g_44018,mkg_44019){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__44017).call(null,x);
});})(g_QMARK__44017,g_44018,mkg_44019))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__44017,g_44018,mkg_44019){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_44019).call(null,gfn);
});})(g_QMARK__44017,g_44018,mkg_44019))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__44017,g_44018,mkg_44019){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_44018).call(null,generator);
});})(g_QMARK__44017,g_44018,mkg_44019))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42568__auto___44039 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42568__auto___44039){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44040 = arguments.length;
var i__42466__auto___44041 = (0);
while(true){
if((i__42466__auto___44041 < len__42465__auto___44040)){
args__42472__auto__.push((arguments[i__42466__auto___44041]));

var G__44042 = (i__42466__auto___44041 + (1));
i__42466__auto___44041 = G__44042;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44039))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44039){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44039),args);
});})(g__42568__auto___44039))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42568__auto___44039){
return (function (seq44020){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44020));
});})(g__42568__auto___44039))
;


var g__42568__auto___44043 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42568__auto___44043){
return (function cljs$spec$gen$alpha$list(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44044 = arguments.length;
var i__42466__auto___44045 = (0);
while(true){
if((i__42466__auto___44045 < len__42465__auto___44044)){
args__42472__auto__.push((arguments[i__42466__auto___44045]));

var G__44046 = (i__42466__auto___44045 + (1));
i__42466__auto___44045 = G__44046;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44043))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44043){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44043),args);
});})(g__42568__auto___44043))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42568__auto___44043){
return (function (seq44021){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44021));
});})(g__42568__auto___44043))
;


var g__42568__auto___44047 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42568__auto___44047){
return (function cljs$spec$gen$alpha$map(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44048 = arguments.length;
var i__42466__auto___44049 = (0);
while(true){
if((i__42466__auto___44049 < len__42465__auto___44048)){
args__42472__auto__.push((arguments[i__42466__auto___44049]));

var G__44050 = (i__42466__auto___44049 + (1));
i__42466__auto___44049 = G__44050;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44047))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44047){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44047),args);
});})(g__42568__auto___44047))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42568__auto___44047){
return (function (seq44022){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44022));
});})(g__42568__auto___44047))
;


var g__42568__auto___44051 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42568__auto___44051){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44052 = arguments.length;
var i__42466__auto___44053 = (0);
while(true){
if((i__42466__auto___44053 < len__42465__auto___44052)){
args__42472__auto__.push((arguments[i__42466__auto___44053]));

var G__44054 = (i__42466__auto___44053 + (1));
i__42466__auto___44053 = G__44054;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44051))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44051){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44051),args);
});})(g__42568__auto___44051))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42568__auto___44051){
return (function (seq44023){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44023));
});})(g__42568__auto___44051))
;


var g__42568__auto___44055 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42568__auto___44055){
return (function cljs$spec$gen$alpha$set(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44056 = arguments.length;
var i__42466__auto___44057 = (0);
while(true){
if((i__42466__auto___44057 < len__42465__auto___44056)){
args__42472__auto__.push((arguments[i__42466__auto___44057]));

var G__44058 = (i__42466__auto___44057 + (1));
i__42466__auto___44057 = G__44058;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44055))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44055),args);
});})(g__42568__auto___44055))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42568__auto___44055){
return (function (seq44024){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44024));
});})(g__42568__auto___44055))
;


var g__42568__auto___44059 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42568__auto___44059){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44060 = arguments.length;
var i__42466__auto___44061 = (0);
while(true){
if((i__42466__auto___44061 < len__42465__auto___44060)){
args__42472__auto__.push((arguments[i__42466__auto___44061]));

var G__44062 = (i__42466__auto___44061 + (1));
i__42466__auto___44061 = G__44062;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44059))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44059){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44059),args);
});})(g__42568__auto___44059))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42568__auto___44059){
return (function (seq44025){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44025));
});})(g__42568__auto___44059))
;


var g__42568__auto___44063 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42568__auto___44063){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44064 = arguments.length;
var i__42466__auto___44065 = (0);
while(true){
if((i__42466__auto___44065 < len__42465__auto___44064)){
args__42472__auto__.push((arguments[i__42466__auto___44065]));

var G__44066 = (i__42466__auto___44065 + (1));
i__42466__auto___44065 = G__44066;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44063))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44063){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44063),args);
});})(g__42568__auto___44063))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42568__auto___44063){
return (function (seq44026){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44026));
});})(g__42568__auto___44063))
;


var g__42568__auto___44067 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42568__auto___44067){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44068 = arguments.length;
var i__42466__auto___44069 = (0);
while(true){
if((i__42466__auto___44069 < len__42465__auto___44068)){
args__42472__auto__.push((arguments[i__42466__auto___44069]));

var G__44070 = (i__42466__auto___44069 + (1));
i__42466__auto___44069 = G__44070;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44067))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44067){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44067),args);
});})(g__42568__auto___44067))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42568__auto___44067){
return (function (seq44027){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44027));
});})(g__42568__auto___44067))
;


var g__42568__auto___44071 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42568__auto___44071){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44072 = arguments.length;
var i__42466__auto___44073 = (0);
while(true){
if((i__42466__auto___44073 < len__42465__auto___44072)){
args__42472__auto__.push((arguments[i__42466__auto___44073]));

var G__44074 = (i__42466__auto___44073 + (1));
i__42466__auto___44073 = G__44074;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44071))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44071){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44071),args);
});})(g__42568__auto___44071))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42568__auto___44071){
return (function (seq44028){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44028));
});})(g__42568__auto___44071))
;


var g__42568__auto___44075 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42568__auto___44075){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44076 = arguments.length;
var i__42466__auto___44077 = (0);
while(true){
if((i__42466__auto___44077 < len__42465__auto___44076)){
args__42472__auto__.push((arguments[i__42466__auto___44077]));

var G__44078 = (i__42466__auto___44077 + (1));
i__42466__auto___44077 = G__44078;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44075))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44075),args);
});})(g__42568__auto___44075))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42568__auto___44075){
return (function (seq44029){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44029));
});})(g__42568__auto___44075))
;


var g__42568__auto___44079 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42568__auto___44079){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44080 = arguments.length;
var i__42466__auto___44081 = (0);
while(true){
if((i__42466__auto___44081 < len__42465__auto___44080)){
args__42472__auto__.push((arguments[i__42466__auto___44081]));

var G__44082 = (i__42466__auto___44081 + (1));
i__42466__auto___44081 = G__44082;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44079))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44079),args);
});})(g__42568__auto___44079))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42568__auto___44079){
return (function (seq44030){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44030));
});})(g__42568__auto___44079))
;


var g__42568__auto___44083 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42568__auto___44083){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44084 = arguments.length;
var i__42466__auto___44085 = (0);
while(true){
if((i__42466__auto___44085 < len__42465__auto___44084)){
args__42472__auto__.push((arguments[i__42466__auto___44085]));

var G__44086 = (i__42466__auto___44085 + (1));
i__42466__auto___44085 = G__44086;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44083))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44083),args);
});})(g__42568__auto___44083))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42568__auto___44083){
return (function (seq44031){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44031));
});})(g__42568__auto___44083))
;


var g__42568__auto___44087 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42568__auto___44087){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44088 = arguments.length;
var i__42466__auto___44089 = (0);
while(true){
if((i__42466__auto___44089 < len__42465__auto___44088)){
args__42472__auto__.push((arguments[i__42466__auto___44089]));

var G__44090 = (i__42466__auto___44089 + (1));
i__42466__auto___44089 = G__44090;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44087))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44087),args);
});})(g__42568__auto___44087))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42568__auto___44087){
return (function (seq44032){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44032));
});})(g__42568__auto___44087))
;


var g__42568__auto___44091 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42568__auto___44091){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44092 = arguments.length;
var i__42466__auto___44093 = (0);
while(true){
if((i__42466__auto___44093 < len__42465__auto___44092)){
args__42472__auto__.push((arguments[i__42466__auto___44093]));

var G__44094 = (i__42466__auto___44093 + (1));
i__42466__auto___44093 = G__44094;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44091))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44091),args);
});})(g__42568__auto___44091))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42568__auto___44091){
return (function (seq44033){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44033));
});})(g__42568__auto___44091))
;


var g__42568__auto___44095 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42568__auto___44095){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44096 = arguments.length;
var i__42466__auto___44097 = (0);
while(true){
if((i__42466__auto___44097 < len__42465__auto___44096)){
args__42472__auto__.push((arguments[i__42466__auto___44097]));

var G__44098 = (i__42466__auto___44097 + (1));
i__42466__auto___44097 = G__44098;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44095))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44095),args);
});})(g__42568__auto___44095))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42568__auto___44095){
return (function (seq44034){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44034));
});})(g__42568__auto___44095))
;


var g__42568__auto___44099 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42568__auto___44099){
return (function cljs$spec$gen$alpha$return(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44100 = arguments.length;
var i__42466__auto___44101 = (0);
while(true){
if((i__42466__auto___44101 < len__42465__auto___44100)){
args__42472__auto__.push((arguments[i__42466__auto___44101]));

var G__44102 = (i__42466__auto___44101 + (1));
i__42466__auto___44101 = G__44102;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44099))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44099){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44099),args);
});})(g__42568__auto___44099))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42568__auto___44099){
return (function (seq44035){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44035));
});})(g__42568__auto___44099))
;


var g__42568__auto___44103 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42568__auto___44103){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44104 = arguments.length;
var i__42466__auto___44105 = (0);
while(true){
if((i__42466__auto___44105 < len__42465__auto___44104)){
args__42472__auto__.push((arguments[i__42466__auto___44105]));

var G__44106 = (i__42466__auto___44105 + (1));
i__42466__auto___44105 = G__44106;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44103))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44103),args);
});})(g__42568__auto___44103))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42568__auto___44103){
return (function (seq44036){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44036));
});})(g__42568__auto___44103))
;


var g__42568__auto___44107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42568__auto___44107){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44108 = arguments.length;
var i__42466__auto___44109 = (0);
while(true){
if((i__42466__auto___44109 < len__42465__auto___44108)){
args__42472__auto__.push((arguments[i__42466__auto___44109]));

var G__44110 = (i__42466__auto___44109 + (1));
i__42466__auto___44109 = G__44110;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44107))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44107),args);
});})(g__42568__auto___44107))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42568__auto___44107){
return (function (seq44037){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44037));
});})(g__42568__auto___44107))
;


var g__42568__auto___44111 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42568__auto___44111){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44112 = arguments.length;
var i__42466__auto___44113 = (0);
while(true){
if((i__42466__auto___44113 < len__42465__auto___44112)){
args__42472__auto__.push((arguments[i__42466__auto___44113]));

var G__44114 = (i__42466__auto___44113 + (1));
i__42466__auto___44113 = G__44114;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42568__auto___44111))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42568__auto___44111){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42568__auto___44111),args);
});})(g__42568__auto___44111))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42568__auto___44111){
return (function (seq44038){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44038));
});})(g__42568__auto___44111))
;

var g__42581__auto___44136 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42581__auto___44136){
return (function cljs$spec$gen$alpha$any(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44137 = arguments.length;
var i__42466__auto___44138 = (0);
while(true){
if((i__42466__auto___44138 < len__42465__auto___44137)){
args__42472__auto__.push((arguments[i__42466__auto___44138]));

var G__44139 = (i__42466__auto___44138 + (1));
i__42466__auto___44138 = G__44139;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44136))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44136){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44136);
});})(g__42581__auto___44136))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42581__auto___44136){
return (function (seq44115){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44115));
});})(g__42581__auto___44136))
;


var g__42581__auto___44140 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42581__auto___44140){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44141 = arguments.length;
var i__42466__auto___44142 = (0);
while(true){
if((i__42466__auto___44142 < len__42465__auto___44141)){
args__42472__auto__.push((arguments[i__42466__auto___44142]));

var G__44143 = (i__42466__auto___44142 + (1));
i__42466__auto___44142 = G__44143;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44140))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44140){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44140);
});})(g__42581__auto___44140))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42581__auto___44140){
return (function (seq44116){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44116));
});})(g__42581__auto___44140))
;


var g__42581__auto___44144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42581__auto___44144){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44145 = arguments.length;
var i__42466__auto___44146 = (0);
while(true){
if((i__42466__auto___44146 < len__42465__auto___44145)){
args__42472__auto__.push((arguments[i__42466__auto___44146]));

var G__44147 = (i__42466__auto___44146 + (1));
i__42466__auto___44146 = G__44147;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44144))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44144){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44144);
});})(g__42581__auto___44144))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42581__auto___44144){
return (function (seq44117){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44117));
});})(g__42581__auto___44144))
;


var g__42581__auto___44148 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42581__auto___44148){
return (function cljs$spec$gen$alpha$char(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44149 = arguments.length;
var i__42466__auto___44150 = (0);
while(true){
if((i__42466__auto___44150 < len__42465__auto___44149)){
args__42472__auto__.push((arguments[i__42466__auto___44150]));

var G__44151 = (i__42466__auto___44150 + (1));
i__42466__auto___44150 = G__44151;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44148))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44148){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44148);
});})(g__42581__auto___44148))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42581__auto___44148){
return (function (seq44118){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44118));
});})(g__42581__auto___44148))
;


var g__42581__auto___44152 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42581__auto___44152){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44153 = arguments.length;
var i__42466__auto___44154 = (0);
while(true){
if((i__42466__auto___44154 < len__42465__auto___44153)){
args__42472__auto__.push((arguments[i__42466__auto___44154]));

var G__44155 = (i__42466__auto___44154 + (1));
i__42466__auto___44154 = G__44155;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44152))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44152){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44152);
});})(g__42581__auto___44152))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42581__auto___44152){
return (function (seq44119){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44119));
});})(g__42581__auto___44152))
;


var g__42581__auto___44156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42581__auto___44156){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44157 = arguments.length;
var i__42466__auto___44158 = (0);
while(true){
if((i__42466__auto___44158 < len__42465__auto___44157)){
args__42472__auto__.push((arguments[i__42466__auto___44158]));

var G__44159 = (i__42466__auto___44158 + (1));
i__42466__auto___44158 = G__44159;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44156))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44156){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44156);
});})(g__42581__auto___44156))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42581__auto___44156){
return (function (seq44120){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44120));
});})(g__42581__auto___44156))
;


var g__42581__auto___44160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42581__auto___44160){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44161 = arguments.length;
var i__42466__auto___44162 = (0);
while(true){
if((i__42466__auto___44162 < len__42465__auto___44161)){
args__42472__auto__.push((arguments[i__42466__auto___44162]));

var G__44163 = (i__42466__auto___44162 + (1));
i__42466__auto___44162 = G__44163;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44160))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44160){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44160);
});})(g__42581__auto___44160))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42581__auto___44160){
return (function (seq44121){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44121));
});})(g__42581__auto___44160))
;


var g__42581__auto___44164 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42581__auto___44164){
return (function cljs$spec$gen$alpha$double(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44165 = arguments.length;
var i__42466__auto___44166 = (0);
while(true){
if((i__42466__auto___44166 < len__42465__auto___44165)){
args__42472__auto__.push((arguments[i__42466__auto___44166]));

var G__44167 = (i__42466__auto___44166 + (1));
i__42466__auto___44166 = G__44167;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44164))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44164){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44164);
});})(g__42581__auto___44164))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42581__auto___44164){
return (function (seq44122){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44122));
});})(g__42581__auto___44164))
;


var g__42581__auto___44168 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42581__auto___44168){
return (function cljs$spec$gen$alpha$int(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44169 = arguments.length;
var i__42466__auto___44170 = (0);
while(true){
if((i__42466__auto___44170 < len__42465__auto___44169)){
args__42472__auto__.push((arguments[i__42466__auto___44170]));

var G__44171 = (i__42466__auto___44170 + (1));
i__42466__auto___44170 = G__44171;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44168))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44168){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44168);
});})(g__42581__auto___44168))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42581__auto___44168){
return (function (seq44123){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44123));
});})(g__42581__auto___44168))
;


var g__42581__auto___44172 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42581__auto___44172){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44173 = arguments.length;
var i__42466__auto___44174 = (0);
while(true){
if((i__42466__auto___44174 < len__42465__auto___44173)){
args__42472__auto__.push((arguments[i__42466__auto___44174]));

var G__44175 = (i__42466__auto___44174 + (1));
i__42466__auto___44174 = G__44175;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44172))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44172){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44172);
});})(g__42581__auto___44172))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42581__auto___44172){
return (function (seq44124){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44124));
});})(g__42581__auto___44172))
;


var g__42581__auto___44176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42581__auto___44176){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44177 = arguments.length;
var i__42466__auto___44178 = (0);
while(true){
if((i__42466__auto___44178 < len__42465__auto___44177)){
args__42472__auto__.push((arguments[i__42466__auto___44178]));

var G__44179 = (i__42466__auto___44178 + (1));
i__42466__auto___44178 = G__44179;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44176))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44176){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44176);
});})(g__42581__auto___44176))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42581__auto___44176){
return (function (seq44125){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44125));
});})(g__42581__auto___44176))
;


var g__42581__auto___44180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42581__auto___44180){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44181 = arguments.length;
var i__42466__auto___44182 = (0);
while(true){
if((i__42466__auto___44182 < len__42465__auto___44181)){
args__42472__auto__.push((arguments[i__42466__auto___44182]));

var G__44183 = (i__42466__auto___44182 + (1));
i__42466__auto___44182 = G__44183;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44180))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44180){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44180);
});})(g__42581__auto___44180))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42581__auto___44180){
return (function (seq44126){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44126));
});})(g__42581__auto___44180))
;


var g__42581__auto___44184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42581__auto___44184){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44185 = arguments.length;
var i__42466__auto___44186 = (0);
while(true){
if((i__42466__auto___44186 < len__42465__auto___44185)){
args__42472__auto__.push((arguments[i__42466__auto___44186]));

var G__44187 = (i__42466__auto___44186 + (1));
i__42466__auto___44186 = G__44187;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44184))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44184){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44184);
});})(g__42581__auto___44184))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42581__auto___44184){
return (function (seq44127){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44127));
});})(g__42581__auto___44184))
;


var g__42581__auto___44188 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42581__auto___44188){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44189 = arguments.length;
var i__42466__auto___44190 = (0);
while(true){
if((i__42466__auto___44190 < len__42465__auto___44189)){
args__42472__auto__.push((arguments[i__42466__auto___44190]));

var G__44191 = (i__42466__auto___44190 + (1));
i__42466__auto___44190 = G__44191;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44188))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44188){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44188);
});})(g__42581__auto___44188))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42581__auto___44188){
return (function (seq44128){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44128));
});})(g__42581__auto___44188))
;


var g__42581__auto___44192 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42581__auto___44192){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44193 = arguments.length;
var i__42466__auto___44194 = (0);
while(true){
if((i__42466__auto___44194 < len__42465__auto___44193)){
args__42472__auto__.push((arguments[i__42466__auto___44194]));

var G__44195 = (i__42466__auto___44194 + (1));
i__42466__auto___44194 = G__44195;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44192))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44192){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44192);
});})(g__42581__auto___44192))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42581__auto___44192){
return (function (seq44129){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44129));
});})(g__42581__auto___44192))
;


var g__42581__auto___44196 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42581__auto___44196){
return (function cljs$spec$gen$alpha$string(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44197 = arguments.length;
var i__42466__auto___44198 = (0);
while(true){
if((i__42466__auto___44198 < len__42465__auto___44197)){
args__42472__auto__.push((arguments[i__42466__auto___44198]));

var G__44199 = (i__42466__auto___44198 + (1));
i__42466__auto___44198 = G__44199;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44196))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44196){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44196);
});})(g__42581__auto___44196))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42581__auto___44196){
return (function (seq44130){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44130));
});})(g__42581__auto___44196))
;


var g__42581__auto___44200 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42581__auto___44200){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44201 = arguments.length;
var i__42466__auto___44202 = (0);
while(true){
if((i__42466__auto___44202 < len__42465__auto___44201)){
args__42472__auto__.push((arguments[i__42466__auto___44202]));

var G__44203 = (i__42466__auto___44202 + (1));
i__42466__auto___44202 = G__44203;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44200))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44200){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44200);
});})(g__42581__auto___44200))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42581__auto___44200){
return (function (seq44131){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44131));
});})(g__42581__auto___44200))
;


var g__42581__auto___44204 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42581__auto___44204){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44205 = arguments.length;
var i__42466__auto___44206 = (0);
while(true){
if((i__42466__auto___44206 < len__42465__auto___44205)){
args__42472__auto__.push((arguments[i__42466__auto___44206]));

var G__44207 = (i__42466__auto___44206 + (1));
i__42466__auto___44206 = G__44207;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44204))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44204){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44204);
});})(g__42581__auto___44204))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42581__auto___44204){
return (function (seq44132){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44132));
});})(g__42581__auto___44204))
;


var g__42581__auto___44208 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42581__auto___44208){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44209 = arguments.length;
var i__42466__auto___44210 = (0);
while(true){
if((i__42466__auto___44210 < len__42465__auto___44209)){
args__42472__auto__.push((arguments[i__42466__auto___44210]));

var G__44211 = (i__42466__auto___44210 + (1));
i__42466__auto___44210 = G__44211;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44208))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44208){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44208);
});})(g__42581__auto___44208))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42581__auto___44208){
return (function (seq44133){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44133));
});})(g__42581__auto___44208))
;


var g__42581__auto___44212 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42581__auto___44212){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44213 = arguments.length;
var i__42466__auto___44214 = (0);
while(true){
if((i__42466__auto___44214 < len__42465__auto___44213)){
args__42472__auto__.push((arguments[i__42466__auto___44214]));

var G__44215 = (i__42466__auto___44214 + (1));
i__42466__auto___44214 = G__44215;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44212))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44212){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44212);
});})(g__42581__auto___44212))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42581__auto___44212){
return (function (seq44134){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44134));
});})(g__42581__auto___44212))
;


var g__42581__auto___44216 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42581__auto___44216){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44217 = arguments.length;
var i__42466__auto___44218 = (0);
while(true){
if((i__42466__auto___44218 < len__42465__auto___44217)){
args__42472__auto__.push((arguments[i__42466__auto___44218]));

var G__44219 = (i__42466__auto___44218 + (1));
i__42466__auto___44218 = G__44219;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});})(g__42581__auto___44216))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42581__auto___44216){
return (function (args){
return cljs.core.deref.call(null,g__42581__auto___44216);
});})(g__42581__auto___44216))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42581__auto___44216){
return (function (seq44135){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44135));
});})(g__42581__auto___44216))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__42472__auto__ = [];
var len__42465__auto___44222 = arguments.length;
var i__42466__auto___44223 = (0);
while(true){
if((i__42466__auto___44223 < len__42465__auto___44222)){
args__42472__auto__.push((arguments[i__42466__auto___44223]));

var G__44224 = (i__42466__auto___44223 + (1));
i__42466__auto___44223 = G__44224;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__44220_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__44220_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq44221){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44221));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__44225_SHARP_){
return (new Date(p1__44225_SHARP_));
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
