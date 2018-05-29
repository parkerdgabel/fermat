// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.gfredericks.exact');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('com.gfredericks.exact.impl');
com.gfredericks.exact.ZERO = com.gfredericks.exact.impl.ZERO;
com.gfredericks.exact.ONE = com.gfredericks.exact.impl.ONE;
com.gfredericks.exact._PLUS_ = (function com$gfredericks$exact$_PLUS_(var_args){
var G__43314 = arguments.length;
switch (G__43314) {
case 0:
return com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43316 = arguments.length;
var i__42383__auto___43317 = (0);
while(true){
if((i__42383__auto___43317 < len__42382__auto___43316)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43317]));

var G__43318 = (i__42383__auto___43317 + (1));
i__42383__auto___43317 = G__43318;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.gfredericks.exact.impl.ZERO;
});

com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return com.gfredericks.exact.impl.add.call(null,x,y);
});

com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,zs){
return cljs.core.reduce.call(null,com.gfredericks.exact.impl.add,com.gfredericks.exact.impl.add.call(null,x,y),zs);
});

com.gfredericks.exact._PLUS_.cljs$lang$applyTo = (function (seq43311){
var G__43312 = cljs.core.first.call(null,seq43311);
var seq43311__$1 = cljs.core.next.call(null,seq43311);
var G__43313 = cljs.core.first.call(null,seq43311__$1);
var seq43311__$2 = cljs.core.next.call(null,seq43311__$1);
return com.gfredericks.exact._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__43312,G__43313,seq43311__$2);
});

com.gfredericks.exact._PLUS_.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact._ = (function com$gfredericks$exact$_(var_args){
var G__43323 = arguments.length;
switch (G__43323) {
case 1:
return com.gfredericks.exact._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43325 = arguments.length;
var i__42383__auto___43326 = (0);
while(true){
if((i__42383__auto___43326 < len__42382__auto___43325)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43326]));

var G__43327 = (i__42383__auto___43326 + (1));
i__42383__auto___43326 = G__43327;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._.cljs$core$IFn$_invoke$arity$1 = (function (x){
return com.gfredericks.exact.impl.negate.call(null,x);
});

com.gfredericks.exact._.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return com.gfredericks.exact.impl.add.call(null,x,com.gfredericks.exact.impl.negate.call(null,y));
});

com.gfredericks.exact._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,zs){
return com.gfredericks.exact.impl.add.call(null,x,com.gfredericks.exact.impl.negate.call(null,cljs.core.reduce.call(null,com.gfredericks.exact.impl.add,y,zs)));
});

com.gfredericks.exact._.cljs$lang$applyTo = (function (seq43320){
var G__43321 = cljs.core.first.call(null,seq43320);
var seq43320__$1 = cljs.core.next.call(null,seq43320);
var G__43322 = cljs.core.first.call(null,seq43320__$1);
var seq43320__$2 = cljs.core.next.call(null,seq43320__$1);
return com.gfredericks.exact._.cljs$core$IFn$_invoke$arity$variadic(G__43321,G__43322,seq43320__$2);
});

com.gfredericks.exact._.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact._EQ_ = (function com$gfredericks$exact$_EQ_(var_args){
var G__43333 = arguments.length;
switch (G__43333) {
case 1:
return com.gfredericks.exact._EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43335 = arguments.length;
var i__42383__auto___43336 = (0);
while(true){
if((i__42383__auto___43336 < len__42382__auto___43335)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43336]));

var G__43337 = (i__42383__auto___43336 + (1));
i__42383__auto___43336 = G__43337;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

com.gfredericks.exact._EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (com.gfredericks.exact.impl.compare.call(null,x,y) === (0));
});

com.gfredericks.exact._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,zs){
var and__41091__auto__ = com.gfredericks.exact._EQ_.call(null,x,y);
if(cljs.core.truth_(and__41091__auto__)){
return cljs.core.every_QMARK_.call(null,((function (and__41091__auto__){
return (function (p1__43328_SHARP_){
return com.gfredericks.exact._EQ_.call(null,y,p1__43328_SHARP_);
});})(and__41091__auto__))
,zs);
} else {
return and__41091__auto__;
}
});

com.gfredericks.exact._EQ_.cljs$lang$applyTo = (function (seq43330){
var G__43331 = cljs.core.first.call(null,seq43330);
var seq43330__$1 = cljs.core.next.call(null,seq43330);
var G__43332 = cljs.core.first.call(null,seq43330__$1);
var seq43330__$2 = cljs.core.next.call(null,seq43330__$1);
return com.gfredericks.exact._EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43331,G__43332,seq43330__$2);
});

com.gfredericks.exact._EQ_.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact._STAR_ = (function com$gfredericks$exact$_STAR_(var_args){
var G__43342 = arguments.length;
switch (G__43342) {
case 0:
return com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43344 = arguments.length;
var i__42383__auto___43345 = (0);
while(true){
if((i__42383__auto___43345 < len__42382__auto___43344)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43345]));

var G__43346 = (i__42383__auto___43345 + (1));
i__42383__auto___43345 = G__43346;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.gfredericks.exact.impl.ONE;
});

com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return com.gfredericks.exact.impl.multiply.call(null,x,y);
});

com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,zs){
return cljs.core.reduce.call(null,com.gfredericks.exact.impl.multiply,com.gfredericks.exact.impl.multiply.call(null,x,y),zs);
});

com.gfredericks.exact._STAR_.cljs$lang$applyTo = (function (seq43339){
var G__43340 = cljs.core.first.call(null,seq43339);
var seq43339__$1 = cljs.core.next.call(null,seq43339);
var G__43341 = cljs.core.first.call(null,seq43339__$1);
var seq43339__$2 = cljs.core.next.call(null,seq43339__$1);
return com.gfredericks.exact._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43340,G__43341,seq43339__$2);
});

com.gfredericks.exact._STAR_.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact._SLASH_ = (function com$gfredericks$exact$_SLASH_(var_args){
var G__43351 = arguments.length;
switch (G__43351) {
case 1:
return com.gfredericks.exact._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43353 = arguments.length;
var i__42383__auto___43354 = (0);
while(true){
if((i__42383__auto___43354 < len__42382__auto___43353)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43354]));

var G__43355 = (i__42383__auto___43354 + (1));
i__42383__auto___43354 = G__43355;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._SLASH_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return com.gfredericks.exact.impl.invert.call(null,x);
});

com.gfredericks.exact._SLASH_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return com.gfredericks.exact.impl.multiply.call(null,x,com.gfredericks.exact.impl.invert.call(null,y));
});

com.gfredericks.exact._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,zs){
return com.gfredericks.exact.impl.multiply.call(null,x,com.gfredericks.exact.impl.invert.call(null,cljs.core.reduce.call(null,com.gfredericks.exact.impl.multiply,y,zs)));
});

com.gfredericks.exact._SLASH_.cljs$lang$applyTo = (function (seq43348){
var G__43349 = cljs.core.first.call(null,seq43348);
var seq43348__$1 = cljs.core.next.call(null,seq43348);
var G__43350 = cljs.core.first.call(null,seq43348__$1);
var seq43348__$2 = cljs.core.next.call(null,seq43348__$1);
return com.gfredericks.exact._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__43349,G__43350,seq43348__$2);
});

com.gfredericks.exact._SLASH_.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact.zero_QMARK_ = (function com$gfredericks$exact$zero_QMARK_(x){
return com.gfredericks.exact._EQ_.call(null,x,com.gfredericks.exact.impl.ZERO);
});
com.gfredericks.exact.inc = (function com$gfredericks$exact$inc(x){
return com.gfredericks.exact._PLUS_.call(null,x,com.gfredericks.exact.impl.ONE);
});
com.gfredericks.exact.dec = (function com$gfredericks$exact$dec(x){
return com.gfredericks.exact._.call(null,x,com.gfredericks.exact.impl.ONE);
});
com.gfredericks.exact._LT_ = (function com$gfredericks$exact$_LT_(var_args){
var G__43360 = arguments.length;
switch (G__43360) {
case 1:
return com.gfredericks.exact._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43362 = arguments.length;
var i__42383__auto___43363 = (0);
while(true){
if((i__42383__auto___43363 < len__42382__auto___43362)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43363]));

var G__43364 = (i__42383__auto___43363 + (1));
i__42383__auto___43363 = G__43364;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._LT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

com.gfredericks.exact._LT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (com.gfredericks.exact.impl.compare.call(null,x,y) < (0));
});

com.gfredericks.exact._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(com.gfredericks.exact._LT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__43365 = y;
var G__43366 = cljs.core.first.call(null,more);
var G__43367 = cljs.core.next.call(null,more);
x = G__43365;
y = G__43366;
more = G__43367;
continue;
} else {
return com.gfredericks.exact._LT_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

com.gfredericks.exact._LT_.cljs$lang$applyTo = (function (seq43357){
var G__43358 = cljs.core.first.call(null,seq43357);
var seq43357__$1 = cljs.core.next.call(null,seq43357);
var G__43359 = cljs.core.first.call(null,seq43357__$1);
var seq43357__$2 = cljs.core.next.call(null,seq43357__$1);
return com.gfredericks.exact._LT_.cljs$core$IFn$_invoke$arity$variadic(G__43358,G__43359,seq43357__$2);
});

com.gfredericks.exact._LT_.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact._GT_ = (function com$gfredericks$exact$_GT_(var_args){
var G__43372 = arguments.length;
switch (G__43372) {
case 1:
return com.gfredericks.exact._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43374 = arguments.length;
var i__42383__auto___43375 = (0);
while(true){
if((i__42383__auto___43375 < len__42382__auto___43374)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43375]));

var G__43376 = (i__42383__auto___43375 + (1));
i__42383__auto___43375 = G__43376;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

com.gfredericks.exact._GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (com.gfredericks.exact.impl.compare.call(null,x,y) > (0));
});

com.gfredericks.exact._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(com.gfredericks.exact._GT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__43377 = y;
var G__43378 = cljs.core.first.call(null,more);
var G__43379 = cljs.core.next.call(null,more);
x = G__43377;
y = G__43378;
more = G__43379;
continue;
} else {
return com.gfredericks.exact._GT_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

com.gfredericks.exact._GT_.cljs$lang$applyTo = (function (seq43369){
var G__43370 = cljs.core.first.call(null,seq43369);
var seq43369__$1 = cljs.core.next.call(null,seq43369);
var G__43371 = cljs.core.first.call(null,seq43369__$1);
var seq43369__$2 = cljs.core.next.call(null,seq43369__$1);
return com.gfredericks.exact._GT_.cljs$core$IFn$_invoke$arity$variadic(G__43370,G__43371,seq43369__$2);
});

com.gfredericks.exact._GT_.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact._LT__EQ_ = (function com$gfredericks$exact$_LT__EQ_(var_args){
var G__43384 = arguments.length;
switch (G__43384) {
case 1:
return com.gfredericks.exact._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43386 = arguments.length;
var i__42383__auto___43387 = (0);
while(true){
if((i__42383__auto___43387 < len__42382__auto___43386)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43387]));

var G__43388 = (i__42383__auto___43387 + (1));
i__42383__auto___43387 = G__43388;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

com.gfredericks.exact._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return !((com.gfredericks.exact.impl.compare.call(null,x,y) > (0)));
});

com.gfredericks.exact._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(com.gfredericks.exact._LT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__43389 = y;
var G__43390 = cljs.core.first.call(null,more);
var G__43391 = cljs.core.next.call(null,more);
x = G__43389;
y = G__43390;
more = G__43391;
continue;
} else {
return com.gfredericks.exact._LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

com.gfredericks.exact._LT__EQ_.cljs$lang$applyTo = (function (seq43381){
var G__43382 = cljs.core.first.call(null,seq43381);
var seq43381__$1 = cljs.core.next.call(null,seq43381);
var G__43383 = cljs.core.first.call(null,seq43381__$1);
var seq43381__$2 = cljs.core.next.call(null,seq43381__$1);
return com.gfredericks.exact._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43382,G__43383,seq43381__$2);
});

com.gfredericks.exact._LT__EQ_.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact._GT__EQ_ = (function com$gfredericks$exact$_GT__EQ_(var_args){
var G__43396 = arguments.length;
switch (G__43396) {
case 1:
return com.gfredericks.exact._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43398 = arguments.length;
var i__42383__auto___43399 = (0);
while(true){
if((i__42383__auto___43399 < len__42382__auto___43398)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43399]));

var G__43400 = (i__42383__auto___43399 + (1));
i__42383__auto___43399 = G__43400;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

com.gfredericks.exact._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return !((com.gfredericks.exact.impl.compare.call(null,x,y) < (0)));
});

com.gfredericks.exact._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(com.gfredericks.exact._GT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__43401 = y;
var G__43402 = cljs.core.first.call(null,more);
var G__43403 = cljs.core.next.call(null,more);
x = G__43401;
y = G__43402;
more = G__43403;
continue;
} else {
return com.gfredericks.exact._GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

com.gfredericks.exact._GT__EQ_.cljs$lang$applyTo = (function (seq43393){
var G__43394 = cljs.core.first.call(null,seq43393);
var seq43393__$1 = cljs.core.next.call(null,seq43393);
var G__43395 = cljs.core.first.call(null,seq43393__$1);
var seq43393__$2 = cljs.core.next.call(null,seq43393__$1);
return com.gfredericks.exact._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43394,G__43395,seq43393__$2);
});

com.gfredericks.exact._GT__EQ_.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact.max = (function com$gfredericks$exact$max(var_args){
var G__43408 = arguments.length;
switch (G__43408) {
case 1:
return com.gfredericks.exact.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43410 = arguments.length;
var i__42383__auto___43411 = (0);
while(true){
if((i__42383__auto___43411 < len__42382__auto___43410)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43411]));

var G__43412 = (i__42383__auto___43411 + (1));
i__42383__auto___43411 = G__43412;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact.max.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

com.gfredericks.exact.max.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(com.gfredericks.exact._GT_.call(null,x,y))){
return x;
} else {
return y;
}
});

com.gfredericks.exact.max.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,com.gfredericks.exact.max,com.gfredericks.exact.max.call(null,x,y),more);
});

com.gfredericks.exact.max.cljs$lang$applyTo = (function (seq43405){
var G__43406 = cljs.core.first.call(null,seq43405);
var seq43405__$1 = cljs.core.next.call(null,seq43405);
var G__43407 = cljs.core.first.call(null,seq43405__$1);
var seq43405__$2 = cljs.core.next.call(null,seq43405__$1);
return com.gfredericks.exact.max.cljs$core$IFn$_invoke$arity$variadic(G__43406,G__43407,seq43405__$2);
});

com.gfredericks.exact.max.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact.min = (function com$gfredericks$exact$min(var_args){
var G__43417 = arguments.length;
switch (G__43417) {
case 1:
return com.gfredericks.exact.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43419 = arguments.length;
var i__42383__auto___43420 = (0);
while(true){
if((i__42383__auto___43420 < len__42382__auto___43419)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43420]));

var G__43421 = (i__42383__auto___43420 + (1));
i__42383__auto___43420 = G__43421;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((2)),(0),null));
return com.gfredericks.exact.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42406__auto__);

}
});

com.gfredericks.exact.min.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

com.gfredericks.exact.min.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(com.gfredericks.exact._LT_.call(null,x,y))){
return x;
} else {
return y;
}
});

com.gfredericks.exact.min.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,com.gfredericks.exact.min,com.gfredericks.exact.min.call(null,x,y),more);
});

com.gfredericks.exact.min.cljs$lang$applyTo = (function (seq43414){
var G__43415 = cljs.core.first.call(null,seq43414);
var seq43414__$1 = cljs.core.next.call(null,seq43414);
var G__43416 = cljs.core.first.call(null,seq43414__$1);
var seq43414__$2 = cljs.core.next.call(null,seq43414__$1);
return com.gfredericks.exact.min.cljs$core$IFn$_invoke$arity$variadic(G__43415,G__43416,seq43414__$2);
});

com.gfredericks.exact.min.cljs$lang$maxFixedArity = (2);

com.gfredericks.exact.min_key = (function com$gfredericks$exact$min_key(var_args){
var G__43429 = arguments.length;
switch (G__43429) {
case 2:
return com.gfredericks.exact.min_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.gfredericks.exact.min_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43431 = arguments.length;
var i__42383__auto___43432 = (0);
while(true){
if((i__42383__auto___43432 < len__42382__auto___43431)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43432]));

var G__43433 = (i__42383__auto___43432 + (1));
i__42383__auto___43432 = G__43433;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((3)),(0),null));
return com.gfredericks.exact.min_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42406__auto__);

}
});

com.gfredericks.exact.min_key.cljs$core$IFn$_invoke$arity$2 = (function (k,x){
return x;
});

com.gfredericks.exact.min_key.cljs$core$IFn$_invoke$arity$3 = (function (k,x,y){
if(cljs.core.truth_(com.gfredericks.exact._LT_.call(null,k.call(null,x),k.call(null,y)))){
return x;
} else {
return y;
}
});

com.gfredericks.exact.min_key.cljs$core$IFn$_invoke$arity$variadic = (function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__43422_SHARP_,p2__43423_SHARP_){
return com.gfredericks.exact.min_key.call(null,k,p1__43422_SHARP_,p2__43423_SHARP_);
}),com.gfredericks.exact.min_key.call(null,k,x,y),more);
});

com.gfredericks.exact.min_key.cljs$lang$applyTo = (function (seq43425){
var G__43426 = cljs.core.first.call(null,seq43425);
var seq43425__$1 = cljs.core.next.call(null,seq43425);
var G__43427 = cljs.core.first.call(null,seq43425__$1);
var seq43425__$2 = cljs.core.next.call(null,seq43425__$1);
var G__43428 = cljs.core.first.call(null,seq43425__$2);
var seq43425__$3 = cljs.core.next.call(null,seq43425__$2);
return com.gfredericks.exact.min_key.cljs$core$IFn$_invoke$arity$variadic(G__43426,G__43427,G__43428,seq43425__$3);
});

com.gfredericks.exact.min_key.cljs$lang$maxFixedArity = (3);

com.gfredericks.exact.max_key = (function com$gfredericks$exact$max_key(var_args){
var G__43441 = arguments.length;
switch (G__43441) {
case 2:
return com.gfredericks.exact.max_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.gfredericks.exact.max_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__42405__auto__ = [];
var len__42382__auto___43443 = arguments.length;
var i__42383__auto___43444 = (0);
while(true){
if((i__42383__auto___43444 < len__42382__auto___43443)){
args_arr__42405__auto__.push((arguments[i__42383__auto___43444]));

var G__43445 = (i__42383__auto___43444 + (1));
i__42383__auto___43444 = G__43445;
continue;
} else {
}
break;
}

var argseq__42406__auto__ = (new cljs.core.IndexedSeq(args_arr__42405__auto__.slice((3)),(0),null));
return com.gfredericks.exact.max_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42406__auto__);

}
});

com.gfredericks.exact.max_key.cljs$core$IFn$_invoke$arity$2 = (function (k,x){
return x;
});

com.gfredericks.exact.max_key.cljs$core$IFn$_invoke$arity$3 = (function (k,x,y){
if(cljs.core.truth_(com.gfredericks.exact._GT_.call(null,k.call(null,x),k.call(null,y)))){
return x;
} else {
return y;
}
});

com.gfredericks.exact.max_key.cljs$core$IFn$_invoke$arity$variadic = (function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__43434_SHARP_,p2__43435_SHARP_){
return com.gfredericks.exact.max_key.call(null,k,p1__43434_SHARP_,p2__43435_SHARP_);
}),com.gfredericks.exact.max_key.call(null,k,x,y),more);
});

com.gfredericks.exact.max_key.cljs$lang$applyTo = (function (seq43437){
var G__43438 = cljs.core.first.call(null,seq43437);
var seq43437__$1 = cljs.core.next.call(null,seq43437);
var G__43439 = cljs.core.first.call(null,seq43437__$1);
var seq43437__$2 = cljs.core.next.call(null,seq43437__$1);
var G__43440 = cljs.core.first.call(null,seq43437__$2);
var seq43437__$3 = cljs.core.next.call(null,seq43437__$2);
return com.gfredericks.exact.max_key.cljs$core$IFn$_invoke$arity$variadic(G__43438,G__43439,G__43440,seq43437__$3);
});

com.gfredericks.exact.max_key.cljs$lang$maxFixedArity = (3);

com.gfredericks.exact.pos_QMARK_ = (function com$gfredericks$exact$pos_QMARK_(x){
return com.gfredericks.exact._LT_.call(null,com.gfredericks.exact.ZERO,x);
});
com.gfredericks.exact.neg_QMARK_ = (function com$gfredericks$exact$neg_QMARK_(x){
return com.gfredericks.exact._LT_.call(null,x,com.gfredericks.exact.ZERO);
});
com.gfredericks.exact.numerator = com.gfredericks.exact.impl.numerator;
com.gfredericks.exact.denominator = com.gfredericks.exact.impl.denominator;
com.gfredericks.exact.integer_QMARK_ = com.gfredericks.exact.impl.integer_QMARK_;
com.gfredericks.exact.ratio_QMARK_ = com.gfredericks.exact.impl.ratio_QMARK_;
com.gfredericks.exact.quot = com.gfredericks.exact.impl.quot;
com.gfredericks.exact.mod = (function com$gfredericks$exact$mod(x,n){
if(cljs.core.truth_(com.gfredericks.exact.pos_QMARK_.call(null,n))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

return com.gfredericks.exact.impl.mod.call(null,x,n);
});
com.gfredericks.exact.rem = (function com$gfredericks$exact$rem(x,n){
if(cljs.core.truth_(com.gfredericks.exact.pos_QMARK_.call(null,n))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

return com.gfredericks.exact.impl.rem.call(null,x,n);
});
com.gfredericks.exact.abs = (function com$gfredericks$exact$abs(x){
var G__43446 = x;
if(cljs.core.truth_(com.gfredericks.exact.neg_QMARK_.call(null,x))){
return com.gfredericks.exact._.call(null,G__43446);
} else {
return G__43446;
}
});
com.gfredericks.exact.even_QMARK_ = (function com$gfredericks$exact$even_QMARK_(n){
return com.gfredericks.exact.impl.even_QMARK_.call(null,n);
});
com.gfredericks.exact.odd_QMARK_ = (function com$gfredericks$exact$odd_QMARK_(n){
return com.gfredericks.exact.impl.odd_QMARK_.call(null,n);
});
com.gfredericks.exact.string__GT_integer = (function com$gfredericks$exact$string__GT_integer(var_args){
var G__43448 = arguments.length;
switch (G__43448) {
case 1:
return com.gfredericks.exact.string__GT_integer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact.string__GT_integer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.gfredericks.exact.string__GT_integer.cljs$core$IFn$_invoke$arity$1 = (function (s){
return com.gfredericks.exact.string__GT_integer.call(null,s,(10));
});

com.gfredericks.exact.string__GT_integer.cljs$core$IFn$_invoke$arity$2 = (function (s,radix){
return com.gfredericks.exact.impl.string__GT_integer.call(null,s,radix);
});

com.gfredericks.exact.string__GT_integer.cljs$lang$maxFixedArity = 2;

com.gfredericks.exact.integer__GT_string = (function com$gfredericks$exact$integer__GT_string(var_args){
var G__43451 = arguments.length;
switch (G__43451) {
case 1:
return com.gfredericks.exact.integer__GT_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.gfredericks.exact.integer__GT_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.gfredericks.exact.integer__GT_string.cljs$core$IFn$_invoke$arity$1 = (function (n){
return com.gfredericks.exact.integer__GT_string.call(null,n,(10));
});

com.gfredericks.exact.integer__GT_string.cljs$core$IFn$_invoke$arity$2 = (function (n,radix){
return com.gfredericks.exact.impl.integer__GT_string.call(null,n,radix);
});

com.gfredericks.exact.integer__GT_string.cljs$lang$maxFixedArity = 2;

com.gfredericks.exact.native__GT_integer = com.gfredericks.exact.impl.native__GT_integer;
com.gfredericks.exact.integer__GT_native = com.gfredericks.exact.impl.integer__GT_native;

//# sourceMappingURL=exact.js.map
