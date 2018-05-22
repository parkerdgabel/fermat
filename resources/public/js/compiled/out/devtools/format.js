// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__41804__auto__ = (((value == null))?null:value);
var m__41805__auto__ = (devtools.format._header[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,value);
} else {
var m__41805__auto____$1 = (devtools.format._header["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__41804__auto__ = (((value == null))?null:value);
var m__41805__auto__ = (devtools.format._has_body[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,value);
} else {
var m__41805__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__41804__auto__ = (((value == null))?null:value);
var m__41805__auto__ = (devtools.format._body[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,value);
} else {
var m__41805__auto____$1 = (devtools.format._body["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42804 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42804["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42805 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42805["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42806 = temp__5455__auto____$2;
return (o42806["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42807 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42807["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42808 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42808["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42809 = temp__5455__auto____$2;
return (o42809["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42810 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42810["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42811 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42811["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42812 = temp__5455__auto____$2;
return (o42812["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42813 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42813["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42814 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42814["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42815 = temp__5455__auto____$2;
return (o42815["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42816 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42816["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42817 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42817["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42818 = temp__5455__auto____$2;
return (o42818["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42819 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42819["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42820 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42820["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42821 = temp__5455__auto____$2;
return (o42821["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42822 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42822["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42823 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42823["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42824 = temp__5455__auto____$2;
return (o42824["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42826 = arguments.length;
var i__42351__auto___42827 = (0);
while(true){
if((i__42351__auto___42827 < len__42350__auto___42826)){
args__42357__auto__.push((arguments[i__42351__auto___42827]));

var G__42828 = (i__42351__auto___42827 + (1));
i__42351__auto___42827 = G__42828;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq42825){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42825));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42830 = arguments.length;
var i__42351__auto___42831 = (0);
while(true){
if((i__42351__auto___42831 < len__42350__auto___42830)){
args__42357__auto__.push((arguments[i__42351__auto___42831]));

var G__42832 = (i__42351__auto___42831 + (1));
i__42351__auto___42831 = G__42832;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq42829){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42829));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42834 = arguments.length;
var i__42351__auto___42835 = (0);
while(true){
if((i__42351__auto___42835 < len__42350__auto___42834)){
args__42357__auto__.push((arguments[i__42351__auto___42835]));

var G__42836 = (i__42351__auto___42835 + (1));
i__42351__auto___42835 = G__42836;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq42833){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42833));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42838 = arguments.length;
var i__42351__auto___42839 = (0);
while(true){
if((i__42351__auto___42839 < len__42350__auto___42838)){
args__42357__auto__.push((arguments[i__42351__auto___42839]));

var G__42840 = (i__42351__auto___42839 + (1));
i__42351__auto___42839 = G__42840;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42837){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42837));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42842 = arguments.length;
var i__42351__auto___42843 = (0);
while(true){
if((i__42351__auto___42843 < len__42350__auto___42842)){
args__42357__auto__.push((arguments[i__42351__auto___42843]));

var G__42844 = (i__42351__auto___42843 + (1));
i__42351__auto___42843 = G__42844;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq42841){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42841));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42846 = arguments.length;
var i__42351__auto___42847 = (0);
while(true){
if((i__42351__auto___42847 < len__42350__auto___42846)){
args__42357__auto__.push((arguments[i__42351__auto___42847]));

var G__42848 = (i__42351__auto___42847 + (1));
i__42351__auto___42847 = G__42848;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq42845){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42845));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42850 = arguments.length;
var i__42351__auto___42851 = (0);
while(true){
if((i__42351__auto___42851 < len__42350__auto___42850)){
args__42357__auto__.push((arguments[i__42351__auto___42851]));

var G__42852 = (i__42351__auto___42851 + (1));
i__42351__auto___42851 = G__42852;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq42849){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42849));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42860 = arguments.length;
var i__42351__auto___42861 = (0);
while(true){
if((i__42351__auto___42861 < len__42350__auto___42860)){
args__42357__auto__.push((arguments[i__42351__auto___42861]));

var G__42862 = (i__42351__auto___42861 + (1));
i__42351__auto___42861 = G__42862;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((1) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42358__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42856){
var vec__42857 = p__42856;
var state_override = cljs.core.nth.call(null,vec__42857,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__42857,state_override){
return (function (p1__42853_SHARP_){
return cljs.core.merge.call(null,p1__42853_SHARP_,state_override);
});})(vec__42857,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq42854){
var G__42855 = cljs.core.first.call(null,seq42854);
var seq42854__$1 = cljs.core.next.call(null,seq42854);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__42855,seq42854__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42864 = arguments.length;
var i__42351__auto___42865 = (0);
while(true){
if((i__42351__auto___42865 < len__42350__auto___42864)){
args__42357__auto__.push((arguments[i__42351__auto___42865]));

var G__42866 = (i__42351__auto___42865 + (1));
i__42351__auto___42865 = G__42866;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((0) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__42358__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq42863){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42863));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__42357__auto__ = [];
var len__42350__auto___42869 = arguments.length;
var i__42351__auto___42870 = (0);
while(true){
if((i__42351__auto___42870 < len__42350__auto___42869)){
args__42357__auto__.push((arguments[i__42351__auto___42870]));

var G__42871 = (i__42351__auto___42870 + (1));
i__42351__auto___42870 = G__42871;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((1) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42358__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42867){
var G__42868 = cljs.core.first.call(null,seq42867);
var seq42867__$1 = cljs.core.next.call(null,seq42867);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__42868,seq42867__$1);
});


//# sourceMappingURL=format.js.map?rel=1524597513686
