// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('clojure.set');
goog.require('cats.context');
cats.core.mempty = (function cats$core$mempty(var_args){
var G__45442 = arguments.length;
switch (G__45442) {
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
var args__42472__auto__ = [];
var len__42465__auto___45445 = arguments.length;
var i__42466__auto___45446 = (0);
while(true){
if((i__42466__auto___45446 < len__42465__auto___45445)){
args__42472__auto__.push((arguments[i__42466__auto___45446]));

var G__45447 = (i__42466__auto___45446 + (1));
i__42466__auto___45446 = G__45447;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
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

cats.core.mappend.cljs$lang$applyTo = (function (seq45444){
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45444));
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
var G__45449 = arguments.length;
switch (G__45449) {
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
var G__45452 = arguments.length;
switch (G__45452) {
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

var _STAR_context_STAR_45454 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return f.call(null,v);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45454;
}});})(ctx))
);
});
cats.core.mzero = (function cats$core$mzero(var_args){
var G__45456 = arguments.length;
switch (G__45456) {
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
var args__42472__auto__ = [];
var len__42465__auto___45459 = arguments.length;
var i__42466__auto___45460 = (0);
while(true){
if((i__42466__auto___45460 < len__42465__auto___45459)){
args__42472__auto__.push((arguments[i__42466__auto___45460]));

var G__45461 = (i__42466__auto___45460 + (1));
i__42466__auto___45460 = G__45461;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((0) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((0)),(0),null)):null);
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(argseq__42473__auto__);
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

cats.core.mplus.cljs$lang$applyTo = (function (seq45458){
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45458));
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
var G__45463 = arguments.length;
switch (G__45463) {
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

var _STAR_context_STAR_45464 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._fmap.call(null,ctx,f,fv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45464;
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
var G__45467 = arguments.length;
switch (G__45467) {
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

var _STAR_context_STAR_45468 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._bimap.call(null,ctx,f,g,bv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45468;
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
var G__45471 = arguments.length;
switch (G__45471) {
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
var G__45474 = arguments.length;
switch (G__45474) {
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
var args__42472__auto__ = [];
var len__42465__auto___45478 = arguments.length;
var i__42466__auto___45479 = (0);
while(true){
if((i__42466__auto___45479 < len__42465__auto___45478)){
args__42472__auto__.push((arguments[i__42466__auto___45479]));

var G__45480 = (i__42466__auto___45479 + (1));
i__42466__auto___45479 = G__45480;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((1) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((1)),(0),null)):null);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42473__auto__);
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

cats.core.fapply.cljs$lang$applyTo = (function (seq45476){
var G__45477 = cljs.core.first.call(null,seq45476);
var seq45476__$1 = cljs.core.next.call(null,seq45476);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic(G__45477,seq45476__$1);
});

cats.core.deps = (function cats$core$deps(expr,syms){
if(((expr instanceof cljs.core.Symbol)) && (cljs.core.contains_QMARK_.call(null,syms,expr))){
var x__42140__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.mapcat.call(null,(function (p1__45481_SHARP_){
return cats.core.deps.call(null,p1__45481_SHARP_,syms);
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
return cljs.core.map.call(null,(function (p1__45482_SHARP_){
return cats.core.rename.call(null,p1__45482_SHARP_,renames);
}),expr);
} else {
return expr;

}
}
});
cats.core.dedupe_symbols_STAR_ = (function cats$core$dedupe_symbols_STAR_(sym__GT_ap,body){
var renamer = (function cats$core$dedupe_symbols_STAR__$_renamer(p__45490,p__45491){
var map__45492 = p__45490;
var map__45492__$1 = ((((!((map__45492 == null)))?((((map__45492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45492):map__45492);
var summ = map__45492__$1;
var body__$1 = cljs.core.get.call(null,map__45492__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var syms = cljs.core.get.call(null,map__45492__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var aps = cljs.core.get.call(null,map__45492__$1,new cljs.core.Keyword(null,"aps","aps",265109554));
var seen = cljs.core.get.call(null,map__45492__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var renames = cljs.core.get.call(null,map__45492__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var vec__45493 = p__45491;
var s = cljs.core.nth.call(null,vec__45493,(0),null);
var ap = cljs.core.nth.call(null,vec__45493,(1),null);
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__42068__auto__ = ((function (syms,symset){
return (function cats$core$dependency_map_$_iter__45497(s__45498){
return (new cljs.core.LazySeq(null,((function (syms,symset){
return (function (){
var s__45498__$1 = s__45498;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45498__$1);
if(temp__5457__auto__){
var s__45498__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45498__$2)){
var c__42066__auto__ = cljs.core.chunk_first.call(null,s__45498__$2);
var size__42067__auto__ = cljs.core.count.call(null,c__42066__auto__);
var b__45500 = cljs.core.chunk_buffer.call(null,size__42067__auto__);
if((function (){var i__45499 = (0);
while(true){
if((i__45499 < size__42067__auto__)){
var vec__45501 = cljs.core._nth.call(null,c__42066__auto__,i__45499);
var s = cljs.core.nth.call(null,vec__45501,(0),null);
var ap = cljs.core.nth.call(null,vec__45501,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
cljs.core.chunk_append.call(null,b__45500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null));

var G__45507 = (i__45499 + (1));
i__45499 = G__45507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45500),cats$core$dependency_map_$_iter__45497.call(null,cljs.core.chunk_rest.call(null,s__45498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45500),null);
}
} else {
var vec__45504 = cljs.core.first.call(null,s__45498__$2);
var s = cljs.core.nth.call(null,vec__45504,(0),null);
var ap = cljs.core.nth.call(null,vec__45504,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null),cats$core$dependency_map_$_iter__45497.call(null,cljs.core.rest.call(null,s__45498__$2)));
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
return iter__42068__auto__.call(null,sym__GT_ap);
})());
});
cats.core.remove_deps = (function cats$core$remove_deps(deps,symset){
var removed = (function (){var iter__42068__auto__ = (function cats$core$remove_deps_$_iter__45508(s__45509){
return (new cljs.core.LazySeq(null,(function (){
var s__45509__$1 = s__45509;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45509__$1);
if(temp__5457__auto__){
var s__45509__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45509__$2)){
var c__42066__auto__ = cljs.core.chunk_first.call(null,s__45509__$2);
var size__42067__auto__ = cljs.core.count.call(null,c__42066__auto__);
var b__45511 = cljs.core.chunk_buffer.call(null,size__42067__auto__);
if((function (){var i__45510 = (0);
while(true){
if((i__45510 < size__42067__auto__)){
var vec__45512 = cljs.core._nth.call(null,c__42066__auto__,i__45510);
var s = cljs.core.nth.call(null,vec__45512,(0),null);
var depset = cljs.core.nth.call(null,vec__45512,(1),null);
cljs.core.chunk_append.call(null,b__45511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null));

var G__45518 = (i__45510 + (1));
i__45510 = G__45518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45511),cats$core$remove_deps_$_iter__45508.call(null,cljs.core.chunk_rest.call(null,s__45509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45511),null);
}
} else {
var vec__45515 = cljs.core.first.call(null,s__45509__$2);
var s = cljs.core.nth.call(null,vec__45515,(0),null);
var depset = cljs.core.nth.call(null,vec__45515,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null),cats$core$remove_deps_$_iter__45508.call(null,cljs.core.rest.call(null,s__45509__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__42068__auto__.call(null,deps);
})();
return cljs.core.into.call(null,cljs.core.empty.call(null,deps),removed);
});
cats.core.topo_sort_STAR_ = (function cats$core$topo_sort_STAR_(deps,seen,batches,current){
while(true){
if(cljs.core.empty_QMARK_.call(null,deps)){
return cljs.core.conj.call(null,batches,current);
} else {
var dep = cljs.core.first.call(null,deps);
var vec__45519 = dep;
var s = cljs.core.nth.call(null,vec__45519,(0),null);
var dependencies = cljs.core.nth.call(null,vec__45519,(1),null);
var dependant_QMARK_ = cljs.core.some.call(null,dependencies,seen);
if((dependant_QMARK_ == null)){
var G__45522 = cljs.core.subvec.call(null,deps,(1));
var G__45523 = cljs.core.conj.call(null,seen,s);
var G__45524 = batches;
var G__45525 = cljs.core.conj.call(null,current,s);
deps = G__45522;
seen = G__45523;
batches = G__45524;
current = G__45525;
continue;
} else {
var G__45526 = cats.core.remove_deps.call(null,cljs.core.subvec.call(null,deps,(1)),cljs.core.set.call(null,current));
var G__45527 = cljs.core.conj.call(null,seen,s);
var G__45528 = cljs.core.conj.call(null,batches,current);
var G__45529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
deps = G__45526;
seen = G__45527;
batches = G__45528;
current = G__45529;
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
return (function (p1__45530_SHARP_){
return cljs.core.get.call(null,env,p1__45530_SHARP_);
});})(fs__$1,fa__$1,rs,fb,rb,fs,fa))
,rs);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,syms),(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null)),(function (){var x__42140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__42140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42140__auto__ = fs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = acc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = fa__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
} else {
var cf = cljs.core.reduce.call(null,((function (fs__$1,fa__$1,rs,faps,fb,rb,fs,fa){
return (function (f,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__42140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42140__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});})(fs__$1,fa__$1,rs,faps,fb,rb,fs,fa))
,acc,cljs.core.reverse.call(null,syms));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fapply","cats.core/fapply",1894900497,null)),(function (){var x__42140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null)),(function (){var x__42140__auto__ = cf;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = fa__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),faps)));
}
});})(fb,rb,fs,fa))
,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body))),cljs.core.reverse.call(null,batches));
var join_count = (cljs.core.count.call(null,batches) - (1));
return cljs.core.reduce.call(null,((function (fb,rb,fs,fa,code,join_count){
return (function (acc,_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","join","cats.core/join",1184708213,null)),(function (){var x__42140__auto__ = acc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});})(fb,rb,fs,fa,code,join_count))
,code,cljs.core.range.call(null,join_count));
});
var ret__42511__auto___45535 = (function (){
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
var args__42472__auto__ = [];
var len__42465__auto___45536 = arguments.length;
var i__42466__auto___45537 = (0);
while(true){
if((i__42466__auto___45537 < len__42465__auto___45536)){
args__42472__auto__.push((arguments[i__42466__auto___45537]));

var G__45538 = (i__42466__auto___45537 + (1));
i__42466__auto___45537 = G__45538;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((3) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((3)),(0),null)):null);
return cats.core.ap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42473__auto__);
});

cats.core.ap.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,f,args){
var syms = cljs.core.repeatedly.call(null,cljs.core.count.call(null,args),cljs.core.partial.call(null,cljs.core.gensym,"arg"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","alet","cats.core/alet",1598913649,null)),(function (){var x__42140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,syms,args)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42140__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),syms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});

cats.core.ap.cljs$lang$maxFixedArity = (3);

cats.core.ap.cljs$lang$applyTo = (function (seq45531){
var G__45532 = cljs.core.first.call(null,seq45531);
var seq45531__$1 = cljs.core.next.call(null,seq45531);
var G__45533 = cljs.core.first.call(null,seq45531__$1);
var seq45531__$2 = cljs.core.next.call(null,seq45531__$1);
var G__45534 = cljs.core.first.call(null,seq45531__$2);
var seq45531__$3 = cljs.core.next.call(null,seq45531__$2);
return cats.core.ap.cljs$core$IFn$_invoke$arity$variadic(G__45532,G__45533,G__45534,seq45531__$3);
});

return null;
})()
;
cats.core.ap.cljs$lang$macro = true;

var ret__42511__auto___45543 = (function (){
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
var args__42472__auto__ = [];
var len__42465__auto___45544 = arguments.length;
var i__42466__auto___45545 = (0);
while(true){
if((i__42466__auto___45545 < len__42465__auto___45544)){
args__42472__auto__.push((arguments[i__42466__auto___45545]));

var G__45546 = (i__42466__auto___45545 + (1));
i__42466__auto___45545 = G__45546;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((3) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((3)),(0),null)):null);
return cats.core.ap__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42473__auto__);
});

cats.core.ap__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),(function (){var x__42140__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),(function (){var x__42140__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})()))));
var G__45547 = threaded;
var G__45548 = cljs.core.next.call(null,forms__$1);
x__$1 = G__45547;
forms__$1 = G__45548;
continue;
} else {
return x__$1;
}
break;
}
});

cats.core.ap__GT_.cljs$lang$maxFixedArity = (3);

cats.core.ap__GT_.cljs$lang$applyTo = (function (seq45539){
var G__45540 = cljs.core.first.call(null,seq45539);
var seq45539__$1 = cljs.core.next.call(null,seq45539);
var G__45541 = cljs.core.first.call(null,seq45539__$1);
var seq45539__$2 = cljs.core.next.call(null,seq45539__$1);
var G__45542 = cljs.core.first.call(null,seq45539__$2);
var seq45539__$3 = cljs.core.next.call(null,seq45539__$2);
return cats.core.ap__GT_.cljs$core$IFn$_invoke$arity$variadic(G__45540,G__45541,G__45542,seq45539__$3);
});

return null;
})()
;
cats.core.ap__GT_.cljs$lang$macro = true;

var ret__42511__auto___45553 = (function (){
/**
 * Thread like `->>`, within an applicative idiom.
 * See `cats.labs.sugar/ap->` for more in-depth discussion.
 */
cats.core.ap__GT__GT_ = (function cats$core$ap__GT__GT_(var_args){
var args__42472__auto__ = [];
var len__42465__auto___45554 = arguments.length;
var i__42466__auto___45555 = (0);
while(true){
if((i__42466__auto___45555 < len__42465__auto___45554)){
args__42472__auto__.push((arguments[i__42466__auto___45555]));

var G__45556 = (i__42466__auto___45555 + (1));
i__42466__auto___45555 = G__45556;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((3) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((3)),(0),null)):null);
return cats.core.ap__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42473__auto__);
});

cats.core.ap__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),(function (){var x__42140__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__42140__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})()))),cljs.core.meta.call(null,form)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),(function (){var x__42140__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})()))));
var G__45557 = threaded;
var G__45558 = cljs.core.next.call(null,forms__$1);
x__$1 = G__45557;
forms__$1 = G__45558;
continue;
} else {
return x__$1;
}
break;
}
});

cats.core.ap__GT__GT_.cljs$lang$maxFixedArity = (3);

cats.core.ap__GT__GT_.cljs$lang$applyTo = (function (seq45549){
var G__45550 = cljs.core.first.call(null,seq45549);
var seq45549__$1 = cljs.core.next.call(null,seq45549);
var G__45551 = cljs.core.first.call(null,seq45549__$1);
var seq45549__$2 = cljs.core.next.call(null,seq45549__$1);
var G__45552 = cljs.core.first.call(null,seq45549__$2);
var seq45549__$3 = cljs.core.next.call(null,seq45549__$2);
return cats.core.ap__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__45550,G__45551,G__45552,seq45549__$3);
});

return null;
})()
;
cats.core.ap__GT__GT_.cljs$lang$macro = true;

var ret__42511__auto___45572 = (function (){
/**
 * Thread like `as->`, within an applicative idiom.
 * See `cats.labs.sugar/ap->` for more in-depth discussion.
 */
cats.core.as_ap__GT_ = (function cats$core$as_ap__GT_(var_args){
var args__42472__auto__ = [];
var len__42465__auto___45573 = arguments.length;
var i__42466__auto___45574 = (0);
while(true){
if((i__42466__auto___45574 < len__42465__auto___45573)){
args__42472__auto__.push((arguments[i__42466__auto___45574]));

var G__45575 = (i__42466__auto___45574 + (1));
i__42466__auto___45574 = G__45575;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((4) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((4)),(0),null)):null);
return cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__42473__auto__);
});

cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__42140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42140__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),(function (){var iter__42068__auto__ = (function cats$core$iter__45568(s__45569){
return (new cljs.core.LazySeq(null,(function (){
var s__45569__$1 = s__45569;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45569__$1);
if(temp__5457__auto__){
var s__45569__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45569__$2)){
var c__42066__auto__ = cljs.core.chunk_first.call(null,s__45569__$2);
var size__42067__auto__ = cljs.core.count.call(null,c__42066__auto__);
var b__45571 = cljs.core.chunk_buffer.call(null,size__42067__auto__);
if((function (){var i__45570 = (0);
while(true){
if((i__45570 < size__42067__auto__)){
var form = cljs.core._nth.call(null,c__42066__auto__,i__45570);
cljs.core.chunk_append.call(null,b__45571,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),form))));

var G__45576 = (i__45570 + (1));
i__45570 = G__45576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45571),cats$core$iter__45568.call(null,cljs.core.chunk_rest.call(null,s__45569__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45571),null);
}
} else {
var form = cljs.core.first.call(null,s__45569__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null)),form))),cats$core$iter__45568.call(null,cljs.core.rest.call(null,s__45569__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__42068__auto__.call(null,forms);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});

cats.core.as_ap__GT_.cljs$lang$maxFixedArity = (4);

cats.core.as_ap__GT_.cljs$lang$applyTo = (function (seq45559){
var G__45560 = cljs.core.first.call(null,seq45559);
var seq45559__$1 = cljs.core.next.call(null,seq45559);
var G__45561 = cljs.core.first.call(null,seq45559__$1);
var seq45559__$2 = cljs.core.next.call(null,seq45559__$1);
var G__45562 = cljs.core.first.call(null,seq45559__$2);
var seq45559__$3 = cljs.core.next.call(null,seq45559__$2);
var G__45563 = cljs.core.first.call(null,seq45559__$3);
var seq45559__$4 = cljs.core.next.call(null,seq45559__$3);
return cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic(G__45560,G__45561,G__45562,G__45563,seq45559__$4);
});

return null;
})()
;
cats.core.as_ap__GT_.cljs$lang$macro = true;

var ret__42511__auto___45581 = (function (){
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
var args__42472__auto__ = [];
var len__42465__auto___45582 = arguments.length;
var i__42466__auto___45583 = (0);
while(true){
if((i__42466__auto___45583 < len__42465__auto___45582)){
args__42472__auto__.push((arguments[i__42466__auto___45583]));

var G__45584 = (i__42466__auto___45583 + (1));
i__42466__auto___45583 = G__45584;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((3) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((3)),(0),null)):null);
return cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42473__auto__);
});

cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),(function (){var x__42140__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null)),(function (){var x__42140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42140__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null)),(function (){var x__42140__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});

cats.core.__GT__EQ_.cljs$lang$maxFixedArity = (3);

cats.core.__GT__EQ_.cljs$lang$applyTo = (function (seq45577){
var G__45578 = cljs.core.first.call(null,seq45577);
var seq45577__$1 = cljs.core.next.call(null,seq45577);
var G__45579 = cljs.core.first.call(null,seq45577__$1);
var seq45577__$2 = cljs.core.next.call(null,seq45577__$1);
var G__45580 = cljs.core.first.call(null,seq45577__$2);
var seq45577__$3 = cljs.core.next.call(null,seq45577__$2);
return cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45578,G__45579,G__45580,seq45577__$3);
});

return null;
})()
;
cats.core.__GT__EQ_.cljs$lang$macro = true;

var ret__42511__auto___45589 = (function (){
/**
 * Like ->>, but with monadic binding instead of pure application.
 * See `cats.labs.sugar/->=` for more in-depth discussion.
 */
cats.core.__GT__GT__EQ_ = (function cats$core$__GT__GT__EQ_(var_args){
var args__42472__auto__ = [];
var len__42465__auto___45590 = arguments.length;
var i__42466__auto___45591 = (0);
while(true){
if((i__42466__auto___45591 < len__42465__auto___45590)){
args__42472__auto__.push((arguments[i__42466__auto___45591]));

var G__45592 = (i__42466__auto___45591 + (1));
i__42466__auto___45591 = G__45592;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((3) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((3)),(0),null)):null);
return cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42473__auto__);
});

cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null)),(function (){var x__42140__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null)),(function (){var x__42140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42140__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null)),(function (){var x__42140__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});

cats.core.__GT__GT__EQ_.cljs$lang$maxFixedArity = (3);

cats.core.__GT__GT__EQ_.cljs$lang$applyTo = (function (seq45585){
var G__45586 = cljs.core.first.call(null,seq45585);
var seq45585__$1 = cljs.core.next.call(null,seq45585);
var G__45587 = cljs.core.first.call(null,seq45585__$1);
var seq45585__$2 = cljs.core.next.call(null,seq45585__$1);
var G__45588 = cljs.core.first.call(null,seq45585__$2);
var seq45585__$3 = cljs.core.next.call(null,seq45585__$2);
return cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45586,G__45587,G__45588,seq45585__$3);
});

return null;
})()
;
cats.core.__GT__GT__EQ_.cljs$lang$macro = true;

var ret__42511__auto___45598 = (function (){
/**
 * Like `as->`, but with monadic binding instead of pure application.
 * See `cats.labs.sugar/->=` for more in-depth discussion.
 */
cats.core.as__GT__EQ_ = (function cats$core$as__GT__EQ_(var_args){
var args__42472__auto__ = [];
var len__42465__auto___45599 = arguments.length;
var i__42466__auto___45600 = (0);
while(true){
if((i__42466__auto___45600 < len__42465__auto___45599)){
args__42472__auto__.push((arguments[i__42466__auto___45600]));

var G__45601 = (i__42466__auto___45600 + (1));
i__42466__auto___45600 = G__45601;
continue;
} else {
}
break;
}

var argseq__42473__auto__ = ((((4) < args__42472__auto__.length))?(new cljs.core.IndexedSeq(args__42472__auto__.slice((4)),(0),null)):null);
return cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__42473__auto__);
});

cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null)),(function (){var x__42140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__42140__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})(),(function (){var x__42140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null)),(function (){var x__42140__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
})())));
});

cats.core.as__GT__EQ_.cljs$lang$maxFixedArity = (4);

cats.core.as__GT__EQ_.cljs$lang$applyTo = (function (seq45593){
var G__45594 = cljs.core.first.call(null,seq45593);
var seq45593__$1 = cljs.core.next.call(null,seq45593);
var G__45595 = cljs.core.first.call(null,seq45593__$1);
var seq45593__$2 = cljs.core.next.call(null,seq45593__$1);
var G__45596 = cljs.core.first.call(null,seq45593__$2);
var seq45593__$3 = cljs.core.next.call(null,seq45593__$2);
var G__45597 = cljs.core.first.call(null,seq45593__$3);
var seq45593__$4 = cljs.core.next.call(null,seq45593__$3);
return cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45594,G__45595,G__45596,G__45597,seq45593__$4);
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

var _STAR_context_STAR_45605 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR_45605,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_45605,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR_45605,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR_45605,ctx))
);
});})(_STAR_context_STAR_45605,ctx))
);
});})(_STAR_context_STAR_45605,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45605;
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
return cats.core.bind.call(null,cats.core.guard.call(null,p.call(null,v)),(function (G__45606){
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
var G__45611 = arguments.length;
switch (G__45611) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42488__auto__ = [];
var len__42465__auto___45613 = arguments.length;
var i__42466__auto___45614 = (0);
while(true){
if((i__42466__auto___45614 < len__42465__auto___45613)){
args_arr__42488__auto__.push((arguments[i__42466__auto___45614]));

var G__45615 = (i__42466__auto___45614 + (1));
i__42466__auto___45614 = G__45615;
continue;
} else {
}
break;
}

var argseq__42489__auto__ = (new cljs.core.IndexedSeq(args_arr__42488__auto__.slice((2)),(0),null));
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42489__auto__);

}
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (mv,f){
return cats.core.bind.call(null,mv,f);
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,f,fs){
return cljs.core.reduce.call(null,cats.core.bind,mv,cljs.core.cons.call(null,f,fs));
});

cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq45608){
var G__45609 = cljs.core.first.call(null,seq45608);
var seq45608__$1 = cljs.core.next.call(null,seq45608);
var G__45610 = cljs.core.first.call(null,seq45608__$1);
var seq45608__$2 = cljs.core.next.call(null,seq45608__$1);
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45609,G__45610,seq45608__$2);
});

cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Perform a Haskell-style left-associative bind,
 *   ignoring the values produced by the monadic computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(var_args){
var G__45620 = arguments.length;
switch (G__45620) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42488__auto__ = [];
var len__42465__auto___45622 = arguments.length;
var i__42466__auto___45623 = (0);
while(true){
if((i__42466__auto___45623 < len__42465__auto___45622)){
args_arr__42488__auto__.push((arguments[i__42466__auto___45623]));

var G__45624 = (i__42466__auto___45623 + (1));
i__42466__auto___45623 = G__45624;
continue;
} else {
}
break;
}

var argseq__42489__auto__ = (new cljs.core.IndexedSeq(args_arr__42488__auto__.slice((2)),(0),null));
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42489__auto__);

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

cats.core._GT__GT_.cljs$lang$applyTo = (function (seq45617){
var G__45618 = cljs.core.first.call(null,seq45617);
var seq45617__$1 = cljs.core.next.call(null,seq45617);
var G__45619 = cljs.core.first.call(null,seq45617__$1);
var seq45617__$2 = cljs.core.next.call(null,seq45617__$1);
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__45618,G__45619,seq45617__$2);
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

var _STAR_context_STAR_45625 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.infer.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_45625){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_45625){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_45625))
);
});})(_STAR_context_STAR_45625))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45625;
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

var _STAR_context_STAR_45626 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.infer.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_45626){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_45626){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_45626))
);
});})(_STAR_context_STAR_45626))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45626;
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

var _STAR_context_STAR_45627 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldr.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45627;
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

var _STAR_context_STAR_45628 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldl.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45628;
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
var G__45630 = arguments.length;
switch (G__45630) {
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
var vec__45631 = xs;
var seq__45632 = cljs.core.seq.call(null,vec__45631);
var first__45633 = cljs.core.first.call(null,seq__45632);
var seq__45632__$1 = cljs.core.next.call(null,seq__45632);
var h = first__45633;
var t = seq__45632__$1;
return cats.core.bind.call(null,f.call(null,z,h),((function (vec__45631,seq__45632,first__45633,seq__45632__$1,h,t){
return (function (z_SINGLEQUOTE_){
if(cljs.core.empty_QMARK_.call(null,t)){
return cats.core.return$.call(null,z_SINGLEQUOTE_);
} else {
return cats.core.foldm.call(null,f,z_SINGLEQUOTE_,t);
}
});})(vec__45631,seq__45632,first__45633,seq__45632__$1,h,t))
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
var G__45636 = arguments.length;
switch (G__45636) {
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

var _STAR_context_STAR_45637 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_45637;
}});

cats.core.traverse.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
