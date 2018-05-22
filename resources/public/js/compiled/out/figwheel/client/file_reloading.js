// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41071__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41071__auto__){
return or__41071__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41071__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
var or__41071__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__41071__auto____$1)){
return or__41071__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49542_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49542_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49543 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49544 = null;
var count__49545 = (0);
var i__49546 = (0);
while(true){
if((i__49546 < count__49545)){
var n = cljs.core._nth.call(null,chunk__49544,i__49546);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49547 = seq__49543;
var G__49548 = chunk__49544;
var G__49549 = count__49545;
var G__49550 = (i__49546 + (1));
seq__49543 = G__49547;
chunk__49544 = G__49548;
count__49545 = G__49549;
i__49546 = G__49550;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49543);
if(temp__5457__auto__){
var seq__49543__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49543__$1)){
var c__42002__auto__ = cljs.core.chunk_first.call(null,seq__49543__$1);
var G__49551 = cljs.core.chunk_rest.call(null,seq__49543__$1);
var G__49552 = c__42002__auto__;
var G__49553 = cljs.core.count.call(null,c__42002__auto__);
var G__49554 = (0);
seq__49543 = G__49551;
chunk__49544 = G__49552;
count__49545 = G__49553;
i__49546 = G__49554;
continue;
} else {
var n = cljs.core.first.call(null,seq__49543__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49555 = cljs.core.next.call(null,seq__49543__$1);
var G__49556 = null;
var G__49557 = (0);
var G__49558 = (0);
seq__49543 = G__49555;
chunk__49544 = G__49556;
count__49545 = G__49557;
i__49546 = G__49558;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__49559){
var vec__49560 = p__49559;
var _ = cljs.core.nth.call(null,vec__49560,(0),null);
var v = cljs.core.nth.call(null,vec__49560,(1),null);
var and__41059__auto__ = v;
if(cljs.core.truth_(and__41059__auto__)){
return v.call(null,dep);
} else {
return and__41059__auto__;
}
}),cljs.core.filter.call(null,(function (p__49563){
var vec__49564 = p__49563;
var k = cljs.core.nth.call(null,vec__49564,(0),null);
var v = cljs.core.nth.call(null,vec__49564,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49576_49584 = cljs.core.seq.call(null,deps);
var chunk__49577_49585 = null;
var count__49578_49586 = (0);
var i__49579_49587 = (0);
while(true){
if((i__49579_49587 < count__49578_49586)){
var dep_49588 = cljs.core._nth.call(null,chunk__49577_49585,i__49579_49587);
if(cljs.core.truth_((function (){var and__41059__auto__ = dep_49588;
if(cljs.core.truth_(and__41059__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49588));
} else {
return and__41059__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49588,(depth + (1)),state);
} else {
}

var G__49589 = seq__49576_49584;
var G__49590 = chunk__49577_49585;
var G__49591 = count__49578_49586;
var G__49592 = (i__49579_49587 + (1));
seq__49576_49584 = G__49589;
chunk__49577_49585 = G__49590;
count__49578_49586 = G__49591;
i__49579_49587 = G__49592;
continue;
} else {
var temp__5457__auto___49593 = cljs.core.seq.call(null,seq__49576_49584);
if(temp__5457__auto___49593){
var seq__49576_49594__$1 = temp__5457__auto___49593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49576_49594__$1)){
var c__42002__auto___49595 = cljs.core.chunk_first.call(null,seq__49576_49594__$1);
var G__49596 = cljs.core.chunk_rest.call(null,seq__49576_49594__$1);
var G__49597 = c__42002__auto___49595;
var G__49598 = cljs.core.count.call(null,c__42002__auto___49595);
var G__49599 = (0);
seq__49576_49584 = G__49596;
chunk__49577_49585 = G__49597;
count__49578_49586 = G__49598;
i__49579_49587 = G__49599;
continue;
} else {
var dep_49600 = cljs.core.first.call(null,seq__49576_49594__$1);
if(cljs.core.truth_((function (){var and__41059__auto__ = dep_49600;
if(cljs.core.truth_(and__41059__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49600));
} else {
return and__41059__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49600,(depth + (1)),state);
} else {
}

var G__49601 = cljs.core.next.call(null,seq__49576_49594__$1);
var G__49602 = null;
var G__49603 = (0);
var G__49604 = (0);
seq__49576_49584 = G__49601;
chunk__49577_49585 = G__49602;
count__49578_49586 = G__49603;
i__49579_49587 = G__49604;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49580){
var vec__49581 = p__49580;
var seq__49582 = cljs.core.seq.call(null,vec__49581);
var first__49583 = cljs.core.first.call(null,seq__49582);
var seq__49582__$1 = cljs.core.next.call(null,seq__49582);
var x = first__49583;
var xs = seq__49582__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49581,seq__49582,first__49583,seq__49582__$1,x,xs,get_deps__$1){
return (function (p1__49567_SHARP_){
return clojure.set.difference.call(null,p1__49567_SHARP_,x);
});})(vec__49581,seq__49582,first__49583,seq__49582__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49605 = cljs.core.seq.call(null,provides);
var chunk__49606 = null;
var count__49607 = (0);
var i__49608 = (0);
while(true){
if((i__49608 < count__49607)){
var prov = cljs.core._nth.call(null,chunk__49606,i__49608);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49609_49617 = cljs.core.seq.call(null,requires);
var chunk__49610_49618 = null;
var count__49611_49619 = (0);
var i__49612_49620 = (0);
while(true){
if((i__49612_49620 < count__49611_49619)){
var req_49621 = cljs.core._nth.call(null,chunk__49610_49618,i__49612_49620);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49621,prov);

var G__49622 = seq__49609_49617;
var G__49623 = chunk__49610_49618;
var G__49624 = count__49611_49619;
var G__49625 = (i__49612_49620 + (1));
seq__49609_49617 = G__49622;
chunk__49610_49618 = G__49623;
count__49611_49619 = G__49624;
i__49612_49620 = G__49625;
continue;
} else {
var temp__5457__auto___49626 = cljs.core.seq.call(null,seq__49609_49617);
if(temp__5457__auto___49626){
var seq__49609_49627__$1 = temp__5457__auto___49626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49609_49627__$1)){
var c__42002__auto___49628 = cljs.core.chunk_first.call(null,seq__49609_49627__$1);
var G__49629 = cljs.core.chunk_rest.call(null,seq__49609_49627__$1);
var G__49630 = c__42002__auto___49628;
var G__49631 = cljs.core.count.call(null,c__42002__auto___49628);
var G__49632 = (0);
seq__49609_49617 = G__49629;
chunk__49610_49618 = G__49630;
count__49611_49619 = G__49631;
i__49612_49620 = G__49632;
continue;
} else {
var req_49633 = cljs.core.first.call(null,seq__49609_49627__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49633,prov);

var G__49634 = cljs.core.next.call(null,seq__49609_49627__$1);
var G__49635 = null;
var G__49636 = (0);
var G__49637 = (0);
seq__49609_49617 = G__49634;
chunk__49610_49618 = G__49635;
count__49611_49619 = G__49636;
i__49612_49620 = G__49637;
continue;
}
} else {
}
}
break;
}

var G__49638 = seq__49605;
var G__49639 = chunk__49606;
var G__49640 = count__49607;
var G__49641 = (i__49608 + (1));
seq__49605 = G__49638;
chunk__49606 = G__49639;
count__49607 = G__49640;
i__49608 = G__49641;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49605);
if(temp__5457__auto__){
var seq__49605__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49605__$1)){
var c__42002__auto__ = cljs.core.chunk_first.call(null,seq__49605__$1);
var G__49642 = cljs.core.chunk_rest.call(null,seq__49605__$1);
var G__49643 = c__42002__auto__;
var G__49644 = cljs.core.count.call(null,c__42002__auto__);
var G__49645 = (0);
seq__49605 = G__49642;
chunk__49606 = G__49643;
count__49607 = G__49644;
i__49608 = G__49645;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49605__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49613_49646 = cljs.core.seq.call(null,requires);
var chunk__49614_49647 = null;
var count__49615_49648 = (0);
var i__49616_49649 = (0);
while(true){
if((i__49616_49649 < count__49615_49648)){
var req_49650 = cljs.core._nth.call(null,chunk__49614_49647,i__49616_49649);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49650,prov);

var G__49651 = seq__49613_49646;
var G__49652 = chunk__49614_49647;
var G__49653 = count__49615_49648;
var G__49654 = (i__49616_49649 + (1));
seq__49613_49646 = G__49651;
chunk__49614_49647 = G__49652;
count__49615_49648 = G__49653;
i__49616_49649 = G__49654;
continue;
} else {
var temp__5457__auto___49655__$1 = cljs.core.seq.call(null,seq__49613_49646);
if(temp__5457__auto___49655__$1){
var seq__49613_49656__$1 = temp__5457__auto___49655__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49613_49656__$1)){
var c__42002__auto___49657 = cljs.core.chunk_first.call(null,seq__49613_49656__$1);
var G__49658 = cljs.core.chunk_rest.call(null,seq__49613_49656__$1);
var G__49659 = c__42002__auto___49657;
var G__49660 = cljs.core.count.call(null,c__42002__auto___49657);
var G__49661 = (0);
seq__49613_49646 = G__49658;
chunk__49614_49647 = G__49659;
count__49615_49648 = G__49660;
i__49616_49649 = G__49661;
continue;
} else {
var req_49662 = cljs.core.first.call(null,seq__49613_49656__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49662,prov);

var G__49663 = cljs.core.next.call(null,seq__49613_49656__$1);
var G__49664 = null;
var G__49665 = (0);
var G__49666 = (0);
seq__49613_49646 = G__49663;
chunk__49614_49647 = G__49664;
count__49615_49648 = G__49665;
i__49616_49649 = G__49666;
continue;
}
} else {
}
}
break;
}

var G__49667 = cljs.core.next.call(null,seq__49605__$1);
var G__49668 = null;
var G__49669 = (0);
var G__49670 = (0);
seq__49605 = G__49667;
chunk__49606 = G__49668;
count__49607 = G__49669;
i__49608 = G__49670;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49671_49675 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49672_49676 = null;
var count__49673_49677 = (0);
var i__49674_49678 = (0);
while(true){
if((i__49674_49678 < count__49673_49677)){
var ns_49679 = cljs.core._nth.call(null,chunk__49672_49676,i__49674_49678);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49679);

var G__49680 = seq__49671_49675;
var G__49681 = chunk__49672_49676;
var G__49682 = count__49673_49677;
var G__49683 = (i__49674_49678 + (1));
seq__49671_49675 = G__49680;
chunk__49672_49676 = G__49681;
count__49673_49677 = G__49682;
i__49674_49678 = G__49683;
continue;
} else {
var temp__5457__auto___49684 = cljs.core.seq.call(null,seq__49671_49675);
if(temp__5457__auto___49684){
var seq__49671_49685__$1 = temp__5457__auto___49684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49671_49685__$1)){
var c__42002__auto___49686 = cljs.core.chunk_first.call(null,seq__49671_49685__$1);
var G__49687 = cljs.core.chunk_rest.call(null,seq__49671_49685__$1);
var G__49688 = c__42002__auto___49686;
var G__49689 = cljs.core.count.call(null,c__42002__auto___49686);
var G__49690 = (0);
seq__49671_49675 = G__49687;
chunk__49672_49676 = G__49688;
count__49673_49677 = G__49689;
i__49674_49678 = G__49690;
continue;
} else {
var ns_49691 = cljs.core.first.call(null,seq__49671_49685__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49691);

var G__49692 = cljs.core.next.call(null,seq__49671_49685__$1);
var G__49693 = null;
var G__49694 = (0);
var G__49695 = (0);
seq__49671_49675 = G__49692;
chunk__49672_49676 = G__49693;
count__49673_49677 = G__49694;
i__49674_49678 = G__49695;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41071__auto__ = goog.require__;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49696__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49697__i = 0, G__49697__a = new Array(arguments.length -  0);
while (G__49697__i < G__49697__a.length) {G__49697__a[G__49697__i] = arguments[G__49697__i + 0]; ++G__49697__i;}
  args = new cljs.core.IndexedSeq(G__49697__a,0,null);
} 
return G__49696__delegate.call(this,args);};
G__49696.cljs$lang$maxFixedArity = 0;
G__49696.cljs$lang$applyTo = (function (arglist__49698){
var args = cljs.core.seq(arglist__49698);
return G__49696__delegate(args);
});
G__49696.cljs$core$IFn$_invoke$arity$variadic = G__49696__delegate;
return G__49696;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49699_SHARP_,p2__49700_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49699_SHARP_)].join('')),p2__49700_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49701_SHARP_,p2__49702_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49701_SHARP_)].join(''),p2__49702_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49703 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49703.addCallback(((function (G__49703){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49703))
);

G__49703.addErrback(((function (G__49703){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49703))
);

return G__49703;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49704){if((e49704 instanceof Error)){
var e = e49704;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49704;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49705){if((e49705 instanceof Error)){
var e = e49705;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49705;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49706 = cljs.core._EQ_;
var expr__49707 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49706.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49707))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__49706.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49707))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__49706.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49707))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__49706,expr__49707){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49706,expr__49707))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49709,callback){
var map__49710 = p__49709;
var map__49710__$1 = ((((!((map__49710 == null)))?((((map__49710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49710):map__49710);
var file_msg = map__49710__$1;
var request_url = cljs.core.get.call(null,map__49710__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__41071__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__49710,map__49710__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49710,map__49710__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__){
return (function (state_49748){
var state_val_49749 = (state_49748[(1)]);
if((state_val_49749 === (7))){
var inst_49744 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49750_49776 = state_49748__$1;
(statearr_49750_49776[(2)] = inst_49744);

(statearr_49750_49776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (1))){
var state_49748__$1 = state_49748;
var statearr_49751_49777 = state_49748__$1;
(statearr_49751_49777[(2)] = null);

(statearr_49751_49777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (4))){
var inst_49714 = (state_49748[(7)]);
var inst_49714__$1 = (state_49748[(2)]);
var state_49748__$1 = (function (){var statearr_49752 = state_49748;
(statearr_49752[(7)] = inst_49714__$1);

return statearr_49752;
})();
if(cljs.core.truth_(inst_49714__$1)){
var statearr_49753_49778 = state_49748__$1;
(statearr_49753_49778[(1)] = (5));

} else {
var statearr_49754_49779 = state_49748__$1;
(statearr_49754_49779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (15))){
var inst_49727 = (state_49748[(8)]);
var inst_49729 = (state_49748[(9)]);
var inst_49731 = inst_49729.call(null,inst_49727);
var state_49748__$1 = state_49748;
var statearr_49755_49780 = state_49748__$1;
(statearr_49755_49780[(2)] = inst_49731);

(statearr_49755_49780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (13))){
var inst_49738 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49756_49781 = state_49748__$1;
(statearr_49756_49781[(2)] = inst_49738);

(statearr_49756_49781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (6))){
var state_49748__$1 = state_49748;
var statearr_49757_49782 = state_49748__$1;
(statearr_49757_49782[(2)] = null);

(statearr_49757_49782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (17))){
var inst_49735 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49758_49783 = state_49748__$1;
(statearr_49758_49783[(2)] = inst_49735);

(statearr_49758_49783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (3))){
var inst_49746 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49748__$1,inst_49746);
} else {
if((state_val_49749 === (12))){
var state_49748__$1 = state_49748;
var statearr_49759_49784 = state_49748__$1;
(statearr_49759_49784[(2)] = null);

(statearr_49759_49784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (2))){
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49749 === (11))){
var inst_49719 = (state_49748[(10)]);
var inst_49725 = figwheel.client.file_reloading.blocking_load.call(null,inst_49719);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(14),inst_49725);
} else {
if((state_val_49749 === (9))){
var inst_49719 = (state_49748[(10)]);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49719)){
var statearr_49760_49785 = state_49748__$1;
(statearr_49760_49785[(1)] = (11));

} else {
var statearr_49761_49786 = state_49748__$1;
(statearr_49761_49786[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (5))){
var inst_49714 = (state_49748[(7)]);
var inst_49720 = (state_49748[(11)]);
var inst_49719 = cljs.core.nth.call(null,inst_49714,(0),null);
var inst_49720__$1 = cljs.core.nth.call(null,inst_49714,(1),null);
var state_49748__$1 = (function (){var statearr_49762 = state_49748;
(statearr_49762[(10)] = inst_49719);

(statearr_49762[(11)] = inst_49720__$1);

return statearr_49762;
})();
if(cljs.core.truth_(inst_49720__$1)){
var statearr_49763_49787 = state_49748__$1;
(statearr_49763_49787[(1)] = (8));

} else {
var statearr_49764_49788 = state_49748__$1;
(statearr_49764_49788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (14))){
var inst_49719 = (state_49748[(10)]);
var inst_49729 = (state_49748[(9)]);
var inst_49727 = (state_49748[(2)]);
var inst_49728 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49729__$1 = cljs.core.get.call(null,inst_49728,inst_49719);
var state_49748__$1 = (function (){var statearr_49765 = state_49748;
(statearr_49765[(8)] = inst_49727);

(statearr_49765[(9)] = inst_49729__$1);

return statearr_49765;
})();
if(cljs.core.truth_(inst_49729__$1)){
var statearr_49766_49789 = state_49748__$1;
(statearr_49766_49789[(1)] = (15));

} else {
var statearr_49767_49790 = state_49748__$1;
(statearr_49767_49790[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (16))){
var inst_49727 = (state_49748[(8)]);
var inst_49733 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49727);
var state_49748__$1 = state_49748;
var statearr_49768_49791 = state_49748__$1;
(statearr_49768_49791[(2)] = inst_49733);

(statearr_49768_49791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (10))){
var inst_49740 = (state_49748[(2)]);
var state_49748__$1 = (function (){var statearr_49769 = state_49748;
(statearr_49769[(12)] = inst_49740);

return statearr_49769;
})();
var statearr_49770_49792 = state_49748__$1;
(statearr_49770_49792[(2)] = null);

(statearr_49770_49792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (8))){
var inst_49720 = (state_49748[(11)]);
var inst_49722 = eval(inst_49720);
var state_49748__$1 = state_49748;
var statearr_49771_49793 = state_49748__$1;
(statearr_49771_49793[(2)] = inst_49722);

(statearr_49771_49793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47438__auto__))
;
return ((function (switch__47348__auto__,c__47438__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__47349__auto__ = null;
var figwheel$client$file_reloading$state_machine__47349__auto____0 = (function (){
var statearr_49772 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49772[(0)] = figwheel$client$file_reloading$state_machine__47349__auto__);

(statearr_49772[(1)] = (1));

return statearr_49772;
});
var figwheel$client$file_reloading$state_machine__47349__auto____1 = (function (state_49748){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_49748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e49773){if((e49773 instanceof Object)){
var ex__47352__auto__ = e49773;
var statearr_49774_49794 = state_49748;
(statearr_49774_49794[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49795 = state_49748;
state_49748 = G__49795;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__47349__auto__ = function(state_49748){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__47349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__47349__auto____1.call(this,state_49748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__47349__auto____0;
figwheel$client$file_reloading$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__47349__auto____1;
return figwheel$client$file_reloading$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__))
})();
var state__47440__auto__ = (function (){var statearr_49775 = f__47439__auto__.call(null);
(statearr_49775[(6)] = c__47438__auto__);

return statearr_49775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__))
);

return c__47438__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__49797 = arguments.length;
switch (G__49797) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49799,callback){
var map__49800 = p__49799;
var map__49800__$1 = ((((!((map__49800 == null)))?((((map__49800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49800):map__49800);
var file_msg = map__49800__$1;
var namespace = cljs.core.get.call(null,map__49800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49800,map__49800__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49800,map__49800__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49802){
var map__49803 = p__49802;
var map__49803__$1 = ((((!((map__49803 == null)))?((((map__49803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49803):map__49803);
var file_msg = map__49803__$1;
var namespace = cljs.core.get.call(null,map__49803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49805){
var map__49806 = p__49805;
var map__49806__$1 = ((((!((map__49806 == null)))?((((map__49806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49806):map__49806);
var file_msg = map__49806__$1;
var namespace = cljs.core.get.call(null,map__49806__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41059__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41059__auto__){
var or__41071__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
var or__41071__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41071__auto____$1)){
return or__41071__auto____$1;
} else {
var or__41071__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__41071__auto____$2)){
return or__41071__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__41059__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49808,callback){
var map__49809 = p__49808;
var map__49809__$1 = ((((!((map__49809 == null)))?((((map__49809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49809):map__49809);
var file_msg = map__49809__$1;
var request_url = cljs.core.get.call(null,map__49809__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49809__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__47438__auto___49859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___49859,out){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___49859,out){
return (function (state_49844){
var state_val_49845 = (state_49844[(1)]);
if((state_val_49845 === (1))){
var inst_49818 = cljs.core.seq.call(null,files);
var inst_49819 = cljs.core.first.call(null,inst_49818);
var inst_49820 = cljs.core.next.call(null,inst_49818);
var inst_49821 = files;
var state_49844__$1 = (function (){var statearr_49846 = state_49844;
(statearr_49846[(7)] = inst_49819);

(statearr_49846[(8)] = inst_49821);

(statearr_49846[(9)] = inst_49820);

return statearr_49846;
})();
var statearr_49847_49860 = state_49844__$1;
(statearr_49847_49860[(2)] = null);

(statearr_49847_49860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49845 === (2))){
var inst_49821 = (state_49844[(8)]);
var inst_49827 = (state_49844[(10)]);
var inst_49826 = cljs.core.seq.call(null,inst_49821);
var inst_49827__$1 = cljs.core.first.call(null,inst_49826);
var inst_49828 = cljs.core.next.call(null,inst_49826);
var inst_49829 = (inst_49827__$1 == null);
var inst_49830 = cljs.core.not.call(null,inst_49829);
var state_49844__$1 = (function (){var statearr_49848 = state_49844;
(statearr_49848[(10)] = inst_49827__$1);

(statearr_49848[(11)] = inst_49828);

return statearr_49848;
})();
if(inst_49830){
var statearr_49849_49861 = state_49844__$1;
(statearr_49849_49861[(1)] = (4));

} else {
var statearr_49850_49862 = state_49844__$1;
(statearr_49850_49862[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49845 === (3))){
var inst_49842 = (state_49844[(2)]);
var state_49844__$1 = state_49844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49844__$1,inst_49842);
} else {
if((state_val_49845 === (4))){
var inst_49827 = (state_49844[(10)]);
var inst_49832 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49827);
var state_49844__$1 = state_49844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49844__$1,(7),inst_49832);
} else {
if((state_val_49845 === (5))){
var inst_49838 = cljs.core.async.close_BANG_.call(null,out);
var state_49844__$1 = state_49844;
var statearr_49851_49863 = state_49844__$1;
(statearr_49851_49863[(2)] = inst_49838);

(statearr_49851_49863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49845 === (6))){
var inst_49840 = (state_49844[(2)]);
var state_49844__$1 = state_49844;
var statearr_49852_49864 = state_49844__$1;
(statearr_49852_49864[(2)] = inst_49840);

(statearr_49852_49864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49845 === (7))){
var inst_49828 = (state_49844[(11)]);
var inst_49834 = (state_49844[(2)]);
var inst_49835 = cljs.core.async.put_BANG_.call(null,out,inst_49834);
var inst_49821 = inst_49828;
var state_49844__$1 = (function (){var statearr_49853 = state_49844;
(statearr_49853[(12)] = inst_49835);

(statearr_49853[(8)] = inst_49821);

return statearr_49853;
})();
var statearr_49854_49865 = state_49844__$1;
(statearr_49854_49865[(2)] = null);

(statearr_49854_49865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__47438__auto___49859,out))
;
return ((function (switch__47348__auto__,c__47438__auto___49859,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto____0 = (function (){
var statearr_49855 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49855[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto__);

(statearr_49855[(1)] = (1));

return statearr_49855;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto____1 = (function (state_49844){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_49844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e49856){if((e49856 instanceof Object)){
var ex__47352__auto__ = e49856;
var statearr_49857_49866 = state_49844;
(statearr_49857_49866[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49867 = state_49844;
state_49844 = G__49867;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto__ = function(state_49844){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto____1.call(this,state_49844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___49859,out))
})();
var state__47440__auto__ = (function (){var statearr_49858 = f__47439__auto__.call(null);
(statearr_49858[(6)] = c__47438__auto___49859);

return statearr_49858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___49859,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49868,opts){
var map__49869 = p__49868;
var map__49869__$1 = ((((!((map__49869 == null)))?((((map__49869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49869):map__49869);
var eval_body = cljs.core.get.call(null,map__49869__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41059__auto__ = eval_body;
if(cljs.core.truth_(and__41059__auto__)){
return typeof eval_body === 'string';
} else {
return and__41059__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49871){var e = e49871;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49872_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49872_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49873){
var vec__49874 = p__49873;
var k = cljs.core.nth.call(null,vec__49874,(0),null);
var v = cljs.core.nth.call(null,vec__49874,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49877){
var vec__49878 = p__49877;
var k = cljs.core.nth.call(null,vec__49878,(0),null);
var v = cljs.core.nth.call(null,vec__49878,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49884,p__49885){
var map__49886 = p__49884;
var map__49886__$1 = ((((!((map__49886 == null)))?((((map__49886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49886):map__49886);
var opts = map__49886__$1;
var before_jsload = cljs.core.get.call(null,map__49886__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49886__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49886__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49887 = p__49885;
var map__49887__$1 = ((((!((map__49887 == null)))?((((map__49887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49887):map__49887);
var msg = map__49887__$1;
var files = cljs.core.get.call(null,map__49887__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49887__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49887__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50041){
var state_val_50042 = (state_50041[(1)]);
if((state_val_50042 === (7))){
var inst_49901 = (state_50041[(7)]);
var inst_49903 = (state_50041[(8)]);
var inst_49902 = (state_50041[(9)]);
var inst_49904 = (state_50041[(10)]);
var inst_49909 = cljs.core._nth.call(null,inst_49902,inst_49904);
var inst_49910 = figwheel.client.file_reloading.eval_body.call(null,inst_49909,opts);
var inst_49911 = (inst_49904 + (1));
var tmp50043 = inst_49901;
var tmp50044 = inst_49903;
var tmp50045 = inst_49902;
var inst_49901__$1 = tmp50043;
var inst_49902__$1 = tmp50045;
var inst_49903__$1 = tmp50044;
var inst_49904__$1 = inst_49911;
var state_50041__$1 = (function (){var statearr_50046 = state_50041;
(statearr_50046[(11)] = inst_49910);

(statearr_50046[(7)] = inst_49901__$1);

(statearr_50046[(8)] = inst_49903__$1);

(statearr_50046[(9)] = inst_49902__$1);

(statearr_50046[(10)] = inst_49904__$1);

return statearr_50046;
})();
var statearr_50047_50130 = state_50041__$1;
(statearr_50047_50130[(2)] = null);

(statearr_50047_50130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (20))){
var inst_49944 = (state_50041[(12)]);
var inst_49952 = figwheel.client.file_reloading.sort_files.call(null,inst_49944);
var state_50041__$1 = state_50041;
var statearr_50048_50131 = state_50041__$1;
(statearr_50048_50131[(2)] = inst_49952);

(statearr_50048_50131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (27))){
var state_50041__$1 = state_50041;
var statearr_50049_50132 = state_50041__$1;
(statearr_50049_50132[(2)] = null);

(statearr_50049_50132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (1))){
var inst_49893 = (state_50041[(13)]);
var inst_49890 = before_jsload.call(null,files);
var inst_49891 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49892 = (function (){return ((function (inst_49893,inst_49890,inst_49891,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49881_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49881_SHARP_);
});
;})(inst_49893,inst_49890,inst_49891,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49893__$1 = cljs.core.filter.call(null,inst_49892,files);
var inst_49894 = cljs.core.not_empty.call(null,inst_49893__$1);
var state_50041__$1 = (function (){var statearr_50050 = state_50041;
(statearr_50050[(13)] = inst_49893__$1);

(statearr_50050[(14)] = inst_49891);

(statearr_50050[(15)] = inst_49890);

return statearr_50050;
})();
if(cljs.core.truth_(inst_49894)){
var statearr_50051_50133 = state_50041__$1;
(statearr_50051_50133[(1)] = (2));

} else {
var statearr_50052_50134 = state_50041__$1;
(statearr_50052_50134[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (24))){
var state_50041__$1 = state_50041;
var statearr_50053_50135 = state_50041__$1;
(statearr_50053_50135[(2)] = null);

(statearr_50053_50135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (39))){
var inst_49994 = (state_50041[(16)]);
var state_50041__$1 = state_50041;
var statearr_50054_50136 = state_50041__$1;
(statearr_50054_50136[(2)] = inst_49994);

(statearr_50054_50136[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (46))){
var inst_50036 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
var statearr_50055_50137 = state_50041__$1;
(statearr_50055_50137[(2)] = inst_50036);

(statearr_50055_50137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (4))){
var inst_49938 = (state_50041[(2)]);
var inst_49939 = cljs.core.List.EMPTY;
var inst_49940 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49939);
var inst_49941 = (function (){return ((function (inst_49938,inst_49939,inst_49940,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49882_SHARP_){
var and__41059__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49882_SHARP_);
if(cljs.core.truth_(and__41059__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49882_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49882_SHARP_)));
} else {
return and__41059__auto__;
}
});
;})(inst_49938,inst_49939,inst_49940,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49942 = cljs.core.filter.call(null,inst_49941,files);
var inst_49943 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49944 = cljs.core.concat.call(null,inst_49942,inst_49943);
var state_50041__$1 = (function (){var statearr_50056 = state_50041;
(statearr_50056[(17)] = inst_49938);

(statearr_50056[(18)] = inst_49940);

(statearr_50056[(12)] = inst_49944);

return statearr_50056;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50057_50138 = state_50041__$1;
(statearr_50057_50138[(1)] = (16));

} else {
var statearr_50058_50139 = state_50041__$1;
(statearr_50058_50139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (15))){
var inst_49928 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
var statearr_50059_50140 = state_50041__$1;
(statearr_50059_50140[(2)] = inst_49928);

(statearr_50059_50140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (21))){
var inst_49954 = (state_50041[(19)]);
var inst_49954__$1 = (state_50041[(2)]);
var inst_49955 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49954__$1);
var state_50041__$1 = (function (){var statearr_50060 = state_50041;
(statearr_50060[(19)] = inst_49954__$1);

return statearr_50060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50041__$1,(22),inst_49955);
} else {
if((state_val_50042 === (31))){
var inst_50039 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50041__$1,inst_50039);
} else {
if((state_val_50042 === (32))){
var inst_49994 = (state_50041[(16)]);
var inst_49999 = inst_49994.cljs$lang$protocol_mask$partition0$;
var inst_50000 = (inst_49999 & (64));
var inst_50001 = inst_49994.cljs$core$ISeq$;
var inst_50002 = (cljs.core.PROTOCOL_SENTINEL === inst_50001);
var inst_50003 = (inst_50000) || (inst_50002);
var state_50041__$1 = state_50041;
if(cljs.core.truth_(inst_50003)){
var statearr_50061_50141 = state_50041__$1;
(statearr_50061_50141[(1)] = (35));

} else {
var statearr_50062_50142 = state_50041__$1;
(statearr_50062_50142[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (40))){
var inst_50016 = (state_50041[(20)]);
var inst_50015 = (state_50041[(2)]);
var inst_50016__$1 = cljs.core.get.call(null,inst_50015,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50017 = cljs.core.get.call(null,inst_50015,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50018 = cljs.core.not_empty.call(null,inst_50016__$1);
var state_50041__$1 = (function (){var statearr_50063 = state_50041;
(statearr_50063[(20)] = inst_50016__$1);

(statearr_50063[(21)] = inst_50017);

return statearr_50063;
})();
if(cljs.core.truth_(inst_50018)){
var statearr_50064_50143 = state_50041__$1;
(statearr_50064_50143[(1)] = (41));

} else {
var statearr_50065_50144 = state_50041__$1;
(statearr_50065_50144[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (33))){
var state_50041__$1 = state_50041;
var statearr_50066_50145 = state_50041__$1;
(statearr_50066_50145[(2)] = false);

(statearr_50066_50145[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (13))){
var inst_49914 = (state_50041[(22)]);
var inst_49918 = cljs.core.chunk_first.call(null,inst_49914);
var inst_49919 = cljs.core.chunk_rest.call(null,inst_49914);
var inst_49920 = cljs.core.count.call(null,inst_49918);
var inst_49901 = inst_49919;
var inst_49902 = inst_49918;
var inst_49903 = inst_49920;
var inst_49904 = (0);
var state_50041__$1 = (function (){var statearr_50067 = state_50041;
(statearr_50067[(7)] = inst_49901);

(statearr_50067[(8)] = inst_49903);

(statearr_50067[(9)] = inst_49902);

(statearr_50067[(10)] = inst_49904);

return statearr_50067;
})();
var statearr_50068_50146 = state_50041__$1;
(statearr_50068_50146[(2)] = null);

(statearr_50068_50146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (22))){
var inst_49954 = (state_50041[(19)]);
var inst_49962 = (state_50041[(23)]);
var inst_49958 = (state_50041[(24)]);
var inst_49957 = (state_50041[(25)]);
var inst_49957__$1 = (state_50041[(2)]);
var inst_49958__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49957__$1);
var inst_49959 = (function (){var all_files = inst_49954;
var res_SINGLEQUOTE_ = inst_49957__$1;
var res = inst_49958__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49954,inst_49962,inst_49958,inst_49957,inst_49957__$1,inst_49958__$1,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49883_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49883_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49954,inst_49962,inst_49958,inst_49957,inst_49957__$1,inst_49958__$1,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49960 = cljs.core.filter.call(null,inst_49959,inst_49957__$1);
var inst_49961 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49962__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49961);
var inst_49963 = cljs.core.not_empty.call(null,inst_49962__$1);
var state_50041__$1 = (function (){var statearr_50069 = state_50041;
(statearr_50069[(23)] = inst_49962__$1);

(statearr_50069[(26)] = inst_49960);

(statearr_50069[(24)] = inst_49958__$1);

(statearr_50069[(25)] = inst_49957__$1);

return statearr_50069;
})();
if(cljs.core.truth_(inst_49963)){
var statearr_50070_50147 = state_50041__$1;
(statearr_50070_50147[(1)] = (23));

} else {
var statearr_50071_50148 = state_50041__$1;
(statearr_50071_50148[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (36))){
var state_50041__$1 = state_50041;
var statearr_50072_50149 = state_50041__$1;
(statearr_50072_50149[(2)] = false);

(statearr_50072_50149[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (41))){
var inst_50016 = (state_50041[(20)]);
var inst_50020 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50021 = cljs.core.map.call(null,inst_50020,inst_50016);
var inst_50022 = cljs.core.pr_str.call(null,inst_50021);
var inst_50023 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50022)].join('');
var inst_50024 = figwheel.client.utils.log.call(null,inst_50023);
var state_50041__$1 = state_50041;
var statearr_50073_50150 = state_50041__$1;
(statearr_50073_50150[(2)] = inst_50024);

(statearr_50073_50150[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (43))){
var inst_50017 = (state_50041[(21)]);
var inst_50027 = (state_50041[(2)]);
var inst_50028 = cljs.core.not_empty.call(null,inst_50017);
var state_50041__$1 = (function (){var statearr_50074 = state_50041;
(statearr_50074[(27)] = inst_50027);

return statearr_50074;
})();
if(cljs.core.truth_(inst_50028)){
var statearr_50075_50151 = state_50041__$1;
(statearr_50075_50151[(1)] = (44));

} else {
var statearr_50076_50152 = state_50041__$1;
(statearr_50076_50152[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (29))){
var inst_49954 = (state_50041[(19)]);
var inst_49962 = (state_50041[(23)]);
var inst_49960 = (state_50041[(26)]);
var inst_49958 = (state_50041[(24)]);
var inst_49957 = (state_50041[(25)]);
var inst_49994 = (state_50041[(16)]);
var inst_49990 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49993 = (function (){var all_files = inst_49954;
var res_SINGLEQUOTE_ = inst_49957;
var res = inst_49958;
var files_not_loaded = inst_49960;
var dependencies_that_loaded = inst_49962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49954,inst_49962,inst_49960,inst_49958,inst_49957,inst_49994,inst_49990,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49992){
var map__50077 = p__49992;
var map__50077__$1 = ((((!((map__50077 == null)))?((((map__50077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50077):map__50077);
var namespace = cljs.core.get.call(null,map__50077__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49954,inst_49962,inst_49960,inst_49958,inst_49957,inst_49994,inst_49990,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49994__$1 = cljs.core.group_by.call(null,inst_49993,inst_49960);
var inst_49996 = (inst_49994__$1 == null);
var inst_49997 = cljs.core.not.call(null,inst_49996);
var state_50041__$1 = (function (){var statearr_50079 = state_50041;
(statearr_50079[(28)] = inst_49990);

(statearr_50079[(16)] = inst_49994__$1);

return statearr_50079;
})();
if(inst_49997){
var statearr_50080_50153 = state_50041__$1;
(statearr_50080_50153[(1)] = (32));

} else {
var statearr_50081_50154 = state_50041__$1;
(statearr_50081_50154[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (44))){
var inst_50017 = (state_50041[(21)]);
var inst_50030 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50017);
var inst_50031 = cljs.core.pr_str.call(null,inst_50030);
var inst_50032 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50031)].join('');
var inst_50033 = figwheel.client.utils.log.call(null,inst_50032);
var state_50041__$1 = state_50041;
var statearr_50082_50155 = state_50041__$1;
(statearr_50082_50155[(2)] = inst_50033);

(statearr_50082_50155[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (6))){
var inst_49935 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
var statearr_50083_50156 = state_50041__$1;
(statearr_50083_50156[(2)] = inst_49935);

(statearr_50083_50156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (28))){
var inst_49960 = (state_50041[(26)]);
var inst_49987 = (state_50041[(2)]);
var inst_49988 = cljs.core.not_empty.call(null,inst_49960);
var state_50041__$1 = (function (){var statearr_50084 = state_50041;
(statearr_50084[(29)] = inst_49987);

return statearr_50084;
})();
if(cljs.core.truth_(inst_49988)){
var statearr_50085_50157 = state_50041__$1;
(statearr_50085_50157[(1)] = (29));

} else {
var statearr_50086_50158 = state_50041__$1;
(statearr_50086_50158[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (25))){
var inst_49958 = (state_50041[(24)]);
var inst_49974 = (state_50041[(2)]);
var inst_49975 = cljs.core.not_empty.call(null,inst_49958);
var state_50041__$1 = (function (){var statearr_50087 = state_50041;
(statearr_50087[(30)] = inst_49974);

return statearr_50087;
})();
if(cljs.core.truth_(inst_49975)){
var statearr_50088_50159 = state_50041__$1;
(statearr_50088_50159[(1)] = (26));

} else {
var statearr_50089_50160 = state_50041__$1;
(statearr_50089_50160[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (34))){
var inst_50010 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
if(cljs.core.truth_(inst_50010)){
var statearr_50090_50161 = state_50041__$1;
(statearr_50090_50161[(1)] = (38));

} else {
var statearr_50091_50162 = state_50041__$1;
(statearr_50091_50162[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (17))){
var state_50041__$1 = state_50041;
var statearr_50092_50163 = state_50041__$1;
(statearr_50092_50163[(2)] = recompile_dependents);

(statearr_50092_50163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (3))){
var state_50041__$1 = state_50041;
var statearr_50093_50164 = state_50041__$1;
(statearr_50093_50164[(2)] = null);

(statearr_50093_50164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (12))){
var inst_49931 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
var statearr_50094_50165 = state_50041__$1;
(statearr_50094_50165[(2)] = inst_49931);

(statearr_50094_50165[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (2))){
var inst_49893 = (state_50041[(13)]);
var inst_49900 = cljs.core.seq.call(null,inst_49893);
var inst_49901 = inst_49900;
var inst_49902 = null;
var inst_49903 = (0);
var inst_49904 = (0);
var state_50041__$1 = (function (){var statearr_50095 = state_50041;
(statearr_50095[(7)] = inst_49901);

(statearr_50095[(8)] = inst_49903);

(statearr_50095[(9)] = inst_49902);

(statearr_50095[(10)] = inst_49904);

return statearr_50095;
})();
var statearr_50096_50166 = state_50041__$1;
(statearr_50096_50166[(2)] = null);

(statearr_50096_50166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (23))){
var inst_49954 = (state_50041[(19)]);
var inst_49962 = (state_50041[(23)]);
var inst_49960 = (state_50041[(26)]);
var inst_49958 = (state_50041[(24)]);
var inst_49957 = (state_50041[(25)]);
var inst_49965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49967 = (function (){var all_files = inst_49954;
var res_SINGLEQUOTE_ = inst_49957;
var res = inst_49958;
var files_not_loaded = inst_49960;
var dependencies_that_loaded = inst_49962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49954,inst_49962,inst_49960,inst_49958,inst_49957,inst_49965,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49966){
var map__50097 = p__49966;
var map__50097__$1 = ((((!((map__50097 == null)))?((((map__50097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50097):map__50097);
var request_url = cljs.core.get.call(null,map__50097__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49954,inst_49962,inst_49960,inst_49958,inst_49957,inst_49965,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49968 = cljs.core.reverse.call(null,inst_49962);
var inst_49969 = cljs.core.map.call(null,inst_49967,inst_49968);
var inst_49970 = cljs.core.pr_str.call(null,inst_49969);
var inst_49971 = figwheel.client.utils.log.call(null,inst_49970);
var state_50041__$1 = (function (){var statearr_50099 = state_50041;
(statearr_50099[(31)] = inst_49965);

return statearr_50099;
})();
var statearr_50100_50167 = state_50041__$1;
(statearr_50100_50167[(2)] = inst_49971);

(statearr_50100_50167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (35))){
var state_50041__$1 = state_50041;
var statearr_50101_50168 = state_50041__$1;
(statearr_50101_50168[(2)] = true);

(statearr_50101_50168[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (19))){
var inst_49944 = (state_50041[(12)]);
var inst_49950 = figwheel.client.file_reloading.expand_files.call(null,inst_49944);
var state_50041__$1 = state_50041;
var statearr_50102_50169 = state_50041__$1;
(statearr_50102_50169[(2)] = inst_49950);

(statearr_50102_50169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (11))){
var state_50041__$1 = state_50041;
var statearr_50103_50170 = state_50041__$1;
(statearr_50103_50170[(2)] = null);

(statearr_50103_50170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (9))){
var inst_49933 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
var statearr_50104_50171 = state_50041__$1;
(statearr_50104_50171[(2)] = inst_49933);

(statearr_50104_50171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (5))){
var inst_49903 = (state_50041[(8)]);
var inst_49904 = (state_50041[(10)]);
var inst_49906 = (inst_49904 < inst_49903);
var inst_49907 = inst_49906;
var state_50041__$1 = state_50041;
if(cljs.core.truth_(inst_49907)){
var statearr_50105_50172 = state_50041__$1;
(statearr_50105_50172[(1)] = (7));

} else {
var statearr_50106_50173 = state_50041__$1;
(statearr_50106_50173[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (14))){
var inst_49914 = (state_50041[(22)]);
var inst_49923 = cljs.core.first.call(null,inst_49914);
var inst_49924 = figwheel.client.file_reloading.eval_body.call(null,inst_49923,opts);
var inst_49925 = cljs.core.next.call(null,inst_49914);
var inst_49901 = inst_49925;
var inst_49902 = null;
var inst_49903 = (0);
var inst_49904 = (0);
var state_50041__$1 = (function (){var statearr_50107 = state_50041;
(statearr_50107[(7)] = inst_49901);

(statearr_50107[(8)] = inst_49903);

(statearr_50107[(9)] = inst_49902);

(statearr_50107[(32)] = inst_49924);

(statearr_50107[(10)] = inst_49904);

return statearr_50107;
})();
var statearr_50108_50174 = state_50041__$1;
(statearr_50108_50174[(2)] = null);

(statearr_50108_50174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (45))){
var state_50041__$1 = state_50041;
var statearr_50109_50175 = state_50041__$1;
(statearr_50109_50175[(2)] = null);

(statearr_50109_50175[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (26))){
var inst_49954 = (state_50041[(19)]);
var inst_49962 = (state_50041[(23)]);
var inst_49960 = (state_50041[(26)]);
var inst_49958 = (state_50041[(24)]);
var inst_49957 = (state_50041[(25)]);
var inst_49977 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49979 = (function (){var all_files = inst_49954;
var res_SINGLEQUOTE_ = inst_49957;
var res = inst_49958;
var files_not_loaded = inst_49960;
var dependencies_that_loaded = inst_49962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49954,inst_49962,inst_49960,inst_49958,inst_49957,inst_49977,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49978){
var map__50110 = p__49978;
var map__50110__$1 = ((((!((map__50110 == null)))?((((map__50110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50110):map__50110);
var namespace = cljs.core.get.call(null,map__50110__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49954,inst_49962,inst_49960,inst_49958,inst_49957,inst_49977,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49980 = cljs.core.map.call(null,inst_49979,inst_49958);
var inst_49981 = cljs.core.pr_str.call(null,inst_49980);
var inst_49982 = figwheel.client.utils.log.call(null,inst_49981);
var inst_49983 = (function (){var all_files = inst_49954;
var res_SINGLEQUOTE_ = inst_49957;
var res = inst_49958;
var files_not_loaded = inst_49960;
var dependencies_that_loaded = inst_49962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49954,inst_49962,inst_49960,inst_49958,inst_49957,inst_49977,inst_49979,inst_49980,inst_49981,inst_49982,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49954,inst_49962,inst_49960,inst_49958,inst_49957,inst_49977,inst_49979,inst_49980,inst_49981,inst_49982,state_val_50042,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49984 = setTimeout(inst_49983,(10));
var state_50041__$1 = (function (){var statearr_50112 = state_50041;
(statearr_50112[(33)] = inst_49977);

(statearr_50112[(34)] = inst_49982);

return statearr_50112;
})();
var statearr_50113_50176 = state_50041__$1;
(statearr_50113_50176[(2)] = inst_49984);

(statearr_50113_50176[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (16))){
var state_50041__$1 = state_50041;
var statearr_50114_50177 = state_50041__$1;
(statearr_50114_50177[(2)] = reload_dependents);

(statearr_50114_50177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (38))){
var inst_49994 = (state_50041[(16)]);
var inst_50012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49994);
var state_50041__$1 = state_50041;
var statearr_50115_50178 = state_50041__$1;
(statearr_50115_50178[(2)] = inst_50012);

(statearr_50115_50178[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (30))){
var state_50041__$1 = state_50041;
var statearr_50116_50179 = state_50041__$1;
(statearr_50116_50179[(2)] = null);

(statearr_50116_50179[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (10))){
var inst_49914 = (state_50041[(22)]);
var inst_49916 = cljs.core.chunked_seq_QMARK_.call(null,inst_49914);
var state_50041__$1 = state_50041;
if(inst_49916){
var statearr_50117_50180 = state_50041__$1;
(statearr_50117_50180[(1)] = (13));

} else {
var statearr_50118_50181 = state_50041__$1;
(statearr_50118_50181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (18))){
var inst_49948 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
if(cljs.core.truth_(inst_49948)){
var statearr_50119_50182 = state_50041__$1;
(statearr_50119_50182[(1)] = (19));

} else {
var statearr_50120_50183 = state_50041__$1;
(statearr_50120_50183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (42))){
var state_50041__$1 = state_50041;
var statearr_50121_50184 = state_50041__$1;
(statearr_50121_50184[(2)] = null);

(statearr_50121_50184[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (37))){
var inst_50007 = (state_50041[(2)]);
var state_50041__$1 = state_50041;
var statearr_50122_50185 = state_50041__$1;
(statearr_50122_50185[(2)] = inst_50007);

(statearr_50122_50185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50042 === (8))){
var inst_49914 = (state_50041[(22)]);
var inst_49901 = (state_50041[(7)]);
var inst_49914__$1 = cljs.core.seq.call(null,inst_49901);
var state_50041__$1 = (function (){var statearr_50123 = state_50041;
(statearr_50123[(22)] = inst_49914__$1);

return statearr_50123;
})();
if(inst_49914__$1){
var statearr_50124_50186 = state_50041__$1;
(statearr_50124_50186[(1)] = (10));

} else {
var statearr_50125_50187 = state_50041__$1;
(statearr_50125_50187[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__47348__auto__,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto____0 = (function (){
var statearr_50126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50126[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto__);

(statearr_50126[(1)] = (1));

return statearr_50126;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto____1 = (function (state_50041){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_50041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e50127){if((e50127 instanceof Object)){
var ex__47352__auto__ = e50127;
var statearr_50128_50188 = state_50041;
(statearr_50128_50188[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50189 = state_50041;
state_50041 = G__50189;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto__ = function(state_50041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto____1.call(this,state_50041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__47440__auto__ = (function (){var statearr_50129 = f__47439__auto__.call(null);
(statearr_50129[(6)] = c__47438__auto__);

return statearr_50129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__,map__49886,map__49886__$1,opts,before_jsload,on_jsload,reload_dependents,map__49887,map__49887__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47438__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50192,link){
var map__50193 = p__50192;
var map__50193__$1 = ((((!((map__50193 == null)))?((((map__50193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50193):map__50193);
var file = cljs.core.get.call(null,map__50193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__50193,map__50193__$1,file){
return (function (p1__50190_SHARP_,p2__50191_SHARP_){
if(cljs.core._EQ_.call(null,p1__50190_SHARP_,p2__50191_SHARP_)){
return p1__50190_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__50193,map__50193__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50196){
var map__50197 = p__50196;
var map__50197__$1 = ((((!((map__50197 == null)))?((((map__50197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50197):map__50197);
var match_length = cljs.core.get.call(null,map__50197__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50197__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50195_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50195_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50199_SHARP_,p2__50200_SHARP_){
return cljs.core.assoc.call(null,p1__50199_SHARP_,cljs.core.get.call(null,p2__50200_SHARP_,key),p2__50200_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50201 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50201);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50201);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50202,p__50203){
var map__50204 = p__50202;
var map__50204__$1 = ((((!((map__50204 == null)))?((((map__50204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50204):map__50204);
var on_cssload = cljs.core.get.call(null,map__50204__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50205 = p__50203;
var map__50205__$1 = ((((!((map__50205 == null)))?((((map__50205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50205):map__50205);
var files_msg = map__50205__$1;
var files = cljs.core.get.call(null,map__50205__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1524597521751
