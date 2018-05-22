// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47498 = arguments.length;
switch (G__47498) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async47499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47499 = (function (f,blockable,meta47500){
this.f = f;
this.blockable = blockable;
this.meta47500 = meta47500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47501,meta47500__$1){
var self__ = this;
var _47501__$1 = this;
return (new cljs.core.async.t_cljs$core$async47499(self__.f,self__.blockable,meta47500__$1));
});

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47501){
var self__ = this;
var _47501__$1 = this;
return self__.meta47500;
});

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47499.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47500","meta47500",-1538023849,null)], null);
});

cljs.core.async.t_cljs$core$async47499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47499";

cljs.core.async.t_cljs$core$async47499.cljs$lang$ctorPrWriter = (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async47499");
});

cljs.core.async.__GT_t_cljs$core$async47499 = (function cljs$core$async$__GT_t_cljs$core$async47499(f__$1,blockable__$1,meta47500){
return (new cljs.core.async.t_cljs$core$async47499(f__$1,blockable__$1,meta47500));
});

}

return (new cljs.core.async.t_cljs$core$async47499(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47505 = arguments.length;
switch (G__47505) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47508 = arguments.length;
switch (G__47508) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47511 = arguments.length;
switch (G__47511) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47513 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47513);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47513,ret){
return (function (){
return fn1.call(null,val_47513);
});})(val_47513,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47515 = arguments.length;
switch (G__47515) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__42116__auto___47517 = n;
var x_47518 = (0);
while(true){
if((x_47518 < n__42116__auto___47517)){
(a[x_47518] = (0));

var G__47519 = (x_47518 + (1));
x_47518 = G__47519;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__47520 = (i + (1));
i = G__47520;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47521 = (function (flag,meta47522){
this.flag = flag;
this.meta47522 = meta47522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47523,meta47522__$1){
var self__ = this;
var _47523__$1 = this;
return (new cljs.core.async.t_cljs$core$async47521(self__.flag,meta47522__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47523){
var self__ = this;
var _47523__$1 = this;
return self__.meta47522;
});})(flag))
;

cljs.core.async.t_cljs$core$async47521.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47521.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47522","meta47522",1107917078,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47521";

cljs.core.async.t_cljs$core$async47521.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async47521");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47521 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47521(flag__$1,meta47522){
return (new cljs.core.async.t_cljs$core$async47521(flag__$1,meta47522));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47521(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47524 = (function (flag,cb,meta47525){
this.flag = flag;
this.cb = cb;
this.meta47525 = meta47525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47526,meta47525__$1){
var self__ = this;
var _47526__$1 = this;
return (new cljs.core.async.t_cljs$core$async47524(self__.flag,self__.cb,meta47525__$1));
});

cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47526){
var self__ = this;
var _47526__$1 = this;
return self__.meta47525;
});

cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47525","meta47525",-1825528530,null)], null);
});

cljs.core.async.t_cljs$core$async47524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47524";

cljs.core.async.t_cljs$core$async47524.cljs$lang$ctorPrWriter = (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async47524");
});

cljs.core.async.__GT_t_cljs$core$async47524 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47524(flag__$1,cb__$1,meta47525){
return (new cljs.core.async.t_cljs$core$async47524(flag__$1,cb__$1,meta47525));
});

}

return (new cljs.core.async.t_cljs$core$async47524(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47527_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47527_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47528_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47528_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41071__auto__ = wport;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47529 = (i + (1));
i = G__47529;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41071__auto__ = ret;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__41059__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41059__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41059__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__42357__auto__ = [];
var len__42350__auto___47535 = arguments.length;
var i__42351__auto___47536 = (0);
while(true){
if((i__42351__auto___47536 < len__42350__auto___47535)){
args__42357__auto__.push((arguments[i__42351__auto___47536]));

var G__47537 = (i__42351__auto___47536 + (1));
i__42351__auto___47536 = G__47537;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((1) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42358__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47532){
var map__47533 = p__47532;
var map__47533__$1 = ((((!((map__47533 == null)))?((((map__47533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47533):map__47533);
var opts = map__47533__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47530){
var G__47531 = cljs.core.first.call(null,seq47530);
var seq47530__$1 = cljs.core.next.call(null,seq47530);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47531,seq47530__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47539 = arguments.length;
switch (G__47539) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47438__auto___47585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___47585){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___47585){
return (function (state_47563){
var state_val_47564 = (state_47563[(1)]);
if((state_val_47564 === (7))){
var inst_47559 = (state_47563[(2)]);
var state_47563__$1 = state_47563;
var statearr_47565_47586 = state_47563__$1;
(statearr_47565_47586[(2)] = inst_47559);

(statearr_47565_47586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (1))){
var state_47563__$1 = state_47563;
var statearr_47566_47587 = state_47563__$1;
(statearr_47566_47587[(2)] = null);

(statearr_47566_47587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (4))){
var inst_47542 = (state_47563[(7)]);
var inst_47542__$1 = (state_47563[(2)]);
var inst_47543 = (inst_47542__$1 == null);
var state_47563__$1 = (function (){var statearr_47567 = state_47563;
(statearr_47567[(7)] = inst_47542__$1);

return statearr_47567;
})();
if(cljs.core.truth_(inst_47543)){
var statearr_47568_47588 = state_47563__$1;
(statearr_47568_47588[(1)] = (5));

} else {
var statearr_47569_47589 = state_47563__$1;
(statearr_47569_47589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (13))){
var state_47563__$1 = state_47563;
var statearr_47570_47590 = state_47563__$1;
(statearr_47570_47590[(2)] = null);

(statearr_47570_47590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (6))){
var inst_47542 = (state_47563[(7)]);
var state_47563__$1 = state_47563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47563__$1,(11),to,inst_47542);
} else {
if((state_val_47564 === (3))){
var inst_47561 = (state_47563[(2)]);
var state_47563__$1 = state_47563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47563__$1,inst_47561);
} else {
if((state_val_47564 === (12))){
var state_47563__$1 = state_47563;
var statearr_47571_47591 = state_47563__$1;
(statearr_47571_47591[(2)] = null);

(statearr_47571_47591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (2))){
var state_47563__$1 = state_47563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47563__$1,(4),from);
} else {
if((state_val_47564 === (11))){
var inst_47552 = (state_47563[(2)]);
var state_47563__$1 = state_47563;
if(cljs.core.truth_(inst_47552)){
var statearr_47572_47592 = state_47563__$1;
(statearr_47572_47592[(1)] = (12));

} else {
var statearr_47573_47593 = state_47563__$1;
(statearr_47573_47593[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (9))){
var state_47563__$1 = state_47563;
var statearr_47574_47594 = state_47563__$1;
(statearr_47574_47594[(2)] = null);

(statearr_47574_47594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (5))){
var state_47563__$1 = state_47563;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47575_47595 = state_47563__$1;
(statearr_47575_47595[(1)] = (8));

} else {
var statearr_47576_47596 = state_47563__$1;
(statearr_47576_47596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (14))){
var inst_47557 = (state_47563[(2)]);
var state_47563__$1 = state_47563;
var statearr_47577_47597 = state_47563__$1;
(statearr_47577_47597[(2)] = inst_47557);

(statearr_47577_47597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (10))){
var inst_47549 = (state_47563[(2)]);
var state_47563__$1 = state_47563;
var statearr_47578_47598 = state_47563__$1;
(statearr_47578_47598[(2)] = inst_47549);

(statearr_47578_47598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47564 === (8))){
var inst_47546 = cljs.core.async.close_BANG_.call(null,to);
var state_47563__$1 = state_47563;
var statearr_47579_47599 = state_47563__$1;
(statearr_47579_47599[(2)] = inst_47546);

(statearr_47579_47599[(1)] = (10));


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
});})(c__47438__auto___47585))
;
return ((function (switch__47348__auto__,c__47438__auto___47585){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_47580 = [null,null,null,null,null,null,null,null];
(statearr_47580[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_47580[(1)] = (1));

return statearr_47580;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_47563){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47581){if((e47581 instanceof Object)){
var ex__47352__auto__ = e47581;
var statearr_47582_47600 = state_47563;
(statearr_47582_47600[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47601 = state_47563;
state_47563 = G__47601;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_47563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_47563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___47585))
})();
var state__47440__auto__ = (function (){var statearr_47583 = f__47439__auto__.call(null);
(statearr_47583[(6)] = c__47438__auto___47585);

return statearr_47583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___47585))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__47602){
var vec__47603 = p__47602;
var v = cljs.core.nth.call(null,vec__47603,(0),null);
var p = cljs.core.nth.call(null,vec__47603,(1),null);
var job = vec__47603;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__47438__auto___47774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___47774,res,vec__47603,v,p,job,jobs,results){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___47774,res,vec__47603,v,p,job,jobs,results){
return (function (state_47610){
var state_val_47611 = (state_47610[(1)]);
if((state_val_47611 === (1))){
var state_47610__$1 = state_47610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47610__$1,(2),res,v);
} else {
if((state_val_47611 === (2))){
var inst_47607 = (state_47610[(2)]);
var inst_47608 = cljs.core.async.close_BANG_.call(null,res);
var state_47610__$1 = (function (){var statearr_47612 = state_47610;
(statearr_47612[(7)] = inst_47607);

return statearr_47612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47610__$1,inst_47608);
} else {
return null;
}
}
});})(c__47438__auto___47774,res,vec__47603,v,p,job,jobs,results))
;
return ((function (switch__47348__auto__,c__47438__auto___47774,res,vec__47603,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0 = (function (){
var statearr_47613 = [null,null,null,null,null,null,null,null];
(statearr_47613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__);

(statearr_47613[(1)] = (1));

return statearr_47613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1 = (function (state_47610){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47614){if((e47614 instanceof Object)){
var ex__47352__auto__ = e47614;
var statearr_47615_47775 = state_47610;
(statearr_47615_47775[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47776 = state_47610;
state_47610 = G__47776;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = function(state_47610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1.call(this,state_47610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___47774,res,vec__47603,v,p,job,jobs,results))
})();
var state__47440__auto__ = (function (){var statearr_47616 = f__47439__auto__.call(null);
(statearr_47616[(6)] = c__47438__auto___47774);

return statearr_47616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___47774,res,vec__47603,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47617){
var vec__47618 = p__47617;
var v = cljs.core.nth.call(null,vec__47618,(0),null);
var p = cljs.core.nth.call(null,vec__47618,(1),null);
var job = vec__47618;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__42116__auto___47777 = n;
var __47778 = (0);
while(true){
if((__47778 < n__42116__auto___47777)){
var G__47621_47779 = type;
var G__47621_47780__$1 = (((G__47621_47779 instanceof cljs.core.Keyword))?G__47621_47779.fqn:null);
switch (G__47621_47780__$1) {
case "compute":
var c__47438__auto___47782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47778,c__47438__auto___47782,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (__47778,c__47438__auto___47782,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async){
return (function (state_47634){
var state_val_47635 = (state_47634[(1)]);
if((state_val_47635 === (1))){
var state_47634__$1 = state_47634;
var statearr_47636_47783 = state_47634__$1;
(statearr_47636_47783[(2)] = null);

(statearr_47636_47783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (2))){
var state_47634__$1 = state_47634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47634__$1,(4),jobs);
} else {
if((state_val_47635 === (3))){
var inst_47632 = (state_47634[(2)]);
var state_47634__$1 = state_47634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47634__$1,inst_47632);
} else {
if((state_val_47635 === (4))){
var inst_47624 = (state_47634[(2)]);
var inst_47625 = process.call(null,inst_47624);
var state_47634__$1 = state_47634;
if(cljs.core.truth_(inst_47625)){
var statearr_47637_47784 = state_47634__$1;
(statearr_47637_47784[(1)] = (5));

} else {
var statearr_47638_47785 = state_47634__$1;
(statearr_47638_47785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (5))){
var state_47634__$1 = state_47634;
var statearr_47639_47786 = state_47634__$1;
(statearr_47639_47786[(2)] = null);

(statearr_47639_47786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (6))){
var state_47634__$1 = state_47634;
var statearr_47640_47787 = state_47634__$1;
(statearr_47640_47787[(2)] = null);

(statearr_47640_47787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (7))){
var inst_47630 = (state_47634[(2)]);
var state_47634__$1 = state_47634;
var statearr_47641_47788 = state_47634__$1;
(statearr_47641_47788[(2)] = inst_47630);

(statearr_47641_47788[(1)] = (3));


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
});})(__47778,c__47438__auto___47782,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async))
;
return ((function (__47778,switch__47348__auto__,c__47438__auto___47782,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0 = (function (){
var statearr_47642 = [null,null,null,null,null,null,null];
(statearr_47642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__);

(statearr_47642[(1)] = (1));

return statearr_47642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1 = (function (state_47634){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47643){if((e47643 instanceof Object)){
var ex__47352__auto__ = e47643;
var statearr_47644_47789 = state_47634;
(statearr_47644_47789[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47790 = state_47634;
state_47634 = G__47790;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = function(state_47634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1.call(this,state_47634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__;
})()
;})(__47778,switch__47348__auto__,c__47438__auto___47782,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async))
})();
var state__47440__auto__ = (function (){var statearr_47645 = f__47439__auto__.call(null);
(statearr_47645[(6)] = c__47438__auto___47782);

return statearr_47645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(__47778,c__47438__auto___47782,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async))
);


break;
case "async":
var c__47438__auto___47791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47778,c__47438__auto___47791,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (__47778,c__47438__auto___47791,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async){
return (function (state_47658){
var state_val_47659 = (state_47658[(1)]);
if((state_val_47659 === (1))){
var state_47658__$1 = state_47658;
var statearr_47660_47792 = state_47658__$1;
(statearr_47660_47792[(2)] = null);

(statearr_47660_47792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (2))){
var state_47658__$1 = state_47658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47658__$1,(4),jobs);
} else {
if((state_val_47659 === (3))){
var inst_47656 = (state_47658[(2)]);
var state_47658__$1 = state_47658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47658__$1,inst_47656);
} else {
if((state_val_47659 === (4))){
var inst_47648 = (state_47658[(2)]);
var inst_47649 = async.call(null,inst_47648);
var state_47658__$1 = state_47658;
if(cljs.core.truth_(inst_47649)){
var statearr_47661_47793 = state_47658__$1;
(statearr_47661_47793[(1)] = (5));

} else {
var statearr_47662_47794 = state_47658__$1;
(statearr_47662_47794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (5))){
var state_47658__$1 = state_47658;
var statearr_47663_47795 = state_47658__$1;
(statearr_47663_47795[(2)] = null);

(statearr_47663_47795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (6))){
var state_47658__$1 = state_47658;
var statearr_47664_47796 = state_47658__$1;
(statearr_47664_47796[(2)] = null);

(statearr_47664_47796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (7))){
var inst_47654 = (state_47658[(2)]);
var state_47658__$1 = state_47658;
var statearr_47665_47797 = state_47658__$1;
(statearr_47665_47797[(2)] = inst_47654);

(statearr_47665_47797[(1)] = (3));


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
});})(__47778,c__47438__auto___47791,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async))
;
return ((function (__47778,switch__47348__auto__,c__47438__auto___47791,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0 = (function (){
var statearr_47666 = [null,null,null,null,null,null,null];
(statearr_47666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__);

(statearr_47666[(1)] = (1));

return statearr_47666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1 = (function (state_47658){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47667){if((e47667 instanceof Object)){
var ex__47352__auto__ = e47667;
var statearr_47668_47798 = state_47658;
(statearr_47668_47798[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47799 = state_47658;
state_47658 = G__47799;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = function(state_47658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1.call(this,state_47658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__;
})()
;})(__47778,switch__47348__auto__,c__47438__auto___47791,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async))
})();
var state__47440__auto__ = (function (){var statearr_47669 = f__47439__auto__.call(null);
(statearr_47669[(6)] = c__47438__auto___47791);

return statearr_47669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(__47778,c__47438__auto___47791,G__47621_47779,G__47621_47780__$1,n__42116__auto___47777,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47621_47780__$1)].join('')));

}

var G__47800 = (__47778 + (1));
__47778 = G__47800;
continue;
} else {
}
break;
}

var c__47438__auto___47801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___47801,jobs,results,process,async){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___47801,jobs,results,process,async){
return (function (state_47691){
var state_val_47692 = (state_47691[(1)]);
if((state_val_47692 === (1))){
var state_47691__$1 = state_47691;
var statearr_47693_47802 = state_47691__$1;
(statearr_47693_47802[(2)] = null);

(statearr_47693_47802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (2))){
var state_47691__$1 = state_47691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47691__$1,(4),from);
} else {
if((state_val_47692 === (3))){
var inst_47689 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47691__$1,inst_47689);
} else {
if((state_val_47692 === (4))){
var inst_47672 = (state_47691[(7)]);
var inst_47672__$1 = (state_47691[(2)]);
var inst_47673 = (inst_47672__$1 == null);
var state_47691__$1 = (function (){var statearr_47694 = state_47691;
(statearr_47694[(7)] = inst_47672__$1);

return statearr_47694;
})();
if(cljs.core.truth_(inst_47673)){
var statearr_47695_47803 = state_47691__$1;
(statearr_47695_47803[(1)] = (5));

} else {
var statearr_47696_47804 = state_47691__$1;
(statearr_47696_47804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (5))){
var inst_47675 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47691__$1 = state_47691;
var statearr_47697_47805 = state_47691__$1;
(statearr_47697_47805[(2)] = inst_47675);

(statearr_47697_47805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (6))){
var inst_47672 = (state_47691[(7)]);
var inst_47677 = (state_47691[(8)]);
var inst_47677__$1 = cljs.core.async.chan.call(null,(1));
var inst_47678 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47679 = [inst_47672,inst_47677__$1];
var inst_47680 = (new cljs.core.PersistentVector(null,2,(5),inst_47678,inst_47679,null));
var state_47691__$1 = (function (){var statearr_47698 = state_47691;
(statearr_47698[(8)] = inst_47677__$1);

return statearr_47698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47691__$1,(8),jobs,inst_47680);
} else {
if((state_val_47692 === (7))){
var inst_47687 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
var statearr_47699_47806 = state_47691__$1;
(statearr_47699_47806[(2)] = inst_47687);

(statearr_47699_47806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (8))){
var inst_47677 = (state_47691[(8)]);
var inst_47682 = (state_47691[(2)]);
var state_47691__$1 = (function (){var statearr_47700 = state_47691;
(statearr_47700[(9)] = inst_47682);

return statearr_47700;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47691__$1,(9),results,inst_47677);
} else {
if((state_val_47692 === (9))){
var inst_47684 = (state_47691[(2)]);
var state_47691__$1 = (function (){var statearr_47701 = state_47691;
(statearr_47701[(10)] = inst_47684);

return statearr_47701;
})();
var statearr_47702_47807 = state_47691__$1;
(statearr_47702_47807[(2)] = null);

(statearr_47702_47807[(1)] = (2));


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
});})(c__47438__auto___47801,jobs,results,process,async))
;
return ((function (switch__47348__auto__,c__47438__auto___47801,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0 = (function (){
var statearr_47703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__);

(statearr_47703[(1)] = (1));

return statearr_47703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1 = (function (state_47691){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47704){if((e47704 instanceof Object)){
var ex__47352__auto__ = e47704;
var statearr_47705_47808 = state_47691;
(statearr_47705_47808[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47809 = state_47691;
state_47691 = G__47809;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = function(state_47691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1.call(this,state_47691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___47801,jobs,results,process,async))
})();
var state__47440__auto__ = (function (){var statearr_47706 = f__47439__auto__.call(null);
(statearr_47706[(6)] = c__47438__auto___47801);

return statearr_47706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___47801,jobs,results,process,async))
);


var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__,jobs,results,process,async){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__,jobs,results,process,async){
return (function (state_47744){
var state_val_47745 = (state_47744[(1)]);
if((state_val_47745 === (7))){
var inst_47740 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47746_47810 = state_47744__$1;
(statearr_47746_47810[(2)] = inst_47740);

(statearr_47746_47810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (20))){
var state_47744__$1 = state_47744;
var statearr_47747_47811 = state_47744__$1;
(statearr_47747_47811[(2)] = null);

(statearr_47747_47811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (1))){
var state_47744__$1 = state_47744;
var statearr_47748_47812 = state_47744__$1;
(statearr_47748_47812[(2)] = null);

(statearr_47748_47812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (4))){
var inst_47709 = (state_47744[(7)]);
var inst_47709__$1 = (state_47744[(2)]);
var inst_47710 = (inst_47709__$1 == null);
var state_47744__$1 = (function (){var statearr_47749 = state_47744;
(statearr_47749[(7)] = inst_47709__$1);

return statearr_47749;
})();
if(cljs.core.truth_(inst_47710)){
var statearr_47750_47813 = state_47744__$1;
(statearr_47750_47813[(1)] = (5));

} else {
var statearr_47751_47814 = state_47744__$1;
(statearr_47751_47814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (15))){
var inst_47722 = (state_47744[(8)]);
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47744__$1,(18),to,inst_47722);
} else {
if((state_val_47745 === (21))){
var inst_47735 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47752_47815 = state_47744__$1;
(statearr_47752_47815[(2)] = inst_47735);

(statearr_47752_47815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (13))){
var inst_47737 = (state_47744[(2)]);
var state_47744__$1 = (function (){var statearr_47753 = state_47744;
(statearr_47753[(9)] = inst_47737);

return statearr_47753;
})();
var statearr_47754_47816 = state_47744__$1;
(statearr_47754_47816[(2)] = null);

(statearr_47754_47816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (6))){
var inst_47709 = (state_47744[(7)]);
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47744__$1,(11),inst_47709);
} else {
if((state_val_47745 === (17))){
var inst_47730 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
if(cljs.core.truth_(inst_47730)){
var statearr_47755_47817 = state_47744__$1;
(statearr_47755_47817[(1)] = (19));

} else {
var statearr_47756_47818 = state_47744__$1;
(statearr_47756_47818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (3))){
var inst_47742 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47744__$1,inst_47742);
} else {
if((state_val_47745 === (12))){
var inst_47719 = (state_47744[(10)]);
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47744__$1,(14),inst_47719);
} else {
if((state_val_47745 === (2))){
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47744__$1,(4),results);
} else {
if((state_val_47745 === (19))){
var state_47744__$1 = state_47744;
var statearr_47757_47819 = state_47744__$1;
(statearr_47757_47819[(2)] = null);

(statearr_47757_47819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (11))){
var inst_47719 = (state_47744[(2)]);
var state_47744__$1 = (function (){var statearr_47758 = state_47744;
(statearr_47758[(10)] = inst_47719);

return statearr_47758;
})();
var statearr_47759_47820 = state_47744__$1;
(statearr_47759_47820[(2)] = null);

(statearr_47759_47820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (9))){
var state_47744__$1 = state_47744;
var statearr_47760_47821 = state_47744__$1;
(statearr_47760_47821[(2)] = null);

(statearr_47760_47821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (5))){
var state_47744__$1 = state_47744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47761_47822 = state_47744__$1;
(statearr_47761_47822[(1)] = (8));

} else {
var statearr_47762_47823 = state_47744__$1;
(statearr_47762_47823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (14))){
var inst_47724 = (state_47744[(11)]);
var inst_47722 = (state_47744[(8)]);
var inst_47722__$1 = (state_47744[(2)]);
var inst_47723 = (inst_47722__$1 == null);
var inst_47724__$1 = cljs.core.not.call(null,inst_47723);
var state_47744__$1 = (function (){var statearr_47763 = state_47744;
(statearr_47763[(11)] = inst_47724__$1);

(statearr_47763[(8)] = inst_47722__$1);

return statearr_47763;
})();
if(inst_47724__$1){
var statearr_47764_47824 = state_47744__$1;
(statearr_47764_47824[(1)] = (15));

} else {
var statearr_47765_47825 = state_47744__$1;
(statearr_47765_47825[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (16))){
var inst_47724 = (state_47744[(11)]);
var state_47744__$1 = state_47744;
var statearr_47766_47826 = state_47744__$1;
(statearr_47766_47826[(2)] = inst_47724);

(statearr_47766_47826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (10))){
var inst_47716 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47767_47827 = state_47744__$1;
(statearr_47767_47827[(2)] = inst_47716);

(statearr_47767_47827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (18))){
var inst_47727 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47768_47828 = state_47744__$1;
(statearr_47768_47828[(2)] = inst_47727);

(statearr_47768_47828[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (8))){
var inst_47713 = cljs.core.async.close_BANG_.call(null,to);
var state_47744__$1 = state_47744;
var statearr_47769_47829 = state_47744__$1;
(statearr_47769_47829[(2)] = inst_47713);

(statearr_47769_47829[(1)] = (10));


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
});})(c__47438__auto__,jobs,results,process,async))
;
return ((function (switch__47348__auto__,c__47438__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0 = (function (){
var statearr_47770 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__);

(statearr_47770[(1)] = (1));

return statearr_47770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1 = (function (state_47744){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47771){if((e47771 instanceof Object)){
var ex__47352__auto__ = e47771;
var statearr_47772_47830 = state_47744;
(statearr_47772_47830[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47831 = state_47744;
state_47744 = G__47831;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__ = function(state_47744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1.call(this,state_47744);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__,jobs,results,process,async))
})();
var state__47440__auto__ = (function (){var statearr_47773 = f__47439__auto__.call(null);
(statearr_47773[(6)] = c__47438__auto__);

return statearr_47773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__,jobs,results,process,async))
);

return c__47438__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47833 = arguments.length;
switch (G__47833) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47836 = arguments.length;
switch (G__47836) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47839 = arguments.length;
switch (G__47839) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__47438__auto___47888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___47888,tc,fc){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___47888,tc,fc){
return (function (state_47865){
var state_val_47866 = (state_47865[(1)]);
if((state_val_47866 === (7))){
var inst_47861 = (state_47865[(2)]);
var state_47865__$1 = state_47865;
var statearr_47867_47889 = state_47865__$1;
(statearr_47867_47889[(2)] = inst_47861);

(statearr_47867_47889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (1))){
var state_47865__$1 = state_47865;
var statearr_47868_47890 = state_47865__$1;
(statearr_47868_47890[(2)] = null);

(statearr_47868_47890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (4))){
var inst_47842 = (state_47865[(7)]);
var inst_47842__$1 = (state_47865[(2)]);
var inst_47843 = (inst_47842__$1 == null);
var state_47865__$1 = (function (){var statearr_47869 = state_47865;
(statearr_47869[(7)] = inst_47842__$1);

return statearr_47869;
})();
if(cljs.core.truth_(inst_47843)){
var statearr_47870_47891 = state_47865__$1;
(statearr_47870_47891[(1)] = (5));

} else {
var statearr_47871_47892 = state_47865__$1;
(statearr_47871_47892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (13))){
var state_47865__$1 = state_47865;
var statearr_47872_47893 = state_47865__$1;
(statearr_47872_47893[(2)] = null);

(statearr_47872_47893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (6))){
var inst_47842 = (state_47865[(7)]);
var inst_47848 = p.call(null,inst_47842);
var state_47865__$1 = state_47865;
if(cljs.core.truth_(inst_47848)){
var statearr_47873_47894 = state_47865__$1;
(statearr_47873_47894[(1)] = (9));

} else {
var statearr_47874_47895 = state_47865__$1;
(statearr_47874_47895[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (3))){
var inst_47863 = (state_47865[(2)]);
var state_47865__$1 = state_47865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47865__$1,inst_47863);
} else {
if((state_val_47866 === (12))){
var state_47865__$1 = state_47865;
var statearr_47875_47896 = state_47865__$1;
(statearr_47875_47896[(2)] = null);

(statearr_47875_47896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (2))){
var state_47865__$1 = state_47865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47865__$1,(4),ch);
} else {
if((state_val_47866 === (11))){
var inst_47842 = (state_47865[(7)]);
var inst_47852 = (state_47865[(2)]);
var state_47865__$1 = state_47865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47865__$1,(8),inst_47852,inst_47842);
} else {
if((state_val_47866 === (9))){
var state_47865__$1 = state_47865;
var statearr_47876_47897 = state_47865__$1;
(statearr_47876_47897[(2)] = tc);

(statearr_47876_47897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (5))){
var inst_47845 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47846 = cljs.core.async.close_BANG_.call(null,fc);
var state_47865__$1 = (function (){var statearr_47877 = state_47865;
(statearr_47877[(8)] = inst_47845);

return statearr_47877;
})();
var statearr_47878_47898 = state_47865__$1;
(statearr_47878_47898[(2)] = inst_47846);

(statearr_47878_47898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (14))){
var inst_47859 = (state_47865[(2)]);
var state_47865__$1 = state_47865;
var statearr_47879_47899 = state_47865__$1;
(statearr_47879_47899[(2)] = inst_47859);

(statearr_47879_47899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (10))){
var state_47865__$1 = state_47865;
var statearr_47880_47900 = state_47865__$1;
(statearr_47880_47900[(2)] = fc);

(statearr_47880_47900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47866 === (8))){
var inst_47854 = (state_47865[(2)]);
var state_47865__$1 = state_47865;
if(cljs.core.truth_(inst_47854)){
var statearr_47881_47901 = state_47865__$1;
(statearr_47881_47901[(1)] = (12));

} else {
var statearr_47882_47902 = state_47865__$1;
(statearr_47882_47902[(1)] = (13));

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
});})(c__47438__auto___47888,tc,fc))
;
return ((function (switch__47348__auto__,c__47438__auto___47888,tc,fc){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_47883 = [null,null,null,null,null,null,null,null,null];
(statearr_47883[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_47883[(1)] = (1));

return statearr_47883;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_47865){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47884){if((e47884 instanceof Object)){
var ex__47352__auto__ = e47884;
var statearr_47885_47903 = state_47865;
(statearr_47885_47903[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47904 = state_47865;
state_47865 = G__47904;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_47865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_47865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___47888,tc,fc))
})();
var state__47440__auto__ = (function (){var statearr_47886 = f__47439__auto__.call(null);
(statearr_47886[(6)] = c__47438__auto___47888);

return statearr_47886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___47888,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__){
return (function (state_47925){
var state_val_47926 = (state_47925[(1)]);
if((state_val_47926 === (7))){
var inst_47921 = (state_47925[(2)]);
var state_47925__$1 = state_47925;
var statearr_47927_47945 = state_47925__$1;
(statearr_47927_47945[(2)] = inst_47921);

(statearr_47927_47945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (1))){
var inst_47905 = init;
var state_47925__$1 = (function (){var statearr_47928 = state_47925;
(statearr_47928[(7)] = inst_47905);

return statearr_47928;
})();
var statearr_47929_47946 = state_47925__$1;
(statearr_47929_47946[(2)] = null);

(statearr_47929_47946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (4))){
var inst_47908 = (state_47925[(8)]);
var inst_47908__$1 = (state_47925[(2)]);
var inst_47909 = (inst_47908__$1 == null);
var state_47925__$1 = (function (){var statearr_47930 = state_47925;
(statearr_47930[(8)] = inst_47908__$1);

return statearr_47930;
})();
if(cljs.core.truth_(inst_47909)){
var statearr_47931_47947 = state_47925__$1;
(statearr_47931_47947[(1)] = (5));

} else {
var statearr_47932_47948 = state_47925__$1;
(statearr_47932_47948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (6))){
var inst_47912 = (state_47925[(9)]);
var inst_47905 = (state_47925[(7)]);
var inst_47908 = (state_47925[(8)]);
var inst_47912__$1 = f.call(null,inst_47905,inst_47908);
var inst_47913 = cljs.core.reduced_QMARK_.call(null,inst_47912__$1);
var state_47925__$1 = (function (){var statearr_47933 = state_47925;
(statearr_47933[(9)] = inst_47912__$1);

return statearr_47933;
})();
if(inst_47913){
var statearr_47934_47949 = state_47925__$1;
(statearr_47934_47949[(1)] = (8));

} else {
var statearr_47935_47950 = state_47925__$1;
(statearr_47935_47950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (3))){
var inst_47923 = (state_47925[(2)]);
var state_47925__$1 = state_47925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47925__$1,inst_47923);
} else {
if((state_val_47926 === (2))){
var state_47925__$1 = state_47925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47925__$1,(4),ch);
} else {
if((state_val_47926 === (9))){
var inst_47912 = (state_47925[(9)]);
var inst_47905 = inst_47912;
var state_47925__$1 = (function (){var statearr_47936 = state_47925;
(statearr_47936[(7)] = inst_47905);

return statearr_47936;
})();
var statearr_47937_47951 = state_47925__$1;
(statearr_47937_47951[(2)] = null);

(statearr_47937_47951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (5))){
var inst_47905 = (state_47925[(7)]);
var state_47925__$1 = state_47925;
var statearr_47938_47952 = state_47925__$1;
(statearr_47938_47952[(2)] = inst_47905);

(statearr_47938_47952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (10))){
var inst_47919 = (state_47925[(2)]);
var state_47925__$1 = state_47925;
var statearr_47939_47953 = state_47925__$1;
(statearr_47939_47953[(2)] = inst_47919);

(statearr_47939_47953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (8))){
var inst_47912 = (state_47925[(9)]);
var inst_47915 = cljs.core.deref.call(null,inst_47912);
var state_47925__$1 = state_47925;
var statearr_47940_47954 = state_47925__$1;
(statearr_47940_47954[(2)] = inst_47915);

(statearr_47940_47954[(1)] = (10));


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
});})(c__47438__auto__))
;
return ((function (switch__47348__auto__,c__47438__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__47349__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47349__auto____0 = (function (){
var statearr_47941 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47941[(0)] = cljs$core$async$reduce_$_state_machine__47349__auto__);

(statearr_47941[(1)] = (1));

return statearr_47941;
});
var cljs$core$async$reduce_$_state_machine__47349__auto____1 = (function (state_47925){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47942){if((e47942 instanceof Object)){
var ex__47352__auto__ = e47942;
var statearr_47943_47955 = state_47925;
(statearr_47943_47955[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47956 = state_47925;
state_47925 = G__47956;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47349__auto__ = function(state_47925){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47349__auto____1.call(this,state_47925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47349__auto____0;
cljs$core$async$reduce_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47349__auto____1;
return cljs$core$async$reduce_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__))
})();
var state__47440__auto__ = (function (){var statearr_47944 = f__47439__auto__.call(null);
(statearr_47944[(6)] = c__47438__auto__);

return statearr_47944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__))
);

return c__47438__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__,f__$1){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__,f__$1){
return (function (state_47962){
var state_val_47963 = (state_47962[(1)]);
if((state_val_47963 === (1))){
var inst_47957 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47962__$1 = state_47962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47962__$1,(2),inst_47957);
} else {
if((state_val_47963 === (2))){
var inst_47959 = (state_47962[(2)]);
var inst_47960 = f__$1.call(null,inst_47959);
var state_47962__$1 = state_47962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47962__$1,inst_47960);
} else {
return null;
}
}
});})(c__47438__auto__,f__$1))
;
return ((function (switch__47348__auto__,c__47438__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__47349__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47349__auto____0 = (function (){
var statearr_47964 = [null,null,null,null,null,null,null];
(statearr_47964[(0)] = cljs$core$async$transduce_$_state_machine__47349__auto__);

(statearr_47964[(1)] = (1));

return statearr_47964;
});
var cljs$core$async$transduce_$_state_machine__47349__auto____1 = (function (state_47962){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e47965){if((e47965 instanceof Object)){
var ex__47352__auto__ = e47965;
var statearr_47966_47968 = state_47962;
(statearr_47966_47968[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47969 = state_47962;
state_47962 = G__47969;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47349__auto__ = function(state_47962){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47349__auto____1.call(this,state_47962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47349__auto____0;
cljs$core$async$transduce_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47349__auto____1;
return cljs$core$async$transduce_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__,f__$1))
})();
var state__47440__auto__ = (function (){var statearr_47967 = f__47439__auto__.call(null);
(statearr_47967[(6)] = c__47438__auto__);

return statearr_47967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__,f__$1))
);

return c__47438__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47971 = arguments.length;
switch (G__47971) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__){
return (function (state_47996){
var state_val_47997 = (state_47996[(1)]);
if((state_val_47997 === (7))){
var inst_47978 = (state_47996[(2)]);
var state_47996__$1 = state_47996;
var statearr_47998_48019 = state_47996__$1;
(statearr_47998_48019[(2)] = inst_47978);

(statearr_47998_48019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (1))){
var inst_47972 = cljs.core.seq.call(null,coll);
var inst_47973 = inst_47972;
var state_47996__$1 = (function (){var statearr_47999 = state_47996;
(statearr_47999[(7)] = inst_47973);

return statearr_47999;
})();
var statearr_48000_48020 = state_47996__$1;
(statearr_48000_48020[(2)] = null);

(statearr_48000_48020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (4))){
var inst_47973 = (state_47996[(7)]);
var inst_47976 = cljs.core.first.call(null,inst_47973);
var state_47996__$1 = state_47996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47996__$1,(7),ch,inst_47976);
} else {
if((state_val_47997 === (13))){
var inst_47990 = (state_47996[(2)]);
var state_47996__$1 = state_47996;
var statearr_48001_48021 = state_47996__$1;
(statearr_48001_48021[(2)] = inst_47990);

(statearr_48001_48021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (6))){
var inst_47981 = (state_47996[(2)]);
var state_47996__$1 = state_47996;
if(cljs.core.truth_(inst_47981)){
var statearr_48002_48022 = state_47996__$1;
(statearr_48002_48022[(1)] = (8));

} else {
var statearr_48003_48023 = state_47996__$1;
(statearr_48003_48023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (3))){
var inst_47994 = (state_47996[(2)]);
var state_47996__$1 = state_47996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47996__$1,inst_47994);
} else {
if((state_val_47997 === (12))){
var state_47996__$1 = state_47996;
var statearr_48004_48024 = state_47996__$1;
(statearr_48004_48024[(2)] = null);

(statearr_48004_48024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (2))){
var inst_47973 = (state_47996[(7)]);
var state_47996__$1 = state_47996;
if(cljs.core.truth_(inst_47973)){
var statearr_48005_48025 = state_47996__$1;
(statearr_48005_48025[(1)] = (4));

} else {
var statearr_48006_48026 = state_47996__$1;
(statearr_48006_48026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (11))){
var inst_47987 = cljs.core.async.close_BANG_.call(null,ch);
var state_47996__$1 = state_47996;
var statearr_48007_48027 = state_47996__$1;
(statearr_48007_48027[(2)] = inst_47987);

(statearr_48007_48027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (9))){
var state_47996__$1 = state_47996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48008_48028 = state_47996__$1;
(statearr_48008_48028[(1)] = (11));

} else {
var statearr_48009_48029 = state_47996__$1;
(statearr_48009_48029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (5))){
var inst_47973 = (state_47996[(7)]);
var state_47996__$1 = state_47996;
var statearr_48010_48030 = state_47996__$1;
(statearr_48010_48030[(2)] = inst_47973);

(statearr_48010_48030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (10))){
var inst_47992 = (state_47996[(2)]);
var state_47996__$1 = state_47996;
var statearr_48011_48031 = state_47996__$1;
(statearr_48011_48031[(2)] = inst_47992);

(statearr_48011_48031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47997 === (8))){
var inst_47973 = (state_47996[(7)]);
var inst_47983 = cljs.core.next.call(null,inst_47973);
var inst_47973__$1 = inst_47983;
var state_47996__$1 = (function (){var statearr_48012 = state_47996;
(statearr_48012[(7)] = inst_47973__$1);

return statearr_48012;
})();
var statearr_48013_48032 = state_47996__$1;
(statearr_48013_48032[(2)] = null);

(statearr_48013_48032[(1)] = (2));


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
});})(c__47438__auto__))
;
return ((function (switch__47348__auto__,c__47438__auto__){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_48014 = [null,null,null,null,null,null,null,null];
(statearr_48014[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_48014[(1)] = (1));

return statearr_48014;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_47996){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_47996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e48015){if((e48015 instanceof Object)){
var ex__47352__auto__ = e48015;
var statearr_48016_48033 = state_47996;
(statearr_48016_48033[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48034 = state_47996;
state_47996 = G__48034;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_47996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_47996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__))
})();
var state__47440__auto__ = (function (){var statearr_48017 = f__47439__auto__.call(null);
(statearr_48017[(6)] = c__47438__auto__);

return statearr_48017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__))
);

return c__47438__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__41804__auto__ = (((_ == null))?null:_);
var m__41805__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,_);
} else {
var m__41805__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__41804__auto__ = (((m == null))?null:m);
var m__41805__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__41805__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__41804__auto__ = (((m == null))?null:m);
var m__41805__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,m,ch);
} else {
var m__41805__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__41804__auto__ = (((m == null))?null:m);
var m__41805__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,m);
} else {
var m__41805__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48035 = (function (ch,cs,meta48036){
this.ch = ch;
this.cs = cs;
this.meta48036 = meta48036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48037,meta48036__$1){
var self__ = this;
var _48037__$1 = this;
return (new cljs.core.async.t_cljs$core$async48035(self__.ch,self__.cs,meta48036__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48037){
var self__ = this;
var _48037__$1 = this;
return self__.meta48036;
});})(cs))
;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48035.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48035.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48036","meta48036",984892390,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48035";

cljs.core.async.t_cljs$core$async48035.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async48035");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48035 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48035(ch__$1,cs__$1,meta48036){
return (new cljs.core.async.t_cljs$core$async48035(ch__$1,cs__$1,meta48036));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48035(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__47438__auto___48257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___48257,cs,m,dchan,dctr,done){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___48257,cs,m,dchan,dctr,done){
return (function (state_48172){
var state_val_48173 = (state_48172[(1)]);
if((state_val_48173 === (7))){
var inst_48168 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48174_48258 = state_48172__$1;
(statearr_48174_48258[(2)] = inst_48168);

(statearr_48174_48258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (20))){
var inst_48071 = (state_48172[(7)]);
var inst_48083 = cljs.core.first.call(null,inst_48071);
var inst_48084 = cljs.core.nth.call(null,inst_48083,(0),null);
var inst_48085 = cljs.core.nth.call(null,inst_48083,(1),null);
var state_48172__$1 = (function (){var statearr_48175 = state_48172;
(statearr_48175[(8)] = inst_48084);

return statearr_48175;
})();
if(cljs.core.truth_(inst_48085)){
var statearr_48176_48259 = state_48172__$1;
(statearr_48176_48259[(1)] = (22));

} else {
var statearr_48177_48260 = state_48172__$1;
(statearr_48177_48260[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (27))){
var inst_48120 = (state_48172[(9)]);
var inst_48115 = (state_48172[(10)]);
var inst_48040 = (state_48172[(11)]);
var inst_48113 = (state_48172[(12)]);
var inst_48120__$1 = cljs.core._nth.call(null,inst_48113,inst_48115);
var inst_48121 = cljs.core.async.put_BANG_.call(null,inst_48120__$1,inst_48040,done);
var state_48172__$1 = (function (){var statearr_48178 = state_48172;
(statearr_48178[(9)] = inst_48120__$1);

return statearr_48178;
})();
if(cljs.core.truth_(inst_48121)){
var statearr_48179_48261 = state_48172__$1;
(statearr_48179_48261[(1)] = (30));

} else {
var statearr_48180_48262 = state_48172__$1;
(statearr_48180_48262[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (1))){
var state_48172__$1 = state_48172;
var statearr_48181_48263 = state_48172__$1;
(statearr_48181_48263[(2)] = null);

(statearr_48181_48263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (24))){
var inst_48071 = (state_48172[(7)]);
var inst_48090 = (state_48172[(2)]);
var inst_48091 = cljs.core.next.call(null,inst_48071);
var inst_48049 = inst_48091;
var inst_48050 = null;
var inst_48051 = (0);
var inst_48052 = (0);
var state_48172__$1 = (function (){var statearr_48182 = state_48172;
(statearr_48182[(13)] = inst_48051);

(statearr_48182[(14)] = inst_48050);

(statearr_48182[(15)] = inst_48052);

(statearr_48182[(16)] = inst_48049);

(statearr_48182[(17)] = inst_48090);

return statearr_48182;
})();
var statearr_48183_48264 = state_48172__$1;
(statearr_48183_48264[(2)] = null);

(statearr_48183_48264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (39))){
var state_48172__$1 = state_48172;
var statearr_48187_48265 = state_48172__$1;
(statearr_48187_48265[(2)] = null);

(statearr_48187_48265[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (4))){
var inst_48040 = (state_48172[(11)]);
var inst_48040__$1 = (state_48172[(2)]);
var inst_48041 = (inst_48040__$1 == null);
var state_48172__$1 = (function (){var statearr_48188 = state_48172;
(statearr_48188[(11)] = inst_48040__$1);

return statearr_48188;
})();
if(cljs.core.truth_(inst_48041)){
var statearr_48189_48266 = state_48172__$1;
(statearr_48189_48266[(1)] = (5));

} else {
var statearr_48190_48267 = state_48172__$1;
(statearr_48190_48267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (15))){
var inst_48051 = (state_48172[(13)]);
var inst_48050 = (state_48172[(14)]);
var inst_48052 = (state_48172[(15)]);
var inst_48049 = (state_48172[(16)]);
var inst_48067 = (state_48172[(2)]);
var inst_48068 = (inst_48052 + (1));
var tmp48184 = inst_48051;
var tmp48185 = inst_48050;
var tmp48186 = inst_48049;
var inst_48049__$1 = tmp48186;
var inst_48050__$1 = tmp48185;
var inst_48051__$1 = tmp48184;
var inst_48052__$1 = inst_48068;
var state_48172__$1 = (function (){var statearr_48191 = state_48172;
(statearr_48191[(13)] = inst_48051__$1);

(statearr_48191[(14)] = inst_48050__$1);

(statearr_48191[(18)] = inst_48067);

(statearr_48191[(15)] = inst_48052__$1);

(statearr_48191[(16)] = inst_48049__$1);

return statearr_48191;
})();
var statearr_48192_48268 = state_48172__$1;
(statearr_48192_48268[(2)] = null);

(statearr_48192_48268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (21))){
var inst_48094 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48196_48269 = state_48172__$1;
(statearr_48196_48269[(2)] = inst_48094);

(statearr_48196_48269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (31))){
var inst_48120 = (state_48172[(9)]);
var inst_48124 = done.call(null,null);
var inst_48125 = cljs.core.async.untap_STAR_.call(null,m,inst_48120);
var state_48172__$1 = (function (){var statearr_48197 = state_48172;
(statearr_48197[(19)] = inst_48124);

return statearr_48197;
})();
var statearr_48198_48270 = state_48172__$1;
(statearr_48198_48270[(2)] = inst_48125);

(statearr_48198_48270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (32))){
var inst_48112 = (state_48172[(20)]);
var inst_48115 = (state_48172[(10)]);
var inst_48114 = (state_48172[(21)]);
var inst_48113 = (state_48172[(12)]);
var inst_48127 = (state_48172[(2)]);
var inst_48128 = (inst_48115 + (1));
var tmp48193 = inst_48112;
var tmp48194 = inst_48114;
var tmp48195 = inst_48113;
var inst_48112__$1 = tmp48193;
var inst_48113__$1 = tmp48195;
var inst_48114__$1 = tmp48194;
var inst_48115__$1 = inst_48128;
var state_48172__$1 = (function (){var statearr_48199 = state_48172;
(statearr_48199[(22)] = inst_48127);

(statearr_48199[(20)] = inst_48112__$1);

(statearr_48199[(10)] = inst_48115__$1);

(statearr_48199[(21)] = inst_48114__$1);

(statearr_48199[(12)] = inst_48113__$1);

return statearr_48199;
})();
var statearr_48200_48271 = state_48172__$1;
(statearr_48200_48271[(2)] = null);

(statearr_48200_48271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (40))){
var inst_48140 = (state_48172[(23)]);
var inst_48144 = done.call(null,null);
var inst_48145 = cljs.core.async.untap_STAR_.call(null,m,inst_48140);
var state_48172__$1 = (function (){var statearr_48201 = state_48172;
(statearr_48201[(24)] = inst_48144);

return statearr_48201;
})();
var statearr_48202_48272 = state_48172__$1;
(statearr_48202_48272[(2)] = inst_48145);

(statearr_48202_48272[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (33))){
var inst_48131 = (state_48172[(25)]);
var inst_48133 = cljs.core.chunked_seq_QMARK_.call(null,inst_48131);
var state_48172__$1 = state_48172;
if(inst_48133){
var statearr_48203_48273 = state_48172__$1;
(statearr_48203_48273[(1)] = (36));

} else {
var statearr_48204_48274 = state_48172__$1;
(statearr_48204_48274[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (13))){
var inst_48061 = (state_48172[(26)]);
var inst_48064 = cljs.core.async.close_BANG_.call(null,inst_48061);
var state_48172__$1 = state_48172;
var statearr_48205_48275 = state_48172__$1;
(statearr_48205_48275[(2)] = inst_48064);

(statearr_48205_48275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (22))){
var inst_48084 = (state_48172[(8)]);
var inst_48087 = cljs.core.async.close_BANG_.call(null,inst_48084);
var state_48172__$1 = state_48172;
var statearr_48206_48276 = state_48172__$1;
(statearr_48206_48276[(2)] = inst_48087);

(statearr_48206_48276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (36))){
var inst_48131 = (state_48172[(25)]);
var inst_48135 = cljs.core.chunk_first.call(null,inst_48131);
var inst_48136 = cljs.core.chunk_rest.call(null,inst_48131);
var inst_48137 = cljs.core.count.call(null,inst_48135);
var inst_48112 = inst_48136;
var inst_48113 = inst_48135;
var inst_48114 = inst_48137;
var inst_48115 = (0);
var state_48172__$1 = (function (){var statearr_48207 = state_48172;
(statearr_48207[(20)] = inst_48112);

(statearr_48207[(10)] = inst_48115);

(statearr_48207[(21)] = inst_48114);

(statearr_48207[(12)] = inst_48113);

return statearr_48207;
})();
var statearr_48208_48277 = state_48172__$1;
(statearr_48208_48277[(2)] = null);

(statearr_48208_48277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (41))){
var inst_48131 = (state_48172[(25)]);
var inst_48147 = (state_48172[(2)]);
var inst_48148 = cljs.core.next.call(null,inst_48131);
var inst_48112 = inst_48148;
var inst_48113 = null;
var inst_48114 = (0);
var inst_48115 = (0);
var state_48172__$1 = (function (){var statearr_48209 = state_48172;
(statearr_48209[(20)] = inst_48112);

(statearr_48209[(10)] = inst_48115);

(statearr_48209[(27)] = inst_48147);

(statearr_48209[(21)] = inst_48114);

(statearr_48209[(12)] = inst_48113);

return statearr_48209;
})();
var statearr_48210_48278 = state_48172__$1;
(statearr_48210_48278[(2)] = null);

(statearr_48210_48278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (43))){
var state_48172__$1 = state_48172;
var statearr_48211_48279 = state_48172__$1;
(statearr_48211_48279[(2)] = null);

(statearr_48211_48279[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (29))){
var inst_48156 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48212_48280 = state_48172__$1;
(statearr_48212_48280[(2)] = inst_48156);

(statearr_48212_48280[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (44))){
var inst_48165 = (state_48172[(2)]);
var state_48172__$1 = (function (){var statearr_48213 = state_48172;
(statearr_48213[(28)] = inst_48165);

return statearr_48213;
})();
var statearr_48214_48281 = state_48172__$1;
(statearr_48214_48281[(2)] = null);

(statearr_48214_48281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (6))){
var inst_48104 = (state_48172[(29)]);
var inst_48103 = cljs.core.deref.call(null,cs);
var inst_48104__$1 = cljs.core.keys.call(null,inst_48103);
var inst_48105 = cljs.core.count.call(null,inst_48104__$1);
var inst_48106 = cljs.core.reset_BANG_.call(null,dctr,inst_48105);
var inst_48111 = cljs.core.seq.call(null,inst_48104__$1);
var inst_48112 = inst_48111;
var inst_48113 = null;
var inst_48114 = (0);
var inst_48115 = (0);
var state_48172__$1 = (function (){var statearr_48215 = state_48172;
(statearr_48215[(20)] = inst_48112);

(statearr_48215[(29)] = inst_48104__$1);

(statearr_48215[(30)] = inst_48106);

(statearr_48215[(10)] = inst_48115);

(statearr_48215[(21)] = inst_48114);

(statearr_48215[(12)] = inst_48113);

return statearr_48215;
})();
var statearr_48216_48282 = state_48172__$1;
(statearr_48216_48282[(2)] = null);

(statearr_48216_48282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (28))){
var inst_48112 = (state_48172[(20)]);
var inst_48131 = (state_48172[(25)]);
var inst_48131__$1 = cljs.core.seq.call(null,inst_48112);
var state_48172__$1 = (function (){var statearr_48217 = state_48172;
(statearr_48217[(25)] = inst_48131__$1);

return statearr_48217;
})();
if(inst_48131__$1){
var statearr_48218_48283 = state_48172__$1;
(statearr_48218_48283[(1)] = (33));

} else {
var statearr_48219_48284 = state_48172__$1;
(statearr_48219_48284[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (25))){
var inst_48115 = (state_48172[(10)]);
var inst_48114 = (state_48172[(21)]);
var inst_48117 = (inst_48115 < inst_48114);
var inst_48118 = inst_48117;
var state_48172__$1 = state_48172;
if(cljs.core.truth_(inst_48118)){
var statearr_48220_48285 = state_48172__$1;
(statearr_48220_48285[(1)] = (27));

} else {
var statearr_48221_48286 = state_48172__$1;
(statearr_48221_48286[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (34))){
var state_48172__$1 = state_48172;
var statearr_48222_48287 = state_48172__$1;
(statearr_48222_48287[(2)] = null);

(statearr_48222_48287[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (17))){
var state_48172__$1 = state_48172;
var statearr_48223_48288 = state_48172__$1;
(statearr_48223_48288[(2)] = null);

(statearr_48223_48288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (3))){
var inst_48170 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48172__$1,inst_48170);
} else {
if((state_val_48173 === (12))){
var inst_48099 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48224_48289 = state_48172__$1;
(statearr_48224_48289[(2)] = inst_48099);

(statearr_48224_48289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (2))){
var state_48172__$1 = state_48172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48172__$1,(4),ch);
} else {
if((state_val_48173 === (23))){
var state_48172__$1 = state_48172;
var statearr_48225_48290 = state_48172__$1;
(statearr_48225_48290[(2)] = null);

(statearr_48225_48290[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (35))){
var inst_48154 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48226_48291 = state_48172__$1;
(statearr_48226_48291[(2)] = inst_48154);

(statearr_48226_48291[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (19))){
var inst_48071 = (state_48172[(7)]);
var inst_48075 = cljs.core.chunk_first.call(null,inst_48071);
var inst_48076 = cljs.core.chunk_rest.call(null,inst_48071);
var inst_48077 = cljs.core.count.call(null,inst_48075);
var inst_48049 = inst_48076;
var inst_48050 = inst_48075;
var inst_48051 = inst_48077;
var inst_48052 = (0);
var state_48172__$1 = (function (){var statearr_48227 = state_48172;
(statearr_48227[(13)] = inst_48051);

(statearr_48227[(14)] = inst_48050);

(statearr_48227[(15)] = inst_48052);

(statearr_48227[(16)] = inst_48049);

return statearr_48227;
})();
var statearr_48228_48292 = state_48172__$1;
(statearr_48228_48292[(2)] = null);

(statearr_48228_48292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (11))){
var inst_48071 = (state_48172[(7)]);
var inst_48049 = (state_48172[(16)]);
var inst_48071__$1 = cljs.core.seq.call(null,inst_48049);
var state_48172__$1 = (function (){var statearr_48229 = state_48172;
(statearr_48229[(7)] = inst_48071__$1);

return statearr_48229;
})();
if(inst_48071__$1){
var statearr_48230_48293 = state_48172__$1;
(statearr_48230_48293[(1)] = (16));

} else {
var statearr_48231_48294 = state_48172__$1;
(statearr_48231_48294[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (9))){
var inst_48101 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48232_48295 = state_48172__$1;
(statearr_48232_48295[(2)] = inst_48101);

(statearr_48232_48295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (5))){
var inst_48047 = cljs.core.deref.call(null,cs);
var inst_48048 = cljs.core.seq.call(null,inst_48047);
var inst_48049 = inst_48048;
var inst_48050 = null;
var inst_48051 = (0);
var inst_48052 = (0);
var state_48172__$1 = (function (){var statearr_48233 = state_48172;
(statearr_48233[(13)] = inst_48051);

(statearr_48233[(14)] = inst_48050);

(statearr_48233[(15)] = inst_48052);

(statearr_48233[(16)] = inst_48049);

return statearr_48233;
})();
var statearr_48234_48296 = state_48172__$1;
(statearr_48234_48296[(2)] = null);

(statearr_48234_48296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (14))){
var state_48172__$1 = state_48172;
var statearr_48235_48297 = state_48172__$1;
(statearr_48235_48297[(2)] = null);

(statearr_48235_48297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (45))){
var inst_48162 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48236_48298 = state_48172__$1;
(statearr_48236_48298[(2)] = inst_48162);

(statearr_48236_48298[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (26))){
var inst_48104 = (state_48172[(29)]);
var inst_48158 = (state_48172[(2)]);
var inst_48159 = cljs.core.seq.call(null,inst_48104);
var state_48172__$1 = (function (){var statearr_48237 = state_48172;
(statearr_48237[(31)] = inst_48158);

return statearr_48237;
})();
if(inst_48159){
var statearr_48238_48299 = state_48172__$1;
(statearr_48238_48299[(1)] = (42));

} else {
var statearr_48239_48300 = state_48172__$1;
(statearr_48239_48300[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (16))){
var inst_48071 = (state_48172[(7)]);
var inst_48073 = cljs.core.chunked_seq_QMARK_.call(null,inst_48071);
var state_48172__$1 = state_48172;
if(inst_48073){
var statearr_48240_48301 = state_48172__$1;
(statearr_48240_48301[(1)] = (19));

} else {
var statearr_48241_48302 = state_48172__$1;
(statearr_48241_48302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (38))){
var inst_48151 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48242_48303 = state_48172__$1;
(statearr_48242_48303[(2)] = inst_48151);

(statearr_48242_48303[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (30))){
var state_48172__$1 = state_48172;
var statearr_48243_48304 = state_48172__$1;
(statearr_48243_48304[(2)] = null);

(statearr_48243_48304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (10))){
var inst_48050 = (state_48172[(14)]);
var inst_48052 = (state_48172[(15)]);
var inst_48060 = cljs.core._nth.call(null,inst_48050,inst_48052);
var inst_48061 = cljs.core.nth.call(null,inst_48060,(0),null);
var inst_48062 = cljs.core.nth.call(null,inst_48060,(1),null);
var state_48172__$1 = (function (){var statearr_48244 = state_48172;
(statearr_48244[(26)] = inst_48061);

return statearr_48244;
})();
if(cljs.core.truth_(inst_48062)){
var statearr_48245_48305 = state_48172__$1;
(statearr_48245_48305[(1)] = (13));

} else {
var statearr_48246_48306 = state_48172__$1;
(statearr_48246_48306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (18))){
var inst_48097 = (state_48172[(2)]);
var state_48172__$1 = state_48172;
var statearr_48247_48307 = state_48172__$1;
(statearr_48247_48307[(2)] = inst_48097);

(statearr_48247_48307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (42))){
var state_48172__$1 = state_48172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48172__$1,(45),dchan);
} else {
if((state_val_48173 === (37))){
var inst_48140 = (state_48172[(23)]);
var inst_48131 = (state_48172[(25)]);
var inst_48040 = (state_48172[(11)]);
var inst_48140__$1 = cljs.core.first.call(null,inst_48131);
var inst_48141 = cljs.core.async.put_BANG_.call(null,inst_48140__$1,inst_48040,done);
var state_48172__$1 = (function (){var statearr_48248 = state_48172;
(statearr_48248[(23)] = inst_48140__$1);

return statearr_48248;
})();
if(cljs.core.truth_(inst_48141)){
var statearr_48249_48308 = state_48172__$1;
(statearr_48249_48308[(1)] = (39));

} else {
var statearr_48250_48309 = state_48172__$1;
(statearr_48250_48309[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48173 === (8))){
var inst_48051 = (state_48172[(13)]);
var inst_48052 = (state_48172[(15)]);
var inst_48054 = (inst_48052 < inst_48051);
var inst_48055 = inst_48054;
var state_48172__$1 = state_48172;
if(cljs.core.truth_(inst_48055)){
var statearr_48251_48310 = state_48172__$1;
(statearr_48251_48310[(1)] = (10));

} else {
var statearr_48252_48311 = state_48172__$1;
(statearr_48252_48311[(1)] = (11));

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
});})(c__47438__auto___48257,cs,m,dchan,dctr,done))
;
return ((function (switch__47348__auto__,c__47438__auto___48257,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__47349__auto__ = null;
var cljs$core$async$mult_$_state_machine__47349__auto____0 = (function (){
var statearr_48253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48253[(0)] = cljs$core$async$mult_$_state_machine__47349__auto__);

(statearr_48253[(1)] = (1));

return statearr_48253;
});
var cljs$core$async$mult_$_state_machine__47349__auto____1 = (function (state_48172){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_48172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e48254){if((e48254 instanceof Object)){
var ex__47352__auto__ = e48254;
var statearr_48255_48312 = state_48172;
(statearr_48255_48312[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48313 = state_48172;
state_48172 = G__48313;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47349__auto__ = function(state_48172){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47349__auto____1.call(this,state_48172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47349__auto____0;
cljs$core$async$mult_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47349__auto____1;
return cljs$core$async$mult_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___48257,cs,m,dchan,dctr,done))
})();
var state__47440__auto__ = (function (){var statearr_48256 = f__47439__auto__.call(null);
(statearr_48256[(6)] = c__47438__auto___48257);

return statearr_48256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___48257,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48315 = arguments.length;
switch (G__48315) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__41804__auto__ = (((m == null))?null:m);
var m__41805__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,m,ch);
} else {
var m__41805__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__41804__auto__ = (((m == null))?null:m);
var m__41805__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,m,ch);
} else {
var m__41805__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__41804__auto__ = (((m == null))?null:m);
var m__41805__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,m);
} else {
var m__41805__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__41804__auto__ = (((m == null))?null:m);
var m__41805__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,m,state_map);
} else {
var m__41805__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__41804__auto__ = (((m == null))?null:m);
var m__41805__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,m,mode);
} else {
var m__41805__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42357__auto__ = [];
var len__42350__auto___48327 = arguments.length;
var i__42351__auto___48328 = (0);
while(true){
if((i__42351__auto___48328 < len__42350__auto___48327)){
args__42357__auto__.push((arguments[i__42351__auto___48328]));

var G__48329 = (i__42351__auto___48328 + (1));
i__42351__auto___48328 = G__48329;
continue;
} else {
}
break;
}

var argseq__42358__auto__ = ((((3) < args__42357__auto__.length))?(new cljs.core.IndexedSeq(args__42357__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42358__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48321){
var map__48322 = p__48321;
var map__48322__$1 = ((((!((map__48322 == null)))?((((map__48322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48322):map__48322);
var opts = map__48322__$1;
var statearr_48324_48330 = state;
(statearr_48324_48330[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__48322,map__48322__$1,opts){
return (function (val){
var statearr_48325_48331 = state;
(statearr_48325_48331[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48322,map__48322__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_48326_48332 = state;
(statearr_48326_48332[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48317){
var G__48318 = cljs.core.first.call(null,seq48317);
var seq48317__$1 = cljs.core.next.call(null,seq48317);
var G__48319 = cljs.core.first.call(null,seq48317__$1);
var seq48317__$2 = cljs.core.next.call(null,seq48317__$1);
var G__48320 = cljs.core.first.call(null,seq48317__$2);
var seq48317__$3 = cljs.core.next.call(null,seq48317__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48318,G__48319,G__48320,seq48317__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48333 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48334){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48334 = meta48334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48335,meta48334__$1){
var self__ = this;
var _48335__$1 = this;
return (new cljs.core.async.t_cljs$core$async48333(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48334__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48335){
var self__ = this;
var _48335__$1 = this;
return self__.meta48334;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48334","meta48334",-101734611,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48333";

cljs.core.async.t_cljs$core$async48333.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async48333");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48333 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48333(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48334){
return (new cljs.core.async.t_cljs$core$async48333(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48334));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48333(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47438__auto___48497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___48497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___48497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48437){
var state_val_48438 = (state_48437[(1)]);
if((state_val_48438 === (7))){
var inst_48352 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
var statearr_48439_48498 = state_48437__$1;
(statearr_48439_48498[(2)] = inst_48352);

(statearr_48439_48498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (20))){
var inst_48364 = (state_48437[(7)]);
var state_48437__$1 = state_48437;
var statearr_48440_48499 = state_48437__$1;
(statearr_48440_48499[(2)] = inst_48364);

(statearr_48440_48499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (27))){
var state_48437__$1 = state_48437;
var statearr_48441_48500 = state_48437__$1;
(statearr_48441_48500[(2)] = null);

(statearr_48441_48500[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (1))){
var inst_48339 = (state_48437[(8)]);
var inst_48339__$1 = calc_state.call(null);
var inst_48341 = (inst_48339__$1 == null);
var inst_48342 = cljs.core.not.call(null,inst_48341);
var state_48437__$1 = (function (){var statearr_48442 = state_48437;
(statearr_48442[(8)] = inst_48339__$1);

return statearr_48442;
})();
if(inst_48342){
var statearr_48443_48501 = state_48437__$1;
(statearr_48443_48501[(1)] = (2));

} else {
var statearr_48444_48502 = state_48437__$1;
(statearr_48444_48502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (24))){
var inst_48411 = (state_48437[(9)]);
var inst_48397 = (state_48437[(10)]);
var inst_48388 = (state_48437[(11)]);
var inst_48411__$1 = inst_48388.call(null,inst_48397);
var state_48437__$1 = (function (){var statearr_48445 = state_48437;
(statearr_48445[(9)] = inst_48411__$1);

return statearr_48445;
})();
if(cljs.core.truth_(inst_48411__$1)){
var statearr_48446_48503 = state_48437__$1;
(statearr_48446_48503[(1)] = (29));

} else {
var statearr_48447_48504 = state_48437__$1;
(statearr_48447_48504[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (4))){
var inst_48355 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
if(cljs.core.truth_(inst_48355)){
var statearr_48448_48505 = state_48437__$1;
(statearr_48448_48505[(1)] = (8));

} else {
var statearr_48449_48506 = state_48437__$1;
(statearr_48449_48506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (15))){
var inst_48382 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
if(cljs.core.truth_(inst_48382)){
var statearr_48450_48507 = state_48437__$1;
(statearr_48450_48507[(1)] = (19));

} else {
var statearr_48451_48508 = state_48437__$1;
(statearr_48451_48508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (21))){
var inst_48387 = (state_48437[(12)]);
var inst_48387__$1 = (state_48437[(2)]);
var inst_48388 = cljs.core.get.call(null,inst_48387__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48389 = cljs.core.get.call(null,inst_48387__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48390 = cljs.core.get.call(null,inst_48387__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48437__$1 = (function (){var statearr_48452 = state_48437;
(statearr_48452[(12)] = inst_48387__$1);

(statearr_48452[(13)] = inst_48389);

(statearr_48452[(11)] = inst_48388);

return statearr_48452;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48437__$1,(22),inst_48390);
} else {
if((state_val_48438 === (31))){
var inst_48419 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
if(cljs.core.truth_(inst_48419)){
var statearr_48453_48509 = state_48437__$1;
(statearr_48453_48509[(1)] = (32));

} else {
var statearr_48454_48510 = state_48437__$1;
(statearr_48454_48510[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (32))){
var inst_48396 = (state_48437[(14)]);
var state_48437__$1 = state_48437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48437__$1,(35),out,inst_48396);
} else {
if((state_val_48438 === (33))){
var inst_48387 = (state_48437[(12)]);
var inst_48364 = inst_48387;
var state_48437__$1 = (function (){var statearr_48455 = state_48437;
(statearr_48455[(7)] = inst_48364);

return statearr_48455;
})();
var statearr_48456_48511 = state_48437__$1;
(statearr_48456_48511[(2)] = null);

(statearr_48456_48511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (13))){
var inst_48364 = (state_48437[(7)]);
var inst_48371 = inst_48364.cljs$lang$protocol_mask$partition0$;
var inst_48372 = (inst_48371 & (64));
var inst_48373 = inst_48364.cljs$core$ISeq$;
var inst_48374 = (cljs.core.PROTOCOL_SENTINEL === inst_48373);
var inst_48375 = (inst_48372) || (inst_48374);
var state_48437__$1 = state_48437;
if(cljs.core.truth_(inst_48375)){
var statearr_48457_48512 = state_48437__$1;
(statearr_48457_48512[(1)] = (16));

} else {
var statearr_48458_48513 = state_48437__$1;
(statearr_48458_48513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (22))){
var inst_48396 = (state_48437[(14)]);
var inst_48397 = (state_48437[(10)]);
var inst_48395 = (state_48437[(2)]);
var inst_48396__$1 = cljs.core.nth.call(null,inst_48395,(0),null);
var inst_48397__$1 = cljs.core.nth.call(null,inst_48395,(1),null);
var inst_48398 = (inst_48396__$1 == null);
var inst_48399 = cljs.core._EQ_.call(null,inst_48397__$1,change);
var inst_48400 = (inst_48398) || (inst_48399);
var state_48437__$1 = (function (){var statearr_48459 = state_48437;
(statearr_48459[(14)] = inst_48396__$1);

(statearr_48459[(10)] = inst_48397__$1);

return statearr_48459;
})();
if(cljs.core.truth_(inst_48400)){
var statearr_48460_48514 = state_48437__$1;
(statearr_48460_48514[(1)] = (23));

} else {
var statearr_48461_48515 = state_48437__$1;
(statearr_48461_48515[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (36))){
var inst_48387 = (state_48437[(12)]);
var inst_48364 = inst_48387;
var state_48437__$1 = (function (){var statearr_48462 = state_48437;
(statearr_48462[(7)] = inst_48364);

return statearr_48462;
})();
var statearr_48463_48516 = state_48437__$1;
(statearr_48463_48516[(2)] = null);

(statearr_48463_48516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (29))){
var inst_48411 = (state_48437[(9)]);
var state_48437__$1 = state_48437;
var statearr_48464_48517 = state_48437__$1;
(statearr_48464_48517[(2)] = inst_48411);

(statearr_48464_48517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (6))){
var state_48437__$1 = state_48437;
var statearr_48465_48518 = state_48437__$1;
(statearr_48465_48518[(2)] = false);

(statearr_48465_48518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (28))){
var inst_48407 = (state_48437[(2)]);
var inst_48408 = calc_state.call(null);
var inst_48364 = inst_48408;
var state_48437__$1 = (function (){var statearr_48466 = state_48437;
(statearr_48466[(15)] = inst_48407);

(statearr_48466[(7)] = inst_48364);

return statearr_48466;
})();
var statearr_48467_48519 = state_48437__$1;
(statearr_48467_48519[(2)] = null);

(statearr_48467_48519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (25))){
var inst_48433 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
var statearr_48468_48520 = state_48437__$1;
(statearr_48468_48520[(2)] = inst_48433);

(statearr_48468_48520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (34))){
var inst_48431 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
var statearr_48469_48521 = state_48437__$1;
(statearr_48469_48521[(2)] = inst_48431);

(statearr_48469_48521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (17))){
var state_48437__$1 = state_48437;
var statearr_48470_48522 = state_48437__$1;
(statearr_48470_48522[(2)] = false);

(statearr_48470_48522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (3))){
var state_48437__$1 = state_48437;
var statearr_48471_48523 = state_48437__$1;
(statearr_48471_48523[(2)] = false);

(statearr_48471_48523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (12))){
var inst_48435 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48437__$1,inst_48435);
} else {
if((state_val_48438 === (2))){
var inst_48339 = (state_48437[(8)]);
var inst_48344 = inst_48339.cljs$lang$protocol_mask$partition0$;
var inst_48345 = (inst_48344 & (64));
var inst_48346 = inst_48339.cljs$core$ISeq$;
var inst_48347 = (cljs.core.PROTOCOL_SENTINEL === inst_48346);
var inst_48348 = (inst_48345) || (inst_48347);
var state_48437__$1 = state_48437;
if(cljs.core.truth_(inst_48348)){
var statearr_48472_48524 = state_48437__$1;
(statearr_48472_48524[(1)] = (5));

} else {
var statearr_48473_48525 = state_48437__$1;
(statearr_48473_48525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (23))){
var inst_48396 = (state_48437[(14)]);
var inst_48402 = (inst_48396 == null);
var state_48437__$1 = state_48437;
if(cljs.core.truth_(inst_48402)){
var statearr_48474_48526 = state_48437__$1;
(statearr_48474_48526[(1)] = (26));

} else {
var statearr_48475_48527 = state_48437__$1;
(statearr_48475_48527[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (35))){
var inst_48422 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
if(cljs.core.truth_(inst_48422)){
var statearr_48476_48528 = state_48437__$1;
(statearr_48476_48528[(1)] = (36));

} else {
var statearr_48477_48529 = state_48437__$1;
(statearr_48477_48529[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (19))){
var inst_48364 = (state_48437[(7)]);
var inst_48384 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48364);
var state_48437__$1 = state_48437;
var statearr_48478_48530 = state_48437__$1;
(statearr_48478_48530[(2)] = inst_48384);

(statearr_48478_48530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (11))){
var inst_48364 = (state_48437[(7)]);
var inst_48368 = (inst_48364 == null);
var inst_48369 = cljs.core.not.call(null,inst_48368);
var state_48437__$1 = state_48437;
if(inst_48369){
var statearr_48479_48531 = state_48437__$1;
(statearr_48479_48531[(1)] = (13));

} else {
var statearr_48480_48532 = state_48437__$1;
(statearr_48480_48532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (9))){
var inst_48339 = (state_48437[(8)]);
var state_48437__$1 = state_48437;
var statearr_48481_48533 = state_48437__$1;
(statearr_48481_48533[(2)] = inst_48339);

(statearr_48481_48533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (5))){
var state_48437__$1 = state_48437;
var statearr_48482_48534 = state_48437__$1;
(statearr_48482_48534[(2)] = true);

(statearr_48482_48534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (14))){
var state_48437__$1 = state_48437;
var statearr_48483_48535 = state_48437__$1;
(statearr_48483_48535[(2)] = false);

(statearr_48483_48535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (26))){
var inst_48397 = (state_48437[(10)]);
var inst_48404 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48397);
var state_48437__$1 = state_48437;
var statearr_48484_48536 = state_48437__$1;
(statearr_48484_48536[(2)] = inst_48404);

(statearr_48484_48536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (16))){
var state_48437__$1 = state_48437;
var statearr_48485_48537 = state_48437__$1;
(statearr_48485_48537[(2)] = true);

(statearr_48485_48537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (38))){
var inst_48427 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
var statearr_48486_48538 = state_48437__$1;
(statearr_48486_48538[(2)] = inst_48427);

(statearr_48486_48538[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (30))){
var inst_48389 = (state_48437[(13)]);
var inst_48397 = (state_48437[(10)]);
var inst_48388 = (state_48437[(11)]);
var inst_48414 = cljs.core.empty_QMARK_.call(null,inst_48388);
var inst_48415 = inst_48389.call(null,inst_48397);
var inst_48416 = cljs.core.not.call(null,inst_48415);
var inst_48417 = (inst_48414) && (inst_48416);
var state_48437__$1 = state_48437;
var statearr_48487_48539 = state_48437__$1;
(statearr_48487_48539[(2)] = inst_48417);

(statearr_48487_48539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (10))){
var inst_48339 = (state_48437[(8)]);
var inst_48360 = (state_48437[(2)]);
var inst_48361 = cljs.core.get.call(null,inst_48360,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48362 = cljs.core.get.call(null,inst_48360,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48363 = cljs.core.get.call(null,inst_48360,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48364 = inst_48339;
var state_48437__$1 = (function (){var statearr_48488 = state_48437;
(statearr_48488[(16)] = inst_48361);

(statearr_48488[(17)] = inst_48362);

(statearr_48488[(7)] = inst_48364);

(statearr_48488[(18)] = inst_48363);

return statearr_48488;
})();
var statearr_48489_48540 = state_48437__$1;
(statearr_48489_48540[(2)] = null);

(statearr_48489_48540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (18))){
var inst_48379 = (state_48437[(2)]);
var state_48437__$1 = state_48437;
var statearr_48490_48541 = state_48437__$1;
(statearr_48490_48541[(2)] = inst_48379);

(statearr_48490_48541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (37))){
var state_48437__$1 = state_48437;
var statearr_48491_48542 = state_48437__$1;
(statearr_48491_48542[(2)] = null);

(statearr_48491_48542[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48438 === (8))){
var inst_48339 = (state_48437[(8)]);
var inst_48357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48339);
var state_48437__$1 = state_48437;
var statearr_48492_48543 = state_48437__$1;
(statearr_48492_48543[(2)] = inst_48357);

(statearr_48492_48543[(1)] = (10));


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
});})(c__47438__auto___48497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__47348__auto__,c__47438__auto___48497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__47349__auto__ = null;
var cljs$core$async$mix_$_state_machine__47349__auto____0 = (function (){
var statearr_48493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48493[(0)] = cljs$core$async$mix_$_state_machine__47349__auto__);

(statearr_48493[(1)] = (1));

return statearr_48493;
});
var cljs$core$async$mix_$_state_machine__47349__auto____1 = (function (state_48437){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_48437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e48494){if((e48494 instanceof Object)){
var ex__47352__auto__ = e48494;
var statearr_48495_48544 = state_48437;
(statearr_48495_48544[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48545 = state_48437;
state_48437 = G__48545;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47349__auto__ = function(state_48437){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47349__auto____1.call(this,state_48437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47349__auto____0;
cljs$core$async$mix_$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47349__auto____1;
return cljs$core$async$mix_$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___48497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47440__auto__ = (function (){var statearr_48496 = f__47439__auto__.call(null);
(statearr_48496[(6)] = c__47438__auto___48497);

return statearr_48496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___48497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__41804__auto__ = (((p == null))?null:p);
var m__41805__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__41805__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__41804__auto__ = (((p == null))?null:p);
var m__41805__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,p,v,ch);
} else {
var m__41805__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48547 = arguments.length;
switch (G__48547) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__41804__auto__ = (((p == null))?null:p);
var m__41805__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,p);
} else {
var m__41805__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__41804__auto__ = (((p == null))?null:p);
var m__41805__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41804__auto__)]);
if(!((m__41805__auto__ == null))){
return m__41805__auto__.call(null,p,v);
} else {
var m__41805__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41805__auto____$1 == null))){
return m__41805__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48551 = arguments.length;
switch (G__48551) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41071__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41071__auto__,mults){
return (function (p1__48549_SHARP_){
if(cljs.core.truth_(p1__48549_SHARP_.call(null,topic))){
return p1__48549_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48549_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41071__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48552 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48553){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48553 = meta48553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48554,meta48553__$1){
var self__ = this;
var _48554__$1 = this;
return (new cljs.core.async.t_cljs$core$async48552(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48553__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48554){
var self__ = this;
var _48554__$1 = this;
return self__.meta48553;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48552.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48553","meta48553",1549055030,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48552";

cljs.core.async.t_cljs$core$async48552.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async48552");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48552 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48553){
return (new cljs.core.async.t_cljs$core$async48552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48553));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48552(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47438__auto___48672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___48672,mults,ensure_mult,p){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___48672,mults,ensure_mult,p){
return (function (state_48626){
var state_val_48627 = (state_48626[(1)]);
if((state_val_48627 === (7))){
var inst_48622 = (state_48626[(2)]);
var state_48626__$1 = state_48626;
var statearr_48628_48673 = state_48626__$1;
(statearr_48628_48673[(2)] = inst_48622);

(statearr_48628_48673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (20))){
var state_48626__$1 = state_48626;
var statearr_48629_48674 = state_48626__$1;
(statearr_48629_48674[(2)] = null);

(statearr_48629_48674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (1))){
var state_48626__$1 = state_48626;
var statearr_48630_48675 = state_48626__$1;
(statearr_48630_48675[(2)] = null);

(statearr_48630_48675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (24))){
var inst_48605 = (state_48626[(7)]);
var inst_48614 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48605);
var state_48626__$1 = state_48626;
var statearr_48631_48676 = state_48626__$1;
(statearr_48631_48676[(2)] = inst_48614);

(statearr_48631_48676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (4))){
var inst_48557 = (state_48626[(8)]);
var inst_48557__$1 = (state_48626[(2)]);
var inst_48558 = (inst_48557__$1 == null);
var state_48626__$1 = (function (){var statearr_48632 = state_48626;
(statearr_48632[(8)] = inst_48557__$1);

return statearr_48632;
})();
if(cljs.core.truth_(inst_48558)){
var statearr_48633_48677 = state_48626__$1;
(statearr_48633_48677[(1)] = (5));

} else {
var statearr_48634_48678 = state_48626__$1;
(statearr_48634_48678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (15))){
var inst_48599 = (state_48626[(2)]);
var state_48626__$1 = state_48626;
var statearr_48635_48679 = state_48626__$1;
(statearr_48635_48679[(2)] = inst_48599);

(statearr_48635_48679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (21))){
var inst_48619 = (state_48626[(2)]);
var state_48626__$1 = (function (){var statearr_48636 = state_48626;
(statearr_48636[(9)] = inst_48619);

return statearr_48636;
})();
var statearr_48637_48680 = state_48626__$1;
(statearr_48637_48680[(2)] = null);

(statearr_48637_48680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (13))){
var inst_48581 = (state_48626[(10)]);
var inst_48583 = cljs.core.chunked_seq_QMARK_.call(null,inst_48581);
var state_48626__$1 = state_48626;
if(inst_48583){
var statearr_48638_48681 = state_48626__$1;
(statearr_48638_48681[(1)] = (16));

} else {
var statearr_48639_48682 = state_48626__$1;
(statearr_48639_48682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (22))){
var inst_48611 = (state_48626[(2)]);
var state_48626__$1 = state_48626;
if(cljs.core.truth_(inst_48611)){
var statearr_48640_48683 = state_48626__$1;
(statearr_48640_48683[(1)] = (23));

} else {
var statearr_48641_48684 = state_48626__$1;
(statearr_48641_48684[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (6))){
var inst_48557 = (state_48626[(8)]);
var inst_48607 = (state_48626[(11)]);
var inst_48605 = (state_48626[(7)]);
var inst_48605__$1 = topic_fn.call(null,inst_48557);
var inst_48606 = cljs.core.deref.call(null,mults);
var inst_48607__$1 = cljs.core.get.call(null,inst_48606,inst_48605__$1);
var state_48626__$1 = (function (){var statearr_48642 = state_48626;
(statearr_48642[(11)] = inst_48607__$1);

(statearr_48642[(7)] = inst_48605__$1);

return statearr_48642;
})();
if(cljs.core.truth_(inst_48607__$1)){
var statearr_48643_48685 = state_48626__$1;
(statearr_48643_48685[(1)] = (19));

} else {
var statearr_48644_48686 = state_48626__$1;
(statearr_48644_48686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (25))){
var inst_48616 = (state_48626[(2)]);
var state_48626__$1 = state_48626;
var statearr_48645_48687 = state_48626__$1;
(statearr_48645_48687[(2)] = inst_48616);

(statearr_48645_48687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (17))){
var inst_48581 = (state_48626[(10)]);
var inst_48590 = cljs.core.first.call(null,inst_48581);
var inst_48591 = cljs.core.async.muxch_STAR_.call(null,inst_48590);
var inst_48592 = cljs.core.async.close_BANG_.call(null,inst_48591);
var inst_48593 = cljs.core.next.call(null,inst_48581);
var inst_48567 = inst_48593;
var inst_48568 = null;
var inst_48569 = (0);
var inst_48570 = (0);
var state_48626__$1 = (function (){var statearr_48646 = state_48626;
(statearr_48646[(12)] = inst_48569);

(statearr_48646[(13)] = inst_48567);

(statearr_48646[(14)] = inst_48568);

(statearr_48646[(15)] = inst_48592);

(statearr_48646[(16)] = inst_48570);

return statearr_48646;
})();
var statearr_48647_48688 = state_48626__$1;
(statearr_48647_48688[(2)] = null);

(statearr_48647_48688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (3))){
var inst_48624 = (state_48626[(2)]);
var state_48626__$1 = state_48626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48626__$1,inst_48624);
} else {
if((state_val_48627 === (12))){
var inst_48601 = (state_48626[(2)]);
var state_48626__$1 = state_48626;
var statearr_48648_48689 = state_48626__$1;
(statearr_48648_48689[(2)] = inst_48601);

(statearr_48648_48689[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (2))){
var state_48626__$1 = state_48626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48626__$1,(4),ch);
} else {
if((state_val_48627 === (23))){
var state_48626__$1 = state_48626;
var statearr_48649_48690 = state_48626__$1;
(statearr_48649_48690[(2)] = null);

(statearr_48649_48690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (19))){
var inst_48557 = (state_48626[(8)]);
var inst_48607 = (state_48626[(11)]);
var inst_48609 = cljs.core.async.muxch_STAR_.call(null,inst_48607);
var state_48626__$1 = state_48626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48626__$1,(22),inst_48609,inst_48557);
} else {
if((state_val_48627 === (11))){
var inst_48567 = (state_48626[(13)]);
var inst_48581 = (state_48626[(10)]);
var inst_48581__$1 = cljs.core.seq.call(null,inst_48567);
var state_48626__$1 = (function (){var statearr_48650 = state_48626;
(statearr_48650[(10)] = inst_48581__$1);

return statearr_48650;
})();
if(inst_48581__$1){
var statearr_48651_48691 = state_48626__$1;
(statearr_48651_48691[(1)] = (13));

} else {
var statearr_48652_48692 = state_48626__$1;
(statearr_48652_48692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (9))){
var inst_48603 = (state_48626[(2)]);
var state_48626__$1 = state_48626;
var statearr_48653_48693 = state_48626__$1;
(statearr_48653_48693[(2)] = inst_48603);

(statearr_48653_48693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (5))){
var inst_48564 = cljs.core.deref.call(null,mults);
var inst_48565 = cljs.core.vals.call(null,inst_48564);
var inst_48566 = cljs.core.seq.call(null,inst_48565);
var inst_48567 = inst_48566;
var inst_48568 = null;
var inst_48569 = (0);
var inst_48570 = (0);
var state_48626__$1 = (function (){var statearr_48654 = state_48626;
(statearr_48654[(12)] = inst_48569);

(statearr_48654[(13)] = inst_48567);

(statearr_48654[(14)] = inst_48568);

(statearr_48654[(16)] = inst_48570);

return statearr_48654;
})();
var statearr_48655_48694 = state_48626__$1;
(statearr_48655_48694[(2)] = null);

(statearr_48655_48694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (14))){
var state_48626__$1 = state_48626;
var statearr_48659_48695 = state_48626__$1;
(statearr_48659_48695[(2)] = null);

(statearr_48659_48695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (16))){
var inst_48581 = (state_48626[(10)]);
var inst_48585 = cljs.core.chunk_first.call(null,inst_48581);
var inst_48586 = cljs.core.chunk_rest.call(null,inst_48581);
var inst_48587 = cljs.core.count.call(null,inst_48585);
var inst_48567 = inst_48586;
var inst_48568 = inst_48585;
var inst_48569 = inst_48587;
var inst_48570 = (0);
var state_48626__$1 = (function (){var statearr_48660 = state_48626;
(statearr_48660[(12)] = inst_48569);

(statearr_48660[(13)] = inst_48567);

(statearr_48660[(14)] = inst_48568);

(statearr_48660[(16)] = inst_48570);

return statearr_48660;
})();
var statearr_48661_48696 = state_48626__$1;
(statearr_48661_48696[(2)] = null);

(statearr_48661_48696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (10))){
var inst_48569 = (state_48626[(12)]);
var inst_48567 = (state_48626[(13)]);
var inst_48568 = (state_48626[(14)]);
var inst_48570 = (state_48626[(16)]);
var inst_48575 = cljs.core._nth.call(null,inst_48568,inst_48570);
var inst_48576 = cljs.core.async.muxch_STAR_.call(null,inst_48575);
var inst_48577 = cljs.core.async.close_BANG_.call(null,inst_48576);
var inst_48578 = (inst_48570 + (1));
var tmp48656 = inst_48569;
var tmp48657 = inst_48567;
var tmp48658 = inst_48568;
var inst_48567__$1 = tmp48657;
var inst_48568__$1 = tmp48658;
var inst_48569__$1 = tmp48656;
var inst_48570__$1 = inst_48578;
var state_48626__$1 = (function (){var statearr_48662 = state_48626;
(statearr_48662[(12)] = inst_48569__$1);

(statearr_48662[(13)] = inst_48567__$1);

(statearr_48662[(14)] = inst_48568__$1);

(statearr_48662[(17)] = inst_48577);

(statearr_48662[(16)] = inst_48570__$1);

return statearr_48662;
})();
var statearr_48663_48697 = state_48626__$1;
(statearr_48663_48697[(2)] = null);

(statearr_48663_48697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (18))){
var inst_48596 = (state_48626[(2)]);
var state_48626__$1 = state_48626;
var statearr_48664_48698 = state_48626__$1;
(statearr_48664_48698[(2)] = inst_48596);

(statearr_48664_48698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48627 === (8))){
var inst_48569 = (state_48626[(12)]);
var inst_48570 = (state_48626[(16)]);
var inst_48572 = (inst_48570 < inst_48569);
var inst_48573 = inst_48572;
var state_48626__$1 = state_48626;
if(cljs.core.truth_(inst_48573)){
var statearr_48665_48699 = state_48626__$1;
(statearr_48665_48699[(1)] = (10));

} else {
var statearr_48666_48700 = state_48626__$1;
(statearr_48666_48700[(1)] = (11));

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
});})(c__47438__auto___48672,mults,ensure_mult,p))
;
return ((function (switch__47348__auto__,c__47438__auto___48672,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_48667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48667[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_48667[(1)] = (1));

return statearr_48667;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_48626){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_48626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e48668){if((e48668 instanceof Object)){
var ex__47352__auto__ = e48668;
var statearr_48669_48701 = state_48626;
(statearr_48669_48701[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48702 = state_48626;
state_48626 = G__48702;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_48626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_48626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___48672,mults,ensure_mult,p))
})();
var state__47440__auto__ = (function (){var statearr_48670 = f__47439__auto__.call(null);
(statearr_48670[(6)] = c__47438__auto___48672);

return statearr_48670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___48672,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48704 = arguments.length;
switch (G__48704) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48707 = arguments.length;
switch (G__48707) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48710 = arguments.length;
switch (G__48710) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__47438__auto___48777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___48777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___48777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48749){
var state_val_48750 = (state_48749[(1)]);
if((state_val_48750 === (7))){
var state_48749__$1 = state_48749;
var statearr_48751_48778 = state_48749__$1;
(statearr_48751_48778[(2)] = null);

(statearr_48751_48778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (1))){
var state_48749__$1 = state_48749;
var statearr_48752_48779 = state_48749__$1;
(statearr_48752_48779[(2)] = null);

(statearr_48752_48779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (4))){
var inst_48713 = (state_48749[(7)]);
var inst_48715 = (inst_48713 < cnt);
var state_48749__$1 = state_48749;
if(cljs.core.truth_(inst_48715)){
var statearr_48753_48780 = state_48749__$1;
(statearr_48753_48780[(1)] = (6));

} else {
var statearr_48754_48781 = state_48749__$1;
(statearr_48754_48781[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (15))){
var inst_48745 = (state_48749[(2)]);
var state_48749__$1 = state_48749;
var statearr_48755_48782 = state_48749__$1;
(statearr_48755_48782[(2)] = inst_48745);

(statearr_48755_48782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (13))){
var inst_48738 = cljs.core.async.close_BANG_.call(null,out);
var state_48749__$1 = state_48749;
var statearr_48756_48783 = state_48749__$1;
(statearr_48756_48783[(2)] = inst_48738);

(statearr_48756_48783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (6))){
var state_48749__$1 = state_48749;
var statearr_48757_48784 = state_48749__$1;
(statearr_48757_48784[(2)] = null);

(statearr_48757_48784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (3))){
var inst_48747 = (state_48749[(2)]);
var state_48749__$1 = state_48749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48749__$1,inst_48747);
} else {
if((state_val_48750 === (12))){
var inst_48735 = (state_48749[(8)]);
var inst_48735__$1 = (state_48749[(2)]);
var inst_48736 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48735__$1);
var state_48749__$1 = (function (){var statearr_48758 = state_48749;
(statearr_48758[(8)] = inst_48735__$1);

return statearr_48758;
})();
if(cljs.core.truth_(inst_48736)){
var statearr_48759_48785 = state_48749__$1;
(statearr_48759_48785[(1)] = (13));

} else {
var statearr_48760_48786 = state_48749__$1;
(statearr_48760_48786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (2))){
var inst_48712 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48713 = (0);
var state_48749__$1 = (function (){var statearr_48761 = state_48749;
(statearr_48761[(7)] = inst_48713);

(statearr_48761[(9)] = inst_48712);

return statearr_48761;
})();
var statearr_48762_48787 = state_48749__$1;
(statearr_48762_48787[(2)] = null);

(statearr_48762_48787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (11))){
var inst_48713 = (state_48749[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48749,(10),Object,null,(9));
var inst_48722 = chs__$1.call(null,inst_48713);
var inst_48723 = done.call(null,inst_48713);
var inst_48724 = cljs.core.async.take_BANG_.call(null,inst_48722,inst_48723);
var state_48749__$1 = state_48749;
var statearr_48763_48788 = state_48749__$1;
(statearr_48763_48788[(2)] = inst_48724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (9))){
var inst_48713 = (state_48749[(7)]);
var inst_48726 = (state_48749[(2)]);
var inst_48727 = (inst_48713 + (1));
var inst_48713__$1 = inst_48727;
var state_48749__$1 = (function (){var statearr_48764 = state_48749;
(statearr_48764[(10)] = inst_48726);

(statearr_48764[(7)] = inst_48713__$1);

return statearr_48764;
})();
var statearr_48765_48789 = state_48749__$1;
(statearr_48765_48789[(2)] = null);

(statearr_48765_48789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (5))){
var inst_48733 = (state_48749[(2)]);
var state_48749__$1 = (function (){var statearr_48766 = state_48749;
(statearr_48766[(11)] = inst_48733);

return statearr_48766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48749__$1,(12),dchan);
} else {
if((state_val_48750 === (14))){
var inst_48735 = (state_48749[(8)]);
var inst_48740 = cljs.core.apply.call(null,f,inst_48735);
var state_48749__$1 = state_48749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48749__$1,(16),out,inst_48740);
} else {
if((state_val_48750 === (16))){
var inst_48742 = (state_48749[(2)]);
var state_48749__$1 = (function (){var statearr_48767 = state_48749;
(statearr_48767[(12)] = inst_48742);

return statearr_48767;
})();
var statearr_48768_48790 = state_48749__$1;
(statearr_48768_48790[(2)] = null);

(statearr_48768_48790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (10))){
var inst_48717 = (state_48749[(2)]);
var inst_48718 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48749__$1 = (function (){var statearr_48769 = state_48749;
(statearr_48769[(13)] = inst_48717);

return statearr_48769;
})();
var statearr_48770_48791 = state_48749__$1;
(statearr_48770_48791[(2)] = inst_48718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (8))){
var inst_48731 = (state_48749[(2)]);
var state_48749__$1 = state_48749;
var statearr_48771_48792 = state_48749__$1;
(statearr_48771_48792[(2)] = inst_48731);

(statearr_48771_48792[(1)] = (5));


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
});})(c__47438__auto___48777,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__47348__auto__,c__47438__auto___48777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_48772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48772[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_48772[(1)] = (1));

return statearr_48772;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_48749){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_48749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e48773){if((e48773 instanceof Object)){
var ex__47352__auto__ = e48773;
var statearr_48774_48793 = state_48749;
(statearr_48774_48793[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48794 = state_48749;
state_48749 = G__48794;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_48749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_48749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___48777,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47440__auto__ = (function (){var statearr_48775 = f__47439__auto__.call(null);
(statearr_48775[(6)] = c__47438__auto___48777);

return statearr_48775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___48777,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48797 = arguments.length;
switch (G__48797) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47438__auto___48851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___48851,out){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___48851,out){
return (function (state_48829){
var state_val_48830 = (state_48829[(1)]);
if((state_val_48830 === (7))){
var inst_48809 = (state_48829[(7)]);
var inst_48808 = (state_48829[(8)]);
var inst_48808__$1 = (state_48829[(2)]);
var inst_48809__$1 = cljs.core.nth.call(null,inst_48808__$1,(0),null);
var inst_48810 = cljs.core.nth.call(null,inst_48808__$1,(1),null);
var inst_48811 = (inst_48809__$1 == null);
var state_48829__$1 = (function (){var statearr_48831 = state_48829;
(statearr_48831[(9)] = inst_48810);

(statearr_48831[(7)] = inst_48809__$1);

(statearr_48831[(8)] = inst_48808__$1);

return statearr_48831;
})();
if(cljs.core.truth_(inst_48811)){
var statearr_48832_48852 = state_48829__$1;
(statearr_48832_48852[(1)] = (8));

} else {
var statearr_48833_48853 = state_48829__$1;
(statearr_48833_48853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48830 === (1))){
var inst_48798 = cljs.core.vec.call(null,chs);
var inst_48799 = inst_48798;
var state_48829__$1 = (function (){var statearr_48834 = state_48829;
(statearr_48834[(10)] = inst_48799);

return statearr_48834;
})();
var statearr_48835_48854 = state_48829__$1;
(statearr_48835_48854[(2)] = null);

(statearr_48835_48854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48830 === (4))){
var inst_48799 = (state_48829[(10)]);
var state_48829__$1 = state_48829;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48829__$1,(7),inst_48799);
} else {
if((state_val_48830 === (6))){
var inst_48825 = (state_48829[(2)]);
var state_48829__$1 = state_48829;
var statearr_48836_48855 = state_48829__$1;
(statearr_48836_48855[(2)] = inst_48825);

(statearr_48836_48855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48830 === (3))){
var inst_48827 = (state_48829[(2)]);
var state_48829__$1 = state_48829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48829__$1,inst_48827);
} else {
if((state_val_48830 === (2))){
var inst_48799 = (state_48829[(10)]);
var inst_48801 = cljs.core.count.call(null,inst_48799);
var inst_48802 = (inst_48801 > (0));
var state_48829__$1 = state_48829;
if(cljs.core.truth_(inst_48802)){
var statearr_48838_48856 = state_48829__$1;
(statearr_48838_48856[(1)] = (4));

} else {
var statearr_48839_48857 = state_48829__$1;
(statearr_48839_48857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48830 === (11))){
var inst_48799 = (state_48829[(10)]);
var inst_48818 = (state_48829[(2)]);
var tmp48837 = inst_48799;
var inst_48799__$1 = tmp48837;
var state_48829__$1 = (function (){var statearr_48840 = state_48829;
(statearr_48840[(11)] = inst_48818);

(statearr_48840[(10)] = inst_48799__$1);

return statearr_48840;
})();
var statearr_48841_48858 = state_48829__$1;
(statearr_48841_48858[(2)] = null);

(statearr_48841_48858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48830 === (9))){
var inst_48809 = (state_48829[(7)]);
var state_48829__$1 = state_48829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48829__$1,(11),out,inst_48809);
} else {
if((state_val_48830 === (5))){
var inst_48823 = cljs.core.async.close_BANG_.call(null,out);
var state_48829__$1 = state_48829;
var statearr_48842_48859 = state_48829__$1;
(statearr_48842_48859[(2)] = inst_48823);

(statearr_48842_48859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48830 === (10))){
var inst_48821 = (state_48829[(2)]);
var state_48829__$1 = state_48829;
var statearr_48843_48860 = state_48829__$1;
(statearr_48843_48860[(2)] = inst_48821);

(statearr_48843_48860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48830 === (8))){
var inst_48810 = (state_48829[(9)]);
var inst_48809 = (state_48829[(7)]);
var inst_48808 = (state_48829[(8)]);
var inst_48799 = (state_48829[(10)]);
var inst_48813 = (function (){var cs = inst_48799;
var vec__48804 = inst_48808;
var v = inst_48809;
var c = inst_48810;
return ((function (cs,vec__48804,v,c,inst_48810,inst_48809,inst_48808,inst_48799,state_val_48830,c__47438__auto___48851,out){
return (function (p1__48795_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48795_SHARP_);
});
;})(cs,vec__48804,v,c,inst_48810,inst_48809,inst_48808,inst_48799,state_val_48830,c__47438__auto___48851,out))
})();
var inst_48814 = cljs.core.filterv.call(null,inst_48813,inst_48799);
var inst_48799__$1 = inst_48814;
var state_48829__$1 = (function (){var statearr_48844 = state_48829;
(statearr_48844[(10)] = inst_48799__$1);

return statearr_48844;
})();
var statearr_48845_48861 = state_48829__$1;
(statearr_48845_48861[(2)] = null);

(statearr_48845_48861[(1)] = (2));


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
});})(c__47438__auto___48851,out))
;
return ((function (switch__47348__auto__,c__47438__auto___48851,out){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_48846 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48846[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_48846[(1)] = (1));

return statearr_48846;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_48829){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_48829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e48847){if((e48847 instanceof Object)){
var ex__47352__auto__ = e48847;
var statearr_48848_48862 = state_48829;
(statearr_48848_48862[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48863 = state_48829;
state_48829 = G__48863;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_48829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_48829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___48851,out))
})();
var state__47440__auto__ = (function (){var statearr_48849 = f__47439__auto__.call(null);
(statearr_48849[(6)] = c__47438__auto___48851);

return statearr_48849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___48851,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48865 = arguments.length;
switch (G__48865) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47438__auto___48910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___48910,out){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___48910,out){
return (function (state_48889){
var state_val_48890 = (state_48889[(1)]);
if((state_val_48890 === (7))){
var inst_48871 = (state_48889[(7)]);
var inst_48871__$1 = (state_48889[(2)]);
var inst_48872 = (inst_48871__$1 == null);
var inst_48873 = cljs.core.not.call(null,inst_48872);
var state_48889__$1 = (function (){var statearr_48891 = state_48889;
(statearr_48891[(7)] = inst_48871__$1);

return statearr_48891;
})();
if(inst_48873){
var statearr_48892_48911 = state_48889__$1;
(statearr_48892_48911[(1)] = (8));

} else {
var statearr_48893_48912 = state_48889__$1;
(statearr_48893_48912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48890 === (1))){
var inst_48866 = (0);
var state_48889__$1 = (function (){var statearr_48894 = state_48889;
(statearr_48894[(8)] = inst_48866);

return statearr_48894;
})();
var statearr_48895_48913 = state_48889__$1;
(statearr_48895_48913[(2)] = null);

(statearr_48895_48913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48890 === (4))){
var state_48889__$1 = state_48889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48889__$1,(7),ch);
} else {
if((state_val_48890 === (6))){
var inst_48884 = (state_48889[(2)]);
var state_48889__$1 = state_48889;
var statearr_48896_48914 = state_48889__$1;
(statearr_48896_48914[(2)] = inst_48884);

(statearr_48896_48914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48890 === (3))){
var inst_48886 = (state_48889[(2)]);
var inst_48887 = cljs.core.async.close_BANG_.call(null,out);
var state_48889__$1 = (function (){var statearr_48897 = state_48889;
(statearr_48897[(9)] = inst_48886);

return statearr_48897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48889__$1,inst_48887);
} else {
if((state_val_48890 === (2))){
var inst_48866 = (state_48889[(8)]);
var inst_48868 = (inst_48866 < n);
var state_48889__$1 = state_48889;
if(cljs.core.truth_(inst_48868)){
var statearr_48898_48915 = state_48889__$1;
(statearr_48898_48915[(1)] = (4));

} else {
var statearr_48899_48916 = state_48889__$1;
(statearr_48899_48916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48890 === (11))){
var inst_48866 = (state_48889[(8)]);
var inst_48876 = (state_48889[(2)]);
var inst_48877 = (inst_48866 + (1));
var inst_48866__$1 = inst_48877;
var state_48889__$1 = (function (){var statearr_48900 = state_48889;
(statearr_48900[(10)] = inst_48876);

(statearr_48900[(8)] = inst_48866__$1);

return statearr_48900;
})();
var statearr_48901_48917 = state_48889__$1;
(statearr_48901_48917[(2)] = null);

(statearr_48901_48917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48890 === (9))){
var state_48889__$1 = state_48889;
var statearr_48902_48918 = state_48889__$1;
(statearr_48902_48918[(2)] = null);

(statearr_48902_48918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48890 === (5))){
var state_48889__$1 = state_48889;
var statearr_48903_48919 = state_48889__$1;
(statearr_48903_48919[(2)] = null);

(statearr_48903_48919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48890 === (10))){
var inst_48881 = (state_48889[(2)]);
var state_48889__$1 = state_48889;
var statearr_48904_48920 = state_48889__$1;
(statearr_48904_48920[(2)] = inst_48881);

(statearr_48904_48920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48890 === (8))){
var inst_48871 = (state_48889[(7)]);
var state_48889__$1 = state_48889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48889__$1,(11),out,inst_48871);
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
});})(c__47438__auto___48910,out))
;
return ((function (switch__47348__auto__,c__47438__auto___48910,out){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_48905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48905[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_48905[(1)] = (1));

return statearr_48905;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_48889){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_48889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e48906){if((e48906 instanceof Object)){
var ex__47352__auto__ = e48906;
var statearr_48907_48921 = state_48889;
(statearr_48907_48921[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48922 = state_48889;
state_48889 = G__48922;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_48889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_48889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___48910,out))
})();
var state__47440__auto__ = (function (){var statearr_48908 = f__47439__auto__.call(null);
(statearr_48908[(6)] = c__47438__auto___48910);

return statearr_48908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___48910,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48924 = (function (f,ch,meta48925){
this.f = f;
this.ch = ch;
this.meta48925 = meta48925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48926,meta48925__$1){
var self__ = this;
var _48926__$1 = this;
return (new cljs.core.async.t_cljs$core$async48924(self__.f,self__.ch,meta48925__$1));
});

cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48926){
var self__ = this;
var _48926__$1 = this;
return self__.meta48925;
});

cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48927 = (function (f,ch,meta48925,_,fn1,meta48928){
this.f = f;
this.ch = ch;
this.meta48925 = meta48925;
this._ = _;
this.fn1 = fn1;
this.meta48928 = meta48928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48929,meta48928__$1){
var self__ = this;
var _48929__$1 = this;
return (new cljs.core.async.t_cljs$core$async48927(self__.f,self__.ch,self__.meta48925,self__._,self__.fn1,meta48928__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48929){
var self__ = this;
var _48929__$1 = this;
return self__.meta48928;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48927.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48927.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48923_SHARP_){
return f1.call(null,(((p1__48923_SHARP_ == null))?null:self__.f.call(null,p1__48923_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48927.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48925","meta48925",-1801525571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48924","cljs.core.async/t_cljs$core$async48924",-610596453,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48928","meta48928",1902480796,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48927";

cljs.core.async.t_cljs$core$async48927.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async48927");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48927 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48927(f__$1,ch__$1,meta48925__$1,___$2,fn1__$1,meta48928){
return (new cljs.core.async.t_cljs$core$async48927(f__$1,ch__$1,meta48925__$1,___$2,fn1__$1,meta48928));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48927(self__.f,self__.ch,self__.meta48925,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41059__auto__ = ret;
if(cljs.core.truth_(and__41059__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41059__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48925","meta48925",-1801525571,null)], null);
});

cljs.core.async.t_cljs$core$async48924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48924";

cljs.core.async.t_cljs$core$async48924.cljs$lang$ctorPrWriter = (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async48924");
});

cljs.core.async.__GT_t_cljs$core$async48924 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48924(f__$1,ch__$1,meta48925){
return (new cljs.core.async.t_cljs$core$async48924(f__$1,ch__$1,meta48925));
});

}

return (new cljs.core.async.t_cljs$core$async48924(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48930 = (function (f,ch,meta48931){
this.f = f;
this.ch = ch;
this.meta48931 = meta48931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48932,meta48931__$1){
var self__ = this;
var _48932__$1 = this;
return (new cljs.core.async.t_cljs$core$async48930(self__.f,self__.ch,meta48931__$1));
});

cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48932){
var self__ = this;
var _48932__$1 = this;
return self__.meta48931;
});

cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48931","meta48931",-153436613,null)], null);
});

cljs.core.async.t_cljs$core$async48930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48930";

cljs.core.async.t_cljs$core$async48930.cljs$lang$ctorPrWriter = (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async48930");
});

cljs.core.async.__GT_t_cljs$core$async48930 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48930(f__$1,ch__$1,meta48931){
return (new cljs.core.async.t_cljs$core$async48930(f__$1,ch__$1,meta48931));
});

}

return (new cljs.core.async.t_cljs$core$async48930(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48933 = (function (p,ch,meta48934){
this.p = p;
this.ch = ch;
this.meta48934 = meta48934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48935,meta48934__$1){
var self__ = this;
var _48935__$1 = this;
return (new cljs.core.async.t_cljs$core$async48933(self__.p,self__.ch,meta48934__$1));
});

cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48935){
var self__ = this;
var _48935__$1 = this;
return self__.meta48934;
});

cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48934","meta48934",2061972373,null)], null);
});

cljs.core.async.t_cljs$core$async48933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48933";

cljs.core.async.t_cljs$core$async48933.cljs$lang$ctorPrWriter = (function (this__41742__auto__,writer__41743__auto__,opt__41744__auto__){
return cljs.core._write.call(null,writer__41743__auto__,"cljs.core.async/t_cljs$core$async48933");
});

cljs.core.async.__GT_t_cljs$core$async48933 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48933(p__$1,ch__$1,meta48934){
return (new cljs.core.async.t_cljs$core$async48933(p__$1,ch__$1,meta48934));
});

}

return (new cljs.core.async.t_cljs$core$async48933(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48937 = arguments.length;
switch (G__48937) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47438__auto___48977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___48977,out){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___48977,out){
return (function (state_48958){
var state_val_48959 = (state_48958[(1)]);
if((state_val_48959 === (7))){
var inst_48954 = (state_48958[(2)]);
var state_48958__$1 = state_48958;
var statearr_48960_48978 = state_48958__$1;
(statearr_48960_48978[(2)] = inst_48954);

(statearr_48960_48978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (1))){
var state_48958__$1 = state_48958;
var statearr_48961_48979 = state_48958__$1;
(statearr_48961_48979[(2)] = null);

(statearr_48961_48979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (4))){
var inst_48940 = (state_48958[(7)]);
var inst_48940__$1 = (state_48958[(2)]);
var inst_48941 = (inst_48940__$1 == null);
var state_48958__$1 = (function (){var statearr_48962 = state_48958;
(statearr_48962[(7)] = inst_48940__$1);

return statearr_48962;
})();
if(cljs.core.truth_(inst_48941)){
var statearr_48963_48980 = state_48958__$1;
(statearr_48963_48980[(1)] = (5));

} else {
var statearr_48964_48981 = state_48958__$1;
(statearr_48964_48981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (6))){
var inst_48940 = (state_48958[(7)]);
var inst_48945 = p.call(null,inst_48940);
var state_48958__$1 = state_48958;
if(cljs.core.truth_(inst_48945)){
var statearr_48965_48982 = state_48958__$1;
(statearr_48965_48982[(1)] = (8));

} else {
var statearr_48966_48983 = state_48958__$1;
(statearr_48966_48983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (3))){
var inst_48956 = (state_48958[(2)]);
var state_48958__$1 = state_48958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48958__$1,inst_48956);
} else {
if((state_val_48959 === (2))){
var state_48958__$1 = state_48958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48958__$1,(4),ch);
} else {
if((state_val_48959 === (11))){
var inst_48948 = (state_48958[(2)]);
var state_48958__$1 = state_48958;
var statearr_48967_48984 = state_48958__$1;
(statearr_48967_48984[(2)] = inst_48948);

(statearr_48967_48984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (9))){
var state_48958__$1 = state_48958;
var statearr_48968_48985 = state_48958__$1;
(statearr_48968_48985[(2)] = null);

(statearr_48968_48985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (5))){
var inst_48943 = cljs.core.async.close_BANG_.call(null,out);
var state_48958__$1 = state_48958;
var statearr_48969_48986 = state_48958__$1;
(statearr_48969_48986[(2)] = inst_48943);

(statearr_48969_48986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (10))){
var inst_48951 = (state_48958[(2)]);
var state_48958__$1 = (function (){var statearr_48970 = state_48958;
(statearr_48970[(8)] = inst_48951);

return statearr_48970;
})();
var statearr_48971_48987 = state_48958__$1;
(statearr_48971_48987[(2)] = null);

(statearr_48971_48987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (8))){
var inst_48940 = (state_48958[(7)]);
var state_48958__$1 = state_48958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48958__$1,(11),out,inst_48940);
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
});})(c__47438__auto___48977,out))
;
return ((function (switch__47348__auto__,c__47438__auto___48977,out){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_48972 = [null,null,null,null,null,null,null,null,null];
(statearr_48972[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_48972[(1)] = (1));

return statearr_48972;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_48958){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_48958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e48973){if((e48973 instanceof Object)){
var ex__47352__auto__ = e48973;
var statearr_48974_48988 = state_48958;
(statearr_48974_48988[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48989 = state_48958;
state_48958 = G__48989;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_48958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_48958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___48977,out))
})();
var state__47440__auto__ = (function (){var statearr_48975 = f__47439__auto__.call(null);
(statearr_48975[(6)] = c__47438__auto___48977);

return statearr_48975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___48977,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48991 = arguments.length;
switch (G__48991) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto__){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto__){
return (function (state_49054){
var state_val_49055 = (state_49054[(1)]);
if((state_val_49055 === (7))){
var inst_49050 = (state_49054[(2)]);
var state_49054__$1 = state_49054;
var statearr_49056_49094 = state_49054__$1;
(statearr_49056_49094[(2)] = inst_49050);

(statearr_49056_49094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (20))){
var inst_49020 = (state_49054[(7)]);
var inst_49031 = (state_49054[(2)]);
var inst_49032 = cljs.core.next.call(null,inst_49020);
var inst_49006 = inst_49032;
var inst_49007 = null;
var inst_49008 = (0);
var inst_49009 = (0);
var state_49054__$1 = (function (){var statearr_49057 = state_49054;
(statearr_49057[(8)] = inst_49007);

(statearr_49057[(9)] = inst_49009);

(statearr_49057[(10)] = inst_49031);

(statearr_49057[(11)] = inst_49006);

(statearr_49057[(12)] = inst_49008);

return statearr_49057;
})();
var statearr_49058_49095 = state_49054__$1;
(statearr_49058_49095[(2)] = null);

(statearr_49058_49095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (1))){
var state_49054__$1 = state_49054;
var statearr_49059_49096 = state_49054__$1;
(statearr_49059_49096[(2)] = null);

(statearr_49059_49096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (4))){
var inst_48995 = (state_49054[(13)]);
var inst_48995__$1 = (state_49054[(2)]);
var inst_48996 = (inst_48995__$1 == null);
var state_49054__$1 = (function (){var statearr_49060 = state_49054;
(statearr_49060[(13)] = inst_48995__$1);

return statearr_49060;
})();
if(cljs.core.truth_(inst_48996)){
var statearr_49061_49097 = state_49054__$1;
(statearr_49061_49097[(1)] = (5));

} else {
var statearr_49062_49098 = state_49054__$1;
(statearr_49062_49098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (15))){
var state_49054__$1 = state_49054;
var statearr_49066_49099 = state_49054__$1;
(statearr_49066_49099[(2)] = null);

(statearr_49066_49099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (21))){
var state_49054__$1 = state_49054;
var statearr_49067_49100 = state_49054__$1;
(statearr_49067_49100[(2)] = null);

(statearr_49067_49100[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (13))){
var inst_49007 = (state_49054[(8)]);
var inst_49009 = (state_49054[(9)]);
var inst_49006 = (state_49054[(11)]);
var inst_49008 = (state_49054[(12)]);
var inst_49016 = (state_49054[(2)]);
var inst_49017 = (inst_49009 + (1));
var tmp49063 = inst_49007;
var tmp49064 = inst_49006;
var tmp49065 = inst_49008;
var inst_49006__$1 = tmp49064;
var inst_49007__$1 = tmp49063;
var inst_49008__$1 = tmp49065;
var inst_49009__$1 = inst_49017;
var state_49054__$1 = (function (){var statearr_49068 = state_49054;
(statearr_49068[(8)] = inst_49007__$1);

(statearr_49068[(9)] = inst_49009__$1);

(statearr_49068[(14)] = inst_49016);

(statearr_49068[(11)] = inst_49006__$1);

(statearr_49068[(12)] = inst_49008__$1);

return statearr_49068;
})();
var statearr_49069_49101 = state_49054__$1;
(statearr_49069_49101[(2)] = null);

(statearr_49069_49101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (22))){
var state_49054__$1 = state_49054;
var statearr_49070_49102 = state_49054__$1;
(statearr_49070_49102[(2)] = null);

(statearr_49070_49102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (6))){
var inst_48995 = (state_49054[(13)]);
var inst_49004 = f.call(null,inst_48995);
var inst_49005 = cljs.core.seq.call(null,inst_49004);
var inst_49006 = inst_49005;
var inst_49007 = null;
var inst_49008 = (0);
var inst_49009 = (0);
var state_49054__$1 = (function (){var statearr_49071 = state_49054;
(statearr_49071[(8)] = inst_49007);

(statearr_49071[(9)] = inst_49009);

(statearr_49071[(11)] = inst_49006);

(statearr_49071[(12)] = inst_49008);

return statearr_49071;
})();
var statearr_49072_49103 = state_49054__$1;
(statearr_49072_49103[(2)] = null);

(statearr_49072_49103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (17))){
var inst_49020 = (state_49054[(7)]);
var inst_49024 = cljs.core.chunk_first.call(null,inst_49020);
var inst_49025 = cljs.core.chunk_rest.call(null,inst_49020);
var inst_49026 = cljs.core.count.call(null,inst_49024);
var inst_49006 = inst_49025;
var inst_49007 = inst_49024;
var inst_49008 = inst_49026;
var inst_49009 = (0);
var state_49054__$1 = (function (){var statearr_49073 = state_49054;
(statearr_49073[(8)] = inst_49007);

(statearr_49073[(9)] = inst_49009);

(statearr_49073[(11)] = inst_49006);

(statearr_49073[(12)] = inst_49008);

return statearr_49073;
})();
var statearr_49074_49104 = state_49054__$1;
(statearr_49074_49104[(2)] = null);

(statearr_49074_49104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (3))){
var inst_49052 = (state_49054[(2)]);
var state_49054__$1 = state_49054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49054__$1,inst_49052);
} else {
if((state_val_49055 === (12))){
var inst_49040 = (state_49054[(2)]);
var state_49054__$1 = state_49054;
var statearr_49075_49105 = state_49054__$1;
(statearr_49075_49105[(2)] = inst_49040);

(statearr_49075_49105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (2))){
var state_49054__$1 = state_49054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49054__$1,(4),in$);
} else {
if((state_val_49055 === (23))){
var inst_49048 = (state_49054[(2)]);
var state_49054__$1 = state_49054;
var statearr_49076_49106 = state_49054__$1;
(statearr_49076_49106[(2)] = inst_49048);

(statearr_49076_49106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (19))){
var inst_49035 = (state_49054[(2)]);
var state_49054__$1 = state_49054;
var statearr_49077_49107 = state_49054__$1;
(statearr_49077_49107[(2)] = inst_49035);

(statearr_49077_49107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (11))){
var inst_49006 = (state_49054[(11)]);
var inst_49020 = (state_49054[(7)]);
var inst_49020__$1 = cljs.core.seq.call(null,inst_49006);
var state_49054__$1 = (function (){var statearr_49078 = state_49054;
(statearr_49078[(7)] = inst_49020__$1);

return statearr_49078;
})();
if(inst_49020__$1){
var statearr_49079_49108 = state_49054__$1;
(statearr_49079_49108[(1)] = (14));

} else {
var statearr_49080_49109 = state_49054__$1;
(statearr_49080_49109[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (9))){
var inst_49042 = (state_49054[(2)]);
var inst_49043 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49054__$1 = (function (){var statearr_49081 = state_49054;
(statearr_49081[(15)] = inst_49042);

return statearr_49081;
})();
if(cljs.core.truth_(inst_49043)){
var statearr_49082_49110 = state_49054__$1;
(statearr_49082_49110[(1)] = (21));

} else {
var statearr_49083_49111 = state_49054__$1;
(statearr_49083_49111[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (5))){
var inst_48998 = cljs.core.async.close_BANG_.call(null,out);
var state_49054__$1 = state_49054;
var statearr_49084_49112 = state_49054__$1;
(statearr_49084_49112[(2)] = inst_48998);

(statearr_49084_49112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (14))){
var inst_49020 = (state_49054[(7)]);
var inst_49022 = cljs.core.chunked_seq_QMARK_.call(null,inst_49020);
var state_49054__$1 = state_49054;
if(inst_49022){
var statearr_49085_49113 = state_49054__$1;
(statearr_49085_49113[(1)] = (17));

} else {
var statearr_49086_49114 = state_49054__$1;
(statearr_49086_49114[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (16))){
var inst_49038 = (state_49054[(2)]);
var state_49054__$1 = state_49054;
var statearr_49087_49115 = state_49054__$1;
(statearr_49087_49115[(2)] = inst_49038);

(statearr_49087_49115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49055 === (10))){
var inst_49007 = (state_49054[(8)]);
var inst_49009 = (state_49054[(9)]);
var inst_49014 = cljs.core._nth.call(null,inst_49007,inst_49009);
var state_49054__$1 = state_49054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49054__$1,(13),out,inst_49014);
} else {
if((state_val_49055 === (18))){
var inst_49020 = (state_49054[(7)]);
var inst_49029 = cljs.core.first.call(null,inst_49020);
var state_49054__$1 = state_49054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49054__$1,(20),out,inst_49029);
} else {
if((state_val_49055 === (8))){
var inst_49009 = (state_49054[(9)]);
var inst_49008 = (state_49054[(12)]);
var inst_49011 = (inst_49009 < inst_49008);
var inst_49012 = inst_49011;
var state_49054__$1 = state_49054;
if(cljs.core.truth_(inst_49012)){
var statearr_49088_49116 = state_49054__$1;
(statearr_49088_49116[(1)] = (10));

} else {
var statearr_49089_49117 = state_49054__$1;
(statearr_49089_49117[(1)] = (11));

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
});})(c__47438__auto__))
;
return ((function (switch__47348__auto__,c__47438__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47349__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47349__auto____0 = (function (){
var statearr_49090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49090[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47349__auto__);

(statearr_49090[(1)] = (1));

return statearr_49090;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47349__auto____1 = (function (state_49054){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_49054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e49091){if((e49091 instanceof Object)){
var ex__47352__auto__ = e49091;
var statearr_49092_49118 = state_49054;
(statearr_49092_49118[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49119 = state_49054;
state_49054 = G__49119;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47349__auto__ = function(state_49054){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47349__auto____1.call(this,state_49054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47349__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47349__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto__))
})();
var state__47440__auto__ = (function (){var statearr_49093 = f__47439__auto__.call(null);
(statearr_49093[(6)] = c__47438__auto__);

return statearr_49093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto__))
);

return c__47438__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49121 = arguments.length;
switch (G__49121) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49124 = arguments.length;
switch (G__49124) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49127 = arguments.length;
switch (G__49127) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47438__auto___49174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___49174,out){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___49174,out){
return (function (state_49151){
var state_val_49152 = (state_49151[(1)]);
if((state_val_49152 === (7))){
var inst_49146 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49153_49175 = state_49151__$1;
(statearr_49153_49175[(2)] = inst_49146);

(statearr_49153_49175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (1))){
var inst_49128 = null;
var state_49151__$1 = (function (){var statearr_49154 = state_49151;
(statearr_49154[(7)] = inst_49128);

return statearr_49154;
})();
var statearr_49155_49176 = state_49151__$1;
(statearr_49155_49176[(2)] = null);

(statearr_49155_49176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (4))){
var inst_49131 = (state_49151[(8)]);
var inst_49131__$1 = (state_49151[(2)]);
var inst_49132 = (inst_49131__$1 == null);
var inst_49133 = cljs.core.not.call(null,inst_49132);
var state_49151__$1 = (function (){var statearr_49156 = state_49151;
(statearr_49156[(8)] = inst_49131__$1);

return statearr_49156;
})();
if(inst_49133){
var statearr_49157_49177 = state_49151__$1;
(statearr_49157_49177[(1)] = (5));

} else {
var statearr_49158_49178 = state_49151__$1;
(statearr_49158_49178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (6))){
var state_49151__$1 = state_49151;
var statearr_49159_49179 = state_49151__$1;
(statearr_49159_49179[(2)] = null);

(statearr_49159_49179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (3))){
var inst_49148 = (state_49151[(2)]);
var inst_49149 = cljs.core.async.close_BANG_.call(null,out);
var state_49151__$1 = (function (){var statearr_49160 = state_49151;
(statearr_49160[(9)] = inst_49148);

return statearr_49160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49151__$1,inst_49149);
} else {
if((state_val_49152 === (2))){
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(4),ch);
} else {
if((state_val_49152 === (11))){
var inst_49131 = (state_49151[(8)]);
var inst_49140 = (state_49151[(2)]);
var inst_49128 = inst_49131;
var state_49151__$1 = (function (){var statearr_49161 = state_49151;
(statearr_49161[(7)] = inst_49128);

(statearr_49161[(10)] = inst_49140);

return statearr_49161;
})();
var statearr_49162_49180 = state_49151__$1;
(statearr_49162_49180[(2)] = null);

(statearr_49162_49180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (9))){
var inst_49131 = (state_49151[(8)]);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49151__$1,(11),out,inst_49131);
} else {
if((state_val_49152 === (5))){
var inst_49128 = (state_49151[(7)]);
var inst_49131 = (state_49151[(8)]);
var inst_49135 = cljs.core._EQ_.call(null,inst_49131,inst_49128);
var state_49151__$1 = state_49151;
if(inst_49135){
var statearr_49164_49181 = state_49151__$1;
(statearr_49164_49181[(1)] = (8));

} else {
var statearr_49165_49182 = state_49151__$1;
(statearr_49165_49182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (10))){
var inst_49143 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49166_49183 = state_49151__$1;
(statearr_49166_49183[(2)] = inst_49143);

(statearr_49166_49183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (8))){
var inst_49128 = (state_49151[(7)]);
var tmp49163 = inst_49128;
var inst_49128__$1 = tmp49163;
var state_49151__$1 = (function (){var statearr_49167 = state_49151;
(statearr_49167[(7)] = inst_49128__$1);

return statearr_49167;
})();
var statearr_49168_49184 = state_49151__$1;
(statearr_49168_49184[(2)] = null);

(statearr_49168_49184[(1)] = (2));


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
});})(c__47438__auto___49174,out))
;
return ((function (switch__47348__auto__,c__47438__auto___49174,out){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_49169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49169[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_49169[(1)] = (1));

return statearr_49169;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_49151){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_49151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e49170){if((e49170 instanceof Object)){
var ex__47352__auto__ = e49170;
var statearr_49171_49185 = state_49151;
(statearr_49171_49185[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49186 = state_49151;
state_49151 = G__49186;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_49151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_49151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___49174,out))
})();
var state__47440__auto__ = (function (){var statearr_49172 = f__47439__auto__.call(null);
(statearr_49172[(6)] = c__47438__auto___49174);

return statearr_49172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___49174,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49188 = arguments.length;
switch (G__49188) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47438__auto___49254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___49254,out){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___49254,out){
return (function (state_49226){
var state_val_49227 = (state_49226[(1)]);
if((state_val_49227 === (7))){
var inst_49222 = (state_49226[(2)]);
var state_49226__$1 = state_49226;
var statearr_49228_49255 = state_49226__$1;
(statearr_49228_49255[(2)] = inst_49222);

(statearr_49228_49255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (1))){
var inst_49189 = (new Array(n));
var inst_49190 = inst_49189;
var inst_49191 = (0);
var state_49226__$1 = (function (){var statearr_49229 = state_49226;
(statearr_49229[(7)] = inst_49191);

(statearr_49229[(8)] = inst_49190);

return statearr_49229;
})();
var statearr_49230_49256 = state_49226__$1;
(statearr_49230_49256[(2)] = null);

(statearr_49230_49256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (4))){
var inst_49194 = (state_49226[(9)]);
var inst_49194__$1 = (state_49226[(2)]);
var inst_49195 = (inst_49194__$1 == null);
var inst_49196 = cljs.core.not.call(null,inst_49195);
var state_49226__$1 = (function (){var statearr_49231 = state_49226;
(statearr_49231[(9)] = inst_49194__$1);

return statearr_49231;
})();
if(inst_49196){
var statearr_49232_49257 = state_49226__$1;
(statearr_49232_49257[(1)] = (5));

} else {
var statearr_49233_49258 = state_49226__$1;
(statearr_49233_49258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (15))){
var inst_49216 = (state_49226[(2)]);
var state_49226__$1 = state_49226;
var statearr_49234_49259 = state_49226__$1;
(statearr_49234_49259[(2)] = inst_49216);

(statearr_49234_49259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (13))){
var state_49226__$1 = state_49226;
var statearr_49235_49260 = state_49226__$1;
(statearr_49235_49260[(2)] = null);

(statearr_49235_49260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (6))){
var inst_49191 = (state_49226[(7)]);
var inst_49212 = (inst_49191 > (0));
var state_49226__$1 = state_49226;
if(cljs.core.truth_(inst_49212)){
var statearr_49236_49261 = state_49226__$1;
(statearr_49236_49261[(1)] = (12));

} else {
var statearr_49237_49262 = state_49226__$1;
(statearr_49237_49262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (3))){
var inst_49224 = (state_49226[(2)]);
var state_49226__$1 = state_49226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49226__$1,inst_49224);
} else {
if((state_val_49227 === (12))){
var inst_49190 = (state_49226[(8)]);
var inst_49214 = cljs.core.vec.call(null,inst_49190);
var state_49226__$1 = state_49226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49226__$1,(15),out,inst_49214);
} else {
if((state_val_49227 === (2))){
var state_49226__$1 = state_49226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49226__$1,(4),ch);
} else {
if((state_val_49227 === (11))){
var inst_49206 = (state_49226[(2)]);
var inst_49207 = (new Array(n));
var inst_49190 = inst_49207;
var inst_49191 = (0);
var state_49226__$1 = (function (){var statearr_49238 = state_49226;
(statearr_49238[(7)] = inst_49191);

(statearr_49238[(8)] = inst_49190);

(statearr_49238[(10)] = inst_49206);

return statearr_49238;
})();
var statearr_49239_49263 = state_49226__$1;
(statearr_49239_49263[(2)] = null);

(statearr_49239_49263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (9))){
var inst_49190 = (state_49226[(8)]);
var inst_49204 = cljs.core.vec.call(null,inst_49190);
var state_49226__$1 = state_49226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49226__$1,(11),out,inst_49204);
} else {
if((state_val_49227 === (5))){
var inst_49191 = (state_49226[(7)]);
var inst_49190 = (state_49226[(8)]);
var inst_49194 = (state_49226[(9)]);
var inst_49199 = (state_49226[(11)]);
var inst_49198 = (inst_49190[inst_49191] = inst_49194);
var inst_49199__$1 = (inst_49191 + (1));
var inst_49200 = (inst_49199__$1 < n);
var state_49226__$1 = (function (){var statearr_49240 = state_49226;
(statearr_49240[(11)] = inst_49199__$1);

(statearr_49240[(12)] = inst_49198);

return statearr_49240;
})();
if(cljs.core.truth_(inst_49200)){
var statearr_49241_49264 = state_49226__$1;
(statearr_49241_49264[(1)] = (8));

} else {
var statearr_49242_49265 = state_49226__$1;
(statearr_49242_49265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (14))){
var inst_49219 = (state_49226[(2)]);
var inst_49220 = cljs.core.async.close_BANG_.call(null,out);
var state_49226__$1 = (function (){var statearr_49244 = state_49226;
(statearr_49244[(13)] = inst_49219);

return statearr_49244;
})();
var statearr_49245_49266 = state_49226__$1;
(statearr_49245_49266[(2)] = inst_49220);

(statearr_49245_49266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (10))){
var inst_49210 = (state_49226[(2)]);
var state_49226__$1 = state_49226;
var statearr_49246_49267 = state_49226__$1;
(statearr_49246_49267[(2)] = inst_49210);

(statearr_49246_49267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49227 === (8))){
var inst_49190 = (state_49226[(8)]);
var inst_49199 = (state_49226[(11)]);
var tmp49243 = inst_49190;
var inst_49190__$1 = tmp49243;
var inst_49191 = inst_49199;
var state_49226__$1 = (function (){var statearr_49247 = state_49226;
(statearr_49247[(7)] = inst_49191);

(statearr_49247[(8)] = inst_49190__$1);

return statearr_49247;
})();
var statearr_49248_49268 = state_49226__$1;
(statearr_49248_49268[(2)] = null);

(statearr_49248_49268[(1)] = (2));


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
});})(c__47438__auto___49254,out))
;
return ((function (switch__47348__auto__,c__47438__auto___49254,out){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_49249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49249[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_49249[(1)] = (1));

return statearr_49249;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_49226){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_49226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e49250){if((e49250 instanceof Object)){
var ex__47352__auto__ = e49250;
var statearr_49251_49269 = state_49226;
(statearr_49251_49269[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49270 = state_49226;
state_49226 = G__49270;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_49226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_49226);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___49254,out))
})();
var state__47440__auto__ = (function (){var statearr_49252 = f__47439__auto__.call(null);
(statearr_49252[(6)] = c__47438__auto___49254);

return statearr_49252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___49254,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49272 = arguments.length;
switch (G__49272) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47438__auto___49342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47438__auto___49342,out){
return (function (){
var f__47439__auto__ = (function (){var switch__47348__auto__ = ((function (c__47438__auto___49342,out){
return (function (state_49314){
var state_val_49315 = (state_49314[(1)]);
if((state_val_49315 === (7))){
var inst_49310 = (state_49314[(2)]);
var state_49314__$1 = state_49314;
var statearr_49316_49343 = state_49314__$1;
(statearr_49316_49343[(2)] = inst_49310);

(statearr_49316_49343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (1))){
var inst_49273 = [];
var inst_49274 = inst_49273;
var inst_49275 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49314__$1 = (function (){var statearr_49317 = state_49314;
(statearr_49317[(7)] = inst_49275);

(statearr_49317[(8)] = inst_49274);

return statearr_49317;
})();
var statearr_49318_49344 = state_49314__$1;
(statearr_49318_49344[(2)] = null);

(statearr_49318_49344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (4))){
var inst_49278 = (state_49314[(9)]);
var inst_49278__$1 = (state_49314[(2)]);
var inst_49279 = (inst_49278__$1 == null);
var inst_49280 = cljs.core.not.call(null,inst_49279);
var state_49314__$1 = (function (){var statearr_49319 = state_49314;
(statearr_49319[(9)] = inst_49278__$1);

return statearr_49319;
})();
if(inst_49280){
var statearr_49320_49345 = state_49314__$1;
(statearr_49320_49345[(1)] = (5));

} else {
var statearr_49321_49346 = state_49314__$1;
(statearr_49321_49346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (15))){
var inst_49304 = (state_49314[(2)]);
var state_49314__$1 = state_49314;
var statearr_49322_49347 = state_49314__$1;
(statearr_49322_49347[(2)] = inst_49304);

(statearr_49322_49347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (13))){
var state_49314__$1 = state_49314;
var statearr_49323_49348 = state_49314__$1;
(statearr_49323_49348[(2)] = null);

(statearr_49323_49348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (6))){
var inst_49274 = (state_49314[(8)]);
var inst_49299 = inst_49274.length;
var inst_49300 = (inst_49299 > (0));
var state_49314__$1 = state_49314;
if(cljs.core.truth_(inst_49300)){
var statearr_49324_49349 = state_49314__$1;
(statearr_49324_49349[(1)] = (12));

} else {
var statearr_49325_49350 = state_49314__$1;
(statearr_49325_49350[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (3))){
var inst_49312 = (state_49314[(2)]);
var state_49314__$1 = state_49314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49314__$1,inst_49312);
} else {
if((state_val_49315 === (12))){
var inst_49274 = (state_49314[(8)]);
var inst_49302 = cljs.core.vec.call(null,inst_49274);
var state_49314__$1 = state_49314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49314__$1,(15),out,inst_49302);
} else {
if((state_val_49315 === (2))){
var state_49314__$1 = state_49314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49314__$1,(4),ch);
} else {
if((state_val_49315 === (11))){
var inst_49278 = (state_49314[(9)]);
var inst_49282 = (state_49314[(10)]);
var inst_49292 = (state_49314[(2)]);
var inst_49293 = [];
var inst_49294 = inst_49293.push(inst_49278);
var inst_49274 = inst_49293;
var inst_49275 = inst_49282;
var state_49314__$1 = (function (){var statearr_49326 = state_49314;
(statearr_49326[(11)] = inst_49292);

(statearr_49326[(7)] = inst_49275);

(statearr_49326[(8)] = inst_49274);

(statearr_49326[(12)] = inst_49294);

return statearr_49326;
})();
var statearr_49327_49351 = state_49314__$1;
(statearr_49327_49351[(2)] = null);

(statearr_49327_49351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (9))){
var inst_49274 = (state_49314[(8)]);
var inst_49290 = cljs.core.vec.call(null,inst_49274);
var state_49314__$1 = state_49314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49314__$1,(11),out,inst_49290);
} else {
if((state_val_49315 === (5))){
var inst_49278 = (state_49314[(9)]);
var inst_49275 = (state_49314[(7)]);
var inst_49282 = (state_49314[(10)]);
var inst_49282__$1 = f.call(null,inst_49278);
var inst_49283 = cljs.core._EQ_.call(null,inst_49282__$1,inst_49275);
var inst_49284 = cljs.core.keyword_identical_QMARK_.call(null,inst_49275,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49285 = (inst_49283) || (inst_49284);
var state_49314__$1 = (function (){var statearr_49328 = state_49314;
(statearr_49328[(10)] = inst_49282__$1);

return statearr_49328;
})();
if(cljs.core.truth_(inst_49285)){
var statearr_49329_49352 = state_49314__$1;
(statearr_49329_49352[(1)] = (8));

} else {
var statearr_49330_49353 = state_49314__$1;
(statearr_49330_49353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (14))){
var inst_49307 = (state_49314[(2)]);
var inst_49308 = cljs.core.async.close_BANG_.call(null,out);
var state_49314__$1 = (function (){var statearr_49332 = state_49314;
(statearr_49332[(13)] = inst_49307);

return statearr_49332;
})();
var statearr_49333_49354 = state_49314__$1;
(statearr_49333_49354[(2)] = inst_49308);

(statearr_49333_49354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (10))){
var inst_49297 = (state_49314[(2)]);
var state_49314__$1 = state_49314;
var statearr_49334_49355 = state_49314__$1;
(statearr_49334_49355[(2)] = inst_49297);

(statearr_49334_49355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (8))){
var inst_49278 = (state_49314[(9)]);
var inst_49282 = (state_49314[(10)]);
var inst_49274 = (state_49314[(8)]);
var inst_49287 = inst_49274.push(inst_49278);
var tmp49331 = inst_49274;
var inst_49274__$1 = tmp49331;
var inst_49275 = inst_49282;
var state_49314__$1 = (function (){var statearr_49335 = state_49314;
(statearr_49335[(7)] = inst_49275);

(statearr_49335[(14)] = inst_49287);

(statearr_49335[(8)] = inst_49274__$1);

return statearr_49335;
})();
var statearr_49336_49356 = state_49314__$1;
(statearr_49336_49356[(2)] = null);

(statearr_49336_49356[(1)] = (2));


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
});})(c__47438__auto___49342,out))
;
return ((function (switch__47348__auto__,c__47438__auto___49342,out){
return (function() {
var cljs$core$async$state_machine__47349__auto__ = null;
var cljs$core$async$state_machine__47349__auto____0 = (function (){
var statearr_49337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49337[(0)] = cljs$core$async$state_machine__47349__auto__);

(statearr_49337[(1)] = (1));

return statearr_49337;
});
var cljs$core$async$state_machine__47349__auto____1 = (function (state_49314){
while(true){
var ret_value__47350__auto__ = (function (){try{while(true){
var result__47351__auto__ = switch__47348__auto__.call(null,state_49314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47351__auto__;
}
break;
}
}catch (e49338){if((e49338 instanceof Object)){
var ex__47352__auto__ = e49338;
var statearr_49339_49357 = state_49314;
(statearr_49339_49357[(5)] = ex__47352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49358 = state_49314;
state_49314 = G__49358;
continue;
} else {
return ret_value__47350__auto__;
}
break;
}
});
cljs$core$async$state_machine__47349__auto__ = function(state_49314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47349__auto____1.call(this,state_49314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47349__auto____0;
cljs$core$async$state_machine__47349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47349__auto____1;
return cljs$core$async$state_machine__47349__auto__;
})()
;})(switch__47348__auto__,c__47438__auto___49342,out))
})();
var state__47440__auto__ = (function (){var statearr_49340 = f__47439__auto__.call(null);
(statearr_49340[(6)] = c__47438__auto___49342);

return statearr_49340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47440__auto__);
});})(c__47438__auto___49342,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1524597520943
