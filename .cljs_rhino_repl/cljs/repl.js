// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43255){
var map__43256 = p__43255;
var map__43256__$1 = ((((!((map__43256 == null)))?((((map__43256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43256):map__43256);
var m = map__43256__$1;
var n = cljs.core.get.call(null,map__43256__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43258_43280 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43259_43281 = null;
var count__43260_43282 = (0);
var i__43261_43283 = (0);
while(true){
if((i__43261_43283 < count__43260_43282)){
var f_43284 = cljs.core._nth.call(null,chunk__43259_43281,i__43261_43283);
cljs.core.println.call(null,"  ",f_43284);

var G__43285 = seq__43258_43280;
var G__43286 = chunk__43259_43281;
var G__43287 = count__43260_43282;
var G__43288 = (i__43261_43283 + (1));
seq__43258_43280 = G__43285;
chunk__43259_43281 = G__43286;
count__43260_43282 = G__43287;
i__43261_43283 = G__43288;
continue;
} else {
var temp__5457__auto___43289 = cljs.core.seq.call(null,seq__43258_43280);
if(temp__5457__auto___43289){
var seq__43258_43290__$1 = temp__5457__auto___43289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43258_43290__$1)){
var c__42034__auto___43291 = cljs.core.chunk_first.call(null,seq__43258_43290__$1);
var G__43292 = cljs.core.chunk_rest.call(null,seq__43258_43290__$1);
var G__43293 = c__42034__auto___43291;
var G__43294 = cljs.core.count.call(null,c__42034__auto___43291);
var G__43295 = (0);
seq__43258_43280 = G__43292;
chunk__43259_43281 = G__43293;
count__43260_43282 = G__43294;
i__43261_43283 = G__43295;
continue;
} else {
var f_43296 = cljs.core.first.call(null,seq__43258_43290__$1);
cljs.core.println.call(null,"  ",f_43296);

var G__43297 = cljs.core.next.call(null,seq__43258_43290__$1);
var G__43298 = null;
var G__43299 = (0);
var G__43300 = (0);
seq__43258_43280 = G__43297;
chunk__43259_43281 = G__43298;
count__43260_43282 = G__43299;
i__43261_43283 = G__43300;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43301 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41103__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41103__auto__)){
return or__41103__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43301);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43301)))?cljs.core.second.call(null,arglists_43301):arglists_43301));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43262_43302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43263_43303 = null;
var count__43264_43304 = (0);
var i__43265_43305 = (0);
while(true){
if((i__43265_43305 < count__43264_43304)){
var vec__43266_43306 = cljs.core._nth.call(null,chunk__43263_43303,i__43265_43305);
var name_43307 = cljs.core.nth.call(null,vec__43266_43306,(0),null);
var map__43269_43308 = cljs.core.nth.call(null,vec__43266_43306,(1),null);
var map__43269_43309__$1 = ((((!((map__43269_43308 == null)))?((((map__43269_43308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43269_43308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43269_43308):map__43269_43308);
var doc_43310 = cljs.core.get.call(null,map__43269_43309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43311 = cljs.core.get.call(null,map__43269_43309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43307);

cljs.core.println.call(null," ",arglists_43311);

if(cljs.core.truth_(doc_43310)){
cljs.core.println.call(null," ",doc_43310);
} else {
}

var G__43312 = seq__43262_43302;
var G__43313 = chunk__43263_43303;
var G__43314 = count__43264_43304;
var G__43315 = (i__43265_43305 + (1));
seq__43262_43302 = G__43312;
chunk__43263_43303 = G__43313;
count__43264_43304 = G__43314;
i__43265_43305 = G__43315;
continue;
} else {
var temp__5457__auto___43316 = cljs.core.seq.call(null,seq__43262_43302);
if(temp__5457__auto___43316){
var seq__43262_43317__$1 = temp__5457__auto___43316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43262_43317__$1)){
var c__42034__auto___43318 = cljs.core.chunk_first.call(null,seq__43262_43317__$1);
var G__43319 = cljs.core.chunk_rest.call(null,seq__43262_43317__$1);
var G__43320 = c__42034__auto___43318;
var G__43321 = cljs.core.count.call(null,c__42034__auto___43318);
var G__43322 = (0);
seq__43262_43302 = G__43319;
chunk__43263_43303 = G__43320;
count__43264_43304 = G__43321;
i__43265_43305 = G__43322;
continue;
} else {
var vec__43271_43323 = cljs.core.first.call(null,seq__43262_43317__$1);
var name_43324 = cljs.core.nth.call(null,vec__43271_43323,(0),null);
var map__43274_43325 = cljs.core.nth.call(null,vec__43271_43323,(1),null);
var map__43274_43326__$1 = ((((!((map__43274_43325 == null)))?((((map__43274_43325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43274_43325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43274_43325):map__43274_43325);
var doc_43327 = cljs.core.get.call(null,map__43274_43326__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43328 = cljs.core.get.call(null,map__43274_43326__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43324);

cljs.core.println.call(null," ",arglists_43328);

if(cljs.core.truth_(doc_43327)){
cljs.core.println.call(null," ",doc_43327);
} else {
}

var G__43329 = cljs.core.next.call(null,seq__43262_43317__$1);
var G__43330 = null;
var G__43331 = (0);
var G__43332 = (0);
seq__43262_43302 = G__43329;
chunk__43263_43303 = G__43330;
count__43264_43304 = G__43331;
i__43265_43305 = G__43332;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__43276 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43277 = null;
var count__43278 = (0);
var i__43279 = (0);
while(true){
if((i__43279 < count__43278)){
var role = cljs.core._nth.call(null,chunk__43277,i__43279);
var temp__5457__auto___43333__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43333__$1)){
var spec_43334 = temp__5457__auto___43333__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43334));
} else {
}

var G__43335 = seq__43276;
var G__43336 = chunk__43277;
var G__43337 = count__43278;
var G__43338 = (i__43279 + (1));
seq__43276 = G__43335;
chunk__43277 = G__43336;
count__43278 = G__43337;
i__43279 = G__43338;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__43276);
if(temp__5457__auto____$1){
var seq__43276__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43276__$1)){
var c__42034__auto__ = cljs.core.chunk_first.call(null,seq__43276__$1);
var G__43339 = cljs.core.chunk_rest.call(null,seq__43276__$1);
var G__43340 = c__42034__auto__;
var G__43341 = cljs.core.count.call(null,c__42034__auto__);
var G__43342 = (0);
seq__43276 = G__43339;
chunk__43277 = G__43340;
count__43278 = G__43341;
i__43279 = G__43342;
continue;
} else {
var role = cljs.core.first.call(null,seq__43276__$1);
var temp__5457__auto___43343__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43343__$2)){
var spec_43344 = temp__5457__auto___43343__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43344));
} else {
}

var G__43345 = cljs.core.next.call(null,seq__43276__$1);
var G__43346 = null;
var G__43347 = (0);
var G__43348 = (0);
seq__43276 = G__43345;
chunk__43277 = G__43346;
count__43278 = G__43347;
i__43279 = G__43348;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
