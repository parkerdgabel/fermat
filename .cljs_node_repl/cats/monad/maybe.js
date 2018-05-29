// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cats.monad.maybe');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('cats.context');
goog.require('cats.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cats.protocols.Extract}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cats.protocols.Contextual}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cats.protocols.Printable}
*/
cats.monad.maybe.Just = (function (just,__meta,__extmap,__hash){
this.just = just;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cats.monad.maybe.Just.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41874__auto__,k__41875__auto__){
var self__ = this;
var this__41874__auto____$1 = this;
return this__41874__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41875__auto__,null);
});

cats.monad.maybe.Just.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41876__auto__,k45408,else__41877__auto__){
var self__ = this;
var this__41876__auto____$1 = this;
var G__45412 = k45408;
var G__45412__$1 = (((G__45412 instanceof cljs.core.Keyword))?G__45412.fqn:null);
switch (G__45412__$1) {
case "just":
return self__.just;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45408,else__41877__auto__);

}
});

cats.monad.maybe.Just.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41888__auto__,writer__41889__auto__,opts__41890__auto__){
var self__ = this;
var this__41888__auto____$1 = this;
var pr_pair__41891__auto__ = ((function (this__41888__auto____$1){
return (function (keyval__41892__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41889__auto__,cljs.core.pr_writer,""," ","",opts__41890__auto__,keyval__41892__auto__);
});})(this__41888__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41889__auto__,pr_pair__41891__auto__,"#cats.monad.maybe.Just{",", ","}",opts__41890__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"just","just",466318146),self__.just],null))], null),self__.__extmap));
});

cats.monad.maybe.Just.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45407){
var self__ = this;
var G__45407__$1 = this;
return (new cljs.core.RecordIter((0),G__45407__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"just","just",466318146)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cats.monad.maybe.Just.prototype.cats$protocols$Extract$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Just.prototype.cats$protocols$Extract$_extract$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.just;
});

cats.monad.maybe.Just.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41872__auto__){
var self__ = this;
var this__41872__auto____$1 = this;
return self__.__meta;
});

cats.monad.maybe.Just.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41869__auto__){
var self__ = this;
var this__41869__auto____$1 = this;
return (new cats.monad.maybe.Just(self__.just,self__.__meta,self__.__extmap,self__.__hash));
});

cats.monad.maybe.Just.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41878__auto__){
var self__ = this;
var this__41878__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

cats.monad.maybe.Just.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41870__auto__){
var self__ = this;
var this__41870__auto____$1 = this;
var h__41642__auto__ = self__.__hash;
if(!((h__41642__auto__ == null))){
return h__41642__auto__;
} else {
var h__41642__auto____$1 = ((function (h__41642__auto__,this__41870__auto____$1){
return (function (coll__41871__auto__){
return (2090233643 ^ cljs.core.hash_unordered_coll.call(null,coll__41871__auto__));
});})(h__41642__auto__,this__41870__auto____$1))
.call(null,this__41870__auto____$1);
self__.__hash = h__41642__auto____$1;

return h__41642__auto____$1;
}
});

cats.monad.maybe.Just.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45409,other45410){
var self__ = this;
var this45409__$1 = this;
return (!((other45410 == null))) && ((this45409__$1.constructor === other45410.constructor)) && (cljs.core._EQ_.call(null,this45409__$1.just,other45410.just)) && (cljs.core._EQ_.call(null,this45409__$1.__extmap,other45410.__extmap));
});

cats.monad.maybe.Just.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41883__auto__,k__41884__auto__){
var self__ = this;
var this__41883__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"just","just",466318146),null], null), null),k__41884__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41883__auto____$1),self__.__meta),k__41884__auto__);
} else {
return (new cats.monad.maybe.Just(self__.just,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41884__auto__)),null));
}
});

cats.monad.maybe.Just.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Just.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#<Just ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,self__.just)),">"].join('');
});

cats.monad.maybe.Just.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41881__auto__,k__41882__auto__,G__45407){
var self__ = this;
var this__41881__auto____$1 = this;
var pred__45413 = cljs.core.keyword_identical_QMARK_;
var expr__45414 = k__41882__auto__;
if(cljs.core.truth_(pred__45413.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__45414))){
return (new cats.monad.maybe.Just(G__45407,self__.__meta,self__.__extmap,null));
} else {
return (new cats.monad.maybe.Just(self__.just,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41882__auto__,G__45407),null));
}
});

cats.monad.maybe.Just.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41886__auto__){
var self__ = this;
var this__41886__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"just","just",466318146),self__.just],null))], null),self__.__extmap));
});

cats.monad.maybe.Just.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.just;
});

cats.monad.maybe.Just.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Just.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.context;
});

cats.monad.maybe.Just.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41873__auto__,G__45407){
var self__ = this;
var this__41873__auto____$1 = this;
return (new cats.monad.maybe.Just(self__.just,G__45407,self__.__extmap,self__.__hash));
});

cats.monad.maybe.Just.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41879__auto__,entry__41880__auto__){
var self__ = this;
var this__41879__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41880__auto__)){
return this__41879__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41880__auto__,(0)),cljs.core._nth.call(null,entry__41880__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41879__auto____$1,entry__41880__auto__);
}
});

cats.monad.maybe.Just.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"just","just",2106849673,null)], null);
});

cats.monad.maybe.Just.cljs$lang$type = true;

cats.monad.maybe.Just.cljs$lang$ctorPrSeq = (function (this__41912__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cats.monad.maybe/Just");
});

cats.monad.maybe.Just.cljs$lang$ctorPrWriter = (function (this__41912__auto__,writer__41913__auto__){
return cljs.core._write.call(null,writer__41913__auto__,"cats.monad.maybe/Just");
});

cats.monad.maybe.__GT_Just = (function cats$monad$maybe$__GT_Just(just){
return (new cats.monad.maybe.Just(just,null,null,null));
});

cats.monad.maybe.map__GT_Just = (function cats$monad$maybe$map__GT_Just(G__45411){
return (new cats.monad.maybe.Just(new cljs.core.Keyword(null,"just","just",466318146).cljs$core$IFn$_invoke$arity$1(G__45411),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45411,new cljs.core.Keyword(null,"just","just",466318146))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cats.protocols.Extract}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cats.protocols.Contextual}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cats.protocols.Printable}
*/
cats.monad.maybe.Nothing = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cats.monad.maybe.Nothing.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41874__auto__,k__41875__auto__){
var self__ = this;
var this__41874__auto____$1 = this;
return this__41874__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41875__auto__,null);
});

cats.monad.maybe.Nothing.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41876__auto__,k45418,else__41877__auto__){
var self__ = this;
var this__41876__auto____$1 = this;
var G__45422 = k45418;
switch (G__45422) {
default:
return cljs.core.get.call(null,self__.__extmap,k45418,else__41877__auto__);

}
});

cats.monad.maybe.Nothing.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41888__auto__,writer__41889__auto__,opts__41890__auto__){
var self__ = this;
var this__41888__auto____$1 = this;
var pr_pair__41891__auto__ = ((function (this__41888__auto____$1){
return (function (keyval__41892__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41889__auto__,cljs.core.pr_writer,""," ","",opts__41890__auto__,keyval__41892__auto__);
});})(this__41888__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41889__auto__,pr_pair__41891__auto__,"#cats.monad.maybe.Nothing{",", ","}",opts__41890__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cats.monad.maybe.Nothing.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45417){
var self__ = this;
var G__45417__$1 = this;
return (new cljs.core.RecordIter((0),G__45417__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cats.monad.maybe.Nothing.prototype.cats$protocols$Extract$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Nothing.prototype.cats$protocols$Extract$_extract$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cats.monad.maybe.Nothing.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41872__auto__){
var self__ = this;
var this__41872__auto____$1 = this;
return self__.__meta;
});

cats.monad.maybe.Nothing.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41869__auto__){
var self__ = this;
var this__41869__auto____$1 = this;
return (new cats.monad.maybe.Nothing(self__.__meta,self__.__extmap,self__.__hash));
});

cats.monad.maybe.Nothing.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41878__auto__){
var self__ = this;
var this__41878__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cats.monad.maybe.Nothing.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41870__auto__){
var self__ = this;
var this__41870__auto____$1 = this;
var h__41642__auto__ = self__.__hash;
if(!((h__41642__auto__ == null))){
return h__41642__auto__;
} else {
var h__41642__auto____$1 = ((function (h__41642__auto__,this__41870__auto____$1){
return (function (coll__41871__auto__){
return (-947132735 ^ cljs.core.hash_unordered_coll.call(null,coll__41871__auto__));
});})(h__41642__auto__,this__41870__auto____$1))
.call(null,this__41870__auto____$1);
self__.__hash = h__41642__auto____$1;

return h__41642__auto____$1;
}
});

cats.monad.maybe.Nothing.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45419,other45420){
var self__ = this;
var this45419__$1 = this;
return (!((other45420 == null))) && ((this45419__$1.constructor === other45420.constructor)) && (cljs.core._EQ_.call(null,this45419__$1.__extmap,other45420.__extmap));
});

cats.monad.maybe.Nothing.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41883__auto__,k__41884__auto__){
var self__ = this;
var this__41883__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__41884__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41883__auto____$1),self__.__meta),k__41884__auto__);
} else {
return (new cats.monad.maybe.Nothing(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41884__auto__)),null));
}
});

cats.monad.maybe.Nothing.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Nothing.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Nothing>";
});

cats.monad.maybe.Nothing.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41881__auto__,k__41882__auto__,G__45417){
var self__ = this;
var this__41881__auto____$1 = this;
var pred__45423 = cljs.core.keyword_identical_QMARK_;
var expr__45424 = k__41882__auto__;
return (new cats.monad.maybe.Nothing(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41882__auto__,G__45417),null));
});

cats.monad.maybe.Nothing.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41886__auto__){
var self__ = this;
var this__41886__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cats.monad.maybe.Nothing.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cats.monad.maybe.Nothing.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.Nothing.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.context;
});

cats.monad.maybe.Nothing.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41873__auto__,G__45417){
var self__ = this;
var this__41873__auto____$1 = this;
return (new cats.monad.maybe.Nothing(G__45417,self__.__extmap,self__.__hash));
});

cats.monad.maybe.Nothing.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41879__auto__,entry__41880__auto__){
var self__ = this;
var this__41879__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41880__auto__)){
return this__41879__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41880__auto__,(0)),cljs.core._nth.call(null,entry__41880__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41879__auto____$1,entry__41880__auto__);
}
});

cats.monad.maybe.Nothing.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cats.monad.maybe.Nothing.cljs$lang$type = true;

cats.monad.maybe.Nothing.cljs$lang$ctorPrSeq = (function (this__41912__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cats.monad.maybe/Nothing");
});

cats.monad.maybe.Nothing.cljs$lang$ctorPrWriter = (function (this__41912__auto__,writer__41913__auto__){
return cljs.core._write.call(null,writer__41913__auto__,"cats.monad.maybe/Nothing");
});

cats.monad.maybe.__GT_Nothing = (function cats$monad$maybe$__GT_Nothing(){
return (new cats.monad.maybe.Nothing(null,null,null));
});

cats.monad.maybe.map__GT_Nothing = (function cats$monad$maybe$map__GT_Nothing(G__45421){
return (new cats.monad.maybe.Nothing(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45421)),null));
});

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return cats.monad.maybe.__GT_Nothing;},new cljs.core.Symbol("cats.monad.maybe","->Nothing","cats.monad.maybe/->Nothing",-1239093988,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cats.monad.maybe","cats.monad.maybe",-1702951244,null),new cljs.core.Symbol(null,"->Nothing","->Nothing",-812940060,null),".cljs_node_repl/cats/monad/maybe.cljc",19,1,true,new cljs.core.Keyword(null,"positional","positional",-203580463),61,61,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cats.monad.maybe.__GT_Nothing)?cats.monad.maybe.__GT_Nothing.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"private","private",-558947994),true);
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return cats.monad.maybe.__GT_Just;},new cljs.core.Symbol("cats.monad.maybe","->Just","cats.monad.maybe/->Just",-1241334328,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cats.monad.maybe","cats.monad.maybe",-1702951244,null),new cljs.core.Symbol(null,"->Just","->Just",1235461808,null),".cljs_node_repl/cats/monad/maybe.cljc",16,1,true,new cljs.core.Keyword(null,"positional","positional",-203580463),45,45,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"just","just",2106849673,null)], null)),null,(cljs.core.truth_(cats.monad.maybe.__GT_Just)?cats.monad.maybe.__GT_Just.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"private","private",-558947994),true);
cats.util.make_printable.call(null,cats.monad.maybe.Just);
cats.util.make_printable.call(null,cats.monad.maybe.Nothing);
/**
 * Return true in case of `v` is instance
 *   of Maybe monad.
 */
cats.monad.maybe.maybe_QMARK_ = (function cats$monad$maybe$maybe_QMARK_(v){
var or__41186__auto__ = (v instanceof cats.monad.maybe.Just);
if(or__41186__auto__){
return or__41186__auto__;
} else {
var or__41186__auto____$1 = (v instanceof cats.monad.maybe.Nothing);
if(or__41186__auto____$1){
return or__41186__auto____$1;
} else {
var and__41174__auto__ = ((!((v == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === v.cats$protocols$Contextual$)))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Contextual,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Contextual,v));
if(and__41174__auto__){
return (cats.protocols._get_context.call(null,v) === cats.monad.maybe.context);
} else {
return and__41174__auto__;
}
}
}
});
/**
 * A Just type constructor.
 */
cats.monad.maybe.just = (function cats$monad$maybe$just(v){
if(!((v == null))){
} else {
throw (new Error("Assert failed: (some? v)"));
}

return (new cats.monad.maybe.Just(v,null,null,null));
});
/**
 * A Nothing type constructor.
 */
cats.monad.maybe.nothing = (function cats$monad$maybe$nothing(){
return cljs.core.assoc.call(null,(new cats.monad.maybe.Nothing(null,null,null)),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),null);
});
/**
 * Returns true if `v` is an instance
 *   of `Just` type.
 */
cats.monad.maybe.just_QMARK_ = (function cats$monad$maybe$just_QMARK_(v){
return (v instanceof cats.monad.maybe.Just);
});
/**
 * Returns true if `v` is an instance
 *   of `Nothing` type or is nil.
 */
cats.monad.maybe.nothing_QMARK_ = (function cats$monad$maybe$nothing_QMARK_(v){
return ((v == null)) || ((v instanceof cats.monad.maybe.Nothing));
});
/**
 * Return inner value from maybe monad.
 * 
 *   This is a specialized version of `cats.core/extract`
 *   for Maybe monad types that allows set up
 *   the default value.
 * 
 *   Let see some examples:
 * 
 *    (from-maybe (just 1))
 *    ;=> 1
 * 
 *    (from-maybe (nothing))
 *    ;=> nil
 * 
 *    (from-maybe (nothing) 42)
 *    ;=> 42
 *   
 */
cats.monad.maybe.from_maybe = (function cats$monad$maybe$from_maybe(var_args){
var G__45434 = arguments.length;
switch (G__45434) {
case 1:
return cats.monad.maybe.from_maybe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.monad.maybe.from_maybe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.monad.maybe.from_maybe.cljs$core$IFn$_invoke$arity$1 = (function (mv){
if(cljs.core.truth_(cats.monad.maybe.maybe_QMARK_.call(null,mv))){
} else {
throw (new Error("Assert failed: (maybe? mv)"));
}

if(cljs.core.truth_(cats.monad.maybe.just_QMARK_.call(null,mv))){
return cats.protocols._extract.call(null,mv);
} else {
return null;
}
});

cats.monad.maybe.from_maybe.cljs$core$IFn$_invoke$arity$2 = (function (mv,default$){
if(cljs.core.truth_(cats.monad.maybe.maybe_QMARK_.call(null,mv))){
} else {
throw (new Error("Assert failed: (maybe? mv)"));
}

if(cljs.core.truth_(cats.monad.maybe.just_QMARK_.call(null,mv))){
return cats.protocols._extract.call(null,mv);
} else {
return default$;
}
});

cats.monad.maybe.from_maybe.cljs$lang$maxFixedArity = 2;

cats.monad.maybe.context = (function (){
if(typeof cats.monad.maybe.t_cats$monad$maybe45436 !== 'undefined'){
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
cats.monad.maybe.t_cats$monad$maybe45436 = (function (meta45437){
this.meta45437 = meta45437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (ctx,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ctx__$1 = this;
if(cljs.core.truth_(cats.monad.maybe.nothing_QMARK_.call(null,mv))){
return mv_SINGLEQUOTE_;
} else {
if(cljs.core.truth_(cats.monad.maybe.nothing_QMARK_.call(null,mv_SINGLEQUOTE_))){
return mv;
} else {
return cats.monad.maybe.just.call(null,(function (){var mv__$1 = cats.protocols._extract.call(null,mv);
var mv_SINGLEQUOTE___$1 = cats.protocols._extract.call(null,mv_SINGLEQUOTE_);
return cats.protocols._mappend.call(null,cats.protocols._get_context.call(null,mv__$1),mv__$1,mv_SINGLEQUOTE___$1);
})());

}
}
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$MonadZero$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$MonadZero$_mzero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.nothing.call(null);
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Traversable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (_,f,mv){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.maybe.just_QMARK_.call(null,mv))){
var a = f.call(null,cats.protocols._extract.call(null,mv));
return cats.protocols._fmap.call(null,cats.protocols._get_context.call(null,a),cats.monad.maybe.just,a);
} else {
return cats.protocols._pure.call(null,cats.context.infer.call(null),mv);
}
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Monoid$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Monoid$_mempty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.nothing.call(null);
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Foldable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (_,f,z,mv){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.maybe.just_QMARK_.call(null,mv))){
return f.call(null,z,cats.protocols._extract.call(null,mv));
} else {
return z;
}
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (_,f,z,mv){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.maybe.just_QMARK_.call(null,mv))){
return f.call(null,cats.protocols._extract.call(null,mv),z);
} else {
return z;
}
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
if((v == null)){
return cats.monad.maybe.nothing.call(null);
} else {
return cats.monad.maybe.just.call(null,v);
}
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,mv,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.maybe.maybe_QMARK_.call(null,mv))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Context mismatch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cats.protocols._repr.call(null,mv))," is not allowed to use with maybe context."].join('')),"\n","(maybe? mv)"].join('')));
}

if(cljs.core.truth_(cats.monad.maybe.nothing_QMARK_.call(null,mv))){
return mv;
} else {
return f.call(null,cats.protocols._extract.call(null,mv));
}
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,mv){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.maybe.nothing_QMARK_.call(null,mv))){
return mv;
} else {
return cats.monad.maybe.just.call(null,f.call(null,cats.protocols._extract.call(null,mv)));
}
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45438){
var self__ = this;
var _45438__$1 = this;
return self__.meta45437;
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cats.monad.maybe.just.call(null,v);
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (m,af,av){
var self__ = this;
var m__$1 = this;
if(cljs.core.truth_(cats.monad.maybe.nothing_QMARK_.call(null,af))){
return af;
} else {
return cats.protocols._fmap.call(null,m__$1,cats.protocols._extract.call(null,af),av);
}
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Printable$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$Printable$_repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "#<Maybe>";
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45438,meta45437__$1){
var self__ = this;
var _45438__$1 = this;
return (new cats.monad.maybe.t_cats$monad$maybe45436(meta45437__$1));
});

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$MonadPlus$ = cljs.core.PROTOCOL_SENTINEL;

cats.monad.maybe.t_cats$monad$maybe45436.prototype.cats$protocols$MonadPlus$_mplus$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.maybe.just_QMARK_.call(null,mv))){
return mv;
} else {
return mv_SINGLEQUOTE_;
}
});

cats.monad.maybe.t_cats$monad$maybe45436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45437","meta45437",889476399,null)], null);
});

cats.monad.maybe.t_cats$monad$maybe45436.cljs$lang$type = true;

cats.monad.maybe.t_cats$monad$maybe45436.cljs$lang$ctorStr = "cats.monad.maybe/t_cats$monad$maybe45436";

cats.monad.maybe.t_cats$monad$maybe45436.cljs$lang$ctorPrWriter = (function (this__41857__auto__,writer__41858__auto__,opt__41859__auto__){
return cljs.core._write.call(null,writer__41858__auto__,"cats.monad.maybe/t_cats$monad$maybe45436");
});

cats.monad.maybe.__GT_t_cats$monad$maybe45436 = (function cats$monad$maybe$__GT_t_cats$monad$maybe45436(meta45437){
return (new cats.monad.maybe.t_cats$monad$maybe45436(meta45437));
});

}

return (new cats.monad.maybe.t_cats$monad$maybe45436(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cats.util.make_printable.call(null,cljs.core.type.call(null,cats.monad.maybe.context));
/**
 * Given a collection, return a nothing if its empty or a just with its
 *   first element if its not.
 */
cats.monad.maybe.seq__GT_maybe = (function cats$monad$maybe$seq__GT_maybe(coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return cats.monad.maybe.nothing.call(null);
} else {
return cats.monad.maybe.just.call(null,cljs.core.first.call(null,coll));
}
});
/**
 * Given a maybe, return an empty seq if its nothing or a one-element seq
 *   with its value if its not.
 */
cats.monad.maybe.maybe__GT_seq = (function cats$monad$maybe$maybe__GT_seq(m){
if(cljs.core.truth_(cats.monad.maybe.maybe_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (maybe? m)"));
}

if(cljs.core.truth_(cats.monad.maybe.nothing_QMARK_.call(null,m))){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.PersistentVector.EMPTY;
}),null,null));
} else {
return (new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cats.protocols._extract.call(null,m)], null);
}),null,null));
}
});
cats.monad.maybe._PLUS_extract_just_xform_PLUS_ = cljs.core.comp.call(null,cljs.core.filter.call(null,cats.monad.maybe.just_QMARK_),cljs.core.map.call(null,cats.protocols._extract));
/**
 * Given a collection of maybes, return a sequence of the values
 *   that the just's contain.
 */
cats.monad.maybe.cat_maybes = (function cats$monad$maybe$cat_maybes(coll){
return cljs.core.sequence.call(null,cats.monad.maybe._PLUS_extract_just_xform_PLUS_,coll);
});
/**
 * Given a maybe-returning function and a collection, map the function over
 *   the collection returning the values contained in the just values of the
 *   resulting collection.
 */
cats.monad.maybe.map_maybe = (function cats$monad$maybe$map_maybe(mf,coll){
return cats.monad.maybe.cat_maybes.call(null,cljs.core.map.call(null,mf,coll));
});

//# sourceMappingURL=maybe.js.map
