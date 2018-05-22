// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e51294){if((e51294 instanceof Error)){
var e = e51294;
return "Error: Unable to stringify";
} else {
throw e51294;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51297 = arguments.length;
switch (G__51297) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__51295_SHARP_){
if(typeof p1__51295_SHARP_ === 'string'){
return p1__51295_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__51295_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__42357__auto__ = [];
var len__42350__auto___51300 = arguments.length;
var i__42351__auto___51301 = (0);
while(true){
if((i__42351__auto___51301 < len__42350__auto___51300)){
args__42357__auto__.push((arguments[i__42351__auto___51301]));

var G__51302 = (i__42351__auto___51301 + (1));
i__42351__auto___51301 = G__51302;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51299){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51299));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42357__auto__ = [];
var len__42350__auto___51304 = arguments.length;
var i__42351__auto___51305 = (0);
while(true){
if((i__42351__auto___51305 < len__42350__auto___51304)){
args__42357__auto__.push((arguments[i__42351__auto___51305]));

var G__51306 = (i__42351__auto___51305 + (1));
i__42351__auto___51305 = G__51306;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51303){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51303));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51307){
var map__51308 = p__51307;
var map__51308__$1 = ((((!((map__51308 == null)))?((((map__51308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51308):map__51308);
var message = cljs.core.get.call(null,map__51308__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51308__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__41071__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__41059__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__41059__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__41059__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__47438__auto___51387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___51387,ch){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___51387,ch){
return (function (state_51359){
var state_val_51360 = (state_51359[(1)]);
if((state_val_51360 === (7))){
var inst_51355 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51361_51388 = state_51359__$1;
(statearr_51361_51388[(2)] = inst_51355);

(statearr_51361_51388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (1))){
var state_51359__$1 = state_51359;
var statearr_51362_51389 = state_51359__$1;
(statearr_51362_51389[(2)] = null);

(statearr_51362_51389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (4))){
var inst_51312 = (state_51359[(7)]);
var inst_51312__$1 = (state_51359[(2)]);
var state_51359__$1 = (function (){var statearr_51363 = state_51359;
(statearr_51363[(7)] = inst_51312__$1);

return statearr_51363;
})();
if(cljs.core.truth_(inst_51312__$1)){
var statearr_51364_51390 = state_51359__$1;
(statearr_51364_51390[(1)] = (5));

} else {
var statearr_51365_51391 = state_51359__$1;
(statearr_51365_51391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (15))){
var inst_51319 = (state_51359[(8)]);
var inst_51334 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51319);
var inst_51335 = cljs.core.first.call(null,inst_51334);
var inst_51336 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51335);
var inst_51337 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51336)].join('');
var inst_51338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51337);
var state_51359__$1 = state_51359;
var statearr_51366_51392 = state_51359__$1;
(statearr_51366_51392[(2)] = inst_51338);

(statearr_51366_51392[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (13))){
var inst_51343 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51367_51393 = state_51359__$1;
(statearr_51367_51393[(2)] = inst_51343);

(statearr_51367_51393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (6))){
var state_51359__$1 = state_51359;
var statearr_51368_51394 = state_51359__$1;
(statearr_51368_51394[(2)] = null);

(statearr_51368_51394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (17))){
var inst_51341 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51369_51395 = state_51359__$1;
(statearr_51369_51395[(2)] = inst_51341);

(statearr_51369_51395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (3))){
var inst_51357 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51359__$1,inst_51357);
} else {
if((state_val_51360 === (12))){
var inst_51318 = (state_51359[(9)]);
var inst_51332 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51318,opts);
var state_51359__$1 = state_51359;
if(cljs.core.truth_(inst_51332)){
var statearr_51370_51396 = state_51359__$1;
(statearr_51370_51396[(1)] = (15));

} else {
var statearr_51371_51397 = state_51359__$1;
(statearr_51371_51397[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (2))){
var state_51359__$1 = state_51359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51359__$1,(4),ch);
} else {
if((state_val_51360 === (11))){
var inst_51319 = (state_51359[(8)]);
var inst_51324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51325 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51319);
var inst_51326 = cljs.core.async.timeout.call(null,(1000));
var inst_51327 = [inst_51325,inst_51326];
var inst_51328 = (new cljs.core.PersistentVector(null,2,(5),inst_51324,inst_51327,null));
var state_51359__$1 = state_51359;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51359__$1,(14),inst_51328);
} else {
if((state_val_51360 === (9))){
var inst_51319 = (state_51359[(8)]);
var inst_51345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51346 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51319);
var inst_51347 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51346);
var inst_51348 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51347)].join('');
var inst_51349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51348);
var state_51359__$1 = (function (){var statearr_51372 = state_51359;
(statearr_51372[(10)] = inst_51345);

return statearr_51372;
})();
var statearr_51373_51398 = state_51359__$1;
(statearr_51373_51398[(2)] = inst_51349);

(statearr_51373_51398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (5))){
var inst_51312 = (state_51359[(7)]);
var inst_51314 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51315 = (new cljs.core.PersistentArrayMap(null,2,inst_51314,null));
var inst_51316 = (new cljs.core.PersistentHashSet(null,inst_51315,null));
var inst_51317 = figwheel.client.focus_msgs.call(null,inst_51316,inst_51312);
var inst_51318 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51317);
var inst_51319 = cljs.core.first.call(null,inst_51317);
var inst_51320 = figwheel.client.autoload_QMARK_.call(null);
var state_51359__$1 = (function (){var statearr_51374 = state_51359;
(statearr_51374[(9)] = inst_51318);

(statearr_51374[(8)] = inst_51319);

return statearr_51374;
})();
if(cljs.core.truth_(inst_51320)){
var statearr_51375_51399 = state_51359__$1;
(statearr_51375_51399[(1)] = (8));

} else {
var statearr_51376_51400 = state_51359__$1;
(statearr_51376_51400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (14))){
var inst_51330 = (state_51359[(2)]);
var state_51359__$1 = state_51359;
var statearr_51377_51401 = state_51359__$1;
(statearr_51377_51401[(2)] = inst_51330);

(statearr_51377_51401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (16))){
var state_51359__$1 = state_51359;
var statearr_51378_51402 = state_51359__$1;
(statearr_51378_51402[(2)] = null);

(statearr_51378_51402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (10))){
var inst_51351 = (state_51359[(2)]);
var state_51359__$1 = (function (){var statearr_51379 = state_51359;
(statearr_51379[(11)] = inst_51351);

return statearr_51379;
})();
var statearr_51380_51403 = state_51359__$1;
(statearr_51380_51403[(2)] = null);

(statearr_51380_51403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51360 === (8))){
var inst_51318 = (state_51359[(9)]);
var inst_51322 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51318,opts);
var state_51359__$1 = state_51359;
if(cljs.core.truth_(inst_51322)){
var statearr_51381_51404 = state_51359__$1;
(statearr_51381_51404[(1)] = (11));

} else {
var statearr_51382_51405 = state_51359__$1;
(statearr_51382_51405[(1)] = (12));

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
});})(c__47438__auto___51387,ch))
;
return ((function (switch__47348__auto__,c__47438__auto___51387,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__47349__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__47349__auto____0 = (function (){
var statearr_51383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51383[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__47349__auto__);

(statearr_51383[(1)] = (1));

return statearr_51383;
});
var figwheel$client$file_reloader_plugin_$_state_machine__47349__auto____1 = (function (state_51359){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_51359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e51384){if((e51384 instanceof Object)){
var ex__47352__auto__ = e51384;
var statearr_51385_51406 = state_51359;
(statearr_51385_51406[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51407 = state_51359;
state_51359 = G__51407;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__47349__auto__ = function(state_51359){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__47349__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__47349__auto____1.call(this,state_51359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__47349__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__47349__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___51387,ch))
})();
var state__47440__auto__ = (function (){var statearr_51386 = f__47439__auto__.call(null);
(statearr_51386[(6)] = c__47438__auto___51387);

return statearr_51386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___51387,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51408_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51408_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51412 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51412){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51410 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51411 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51410,_STAR_print_fn_STAR_51411,sb,base_path_51412){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_51410,_STAR_print_fn_STAR_51411,sb,base_path_51412))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51411;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51410;
}}catch (e51409){if((e51409 instanceof Error)){
var e = e51409;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51412], null));
} else {
var e = e51409;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_51412))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51413){
var map__51414 = p__51413;
var map__51414__$1 = ((((!((map__51414 == null)))?((((map__51414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51414):map__51414);
var opts = map__51414__$1;
var build_id = cljs.core.get.call(null,map__51414__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51414,map__51414__$1,opts,build_id){
return (function (p__51416){
var vec__51417 = p__51416;
var seq__51418 = cljs.core.seq.call(null,vec__51417);
var first__51419 = cljs.core.first.call(null,seq__51418);
var seq__51418__$1 = cljs.core.next.call(null,seq__51418);
var map__51420 = first__51419;
var map__51420__$1 = ((((!((map__51420 == null)))?((((map__51420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51420):map__51420);
var msg = map__51420__$1;
var msg_name = cljs.core.get.call(null,map__51420__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51418__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51417,seq__51418,first__51419,seq__51418__$1,map__51420,map__51420__$1,msg,msg_name,_,map__51414,map__51414__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51417,seq__51418,first__51419,seq__51418__$1,map__51420,map__51420__$1,msg,msg_name,_,map__51414,map__51414__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51414,map__51414__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51422){
var vec__51423 = p__51422;
var seq__51424 = cljs.core.seq.call(null,vec__51423);
var first__51425 = cljs.core.first.call(null,seq__51424);
var seq__51424__$1 = cljs.core.next.call(null,seq__51424);
var map__51426 = first__51425;
var map__51426__$1 = ((((!((map__51426 == null)))?((((map__51426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51426):map__51426);
var msg = map__51426__$1;
var msg_name = cljs.core.get.call(null,map__51426__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51424__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51428){
var map__51429 = p__51428;
var map__51429__$1 = ((((!((map__51429 == null)))?((((map__51429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51429):map__51429);
var on_compile_warning = cljs.core.get.call(null,map__51429__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51429__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51429,map__51429__$1,on_compile_warning,on_compile_fail){
return (function (p__51431){
var vec__51432 = p__51431;
var seq__51433 = cljs.core.seq.call(null,vec__51432);
var first__51434 = cljs.core.first.call(null,seq__51433);
var seq__51433__$1 = cljs.core.next.call(null,seq__51433);
var map__51435 = first__51434;
var map__51435__$1 = ((((!((map__51435 == null)))?((((map__51435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51435):map__51435);
var msg = map__51435__$1;
var msg_name = cljs.core.get.call(null,map__51435__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51433__$1;
var pred__51437 = cljs.core._EQ_;
var expr__51438 = msg_name;
if(cljs.core.truth_(pred__51437.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51438))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51437.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51438))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51429,map__51429__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__,msg_hist,msg_names,msg){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__,msg_hist,msg_names,msg){
return (function (state_51527){
var state_val_51528 = (state_51527[(1)]);
if((state_val_51528 === (7))){
var inst_51447 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
if(cljs.core.truth_(inst_51447)){
var statearr_51529_51576 = state_51527__$1;
(statearr_51529_51576[(1)] = (8));

} else {
var statearr_51530_51577 = state_51527__$1;
(statearr_51530_51577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (20))){
var inst_51521 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51531_51578 = state_51527__$1;
(statearr_51531_51578[(2)] = inst_51521);

(statearr_51531_51578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (27))){
var inst_51517 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51532_51579 = state_51527__$1;
(statearr_51532_51579[(2)] = inst_51517);

(statearr_51532_51579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (1))){
var inst_51440 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51527__$1 = state_51527;
if(cljs.core.truth_(inst_51440)){
var statearr_51533_51580 = state_51527__$1;
(statearr_51533_51580[(1)] = (2));

} else {
var statearr_51534_51581 = state_51527__$1;
(statearr_51534_51581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (24))){
var inst_51519 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51535_51582 = state_51527__$1;
(statearr_51535_51582[(2)] = inst_51519);

(statearr_51535_51582[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (4))){
var inst_51525 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51527__$1,inst_51525);
} else {
if((state_val_51528 === (15))){
var inst_51523 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51536_51583 = state_51527__$1;
(statearr_51536_51583[(2)] = inst_51523);

(statearr_51536_51583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (21))){
var inst_51476 = (state_51527[(2)]);
var inst_51477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51478 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51477);
var state_51527__$1 = (function (){var statearr_51537 = state_51527;
(statearr_51537[(7)] = inst_51476);

return statearr_51537;
})();
var statearr_51538_51584 = state_51527__$1;
(statearr_51538_51584[(2)] = inst_51478);

(statearr_51538_51584[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (31))){
var inst_51506 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51527__$1 = state_51527;
if(cljs.core.truth_(inst_51506)){
var statearr_51539_51585 = state_51527__$1;
(statearr_51539_51585[(1)] = (34));

} else {
var statearr_51540_51586 = state_51527__$1;
(statearr_51540_51586[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (32))){
var inst_51515 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51541_51587 = state_51527__$1;
(statearr_51541_51587[(2)] = inst_51515);

(statearr_51541_51587[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (33))){
var inst_51502 = (state_51527[(2)]);
var inst_51503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51504 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51503);
var state_51527__$1 = (function (){var statearr_51542 = state_51527;
(statearr_51542[(8)] = inst_51502);

return statearr_51542;
})();
var statearr_51543_51588 = state_51527__$1;
(statearr_51543_51588[(2)] = inst_51504);

(statearr_51543_51588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (13))){
var inst_51461 = figwheel.client.heads_up.clear.call(null);
var state_51527__$1 = state_51527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(16),inst_51461);
} else {
if((state_val_51528 === (22))){
var inst_51482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51483 = figwheel.client.heads_up.append_warning_message.call(null,inst_51482);
var state_51527__$1 = state_51527;
var statearr_51544_51589 = state_51527__$1;
(statearr_51544_51589[(2)] = inst_51483);

(statearr_51544_51589[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (36))){
var inst_51513 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51545_51590 = state_51527__$1;
(statearr_51545_51590[(2)] = inst_51513);

(statearr_51545_51590[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (29))){
var inst_51493 = (state_51527[(2)]);
var inst_51494 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51495 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51494);
var state_51527__$1 = (function (){var statearr_51546 = state_51527;
(statearr_51546[(9)] = inst_51493);

return statearr_51546;
})();
var statearr_51547_51591 = state_51527__$1;
(statearr_51547_51591[(2)] = inst_51495);

(statearr_51547_51591[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (6))){
var inst_51442 = (state_51527[(10)]);
var state_51527__$1 = state_51527;
var statearr_51548_51592 = state_51527__$1;
(statearr_51548_51592[(2)] = inst_51442);

(statearr_51548_51592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (28))){
var inst_51489 = (state_51527[(2)]);
var inst_51490 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51491 = figwheel.client.heads_up.display_warning.call(null,inst_51490);
var state_51527__$1 = (function (){var statearr_51549 = state_51527;
(statearr_51549[(11)] = inst_51489);

return statearr_51549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(29),inst_51491);
} else {
if((state_val_51528 === (25))){
var inst_51487 = figwheel.client.heads_up.clear.call(null);
var state_51527__$1 = state_51527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(28),inst_51487);
} else {
if((state_val_51528 === (34))){
var inst_51508 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51527__$1 = state_51527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(37),inst_51508);
} else {
if((state_val_51528 === (17))){
var inst_51467 = (state_51527[(2)]);
var inst_51468 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51469 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51468);
var state_51527__$1 = (function (){var statearr_51550 = state_51527;
(statearr_51550[(12)] = inst_51467);

return statearr_51550;
})();
var statearr_51551_51593 = state_51527__$1;
(statearr_51551_51593[(2)] = inst_51469);

(statearr_51551_51593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (3))){
var inst_51459 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51527__$1 = state_51527;
if(cljs.core.truth_(inst_51459)){
var statearr_51552_51594 = state_51527__$1;
(statearr_51552_51594[(1)] = (13));

} else {
var statearr_51553_51595 = state_51527__$1;
(statearr_51553_51595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (12))){
var inst_51455 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51554_51596 = state_51527__$1;
(statearr_51554_51596[(2)] = inst_51455);

(statearr_51554_51596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (2))){
var inst_51442 = (state_51527[(10)]);
var inst_51442__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51527__$1 = (function (){var statearr_51555 = state_51527;
(statearr_51555[(10)] = inst_51442__$1);

return statearr_51555;
})();
if(cljs.core.truth_(inst_51442__$1)){
var statearr_51556_51597 = state_51527__$1;
(statearr_51556_51597[(1)] = (5));

} else {
var statearr_51557_51598 = state_51527__$1;
(statearr_51557_51598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (23))){
var inst_51485 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51527__$1 = state_51527;
if(cljs.core.truth_(inst_51485)){
var statearr_51558_51599 = state_51527__$1;
(statearr_51558_51599[(1)] = (25));

} else {
var statearr_51559_51600 = state_51527__$1;
(statearr_51559_51600[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (35))){
var state_51527__$1 = state_51527;
var statearr_51560_51601 = state_51527__$1;
(statearr_51560_51601[(2)] = null);

(statearr_51560_51601[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (19))){
var inst_51480 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51527__$1 = state_51527;
if(cljs.core.truth_(inst_51480)){
var statearr_51561_51602 = state_51527__$1;
(statearr_51561_51602[(1)] = (22));

} else {
var statearr_51562_51603 = state_51527__$1;
(statearr_51562_51603[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (11))){
var inst_51451 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51563_51604 = state_51527__$1;
(statearr_51563_51604[(2)] = inst_51451);

(statearr_51563_51604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (9))){
var inst_51453 = figwheel.client.heads_up.clear.call(null);
var state_51527__$1 = state_51527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(12),inst_51453);
} else {
if((state_val_51528 === (5))){
var inst_51444 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51527__$1 = state_51527;
var statearr_51564_51605 = state_51527__$1;
(statearr_51564_51605[(2)] = inst_51444);

(statearr_51564_51605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (14))){
var inst_51471 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51527__$1 = state_51527;
if(cljs.core.truth_(inst_51471)){
var statearr_51565_51606 = state_51527__$1;
(statearr_51565_51606[(1)] = (18));

} else {
var statearr_51566_51607 = state_51527__$1;
(statearr_51566_51607[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (26))){
var inst_51497 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51527__$1 = state_51527;
if(cljs.core.truth_(inst_51497)){
var statearr_51567_51608 = state_51527__$1;
(statearr_51567_51608[(1)] = (30));

} else {
var statearr_51568_51609 = state_51527__$1;
(statearr_51568_51609[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (16))){
var inst_51463 = (state_51527[(2)]);
var inst_51464 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51465 = figwheel.client.heads_up.display_exception.call(null,inst_51464);
var state_51527__$1 = (function (){var statearr_51569 = state_51527;
(statearr_51569[(13)] = inst_51463);

return statearr_51569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(17),inst_51465);
} else {
if((state_val_51528 === (30))){
var inst_51499 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51500 = figwheel.client.heads_up.display_warning.call(null,inst_51499);
var state_51527__$1 = state_51527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(33),inst_51500);
} else {
if((state_val_51528 === (10))){
var inst_51457 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51570_51610 = state_51527__$1;
(statearr_51570_51610[(2)] = inst_51457);

(statearr_51570_51610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (18))){
var inst_51473 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51474 = figwheel.client.heads_up.display_exception.call(null,inst_51473);
var state_51527__$1 = state_51527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(21),inst_51474);
} else {
if((state_val_51528 === (37))){
var inst_51510 = (state_51527[(2)]);
var state_51527__$1 = state_51527;
var statearr_51571_51611 = state_51527__$1;
(statearr_51571_51611[(2)] = inst_51510);

(statearr_51571_51611[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51528 === (8))){
var inst_51449 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51527__$1 = state_51527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51527__$1,(11),inst_51449);
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
});})(c__47438__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__47348__auto__,c__47438__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto____0 = (function (){
var statearr_51572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51572[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto__);

(statearr_51572[(1)] = (1));

return statearr_51572;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto____1 = (function (state_51527){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_51527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e51573){if((e51573 instanceof Object)){
var ex__47352__auto__ = e51573;
var statearr_51574_51612 = state_51527;
(statearr_51574_51612[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51613 = state_51527;
state_51527 = G__51613;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto__ = function(state_51527){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto____1.call(this,state_51527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__,msg_hist,msg_names,msg))
})();
var state__47440__auto__ = (function (){var statearr_51575 = f__47439__auto__.call(null);
(statearr_51575[(6)] = c__47438__auto__);

return statearr_51575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__,msg_hist,msg_names,msg))
);

return c__47438__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__47438__auto___51642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___51642,ch){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___51642,ch){
return (function (state_51628){
var state_val_51629 = (state_51628[(1)]);
if((state_val_51629 === (1))){
var state_51628__$1 = state_51628;
var statearr_51630_51643 = state_51628__$1;
(statearr_51630_51643[(2)] = null);

(statearr_51630_51643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (2))){
var state_51628__$1 = state_51628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51628__$1,(4),ch);
} else {
if((state_val_51629 === (3))){
var inst_51626 = (state_51628[(2)]);
var state_51628__$1 = state_51628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51628__$1,inst_51626);
} else {
if((state_val_51629 === (4))){
var inst_51616 = (state_51628[(7)]);
var inst_51616__$1 = (state_51628[(2)]);
var state_51628__$1 = (function (){var statearr_51631 = state_51628;
(statearr_51631[(7)] = inst_51616__$1);

return statearr_51631;
})();
if(cljs.core.truth_(inst_51616__$1)){
var statearr_51632_51644 = state_51628__$1;
(statearr_51632_51644[(1)] = (5));

} else {
var statearr_51633_51645 = state_51628__$1;
(statearr_51633_51645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (5))){
var inst_51616 = (state_51628[(7)]);
var inst_51618 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51616);
var state_51628__$1 = state_51628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51628__$1,(8),inst_51618);
} else {
if((state_val_51629 === (6))){
var state_51628__$1 = state_51628;
var statearr_51634_51646 = state_51628__$1;
(statearr_51634_51646[(2)] = null);

(statearr_51634_51646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (7))){
var inst_51624 = (state_51628[(2)]);
var state_51628__$1 = state_51628;
var statearr_51635_51647 = state_51628__$1;
(statearr_51635_51647[(2)] = inst_51624);

(statearr_51635_51647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51629 === (8))){
var inst_51620 = (state_51628[(2)]);
var state_51628__$1 = (function (){var statearr_51636 = state_51628;
(statearr_51636[(8)] = inst_51620);

return statearr_51636;
})();
var statearr_51637_51648 = state_51628__$1;
(statearr_51637_51648[(2)] = null);

(statearr_51637_51648[(1)] = (2));


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
});})(c__47438__auto___51642,ch))
;
return ((function (switch__47348__auto__,c__47438__auto___51642,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__47349__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__47349__auto____0 = (function (){
var statearr_51638 = [null,null,null,null,null,null,null,null,null];
(statearr_51638[(0)] = figwheel$client$heads_up_plugin_$_state_machine__47349__auto__);

(statearr_51638[(1)] = (1));

return statearr_51638;
});
var figwheel$client$heads_up_plugin_$_state_machine__47349__auto____1 = (function (state_51628){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_51628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e51639){if((e51639 instanceof Object)){
var ex__47352__auto__ = e51639;
var statearr_51640_51649 = state_51628;
(statearr_51640_51649[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51650 = state_51628;
state_51628 = G__51650;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__47349__auto__ = function(state_51628){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__47349__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__47349__auto____1.call(this,state_51628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__47349__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__47349__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___51642,ch))
})();
var state__47440__auto__ = (function (){var statearr_51641 = f__47439__auto__.call(null);
(statearr_51641[(6)] = c__47438__auto___51642);

return statearr_51641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___51642,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__){
return (function (state_51656){
var state_val_51657 = (state_51656[(1)]);
if((state_val_51657 === (1))){
var inst_51651 = cljs.core.async.timeout.call(null,(3000));
var state_51656__$1 = state_51656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51656__$1,(2),inst_51651);
} else {
if((state_val_51657 === (2))){
var inst_51653 = (state_51656[(2)]);
var inst_51654 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51656__$1 = (function (){var statearr_51658 = state_51656;
(statearr_51658[(7)] = inst_51653);

return statearr_51658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51656__$1,inst_51654);
} else {
return null;
}
}
});})(c__47438__auto__))
;
return ((function (switch__47348__auto__,c__47438__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__47349__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__47349__auto____0 = (function (){
var statearr_51659 = [null,null,null,null,null,null,null,null];
(statearr_51659[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__47349__auto__);

(statearr_51659[(1)] = (1));

return statearr_51659;
});
var figwheel$client$enforce_project_plugin_$_state_machine__47349__auto____1 = (function (state_51656){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_51656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e51660){if((e51660 instanceof Object)){
var ex__47352__auto__ = e51660;
var statearr_51661_51663 = state_51656;
(statearr_51661_51663[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51664 = state_51656;
state_51656 = G__51664;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__47349__auto__ = function(state_51656){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__47349__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__47349__auto____1.call(this,state_51656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__47349__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__47349__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__))
})();
var state__47440__auto__ = (function (){var statearr_51662 = f__47439__auto__.call(null);
(statearr_51662[(6)] = c__47438__auto__);

return statearr_51662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__))
);

return c__47438__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__,figwheel_version,temp__5457__auto__){
return (function (state_51671){
var state_val_51672 = (state_51671[(1)]);
if((state_val_51672 === (1))){
var inst_51665 = cljs.core.async.timeout.call(null,(2000));
var state_51671__$1 = state_51671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51671__$1,(2),inst_51665);
} else {
if((state_val_51672 === (2))){
var inst_51667 = (state_51671[(2)]);
var inst_51668 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_51669 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51668);
var state_51671__$1 = (function (){var statearr_51673 = state_51671;
(statearr_51673[(7)] = inst_51667);

return statearr_51673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51671__$1,inst_51669);
} else {
return null;
}
}
});})(c__47438__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__47348__auto__,c__47438__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto____0 = (function (){
var statearr_51674 = [null,null,null,null,null,null,null,null];
(statearr_51674[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto__);

(statearr_51674[(1)] = (1));

return statearr_51674;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto____1 = (function (state_51671){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_51671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e51675){if((e51675 instanceof Object)){
var ex__47352__auto__ = e51675;
var statearr_51676_51678 = state_51671;
(statearr_51676_51678[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51679 = state_51671;
state_51671 = G__51679;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto__ = function(state_51671){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto____1.call(this,state_51671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__,figwheel_version,temp__5457__auto__))
})();
var state__47440__auto__ = (function (){var statearr_51677 = f__47439__auto__.call(null);
(statearr_51677[(6)] = c__47438__auto__);

return statearr_51677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__,figwheel_version,temp__5457__auto__))
);

return c__47438__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51680){
var map__51681 = p__51680;
var map__51681__$1 = ((((!((map__51681 == null)))?((((map__51681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51681):map__51681);
var file = cljs.core.get.call(null,map__51681__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51681__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51683 = "";
var G__51683__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51683),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51683);
var G__51683__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51683__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51683__$1);
if(cljs.core.truth_((function (){var and__41059__auto__ = line;
if(cljs.core.truth_(and__41059__auto__)){
return column;
} else {
return and__41059__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51683__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51683__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51684){
var map__51685 = p__51684;
var map__51685__$1 = ((((!((map__51685 == null)))?((((map__51685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51685):map__51685);
var ed = map__51685__$1;
var formatted_exception = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51687_51691 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51688_51692 = null;
var count__51689_51693 = (0);
var i__51690_51694 = (0);
while(true){
if((i__51690_51694 < count__51689_51693)){
var msg_51695 = cljs.core._nth.call(null,chunk__51688_51692,i__51690_51694);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51695);

var G__51696 = seq__51687_51691;
var G__51697 = chunk__51688_51692;
var G__51698 = count__51689_51693;
var G__51699 = (i__51690_51694 + (1));
seq__51687_51691 = G__51696;
chunk__51688_51692 = G__51697;
count__51689_51693 = G__51698;
i__51690_51694 = G__51699;
continue;
} else {
var temp__5457__auto___51700 = cljs.core.seq.call(null,seq__51687_51691);
if(temp__5457__auto___51700){
var seq__51687_51701__$1 = temp__5457__auto___51700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51687_51701__$1)){
var c__42002__auto___51702 = cljs.core.chunk_first.call(null,seq__51687_51701__$1);
var G__51703 = cljs.core.chunk_rest.call(null,seq__51687_51701__$1);
var G__51704 = c__42002__auto___51702;
var G__51705 = cljs.core.count.call(null,c__42002__auto___51702);
var G__51706 = (0);
seq__51687_51691 = G__51703;
chunk__51688_51692 = G__51704;
count__51689_51693 = G__51705;
i__51690_51694 = G__51706;
continue;
} else {
var msg_51707 = cljs.core.first.call(null,seq__51687_51701__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51707);

var G__51708 = cljs.core.next.call(null,seq__51687_51701__$1);
var G__51709 = null;
var G__51710 = (0);
var G__51711 = (0);
seq__51687_51691 = G__51708;
chunk__51688_51692 = G__51709;
count__51689_51693 = G__51710;
i__51690_51694 = G__51711;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51712){
var map__51713 = p__51712;
var map__51713__$1 = ((((!((map__51713 == null)))?((((map__51713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51713):map__51713);
var w = map__51713__$1;
var message = cljs.core.get.call(null,map__51713__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__41059__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__41059__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__41059__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51715 = cljs.core.seq.call(null,plugins);
var chunk__51716 = null;
var count__51717 = (0);
var i__51718 = (0);
while(true){
if((i__51718 < count__51717)){
var vec__51719 = cljs.core._nth.call(null,chunk__51716,i__51718);
var k = cljs.core.nth.call(null,vec__51719,(0),null);
var plugin = cljs.core.nth.call(null,vec__51719,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51725 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51715,chunk__51716,count__51717,i__51718,pl_51725,vec__51719,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51725.call(null,msg_hist);
});})(seq__51715,chunk__51716,count__51717,i__51718,pl_51725,vec__51719,k,plugin))
);
} else {
}

var G__51726 = seq__51715;
var G__51727 = chunk__51716;
var G__51728 = count__51717;
var G__51729 = (i__51718 + (1));
seq__51715 = G__51726;
chunk__51716 = G__51727;
count__51717 = G__51728;
i__51718 = G__51729;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__51715);
if(temp__5457__auto__){
var seq__51715__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51715__$1)){
var c__42002__auto__ = cljs.core.chunk_first.call(null,seq__51715__$1);
var G__51730 = cljs.core.chunk_rest.call(null,seq__51715__$1);
var G__51731 = c__42002__auto__;
var G__51732 = cljs.core.count.call(null,c__42002__auto__);
var G__51733 = (0);
seq__51715 = G__51730;
chunk__51716 = G__51731;
count__51717 = G__51732;
i__51718 = G__51733;
continue;
} else {
var vec__51722 = cljs.core.first.call(null,seq__51715__$1);
var k = cljs.core.nth.call(null,vec__51722,(0),null);
var plugin = cljs.core.nth.call(null,vec__51722,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51715,chunk__51716,count__51717,i__51718,pl_51734,vec__51722,k,plugin,seq__51715__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51734.call(null,msg_hist);
});})(seq__51715,chunk__51716,count__51717,i__51718,pl_51734,vec__51722,k,plugin,seq__51715__$1,temp__5457__auto__))
);
} else {
}

var G__51735 = cljs.core.next.call(null,seq__51715__$1);
var G__51736 = null;
var G__51737 = (0);
var G__51738 = (0);
seq__51715 = G__51735;
chunk__51716 = G__51736;
count__51717 = G__51737;
i__51718 = G__51738;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__51740 = arguments.length;
switch (G__51740) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51741_51746 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51742_51747 = null;
var count__51743_51748 = (0);
var i__51744_51749 = (0);
while(true){
if((i__51744_51749 < count__51743_51748)){
var msg_51750 = cljs.core._nth.call(null,chunk__51742_51747,i__51744_51749);
figwheel.client.socket.handle_incoming_message.call(null,msg_51750);

var G__51751 = seq__51741_51746;
var G__51752 = chunk__51742_51747;
var G__51753 = count__51743_51748;
var G__51754 = (i__51744_51749 + (1));
seq__51741_51746 = G__51751;
chunk__51742_51747 = G__51752;
count__51743_51748 = G__51753;
i__51744_51749 = G__51754;
continue;
} else {
var temp__5457__auto___51755 = cljs.core.seq.call(null,seq__51741_51746);
if(temp__5457__auto___51755){
var seq__51741_51756__$1 = temp__5457__auto___51755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51741_51756__$1)){
var c__42002__auto___51757 = cljs.core.chunk_first.call(null,seq__51741_51756__$1);
var G__51758 = cljs.core.chunk_rest.call(null,seq__51741_51756__$1);
var G__51759 = c__42002__auto___51757;
var G__51760 = cljs.core.count.call(null,c__42002__auto___51757);
var G__51761 = (0);
seq__51741_51746 = G__51758;
chunk__51742_51747 = G__51759;
count__51743_51748 = G__51760;
i__51744_51749 = G__51761;
continue;
} else {
var msg_51762 = cljs.core.first.call(null,seq__51741_51756__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51762);

var G__51763 = cljs.core.next.call(null,seq__51741_51756__$1);
var G__51764 = null;
var G__51765 = (0);
var G__51766 = (0);
seq__51741_51746 = G__51763;
chunk__51742_51747 = G__51764;
count__51743_51748 = G__51765;
i__51744_51749 = G__51766;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__42357__auto__ = [];
var len__42350__auto___51771 = arguments.length;
var i__42351__auto___51772 = (0);
while(true){
if((i__42351__auto___51772 < len__42350__auto___51771)){
args__42357__auto__.push((arguments[i__42351__auto___51772]));

var G__51773 = (i__42351__auto___51772 + (1));
i__42351__auto___51772 = G__51773;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51768){
var map__51769 = p__51768;
var map__51769__$1 = ((((!((map__51769 == null)))?((((map__51769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51769):map__51769);
var opts = map__51769__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51767){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51767));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51774){if((e51774 instanceof Error)){
var e = e51774;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51774;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__51775){
var map__51776 = p__51775;
var map__51776__$1 = ((((!((map__51776 == null)))?((((map__51776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51776):map__51776);
var msg_name = cljs.core.get.call(null,map__51776__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1524597523972
