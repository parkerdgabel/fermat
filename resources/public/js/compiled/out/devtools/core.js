// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.hints');
goog.require('devtools.defaults');
goog.require('devtools.formatters');
goog.require('devtools.async');
goog.require('devtools.toolbox');
goog.require('devtools.context');
goog.require('devtools.util');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__46079 = feature;
var G__46079__$1 = (((G__46079 instanceof cljs.core.Keyword))?G__46079.fqn:null);
switch (G__46079__$1) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46079__$1)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var G__46082 = arguments.length;
switch (G__46082) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,cljs.core.deref.call(null,devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__46084 = feature;
var G__46084__$1 = (((G__46084 instanceof cljs.core.Keyword))?G__46084.fqn:null);
switch (G__46084__$1) {
case "formatters":
return devtools.formatters.installed_QMARK_.call(null);

break;
case "hints":
return devtools.hints.installed_QMARK_.call(null);

break;
case "async":
return devtools.async.installed_QMARK_.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46084__$1)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var G__46087 = arguments.length;
switch (G__46087) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,cljs.core.deref.call(null,devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var G__46090 = arguments.length;
switch (G__46090) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
if(cljs.core.truth_(devtools.util.under_advanced_build_QMARK_.call(null))){
return devtools.util.display_advanced_build_warning_if_needed_BANG_.call(null);
} else {
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,cljs.core.deref.call(null,devtools.defaults.feature_groups));
devtools.util.display_banner_if_needed_BANG_.call(null,features,cljs.core.deref.call(null,devtools.defaults.feature_groups));

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
}
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_.call(null);

devtools.hints.uninstall_BANG_.call(null);

return devtools.async.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return devtools.context.get_console.call(null).warn(["devtools.core/enable! was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> remove the call"].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return devtools.context.get_console.call(null).warn(["devtools.core/disable! was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> remove the call"].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return devtools.context.get_console.call(null).warn(["devtools.core/set-single-feature! was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/enable-single-feature! was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/disable-single-feature! was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__42357__auto__ = [];
var len__42350__auto___46093 = arguments.length;
var i__42351__auto___46094 = (0);
while(true){
if((i__42351__auto___46094 < len__42350__auto___46093)){
args__42357__auto__.push((arguments[i__42351__auto___46094]));

var G__46095 = (i__42351__auto___46094 + (1));
i__42351__auto___46094 = G__46095;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/enable-feature! was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq46092){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46092));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__42357__auto__ = [];
var len__42350__auto___46097 = arguments.length;
var i__42351__auto___46098 = (0);
while(true){
if((i__42351__auto___46098 < len__42350__auto___46097)){
args__42357__auto__.push((arguments[i__42351__auto___46098]));

var G__46099 = (i__42351__auto___46098 + (1));
i__42351__auto___46098 = G__46099;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/disable-feature! was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq46096){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46096));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/single-feature-available? was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> use devtools.core/is-feature-available? instead"].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__42357__auto__ = [];
var len__42350__auto___46101 = arguments.length;
var i__42351__auto___46102 = (0);
while(true){
if((i__42351__auto___46102 < len__42350__auto___46101)){
args__42357__auto__.push((arguments[i__42351__auto___46102]));

var G__46103 = (i__42351__auto___46102 + (1));
i__42351__auto___46102 = G__46103;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/feature-available? was removed ","and has no effect in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null))," ","=> use devtools.core/is-feature-available? instead"].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq46100){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46100));
});


//# sourceMappingURL=core.js.map?rel=1524597519135
