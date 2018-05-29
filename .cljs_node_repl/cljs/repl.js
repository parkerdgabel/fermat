// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43338){
var map__43339 = p__43338;
var map__43339__$1 = ((((!((map__43339 == null)))?((((map__43339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43339):map__43339);
var m = map__43339__$1;
var n = cljs.core.get.call(null,map__43339__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43339__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__43341_43363 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43342_43364 = null;
var count__43343_43365 = (0);
var i__43344_43366 = (0);
while(true){
if((i__43344_43366 < count__43343_43365)){
var f_43367 = cljs.core._nth.call(null,chunk__43342_43364,i__43344_43366);
cljs.core.println.call(null,"  ",f_43367);

var G__43368 = seq__43341_43363;
var G__43369 = chunk__43342_43364;
var G__43370 = count__43343_43365;
var G__43371 = (i__43344_43366 + (1));
seq__43341_43363 = G__43368;
chunk__43342_43364 = G__43369;
count__43343_43365 = G__43370;
i__43344_43366 = G__43371;
continue;
} else {
var temp__5457__auto___43372 = cljs.core.seq.call(null,seq__43341_43363);
if(temp__5457__auto___43372){
var seq__43341_43373__$1 = temp__5457__auto___43372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43341_43373__$1)){
var c__42117__auto___43374 = cljs.core.chunk_first.call(null,seq__43341_43373__$1);
var G__43375 = cljs.core.chunk_rest.call(null,seq__43341_43373__$1);
var G__43376 = c__42117__auto___43374;
var G__43377 = cljs.core.count.call(null,c__42117__auto___43374);
var G__43378 = (0);
seq__43341_43363 = G__43375;
chunk__43342_43364 = G__43376;
count__43343_43365 = G__43377;
i__43344_43366 = G__43378;
continue;
} else {
var f_43379 = cljs.core.first.call(null,seq__43341_43373__$1);
cljs.core.println.call(null,"  ",f_43379);

var G__43380 = cljs.core.next.call(null,seq__43341_43373__$1);
var G__43381 = null;
var G__43382 = (0);
var G__43383 = (0);
seq__43341_43363 = G__43380;
chunk__43342_43364 = G__43381;
count__43343_43365 = G__43382;
i__43344_43366 = G__43383;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43384 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41186__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41186__auto__)){
return or__41186__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43384);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43384)))?cljs.core.second.call(null,arglists_43384):arglists_43384));
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
var seq__43345_43385 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43346_43386 = null;
var count__43347_43387 = (0);
var i__43348_43388 = (0);
while(true){
if((i__43348_43388 < count__43347_43387)){
var vec__43349_43389 = cljs.core._nth.call(null,chunk__43346_43386,i__43348_43388);
var name_43390 = cljs.core.nth.call(null,vec__43349_43389,(0),null);
var map__43352_43391 = cljs.core.nth.call(null,vec__43349_43389,(1),null);
var map__43352_43392__$1 = ((((!((map__43352_43391 == null)))?((((map__43352_43391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43352_43391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43352_43391):map__43352_43391);
var doc_43393 = cljs.core.get.call(null,map__43352_43392__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43394 = cljs.core.get.call(null,map__43352_43392__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43390);

cljs.core.println.call(null," ",arglists_43394);

if(cljs.core.truth_(doc_43393)){
cljs.core.println.call(null," ",doc_43393);
} else {
}

var G__43395 = seq__43345_43385;
var G__43396 = chunk__43346_43386;
var G__43397 = count__43347_43387;
var G__43398 = (i__43348_43388 + (1));
seq__43345_43385 = G__43395;
chunk__43346_43386 = G__43396;
count__43347_43387 = G__43397;
i__43348_43388 = G__43398;
continue;
} else {
var temp__5457__auto___43399 = cljs.core.seq.call(null,seq__43345_43385);
if(temp__5457__auto___43399){
var seq__43345_43400__$1 = temp__5457__auto___43399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43345_43400__$1)){
var c__42117__auto___43401 = cljs.core.chunk_first.call(null,seq__43345_43400__$1);
var G__43402 = cljs.core.chunk_rest.call(null,seq__43345_43400__$1);
var G__43403 = c__42117__auto___43401;
var G__43404 = cljs.core.count.call(null,c__42117__auto___43401);
var G__43405 = (0);
seq__43345_43385 = G__43402;
chunk__43346_43386 = G__43403;
count__43347_43387 = G__43404;
i__43348_43388 = G__43405;
continue;
} else {
var vec__43354_43406 = cljs.core.first.call(null,seq__43345_43400__$1);
var name_43407 = cljs.core.nth.call(null,vec__43354_43406,(0),null);
var map__43357_43408 = cljs.core.nth.call(null,vec__43354_43406,(1),null);
var map__43357_43409__$1 = ((((!((map__43357_43408 == null)))?((((map__43357_43408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43357_43408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43357_43408):map__43357_43408);
var doc_43410 = cljs.core.get.call(null,map__43357_43409__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43411 = cljs.core.get.call(null,map__43357_43409__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43407);

cljs.core.println.call(null," ",arglists_43411);

if(cljs.core.truth_(doc_43410)){
cljs.core.println.call(null," ",doc_43410);
} else {
}

var G__43412 = cljs.core.next.call(null,seq__43345_43400__$1);
var G__43413 = null;
var G__43414 = (0);
var G__43415 = (0);
seq__43345_43385 = G__43412;
chunk__43346_43386 = G__43413;
count__43347_43387 = G__43414;
i__43348_43388 = G__43415;
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

var seq__43359 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43360 = null;
var count__43361 = (0);
var i__43362 = (0);
while(true){
if((i__43362 < count__43361)){
var role = cljs.core._nth.call(null,chunk__43360,i__43362);
var temp__5457__auto___43416__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43416__$1)){
var spec_43417 = temp__5457__auto___43416__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43417));
} else {
}

var G__43418 = seq__43359;
var G__43419 = chunk__43360;
var G__43420 = count__43361;
var G__43421 = (i__43362 + (1));
seq__43359 = G__43418;
chunk__43360 = G__43419;
count__43361 = G__43420;
i__43362 = G__43421;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__43359);
if(temp__5457__auto____$1){
var seq__43359__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43359__$1)){
var c__42117__auto__ = cljs.core.chunk_first.call(null,seq__43359__$1);
var G__43422 = cljs.core.chunk_rest.call(null,seq__43359__$1);
var G__43423 = c__42117__auto__;
var G__43424 = cljs.core.count.call(null,c__42117__auto__);
var G__43425 = (0);
seq__43359 = G__43422;
chunk__43360 = G__43423;
count__43361 = G__43424;
i__43362 = G__43425;
continue;
} else {
var role = cljs.core.first.call(null,seq__43359__$1);
var temp__5457__auto___43426__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43426__$2)){
var spec_43427 = temp__5457__auto___43426__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43427));
} else {
}

var G__43428 = cljs.core.next.call(null,seq__43359__$1);
var G__43429 = null;
var G__43430 = (0);
var G__43431 = (0);
seq__43359 = G__43428;
chunk__43360 = G__43429;
count__43361 = G__43430;
i__43362 = G__43431;
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
