// Compiled by ClojureScript 1.9.946 {}
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
if(typeof cats.builtin.t_cats$builtin45109 !== 'undefined'){
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
cats.builtin.t_cats$builtin45109 = (function (meta45110){
this.meta45110 = meta45110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,sv_SINGLEQUOTE_,cljs.core.reverse.call(null,sv));
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
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

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
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

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var x__42057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__45107_SHARP_,p2__45108_SHARP_){
return cljs.core.into.call(null,p1__45107_SHARP_,p2__45108_SHARP_);
});})(___$1))
,cljs.core.List.EMPTY,(function (){var G__45115 = self;
var vec__45116 = G__45115;
var seq__45117 = cljs.core.seq.call(null,vec__45116);
var first__45118 = cljs.core.first.call(null,seq__45117);
var seq__45117__$1 = cljs.core.next.call(null,seq__45117);
var h = first__45118;
var t = seq__45117__$1;
var c = vec__45116;
var result = cljs.core.List.EMPTY;
var G__45115__$1 = G__45115;
var result__$1 = result;
while(true){
var vec__45119 = G__45115__$1;
var seq__45120 = cljs.core.seq.call(null,vec__45119);
var first__45121 = cljs.core.first.call(null,seq__45120);
var seq__45120__$1 = cljs.core.next.call(null,seq__45120);
var h__$1 = first__45121;
var t__$1 = seq__45120__$1;
var c__$1 = vec__45119;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_.call(null,c__$1)){
return result__$2;
} else {
var G__45152 = t__$1;
var G__45153 = cljs.core.cons.call(null,f.call(null,h__$1),result__$2);
G__45115__$1 = G__45152;
result__$1 = G__45153;
continue;
}
break;
}
})());
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
var G__45125 = v;
var vec__45126 = G__45125;
var seq__45127 = cljs.core.seq.call(null,vec__45126);
var first__45128 = cljs.core.first.call(null,seq__45127);
var seq__45127__$1 = cljs.core.next.call(null,seq__45127);
var h = first__45128;
var t = seq__45127__$1;
var c = vec__45126;
var result = cljs.core.List.EMPTY;
var G__45125__$1 = G__45125;
var result__$1 = result;
while(true){
var vec__45129 = G__45125__$1;
var seq__45130 = cljs.core.seq.call(null,vec__45129);
var first__45131 = cljs.core.first.call(null,seq__45130);
var seq__45130__$1 = cljs.core.next.call(null,seq__45130);
var h__$1 = first__45131;
var t__$1 = seq__45130__$1;
var c__$1 = vec__45129;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_.call(null,c__$1)){
return cljs.core.reverse.call(null,result__$2);
} else {
var G__45154 = t__$1;
var G__45155 = cljs.core.cons.call(null,f.call(null,h__$1),result__$2);
G__45125__$1 = G__45154;
result__$1 = G__45155;
continue;
}
break;
}
});

cats.builtin.t_cats$builtin45109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45111){
var self__ = this;
var _45111__$1 = this;
return self__.meta45110;
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var x__42057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__42057__auto__);
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__45105_SHARP_,p2__45106_SHARP_){
return cljs.core.into.call(null,p1__45105_SHARP_,p2__45106_SHARP_);
});})(___$1))
,cljs.core.List.EMPTY,(function (){var G__45135 = self;
var vec__45136 = G__45135;
var seq__45137 = cljs.core.seq.call(null,vec__45136);
var first__45138 = cljs.core.first.call(null,seq__45137);
var seq__45137__$1 = cljs.core.next.call(null,seq__45137);
var h = first__45138;
var t = seq__45137__$1;
var c = vec__45136;
var result = cljs.core.List.EMPTY;
var G__45135__$1 = G__45135;
var result__$1 = result;
while(true){
var vec__45139 = G__45135__$1;
var seq__45140 = cljs.core.seq.call(null,vec__45139);
var first__45141 = cljs.core.first.call(null,seq__45140);
var seq__45140__$1 = cljs.core.next.call(null,seq__45140);
var h__$1 = first__45141;
var t__$1 = seq__45140__$1;
var c__$1 = vec__45139;
var result__$2 = result__$1;
if(cljs.core.empty_QMARK_.call(null,c__$1)){
return result__$2;
} else {
var G__45156 = t__$1;
var G__45157 = cljs.core.cons.call(null,(function (){var G__45145 = av;
var vec__45146 = G__45145;
var seq__45147 = cljs.core.seq.call(null,vec__45146);
var first__45148 = cljs.core.first.call(null,seq__45147);
var seq__45147__$1 = cljs.core.next.call(null,seq__45147);
var h_SINGLEQUOTE_ = first__45148;
var t_SINGLEQUOTE_ = seq__45147__$1;
var c_SINGLEQUOTE_ = vec__45146;
var result_SINGLEQUOTE_ = cljs.core.List.EMPTY;
var G__45145__$1 = G__45145;
var result_SINGLEQUOTE___$1 = result_SINGLEQUOTE_;
while(true){
var vec__45149 = G__45145__$1;
var seq__45150 = cljs.core.seq.call(null,vec__45149);
var first__45151 = cljs.core.first.call(null,seq__45150);
var seq__45150__$1 = cljs.core.next.call(null,seq__45150);
var h_SINGLEQUOTE___$1 = first__45151;
var t_SINGLEQUOTE___$1 = seq__45150__$1;
var c_SINGLEQUOTE___$1 = vec__45149;
var result_SINGLEQUOTE___$2 = result_SINGLEQUOTE___$1;
if(cljs.core.empty_QMARK_.call(null,c_SINGLEQUOTE___$1)){
return result_SINGLEQUOTE___$2;
} else {
var G__45158 = t_SINGLEQUOTE___$1;
var G__45159 = cljs.core.cons.call(null,h__$1.call(null,h_SINGLEQUOTE___$1),result_SINGLEQUOTE___$2);
G__45145__$1 = G__45158;
result_SINGLEQUOTE___$1 = G__45159;
continue;
}
break;
}
})(),result__$2);
G__45135__$1 = G__45156;
result__$1 = G__45157;
continue;
}
break;
}
})());
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<List>";
});

cats.builtin.t_cats$builtin45109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45111,meta45110__$1){
var self__ = this;
var _45111__$1 = this;
return (new cats.builtin.t_cats$builtin45109(meta45110__$1));
});

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45109.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,mv_SINGLEQUOTE_,cljs.core.reverse.call(null,mv));
});

cats.builtin.t_cats$builtin45109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45110","meta45110",2005648986,null)], null);
});

cats.builtin.t_cats$builtin45109.cljs$lang$type = true;

cats.builtin.t_cats$builtin45109.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45109";

cats.builtin.t_cats$builtin45109.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45109");
});

cats.builtin.__GT_t_cats$builtin45109 = (function cats$builtin$__GT_t_cats$builtin45109(meta45110){
return (new cats.builtin.t_cats$builtin45109(meta45110));
});

}

return (new cats.builtin.t_cats$builtin45109(cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cats.builtin.t_cats$builtin45160 !== 'undefined'){
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
cats.builtin.t_cats$builtin45160 = (function (meta45161){
this.meta45161 = meta45161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,sv,sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
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

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
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

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,f,self));
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.map.call(null,f,v);
});

cats.builtin.t_cats$builtin45160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45162){
var self__ = this;
var _45162__$1 = this;
return self__.meta45161;
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});})(___$1))
,null,null));
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
var iter__41985__auto__ = ((function (___$1){
return (function cats$builtin$iter__45163(s__45164){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__45164__$1 = s__45164;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45164__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var f = cljs.core.first.call(null,xs__6012__auto__);
var iterys__41981__auto__ = ((function (s__45164__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function cats$builtin$iter__45163_$_iter__45165(s__45166){
return (new cljs.core.LazySeq(null,((function (s__45164__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function (){
var s__45166__$1 = s__45166;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__45166__$1);
if(temp__5457__auto____$1){
var s__45166__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45166__$2)){
var c__41983__auto__ = cljs.core.chunk_first.call(null,s__45166__$2);
var size__41984__auto__ = cljs.core.count.call(null,c__41983__auto__);
var b__45168 = cljs.core.chunk_buffer.call(null,size__41984__auto__);
if((function (){var i__45167 = (0);
while(true){
if((i__45167 < size__41984__auto__)){
var v = cljs.core._nth.call(null,c__41983__auto__,i__45167);
cljs.core.chunk_append.call(null,b__45168,f.call(null,v));

var G__45169 = (i__45167 + (1));
i__45167 = G__45169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45168),cats$builtin$iter__45163_$_iter__45165.call(null,cljs.core.chunk_rest.call(null,s__45166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45168),null);
}
} else {
var v = cljs.core.first.call(null,s__45166__$2);
return cljs.core.cons.call(null,f.call(null,v),cats$builtin$iter__45163_$_iter__45165.call(null,cljs.core.rest.call(null,s__45166__$2)));
}
} else {
return null;
}
break;
}
});})(s__45164__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
,null,null));
});})(s__45164__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
;
var fs__41982__auto__ = cljs.core.seq.call(null,iterys__41981__auto__.call(null,av));
if(fs__41982__auto__){
return cljs.core.concat.call(null,fs__41982__auto__,cats$builtin$iter__45163.call(null,cljs.core.rest.call(null,s__45164__$1)));
} else {
var G__45170 = cljs.core.rest.call(null,s__45164__$1);
s__45164__$1 = G__45170;
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
return iter__41985__auto__.call(null,self);
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<LazySequence>";
});

cats.builtin.t_cats$builtin45160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45162,meta45161__$1){
var self__ = this;
var _45162__$1 = this;
return (new cats.builtin.t_cats$builtin45160(meta45161__$1));
});

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45160.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45161","meta45161",972228535,null)], null);
});

cats.builtin.t_cats$builtin45160.cljs$lang$type = true;

cats.builtin.t_cats$builtin45160.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45160";

cats.builtin.t_cats$builtin45160.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45160");
});

cats.builtin.__GT_t_cats$builtin45160 = (function cats$builtin$__GT_t_cats$builtin45160(meta45161){
return (new cats.builtin.t_cats$builtin45160(meta45161));
});

}

return (new cats.builtin.t_cats$builtin45160(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.lazy_sequence_context));
cljs.core.LazySeq.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.lazy_sequence_context;
});
cats.builtin.range_context = (function (){
if(typeof cats.builtin.t_cats$builtin45171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Printable}
*/
cats.builtin.t_cats$builtin45171 = (function (meta45172){
this.meta45172 = meta45172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45173,meta45172__$1){
var self__ = this;
var _45173__$1 = this;
return (new cats.builtin.t_cats$builtin45171(meta45172__$1));
});

cats.builtin.t_cats$builtin45171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45173){
var self__ = this;
var _45173__$1 = this;
return self__.meta45172;
});

cats.builtin.t_cats$builtin45171.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45171.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45171.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
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

cats.builtin.t_cats$builtin45171.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45171.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45171.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Range>";
});

cats.builtin.t_cats$builtin45171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45172","meta45172",-1661713127,null)], null);
});

cats.builtin.t_cats$builtin45171.cljs$lang$type = true;

cats.builtin.t_cats$builtin45171.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45171";

cats.builtin.t_cats$builtin45171.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45171");
});

cats.builtin.__GT_t_cats$builtin45171 = (function cats$builtin$__GT_t_cats$builtin45171(meta45172){
return (new cats.builtin.t_cats$builtin45171(meta45172));
});

}

return (new cats.builtin.t_cats$builtin45171(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.range_context));
cljs.core.Range.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.range_context;
});
cats.builtin.vector_context = (function (){
if(typeof cats.builtin.t_cats$builtin45174 !== 'undefined'){
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
cats.builtin.t_cats$builtin45174 = (function (meta45175){
this.meta45175 = meta45175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,sv,sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (ctx,f,tv){
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

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var rf = ((function (ctx__$1){
return (function cats$builtin$rf(acc,v){
return f.call(null,v,acc);
});})(ctx__$1))
;
return cljs.core.reduce.call(null,rf,z,cljs.core.reverse.call(null,xs));
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,f,self));
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.map.call(null,f,v));
});

cats.builtin.t_cats$builtin45174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45176){
var self__ = this;
var _45176__$1 = this;
return self__.meta45175;
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.vec.call(null,(function (){var iter__41985__auto__ = ((function (___$1){
return (function cats$builtin$iter__45177(s__45178){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__45178__$1 = s__45178;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45178__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var f = cljs.core.first.call(null,xs__6012__auto__);
var iterys__41981__auto__ = ((function (s__45178__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function cats$builtin$iter__45177_$_iter__45179(s__45180){
return (new cljs.core.LazySeq(null,((function (s__45178__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function (){
var s__45180__$1 = s__45180;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__45180__$1);
if(temp__5457__auto____$1){
var s__45180__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45180__$2)){
var c__41983__auto__ = cljs.core.chunk_first.call(null,s__45180__$2);
var size__41984__auto__ = cljs.core.count.call(null,c__41983__auto__);
var b__45182 = cljs.core.chunk_buffer.call(null,size__41984__auto__);
if((function (){var i__45181 = (0);
while(true){
if((i__45181 < size__41984__auto__)){
var v = cljs.core._nth.call(null,c__41983__auto__,i__45181);
cljs.core.chunk_append.call(null,b__45182,f.call(null,v));

var G__45183 = (i__45181 + (1));
i__45181 = G__45183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45182),cats$builtin$iter__45177_$_iter__45179.call(null,cljs.core.chunk_rest.call(null,s__45180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45182),null);
}
} else {
var v = cljs.core.first.call(null,s__45180__$2);
return cljs.core.cons.call(null,f.call(null,v),cats$builtin$iter__45177_$_iter__45179.call(null,cljs.core.rest.call(null,s__45180__$2)));
}
} else {
return null;
}
break;
}
});})(s__45178__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
,null,null));
});})(s__45178__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
;
var fs__41982__auto__ = cljs.core.seq.call(null,iterys__41981__auto__.call(null,av));
if(fs__41982__auto__){
return cljs.core.concat.call(null,fs__41982__auto__,cats$builtin$iter__45177.call(null,cljs.core.rest.call(null,s__45178__$1)));
} else {
var G__45184 = cljs.core.rest.call(null,s__45178__$1);
s__45178__$1 = G__45184;
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
return iter__41985__auto__.call(null,self);
})());
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Vector>";
});

cats.builtin.t_cats$builtin45174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45176,meta45175__$1){
var self__ = this;
var _45176__$1 = this;
return (new cats.builtin.t_cats$builtin45174(meta45175__$1));
});

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45174.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45175","meta45175",-120603543,null)], null);
});

cats.builtin.t_cats$builtin45174.cljs$lang$type = true;

cats.builtin.t_cats$builtin45174.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45174";

cats.builtin.t_cats$builtin45174.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45174");
});

cats.builtin.__GT_t_cats$builtin45174 = (function cats$builtin$__GT_t_cats$builtin45174(meta45175){
return (new cats.builtin.t_cats$builtin45174(meta45175));
});

}

return (new cats.builtin.t_cats$builtin45174(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.vector_context));
cljs.core.PersistentVector.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.vector_context;
});
cats.builtin.map_context = (function (){
if(typeof cats.builtin.t_cats$builtin45185 !== 'undefined'){
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
cats.builtin.t_cats$builtin45185 = (function (meta45186){
this.meta45186 = meta45186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45187,meta45186__$1){
var self__ = this;
var _45187__$1 = this;
return (new cats.builtin.t_cats$builtin45185(meta45186__$1));
});

cats.builtin.t_cats$builtin45185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45187){
var self__ = this;
var _45187__$1 = this;
return self__.meta45186;
});

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return cljs.core.merge.call(null,sv,sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,v){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (___$1){
return (function (p__45188){
var vec__45189 = p__45188;
var key = cljs.core.nth.call(null,vec__45189,(0),null);
var value = cljs.core.nth.call(null,vec__45189,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,f.call(null,value)], null);
});})(___$1))
,v));
});

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
var rf = ((function (ctx__$1){
return (function cats$builtin$rf(acc,v){
return f.call(null,v,acc);
});})(ctx__$1))
;
return cljs.core.reduce.call(null,rf,z,xs);
});

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (ctx,f,z,xs){
var self__ = this;
var ctx__$1 = this;
return cljs.core.reduce.call(null,f,z,xs);
});

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45185.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Map>";
});

cats.builtin.t_cats$builtin45185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45186","meta45186",378174648,null)], null);
});

cats.builtin.t_cats$builtin45185.cljs$lang$type = true;

cats.builtin.t_cats$builtin45185.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45185";

cats.builtin.t_cats$builtin45185.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45185");
});

cats.builtin.__GT_t_cats$builtin45185 = (function cats$builtin$__GT_t_cats$builtin45185(meta45186){
return (new cats.builtin.t_cats$builtin45185(meta45186));
});

}

return (new cats.builtin.t_cats$builtin45185(cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cats.builtin.t_cats$builtin45192 !== 'undefined'){
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
cats.builtin.t_cats$builtin45192 = (function (meta45193){
this.meta45193 = meta45193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return clojure.set.union.call(null,sv,cljs.core.set.call(null,sv_SINGLEQUOTE_));
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([v]);
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,f,self));
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,self){
var self__ = this;
var ___$1 = this;
return cljs.core.set.call(null,cljs.core.map.call(null,f,self));
});

cats.builtin.t_cats$builtin45192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45194){
var self__ = this;
var _45194__$1 = this;
return self__.meta45193;
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([v]);
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return cljs.core.set.call(null,(function (){var iter__41985__auto__ = ((function (___$1){
return (function cats$builtin$iter__45195(s__45196){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__45196__$1 = s__45196;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45196__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var f = cljs.core.first.call(null,xs__6012__auto__);
var iterys__41981__auto__ = ((function (s__45196__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function cats$builtin$iter__45195_$_iter__45197(s__45198){
return (new cljs.core.LazySeq(null,((function (s__45196__$1,f,xs__6012__auto__,temp__5457__auto__,___$1){
return (function (){
var s__45198__$1 = s__45198;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__45198__$1);
if(temp__5457__auto____$1){
var s__45198__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45198__$2)){
var c__41983__auto__ = cljs.core.chunk_first.call(null,s__45198__$2);
var size__41984__auto__ = cljs.core.count.call(null,c__41983__auto__);
var b__45200 = cljs.core.chunk_buffer.call(null,size__41984__auto__);
if((function (){var i__45199 = (0);
while(true){
if((i__45199 < size__41984__auto__)){
var v = cljs.core._nth.call(null,c__41983__auto__,i__45199);
cljs.core.chunk_append.call(null,b__45200,f.call(null,v));

var G__45201 = (i__45199 + (1));
i__45199 = G__45201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45200),cats$builtin$iter__45195_$_iter__45197.call(null,cljs.core.chunk_rest.call(null,s__45198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45200),null);
}
} else {
var v = cljs.core.first.call(null,s__45198__$2);
return cljs.core.cons.call(null,f.call(null,v),cats$builtin$iter__45195_$_iter__45197.call(null,cljs.core.rest.call(null,s__45198__$2)));
}
} else {
return null;
}
break;
}
});})(s__45196__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
,null,null));
});})(s__45196__$1,f,xs__6012__auto__,temp__5457__auto__,___$1))
;
var fs__41982__auto__ = cljs.core.seq.call(null,iterys__41981__auto__.call(null,av));
if(fs__41982__auto__){
return cljs.core.concat.call(null,fs__41982__auto__,cats$builtin$iter__45195.call(null,cljs.core.rest.call(null,s__45196__$1)));
} else {
var G__45202 = cljs.core.rest.call(null,s__45196__$1);
s__45196__$1 = G__45202;
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
return iter__41985__auto__.call(null,self);
})());
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Set>";
});

cats.builtin.t_cats$builtin45192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45194,meta45193__$1){
var self__ = this;
var _45194__$1 = this;
return (new cats.builtin.t_cats$builtin45192(meta45193__$1));
});

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45192.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return clojure.set.union.call(null,mv,mv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45193","meta45193",370180030,null)], null);
});

cats.builtin.t_cats$builtin45192.cljs$lang$type = true;

cats.builtin.t_cats$builtin45192.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45192";

cats.builtin.t_cats$builtin45192.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45192");
});

cats.builtin.__GT_t_cats$builtin45192 = (function cats$builtin$__GT_t_cats$builtin45192(meta45193){
return (new cats.builtin.t_cats$builtin45192(meta45193));
});

}

return (new cats.builtin.t_cats$builtin45192(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.set_context));
cljs.core.PersistentHashSet.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.builtin.set_context;
});
cats.builtin.function_context = (function (){
if(typeof cats.builtin.t_cats$builtin45203 !== 'undefined'){
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
cats.builtin.t_cats$builtin45203 = (function (meta45204){
this.meta45204 = meta45204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45205,meta45204__$1){
var self__ = this;
var _45205__$1 = this;
return (new cats.builtin.t_cats$builtin45203(meta45204__$1));
});

cats.builtin.t_cats$builtin45203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45205){
var self__ = this;
var _45205__$1 = this;
return self__.meta45204;
});

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (ctx,f,g){
var self__ = this;
var ctx__$1 = this;
return cljs.core.comp.call(null,f,g);
});

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.identity;
});

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,self){
var self__ = this;
var ___$1 = this;
return cljs.core.comp.call(null,f,self);
});

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.constantly.call(null,v);
});

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,self,av){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (x){
return self.call(null,x).call(null,av.call(null,x));
});
;})(___$1))
});

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.constantly.call(null,v);
});

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,self,f){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (r){
return f.call(null,self.call(null,r)).call(null,r);
});
;})(___$1))
});

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45203.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Function>";
});

cats.builtin.t_cats$builtin45203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45204","meta45204",937285441,null)], null);
});

cats.builtin.t_cats$builtin45203.cljs$lang$type = true;

cats.builtin.t_cats$builtin45203.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45203";

cats.builtin.t_cats$builtin45203.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45203");
});

cats.builtin.__GT_t_cats$builtin45203 = (function cats$builtin$__GT_t_cats$builtin45203(meta45204){
return (new cats.builtin.t_cats$builtin45203(meta45204));
});

}

return (new cats.builtin.t_cats$builtin45203(cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cats.builtin.t_cats$builtin45206 !== 'undefined'){
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
cats.builtin.t_cats$builtin45206 = (function (meta45207){
this.meta45207 = meta45207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45208,meta45207__$1){
var self__ = this;
var _45208__$1 = this;
return (new cats.builtin.t_cats$builtin45206(meta45207__$1));
});

cats.builtin.t_cats$builtin45206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45208){
var self__ = this;
var _45208__$1 = this;
return self__.meta45207;
});

cats.builtin.t_cats$builtin45206.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45206.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45206.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
var or__41103__auto__ = sv;
if(cljs.core.truth_(or__41103__auto__)){
return or__41103__auto__;
} else {
return sv_SINGLEQUOTE_;
}
});

cats.builtin.t_cats$builtin45206.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45206.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

cats.builtin.t_cats$builtin45206.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45206.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Any>";
});

cats.builtin.t_cats$builtin45206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45207","meta45207",-1710280852,null)], null);
});

cats.builtin.t_cats$builtin45206.cljs$lang$type = true;

cats.builtin.t_cats$builtin45206.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45206";

cats.builtin.t_cats$builtin45206.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45206");
});

cats.builtin.__GT_t_cats$builtin45206 = (function cats$builtin$__GT_t_cats$builtin45206(meta45207){
return (new cats.builtin.t_cats$builtin45206(meta45207));
});

}

return (new cats.builtin.t_cats$builtin45206(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.any_monoid));
cats.builtin.all_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45209 !== 'undefined'){
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
cats.builtin.t_cats$builtin45209 = (function (meta45210){
this.meta45210 = meta45210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45211,meta45210__$1){
var self__ = this;
var _45211__$1 = this;
return (new cats.builtin.t_cats$builtin45209(meta45210__$1));
});

cats.builtin.t_cats$builtin45209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45211){
var self__ = this;
var _45211__$1 = this;
return self__.meta45210;
});

cats.builtin.t_cats$builtin45209.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45209.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45209.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
var and__41091__auto__ = sv;
if(cljs.core.truth_(and__41091__auto__)){
return sv_SINGLEQUOTE_;
} else {
return and__41091__auto__;
}
});

cats.builtin.t_cats$builtin45209.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45209.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cats.builtin.t_cats$builtin45209.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45209.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<All>";
});

cats.builtin.t_cats$builtin45209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45210","meta45210",-1115029606,null)], null);
});

cats.builtin.t_cats$builtin45209.cljs$lang$type = true;

cats.builtin.t_cats$builtin45209.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45209";

cats.builtin.t_cats$builtin45209.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45209");
});

cats.builtin.__GT_t_cats$builtin45209 = (function cats$builtin$__GT_t_cats$builtin45209(meta45210){
return (new cats.builtin.t_cats$builtin45209(meta45210));
});

}

return (new cats.builtin.t_cats$builtin45209(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.all_monoid));
cats.builtin.sum_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45212 !== 'undefined'){
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
cats.builtin.t_cats$builtin45212 = (function (meta45213){
this.meta45213 = meta45213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45214,meta45213__$1){
var self__ = this;
var _45214__$1 = this;
return (new cats.builtin.t_cats$builtin45212(meta45213__$1));
});

cats.builtin.t_cats$builtin45212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45214){
var self__ = this;
var _45214__$1 = this;
return self__.meta45213;
});

cats.builtin.t_cats$builtin45212.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45212.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45212.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return (sv + sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45212.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45212.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (0);
});

cats.builtin.t_cats$builtin45212.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45212.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Sum>";
});

cats.builtin.t_cats$builtin45212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45213","meta45213",796309129,null)], null);
});

cats.builtin.t_cats$builtin45212.cljs$lang$type = true;

cats.builtin.t_cats$builtin45212.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45212";

cats.builtin.t_cats$builtin45212.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45212");
});

cats.builtin.__GT_t_cats$builtin45212 = (function cats$builtin$__GT_t_cats$builtin45212(meta45213){
return (new cats.builtin.t_cats$builtin45212(meta45213));
});

}

return (new cats.builtin.t_cats$builtin45212(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.sum_monoid));
cats.builtin.prod_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45215 !== 'undefined'){
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
cats.builtin.t_cats$builtin45215 = (function (meta45216){
this.meta45216 = meta45216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45217,meta45216__$1){
var self__ = this;
var _45217__$1 = this;
return (new cats.builtin.t_cats$builtin45215(meta45216__$1));
});

cats.builtin.t_cats$builtin45215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45217){
var self__ = this;
var _45217__$1 = this;
return self__.meta45216;
});

cats.builtin.t_cats$builtin45215.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45215.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45215.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return (sv * sv_SINGLEQUOTE_);
});

cats.builtin.t_cats$builtin45215.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45215.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
});

cats.builtin.t_cats$builtin45215.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45215.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Product>";
});

cats.builtin.t_cats$builtin45215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45216","meta45216",-1774668432,null)], null);
});

cats.builtin.t_cats$builtin45215.cljs$lang$type = true;

cats.builtin.t_cats$builtin45215.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45215";

cats.builtin.t_cats$builtin45215.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45215");
});

cats.builtin.__GT_t_cats$builtin45215 = (function cats$builtin$__GT_t_cats$builtin45215(meta45216){
return (new cats.builtin.t_cats$builtin45215(meta45216));
});

}

return (new cats.builtin.t_cats$builtin45215(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.prod_monoid));
cats.builtin.string_monoid = (function (){
if(typeof cats.builtin.t_cats$builtin45218 !== 'undefined'){
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
cats.builtin.t_cats$builtin45218 = (function (meta45219){
this.meta45219 = meta45219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.builtin.t_cats$builtin45218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45220,meta45219__$1){
var self__ = this;
var _45220__$1 = this;
return (new cats.builtin.t_cats$builtin45218(meta45219__$1));
});

cats.builtin.t_cats$builtin45218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45220){
var self__ = this;
var _45220__$1 = this;
return self__.meta45219;
});

cats.builtin.t_cats$builtin45218.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45218.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45218.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,sv,sv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv_SINGLEQUOTE_)].join('');
});

cats.builtin.t_cats$builtin45218.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45218.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "";
});

cats.builtin.t_cats$builtin45218.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.builtin.t_cats$builtin45218.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<String>";
});

cats.builtin.t_cats$builtin45218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45219","meta45219",200492595,null)], null);
});

cats.builtin.t_cats$builtin45218.cljs$lang$type = true;

cats.builtin.t_cats$builtin45218.cljs$lang$ctorStr = "cats.builtin/t_cats$builtin45218";

cats.builtin.t_cats$builtin45218.cljs$lang$ctorPrWriter = (function (this__41774__auto__,writer__41775__auto__,opt__41776__auto__){
return cljs.core._write.call(null,writer__41775__auto__,"cats.builtin/t_cats$builtin45218");
});

cats.builtin.__GT_t_cats$builtin45218 = (function cats$builtin$__GT_t_cats$builtin45218(meta45219){
return (new cats.builtin.t_cats$builtin45218(meta45219));
});

}

return (new cats.builtin.t_cats$builtin45218(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.builtin.string_monoid));
goog.object.set(cats.protocols.Contextual,"string",true);

goog.object.set(cats.protocols._get_context,"string",(function (_){
return cats.builtin.string_monoid;
}));

//# sourceMappingURL=builtin.js.map
