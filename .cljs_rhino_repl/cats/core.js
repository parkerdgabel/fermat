// Compiled by ClojureScript 1.9.946 {}
goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('clojure.set');
goog.require('cats.context');
cats.core.mempty = (function cats$core$mempty(var_args){
var G__45260 = arguments.length;
switch (G__45260) {
case 0:
return cats.core.mempty.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.mempty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mempty.call(null,cats.context.infer.call(null));
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mempty.call(null,ctx);
});

cats.core.mempty.cljs$lang$maxFixedArity = 1;

cats.core.mappend = (function cats$core$mappend(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45263 = arguments.length;
var i__42383__auto___45264 = (0);
while(true){
if((i__42383__auto___45264 < len__42382__auto___45263)){
args__42389__auto__.push((arguments[i__42383__auto___45264]));

var G__45265 = (i__42383__auto___45264 + (1));
i__42383__auto___45264 = G__45265;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});

cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic = (function (svs){
if(cljs.core.seq.call(null,svs)){
} else {
throw (new Error("Assert failed: (seq svs)"));
}

var ctx = cats.context.infer.call(null,cljs.core.first.call(null,svs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._mappend,ctx),svs);
});

cats.core.mappend.cljs$lang$maxFixedArity = (0);

cats.core.mappend.cljs$lang$applyTo = (function (seq45262){
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45262));
});

/**
 * Given any value `v`, return it wrapped in
 *   the default/effect-free context.
 * 
 *   This is a multi-arity function that with arity `pure/1`
 *   uses the dynamic scope to resolve the current
 *   context. With `pure/2`, you can force a specific context
 *   value.
 * 
 *   Example:
 * 
 *    (with-context either/context
 *      (pure 1))
 *    ;; => #<Right [1]>
 * 
 *    (pure either/context 1)
 *    ;; => #<Right [1]>
 *   
 */
cats.core.pure = (function cats$core$pure(var_args){
var G__45267 = arguments.length;
switch (G__45267) {
case 1:
return cats.core.pure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.pure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.pure.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.pure.call(null,cats.context.infer.call(null),v);
});

cats.core.pure.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._pure.call(null,ctx,v);
});

cats.core.pure.cljs$lang$maxFixedArity = 2;

/**
 * This is a monad version of `pure` and works
 *   identically to it.
 */
cats.core.return$ = (function cats$core$return(var_args){
var G__45270 = arguments.length;
switch (G__45270) {
case 1:
return cats.core.return$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.return$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.return$.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.return$.call(null,cats.context.infer.call(null),v);
});

cats.core.return$.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._mreturn.call(null,ctx,v);
});

cats.core.return$.cljs$lang$maxFixedArity = 2;

/**
 * Given a monadic value `mv` and a function `f`,
 *   apply `f` to the unwrapped value of `mv`.
 * 
 *    (bind (either/right 1) (fn [v]
 *                             (return (inc v))))
 *    ;; => #<Right [2]>
 * 
 *   For convenience, you may prefer to use the `mlet` macro,
 *   which provides a beautiful, `let`-like syntax for
 *   composing operations with the `bind` function.
 */
cats.core.bind = (function cats$core$bind(mv,f){
var ctx = cats.context.infer.call(null,mv);
return cats.protocols._mbind.call(null,ctx,mv,((function (ctx){
return (function (v){
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,ctx))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45272 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return f.call(null,v);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45272;
}});})(ctx))
);
});
cats.core.mzero = (function cats$core$mzero(var_args){
var G__45274 = arguments.length;
switch (G__45274) {
case 0:
return cats.core.mzero.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.mzero.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mzero.call(null,cats.context.infer.call(null));
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mzero.call(null,ctx);
});

cats.core.mzero.cljs$lang$maxFixedArity = 1;

cats.core.mplus = (function cats$core$mplus(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45277 = arguments.length;
var i__42383__auto___45278 = (0);
while(true){
if((i__42383__auto___45278 < len__42382__auto___45277)){
args__42389__auto__.push((arguments[i__42383__auto___45278]));

var G__45279 = (i__42383__auto___45278 + (1));
i__42383__auto___45278 = G__45279;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((0) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((0)),(0),null)):null);
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(argseq__42390__auto__);
});

cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic = (function (mvs){
if(cljs.core.seq.call(null,mvs)){
} else {
throw (new Error("Assert failed: (seq mvs)"));
}

var ctx = cats.context.infer.call(null,cljs.core.first.call(null,mvs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._mplus,ctx),mvs);
});

cats.core.mplus.cljs$lang$maxFixedArity = (0);

cats.core.mplus.cljs$lang$applyTo = (function (seq45276){
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45276));
});

cats.core.guard = (function cats$core$guard(b){
if(cljs.core.truth_(b)){
return cats.core.return$.call(null,true);
} else {
return cats.core.mzero.call(null);
}
});
/**
 * Remove one level of monadic structure.
 *   This is the same as `(bind mv identity)`.
 */
cats.core.join = (function cats$core$join(mv){
return cats.core.bind.call(null,mv,cljs.core.identity);
});
/**
 * Apply a function `f` to the value wrapped in functor `fv`,
 *   preserving the context type.
 */
cats.core.fmap = (function cats$core$fmap(var_args){
var G__45281 = arguments.length;
switch (G__45281) {
case 1:
return cats.core.fmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (fv){
return cats.core.fmap.call(null,f,fv);
});
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,fv){
var ctx = cats.context.infer.call(null,fv);
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,ctx))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45282 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._fmap.call(null,ctx,f,fv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45282;
}});

cats.core.fmap.cljs$lang$maxFixedArity = 2;

/**
 * Map over both arguments at the same time.
 * 
 *   Given functions `f` and `g` and a value wrapped in a bifunctor `bv`,
 *   apply `f` to a first argument or `g` to a second argument.
 * 
 *    (bimap dec inc (either/right 1)
 *    ;; => #<Right 2>
 * 
 *    (bimap dec inc (either/left 1)
 *    ;; => #<Left 0>
 */
cats.core.bimap = (function cats$core$bimap(var_args){
var G__45285 = arguments.length;
switch (G__45285) {
case 2:
return cats.core.bimap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.bimap.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function (bv){
return cats.core.bimap.call(null,f,g,bv);
});
});

cats.core.bimap.cljs$core$IFn$_invoke$arity$3 = (function (f,g,bv){
var ctx = cats.context.infer.call(null,bv);
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,ctx))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45286 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._bimap.call(null,ctx,f,g,bv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45286;
}});

cats.core.bimap.cljs$lang$maxFixedArity = 3;

/**
 * Map covariantly over the first argument.
 * 
 *   Given a function `f` and a value wrapped in a bifunctor `bv`,
 *   apply `f` to the first argument, if present, otherwise leave `bv` unchanged.
 * 
 *    (left-map dec (either/right 1)
 *    ;; => #<Right 1>
 * 
 *    (left-map dec (either/left 1)
 *    ;; => #<Left 0>
 */
cats.core.left_map = (function cats$core$left_map(var_args){
var G__45289 = arguments.length;
switch (G__45289) {
case 1:
return cats.core.left_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.left_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.left_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (bv){
return cats.core.left_map.call(null,f,bv);
});
});

cats.core.left_map.cljs$core$IFn$_invoke$arity$2 = (function (f,bv){
return cats.core.bimap.call(null,f,cljs.core.identity,bv);
});

cats.core.left_map.cljs$lang$maxFixedArity = 2;

/**
 * Map covariantly over the second argument.
 * 
 *   Given a function `g` and a value wrapped in a bifunctor `bv`,
 *   apply `g` to the second argument, if present, otherwise leave `bv` unchanged.
 * 
 *    (right-map inc (either/right 1)
 *    ;; => #<Right 2>
 * 
 *    (right-map inc (either/left 1)
 *    ;; => #<Left 1>
 */
cats.core.right_map = (function cats$core$right_map(var_args){
var G__45292 = arguments.length;
switch (G__45292) {
case 1:
return cats.core.right_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.right_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.right_map.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (bv){
return cats.core.right_map.call(null,g,bv);
});
});

cats.core.right_map.cljs$core$IFn$_invoke$arity$2 = (function (g,bv){
return cats.core.bimap.call(null,cljs.core.identity,g,bv);
});

cats.core.right_map.cljs$lang$maxFixedArity = 2;

/**
 * Given a function wrapped in a monadic context `af`,
 *   and a value wrapped in a monadic context `av`,
 *   apply the unwrapped function to the unwrapped value
 *   and return the result, wrapped in the same context as `av`.
 * 
 *   This function is variadic, so it can be used like
 *   a Haskell-style left-associative fapply.
 */
cats.core.fapply = (function cats$core$fapply(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45296 = arguments.length;
var i__42383__auto___45297 = (0);
while(true){
if((i__42383__auto___45297 < len__42382__auto___45296)){
args__42389__auto__.push((arguments[i__42383__auto___45297]));

var G__45298 = (i__42383__auto___45297 + (1));
i__42383__auto___45297 = G__45298;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((1) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((1)),(0),null)):null);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42390__auto__);
});

cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic = (function (af,avs){
if(cljs.core.seq.call(null,avs)){
} else {
throw (new Error("Assert failed: (seq avs)"));
}

var ctx = cats.context.infer.call(null,af);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._fapply,ctx),af,avs);
});

cats.core.fapply.cljs$lang$maxFixedArity = (1);

cats.core.fapply.cljs$lang$applyTo = (function (seq45294){
var G__45295 = cljs.core.first.call(null,seq45294);
var seq45294__$1 = cljs.core.next.call(null,seq45294);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic(G__45295,seq45294__$1);
});

cats.core.deps = (function cats$core$deps(expr,syms){
if(((expr instanceof cljs.core.Symbol)) && (cljs.core.contains_QMARK_.call(null,syms,expr))){
var x__42057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.mapcat.call(null,(function (p1__45299_SHARP_){
return cats.core.deps.call(null,p1__45299_SHARP_,syms);
}),expr);
} else {
return cljs.core.List.EMPTY;

}
}
});
cats.core.rename_sym = (function cats$core$rename_sym(expr,renames){
return cljs.core.get.call(null,renames,expr,expr);
});
cats.core.rename = (function cats$core$rename(expr,renames){
if((expr instanceof cljs.core.Symbol)){
return cats.core.rename_sym.call(null,expr,renames);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.map.call(null,(function (p1__45300_SHARP_){
return cats.core.rename.call(null,p1__45300_SHARP_,renames);
}),expr);
} else {
return expr;

}
}
});
cats.core.dedupe_symbols_STAR_ = (function cats$core$dedupe_symbols_STAR_(sym__GT_ap,body){
var renamer = (function cats$core$dedupe_symbols_STAR__$_renamer(p__45308,p__45309){
var map__45310 = p__45308;
var map__45310__$1 = ((((!((map__45310 == null)))?((((map__45310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45310):map__45310);
var summ = map__45310__$1;
var body__$1 = cljs.core.get.call(null,map__45310__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var syms = cljs.core.get.call(null,map__45310__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var aps = cljs.core.get.call(null,map__45310__$1,new cljs.core.Keyword(null,"aps","aps",265109554));
var seen = cljs.core.get.call(null,map__45310__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var renames = cljs.core.get.call(null,map__45310__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var vec__45311 = p__45309;
var s = cljs.core.nth.call(null,vec__45311,(0),null);
var ap = cljs.core.nth.call(null,vec__45311,(1),null);
var ap_SINGLEQUOTE_ = cats.core.rename.call(null,ap,renames);
var new_aps = cljs.core.conj.call(null,aps,ap_SINGLEQUOTE_);
if(cljs.core.truth_(seen.call(null,s))){
var s_SINGLEQUOTE_ = cljs.core.gensym.call(null);
var new_syms = cljs.core.conj.call(null,syms,s_SINGLEQUOTE_);
var new_seen = cljs.core.conj.call(null,seen,s_SINGLEQUOTE_);
var new_renames = cljs.core.assoc.call(null,renames,s,s_SINGLEQUOTE_);
var new_body = cats.core.rename.call(null,body__$1,new_renames);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),new_renames,new cljs.core.Keyword(null,"body","body",-2049205669),new_body], null);
} else {
var new_syms = cljs.core.conj.call(null,syms,s);
var new_seen = cljs.core.conj.call(null,seen,s);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),renames,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null);
}
});
var summ = cljs.core.reduce.call(null,renamer,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"aps","aps",265109554),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null),sym__GT_ap);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,cljs.core.vector,new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(summ),new cljs.core.Keyword(null,"aps","aps",265109554).cljs$core$IFn$_invoke$arity$1(summ)),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(summ)], null);
});
cats.core.dedupe_symbols = (function cats$core$dedupe_symbols(bindings,body){
var syms = cljs.core.map.call(null,cljs.core.first,bindings);
var aps = cljs.core.map.call(null,cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.call(null,cljs.core.vector,syms,aps);
return cats.core.dedupe_symbols_STAR_.call(null,sym__GT_ap,body);
});
cats.core.dependency_map = (function cats$core$dependency_map(sym__GT_ap){
var syms = cljs.core.map.call(null,cljs.core.first,sym__GT_ap);
var symset = cljs.core.set.call(null,syms);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__41985__auto__ = ((function (syms,symset){
return (function cats$core$dependency_map_$_iter__45315(s__45316){
return (new cljs.core.LazySeq(null,((function (syms,symset){
return (function (){
var s__45316__$1 = s__45316;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45316__$1);
if(temp__5457__auto__){
var s__45316__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45316__$2)){
var c__41983__auto__ = cljs.core.chunk_first.call(null,s__45316__$2);
var size__41984__auto__ = cljs.core.count.call(null,c__41983__auto__);
var b__45318 = cljs.core.chunk_buffer.call(null,size__41984__auto__);
if((function (){var i__45317 = (0);
while(true){
if((i__45317 < size__41984__auto__)){
var vec__45319 = cljs.core._nth.call(null,c__41983__auto__,i__45317);
var s = cljs.core.nth.call(null,vec__45319,(0),null);
var ap = cljs.core.nth.call(null,vec__45319,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
cljs.core.chunk_append.call(null,b__45318,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null));

var G__45325 = (i__45317 + (1));
i__45317 = G__45325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45318),cats$core$dependency_map_$_iter__45315.call(null,cljs.core.chunk_rest.call(null,s__45316__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45318),null);
}
} else {
var vec__45322 = cljs.core.first.call(null,s__45316__$2);
var s = cljs.core.nth.call(null,vec__45322,(0),null);
var ap = cljs.core.nth.call(null,vec__45322,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null),cats$core$dependency_map_$_iter__45315.call(null,cljs.core.rest.call(null,s__45316__$2)));
}
} else {
return null;
}
break;
}
});})(syms,symset))
,null,null));
});})(syms,symset))
;
return iter__41985__auto__.call(null,sym__GT_ap);
})());
});
cats.core.remove_deps = (function cats$core$remove_deps(deps,symset){
var removed = (function (){var iter__41985__auto__ = (function cats$core$remove_deps_$_iter__45326(s__45327){
return (new cljs.core.LazySeq(null,(function (){
var s__45327__$1 = s__45327;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45327__$1);
if(temp__5457__auto__){
var s__45327__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45327__$2)){
var c__41983__auto__ = cljs.core.chunk_first.call(null,s__45327__$2);
var size__41984__auto__ = cljs.core.count.call(null,c__41983__auto__);
var b__45329 = cljs.core.chunk_buffer.call(null,size__41984__auto__);
if((function (){var i__45328 = (0);
while(true){
if((i__45328 < size__41984__auto__)){
var vec__45330 = cljs.core._nth.call(null,c__41983__auto__,i__45328);
var s = cljs.core.nth.call(null,vec__45330,(0),null);
var depset = cljs.core.nth.call(null,vec__45330,(1),null);
cljs.core.chunk_append.call(null,b__45329,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null));

var G__45336 = (i__45328 + (1));
i__45328 = G__45336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45329),cats$core$remove_deps_$_iter__45326.call(null,cljs.core.chunk_rest.call(null,s__45327__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45329),null);
}
} else {
var vec__45333 = cljs.core.first.call(null,s__45327__$2);
var s = cljs.core.nth.call(null,vec__45333,(0),null);
var depset = cljs.core.nth.call(null,vec__45333,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null),cats$core$remove_deps_$_iter__45326.call(null,cljs.core.rest.call(null,s__45327__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41985__auto__.call(null,deps);
})();
return cljs.core.into.call(null,cljs.core.empty.call(null,deps),removed);
});
cats.core.topo_sort_STAR_ = (function cats$core$topo_sort_STAR_(deps,seen,batches,current){
while(true){
if(cljs.core.empty_QMARK_.call(null,deps)){
return cljs.core.conj.call(null,batches,current);
} else {
var dep = cljs.core.first.call(null,deps);
var vec__45337 = dep;
var s = cljs.core.nth.call(null,vec__45337,(0),null);
var dependencies = cljs.core.nth.call(null,vec__45337,(1),null);
var dependant_QMARK_ = cljs.core.some.call(null,dependencies,seen);
if((dependant_QMARK_ == null)){
var G__45340 = cljs.core.subvec.call(null,deps,(1));
var G__45341 = cljs.core.conj.call(null,seen,s);
var G__45342 = batches;
var G__45343 = cljs.core.conj.call(null,current,s);
deps = G__45340;
seen = G__45341;
batches = G__45342;
current = G__45343;
continue;
} else {
var G__45344 = cats.core.remove_deps.call(null,cljs.core.subvec.call(null,deps,(1)),cljs.core.set.call(null,current));
var G__45345 = cljs.core.conj.call(null,seen,s);
var G__45346 = cljs.core.conj.call(null,batches,current);
var G__45347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
deps = G__45344;
seen = G__45345;
batches = G__45346;
current = G__45347;
continue;
}
}
break;
}
});
cats.core.topo_sort = (function cats$core$topo_sort(deps){
var syms = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,deps));
return cats.core.topo_sort_STAR_.call(null,deps,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
cats.core.bindings__GT_batches = (function cats$core$bindings__GT_batches(bindings){
var syms = cljs.core.map.call(null,cljs.core.first,bindings);
var aps = cljs.core.map.call(null,cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.call(null,cljs.core.vector,syms,aps);
var sorted_deps = cats.core.topo_sort.call(null,cats.core.dependency_map.call(null,sym__GT_ap));
return sorted_deps;
});
cats.core.alet_STAR_ = (function cats$core$alet_STAR_(batches,env,body){
var fb = cljs.core.first.call(null,batches);
var rb = cljs.core.rest.call(null,batches);
var fs = cljs.core.first.call(null,fb);
var fa = cljs.core.get.call(null,env,fs);
var code = cljs.core.reduce.call(null,((function (fb,rb,fs,fa){
return (function (acc,syms){
var fs__$1 = cljs.core.first.call(null,syms);
var fa__$1 = cljs.core.get.call(null,env,fs__$1);
var rs = cljs.core.rest.call(null,syms);
var faps = cljs.core.map.call(null,((function (fs__$1,fa__$1,rs,fb,rb,fs,fa){
return (function (p1__45348_SHARP_){
return cljs.core.get.call(null,env,p1__45348_SHARP_);
});})(fs__$1,fa__$1,rs,fb,rb,fs,fa))
,rs);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,syms),(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null)),(function (){var x__42057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__42057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42057__auto__ = fs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = acc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = fa__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
} else {
var cf = cljs.core.reduce.call(null,((function (fs__$1,fa__$1,rs,faps,fb,rb,fs,fa){
return (function (f,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__42057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42057__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});})(fs__$1,fa__$1,rs,faps,fb,rb,fs,fa))
,acc,cljs.core.reverse.call(null,syms));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fapply","cats.core/fapply",1894900497,null)),(function (){var x__42057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null)),(function (){var x__42057__auto__ = cf;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = fa__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),faps)));
}
});})(fb,rb,fs,fa))
,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body))),cljs.core.reverse.call(null,batches));
var join_count = (cljs.core.count.call(null,batches) - (1));
return cljs.core.reduce.call(null,((function (fb,rb,fs,fa,code,join_count){
return (function (acc,_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","join","cats.core/join",1184708213,null)),(function (){var x__42057__auto__ = acc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});})(fb,rb,fs,fa,code,join_count))
,code,cljs.core.range.call(null,join_count));
});
var ret__42428__auto___45353 = (function (){
/**
 * Apply a pure function to applicative arguments, e.g.
 * 
 * (ap + (just 1) (just 2) (just 3))
 * ;; => #<Just [6]>
 * (ap str ["hi" "lo"] ["bye" "woah" "hey"])
 * ;; => ["hibye" "hiwoah" "hihey"
 *        "lobye" "lowoah" "lohey"]
 * 
 * `ap` is essentially sugar for `(apply fapply (pure f) args)`,
 * but for the common case where you have a pure, uncurried,
 * possibly variadic function.
 * 
 * `ap` actually desugars in `alet` form:
 * 
 * (macroexpand-1 `(ap + (just 1) (just2)))
 * ;; => (alet [a1 (just 1) a2 (just 2)] (+ a1 a2))
 * 
 * That way, variadic functions Just Work, without needing to specify
 * an arity separately.
 * 
 * If you're familiar with Haskell, this is closest to writing
 * "in Applicative style": you can straightforwardly convert
 * pure function application to effectful application by with
 * some light syntax (<$> and <*> in case of Haskell, and `ap` here).
 * 
 * See the original Applicative paper for more inspiration:
 * http://staff.city.ac.uk/~ross/papers/Applicative.pdf
 */
cats.core.ap = (function cats$core$ap(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45354 = arguments.length;
var i__42383__auto___45355 = (0);
while(true){
if((i__42383__auto___45355 < len__42382__auto___45354)){
args__42389__auto__.push((arguments[i__42383__auto___45355]));

var G__45356 = (i__42383__auto___45355 + (1));
i__42383__auto___45355 = G__45356;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((3) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((3)),(0),null)):null);
return cats.core.ap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42390__auto__);
});

cats.core.ap.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,f,args){
var syms = cljs.core.repeatedly.call(null,cljs.core.count.call(null,args),cljs.core.partial.call(null,cljs.core.gensym,"arg"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","alet","cats.core/alet",1598913649,null)),(function (){var x__42057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,syms,args)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),syms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});

cats.core.ap.cljs$lang$maxFixedArity = (3);

cats.core.ap.cljs$lang$applyTo = (function (seq45349){
var G__45350 = cljs.core.first.call(null,seq45349);
var seq45349__$1 = cljs.core.next.call(null,seq45349);
var G__45351 = cljs.core.first.call(null,seq45349__$1);
var seq45349__$2 = cljs.core.next.call(null,seq45349__$1);
var G__45352 = cljs.core.first.call(null,seq45349__$2);
var seq45349__$3 = cljs.core.next.call(null,seq45349__$2);
return cats.core.ap.cljs$core$IFn$_invoke$arity$variadic(G__45350,G__45351,G__45352,seq45349__$3);
});

return null;
})()
;
cats.core.ap.cljs$lang$macro = true;

var ret__42428__auto___45361 = (function (){
/**
 * Thread like `->`, within an applicative idiom.
 * 
 *   Compare:
 * 
 *   (macroexpand-1 `(-> a b c (d e f)))
 *   => (d (c (b a) e f)
 * 
 *   with:
 * 
 *   (macroexpand-1 `(ap-> a b c (d e f))
 *   => (ap d (ap c (ap b a) e f))
 *   
 */
cats.core.ap__GT_ = (function cats$core$ap__GT_(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45362 = arguments.length;
var i__42383__auto___45363 = (0);
while(true){
if((i__42383__auto___45363 < len__42382__auto___45362)){
args__42389__auto__.push((arguments[i__42383__auto___45363]));

var G__45364 = (i__42383__auto___45363 + (1));
i__42383__auto___45363 = G__45364;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((3) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((3)),(0),null)):null);
return cats.core.ap__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42390__auto__);
});

cats.core.ap__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),(function (){var x__42057__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),(function (){var x__42057__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})()))));
var G__45365 = threaded;
var G__45366 = cljs.core.next.call(null,forms__$1);
x__$1 = G__45365;
forms__$1 = G__45366;
continue;
} else {
return x__$1;
}
break;
}
});

cats.core.ap__GT_.cljs$lang$maxFixedArity = (3);

cats.core.ap__GT_.cljs$lang$applyTo = (function (seq45357){
var G__45358 = cljs.core.first.call(null,seq45357);
var seq45357__$1 = cljs.core.next.call(null,seq45357);
var G__45359 = cljs.core.first.call(null,seq45357__$1);
var seq45357__$2 = cljs.core.next.call(null,seq45357__$1);
var G__45360 = cljs.core.first.call(null,seq45357__$2);
var seq45357__$3 = cljs.core.next.call(null,seq45357__$2);
return cats.core.ap__GT_.cljs$core$IFn$_invoke$arity$variadic(G__45358,G__45359,G__45360,seq45357__$3);
});

return null;
})()
;
cats.core.ap__GT_.cljs$lang$macro = true;

var ret__42428__auto___45371 = (function (){
/**
 * Thread like `->>`, within an applicative idiom.
 * See `cats.labs.sugar/ap->` for more in-depth discussion.
 */
cats.core.ap__GT__GT_ = (function cats$core$ap__GT__GT_(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45372 = arguments.length;
var i__42383__auto___45373 = (0);
while(true){
if((i__42383__auto___45373 < len__42382__auto___45372)){
args__42389__auto__.push((arguments[i__42383__auto___45373]));

var G__45374 = (i__42383__auto___45373 + (1));
i__42383__auto___45373 = G__45374;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((3) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((3)),(0),null)):null);
return cats.core.ap__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42390__auto__);
});

cats.core.ap__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),(function (){var x__42057__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__42057__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})()))),cljs.core.meta.call(null,form)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),(function (){var x__42057__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})()))));
var G__45375 = threaded;
var G__45376 = cljs.core.next.call(null,forms__$1);
x__$1 = G__45375;
forms__$1 = G__45376;
continue;
} else {
return x__$1;
}
break;
}
});

cats.core.ap__GT__GT_.cljs$lang$maxFixedArity = (3);

cats.core.ap__GT__GT_.cljs$lang$applyTo = (function (seq45367){
var G__45368 = cljs.core.first.call(null,seq45367);
var seq45367__$1 = cljs.core.next.call(null,seq45367);
var G__45369 = cljs.core.first.call(null,seq45367__$1);
var seq45367__$2 = cljs.core.next.call(null,seq45367__$1);
var G__45370 = cljs.core.first.call(null,seq45367__$2);
var seq45367__$3 = cljs.core.next.call(null,seq45367__$2);
return cats.core.ap__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__45368,G__45369,G__45370,seq45367__$3);
});

return null;
})()
;
cats.core.ap__GT__GT_.cljs$lang$macro = true;

var ret__42428__auto___45390 = (function (){
/**
 * Thread like `as->`, within an applicative idiom.
 * See `cats.labs.sugar/ap->` for more in-depth discussion.
 */
cats.core.as_ap__GT_ = (function cats$core$as_ap__GT_(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45391 = arguments.length;
var i__42383__auto___45392 = (0);
while(true){
if((i__42383__auto___45392 < len__42382__auto___45391)){
args__42389__auto__.push((arguments[i__42383__auto___45392]));

var G__45393 = (i__42383__auto___45392 + (1));
i__42383__auto___45392 = G__45393;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((4) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((4)),(0),null)):null);
return cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__42390__auto__);
});

cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__42057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),(function (){var iter__41985__auto__ = (function cats$core$iter__45386(s__45387){
return (new cljs.core.LazySeq(null,(function (){
var s__45387__$1 = s__45387;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45387__$1);
if(temp__5457__auto__){
var s__45387__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45387__$2)){
var c__41983__auto__ = cljs.core.chunk_first.call(null,s__45387__$2);
var size__41984__auto__ = cljs.core.count.call(null,c__41983__auto__);
var b__45389 = cljs.core.chunk_buffer.call(null,size__41984__auto__);
if((function (){var i__45388 = (0);
while(true){
if((i__45388 < size__41984__auto__)){
var form = cljs.core._nth.call(null,c__41983__auto__,i__45388);
cljs.core.chunk_append.call(null,b__45389,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),form))));

var G__45394 = (i__45388 + (1));
i__45388 = G__45394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45389),cats$core$iter__45386.call(null,cljs.core.chunk_rest.call(null,s__45387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45389),null);
}
} else {
var form = cljs.core.first.call(null,s__45387__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),form))),cats$core$iter__45386.call(null,cljs.core.rest.call(null,s__45387__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41985__auto__.call(null,forms);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});

cats.core.as_ap__GT_.cljs$lang$maxFixedArity = (4);

cats.core.as_ap__GT_.cljs$lang$applyTo = (function (seq45377){
var G__45378 = cljs.core.first.call(null,seq45377);
var seq45377__$1 = cljs.core.next.call(null,seq45377);
var G__45379 = cljs.core.first.call(null,seq45377__$1);
var seq45377__$2 = cljs.core.next.call(null,seq45377__$1);
var G__45380 = cljs.core.first.call(null,seq45377__$2);
var seq45377__$3 = cljs.core.next.call(null,seq45377__$2);
var G__45381 = cljs.core.first.call(null,seq45377__$3);
var seq45377__$4 = cljs.core.next.call(null,seq45377__$3);
return cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic(G__45378,G__45379,G__45380,G__45381,seq45377__$4);
});

return null;
})()
;
cats.core.as_ap__GT_.cljs$lang$macro = true;

var ret__42428__auto___45399 = (function (){
/**
 * Like `->`, but with monadic binding instead of pure application.
 * A mnemonic for the name is a pun on `>>=`, the monadic bind operator,
 * and clojure's regular arrow macros.
 * 
 * You can think of it as generalizing the `some->` thread macro
 * to all Monads instead of just Maybe.
 * 
 * Alternatively, if you think of the regular thread macro as
 * sugar for `let`:
 * 
 * (-> :a b (c (other args)) d)
 * =>
 * (let [res (b :a)
 *       res (c res (other args))
 *       res (d res)]
 *   res)
 * 
 * Then `->=` is sugar for cats.core/mlet:
 * 
 * (->= m-a b (c (other args)) d)
 * (mlet [res m-a
 *        res (c res (other args))
 *        res (d res)]
 *   (return res))
 * 
 * Note that extra args in this context are assumed pure, and will
 * be evaluated along with the function itself; this also matches
 * the behavior of `some->` wrt extra args.
 * 
 * Threading through pure functions is somewhat awkward, but can be done:
 * 
 * (->= m-a
 *      monadic-fn
 *      (-> pure-fn
 *          other-pure-fn
 *          m/return)
 *      other-monadic-fn)
 */
cats.core.__GT__EQ_ = (function cats$core$__GT__EQ_(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45400 = arguments.length;
var i__42383__auto___45401 = (0);
while(true){
if((i__42383__auto___45401 < len__42382__auto___45400)){
args__42389__auto__.push((arguments[i__42383__auto___45401]));

var G__45402 = (i__42383__auto___45401 + (1));
i__42383__auto___45401 = G__45402;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((3) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((3)),(0),null)):null);
return cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42390__auto__);
});

cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),(function (){var x__42057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null)),(function (){var x__42057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null)),(function (){var x__42057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});

cats.core.__GT__EQ_.cljs$lang$maxFixedArity = (3);

cats.core.__GT__EQ_.cljs$lang$applyTo = (function (seq45395){
var G__45396 = cljs.core.first.call(null,seq45395);
var seq45395__$1 = cljs.core.next.call(null,seq45395);
var G__45397 = cljs.core.first.call(null,seq45395__$1);
var seq45395__$2 = cljs.core.next.call(null,seq45395__$1);
var G__45398 = cljs.core.first.call(null,seq45395__$2);
var seq45395__$3 = cljs.core.next.call(null,seq45395__$2);
return cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45396,G__45397,G__45398,seq45395__$3);
});

return null;
})()
;
cats.core.__GT__EQ_.cljs$lang$macro = true;

var ret__42428__auto___45407 = (function (){
/**
 * Like ->>, but with monadic binding instead of pure application.
 * See `cats.labs.sugar/->=` for more in-depth discussion.
 */
cats.core.__GT__GT__EQ_ = (function cats$core$__GT__GT__EQ_(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45408 = arguments.length;
var i__42383__auto___45409 = (0);
while(true){
if((i__42383__auto___45409 < len__42382__auto___45408)){
args__42389__auto__.push((arguments[i__42383__auto___45409]));

var G__45410 = (i__42383__auto___45409 + (1));
i__42383__auto___45409 = G__45410;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((3) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((3)),(0),null)):null);
return cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42390__auto__);
});

cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null)),(function (){var x__42057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null)),(function (){var x__42057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null)),(function (){var x__42057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});

cats.core.__GT__GT__EQ_.cljs$lang$maxFixedArity = (3);

cats.core.__GT__GT__EQ_.cljs$lang$applyTo = (function (seq45403){
var G__45404 = cljs.core.first.call(null,seq45403);
var seq45403__$1 = cljs.core.next.call(null,seq45403);
var G__45405 = cljs.core.first.call(null,seq45403__$1);
var seq45403__$2 = cljs.core.next.call(null,seq45403__$1);
var G__45406 = cljs.core.first.call(null,seq45403__$2);
var seq45403__$3 = cljs.core.next.call(null,seq45403__$2);
return cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45404,G__45405,G__45406,seq45403__$3);
});

return null;
})()
;
cats.core.__GT__GT__EQ_.cljs$lang$macro = true;

var ret__42428__auto___45416 = (function (){
/**
 * Like `as->`, but with monadic binding instead of pure application.
 * See `cats.labs.sugar/->=` for more in-depth discussion.
 */
cats.core.as__GT__EQ_ = (function cats$core$as__GT__EQ_(var_args){
var args__42389__auto__ = [];
var len__42382__auto___45417 = arguments.length;
var i__42383__auto___45418 = (0);
while(true){
if((i__42383__auto___45418 < len__42382__auto___45417)){
args__42389__auto__.push((arguments[i__42383__auto___45418]));

var G__45419 = (i__42383__auto___45418 + (1));
i__42383__auto___45418 = G__45419;
continue;
} else {
}
break;
}

var argseq__42390__auto__ = ((((4) < args__42389__auto__.length))?(new cljs.core.IndexedSeq(args__42389__auto__.slice((4)),(0),null)):null);
return cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__42390__auto__);
});

cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null)),(function (){var x__42057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})(),(function (){var x__42057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null)),(function (){var x__42057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
})())));
});

cats.core.as__GT__EQ_.cljs$lang$maxFixedArity = (4);

cats.core.as__GT__EQ_.cljs$lang$applyTo = (function (seq45411){
var G__45412 = cljs.core.first.call(null,seq45411);
var seq45411__$1 = cljs.core.next.call(null,seq45411);
var G__45413 = cljs.core.first.call(null,seq45411__$1);
var seq45411__$2 = cljs.core.next.call(null,seq45411__$1);
var G__45414 = cljs.core.first.call(null,seq45411__$2);
var seq45411__$3 = cljs.core.next.call(null,seq45411__$2);
var G__45415 = cljs.core.first.call(null,seq45411__$3);
var seq45411__$4 = cljs.core.next.call(null,seq45411__$3);
return cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45412,G__45413,G__45414,G__45415,seq45411__$4);
});

return null;
})()
;
cats.core.as__GT__EQ_.cljs$lang$macro = true;

cats.core.arglists = (function cats$core$arglists(var$){
return cljs.core.get.call(null,cljs.core.meta.call(null,var$),new cljs.core.Keyword(null,"arglists","arglists",1661989754));
});
cats.core.single_arity_QMARK_ = (function cats$core$single_arity_QMARK_(var$){
var args = cats.core.arglists.call(null,var$);
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))) && (cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.first.call(null,args))));
});
cats.core.arity = (function cats$core$arity(var$){
if(cljs.core.truth_(cats.core.single_arity_QMARK_.call(null,var$))){
} else {
throw (new Error("Assert failed: (single-arity? var)"));
}

return cljs.core.count.call(null,cljs.core.first.call(null,cats.core.arglists.call(null,var$)));
});
/**
 * Given a collection of monadic values, collect
 *   their values in a seq returned in the monadic context.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.monad.maybe :as maybe]
 *             '[cats.core :as m])
 * 
 *    (m/sequence [(maybe/just 2) (maybe/just 3)])
 *    ;; => #<Just [[2, 3]]>
 * 
 *    (m/sequence [(maybe/nothing) (maybe/just 3)])
 *    ;; => #<Nothing>
 * 
 *    (ctx/with-context maybe/context
 *      (m/sequence []))
 *    ;; => #<Just [()]>
 *   
 */
cats.core.sequence = (function cats$core$sequence(mvs){
if(cljs.core.empty_QMARK_.call(null,mvs)){
return cats.core.return$.call(null,cljs.core.List.EMPTY);
} else {
var ctx = cats.context.infer.call(null,cljs.core.first.call(null,mvs));
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,ctx))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45423 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR_45423,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_45423,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR_45423,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR_45423,ctx))
);
});})(_STAR_context_STAR_45423,ctx))
);
});})(_STAR_context_STAR_45423,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45423;
}}
});
/**
 * Given a function `mf` that takes a value and puts it into a
 *   monadic context, and a collection, map `mf` over the collection,
 *   calling `sequence` on the results.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.monad.maybe :as maybe]
 *             '[cats.core :as m])
 * 
 *    (m/mapseq maybe/just [2 3])
 *    ;=> <Just [[2 3]]>
 * 
 *    (m/mapseq (fn [v]
 *                (if (odd? v)
 *                  (maybe/just v)
 *                  (maybe/nothing)))
 *              [1 2])
 *    ;; => #<Nothing>
 * 
 *    (ctx/with-context maybe/context
 *      (mapseq #(maybe/just (* % 2)) []))
 *    ;; => #<Just [()]>
 *   
 */
cats.core.mapseq = (function cats$core$mapseq(mf,coll){
return cats.core.sequence.call(null,cljs.core.map.call(null,mf,coll));
});
/**
 * Same as `mapseq` but with the arguments flipped.
 * 
 *   Let's see a little example:
 * 
 *    (m/forseq [2 3] maybe/just)
 *    ;; => <Just [[2 3]]>
 * 
 *   Yet an other example that fails:
 * 
 *    (m/forseq [1 2]
 *              (fn [v]
 *                (if (odd? v)
 *                  (maybe/just v)
 *                  (maybe/nothing))))
 *    ;; => <Nothing>
 *   
 */
cats.core.forseq = (function cats$core$forseq(vs,mf){
return cats.core.mapseq.call(null,mf,vs);
});
/**
 * Apply a predicate to a value in a `MonadZero` instance,
 *   returning the identity element when the predicate does not hold.
 * 
 *   Otherwise, return the instance unchanged.
 * 
 *    (require '[cats.monad.maybe :as maybe])
 *    (require '[cats.core :as m])
 * 
 *    (m/filter (partial < 2) (maybe/just 3))
 *    ;=> <Just [3]>
 * 
 *    (m/filter (partial < 4) (maybe/just 3))
 *    ;=> <Nothing>
 *   
 */
cats.core.filter = (function cats$core$filter(p,mv){
return cats.core.bind.call(null,mv,(function (v){
return cats.core.bind.call(null,cats.core.guard.call(null,p.call(null,v)),(function (G__45424){
return cats.core.return$.call(null,v);
}));
}));
});
/**
 * A Haskell-style `fmap` alias.
 */
cats.core._LT_$_GT_ = cats.core.fmap;
/**
 * A Haskell-style `fapply` alias.
 */
cats.core._LT__STAR__GT_ = cats.core.fapply;
/**
 * Perform a Haskell-style left-associative bind.
 * 
 *   Let's see it in action:
 * 
 *    (>>= (just 1) (comp just inc) (comp just inc))
 *    ;; => #<Just [3]>
 *   
 */
cats.core._GT__GT__EQ_ = (function cats$core$_GT__GT__EQ_(var_args){
var G__45429 = arguments.length;
switch (G__45429) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___45431 = arguments.length;
var i__42383__auto___45432 = (0);
while(true){
if((i__42383__auto___45432 < len__42382__auto___45431)){
args_arr__42405__auto__.push((arguments[i__42383__auto___45432]));

var G__45433 = (i__42383__auto___45432 + (1));
i__42383__auto___45432 = G__45433;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (mv,f){
return cats.core.bind.call(null,mv,f);
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,f,fs){
return cljs.core.reduce.call(null,cats.core.bind,mv,cljs.core.cons.call(null,f,fs));
});

cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq45426){
var G__45427 = cljs.core.first.call(null,seq45426);
var seq45426__$1 = cljs.core.next.call(null,seq45426);
var G__45428 = cljs.core.first.call(null,seq45426__$1);
var seq45426__$2 = cljs.core.next.call(null,seq45426__$1);
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45427,G__45428,seq45426__$2);
});

cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Perform a Haskell-style left-associative bind,
 *   ignoring the values produced by the monadic computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(var_args){
var G__45438 = arguments.length;
switch (G__45438) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___45440 = arguments.length;
var i__42383__auto___45441 = (0);
while(true){
if((i__42383__auto___45441 < len__42382__auto___45440)){
args_arr__42405__auto__.push((arguments[i__42383__auto___45441]));

var G__45442 = (i__42383__auto___45441 + (1));
i__42383__auto___45441 = G__45442;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2 = (function (mv,mv_SINGLEQUOTE_){
return cats.core.bind.call(null,mv,(function (_){
return mv_SINGLEQUOTE_;
}));
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,mv_SINGLEQUOTE_,mvs){
return cljs.core.reduce.call(null,cats.core._GT__GT_,mv,cljs.core.cons.call(null,mv_SINGLEQUOTE_,mvs));
});

cats.core._GT__GT_.cljs$lang$applyTo = (function (seq45435){
var G__45436 = cljs.core.first.call(null,seq45435);
var seq45435__$1 = cljs.core.next.call(null,seq45435);
var G__45437 = cljs.core.first.call(null,seq45435__$1);
var seq45435__$2 = cljs.core.next.call(null,seq45435__$1);
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__45436,G__45437,seq45435__$2);
});

cats.core._GT__GT_.cljs$lang$maxFixedArity = (2);

/**
 * Same as the two argument version of `>>=` but with the
 *   arguments flipped.
 */
cats.core._EQ__LT__LT_ = (function cats$core$_EQ__LT__LT_(f,mv){
return cats.core._GT__GT__EQ_.call(null,mv,f);
});
/**
 * Left-to-right composition of monads.
 */
cats.core._GT__EQ__GT_ = (function cats$core$_GT__EQ__GT_(mf,mg,x){
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,cats.context.infer.call(null,mf)))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45443 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.infer.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_45443){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_45443){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_45443))
);
});})(_STAR_context_STAR_45443))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45443;
}});
/**
 * Right-to-left composition of monads.
 *   Same as `>=>` with its first two arguments flipped.
 */
cats.core._LT__EQ__LT_ = (function cats$core$_LT__EQ__LT_(mg,mf,x){
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,cats.context.infer.call(null,mf)))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45444 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.infer.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_45444){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_45444){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_45444))
);
});})(_STAR_context_STAR_45444))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45444;
}});
/**
 * Generic function to unwrap/extract
 *   the inner value of a container.
 */
cats.core.extract = (function cats$core$extract(v){
return cats.protocols._extract.call(null,v);
});
cats.core._LT__GT_ = cats.core.mappend;
/**
 * Perform a right-associative fold on the data structure.
 */
cats.core.foldr = (function cats$core$foldr(f,z,xs){
var ctx = cats.protocols._get_context.call(null,xs);
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,ctx))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45445 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldr.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45445;
}});
/**
 * Perform a left-associative fold on the data structure.
 */
cats.core.foldl = (function cats$core$foldl(f,z,xs){
var ctx = cats.protocols._get_context.call(null,xs);
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,ctx))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45446 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldl.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45446;
}});
/**
 * Given an optional monadic context, a function that takes two non-monadic
 *   arguments and returns a value inside the given monadic context, an initial
 *   value, and a collection of values, perform a left-associative fold.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.core :as m]
 *             '[cats.monad.maybe :as maybe])
 * 
 *    (defn m-div [x y]
 *      (if (zero? y)
 *        (maybe/nothing)
 *        (maybe/just (/ x y))))
 * 
 *    (m/foldm m-div 1 [1 2 3])
 *    (m/foldm maybe/context m-div 1 [1 2 3])
 *    ;; => #<Just 1/6>
 * 
 *    (m/foldm maybe/context m-div 1 [1 0 3])
 *    ;; => #<Nothing>
 * 
 *    (foldm m-div 1 [])
 *    ;; => Exception
 * 
 *    (m/foldm maybe/context m-div 1 [])
 *    (ctx/with-context maybe/context
 *      (foldm m-div 1 []))
 *    ;; => #<Just 1>
 *   
 */
cats.core.foldm = (function cats$core$foldm(var_args){
var G__45448 = arguments.length;
switch (G__45448) {
case 3:
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cats.core.foldm.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$3 = (function (f,z,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cats.core.return$.call(null,z);
} else {
var vec__45449 = xs;
var seq__45450 = cljs.core.seq.call(null,vec__45449);
var first__45451 = cljs.core.first.call(null,seq__45450);
var seq__45450__$1 = cljs.core.next.call(null,seq__45450);
var h = first__45451;
var t = seq__45450__$1;
return cats.core.bind.call(null,f.call(null,z,h),((function (vec__45449,seq__45450,first__45451,seq__45450__$1,h,t){
return (function (z_SINGLEQUOTE_){
if(cljs.core.empty_QMARK_.call(null,t)){
return cats.core.return$.call(null,z_SINGLEQUOTE_);
} else {
return cats.core.foldm.call(null,f,z_SINGLEQUOTE_,t);
}
});})(vec__45449,seq__45450,first__45451,seq__45450__$1,h,t))
);
}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$4 = (function (ctx,f,z,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cats.core.return$.call(null,ctx,z);
} else {
return cats.core.foldm.call(null,f,z,xs);
}
});

cats.core.foldm.cljs$lang$maxFixedArity = 4;

/**
 * Map each element of a structure to an action, evaluate these
 *   actions from left to right, and collect the results.
 * 
 *    (defn inc-if-even
 *      [n]
 *      (if (even? n)
 *        (maybe/just (inc n))
 *        (maybe/nothing)))
 * 
 *    (ctx/with-context maybe/context
 *      (m/traverse inc-if-even [2 4]))
 *    ;; => #<Just [3 4]>
 *   
 */
cats.core.traverse = (function cats$core$traverse(var_args){
var G__45454 = arguments.length;
switch (G__45454) {
case 2:
return cats.core.traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$2 = (function (f,tv){
return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$3 = (function (ctx,f,tv){
if(cljs.core.truth_(cats.context.context_QMARK_.call(null,ctx))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR_45455 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45455;
}});

cats.core.traverse.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
