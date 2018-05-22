// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51006){
var map__51007 = p__51006;
var map__51007__$1 = ((((!((map__51007 == null)))?((((map__51007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51007):map__51007);
var m = map__51007__$1;
var n = cljs.core.get.call(null,map__51007__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__51009_51031 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51010_51032 = null;
var count__51011_51033 = (0);
var i__51012_51034 = (0);
while(true){
if((i__51012_51034 < count__51011_51033)){
var f_51035 = cljs.core._nth.call(null,chunk__51010_51032,i__51012_51034);
cljs.core.println.call(null,"  ",f_51035);

var G__51036 = seq__51009_51031;
var G__51037 = chunk__51010_51032;
var G__51038 = count__51011_51033;
var G__51039 = (i__51012_51034 + (1));
seq__51009_51031 = G__51036;
chunk__51010_51032 = G__51037;
count__51011_51033 = G__51038;
i__51012_51034 = G__51039;
continue;
} else {
var temp__5457__auto___51040 = cljs.core.seq.call(null,seq__51009_51031);
if(temp__5457__auto___51040){
var seq__51009_51041__$1 = temp__5457__auto___51040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51009_51041__$1)){
var c__42002__auto___51042 = cljs.core.chunk_first.call(null,seq__51009_51041__$1);
var G__51043 = cljs.core.chunk_rest.call(null,seq__51009_51041__$1);
var G__51044 = c__42002__auto___51042;
var G__51045 = cljs.core.count.call(null,c__42002__auto___51042);
var G__51046 = (0);
seq__51009_51031 = G__51043;
chunk__51010_51032 = G__51044;
count__51011_51033 = G__51045;
i__51012_51034 = G__51046;
continue;
} else {
var f_51047 = cljs.core.first.call(null,seq__51009_51041__$1);
cljs.core.println.call(null,"  ",f_51047);

var G__51048 = cljs.core.next.call(null,seq__51009_51041__$1);
var G__51049 = null;
var G__51050 = (0);
var G__51051 = (0);
seq__51009_51031 = G__51048;
chunk__51010_51032 = G__51049;
count__51011_51033 = G__51050;
i__51012_51034 = G__51051;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51052 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41071__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51052);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51052)))?cljs.core.second.call(null,arglists_51052):arglists_51052));
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
var seq__51013_51053 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51014_51054 = null;
var count__51015_51055 = (0);
var i__51016_51056 = (0);
while(true){
if((i__51016_51056 < count__51015_51055)){
var vec__51017_51057 = cljs.core._nth.call(null,chunk__51014_51054,i__51016_51056);
var name_51058 = cljs.core.nth.call(null,vec__51017_51057,(0),null);
var map__51020_51059 = cljs.core.nth.call(null,vec__51017_51057,(1),null);
var map__51020_51060__$1 = ((((!((map__51020_51059 == null)))?((((map__51020_51059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51020_51059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51020_51059):map__51020_51059);
var doc_51061 = cljs.core.get.call(null,map__51020_51060__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51062 = cljs.core.get.call(null,map__51020_51060__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51058);

cljs.core.println.call(null," ",arglists_51062);

if(cljs.core.truth_(doc_51061)){
cljs.core.println.call(null," ",doc_51061);
} else {
}

var G__51063 = seq__51013_51053;
var G__51064 = chunk__51014_51054;
var G__51065 = count__51015_51055;
var G__51066 = (i__51016_51056 + (1));
seq__51013_51053 = G__51063;
chunk__51014_51054 = G__51064;
count__51015_51055 = G__51065;
i__51016_51056 = G__51066;
continue;
} else {
var temp__5457__auto___51067 = cljs.core.seq.call(null,seq__51013_51053);
if(temp__5457__auto___51067){
var seq__51013_51068__$1 = temp__5457__auto___51067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51013_51068__$1)){
var c__42002__auto___51069 = cljs.core.chunk_first.call(null,seq__51013_51068__$1);
var G__51070 = cljs.core.chunk_rest.call(null,seq__51013_51068__$1);
var G__51071 = c__42002__auto___51069;
var G__51072 = cljs.core.count.call(null,c__42002__auto___51069);
var G__51073 = (0);
seq__51013_51053 = G__51070;
chunk__51014_51054 = G__51071;
count__51015_51055 = G__51072;
i__51016_51056 = G__51073;
continue;
} else {
var vec__51022_51074 = cljs.core.first.call(null,seq__51013_51068__$1);
var name_51075 = cljs.core.nth.call(null,vec__51022_51074,(0),null);
var map__51025_51076 = cljs.core.nth.call(null,vec__51022_51074,(1),null);
var map__51025_51077__$1 = ((((!((map__51025_51076 == null)))?((((map__51025_51076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51025_51076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51025_51076):map__51025_51076);
var doc_51078 = cljs.core.get.call(null,map__51025_51077__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51079 = cljs.core.get.call(null,map__51025_51077__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51075);

cljs.core.println.call(null," ",arglists_51079);

if(cljs.core.truth_(doc_51078)){
cljs.core.println.call(null," ",doc_51078);
} else {
}

var G__51080 = cljs.core.next.call(null,seq__51013_51068__$1);
var G__51081 = null;
var G__51082 = (0);
var G__51083 = (0);
seq__51013_51053 = G__51080;
chunk__51014_51054 = G__51081;
count__51015_51055 = G__51082;
i__51016_51056 = G__51083;
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

var seq__51027 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51028 = null;
var count__51029 = (0);
var i__51030 = (0);
while(true){
if((i__51030 < count__51029)){
var role = cljs.core._nth.call(null,chunk__51028,i__51030);
var temp__5457__auto___51084__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___51084__$1)){
var spec_51085 = temp__5457__auto___51084__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_51085));
} else {
}

var G__51086 = seq__51027;
var G__51087 = chunk__51028;
var G__51088 = count__51029;
var G__51089 = (i__51030 + (1));
seq__51027 = G__51086;
chunk__51028 = G__51087;
count__51029 = G__51088;
i__51030 = G__51089;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__51027);
if(temp__5457__auto____$1){
var seq__51027__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51027__$1)){
var c__42002__auto__ = cljs.core.chunk_first.call(null,seq__51027__$1);
var G__51090 = cljs.core.chunk_rest.call(null,seq__51027__$1);
var G__51091 = c__42002__auto__;
var G__51092 = cljs.core.count.call(null,c__42002__auto__);
var G__51093 = (0);
seq__51027 = G__51090;
chunk__51028 = G__51091;
count__51029 = G__51092;
i__51030 = G__51093;
continue;
} else {
var role = cljs.core.first.call(null,seq__51027__$1);
var temp__5457__auto___51094__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___51094__$2)){
var spec_51095 = temp__5457__auto___51094__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_51095));
} else {
}

var G__51096 = cljs.core.next.call(null,seq__51027__$1);
var G__51097 = null;
var G__51098 = (0);
var G__51099 = (0);
seq__51027 = G__51096;
chunk__51028 = G__51097;
count__51029 = G__51098;
i__51030 = G__51099;
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

//# sourceMappingURL=repl.js.map?rel=1524597523380
