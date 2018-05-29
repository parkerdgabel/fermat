// Compiled by ClojureScript 1.9.946 {}
goog.provide('cats.context');
goog.require('cljs.core');
goog.require('cats.protocols');
cats.context._STAR_context_STAR_ = null;
cats.context._STAR_override_STAR_ = null;
cats.context.throw_illegal_argument = (function cats$context$throw_illegal_argument(text){
throw cljs.core.ex_info.call(null,text,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Return `true` if the provided value satisfies
 *   the Context protocol.
 */
cats.context.context_QMARK_ = (function cats$context$context_QMARK_(v){
if(!((v == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === v.cats$protocols$Context$))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,v);
}
});
/**
 * Given an optional value infer its context. If context is already set, it
 *   is returned as is without any inference operation.
 */
cats.context.infer = (function cats$context$infer(var_args){
var G__45521 = arguments.length;
switch (G__45521) {
case 0:
return cats.context.infer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.context.infer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.context.infer.cljs$core$IFn$_invoke$arity$0 = (function (){
if((cats.context._STAR_context_STAR_ == null)){
cats.context.throw_illegal_argument.call(null,"No context is set.");
} else {
}

return cats.context._STAR_context_STAR_;
});

cats.context.infer.cljs$core$IFn$_invoke$arity$1 = (function (v){
if(!((cats.context._STAR_override_STAR_ == null))){
return cats.context._STAR_context_STAR_;
} else {
if(((!((v == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === v.cats$protocols$Contextual$)))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Contextual,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Contextual,v))){
return cats.protocols._get_context.call(null,v);
} else {
if(!((cats.context._STAR_context_STAR_ == null))){
return cats.context._STAR_context_STAR_;
} else {
return cats.context.throw_illegal_argument.call(null,["No context is set and it can not be automatically ","resolved from provided value"].join(''));

}
}
}
});

cats.context.infer.cljs$lang$maxFixedArity = 1;

/**
 * Deprecated alias to `infer`.
 */
cats.context.get_current = (function cats$context$get_current(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45525 = arguments.length;
var i__42383__auto___45526 = (0);
while(true){
if((i__42383__auto___45526 < len__42382__auto___45525)){
args__42389__auto__.push((arguments[i__42383__auto___45526]));

var G__45527 = (i__42383__auto___45526 + (1));
i__42383__auto___45526 = G__45527;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cats.context.get_current.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});

cats.context.get_current.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cats.context.infer,args);
});

cats.context.get_current.cljs$lang$maxFixedArity = (0);

cats.context.get_current.cljs$lang$applyTo = (function (seq45524){
return cats.context.get_current.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45524));
});


//# sourceMappingURL=context.js.map
