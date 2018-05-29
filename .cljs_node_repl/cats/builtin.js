// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cats.builtin');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cats.monad.maybe');
goog.require('cats.protocols');
goog.require('cats.context');
goog.require('cats.core');
goog.require('cats.util');
goog.object.set(cats.protocols.Contextual,"null",true);

goog.object.set(cats.protocols._get_context,"null",(function (_){
return cats.monad.maybe.context;
}));

goog.object.set(cats.protocols.Extract,"null",true);

goog.object.set(cats.protocols._extract,"null",(function (_){
return null;
}));
cats.builtin.sequence_context = (function (){
if(typeof cats.builtin.t_cats$builtin45291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Traversable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45291 = (function (meta45292){
this.meta45292 = meta45292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,sv_SINGLEQUOTE_,cljs.core.reverse.call(null,sv));
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
var self__ = this;
var ctx__$1 = this;
var as = cats.protocols._fmap.call(null,ctx__$1,f,tv);
return cats.protocols._foldr.call(null,ctx__$1,((function (as,ctx__$1){
return (function (a,acc){
return cats.core.fapply.call(null,cats.core.fmap.call(null,((function (as,ctx__$1){
return (function (x){
return ((function (as,ctx__$1){
return (function (xs){
return cljs.core.cons.call(null,x,xs);
});
;})(as,ctx__$1))
});})(as,ctx__$1))
,a),acc);
});})(as,ctx__$1))
,cats.core.pure.call(null,cljs.core.List.EMPTY),as);
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var x = cljs.core.first.call(null,xs);
if((x == null)){
return z;
} else {
var xs__$1 = cljs.core.rest.call(null,xs);
return f.call(null,x,cats.protocols._foldr.call(null,ctx__$1,f,z,xs__$1));
}
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var x__42140__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__45289_SHARP_,p2__45290_SHARP_){
return cljs.core.into.call(null,p1__45289_SHARP_,p2__45290_SHARP_);
});})(___$1))
,cljs.core.List.EMPTY,(function (){var G__45297 = self;
var vec__45298 = G__45297;
var seq__45299 = cljs.core.seq.call(null,vec__45298);
var first__45300 = cljs.core.first.call(null,seq__45299);
var seq__45299__$1 = cljs.core.next.call(null,seq__45299);
var h = first__45300;
var t = seq__45299__$1;
var c = vec__45298;
var result = cljs.core.List.EMPTY;
var G__45297__$1 = G__45297;
var result__$1 = result;
while(true){
var vec__45301 = G__45297__$1;
var seq__45302 = cljs.core.seq.call(null,vec__45301);
var first__45303 = cljs.core.first.call(null,seq__45302);
var seq__45302__$1 = cljs.core.next.call(null,seq__45302);
var h__$1 = first__45303;
var t__$1 = seq__45302__$1;
var c__$1 = vec__45301;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_.call(null,c__$1)){
return result__$2;
} else {
var G__45334 = t__$1;
var G__45335 = cljs.core.cons.call(null,f.call(null,h__$1),result__$2);
G__45297__$1 = G__45334;
result__$1 = G__45335;
continue;
}
break;
}
})());
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
var G__45307 = v;
var vec__45308 = G__45307;
var seq__45309 = cljs.core.seq.call(null,vec__45308);
var first__45310 = cljs.core.first.call(null,seq__45309);
var seq__45309__$1 = cljs.core.next.call(null,seq__45309);
var h = first__45310;
var t = seq__45309__$1;
var c = vec__45308;
var result = cljs.core.List.EMPTY;
var G__45307__$1 = G__45307;
var result__$1 = result;
while(true){
var vec__45311 = G__45307__$1;
var seq__45312 = cljs.core.seq.call(null,vec__45311);
var first__45313 = cljs.core.first.call(null,seq__45312);
var seq__45312__$1 = cljs.core.next.call(null,seq__45312);
var h__$1 = first__45313;
var t__$1 = seq__45312__$1;
var c__$1 = vec__45311;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_.call(null,c__$1)){
return cljs.core.reverse.call(null,result__$2);
} else {
var G__45336 = t__$1;
var G__45337 = cljs.core.cons.call(null,f.call(null,h__$1),result__$2);
G__45307__$1 = G__45336;
result__$1 = G__45337;
continue;
}
break;
}
});

cats.builtin.t_cats$builtin45291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45293){
var self__ = this;
var _45293__$1 = this;
return self__.meta45292;
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var x__42140__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42140__auto__);
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__45287_SHARP_,p2__45288_SHARP_){
return cljs.core.into.call(null,p1__45287_SHARP_,p2__45288_SHARP_);
});})(___$1))
,cljs.core.List.EMPTY,(function (){var G__45317 = self;
var vec__45318 = G__45317;
var seq__45319 = cljs.core.seq.call(null,vec__45318);
var first__45320 = cljs.core.first.call(null,seq__45319);
var seq__45319__$1 = cljs.core.next.call(null,seq__45319);
var h = first__45320;
var t = seq__45319__$1;
var c = vec__45318;
var result = cljs.core.List.EMPTY;
var G__45317__$1 = G__45317;
var result__$1 = result;
while(true){
var vec__45321 = G__45317__$1;
var seq__45322 = cljs.core.seq.call(null,vec__45321);
var first__45323 = cljs.core.first.call(null,seq__45322);
var seq__45322__$1 = cljs.core.next.call(null,seq__45322);
var h__$1 = first__45323;
var t__$1 = seq__45322__$1;
var c__$1 = vec__45321;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_.call(null,c__$1)){
return result__$2;
} else {
var G__45338 = t__$1;
var G__45339 = cljs.core.cons.call(null,(function (){var G__45327 = av;
var vec__45328 = G__45327;
var seq__45329 = cljs.core.seq.call(null,vec__45328);
var first__45330 = cljs.core.first.call(null,seq__45329);
var seq__45329__$1 = cljs.core.next.call(null,seq__45329);
var h_SINGLEQUOTE_ = first__45330;
var t_SINGLEQUOTE_ = seq__45329__$1;
var c_SINGLEQUOTE_ = vec__45328;
var result_SINGLEQUOTE_ = cljs.core.List.EMPTY;
var G__45327__$1 = G__45327;
var result_SINGLEQUOTE___$1 = result_SINGLEQUOTE_;
while(true){
var vec__45331 = G__45327__$1;
var seq__45332 = cljs.core.seq.call(null,vec__45331);
var first__45333 = cljs.core.first.call(null,seq__45332);
var seq__45332__$1 = cljs.core.next.call(null,seq__45332);
var h_SINGLEQUOTE___$1 = first__45333;
var t_SINGLEQUOTE___$1 = seq__45332__$1;
var c_SINGLEQUOTE___$1 = vec__45331;
var result_SINGLEQUOTE___$2 = result_SINGLEQUOTE___$1;
if(cljs.core.empty_QMARK_.call(null,c_SINGLEQUOTE___$1)){
return result_SINGLEQUOTE___$2;
} else {
var G__45340 = t_SINGLEQUOTE___$1;
var G__45341 = cljs.core.cons.call(null,h__$1.call(null,h_SINGLEQUOTE___$1),result_SINGLEQUOTE___$2);
G__45327__$1 = G__45340;
result_SINGLEQUOTE___$1 = G__45341;
continue;
}
break;
}
})(),result__$2);
G__45317__$1 = G__45338;
result__$1 = G__45339;
continue;
}
break;
}
})());
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<List>";
});

cats.builtin.t_cats$builtin45291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45293,meta45292__$1){
var self__ = this;
var _45293__$1 = this;
return (new cats.builtin.t_cats$builtin45291(meta45292__$1));
});

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45291.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,mv_SINGLEQUOTE_,cljs.core.reverse.call(null,mv));
});

cats.builtin.t_cats$builtin45291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45292","meta45292",1360108303,null)], null);
});

cats.builtin.t_cats$builtin45291.cljs$lang$type = true;

cats.builtin.t_cats$builtin45291.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45291";

cats.builtin.t_cats$builtin45291.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45291");
});

cats.builtin.__GT_t_cats$builtin45291 = (function cats$builtin$__GT_t_cats$builtin45291(meta45292){
return (new cats.builtin.t_cats$builtin45291(meta45292));
});

}

return (new cats.builtin.t_cats$builtin45291(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.sequence_context));
cljs.core.List.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.sequence_context;
});
cljs.core.EmptyList.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.sequence_context;
});
cats.builtin.lazy_sequence_context = (function (){
if(typeof cats.builtin.t_cats$builtin45342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Traversable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45342 = (function (meta45343){
this.meta45343 = meta45343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,sv,sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
var self__ = this;
var ctx__$1 = this;
var as = cats.protocols._fmap.call(null,ctx__$1,f,tv);
return cats.protocols._foldr.call(null,ctx__$1,((function (as,ctx__$1){
return (function (a,acc){
return cats.core.fapply.call(null,cats.core.fmap.call(null,((function (as,ctx__$1){
return (function (x){
return ((function (as,ctx__$1){
return (function (xs){
return cljs.core.cons.call(null,x,xs);
});
;})(as,ctx__$1))
});})(as,ctx__$1))
,a),acc);
});})(as,ctx__$1))
,cats.core.pure.call(null,(new cljs.core.LazySeq(null,((function (as,ctx__$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(as,ctx__$1))
,null,null))),as);
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var x = cljs.core.first.call(null,xs);
if((x == null)){
return z;
} else {
var xs__$1 = cljs.core.rest.call(null,xs);
return f.call(null,x,cats.protocols._foldr.call(null,ctx__$1,f,z,xs__$1));
}
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,f,self));
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.map.call(null,f,v);
});

cats.builtin.t_cats$builtin45342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45344){
var self__ = this;
var _45344__$1 = this;
return self__.meta45343;
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
var iter__42068__auto__ = ((function (___$1){
return (function cats$builtin$iter__45345(s__45346){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__45346__$1 = s__45346;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45346__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var f = cljs.core.first.call(null,xs__6012__auto__);
var iterys__42064__auto__ = ((function (s__45346__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function cats$builtin$iter__45345_$_iter__45347(s__45348){
return (new cljs.core.LazySeq(null,((function (s__45346__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function (){
var s__45348__$1 = s__45348;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__45348__$1);
if(temp__5457__auto____$1){
var s__45348__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45348__$2)){
var c__42066__auto__ = cljs.core.chunk_first.call(null,s__45348__$2);
var size__42067__auto__ = cljs.core.count.call(null,c__42066__auto__);
var b__45350 = cljs.core.chunk_buffer.call(null,size__42067__auto__);
if((function (){var i__45349 = (0);
while(true){
if((i__45349 < size__42067__auto__)){
var v = cljs.core._nth.call(null,c__42066__auto__,i__45349);
cljs.core.chunk_append.call(null,b__45350,f.call(null,v));

var G__45351 = (i__45349 + (1));
i__45349 = G__45351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45350),cats$builtin$iter__45345_$_iter__45347.call(null,cljs.core.chunk_rest.call(null,s__45348__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45350),null);
}
} else {
var v = cljs.core.first.call(null,s__45348__$2);
return cljs.core.cons.call(null,f.call(null,v),cats$builtin$iter__45345_$_iter__45347.call(null,cljs.core.rest.call(null,s__45348__$2)));
}
} else {
return null;
}
break;
}
});})(s__45346__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
,null,null));
});})(s__45346__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
;
var fs__42065__auto__ = cljs.core.seq.call(null,iterys__42064__auto__.call(null,av));
if(fs__42065__auto__){
return cljs.core.concat.call(null,fs__42065__auto__,cats$builtin$iter__45345.call(null,cljs.core.rest.call(null,s__45346__$1)));
} else {
var G__45352 = cljs.core.rest.call(null,s__45346__$1);
s__45346__$1 = G__45352;
continue;
}
} else {
return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;
return iter__42068__auto__.call(null,self);
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<LazySequence>";
});

cats.builtin.t_cats$builtin45342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45344,meta45343__$1){
var self__ = this;
var _45344__$1 = this;
return (new cats.builtin.t_cats$builtin45342(meta45343__$1));
});

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45342.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45343","meta45343",-881944426,null)], null);
});

cats.builtin.t_cats$builtin45342.cljs$lang$type = true;

cats.builtin.t_cats$builtin45342.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45342";

cats.builtin.t_cats$builtin45342.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45342");
});

cats.builtin.__GT_t_cats$builtin45342 = (function cats$builtin$__GT_t_cats$builtin45342(meta45343){
return (new cats.builtin.t_cats$builtin45342(meta45343));
});

}

return (new cats.builtin.t_cats$builtin45342(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.lazy_sequence_context));
cljs.core.LazySeq.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.lazy_sequence_context;
});
cats.builtin.range_context = (function (){
if(typeof cats.builtin.t_cats$builtin45353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45353 = (function (meta45354){
this.meta45354 = meta45354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45355,meta45354__$1){
var self__ = this;
var _45355__$1 = this;
return (new cats.builtin.t_cats$builtin45353(meta45354__$1));
});

cats.builtin.t_cats$builtin45353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45355){
var self__ = this;
var _45355__$1 = this;
return self__.meta45354;
});

cats.builtin.t_cats$builtin45353.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45353.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45353.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var x = cljs.core.first.call(null,xs);
if((x == null)){
return z;
} else {
var xs__$1 = cljs.core.rest.call(null,xs);
return f.call(null,x,cats.protocols._foldr.call(null,ctx__$1,f,z,xs__$1));
}
});

cats.builtin.t_cats$builtin45353.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45353.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45353.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Range>";
});

cats.builtin.t_cats$builtin45353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45354","meta45354",1531787444,null)], null);
});

cats.builtin.t_cats$builtin45353.cljs$lang$type = true;

cats.builtin.t_cats$builtin45353.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45353";

cats.builtin.t_cats$builtin45353.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45353");
});

cats.builtin.__GT_t_cats$builtin45353 = (function cats$builtin$__GT_t_cats$builtin45353(meta45354){
return (new cats.builtin.t_cats$builtin45353(meta45354));
});

}

return (new cats.builtin.t_cats$builtin45353(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.range_context));
cljs.core.Range.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.range_context;
});
cats.builtin.vector_context = (function (){
if(typeof cats.builtin.t_cats$builtin45356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Traversable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45356 = (function (meta45357){
this.meta45357 = meta45357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,sv,sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
var self__ = this;
var ctx__$1 = this;
var as = cats.protocols._fmap.call(null,ctx__$1,f,tv);
return cats.protocols._foldl.call(null,ctx__$1,((function (as,ctx__$1){
return (function (acc,a){
return cats.core.fapply.call(null,cats.core.fmap.call(null,((function (as,ctx__$1){
return (function (x){
return ((function (as,ctx__$1){
return (function (xs){
return cljs.core.conj.call(null,xs,x);
});
;})(as,ctx__$1))
});})(as,ctx__$1))
,a),acc);
});})(as,ctx__$1))
,cats.core.pure.call(null,cljs.core.PersistentVector.EMPTY),as);
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var rf = ((function (ctx__$1){
return (function cats$builtin$rf(acc,v){
return f.call(null,v,acc);
});})(ctx__$1))
;
return cljs.core.reduce.call(null,rf,z,cljs.core.reverse.call(null,xs));
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,f,self));
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.map.call(null,f,v));
});

cats.builtin.t_cats$builtin45356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45358){
var self__ = this;
var _45358__$1 = this;
return self__.meta45357;
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.vec.call(null,(function (){var iter__42068__auto__ = ((function (___$1){
return (function cats$builtin$iter__45359(s__45360){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__45360__$1 = s__45360;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45360__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var f = cljs.core.first.call(null,xs__6012__auto__);
var iterys__42064__auto__ = ((function (s__45360__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function cats$builtin$iter__45359_$_iter__45361(s__45362){
return (new cljs.core.LazySeq(null,((function (s__45360__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function (){
var s__45362__$1 = s__45362;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__45362__$1);
if(temp__5457__auto____$1){
var s__45362__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45362__$2)){
var c__42066__auto__ = cljs.core.chunk_first.call(null,s__45362__$2);
var size__42067__auto__ = cljs.core.count.call(null,c__42066__auto__);
var b__45364 = cljs.core.chunk_buffer.call(null,size__42067__auto__);
if((function (){var i__45363 = (0);
while(true){
if((i__45363 < size__42067__auto__)){
var v = cljs.core._nth.call(null,c__42066__auto__,i__45363);
cljs.core.chunk_append.call(null,b__45364,f.call(null,v));

var G__45365 = (i__45363 + (1));
i__45363 = G__45365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45364),cats$builtin$iter__45359_$_iter__45361.call(null,cljs.core.chunk_rest.call(null,s__45362__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45364),null);
}
} else {
var v = cljs.core.first.call(null,s__45362__$2);
return cljs.core.cons.call(null,f.call(null,v),cats$builtin$iter__45359_$_iter__45361.call(null,cljs.core.rest.call(null,s__45362__$2)));
}
} else {
return null;
}
break;
}
});})(s__45360__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
,null,null));
});})(s__45360__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
;
var fs__42065__auto__ = cljs.core.seq.call(null,iterys__42064__auto__.call(null,av));
if(fs__42065__auto__){
return cljs.core.concat.call(null,fs__42065__auto__,cats$builtin$iter__45359.call(null,cljs.core.rest.call(null,s__45360__$1)));
} else {
var G__45366 = cljs.core.rest.call(null,s__45360__$1);
s__45360__$1 = G__45366;
continue;
}
} else {
return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;
return iter__42068__auto__.call(null,self);
})());
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Vector>";
});

cats.builtin.t_cats$builtin45356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45358,meta45357__$1){
var self__ = this;
var _45358__$1 = this;
return (new cats.builtin.t_cats$builtin45356(meta45357__$1));
});

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45356.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45357","meta45357",-362600401,null)], null);
});

cats.builtin.t_cats$builtin45356.cljs$lang$type = true;

cats.builtin.t_cats$builtin45356.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45356";

cats.builtin.t_cats$builtin45356.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45356");
});

cats.builtin.__GT_t_cats$builtin45356 = (function cats$builtin$__GT_t_cats$builtin45356(meta45357){
return (new cats.builtin.t_cats$builtin45356(meta45357));
});

}

return (new cats.builtin.t_cats$builtin45356(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.vector_context));
cljs.core.PersistentVector.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.vector_context;
});
cats.builtin.map_context = (function (){
if(typeof cats.builtin.t_cats$builtin45367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45367 = (function (meta45368){
this.meta45368 = meta45368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45369,meta45368__$1){
var self__ = this;
var _45369__$1 = this;
return (new cats.builtin.t_cats$builtin45367(meta45368__$1));
});

cats.builtin.t_cats$builtin45367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45369){
var self__ = this;
var _45369__$1 = this;
return self__.meta45368;
});

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.merge.call(null,sv,sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (___$1){
return (function (p__45370){
var vec__45371 = p__45370;
var key = cljs.core.nth.call(null,vec__45371,(0),null);
var value = cljs.core.nth.call(null,vec__45371,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,f.call(null,value)], null);
});})(___$1))
,v));
});

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var rf = ((function (ctx__$1){
return (function cats$builtin$rf(acc,v){
return f.call(null,v,acc);
});})(ctx__$1))
;
return cljs.core.reduce.call(null,rf,z,xs);
});

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45367.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Map>";
});

cats.builtin.t_cats$builtin45367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45368","meta45368",-805089664,null)], null);
});

cats.builtin.t_cats$builtin45367.cljs$lang$type = true;

cats.builtin.t_cats$builtin45367.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45367";

cats.builtin.t_cats$builtin45367.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45367");
});

cats.builtin.__GT_t_cats$builtin45367 = (function cats$builtin$__GT_t_cats$builtin45367(meta45368){
return (new cats.builtin.t_cats$builtin45367(meta45368));
});

}

return (new cats.builtin.t_cats$builtin45367(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.map_context));
cljs.core.PersistentArrayMap.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.map_context;
});
cljs.core.PersistentHashMap.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.map_context;
});
cljs.core.PersistentTreeMap.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.map_context;
});
cats.builtin.set_context = (function (){
if(typeof cats.builtin.t_cats$builtin45374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.MonadPlus}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.MonadZero}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45374 = (function (meta45375){
this.meta45375 = meta45375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return clojure.set.union.call(null,sv,cljs.core.set.call(null,sv_SINGLEQUOTE_));
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([v]);
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,f,self));
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,self){
var self__ = this;
var ___$1 = this;
return cljs.core.set.call(null,cljs.core.map.call(null,f,self));
});

cats.builtin.t_cats$builtin45374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45376){
var self__ = this;
var _45376__$1 = this;
return self__.meta45375;
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([v]);
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.set.call(null,(function (){var iter__42068__auto__ = ((function (___$1){
return (function cats$builtin$iter__45377(s__45378){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__45378__$1 = s__45378;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45378__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var f = cljs.core.first.call(null,xs__6012__auto__);
var iterys__42064__auto__ = ((function (s__45378__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function cats$builtin$iter__45377_$_iter__45379(s__45380){
return (new cljs.core.LazySeq(null,((function (s__45378__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function (){
var s__45380__$1 = s__45380;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__45380__$1);
if(temp__5457__auto____$1){
var s__45380__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45380__$2)){
var c__42066__auto__ = cljs.core.chunk_first.call(null,s__45380__$2);
var size__42067__auto__ = cljs.core.count.call(null,c__42066__auto__);
var b__45382 = cljs.core.chunk_buffer.call(null,size__42067__auto__);
if((function (){var i__45381 = (0);
while(true){
if((i__45381 < size__42067__auto__)){
var v = cljs.core._nth.call(null,c__42066__auto__,i__45381);
cljs.core.chunk_append.call(null,b__45382,f.call(null,v));

var G__45383 = (i__45381 + (1));
i__45381 = G__45383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45382),cats$builtin$iter__45377_$_iter__45379.call(null,cljs.core.chunk_rest.call(null,s__45380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45382),null);
}
} else {
var v = cljs.core.first.call(null,s__45380__$2);
return cljs.core.cons.call(null,f.call(null,v),cats$builtin$iter__45377_$_iter__45379.call(null,cljs.core.rest.call(null,s__45380__$2)));
}
} else {
return null;
}
break;
}
});})(s__45378__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
,null,null));
});})(s__45378__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
;
var fs__42065__auto__ = cljs.core.seq.call(null,iterys__42064__auto__.call(null,av));
if(fs__42065__auto__){
return cljs.core.concat.call(null,fs__42065__auto__,cats$builtin$iter__45377.call(null,cljs.core.rest.call(null,s__45378__$1)));
} else {
var G__45384 = cljs.core.rest.call(null,s__45378__$1);
s__45378__$1 = G__45384;
continue;
}
} else {
return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;
return iter__42068__auto__.call(null,self);
})());
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Set>";
});

cats.builtin.t_cats$builtin45374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45376,meta45375__$1){
var self__ = this;
var _45376__$1 = this;
return (new cats.builtin.t_cats$builtin45374(meta45375__$1));
});

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45374.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return clojure.set.union.call(null,mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45375","meta45375",-1743323129,null)], null);
});

cats.builtin.t_cats$builtin45374.cljs$lang$type = true;

cats.builtin.t_cats$builtin45374.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45374";

cats.builtin.t_cats$builtin45374.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45374");
});

cats.builtin.__GT_t_cats$builtin45374 = (function cats$builtin$__GT_t_cats$builtin45374(meta45375){
return (new cats.builtin.t_cats$builtin45374(meta45375));
});

}

return (new cats.builtin.t_cats$builtin45374(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.set_context));
cljs.core.PersistentHashSet.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.set_context;
});
cats.builtin.function_context = (function (){
if(typeof cats.builtin.t_cats$builtin45385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45385 = (function (meta45386){
this.meta45386 = meta45386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45387,meta45386__$1){
var self__ = this;
var _45387__$1 = this;
return (new cats.builtin.t_cats$builtin45385(meta45386__$1));
});

cats.builtin.t_cats$builtin45385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45387){
var self__ = this;
var _45387__$1 = this;
return self__.meta45386;
});

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (ctx,f,g){
var self__ = this;
var ctx__$1 = this;
return cljs.core.comp.call(null,f,g);
});

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.identity;
});

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,self){
var self__ = this;
var ___$1 = this;
return cljs.core.comp.call(null,f,self);
});

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.constantly.call(null,v);
});

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (x){
return self.call(null,x).call(null,av.call(null,x));
});
;})(___$1))
});

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.constantly.call(null,v);
});

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (r){
return f.call(null,self.call(null,r)).call(null,r);
});
;})(___$1))
});

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45385.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Function>";
});

cats.builtin.t_cats$builtin45385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45386","meta45386",-36612316,null)], null);
});

cats.builtin.t_cats$builtin45385.cljs$lang$type = true;

cats.builtin.t_cats$builtin45385.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45385";

cats.builtin.t_cats$builtin45385.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45385");
});

cats.builtin.__GT_t_cats$builtin45385 = (function cats$builtin$__GT_t_cats$builtin45385(meta45386){
return (new cats.builtin.t_cats$builtin45385(meta45386));
});

}

return (new cats.builtin.t_cats$builtin45385(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.function_context));
cljs.core.IFn.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IFn.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.function_context;
});
goog.object.set(cats.protocols.Contextual,"function",true);

goog.object.set(cats.protocols._get_context,"function",(function (_){
return cats.builtin.function_context;
}));
cats.builtin.any_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45388 = (function (meta45389){
this.meta45389 = meta45389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45390,meta45389__$1){
var self__ = this;
var _45390__$1 = this;
return (new cats.builtin.t_cats$builtin45388(meta45389__$1));
});

cats.builtin.t_cats$builtin45388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45390){
var self__ = this;
var _45390__$1 = this;
return self__.meta45389;
});

cats.builtin.t_cats$builtin45388.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45388.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45388.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
var or__41186__auto__ = sv;
if(cljs.core.truth_(or__41186__auto__)){
return or__41186__auto__;
} else {
return sv_SINGLEQUOTE_;
}
});

cats.builtin.t_cats$builtin45388.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45388.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

cats.builtin.t_cats$builtin45388.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45388.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Any>";
});

cats.builtin.t_cats$builtin45388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45389","meta45389",94176640,null)], null);
});

cats.builtin.t_cats$builtin45388.cljs$lang$type = true;

cats.builtin.t_cats$builtin45388.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45388";

cats.builtin.t_cats$builtin45388.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45388");
});

cats.builtin.__GT_t_cats$builtin45388 = (function cats$builtin$__GT_t_cats$builtin45388(meta45389){
return (new cats.builtin.t_cats$builtin45388(meta45389));
});

}

return (new cats.builtin.t_cats$builtin45388(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.any_monoid));
cats.builtin.all_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45391 = (function (meta45392){
this.meta45392 = meta45392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45393,meta45392__$1){
var self__ = this;
var _45393__$1 = this;
return (new cats.builtin.t_cats$builtin45391(meta45392__$1));
});

cats.builtin.t_cats$builtin45391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45393){
var self__ = this;
var _45393__$1 = this;
return self__.meta45392;
});

cats.builtin.t_cats$builtin45391.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45391.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45391.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
var and__41174__auto__ = sv;
if(cljs.core.truth_(and__41174__auto__)){
return sv_SINGLEQUOTE_;
} else {
return and__41174__auto__;
}
});

cats.builtin.t_cats$builtin45391.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45391.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cats.builtin.t_cats$builtin45391.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45391.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<All>";
});

cats.builtin.t_cats$builtin45391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45392","meta45392",-811970802,null)], null);
});

cats.builtin.t_cats$builtin45391.cljs$lang$type = true;

cats.builtin.t_cats$builtin45391.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45391";

cats.builtin.t_cats$builtin45391.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45391");
});

cats.builtin.__GT_t_cats$builtin45391 = (function cats$builtin$__GT_t_cats$builtin45391(meta45392){
return (new cats.builtin.t_cats$builtin45391(meta45392));
});

}

return (new cats.builtin.t_cats$builtin45391(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.all_monoid));
cats.builtin.sum_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45394 = (function (meta45395){
this.meta45395 = meta45395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45396,meta45395__$1){
var self__ = this;
var _45396__$1 = this;
return (new cats.builtin.t_cats$builtin45394(meta45395__$1));
});

cats.builtin.t_cats$builtin45394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45396){
var self__ = this;
var _45396__$1 = this;
return self__.meta45395;
});

cats.builtin.t_cats$builtin45394.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45394.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45394.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return (sv + sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45394.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45394.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (0);
});

cats.builtin.t_cats$builtin45394.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45394.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Sum>";
});

cats.builtin.t_cats$builtin45394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45395","meta45395",1958657328,null)], null);
});

cats.builtin.t_cats$builtin45394.cljs$lang$type = true;

cats.builtin.t_cats$builtin45394.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45394";

cats.builtin.t_cats$builtin45394.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45394");
});

cats.builtin.__GT_t_cats$builtin45394 = (function cats$builtin$__GT_t_cats$builtin45394(meta45395){
return (new cats.builtin.t_cats$builtin45394(meta45395));
});

}

return (new cats.builtin.t_cats$builtin45394(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.sum_monoid));
cats.builtin.prod_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45397 = (function (meta45398){
this.meta45398 = meta45398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45399,meta45398__$1){
var self__ = this;
var _45399__$1 = this;
return (new cats.builtin.t_cats$builtin45397(meta45398__$1));
});

cats.builtin.t_cats$builtin45397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45399){
var self__ = this;
var _45399__$1 = this;
return self__.meta45398;
});

cats.builtin.t_cats$builtin45397.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45397.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45397.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return (sv * sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45397.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45397.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
});

cats.builtin.t_cats$builtin45397.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45397.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Product>";
});

cats.builtin.t_cats$builtin45397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45398","meta45398",412761766,null)], null);
});

cats.builtin.t_cats$builtin45397.cljs$lang$type = true;

cats.builtin.t_cats$builtin45397.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45397";

cats.builtin.t_cats$builtin45397.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45397");
});

cats.builtin.__GT_t_cats$builtin45397 = (function cats$builtin$__GT_t_cats$builtin45397(meta45398){
return (new cats.builtin.t_cats$builtin45397(meta45398));
});

}

return (new cats.builtin.t_cats$builtin45397(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.prod_monoid));
cats.builtin.string_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Monoid}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45400 = (function (meta45401){
this.meta45401 = meta45401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45402,meta45401__$1){
var self__ = this;
var _45402__$1 = this;
return (new cats.builtin.t_cats$builtin45400(meta45401__$1));
});

cats.builtin.t_cats$builtin45400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45402){
var self__ = this;
var _45402__$1 = this;
return self__.meta45401;
});

cats.builtin.t_cats$builtin45400.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45400.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45400.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv_SINGLEQUOTE_)].join('');
});

cats.builtin.t_cats$builtin45400.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45400.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "";
});

cats.builtin.t_cats$builtin45400.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45400.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<String>";
});

cats.builtin.t_cats$builtin45400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45401","meta45401",1229508243,null)], null);
});

cats.builtin.t_cats$builtin45400.cljs$lang$type = true;

cats.builtin.t_cats$builtin45400.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45400";

cats.builtin.t_cats$builtin45400.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.builtin/t_cats$builtin45400");
});

cats.builtin.__GT_t_cats$builtin45400 = (function cats$builtin$__GT_t_cats$builtin45400(meta45401){
return (new cats.builtin.t_cats$builtin45400(meta45401));
});

}

return (new cats.builtin.t_cats$builtin45400(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.string_monoid));
goog.object.set(cats.protocols.Contextual,"string",true);

goog.object.set(cats.protocols._get_context,"string",(function (_){
return cats.builtin.string_monoid;
}));

//# sourceMappingURL=builtin.js.map
