// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__51807__delegate = function (x__51791__auto__){
if(cljs.core.truth_(fermat.core.on_js_reload)){
return cljs.core.apply.call(null,fermat.core.on_js_reload,x__51791__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("fermat.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__51807 = function (var_args){
var x__51791__auto__ = null;
if (arguments.length > 0) {
var G__51808__i = 0, G__51808__a = new Array(arguments.length -  0);
while (G__51808__i < G__51808__a.length) {G__51808__a[G__51808__i] = arguments[G__51808__i + 0]; ++G__51808__i;}
  x__51791__auto__ = new cljs.core.IndexedSeq(G__51808__a,0,null);
} 
return G__51807__delegate.call(this,x__51791__auto__);};
G__51807.cljs$lang$maxFixedArity = 0;
G__51807.cljs$lang$applyTo = (function (arglist__51809){
var x__51791__auto__ = cljs.core.seq(arglist__51809);
return G__51807__delegate(x__51791__auto__);
});
G__51807.cljs$core$IFn$_invoke$arity$variadic = G__51807__delegate;
return G__51807;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1524597524041
