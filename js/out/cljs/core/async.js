// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28803 = arguments.length;
switch (G__28803) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28804 = (function (f,blockable,meta28805){
this.f = f;
this.blockable = blockable;
this.meta28805 = meta28805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28806,meta28805__$1){
var self__ = this;
var _28806__$1 = this;
return (new cljs.core.async.t_cljs$core$async28804(self__.f,self__.blockable,meta28805__$1));
}));

(cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28806){
var self__ = this;
var _28806__$1 = this;
return self__.meta28805;
}));

(cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28805","meta28805",-562272878,null)], null);
}));

(cljs.core.async.t_cljs$core$async28804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28804");

(cljs.core.async.t_cljs$core$async28804.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28804.
 */
cljs.core.async.__GT_t_cljs$core$async28804 = (function cljs$core$async$__GT_t_cljs$core$async28804(f__$1,blockable__$1,meta28805){
return (new cljs.core.async.t_cljs$core$async28804(f__$1,blockable__$1,meta28805));
});

}

return (new cljs.core.async.t_cljs$core$async28804(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__28810 = arguments.length;
switch (G__28810) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28813 = arguments.length;
switch (G__28813) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__28816 = arguments.length;
switch (G__28816) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28818 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28818);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_28818);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__28820 = arguments.length;
switch (G__28820) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___28822 = n;
var x_28823 = (0);
while(true){
if((x_28823 < n__4741__auto___28822)){
(a[x_28823] = (0));

var G__28824 = (x_28823 + (1));
x_28823 = G__28824;
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

var G__28825 = (i + (1));
i = G__28825;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28826 = (function (flag,meta28827){
this.flag = flag;
this.meta28827 = meta28827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28828,meta28827__$1){
var self__ = this;
var _28828__$1 = this;
return (new cljs.core.async.t_cljs$core$async28826(self__.flag,meta28827__$1));
}));

(cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28828){
var self__ = this;
var _28828__$1 = this;
return self__.meta28827;
}));

(cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28827","meta28827",-441577323,null)], null);
}));

(cljs.core.async.t_cljs$core$async28826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28826");

(cljs.core.async.t_cljs$core$async28826.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28826.
 */
cljs.core.async.__GT_t_cljs$core$async28826 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28826(flag__$1,meta28827){
return (new cljs.core.async.t_cljs$core$async28826(flag__$1,meta28827));
});

}

return (new cljs.core.async.t_cljs$core$async28826(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28829 = (function (flag,cb,meta28830){
this.flag = flag;
this.cb = cb;
this.meta28830 = meta28830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28831,meta28830__$1){
var self__ = this;
var _28831__$1 = this;
return (new cljs.core.async.t_cljs$core$async28829(self__.flag,self__.cb,meta28830__$1));
}));

(cljs.core.async.t_cljs$core$async28829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28831){
var self__ = this;
var _28831__$1 = this;
return self__.meta28830;
}));

(cljs.core.async.t_cljs$core$async28829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28830","meta28830",2134237874,null)], null);
}));

(cljs.core.async.t_cljs$core$async28829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28829");

(cljs.core.async.t_cljs$core$async28829.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28829.
 */
cljs.core.async.__GT_t_cljs$core$async28829 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28829(flag__$1,cb__$1,meta28830){
return (new cljs.core.async.t_cljs$core$async28829(flag__$1,cb__$1,meta28830));
});

}

return (new cljs.core.async.t_cljs$core$async28829(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28832_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28832_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28833_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28833_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28834 = (i + (1));
i = G__28834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___28839 = arguments.length;
var i__4865__auto___28840 = (0);
while(true){
if((i__4865__auto___28840 < len__4864__auto___28839)){
args__4870__auto__.push((arguments[i__4865__auto___28840]));

var G__28841 = (i__4865__auto___28840 + (1));
i__4865__auto___28840 = G__28841;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28837){
var map__28838 = p__28837;
var map__28838__$1 = cljs.core.__destructure_map.call(null,map__28838);
var opts = map__28838__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28835){
var G__28836 = cljs.core.first.call(null,seq28835);
var seq28835__$1 = cljs.core.next.call(null,seq28835);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28836,seq28835__$1);
}));

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
var G__28843 = arguments.length;
switch (G__28843) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28743__auto___28889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_28867){
var state_val_28868 = (state_28867[(1)]);
if((state_val_28868 === (7))){
var inst_28863 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28869_28890 = state_28867__$1;
(statearr_28869_28890[(2)] = inst_28863);

(statearr_28869_28890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (1))){
var state_28867__$1 = state_28867;
var statearr_28870_28891 = state_28867__$1;
(statearr_28870_28891[(2)] = null);

(statearr_28870_28891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (4))){
var inst_28846 = (state_28867[(7)]);
var inst_28846__$1 = (state_28867[(2)]);
var inst_28847 = (inst_28846__$1 == null);
var state_28867__$1 = (function (){var statearr_28871 = state_28867;
(statearr_28871[(7)] = inst_28846__$1);

return statearr_28871;
})();
if(cljs.core.truth_(inst_28847)){
var statearr_28872_28892 = state_28867__$1;
(statearr_28872_28892[(1)] = (5));

} else {
var statearr_28873_28893 = state_28867__$1;
(statearr_28873_28893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (13))){
var state_28867__$1 = state_28867;
var statearr_28874_28894 = state_28867__$1;
(statearr_28874_28894[(2)] = null);

(statearr_28874_28894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (6))){
var inst_28846 = (state_28867[(7)]);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28867__$1,(11),to,inst_28846);
} else {
if((state_val_28868 === (3))){
var inst_28865 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28867__$1,inst_28865);
} else {
if((state_val_28868 === (12))){
var state_28867__$1 = state_28867;
var statearr_28875_28895 = state_28867__$1;
(statearr_28875_28895[(2)] = null);

(statearr_28875_28895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (2))){
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28867__$1,(4),from);
} else {
if((state_val_28868 === (11))){
var inst_28856 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
if(cljs.core.truth_(inst_28856)){
var statearr_28876_28896 = state_28867__$1;
(statearr_28876_28896[(1)] = (12));

} else {
var statearr_28877_28897 = state_28867__$1;
(statearr_28877_28897[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (9))){
var state_28867__$1 = state_28867;
var statearr_28878_28898 = state_28867__$1;
(statearr_28878_28898[(2)] = null);

(statearr_28878_28898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (5))){
var state_28867__$1 = state_28867;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28879_28899 = state_28867__$1;
(statearr_28879_28899[(1)] = (8));

} else {
var statearr_28880_28900 = state_28867__$1;
(statearr_28880_28900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (14))){
var inst_28861 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28881_28901 = state_28867__$1;
(statearr_28881_28901[(2)] = inst_28861);

(statearr_28881_28901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (10))){
var inst_28853 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28882_28902 = state_28867__$1;
(statearr_28882_28902[(2)] = inst_28853);

(statearr_28882_28902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (8))){
var inst_28850 = cljs.core.async.close_BANG_.call(null,to);
var state_28867__$1 = state_28867;
var statearr_28883_28903 = state_28867__$1;
(statearr_28883_28903[(2)] = inst_28850);

(statearr_28883_28903[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_28884 = [null,null,null,null,null,null,null,null];
(statearr_28884[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_28884[(1)] = (1));

return statearr_28884;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_28867){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_28867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e28885){if((e28885 instanceof Object)){
var ex__28650__auto__ = e28885;
var statearr_28886_28904 = state_28867;
(statearr_28886_28904[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28905 = state_28867;
state_28867 = G__28905;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_28867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_28867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_28887 = f__28744__auto__.call(null);
(statearr_28887[(6)] = c__28743__auto___28889);

return statearr_28887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__28906){
var vec__28907 = p__28906;
var v = cljs.core.nth.call(null,vec__28907,(0),null);
var p = cljs.core.nth.call(null,vec__28907,(1),null);
var job = vec__28907;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28743__auto___29078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_28914){
var state_val_28915 = (state_28914[(1)]);
if((state_val_28915 === (1))){
var state_28914__$1 = state_28914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28914__$1,(2),res,v);
} else {
if((state_val_28915 === (2))){
var inst_28911 = (state_28914[(2)]);
var inst_28912 = cljs.core.async.close_BANG_.call(null,res);
var state_28914__$1 = (function (){var statearr_28916 = state_28914;
(statearr_28916[(7)] = inst_28911);

return statearr_28916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28914__$1,inst_28912);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_28917 = [null,null,null,null,null,null,null,null];
(statearr_28917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_28917[(1)] = (1));

return statearr_28917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_28914){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_28914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e28918){if((e28918 instanceof Object)){
var ex__28650__auto__ = e28918;
var statearr_28919_29079 = state_28914;
(statearr_28919_29079[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29080 = state_28914;
state_28914 = G__29080;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_28914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_28914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_28920 = f__28744__auto__.call(null);
(statearr_28920[(6)] = c__28743__auto___29078);

return statearr_28920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__28921){
var vec__28922 = p__28921;
var v = cljs.core.nth.call(null,vec__28922,(0),null);
var p = cljs.core.nth.call(null,vec__28922,(1),null);
var job = vec__28922;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4741__auto___29081 = n;
var __29082 = (0);
while(true){
if((__29082 < n__4741__auto___29081)){
var G__28925_29083 = type;
var G__28925_29084__$1 = (((G__28925_29083 instanceof cljs.core.Keyword))?G__28925_29083.fqn:null);
switch (G__28925_29084__$1) {
case "compute":
var c__28743__auto___29086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29082,c__28743__auto___29086,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async){
return (function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = ((function (__29082,c__28743__auto___29086,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async){
return (function (state_28938){
var state_val_28939 = (state_28938[(1)]);
if((state_val_28939 === (1))){
var state_28938__$1 = state_28938;
var statearr_28940_29087 = state_28938__$1;
(statearr_28940_29087[(2)] = null);

(statearr_28940_29087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (2))){
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28938__$1,(4),jobs);
} else {
if((state_val_28939 === (3))){
var inst_28936 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28938__$1,inst_28936);
} else {
if((state_val_28939 === (4))){
var inst_28928 = (state_28938[(2)]);
var inst_28929 = process.call(null,inst_28928);
var state_28938__$1 = state_28938;
if(cljs.core.truth_(inst_28929)){
var statearr_28941_29088 = state_28938__$1;
(statearr_28941_29088[(1)] = (5));

} else {
var statearr_28942_29089 = state_28938__$1;
(statearr_28942_29089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (5))){
var state_28938__$1 = state_28938;
var statearr_28943_29090 = state_28938__$1;
(statearr_28943_29090[(2)] = null);

(statearr_28943_29090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (6))){
var state_28938__$1 = state_28938;
var statearr_28944_29091 = state_28938__$1;
(statearr_28944_29091[(2)] = null);

(statearr_28944_29091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (7))){
var inst_28934 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28945_29092 = state_28938__$1;
(statearr_28945_29092[(2)] = inst_28934);

(statearr_28945_29092[(1)] = (3));


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
});})(__29082,c__28743__auto___29086,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async))
;
return ((function (__29082,switch__28646__auto__,c__28743__auto___29086,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_28946 = [null,null,null,null,null,null,null];
(statearr_28946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_28946[(1)] = (1));

return statearr_28946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_28938){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_28938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e28947){if((e28947 instanceof Object)){
var ex__28650__auto__ = e28947;
var statearr_28948_29093 = state_28938;
(statearr_28948_29093[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29094 = state_28938;
state_28938 = G__29094;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_28938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_28938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
;})(__29082,switch__28646__auto__,c__28743__auto___29086,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async))
})();
var state__28745__auto__ = (function (){var statearr_28949 = f__28744__auto__.call(null);
(statearr_28949[(6)] = c__28743__auto___29086);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
});})(__29082,c__28743__auto___29086,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async))
);


break;
case "async":
var c__28743__auto___29095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29082,c__28743__auto___29095,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async){
return (function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = ((function (__29082,c__28743__auto___29095,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async){
return (function (state_28962){
var state_val_28963 = (state_28962[(1)]);
if((state_val_28963 === (1))){
var state_28962__$1 = state_28962;
var statearr_28964_29096 = state_28962__$1;
(statearr_28964_29096[(2)] = null);

(statearr_28964_29096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (2))){
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28962__$1,(4),jobs);
} else {
if((state_val_28963 === (3))){
var inst_28960 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28962__$1,inst_28960);
} else {
if((state_val_28963 === (4))){
var inst_28952 = (state_28962[(2)]);
var inst_28953 = async.call(null,inst_28952);
var state_28962__$1 = state_28962;
if(cljs.core.truth_(inst_28953)){
var statearr_28965_29097 = state_28962__$1;
(statearr_28965_29097[(1)] = (5));

} else {
var statearr_28966_29098 = state_28962__$1;
(statearr_28966_29098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (5))){
var state_28962__$1 = state_28962;
var statearr_28967_29099 = state_28962__$1;
(statearr_28967_29099[(2)] = null);

(statearr_28967_29099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (6))){
var state_28962__$1 = state_28962;
var statearr_28968_29100 = state_28962__$1;
(statearr_28968_29100[(2)] = null);

(statearr_28968_29100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (7))){
var inst_28958 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28969_29101 = state_28962__$1;
(statearr_28969_29101[(2)] = inst_28958);

(statearr_28969_29101[(1)] = (3));


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
});})(__29082,c__28743__auto___29095,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async))
;
return ((function (__29082,switch__28646__auto__,c__28743__auto___29095,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_28970 = [null,null,null,null,null,null,null];
(statearr_28970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_28970[(1)] = (1));

return statearr_28970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_28962){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_28962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e28971){if((e28971 instanceof Object)){
var ex__28650__auto__ = e28971;
var statearr_28972_29102 = state_28962;
(statearr_28972_29102[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29103 = state_28962;
state_28962 = G__29103;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_28962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_28962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
;})(__29082,switch__28646__auto__,c__28743__auto___29095,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async))
})();
var state__28745__auto__ = (function (){var statearr_28973 = f__28744__auto__.call(null);
(statearr_28973[(6)] = c__28743__auto___29095);

return statearr_28973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
});})(__29082,c__28743__auto___29095,G__28925_29083,G__28925_29084__$1,n__4741__auto___29081,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28925_29084__$1)].join('')));

}

var G__29104 = (__29082 + (1));
__29082 = G__29104;
continue;
} else {
}
break;
}

var c__28743__auto___29105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_28995){
var state_val_28996 = (state_28995[(1)]);
if((state_val_28996 === (7))){
var inst_28991 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_28997_29106 = state_28995__$1;
(statearr_28997_29106[(2)] = inst_28991);

(statearr_28997_29106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (1))){
var state_28995__$1 = state_28995;
var statearr_28998_29107 = state_28995__$1;
(statearr_28998_29107[(2)] = null);

(statearr_28998_29107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (4))){
var inst_28976 = (state_28995[(7)]);
var inst_28976__$1 = (state_28995[(2)]);
var inst_28977 = (inst_28976__$1 == null);
var state_28995__$1 = (function (){var statearr_28999 = state_28995;
(statearr_28999[(7)] = inst_28976__$1);

return statearr_28999;
})();
if(cljs.core.truth_(inst_28977)){
var statearr_29000_29108 = state_28995__$1;
(statearr_29000_29108[(1)] = (5));

} else {
var statearr_29001_29109 = state_28995__$1;
(statearr_29001_29109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (6))){
var inst_28976 = (state_28995[(7)]);
var inst_28981 = (state_28995[(8)]);
var inst_28981__$1 = cljs.core.async.chan.call(null,(1));
var inst_28982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28983 = [inst_28976,inst_28981__$1];
var inst_28984 = (new cljs.core.PersistentVector(null,2,(5),inst_28982,inst_28983,null));
var state_28995__$1 = (function (){var statearr_29002 = state_28995;
(statearr_29002[(8)] = inst_28981__$1);

return statearr_29002;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(8),jobs,inst_28984);
} else {
if((state_val_28996 === (3))){
var inst_28993 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28995__$1,inst_28993);
} else {
if((state_val_28996 === (2))){
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(4),from);
} else {
if((state_val_28996 === (9))){
var inst_28988 = (state_28995[(2)]);
var state_28995__$1 = (function (){var statearr_29003 = state_28995;
(statearr_29003[(9)] = inst_28988);

return statearr_29003;
})();
var statearr_29004_29110 = state_28995__$1;
(statearr_29004_29110[(2)] = null);

(statearr_29004_29110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (5))){
var inst_28979 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28995__$1 = state_28995;
var statearr_29005_29111 = state_28995__$1;
(statearr_29005_29111[(2)] = inst_28979);

(statearr_29005_29111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (8))){
var inst_28981 = (state_28995[(8)]);
var inst_28986 = (state_28995[(2)]);
var state_28995__$1 = (function (){var statearr_29006 = state_28995;
(statearr_29006[(10)] = inst_28986);

return statearr_29006;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(9),results,inst_28981);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_29007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_29007[(1)] = (1));

return statearr_29007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_28995){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_28995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29008){if((e29008 instanceof Object)){
var ex__28650__auto__ = e29008;
var statearr_29009_29112 = state_28995;
(statearr_29009_29112[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29113 = state_28995;
state_28995 = G__29113;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_28995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_28995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29010 = f__28744__auto__.call(null);
(statearr_29010[(6)] = c__28743__auto___29105);

return statearr_29010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29048){
var state_val_29049 = (state_29048[(1)]);
if((state_val_29049 === (7))){
var inst_29044 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
var statearr_29050_29114 = state_29048__$1;
(statearr_29050_29114[(2)] = inst_29044);

(statearr_29050_29114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (20))){
var state_29048__$1 = state_29048;
var statearr_29051_29115 = state_29048__$1;
(statearr_29051_29115[(2)] = null);

(statearr_29051_29115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (1))){
var state_29048__$1 = state_29048;
var statearr_29052_29116 = state_29048__$1;
(statearr_29052_29116[(2)] = null);

(statearr_29052_29116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (4))){
var inst_29013 = (state_29048[(7)]);
var inst_29013__$1 = (state_29048[(2)]);
var inst_29014 = (inst_29013__$1 == null);
var state_29048__$1 = (function (){var statearr_29053 = state_29048;
(statearr_29053[(7)] = inst_29013__$1);

return statearr_29053;
})();
if(cljs.core.truth_(inst_29014)){
var statearr_29054_29117 = state_29048__$1;
(statearr_29054_29117[(1)] = (5));

} else {
var statearr_29055_29118 = state_29048__$1;
(statearr_29055_29118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (15))){
var inst_29026 = (state_29048[(8)]);
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29048__$1,(18),to,inst_29026);
} else {
if((state_val_29049 === (21))){
var inst_29039 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
var statearr_29056_29119 = state_29048__$1;
(statearr_29056_29119[(2)] = inst_29039);

(statearr_29056_29119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (13))){
var inst_29041 = (state_29048[(2)]);
var state_29048__$1 = (function (){var statearr_29057 = state_29048;
(statearr_29057[(9)] = inst_29041);

return statearr_29057;
})();
var statearr_29058_29120 = state_29048__$1;
(statearr_29058_29120[(2)] = null);

(statearr_29058_29120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (6))){
var inst_29013 = (state_29048[(7)]);
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29048__$1,(11),inst_29013);
} else {
if((state_val_29049 === (17))){
var inst_29034 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
if(cljs.core.truth_(inst_29034)){
var statearr_29059_29121 = state_29048__$1;
(statearr_29059_29121[(1)] = (19));

} else {
var statearr_29060_29122 = state_29048__$1;
(statearr_29060_29122[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (3))){
var inst_29046 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29048__$1,inst_29046);
} else {
if((state_val_29049 === (12))){
var inst_29023 = (state_29048[(10)]);
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29048__$1,(14),inst_29023);
} else {
if((state_val_29049 === (2))){
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29048__$1,(4),results);
} else {
if((state_val_29049 === (19))){
var state_29048__$1 = state_29048;
var statearr_29061_29123 = state_29048__$1;
(statearr_29061_29123[(2)] = null);

(statearr_29061_29123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (11))){
var inst_29023 = (state_29048[(2)]);
var state_29048__$1 = (function (){var statearr_29062 = state_29048;
(statearr_29062[(10)] = inst_29023);

return statearr_29062;
})();
var statearr_29063_29124 = state_29048__$1;
(statearr_29063_29124[(2)] = null);

(statearr_29063_29124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (9))){
var state_29048__$1 = state_29048;
var statearr_29064_29125 = state_29048__$1;
(statearr_29064_29125[(2)] = null);

(statearr_29064_29125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (5))){
var state_29048__$1 = state_29048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29065_29126 = state_29048__$1;
(statearr_29065_29126[(1)] = (8));

} else {
var statearr_29066_29127 = state_29048__$1;
(statearr_29066_29127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (14))){
var inst_29026 = (state_29048[(8)]);
var inst_29028 = (state_29048[(11)]);
var inst_29026__$1 = (state_29048[(2)]);
var inst_29027 = (inst_29026__$1 == null);
var inst_29028__$1 = cljs.core.not.call(null,inst_29027);
var state_29048__$1 = (function (){var statearr_29067 = state_29048;
(statearr_29067[(8)] = inst_29026__$1);

(statearr_29067[(11)] = inst_29028__$1);

return statearr_29067;
})();
if(inst_29028__$1){
var statearr_29068_29128 = state_29048__$1;
(statearr_29068_29128[(1)] = (15));

} else {
var statearr_29069_29129 = state_29048__$1;
(statearr_29069_29129[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (16))){
var inst_29028 = (state_29048[(11)]);
var state_29048__$1 = state_29048;
var statearr_29070_29130 = state_29048__$1;
(statearr_29070_29130[(2)] = inst_29028);

(statearr_29070_29130[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (10))){
var inst_29020 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
var statearr_29071_29131 = state_29048__$1;
(statearr_29071_29131[(2)] = inst_29020);

(statearr_29071_29131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (18))){
var inst_29031 = (state_29048[(2)]);
var state_29048__$1 = state_29048;
var statearr_29072_29132 = state_29048__$1;
(statearr_29072_29132[(2)] = inst_29031);

(statearr_29072_29132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (8))){
var inst_29017 = cljs.core.async.close_BANG_.call(null,to);
var state_29048__$1 = state_29048;
var statearr_29073_29133 = state_29048__$1;
(statearr_29073_29133[(2)] = inst_29017);

(statearr_29073_29133[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_29074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__);

(statearr_29074[(1)] = (1));

return statearr_29074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1 = (function (state_29048){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29075){if((e29075 instanceof Object)){
var ex__28650__auto__ = e29075;
var statearr_29076_29134 = state_29048;
(statearr_29076_29134[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29135 = state_29048;
state_29048 = G__29135;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__ = function(state_29048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1.call(this,state_29048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29077 = f__28744__auto__.call(null);
(statearr_29077[(6)] = c__28743__auto__);

return statearr_29077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
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
var G__29137 = arguments.length;
switch (G__29137) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__29140 = arguments.length;
switch (G__29140) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__29143 = arguments.length;
switch (G__29143) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28743__auto___29192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29169){
var state_val_29170 = (state_29169[(1)]);
if((state_val_29170 === (7))){
var inst_29165 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29171_29193 = state_29169__$1;
(statearr_29171_29193[(2)] = inst_29165);

(statearr_29171_29193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (1))){
var state_29169__$1 = state_29169;
var statearr_29172_29194 = state_29169__$1;
(statearr_29172_29194[(2)] = null);

(statearr_29172_29194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (4))){
var inst_29146 = (state_29169[(7)]);
var inst_29146__$1 = (state_29169[(2)]);
var inst_29147 = (inst_29146__$1 == null);
var state_29169__$1 = (function (){var statearr_29173 = state_29169;
(statearr_29173[(7)] = inst_29146__$1);

return statearr_29173;
})();
if(cljs.core.truth_(inst_29147)){
var statearr_29174_29195 = state_29169__$1;
(statearr_29174_29195[(1)] = (5));

} else {
var statearr_29175_29196 = state_29169__$1;
(statearr_29175_29196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (13))){
var state_29169__$1 = state_29169;
var statearr_29176_29197 = state_29169__$1;
(statearr_29176_29197[(2)] = null);

(statearr_29176_29197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (6))){
var inst_29146 = (state_29169[(7)]);
var inst_29152 = p.call(null,inst_29146);
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29152)){
var statearr_29177_29198 = state_29169__$1;
(statearr_29177_29198[(1)] = (9));

} else {
var statearr_29178_29199 = state_29169__$1;
(statearr_29178_29199[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (3))){
var inst_29167 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29169__$1,inst_29167);
} else {
if((state_val_29170 === (12))){
var state_29169__$1 = state_29169;
var statearr_29179_29200 = state_29169__$1;
(statearr_29179_29200[(2)] = null);

(statearr_29179_29200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (2))){
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29169__$1,(4),ch);
} else {
if((state_val_29170 === (11))){
var inst_29146 = (state_29169[(7)]);
var inst_29156 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29169__$1,(8),inst_29156,inst_29146);
} else {
if((state_val_29170 === (9))){
var state_29169__$1 = state_29169;
var statearr_29180_29201 = state_29169__$1;
(statearr_29180_29201[(2)] = tc);

(statearr_29180_29201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (5))){
var inst_29149 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29150 = cljs.core.async.close_BANG_.call(null,fc);
var state_29169__$1 = (function (){var statearr_29181 = state_29169;
(statearr_29181[(8)] = inst_29149);

return statearr_29181;
})();
var statearr_29182_29202 = state_29169__$1;
(statearr_29182_29202[(2)] = inst_29150);

(statearr_29182_29202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (14))){
var inst_29163 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29183_29203 = state_29169__$1;
(statearr_29183_29203[(2)] = inst_29163);

(statearr_29183_29203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (10))){
var state_29169__$1 = state_29169;
var statearr_29184_29204 = state_29169__$1;
(statearr_29184_29204[(2)] = fc);

(statearr_29184_29204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (8))){
var inst_29158 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29158)){
var statearr_29185_29205 = state_29169__$1;
(statearr_29185_29205[(1)] = (12));

} else {
var statearr_29186_29206 = state_29169__$1;
(statearr_29186_29206[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_29187 = [null,null,null,null,null,null,null,null,null];
(statearr_29187[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_29187[(1)] = (1));

return statearr_29187;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_29169){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29188){if((e29188 instanceof Object)){
var ex__28650__auto__ = e29188;
var statearr_29189_29207 = state_29169;
(statearr_29189_29207[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29208 = state_29169;
state_29169 = G__29208;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_29169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_29169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29190 = f__28744__auto__.call(null);
(statearr_29190[(6)] = c__28743__auto___29192);

return statearr_29190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29229){
var state_val_29230 = (state_29229[(1)]);
if((state_val_29230 === (7))){
var inst_29225 = (state_29229[(2)]);
var state_29229__$1 = state_29229;
var statearr_29231_29249 = state_29229__$1;
(statearr_29231_29249[(2)] = inst_29225);

(statearr_29231_29249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (1))){
var inst_29209 = init;
var state_29229__$1 = (function (){var statearr_29232 = state_29229;
(statearr_29232[(7)] = inst_29209);

return statearr_29232;
})();
var statearr_29233_29250 = state_29229__$1;
(statearr_29233_29250[(2)] = null);

(statearr_29233_29250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (4))){
var inst_29212 = (state_29229[(8)]);
var inst_29212__$1 = (state_29229[(2)]);
var inst_29213 = (inst_29212__$1 == null);
var state_29229__$1 = (function (){var statearr_29234 = state_29229;
(statearr_29234[(8)] = inst_29212__$1);

return statearr_29234;
})();
if(cljs.core.truth_(inst_29213)){
var statearr_29235_29251 = state_29229__$1;
(statearr_29235_29251[(1)] = (5));

} else {
var statearr_29236_29252 = state_29229__$1;
(statearr_29236_29252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (6))){
var inst_29216 = (state_29229[(9)]);
var inst_29212 = (state_29229[(8)]);
var inst_29209 = (state_29229[(7)]);
var inst_29216__$1 = f.call(null,inst_29209,inst_29212);
var inst_29217 = cljs.core.reduced_QMARK_.call(null,inst_29216__$1);
var state_29229__$1 = (function (){var statearr_29237 = state_29229;
(statearr_29237[(9)] = inst_29216__$1);

return statearr_29237;
})();
if(inst_29217){
var statearr_29238_29253 = state_29229__$1;
(statearr_29238_29253[(1)] = (8));

} else {
var statearr_29239_29254 = state_29229__$1;
(statearr_29239_29254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (3))){
var inst_29227 = (state_29229[(2)]);
var state_29229__$1 = state_29229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29229__$1,inst_29227);
} else {
if((state_val_29230 === (2))){
var state_29229__$1 = state_29229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29229__$1,(4),ch);
} else {
if((state_val_29230 === (9))){
var inst_29216 = (state_29229[(9)]);
var inst_29209 = inst_29216;
var state_29229__$1 = (function (){var statearr_29240 = state_29229;
(statearr_29240[(7)] = inst_29209);

return statearr_29240;
})();
var statearr_29241_29255 = state_29229__$1;
(statearr_29241_29255[(2)] = null);

(statearr_29241_29255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (5))){
var inst_29209 = (state_29229[(7)]);
var state_29229__$1 = state_29229;
var statearr_29242_29256 = state_29229__$1;
(statearr_29242_29256[(2)] = inst_29209);

(statearr_29242_29256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (10))){
var inst_29223 = (state_29229[(2)]);
var state_29229__$1 = state_29229;
var statearr_29243_29257 = state_29229__$1;
(statearr_29243_29257[(2)] = inst_29223);

(statearr_29243_29257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (8))){
var inst_29216 = (state_29229[(9)]);
var inst_29219 = cljs.core.deref.call(null,inst_29216);
var state_29229__$1 = state_29229;
var statearr_29244_29258 = state_29229__$1;
(statearr_29244_29258[(2)] = inst_29219);

(statearr_29244_29258[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28647__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28647__auto____0 = (function (){
var statearr_29245 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29245[(0)] = cljs$core$async$reduce_$_state_machine__28647__auto__);

(statearr_29245[(1)] = (1));

return statearr_29245;
});
var cljs$core$async$reduce_$_state_machine__28647__auto____1 = (function (state_29229){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29246){if((e29246 instanceof Object)){
var ex__28650__auto__ = e29246;
var statearr_29247_29259 = state_29229;
(statearr_29247_29259[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29260 = state_29229;
state_29229 = G__29260;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28647__auto__ = function(state_29229){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28647__auto____1.call(this,state_29229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28647__auto____0;
cljs$core$async$reduce_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28647__auto____1;
return cljs$core$async$reduce_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29248 = f__28744__auto__.call(null);
(statearr_29248[(6)] = c__28743__auto__);

return statearr_29248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29266){
var state_val_29267 = (state_29266[(1)]);
if((state_val_29267 === (1))){
var inst_29261 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29266__$1 = state_29266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29266__$1,(2),inst_29261);
} else {
if((state_val_29267 === (2))){
var inst_29263 = (state_29266[(2)]);
var inst_29264 = f__$1.call(null,inst_29263);
var state_29266__$1 = state_29266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29266__$1,inst_29264);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28647__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28647__auto____0 = (function (){
var statearr_29268 = [null,null,null,null,null,null,null];
(statearr_29268[(0)] = cljs$core$async$transduce_$_state_machine__28647__auto__);

(statearr_29268[(1)] = (1));

return statearr_29268;
});
var cljs$core$async$transduce_$_state_machine__28647__auto____1 = (function (state_29266){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29269){if((e29269 instanceof Object)){
var ex__28650__auto__ = e29269;
var statearr_29270_29272 = state_29266;
(statearr_29270_29272[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29273 = state_29266;
state_29266 = G__29273;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28647__auto__ = function(state_29266){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28647__auto____1.call(this,state_29266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28647__auto____0;
cljs$core$async$transduce_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28647__auto____1;
return cljs$core$async$transduce_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29271 = f__28744__auto__.call(null);
(statearr_29271[(6)] = c__28743__auto__);

return statearr_29271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
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
var G__29275 = arguments.length;
switch (G__29275) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29300){
var state_val_29301 = (state_29300[(1)]);
if((state_val_29301 === (7))){
var inst_29282 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29302_29323 = state_29300__$1;
(statearr_29302_29323[(2)] = inst_29282);

(statearr_29302_29323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (1))){
var inst_29276 = cljs.core.seq.call(null,coll);
var inst_29277 = inst_29276;
var state_29300__$1 = (function (){var statearr_29303 = state_29300;
(statearr_29303[(7)] = inst_29277);

return statearr_29303;
})();
var statearr_29304_29324 = state_29300__$1;
(statearr_29304_29324[(2)] = null);

(statearr_29304_29324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (4))){
var inst_29277 = (state_29300[(7)]);
var inst_29280 = cljs.core.first.call(null,inst_29277);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29300__$1,(7),ch,inst_29280);
} else {
if((state_val_29301 === (13))){
var inst_29294 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29305_29325 = state_29300__$1;
(statearr_29305_29325[(2)] = inst_29294);

(statearr_29305_29325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (6))){
var inst_29285 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29285)){
var statearr_29306_29326 = state_29300__$1;
(statearr_29306_29326[(1)] = (8));

} else {
var statearr_29307_29327 = state_29300__$1;
(statearr_29307_29327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (3))){
var inst_29298 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29300__$1,inst_29298);
} else {
if((state_val_29301 === (12))){
var state_29300__$1 = state_29300;
var statearr_29308_29328 = state_29300__$1;
(statearr_29308_29328[(2)] = null);

(statearr_29308_29328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (2))){
var inst_29277 = (state_29300[(7)]);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29277)){
var statearr_29309_29329 = state_29300__$1;
(statearr_29309_29329[(1)] = (4));

} else {
var statearr_29310_29330 = state_29300__$1;
(statearr_29310_29330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (11))){
var inst_29291 = cljs.core.async.close_BANG_.call(null,ch);
var state_29300__$1 = state_29300;
var statearr_29311_29331 = state_29300__$1;
(statearr_29311_29331[(2)] = inst_29291);

(statearr_29311_29331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (9))){
var state_29300__$1 = state_29300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29312_29332 = state_29300__$1;
(statearr_29312_29332[(1)] = (11));

} else {
var statearr_29313_29333 = state_29300__$1;
(statearr_29313_29333[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (5))){
var inst_29277 = (state_29300[(7)]);
var state_29300__$1 = state_29300;
var statearr_29314_29334 = state_29300__$1;
(statearr_29314_29334[(2)] = inst_29277);

(statearr_29314_29334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (10))){
var inst_29296 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29315_29335 = state_29300__$1;
(statearr_29315_29335[(2)] = inst_29296);

(statearr_29315_29335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (8))){
var inst_29277 = (state_29300[(7)]);
var inst_29287 = cljs.core.next.call(null,inst_29277);
var inst_29277__$1 = inst_29287;
var state_29300__$1 = (function (){var statearr_29316 = state_29300;
(statearr_29316[(7)] = inst_29277__$1);

return statearr_29316;
})();
var statearr_29317_29336 = state_29300__$1;
(statearr_29317_29336[(2)] = null);

(statearr_29317_29336[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_29318 = [null,null,null,null,null,null,null,null];
(statearr_29318[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_29318[(1)] = (1));

return statearr_29318;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_29300){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29319){if((e29319 instanceof Object)){
var ex__28650__auto__ = e29319;
var statearr_29320_29337 = state_29300;
(statearr_29320_29337[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29338 = state_29300;
state_29300 = G__29338;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_29300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_29300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29321 = f__28744__auto__.call(null);
(statearr_29321[(6)] = c__28743__auto__);

return statearr_29321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mux$muxch_STAR_$dyn_29339 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29339.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29340 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29340.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29341 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29341.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29342 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29342.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29343 = (function (ch,cs,meta29344){
this.ch = ch;
this.cs = cs;
this.meta29344 = meta29344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29345,meta29344__$1){
var self__ = this;
var _29345__$1 = this;
return (new cljs.core.async.t_cljs$core$async29343(self__.ch,self__.cs,meta29344__$1));
}));

(cljs.core.async.t_cljs$core$async29343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29345){
var self__ = this;
var _29345__$1 = this;
return self__.meta29344;
}));

(cljs.core.async.t_cljs$core$async29343.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29343.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29343.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29343.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29343.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29344","meta29344",898524539,null)], null);
}));

(cljs.core.async.t_cljs$core$async29343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29343");

(cljs.core.async.t_cljs$core$async29343.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29343.
 */
cljs.core.async.__GT_t_cljs$core$async29343 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29343(ch__$1,cs__$1,meta29344){
return (new cljs.core.async.t_cljs$core$async29343(ch__$1,cs__$1,meta29344));
});

}

return (new cljs.core.async.t_cljs$core$async29343(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__28743__auto___29565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29480){
var state_val_29481 = (state_29480[(1)]);
if((state_val_29481 === (7))){
var inst_29476 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29482_29566 = state_29480__$1;
(statearr_29482_29566[(2)] = inst_29476);

(statearr_29482_29566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (20))){
var inst_29379 = (state_29480[(7)]);
var inst_29391 = cljs.core.first.call(null,inst_29379);
var inst_29392 = cljs.core.nth.call(null,inst_29391,(0),null);
var inst_29393 = cljs.core.nth.call(null,inst_29391,(1),null);
var state_29480__$1 = (function (){var statearr_29483 = state_29480;
(statearr_29483[(8)] = inst_29392);

return statearr_29483;
})();
if(cljs.core.truth_(inst_29393)){
var statearr_29484_29567 = state_29480__$1;
(statearr_29484_29567[(1)] = (22));

} else {
var statearr_29485_29568 = state_29480__$1;
(statearr_29485_29568[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (27))){
var inst_29348 = (state_29480[(9)]);
var inst_29428 = (state_29480[(10)]);
var inst_29421 = (state_29480[(11)]);
var inst_29423 = (state_29480[(12)]);
var inst_29428__$1 = cljs.core._nth.call(null,inst_29421,inst_29423);
var inst_29429 = cljs.core.async.put_BANG_.call(null,inst_29428__$1,inst_29348,done);
var state_29480__$1 = (function (){var statearr_29486 = state_29480;
(statearr_29486[(10)] = inst_29428__$1);

return statearr_29486;
})();
if(cljs.core.truth_(inst_29429)){
var statearr_29487_29569 = state_29480__$1;
(statearr_29487_29569[(1)] = (30));

} else {
var statearr_29488_29570 = state_29480__$1;
(statearr_29488_29570[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (1))){
var state_29480__$1 = state_29480;
var statearr_29489_29571 = state_29480__$1;
(statearr_29489_29571[(2)] = null);

(statearr_29489_29571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (24))){
var inst_29379 = (state_29480[(7)]);
var inst_29398 = (state_29480[(2)]);
var inst_29399 = cljs.core.next.call(null,inst_29379);
var inst_29357 = inst_29399;
var inst_29358 = null;
var inst_29359 = (0);
var inst_29360 = (0);
var state_29480__$1 = (function (){var statearr_29490 = state_29480;
(statearr_29490[(13)] = inst_29357);

(statearr_29490[(14)] = inst_29398);

(statearr_29490[(15)] = inst_29359);

(statearr_29490[(16)] = inst_29358);

(statearr_29490[(17)] = inst_29360);

return statearr_29490;
})();
var statearr_29491_29572 = state_29480__$1;
(statearr_29491_29572[(2)] = null);

(statearr_29491_29572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (39))){
var state_29480__$1 = state_29480;
var statearr_29495_29573 = state_29480__$1;
(statearr_29495_29573[(2)] = null);

(statearr_29495_29573[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (4))){
var inst_29348 = (state_29480[(9)]);
var inst_29348__$1 = (state_29480[(2)]);
var inst_29349 = (inst_29348__$1 == null);
var state_29480__$1 = (function (){var statearr_29496 = state_29480;
(statearr_29496[(9)] = inst_29348__$1);

return statearr_29496;
})();
if(cljs.core.truth_(inst_29349)){
var statearr_29497_29574 = state_29480__$1;
(statearr_29497_29574[(1)] = (5));

} else {
var statearr_29498_29575 = state_29480__$1;
(statearr_29498_29575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (15))){
var inst_29357 = (state_29480[(13)]);
var inst_29359 = (state_29480[(15)]);
var inst_29358 = (state_29480[(16)]);
var inst_29360 = (state_29480[(17)]);
var inst_29375 = (state_29480[(2)]);
var inst_29376 = (inst_29360 + (1));
var tmp29492 = inst_29357;
var tmp29493 = inst_29359;
var tmp29494 = inst_29358;
var inst_29357__$1 = tmp29492;
var inst_29358__$1 = tmp29494;
var inst_29359__$1 = tmp29493;
var inst_29360__$1 = inst_29376;
var state_29480__$1 = (function (){var statearr_29499 = state_29480;
(statearr_29499[(13)] = inst_29357__$1);

(statearr_29499[(18)] = inst_29375);

(statearr_29499[(15)] = inst_29359__$1);

(statearr_29499[(16)] = inst_29358__$1);

(statearr_29499[(17)] = inst_29360__$1);

return statearr_29499;
})();
var statearr_29500_29576 = state_29480__$1;
(statearr_29500_29576[(2)] = null);

(statearr_29500_29576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (21))){
var inst_29402 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29504_29577 = state_29480__$1;
(statearr_29504_29577[(2)] = inst_29402);

(statearr_29504_29577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (31))){
var inst_29428 = (state_29480[(10)]);
var inst_29432 = done.call(null,null);
var inst_29433 = cljs.core.async.untap_STAR_.call(null,m,inst_29428);
var state_29480__$1 = (function (){var statearr_29505 = state_29480;
(statearr_29505[(19)] = inst_29432);

return statearr_29505;
})();
var statearr_29506_29578 = state_29480__$1;
(statearr_29506_29578[(2)] = inst_29433);

(statearr_29506_29578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (32))){
var inst_29422 = (state_29480[(20)]);
var inst_29420 = (state_29480[(21)]);
var inst_29421 = (state_29480[(11)]);
var inst_29423 = (state_29480[(12)]);
var inst_29435 = (state_29480[(2)]);
var inst_29436 = (inst_29423 + (1));
var tmp29501 = inst_29422;
var tmp29502 = inst_29420;
var tmp29503 = inst_29421;
var inst_29420__$1 = tmp29502;
var inst_29421__$1 = tmp29503;
var inst_29422__$1 = tmp29501;
var inst_29423__$1 = inst_29436;
var state_29480__$1 = (function (){var statearr_29507 = state_29480;
(statearr_29507[(20)] = inst_29422__$1);

(statearr_29507[(21)] = inst_29420__$1);

(statearr_29507[(11)] = inst_29421__$1);

(statearr_29507[(12)] = inst_29423__$1);

(statearr_29507[(22)] = inst_29435);

return statearr_29507;
})();
var statearr_29508_29579 = state_29480__$1;
(statearr_29508_29579[(2)] = null);

(statearr_29508_29579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (40))){
var inst_29448 = (state_29480[(23)]);
var inst_29452 = done.call(null,null);
var inst_29453 = cljs.core.async.untap_STAR_.call(null,m,inst_29448);
var state_29480__$1 = (function (){var statearr_29509 = state_29480;
(statearr_29509[(24)] = inst_29452);

return statearr_29509;
})();
var statearr_29510_29580 = state_29480__$1;
(statearr_29510_29580[(2)] = inst_29453);

(statearr_29510_29580[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (33))){
var inst_29439 = (state_29480[(25)]);
var inst_29441 = cljs.core.chunked_seq_QMARK_.call(null,inst_29439);
var state_29480__$1 = state_29480;
if(inst_29441){
var statearr_29511_29581 = state_29480__$1;
(statearr_29511_29581[(1)] = (36));

} else {
var statearr_29512_29582 = state_29480__$1;
(statearr_29512_29582[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (13))){
var inst_29369 = (state_29480[(26)]);
var inst_29372 = cljs.core.async.close_BANG_.call(null,inst_29369);
var state_29480__$1 = state_29480;
var statearr_29513_29583 = state_29480__$1;
(statearr_29513_29583[(2)] = inst_29372);

(statearr_29513_29583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (22))){
var inst_29392 = (state_29480[(8)]);
var inst_29395 = cljs.core.async.close_BANG_.call(null,inst_29392);
var state_29480__$1 = state_29480;
var statearr_29514_29584 = state_29480__$1;
(statearr_29514_29584[(2)] = inst_29395);

(statearr_29514_29584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (36))){
var inst_29439 = (state_29480[(25)]);
var inst_29443 = cljs.core.chunk_first.call(null,inst_29439);
var inst_29444 = cljs.core.chunk_rest.call(null,inst_29439);
var inst_29445 = cljs.core.count.call(null,inst_29443);
var inst_29420 = inst_29444;
var inst_29421 = inst_29443;
var inst_29422 = inst_29445;
var inst_29423 = (0);
var state_29480__$1 = (function (){var statearr_29515 = state_29480;
(statearr_29515[(20)] = inst_29422);

(statearr_29515[(21)] = inst_29420);

(statearr_29515[(11)] = inst_29421);

(statearr_29515[(12)] = inst_29423);

return statearr_29515;
})();
var statearr_29516_29585 = state_29480__$1;
(statearr_29516_29585[(2)] = null);

(statearr_29516_29585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (41))){
var inst_29439 = (state_29480[(25)]);
var inst_29455 = (state_29480[(2)]);
var inst_29456 = cljs.core.next.call(null,inst_29439);
var inst_29420 = inst_29456;
var inst_29421 = null;
var inst_29422 = (0);
var inst_29423 = (0);
var state_29480__$1 = (function (){var statearr_29517 = state_29480;
(statearr_29517[(27)] = inst_29455);

(statearr_29517[(20)] = inst_29422);

(statearr_29517[(21)] = inst_29420);

(statearr_29517[(11)] = inst_29421);

(statearr_29517[(12)] = inst_29423);

return statearr_29517;
})();
var statearr_29518_29586 = state_29480__$1;
(statearr_29518_29586[(2)] = null);

(statearr_29518_29586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (43))){
var state_29480__$1 = state_29480;
var statearr_29519_29587 = state_29480__$1;
(statearr_29519_29587[(2)] = null);

(statearr_29519_29587[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (29))){
var inst_29464 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29520_29588 = state_29480__$1;
(statearr_29520_29588[(2)] = inst_29464);

(statearr_29520_29588[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (44))){
var inst_29473 = (state_29480[(2)]);
var state_29480__$1 = (function (){var statearr_29521 = state_29480;
(statearr_29521[(28)] = inst_29473);

return statearr_29521;
})();
var statearr_29522_29589 = state_29480__$1;
(statearr_29522_29589[(2)] = null);

(statearr_29522_29589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (6))){
var inst_29412 = (state_29480[(29)]);
var inst_29411 = cljs.core.deref.call(null,cs);
var inst_29412__$1 = cljs.core.keys.call(null,inst_29411);
var inst_29413 = cljs.core.count.call(null,inst_29412__$1);
var inst_29414 = cljs.core.reset_BANG_.call(null,dctr,inst_29413);
var inst_29419 = cljs.core.seq.call(null,inst_29412__$1);
var inst_29420 = inst_29419;
var inst_29421 = null;
var inst_29422 = (0);
var inst_29423 = (0);
var state_29480__$1 = (function (){var statearr_29523 = state_29480;
(statearr_29523[(30)] = inst_29414);

(statearr_29523[(20)] = inst_29422);

(statearr_29523[(21)] = inst_29420);

(statearr_29523[(11)] = inst_29421);

(statearr_29523[(12)] = inst_29423);

(statearr_29523[(29)] = inst_29412__$1);

return statearr_29523;
})();
var statearr_29524_29590 = state_29480__$1;
(statearr_29524_29590[(2)] = null);

(statearr_29524_29590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (28))){
var inst_29439 = (state_29480[(25)]);
var inst_29420 = (state_29480[(21)]);
var inst_29439__$1 = cljs.core.seq.call(null,inst_29420);
var state_29480__$1 = (function (){var statearr_29525 = state_29480;
(statearr_29525[(25)] = inst_29439__$1);

return statearr_29525;
})();
if(inst_29439__$1){
var statearr_29526_29591 = state_29480__$1;
(statearr_29526_29591[(1)] = (33));

} else {
var statearr_29527_29592 = state_29480__$1;
(statearr_29527_29592[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (25))){
var inst_29422 = (state_29480[(20)]);
var inst_29423 = (state_29480[(12)]);
var inst_29425 = (inst_29423 < inst_29422);
var inst_29426 = inst_29425;
var state_29480__$1 = state_29480;
if(cljs.core.truth_(inst_29426)){
var statearr_29528_29593 = state_29480__$1;
(statearr_29528_29593[(1)] = (27));

} else {
var statearr_29529_29594 = state_29480__$1;
(statearr_29529_29594[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (34))){
var state_29480__$1 = state_29480;
var statearr_29530_29595 = state_29480__$1;
(statearr_29530_29595[(2)] = null);

(statearr_29530_29595[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (17))){
var state_29480__$1 = state_29480;
var statearr_29531_29596 = state_29480__$1;
(statearr_29531_29596[(2)] = null);

(statearr_29531_29596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (3))){
var inst_29478 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29480__$1,inst_29478);
} else {
if((state_val_29481 === (12))){
var inst_29407 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29532_29597 = state_29480__$1;
(statearr_29532_29597[(2)] = inst_29407);

(statearr_29532_29597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (2))){
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29480__$1,(4),ch);
} else {
if((state_val_29481 === (23))){
var state_29480__$1 = state_29480;
var statearr_29533_29598 = state_29480__$1;
(statearr_29533_29598[(2)] = null);

(statearr_29533_29598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (35))){
var inst_29462 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29534_29599 = state_29480__$1;
(statearr_29534_29599[(2)] = inst_29462);

(statearr_29534_29599[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (19))){
var inst_29379 = (state_29480[(7)]);
var inst_29383 = cljs.core.chunk_first.call(null,inst_29379);
var inst_29384 = cljs.core.chunk_rest.call(null,inst_29379);
var inst_29385 = cljs.core.count.call(null,inst_29383);
var inst_29357 = inst_29384;
var inst_29358 = inst_29383;
var inst_29359 = inst_29385;
var inst_29360 = (0);
var state_29480__$1 = (function (){var statearr_29535 = state_29480;
(statearr_29535[(13)] = inst_29357);

(statearr_29535[(15)] = inst_29359);

(statearr_29535[(16)] = inst_29358);

(statearr_29535[(17)] = inst_29360);

return statearr_29535;
})();
var statearr_29536_29600 = state_29480__$1;
(statearr_29536_29600[(2)] = null);

(statearr_29536_29600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (11))){
var inst_29357 = (state_29480[(13)]);
var inst_29379 = (state_29480[(7)]);
var inst_29379__$1 = cljs.core.seq.call(null,inst_29357);
var state_29480__$1 = (function (){var statearr_29537 = state_29480;
(statearr_29537[(7)] = inst_29379__$1);

return statearr_29537;
})();
if(inst_29379__$1){
var statearr_29538_29601 = state_29480__$1;
(statearr_29538_29601[(1)] = (16));

} else {
var statearr_29539_29602 = state_29480__$1;
(statearr_29539_29602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (9))){
var inst_29409 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29540_29603 = state_29480__$1;
(statearr_29540_29603[(2)] = inst_29409);

(statearr_29540_29603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (5))){
var inst_29355 = cljs.core.deref.call(null,cs);
var inst_29356 = cljs.core.seq.call(null,inst_29355);
var inst_29357 = inst_29356;
var inst_29358 = null;
var inst_29359 = (0);
var inst_29360 = (0);
var state_29480__$1 = (function (){var statearr_29541 = state_29480;
(statearr_29541[(13)] = inst_29357);

(statearr_29541[(15)] = inst_29359);

(statearr_29541[(16)] = inst_29358);

(statearr_29541[(17)] = inst_29360);

return statearr_29541;
})();
var statearr_29542_29604 = state_29480__$1;
(statearr_29542_29604[(2)] = null);

(statearr_29542_29604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (14))){
var state_29480__$1 = state_29480;
var statearr_29543_29605 = state_29480__$1;
(statearr_29543_29605[(2)] = null);

(statearr_29543_29605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (45))){
var inst_29470 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29544_29606 = state_29480__$1;
(statearr_29544_29606[(2)] = inst_29470);

(statearr_29544_29606[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (26))){
var inst_29412 = (state_29480[(29)]);
var inst_29466 = (state_29480[(2)]);
var inst_29467 = cljs.core.seq.call(null,inst_29412);
var state_29480__$1 = (function (){var statearr_29545 = state_29480;
(statearr_29545[(31)] = inst_29466);

return statearr_29545;
})();
if(inst_29467){
var statearr_29546_29607 = state_29480__$1;
(statearr_29546_29607[(1)] = (42));

} else {
var statearr_29547_29608 = state_29480__$1;
(statearr_29547_29608[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (16))){
var inst_29379 = (state_29480[(7)]);
var inst_29381 = cljs.core.chunked_seq_QMARK_.call(null,inst_29379);
var state_29480__$1 = state_29480;
if(inst_29381){
var statearr_29548_29609 = state_29480__$1;
(statearr_29548_29609[(1)] = (19));

} else {
var statearr_29549_29610 = state_29480__$1;
(statearr_29549_29610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (38))){
var inst_29459 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29550_29611 = state_29480__$1;
(statearr_29550_29611[(2)] = inst_29459);

(statearr_29550_29611[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (30))){
var state_29480__$1 = state_29480;
var statearr_29551_29612 = state_29480__$1;
(statearr_29551_29612[(2)] = null);

(statearr_29551_29612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (10))){
var inst_29358 = (state_29480[(16)]);
var inst_29360 = (state_29480[(17)]);
var inst_29368 = cljs.core._nth.call(null,inst_29358,inst_29360);
var inst_29369 = cljs.core.nth.call(null,inst_29368,(0),null);
var inst_29370 = cljs.core.nth.call(null,inst_29368,(1),null);
var state_29480__$1 = (function (){var statearr_29552 = state_29480;
(statearr_29552[(26)] = inst_29369);

return statearr_29552;
})();
if(cljs.core.truth_(inst_29370)){
var statearr_29553_29613 = state_29480__$1;
(statearr_29553_29613[(1)] = (13));

} else {
var statearr_29554_29614 = state_29480__$1;
(statearr_29554_29614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (18))){
var inst_29405 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29555_29615 = state_29480__$1;
(statearr_29555_29615[(2)] = inst_29405);

(statearr_29555_29615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (42))){
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29480__$1,(45),dchan);
} else {
if((state_val_29481 === (37))){
var inst_29348 = (state_29480[(9)]);
var inst_29439 = (state_29480[(25)]);
var inst_29448 = (state_29480[(23)]);
var inst_29448__$1 = cljs.core.first.call(null,inst_29439);
var inst_29449 = cljs.core.async.put_BANG_.call(null,inst_29448__$1,inst_29348,done);
var state_29480__$1 = (function (){var statearr_29556 = state_29480;
(statearr_29556[(23)] = inst_29448__$1);

return statearr_29556;
})();
if(cljs.core.truth_(inst_29449)){
var statearr_29557_29616 = state_29480__$1;
(statearr_29557_29616[(1)] = (39));

} else {
var statearr_29558_29617 = state_29480__$1;
(statearr_29558_29617[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (8))){
var inst_29359 = (state_29480[(15)]);
var inst_29360 = (state_29480[(17)]);
var inst_29362 = (inst_29360 < inst_29359);
var inst_29363 = inst_29362;
var state_29480__$1 = state_29480;
if(cljs.core.truth_(inst_29363)){
var statearr_29559_29618 = state_29480__$1;
(statearr_29559_29618[(1)] = (10));

} else {
var statearr_29560_29619 = state_29480__$1;
(statearr_29560_29619[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__28647__auto__ = null;
var cljs$core$async$mult_$_state_machine__28647__auto____0 = (function (){
var statearr_29561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29561[(0)] = cljs$core$async$mult_$_state_machine__28647__auto__);

(statearr_29561[(1)] = (1));

return statearr_29561;
});
var cljs$core$async$mult_$_state_machine__28647__auto____1 = (function (state_29480){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29562){if((e29562 instanceof Object)){
var ex__28650__auto__ = e29562;
var statearr_29563_29620 = state_29480;
(statearr_29563_29620[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29621 = state_29480;
state_29480 = G__29621;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28647__auto__ = function(state_29480){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28647__auto____1.call(this,state_29480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28647__auto____0;
cljs$core$async$mult_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28647__auto____1;
return cljs$core$async$mult_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29564 = f__28744__auto__.call(null);
(statearr_29564[(6)] = c__28743__auto___29565);

return statearr_29564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29623 = arguments.length;
switch (G__29623) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_29625 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_29625.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29626 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_29626.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29627 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29627.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29628 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,state_map);
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_29628.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29629 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,mode);
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29629.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29639 = arguments.length;
var i__4865__auto___29640 = (0);
while(true){
if((i__4865__auto___29640 < len__4864__auto___29639)){
args__4870__auto__.push((arguments[i__4865__auto___29640]));

var G__29641 = (i__4865__auto___29640 + (1));
i__4865__auto___29640 = G__29641;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29634){
var map__29635 = p__29634;
var map__29635__$1 = cljs.core.__destructure_map.call(null,map__29635);
var opts = map__29635__$1;
var statearr_29636_29642 = state;
(statearr_29636_29642[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_29637_29643 = state;
(statearr_29637_29643[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_29638_29644 = state;
(statearr_29638_29644[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29630){
var G__29631 = cljs.core.first.call(null,seq29630);
var seq29630__$1 = cljs.core.next.call(null,seq29630);
var G__29632 = cljs.core.first.call(null,seq29630__$1);
var seq29630__$2 = cljs.core.next.call(null,seq29630__$1);
var G__29633 = cljs.core.first.call(null,seq29630__$2);
var seq29630__$3 = cljs.core.next.call(null,seq29630__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29631,G__29632,G__29633,seq29630__$3);
}));

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
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29645 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29646){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29646 = meta29646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29647,meta29646__$1){
var self__ = this;
var _29647__$1 = this;
return (new cljs.core.async.t_cljs$core$async29645(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29646__$1));
}));

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29647){
var self__ = this;
var _29647__$1 = this;
return self__.meta29646;
}));

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29645.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29646","meta29646",-870913127,null)], null);
}));

(cljs.core.async.t_cljs$core$async29645.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29645");

(cljs.core.async.t_cljs$core$async29645.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29645");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29645.
 */
cljs.core.async.__GT_t_cljs$core$async29645 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29645(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29646){
return (new cljs.core.async.t_cljs$core$async29645(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29646));
});

}

return (new cljs.core.async.t_cljs$core$async29645(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28743__auto___29759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29715){
var state_val_29716 = (state_29715[(1)]);
if((state_val_29716 === (7))){
var inst_29675 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
if(cljs.core.truth_(inst_29675)){
var statearr_29717_29760 = state_29715__$1;
(statearr_29717_29760[(1)] = (8));

} else {
var statearr_29718_29761 = state_29715__$1;
(statearr_29718_29761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (20))){
var inst_29668 = (state_29715[(7)]);
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29715__$1,(23),out,inst_29668);
} else {
if((state_val_29716 === (1))){
var inst_29651 = calc_state.call(null);
var inst_29652 = cljs.core.__destructure_map.call(null,inst_29651);
var inst_29653 = cljs.core.get.call(null,inst_29652,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29654 = cljs.core.get.call(null,inst_29652,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29655 = cljs.core.get.call(null,inst_29652,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29656 = inst_29651;
var state_29715__$1 = (function (){var statearr_29719 = state_29715;
(statearr_29719[(8)] = inst_29653);

(statearr_29719[(9)] = inst_29656);

(statearr_29719[(10)] = inst_29654);

(statearr_29719[(11)] = inst_29655);

return statearr_29719;
})();
var statearr_29720_29762 = state_29715__$1;
(statearr_29720_29762[(2)] = null);

(statearr_29720_29762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (24))){
var inst_29659 = (state_29715[(12)]);
var inst_29656 = inst_29659;
var state_29715__$1 = (function (){var statearr_29721 = state_29715;
(statearr_29721[(9)] = inst_29656);

return statearr_29721;
})();
var statearr_29722_29763 = state_29715__$1;
(statearr_29722_29763[(2)] = null);

(statearr_29722_29763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (4))){
var inst_29668 = (state_29715[(7)]);
var inst_29670 = (state_29715[(13)]);
var inst_29667 = (state_29715[(2)]);
var inst_29668__$1 = cljs.core.nth.call(null,inst_29667,(0),null);
var inst_29669 = cljs.core.nth.call(null,inst_29667,(1),null);
var inst_29670__$1 = (inst_29668__$1 == null);
var state_29715__$1 = (function (){var statearr_29723 = state_29715;
(statearr_29723[(14)] = inst_29669);

(statearr_29723[(7)] = inst_29668__$1);

(statearr_29723[(13)] = inst_29670__$1);

return statearr_29723;
})();
if(cljs.core.truth_(inst_29670__$1)){
var statearr_29724_29764 = state_29715__$1;
(statearr_29724_29764[(1)] = (5));

} else {
var statearr_29725_29765 = state_29715__$1;
(statearr_29725_29765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (15))){
var inst_29660 = (state_29715[(15)]);
var inst_29689 = (state_29715[(16)]);
var inst_29689__$1 = cljs.core.empty_QMARK_.call(null,inst_29660);
var state_29715__$1 = (function (){var statearr_29726 = state_29715;
(statearr_29726[(16)] = inst_29689__$1);

return statearr_29726;
})();
if(inst_29689__$1){
var statearr_29727_29766 = state_29715__$1;
(statearr_29727_29766[(1)] = (17));

} else {
var statearr_29728_29767 = state_29715__$1;
(statearr_29728_29767[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (21))){
var inst_29659 = (state_29715[(12)]);
var inst_29656 = inst_29659;
var state_29715__$1 = (function (){var statearr_29729 = state_29715;
(statearr_29729[(9)] = inst_29656);

return statearr_29729;
})();
var statearr_29730_29768 = state_29715__$1;
(statearr_29730_29768[(2)] = null);

(statearr_29730_29768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (13))){
var inst_29682 = (state_29715[(2)]);
var inst_29683 = calc_state.call(null);
var inst_29656 = inst_29683;
var state_29715__$1 = (function (){var statearr_29731 = state_29715;
(statearr_29731[(9)] = inst_29656);

(statearr_29731[(17)] = inst_29682);

return statearr_29731;
})();
var statearr_29732_29769 = state_29715__$1;
(statearr_29732_29769[(2)] = null);

(statearr_29732_29769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (22))){
var inst_29709 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
var statearr_29733_29770 = state_29715__$1;
(statearr_29733_29770[(2)] = inst_29709);

(statearr_29733_29770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (6))){
var inst_29669 = (state_29715[(14)]);
var inst_29673 = cljs.core._EQ_.call(null,inst_29669,change);
var state_29715__$1 = state_29715;
var statearr_29734_29771 = state_29715__$1;
(statearr_29734_29771[(2)] = inst_29673);

(statearr_29734_29771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (25))){
var state_29715__$1 = state_29715;
var statearr_29735_29772 = state_29715__$1;
(statearr_29735_29772[(2)] = null);

(statearr_29735_29772[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (17))){
var inst_29669 = (state_29715[(14)]);
var inst_29661 = (state_29715[(18)]);
var inst_29691 = inst_29661.call(null,inst_29669);
var inst_29692 = cljs.core.not.call(null,inst_29691);
var state_29715__$1 = state_29715;
var statearr_29736_29773 = state_29715__$1;
(statearr_29736_29773[(2)] = inst_29692);

(statearr_29736_29773[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (3))){
var inst_29713 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29715__$1,inst_29713);
} else {
if((state_val_29716 === (12))){
var state_29715__$1 = state_29715;
var statearr_29737_29774 = state_29715__$1;
(statearr_29737_29774[(2)] = null);

(statearr_29737_29774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (2))){
var inst_29656 = (state_29715[(9)]);
var inst_29659 = (state_29715[(12)]);
var inst_29659__$1 = cljs.core.__destructure_map.call(null,inst_29656);
var inst_29660 = cljs.core.get.call(null,inst_29659__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29661 = cljs.core.get.call(null,inst_29659__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29662 = cljs.core.get.call(null,inst_29659__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29715__$1 = (function (){var statearr_29738 = state_29715;
(statearr_29738[(15)] = inst_29660);

(statearr_29738[(18)] = inst_29661);

(statearr_29738[(12)] = inst_29659__$1);

return statearr_29738;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29715__$1,(4),inst_29662);
} else {
if((state_val_29716 === (23))){
var inst_29700 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
if(cljs.core.truth_(inst_29700)){
var statearr_29739_29775 = state_29715__$1;
(statearr_29739_29775[(1)] = (24));

} else {
var statearr_29740_29776 = state_29715__$1;
(statearr_29740_29776[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (19))){
var inst_29695 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
var statearr_29741_29777 = state_29715__$1;
(statearr_29741_29777[(2)] = inst_29695);

(statearr_29741_29777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (11))){
var inst_29669 = (state_29715[(14)]);
var inst_29679 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29669);
var state_29715__$1 = state_29715;
var statearr_29742_29778 = state_29715__$1;
(statearr_29742_29778[(2)] = inst_29679);

(statearr_29742_29778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (9))){
var inst_29660 = (state_29715[(15)]);
var inst_29669 = (state_29715[(14)]);
var inst_29686 = (state_29715[(19)]);
var inst_29686__$1 = inst_29660.call(null,inst_29669);
var state_29715__$1 = (function (){var statearr_29743 = state_29715;
(statearr_29743[(19)] = inst_29686__$1);

return statearr_29743;
})();
if(cljs.core.truth_(inst_29686__$1)){
var statearr_29744_29779 = state_29715__$1;
(statearr_29744_29779[(1)] = (14));

} else {
var statearr_29745_29780 = state_29715__$1;
(statearr_29745_29780[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (5))){
var inst_29670 = (state_29715[(13)]);
var state_29715__$1 = state_29715;
var statearr_29746_29781 = state_29715__$1;
(statearr_29746_29781[(2)] = inst_29670);

(statearr_29746_29781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (14))){
var inst_29686 = (state_29715[(19)]);
var state_29715__$1 = state_29715;
var statearr_29747_29782 = state_29715__$1;
(statearr_29747_29782[(2)] = inst_29686);

(statearr_29747_29782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (26))){
var inst_29705 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
var statearr_29748_29783 = state_29715__$1;
(statearr_29748_29783[(2)] = inst_29705);

(statearr_29748_29783[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (16))){
var inst_29697 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
if(cljs.core.truth_(inst_29697)){
var statearr_29749_29784 = state_29715__$1;
(statearr_29749_29784[(1)] = (20));

} else {
var statearr_29750_29785 = state_29715__$1;
(statearr_29750_29785[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (10))){
var inst_29711 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
var statearr_29751_29786 = state_29715__$1;
(statearr_29751_29786[(2)] = inst_29711);

(statearr_29751_29786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (18))){
var inst_29689 = (state_29715[(16)]);
var state_29715__$1 = state_29715;
var statearr_29752_29787 = state_29715__$1;
(statearr_29752_29787[(2)] = inst_29689);

(statearr_29752_29787[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (8))){
var inst_29668 = (state_29715[(7)]);
var inst_29677 = (inst_29668 == null);
var state_29715__$1 = state_29715;
if(cljs.core.truth_(inst_29677)){
var statearr_29753_29788 = state_29715__$1;
(statearr_29753_29788[(1)] = (11));

} else {
var statearr_29754_29789 = state_29715__$1;
(statearr_29754_29789[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28647__auto__ = null;
var cljs$core$async$mix_$_state_machine__28647__auto____0 = (function (){
var statearr_29755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29755[(0)] = cljs$core$async$mix_$_state_machine__28647__auto__);

(statearr_29755[(1)] = (1));

return statearr_29755;
});
var cljs$core$async$mix_$_state_machine__28647__auto____1 = (function (state_29715){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29756){if((e29756 instanceof Object)){
var ex__28650__auto__ = e29756;
var statearr_29757_29790 = state_29715;
(statearr_29757_29790[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29791 = state_29715;
state_29715 = G__29791;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28647__auto__ = function(state_29715){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28647__auto____1.call(this,state_29715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28647__auto____0;
cljs$core$async$mix_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28647__auto____1;
return cljs$core$async$mix_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29758 = f__28744__auto__.call(null);
(statearr_29758[(6)] = c__28743__auto___29759);

return statearr_29758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_29794 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29794.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29795 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29795.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29796 = (function() {
var G__29797 = null;
var G__29797__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__29797__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__29797 = function(p,v){
switch(arguments.length){
case 1:
return G__29797__1.call(this,p);
case 2:
return G__29797__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29797.cljs$core$IFn$_invoke$arity$1 = G__29797__1;
G__29797.cljs$core$IFn$_invoke$arity$2 = G__29797__2;
return G__29797;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29793 = arguments.length;
switch (G__29793) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29796.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29796.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__29801 = arguments.length;
switch (G__29801) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__29799_SHARP_){
if(cljs.core.truth_(p1__29799_SHARP_.call(null,topic))){
return p1__29799_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29799_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29802 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29803){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29803 = meta29803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29804,meta29803__$1){
var self__ = this;
var _29804__$1 = this;
return (new cljs.core.async.t_cljs$core$async29802(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29803__$1));
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29804){
var self__ = this;
var _29804__$1 = this;
return self__.meta29803;
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29803","meta29803",-1591329239,null)], null);
}));

(cljs.core.async.t_cljs$core$async29802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29802");

(cljs.core.async.t_cljs$core$async29802.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29802.
 */
cljs.core.async.__GT_t_cljs$core$async29802 = (function cljs$core$async$__GT_t_cljs$core$async29802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29803){
return (new cljs.core.async.t_cljs$core$async29802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29803));
});

}

return (new cljs.core.async.t_cljs$core$async29802(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28743__auto___29922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29876){
var state_val_29877 = (state_29876[(1)]);
if((state_val_29877 === (7))){
var inst_29872 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29878_29923 = state_29876__$1;
(statearr_29878_29923[(2)] = inst_29872);

(statearr_29878_29923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (20))){
var state_29876__$1 = state_29876;
var statearr_29879_29924 = state_29876__$1;
(statearr_29879_29924[(2)] = null);

(statearr_29879_29924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (1))){
var state_29876__$1 = state_29876;
var statearr_29880_29925 = state_29876__$1;
(statearr_29880_29925[(2)] = null);

(statearr_29880_29925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (24))){
var inst_29855 = (state_29876[(7)]);
var inst_29864 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29855);
var state_29876__$1 = state_29876;
var statearr_29881_29926 = state_29876__$1;
(statearr_29881_29926[(2)] = inst_29864);

(statearr_29881_29926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (4))){
var inst_29807 = (state_29876[(8)]);
var inst_29807__$1 = (state_29876[(2)]);
var inst_29808 = (inst_29807__$1 == null);
var state_29876__$1 = (function (){var statearr_29882 = state_29876;
(statearr_29882[(8)] = inst_29807__$1);

return statearr_29882;
})();
if(cljs.core.truth_(inst_29808)){
var statearr_29883_29927 = state_29876__$1;
(statearr_29883_29927[(1)] = (5));

} else {
var statearr_29884_29928 = state_29876__$1;
(statearr_29884_29928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (15))){
var inst_29849 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29885_29929 = state_29876__$1;
(statearr_29885_29929[(2)] = inst_29849);

(statearr_29885_29929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (21))){
var inst_29869 = (state_29876[(2)]);
var state_29876__$1 = (function (){var statearr_29886 = state_29876;
(statearr_29886[(9)] = inst_29869);

return statearr_29886;
})();
var statearr_29887_29930 = state_29876__$1;
(statearr_29887_29930[(2)] = null);

(statearr_29887_29930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (13))){
var inst_29831 = (state_29876[(10)]);
var inst_29833 = cljs.core.chunked_seq_QMARK_.call(null,inst_29831);
var state_29876__$1 = state_29876;
if(inst_29833){
var statearr_29888_29931 = state_29876__$1;
(statearr_29888_29931[(1)] = (16));

} else {
var statearr_29889_29932 = state_29876__$1;
(statearr_29889_29932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (22))){
var inst_29861 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
if(cljs.core.truth_(inst_29861)){
var statearr_29890_29933 = state_29876__$1;
(statearr_29890_29933[(1)] = (23));

} else {
var statearr_29891_29934 = state_29876__$1;
(statearr_29891_29934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (6))){
var inst_29855 = (state_29876[(7)]);
var inst_29807 = (state_29876[(8)]);
var inst_29857 = (state_29876[(11)]);
var inst_29855__$1 = topic_fn.call(null,inst_29807);
var inst_29856 = cljs.core.deref.call(null,mults);
var inst_29857__$1 = cljs.core.get.call(null,inst_29856,inst_29855__$1);
var state_29876__$1 = (function (){var statearr_29892 = state_29876;
(statearr_29892[(7)] = inst_29855__$1);

(statearr_29892[(11)] = inst_29857__$1);

return statearr_29892;
})();
if(cljs.core.truth_(inst_29857__$1)){
var statearr_29893_29935 = state_29876__$1;
(statearr_29893_29935[(1)] = (19));

} else {
var statearr_29894_29936 = state_29876__$1;
(statearr_29894_29936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (25))){
var inst_29866 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29895_29937 = state_29876__$1;
(statearr_29895_29937[(2)] = inst_29866);

(statearr_29895_29937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (17))){
var inst_29831 = (state_29876[(10)]);
var inst_29840 = cljs.core.first.call(null,inst_29831);
var inst_29841 = cljs.core.async.muxch_STAR_.call(null,inst_29840);
var inst_29842 = cljs.core.async.close_BANG_.call(null,inst_29841);
var inst_29843 = cljs.core.next.call(null,inst_29831);
var inst_29817 = inst_29843;
var inst_29818 = null;
var inst_29819 = (0);
var inst_29820 = (0);
var state_29876__$1 = (function (){var statearr_29896 = state_29876;
(statearr_29896[(12)] = inst_29820);

(statearr_29896[(13)] = inst_29842);

(statearr_29896[(14)] = inst_29818);

(statearr_29896[(15)] = inst_29817);

(statearr_29896[(16)] = inst_29819);

return statearr_29896;
})();
var statearr_29897_29938 = state_29876__$1;
(statearr_29897_29938[(2)] = null);

(statearr_29897_29938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (3))){
var inst_29874 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29876__$1,inst_29874);
} else {
if((state_val_29877 === (12))){
var inst_29851 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29898_29939 = state_29876__$1;
(statearr_29898_29939[(2)] = inst_29851);

(statearr_29898_29939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (2))){
var state_29876__$1 = state_29876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29876__$1,(4),ch);
} else {
if((state_val_29877 === (23))){
var state_29876__$1 = state_29876;
var statearr_29899_29940 = state_29876__$1;
(statearr_29899_29940[(2)] = null);

(statearr_29899_29940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (19))){
var inst_29807 = (state_29876[(8)]);
var inst_29857 = (state_29876[(11)]);
var inst_29859 = cljs.core.async.muxch_STAR_.call(null,inst_29857);
var state_29876__$1 = state_29876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29876__$1,(22),inst_29859,inst_29807);
} else {
if((state_val_29877 === (11))){
var inst_29831 = (state_29876[(10)]);
var inst_29817 = (state_29876[(15)]);
var inst_29831__$1 = cljs.core.seq.call(null,inst_29817);
var state_29876__$1 = (function (){var statearr_29900 = state_29876;
(statearr_29900[(10)] = inst_29831__$1);

return statearr_29900;
})();
if(inst_29831__$1){
var statearr_29901_29941 = state_29876__$1;
(statearr_29901_29941[(1)] = (13));

} else {
var statearr_29902_29942 = state_29876__$1;
(statearr_29902_29942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (9))){
var inst_29853 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29903_29943 = state_29876__$1;
(statearr_29903_29943[(2)] = inst_29853);

(statearr_29903_29943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (5))){
var inst_29814 = cljs.core.deref.call(null,mults);
var inst_29815 = cljs.core.vals.call(null,inst_29814);
var inst_29816 = cljs.core.seq.call(null,inst_29815);
var inst_29817 = inst_29816;
var inst_29818 = null;
var inst_29819 = (0);
var inst_29820 = (0);
var state_29876__$1 = (function (){var statearr_29904 = state_29876;
(statearr_29904[(12)] = inst_29820);

(statearr_29904[(14)] = inst_29818);

(statearr_29904[(15)] = inst_29817);

(statearr_29904[(16)] = inst_29819);

return statearr_29904;
})();
var statearr_29905_29944 = state_29876__$1;
(statearr_29905_29944[(2)] = null);

(statearr_29905_29944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (14))){
var state_29876__$1 = state_29876;
var statearr_29909_29945 = state_29876__$1;
(statearr_29909_29945[(2)] = null);

(statearr_29909_29945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (16))){
var inst_29831 = (state_29876[(10)]);
var inst_29835 = cljs.core.chunk_first.call(null,inst_29831);
var inst_29836 = cljs.core.chunk_rest.call(null,inst_29831);
var inst_29837 = cljs.core.count.call(null,inst_29835);
var inst_29817 = inst_29836;
var inst_29818 = inst_29835;
var inst_29819 = inst_29837;
var inst_29820 = (0);
var state_29876__$1 = (function (){var statearr_29910 = state_29876;
(statearr_29910[(12)] = inst_29820);

(statearr_29910[(14)] = inst_29818);

(statearr_29910[(15)] = inst_29817);

(statearr_29910[(16)] = inst_29819);

return statearr_29910;
})();
var statearr_29911_29946 = state_29876__$1;
(statearr_29911_29946[(2)] = null);

(statearr_29911_29946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (10))){
var inst_29820 = (state_29876[(12)]);
var inst_29818 = (state_29876[(14)]);
var inst_29817 = (state_29876[(15)]);
var inst_29819 = (state_29876[(16)]);
var inst_29825 = cljs.core._nth.call(null,inst_29818,inst_29820);
var inst_29826 = cljs.core.async.muxch_STAR_.call(null,inst_29825);
var inst_29827 = cljs.core.async.close_BANG_.call(null,inst_29826);
var inst_29828 = (inst_29820 + (1));
var tmp29906 = inst_29818;
var tmp29907 = inst_29817;
var tmp29908 = inst_29819;
var inst_29817__$1 = tmp29907;
var inst_29818__$1 = tmp29906;
var inst_29819__$1 = tmp29908;
var inst_29820__$1 = inst_29828;
var state_29876__$1 = (function (){var statearr_29912 = state_29876;
(statearr_29912[(17)] = inst_29827);

(statearr_29912[(12)] = inst_29820__$1);

(statearr_29912[(14)] = inst_29818__$1);

(statearr_29912[(15)] = inst_29817__$1);

(statearr_29912[(16)] = inst_29819__$1);

return statearr_29912;
})();
var statearr_29913_29947 = state_29876__$1;
(statearr_29913_29947[(2)] = null);

(statearr_29913_29947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (18))){
var inst_29846 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29914_29948 = state_29876__$1;
(statearr_29914_29948[(2)] = inst_29846);

(statearr_29914_29948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (8))){
var inst_29820 = (state_29876[(12)]);
var inst_29819 = (state_29876[(16)]);
var inst_29822 = (inst_29820 < inst_29819);
var inst_29823 = inst_29822;
var state_29876__$1 = state_29876;
if(cljs.core.truth_(inst_29823)){
var statearr_29915_29949 = state_29876__$1;
(statearr_29915_29949[(1)] = (10));

} else {
var statearr_29916_29950 = state_29876__$1;
(statearr_29916_29950[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_29917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29917[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_29917[(1)] = (1));

return statearr_29917;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_29876){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e29918){if((e29918 instanceof Object)){
var ex__28650__auto__ = e29918;
var statearr_29919_29951 = state_29876;
(statearr_29919_29951[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29952 = state_29876;
state_29876 = G__29952;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_29876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_29876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_29920 = f__28744__auto__.call(null);
(statearr_29920[(6)] = c__28743__auto___29922);

return statearr_29920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29954 = arguments.length;
switch (G__29954) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__29957 = arguments.length;
switch (G__29957) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__29960 = arguments.length;
switch (G__29960) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__28743__auto___30027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_29999){
var state_val_30000 = (state_29999[(1)]);
if((state_val_30000 === (7))){
var state_29999__$1 = state_29999;
var statearr_30001_30028 = state_29999__$1;
(statearr_30001_30028[(2)] = null);

(statearr_30001_30028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (1))){
var state_29999__$1 = state_29999;
var statearr_30002_30029 = state_29999__$1;
(statearr_30002_30029[(2)] = null);

(statearr_30002_30029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (4))){
var inst_29963 = (state_29999[(7)]);
var inst_29965 = (inst_29963 < cnt);
var state_29999__$1 = state_29999;
if(cljs.core.truth_(inst_29965)){
var statearr_30003_30030 = state_29999__$1;
(statearr_30003_30030[(1)] = (6));

} else {
var statearr_30004_30031 = state_29999__$1;
(statearr_30004_30031[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (15))){
var inst_29995 = (state_29999[(2)]);
var state_29999__$1 = state_29999;
var statearr_30005_30032 = state_29999__$1;
(statearr_30005_30032[(2)] = inst_29995);

(statearr_30005_30032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (13))){
var inst_29988 = cljs.core.async.close_BANG_.call(null,out);
var state_29999__$1 = state_29999;
var statearr_30006_30033 = state_29999__$1;
(statearr_30006_30033[(2)] = inst_29988);

(statearr_30006_30033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (6))){
var state_29999__$1 = state_29999;
var statearr_30007_30034 = state_29999__$1;
(statearr_30007_30034[(2)] = null);

(statearr_30007_30034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (3))){
var inst_29997 = (state_29999[(2)]);
var state_29999__$1 = state_29999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29999__$1,inst_29997);
} else {
if((state_val_30000 === (12))){
var inst_29985 = (state_29999[(8)]);
var inst_29985__$1 = (state_29999[(2)]);
var inst_29986 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29985__$1);
var state_29999__$1 = (function (){var statearr_30008 = state_29999;
(statearr_30008[(8)] = inst_29985__$1);

return statearr_30008;
})();
if(cljs.core.truth_(inst_29986)){
var statearr_30009_30035 = state_29999__$1;
(statearr_30009_30035[(1)] = (13));

} else {
var statearr_30010_30036 = state_29999__$1;
(statearr_30010_30036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (2))){
var inst_29962 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29963 = (0);
var state_29999__$1 = (function (){var statearr_30011 = state_29999;
(statearr_30011[(9)] = inst_29962);

(statearr_30011[(7)] = inst_29963);

return statearr_30011;
})();
var statearr_30012_30037 = state_29999__$1;
(statearr_30012_30037[(2)] = null);

(statearr_30012_30037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (11))){
var inst_29963 = (state_29999[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29999,(10),Object,null,(9));
var inst_29972 = chs__$1.call(null,inst_29963);
var inst_29973 = done.call(null,inst_29963);
var inst_29974 = cljs.core.async.take_BANG_.call(null,inst_29972,inst_29973);
var state_29999__$1 = state_29999;
var statearr_30013_30038 = state_29999__$1;
(statearr_30013_30038[(2)] = inst_29974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (9))){
var inst_29963 = (state_29999[(7)]);
var inst_29976 = (state_29999[(2)]);
var inst_29977 = (inst_29963 + (1));
var inst_29963__$1 = inst_29977;
var state_29999__$1 = (function (){var statearr_30014 = state_29999;
(statearr_30014[(10)] = inst_29976);

(statearr_30014[(7)] = inst_29963__$1);

return statearr_30014;
})();
var statearr_30015_30039 = state_29999__$1;
(statearr_30015_30039[(2)] = null);

(statearr_30015_30039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (5))){
var inst_29983 = (state_29999[(2)]);
var state_29999__$1 = (function (){var statearr_30016 = state_29999;
(statearr_30016[(11)] = inst_29983);

return statearr_30016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29999__$1,(12),dchan);
} else {
if((state_val_30000 === (14))){
var inst_29985 = (state_29999[(8)]);
var inst_29990 = cljs.core.apply.call(null,f,inst_29985);
var state_29999__$1 = state_29999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29999__$1,(16),out,inst_29990);
} else {
if((state_val_30000 === (16))){
var inst_29992 = (state_29999[(2)]);
var state_29999__$1 = (function (){var statearr_30017 = state_29999;
(statearr_30017[(12)] = inst_29992);

return statearr_30017;
})();
var statearr_30018_30040 = state_29999__$1;
(statearr_30018_30040[(2)] = null);

(statearr_30018_30040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (10))){
var inst_29967 = (state_29999[(2)]);
var inst_29968 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29999__$1 = (function (){var statearr_30019 = state_29999;
(statearr_30019[(13)] = inst_29967);

return statearr_30019;
})();
var statearr_30020_30041 = state_29999__$1;
(statearr_30020_30041[(2)] = inst_29968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (8))){
var inst_29981 = (state_29999[(2)]);
var state_29999__$1 = state_29999;
var statearr_30021_30042 = state_29999__$1;
(statearr_30021_30042[(2)] = inst_29981);

(statearr_30021_30042[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30022[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30022[(1)] = (1));

return statearr_30022;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_29999){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_29999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30023){if((e30023 instanceof Object)){
var ex__28650__auto__ = e30023;
var statearr_30024_30043 = state_29999;
(statearr_30024_30043[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30044 = state_29999;
state_29999 = G__30044;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_29999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_29999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_30025 = f__28744__auto__.call(null);
(statearr_30025[(6)] = c__28743__auto___30027);

return statearr_30025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30047 = arguments.length;
switch (G__30047) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28743__auto___30101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_30079){
var state_val_30080 = (state_30079[(1)]);
if((state_val_30080 === (7))){
var inst_30058 = (state_30079[(7)]);
var inst_30059 = (state_30079[(8)]);
var inst_30058__$1 = (state_30079[(2)]);
var inst_30059__$1 = cljs.core.nth.call(null,inst_30058__$1,(0),null);
var inst_30060 = cljs.core.nth.call(null,inst_30058__$1,(1),null);
var inst_30061 = (inst_30059__$1 == null);
var state_30079__$1 = (function (){var statearr_30081 = state_30079;
(statearr_30081[(9)] = inst_30060);

(statearr_30081[(7)] = inst_30058__$1);

(statearr_30081[(8)] = inst_30059__$1);

return statearr_30081;
})();
if(cljs.core.truth_(inst_30061)){
var statearr_30082_30102 = state_30079__$1;
(statearr_30082_30102[(1)] = (8));

} else {
var statearr_30083_30103 = state_30079__$1;
(statearr_30083_30103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (1))){
var inst_30048 = cljs.core.vec.call(null,chs);
var inst_30049 = inst_30048;
var state_30079__$1 = (function (){var statearr_30084 = state_30079;
(statearr_30084[(10)] = inst_30049);

return statearr_30084;
})();
var statearr_30085_30104 = state_30079__$1;
(statearr_30085_30104[(2)] = null);

(statearr_30085_30104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (4))){
var inst_30049 = (state_30079[(10)]);
var state_30079__$1 = state_30079;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30079__$1,(7),inst_30049);
} else {
if((state_val_30080 === (6))){
var inst_30075 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30086_30105 = state_30079__$1;
(statearr_30086_30105[(2)] = inst_30075);

(statearr_30086_30105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (3))){
var inst_30077 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30079__$1,inst_30077);
} else {
if((state_val_30080 === (2))){
var inst_30049 = (state_30079[(10)]);
var inst_30051 = cljs.core.count.call(null,inst_30049);
var inst_30052 = (inst_30051 > (0));
var state_30079__$1 = state_30079;
if(cljs.core.truth_(inst_30052)){
var statearr_30088_30106 = state_30079__$1;
(statearr_30088_30106[(1)] = (4));

} else {
var statearr_30089_30107 = state_30079__$1;
(statearr_30089_30107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (11))){
var inst_30049 = (state_30079[(10)]);
var inst_30068 = (state_30079[(2)]);
var tmp30087 = inst_30049;
var inst_30049__$1 = tmp30087;
var state_30079__$1 = (function (){var statearr_30090 = state_30079;
(statearr_30090[(11)] = inst_30068);

(statearr_30090[(10)] = inst_30049__$1);

return statearr_30090;
})();
var statearr_30091_30108 = state_30079__$1;
(statearr_30091_30108[(2)] = null);

(statearr_30091_30108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (9))){
var inst_30059 = (state_30079[(8)]);
var state_30079__$1 = state_30079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30079__$1,(11),out,inst_30059);
} else {
if((state_val_30080 === (5))){
var inst_30073 = cljs.core.async.close_BANG_.call(null,out);
var state_30079__$1 = state_30079;
var statearr_30092_30109 = state_30079__$1;
(statearr_30092_30109[(2)] = inst_30073);

(statearr_30092_30109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (10))){
var inst_30071 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30093_30110 = state_30079__$1;
(statearr_30093_30110[(2)] = inst_30071);

(statearr_30093_30110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (8))){
var inst_30060 = (state_30079[(9)]);
var inst_30049 = (state_30079[(10)]);
var inst_30058 = (state_30079[(7)]);
var inst_30059 = (state_30079[(8)]);
var inst_30063 = (function (){var cs = inst_30049;
var vec__30054 = inst_30058;
var v = inst_30059;
var c = inst_30060;
return (function (p1__30045_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30045_SHARP_);
});
})();
var inst_30064 = cljs.core.filterv.call(null,inst_30063,inst_30049);
var inst_30049__$1 = inst_30064;
var state_30079__$1 = (function (){var statearr_30094 = state_30079;
(statearr_30094[(10)] = inst_30049__$1);

return statearr_30094;
})();
var statearr_30095_30111 = state_30079__$1;
(statearr_30095_30111[(2)] = null);

(statearr_30095_30111[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30096[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30096[(1)] = (1));

return statearr_30096;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30079){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30097){if((e30097 instanceof Object)){
var ex__28650__auto__ = e30097;
var statearr_30098_30112 = state_30079;
(statearr_30098_30112[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30113 = state_30079;
state_30079 = G__30113;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_30099 = f__28744__auto__.call(null);
(statearr_30099[(6)] = c__28743__auto___30101);

return statearr_30099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__30115 = arguments.length;
switch (G__30115) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28743__auto___30160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_30139){
var state_val_30140 = (state_30139[(1)]);
if((state_val_30140 === (7))){
var inst_30121 = (state_30139[(7)]);
var inst_30121__$1 = (state_30139[(2)]);
var inst_30122 = (inst_30121__$1 == null);
var inst_30123 = cljs.core.not.call(null,inst_30122);
var state_30139__$1 = (function (){var statearr_30141 = state_30139;
(statearr_30141[(7)] = inst_30121__$1);

return statearr_30141;
})();
if(inst_30123){
var statearr_30142_30161 = state_30139__$1;
(statearr_30142_30161[(1)] = (8));

} else {
var statearr_30143_30162 = state_30139__$1;
(statearr_30143_30162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (1))){
var inst_30116 = (0);
var state_30139__$1 = (function (){var statearr_30144 = state_30139;
(statearr_30144[(8)] = inst_30116);

return statearr_30144;
})();
var statearr_30145_30163 = state_30139__$1;
(statearr_30145_30163[(2)] = null);

(statearr_30145_30163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (4))){
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30139__$1,(7),ch);
} else {
if((state_val_30140 === (6))){
var inst_30134 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
var statearr_30146_30164 = state_30139__$1;
(statearr_30146_30164[(2)] = inst_30134);

(statearr_30146_30164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (3))){
var inst_30136 = (state_30139[(2)]);
var inst_30137 = cljs.core.async.close_BANG_.call(null,out);
var state_30139__$1 = (function (){var statearr_30147 = state_30139;
(statearr_30147[(9)] = inst_30136);

return statearr_30147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30139__$1,inst_30137);
} else {
if((state_val_30140 === (2))){
var inst_30116 = (state_30139[(8)]);
var inst_30118 = (inst_30116 < n);
var state_30139__$1 = state_30139;
if(cljs.core.truth_(inst_30118)){
var statearr_30148_30165 = state_30139__$1;
(statearr_30148_30165[(1)] = (4));

} else {
var statearr_30149_30166 = state_30139__$1;
(statearr_30149_30166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (11))){
var inst_30116 = (state_30139[(8)]);
var inst_30126 = (state_30139[(2)]);
var inst_30127 = (inst_30116 + (1));
var inst_30116__$1 = inst_30127;
var state_30139__$1 = (function (){var statearr_30150 = state_30139;
(statearr_30150[(10)] = inst_30126);

(statearr_30150[(8)] = inst_30116__$1);

return statearr_30150;
})();
var statearr_30151_30167 = state_30139__$1;
(statearr_30151_30167[(2)] = null);

(statearr_30151_30167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (9))){
var state_30139__$1 = state_30139;
var statearr_30152_30168 = state_30139__$1;
(statearr_30152_30168[(2)] = null);

(statearr_30152_30168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (5))){
var state_30139__$1 = state_30139;
var statearr_30153_30169 = state_30139__$1;
(statearr_30153_30169[(2)] = null);

(statearr_30153_30169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (10))){
var inst_30131 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
var statearr_30154_30170 = state_30139__$1;
(statearr_30154_30170[(2)] = inst_30131);

(statearr_30154_30170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (8))){
var inst_30121 = (state_30139[(7)]);
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30139__$1,(11),out,inst_30121);
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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30155[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30155[(1)] = (1));

return statearr_30155;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30139){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30156){if((e30156 instanceof Object)){
var ex__28650__auto__ = e30156;
var statearr_30157_30171 = state_30139;
(statearr_30157_30171[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30172 = state_30139;
state_30139 = G__30172;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_30158 = f__28744__auto__.call(null);
(statearr_30158[(6)] = c__28743__auto___30160);

return statearr_30158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30174 = (function (f,ch,meta30175){
this.f = f;
this.ch = ch;
this.meta30175 = meta30175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30176,meta30175__$1){
var self__ = this;
var _30176__$1 = this;
return (new cljs.core.async.t_cljs$core$async30174(self__.f,self__.ch,meta30175__$1));
}));

(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30176){
var self__ = this;
var _30176__$1 = this;
return self__.meta30175;
}));

(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30177 = (function (f,ch,meta30175,_,fn1,meta30178){
this.f = f;
this.ch = ch;
this.meta30175 = meta30175;
this._ = _;
this.fn1 = fn1;
this.meta30178 = meta30178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30179,meta30178__$1){
var self__ = this;
var _30179__$1 = this;
return (new cljs.core.async.t_cljs$core$async30177(self__.f,self__.ch,self__.meta30175,self__._,self__.fn1,meta30178__$1));
}));

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30179){
var self__ = this;
var _30179__$1 = this;
return self__.meta30178;
}));

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__30173_SHARP_){
return f1.call(null,(((p1__30173_SHARP_ == null))?null:self__.f.call(null,p1__30173_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async30177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30175","meta30175",-492343081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30174","cljs.core.async/t_cljs$core$async30174",1251139307,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30178","meta30178",449523906,null)], null);
}));

(cljs.core.async.t_cljs$core$async30177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30177");

(cljs.core.async.t_cljs$core$async30177.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30177.
 */
cljs.core.async.__GT_t_cljs$core$async30177 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30177(f__$1,ch__$1,meta30175__$1,___$2,fn1__$1,meta30178){
return (new cljs.core.async.t_cljs$core$async30177(f__$1,ch__$1,meta30175__$1,___$2,fn1__$1,meta30178));
});

}

return (new cljs.core.async.t_cljs$core$async30177(self__.f,self__.ch,self__.meta30175,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30175","meta30175",-492343081,null)], null);
}));

(cljs.core.async.t_cljs$core$async30174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30174");

(cljs.core.async.t_cljs$core$async30174.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30174.
 */
cljs.core.async.__GT_t_cljs$core$async30174 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30174(f__$1,ch__$1,meta30175){
return (new cljs.core.async.t_cljs$core$async30174(f__$1,ch__$1,meta30175));
});

}

return (new cljs.core.async.t_cljs$core$async30174(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30180 = (function (f,ch,meta30181){
this.f = f;
this.ch = ch;
this.meta30181 = meta30181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30182,meta30181__$1){
var self__ = this;
var _30182__$1 = this;
return (new cljs.core.async.t_cljs$core$async30180(self__.f,self__.ch,meta30181__$1));
}));

(cljs.core.async.t_cljs$core$async30180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30182){
var self__ = this;
var _30182__$1 = this;
return self__.meta30181;
}));

(cljs.core.async.t_cljs$core$async30180.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30180.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30180.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async30180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30181","meta30181",1575787009,null)], null);
}));

(cljs.core.async.t_cljs$core$async30180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30180");

(cljs.core.async.t_cljs$core$async30180.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30180.
 */
cljs.core.async.__GT_t_cljs$core$async30180 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30180(f__$1,ch__$1,meta30181){
return (new cljs.core.async.t_cljs$core$async30180(f__$1,ch__$1,meta30181));
});

}

return (new cljs.core.async.t_cljs$core$async30180(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30183 = (function (p,ch,meta30184){
this.p = p;
this.ch = ch;
this.meta30184 = meta30184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30185,meta30184__$1){
var self__ = this;
var _30185__$1 = this;
return (new cljs.core.async.t_cljs$core$async30183(self__.p,self__.ch,meta30184__$1));
}));

(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30185){
var self__ = this;
var _30185__$1 = this;
return self__.meta30184;
}));

(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30184","meta30184",-317167581,null)], null);
}));

(cljs.core.async.t_cljs$core$async30183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30183");

(cljs.core.async.t_cljs$core$async30183.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30183.
 */
cljs.core.async.__GT_t_cljs$core$async30183 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30183(p__$1,ch__$1,meta30184){
return (new cljs.core.async.t_cljs$core$async30183(p__$1,ch__$1,meta30184));
});

}

return (new cljs.core.async.t_cljs$core$async30183(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30187 = arguments.length;
switch (G__30187) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28743__auto___30227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_30208){
var state_val_30209 = (state_30208[(1)]);
if((state_val_30209 === (7))){
var inst_30204 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30210_30228 = state_30208__$1;
(statearr_30210_30228[(2)] = inst_30204);

(statearr_30210_30228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (1))){
var state_30208__$1 = state_30208;
var statearr_30211_30229 = state_30208__$1;
(statearr_30211_30229[(2)] = null);

(statearr_30211_30229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (4))){
var inst_30190 = (state_30208[(7)]);
var inst_30190__$1 = (state_30208[(2)]);
var inst_30191 = (inst_30190__$1 == null);
var state_30208__$1 = (function (){var statearr_30212 = state_30208;
(statearr_30212[(7)] = inst_30190__$1);

return statearr_30212;
})();
if(cljs.core.truth_(inst_30191)){
var statearr_30213_30230 = state_30208__$1;
(statearr_30213_30230[(1)] = (5));

} else {
var statearr_30214_30231 = state_30208__$1;
(statearr_30214_30231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (6))){
var inst_30190 = (state_30208[(7)]);
var inst_30195 = p.call(null,inst_30190);
var state_30208__$1 = state_30208;
if(cljs.core.truth_(inst_30195)){
var statearr_30215_30232 = state_30208__$1;
(statearr_30215_30232[(1)] = (8));

} else {
var statearr_30216_30233 = state_30208__$1;
(statearr_30216_30233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (3))){
var inst_30206 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30208__$1,inst_30206);
} else {
if((state_val_30209 === (2))){
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30208__$1,(4),ch);
} else {
if((state_val_30209 === (11))){
var inst_30198 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30217_30234 = state_30208__$1;
(statearr_30217_30234[(2)] = inst_30198);

(statearr_30217_30234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (9))){
var state_30208__$1 = state_30208;
var statearr_30218_30235 = state_30208__$1;
(statearr_30218_30235[(2)] = null);

(statearr_30218_30235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (5))){
var inst_30193 = cljs.core.async.close_BANG_.call(null,out);
var state_30208__$1 = state_30208;
var statearr_30219_30236 = state_30208__$1;
(statearr_30219_30236[(2)] = inst_30193);

(statearr_30219_30236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (10))){
var inst_30201 = (state_30208[(2)]);
var state_30208__$1 = (function (){var statearr_30220 = state_30208;
(statearr_30220[(8)] = inst_30201);

return statearr_30220;
})();
var statearr_30221_30237 = state_30208__$1;
(statearr_30221_30237[(2)] = null);

(statearr_30221_30237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (8))){
var inst_30190 = (state_30208[(7)]);
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30208__$1,(11),out,inst_30190);
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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30222 = [null,null,null,null,null,null,null,null,null];
(statearr_30222[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30222[(1)] = (1));

return statearr_30222;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30208){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30223){if((e30223 instanceof Object)){
var ex__28650__auto__ = e30223;
var statearr_30224_30238 = state_30208;
(statearr_30224_30238[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30239 = state_30208;
state_30208 = G__30239;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_30225 = f__28744__auto__.call(null);
(statearr_30225[(6)] = c__28743__auto___30227);

return statearr_30225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30241 = arguments.length;
switch (G__30241) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_30304){
var state_val_30305 = (state_30304[(1)]);
if((state_val_30305 === (7))){
var inst_30300 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30306_30344 = state_30304__$1;
(statearr_30306_30344[(2)] = inst_30300);

(statearr_30306_30344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (20))){
var inst_30270 = (state_30304[(7)]);
var inst_30281 = (state_30304[(2)]);
var inst_30282 = cljs.core.next.call(null,inst_30270);
var inst_30256 = inst_30282;
var inst_30257 = null;
var inst_30258 = (0);
var inst_30259 = (0);
var state_30304__$1 = (function (){var statearr_30307 = state_30304;
(statearr_30307[(8)] = inst_30281);

(statearr_30307[(9)] = inst_30259);

(statearr_30307[(10)] = inst_30256);

(statearr_30307[(11)] = inst_30258);

(statearr_30307[(12)] = inst_30257);

return statearr_30307;
})();
var statearr_30308_30345 = state_30304__$1;
(statearr_30308_30345[(2)] = null);

(statearr_30308_30345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (1))){
var state_30304__$1 = state_30304;
var statearr_30309_30346 = state_30304__$1;
(statearr_30309_30346[(2)] = null);

(statearr_30309_30346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (4))){
var inst_30245 = (state_30304[(13)]);
var inst_30245__$1 = (state_30304[(2)]);
var inst_30246 = (inst_30245__$1 == null);
var state_30304__$1 = (function (){var statearr_30310 = state_30304;
(statearr_30310[(13)] = inst_30245__$1);

return statearr_30310;
})();
if(cljs.core.truth_(inst_30246)){
var statearr_30311_30347 = state_30304__$1;
(statearr_30311_30347[(1)] = (5));

} else {
var statearr_30312_30348 = state_30304__$1;
(statearr_30312_30348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (15))){
var state_30304__$1 = state_30304;
var statearr_30316_30349 = state_30304__$1;
(statearr_30316_30349[(2)] = null);

(statearr_30316_30349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (21))){
var state_30304__$1 = state_30304;
var statearr_30317_30350 = state_30304__$1;
(statearr_30317_30350[(2)] = null);

(statearr_30317_30350[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (13))){
var inst_30259 = (state_30304[(9)]);
var inst_30256 = (state_30304[(10)]);
var inst_30258 = (state_30304[(11)]);
var inst_30257 = (state_30304[(12)]);
var inst_30266 = (state_30304[(2)]);
var inst_30267 = (inst_30259 + (1));
var tmp30313 = inst_30256;
var tmp30314 = inst_30258;
var tmp30315 = inst_30257;
var inst_30256__$1 = tmp30313;
var inst_30257__$1 = tmp30315;
var inst_30258__$1 = tmp30314;
var inst_30259__$1 = inst_30267;
var state_30304__$1 = (function (){var statearr_30318 = state_30304;
(statearr_30318[(14)] = inst_30266);

(statearr_30318[(9)] = inst_30259__$1);

(statearr_30318[(10)] = inst_30256__$1);

(statearr_30318[(11)] = inst_30258__$1);

(statearr_30318[(12)] = inst_30257__$1);

return statearr_30318;
})();
var statearr_30319_30351 = state_30304__$1;
(statearr_30319_30351[(2)] = null);

(statearr_30319_30351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (22))){
var state_30304__$1 = state_30304;
var statearr_30320_30352 = state_30304__$1;
(statearr_30320_30352[(2)] = null);

(statearr_30320_30352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (6))){
var inst_30245 = (state_30304[(13)]);
var inst_30254 = f.call(null,inst_30245);
var inst_30255 = cljs.core.seq.call(null,inst_30254);
var inst_30256 = inst_30255;
var inst_30257 = null;
var inst_30258 = (0);
var inst_30259 = (0);
var state_30304__$1 = (function (){var statearr_30321 = state_30304;
(statearr_30321[(9)] = inst_30259);

(statearr_30321[(10)] = inst_30256);

(statearr_30321[(11)] = inst_30258);

(statearr_30321[(12)] = inst_30257);

return statearr_30321;
})();
var statearr_30322_30353 = state_30304__$1;
(statearr_30322_30353[(2)] = null);

(statearr_30322_30353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (17))){
var inst_30270 = (state_30304[(7)]);
var inst_30274 = cljs.core.chunk_first.call(null,inst_30270);
var inst_30275 = cljs.core.chunk_rest.call(null,inst_30270);
var inst_30276 = cljs.core.count.call(null,inst_30274);
var inst_30256 = inst_30275;
var inst_30257 = inst_30274;
var inst_30258 = inst_30276;
var inst_30259 = (0);
var state_30304__$1 = (function (){var statearr_30323 = state_30304;
(statearr_30323[(9)] = inst_30259);

(statearr_30323[(10)] = inst_30256);

(statearr_30323[(11)] = inst_30258);

(statearr_30323[(12)] = inst_30257);

return statearr_30323;
})();
var statearr_30324_30354 = state_30304__$1;
(statearr_30324_30354[(2)] = null);

(statearr_30324_30354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (3))){
var inst_30302 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30304__$1,inst_30302);
} else {
if((state_val_30305 === (12))){
var inst_30290 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30325_30355 = state_30304__$1;
(statearr_30325_30355[(2)] = inst_30290);

(statearr_30325_30355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (2))){
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30304__$1,(4),in$);
} else {
if((state_val_30305 === (23))){
var inst_30298 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30326_30356 = state_30304__$1;
(statearr_30326_30356[(2)] = inst_30298);

(statearr_30326_30356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (19))){
var inst_30285 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30327_30357 = state_30304__$1;
(statearr_30327_30357[(2)] = inst_30285);

(statearr_30327_30357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (11))){
var inst_30270 = (state_30304[(7)]);
var inst_30256 = (state_30304[(10)]);
var inst_30270__$1 = cljs.core.seq.call(null,inst_30256);
var state_30304__$1 = (function (){var statearr_30328 = state_30304;
(statearr_30328[(7)] = inst_30270__$1);

return statearr_30328;
})();
if(inst_30270__$1){
var statearr_30329_30358 = state_30304__$1;
(statearr_30329_30358[(1)] = (14));

} else {
var statearr_30330_30359 = state_30304__$1;
(statearr_30330_30359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (9))){
var inst_30292 = (state_30304[(2)]);
var inst_30293 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30304__$1 = (function (){var statearr_30331 = state_30304;
(statearr_30331[(15)] = inst_30292);

return statearr_30331;
})();
if(cljs.core.truth_(inst_30293)){
var statearr_30332_30360 = state_30304__$1;
(statearr_30332_30360[(1)] = (21));

} else {
var statearr_30333_30361 = state_30304__$1;
(statearr_30333_30361[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (5))){
var inst_30248 = cljs.core.async.close_BANG_.call(null,out);
var state_30304__$1 = state_30304;
var statearr_30334_30362 = state_30304__$1;
(statearr_30334_30362[(2)] = inst_30248);

(statearr_30334_30362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (14))){
var inst_30270 = (state_30304[(7)]);
var inst_30272 = cljs.core.chunked_seq_QMARK_.call(null,inst_30270);
var state_30304__$1 = state_30304;
if(inst_30272){
var statearr_30335_30363 = state_30304__$1;
(statearr_30335_30363[(1)] = (17));

} else {
var statearr_30336_30364 = state_30304__$1;
(statearr_30336_30364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (16))){
var inst_30288 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30337_30365 = state_30304__$1;
(statearr_30337_30365[(2)] = inst_30288);

(statearr_30337_30365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (10))){
var inst_30259 = (state_30304[(9)]);
var inst_30257 = (state_30304[(12)]);
var inst_30264 = cljs.core._nth.call(null,inst_30257,inst_30259);
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30304__$1,(13),out,inst_30264);
} else {
if((state_val_30305 === (18))){
var inst_30270 = (state_30304[(7)]);
var inst_30279 = cljs.core.first.call(null,inst_30270);
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30304__$1,(20),out,inst_30279);
} else {
if((state_val_30305 === (8))){
var inst_30259 = (state_30304[(9)]);
var inst_30258 = (state_30304[(11)]);
var inst_30261 = (inst_30259 < inst_30258);
var inst_30262 = inst_30261;
var state_30304__$1 = state_30304;
if(cljs.core.truth_(inst_30262)){
var statearr_30338_30366 = state_30304__$1;
(statearr_30338_30366[(1)] = (10));

} else {
var statearr_30339_30367 = state_30304__$1;
(statearr_30339_30367[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____0 = (function (){
var statearr_30340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30340[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__);

(statearr_30340[(1)] = (1));

return statearr_30340;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____1 = (function (state_30304){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30341){if((e30341 instanceof Object)){
var ex__28650__auto__ = e30341;
var statearr_30342_30368 = state_30304;
(statearr_30342_30368[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30369 = state_30304;
state_30304 = G__30369;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__ = function(state_30304){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____1.call(this,state_30304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28647__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_30343 = f__28744__auto__.call(null);
(statearr_30343[(6)] = c__28743__auto__);

return statearr_30343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30371 = arguments.length;
switch (G__30371) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30374 = arguments.length;
switch (G__30374) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30377 = arguments.length;
switch (G__30377) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28743__auto___30424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_30401){
var state_val_30402 = (state_30401[(1)]);
if((state_val_30402 === (7))){
var inst_30396 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
var statearr_30403_30425 = state_30401__$1;
(statearr_30403_30425[(2)] = inst_30396);

(statearr_30403_30425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (1))){
var inst_30378 = null;
var state_30401__$1 = (function (){var statearr_30404 = state_30401;
(statearr_30404[(7)] = inst_30378);

return statearr_30404;
})();
var statearr_30405_30426 = state_30401__$1;
(statearr_30405_30426[(2)] = null);

(statearr_30405_30426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (4))){
var inst_30381 = (state_30401[(8)]);
var inst_30381__$1 = (state_30401[(2)]);
var inst_30382 = (inst_30381__$1 == null);
var inst_30383 = cljs.core.not.call(null,inst_30382);
var state_30401__$1 = (function (){var statearr_30406 = state_30401;
(statearr_30406[(8)] = inst_30381__$1);

return statearr_30406;
})();
if(inst_30383){
var statearr_30407_30427 = state_30401__$1;
(statearr_30407_30427[(1)] = (5));

} else {
var statearr_30408_30428 = state_30401__$1;
(statearr_30408_30428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (6))){
var state_30401__$1 = state_30401;
var statearr_30409_30429 = state_30401__$1;
(statearr_30409_30429[(2)] = null);

(statearr_30409_30429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (3))){
var inst_30398 = (state_30401[(2)]);
var inst_30399 = cljs.core.async.close_BANG_.call(null,out);
var state_30401__$1 = (function (){var statearr_30410 = state_30401;
(statearr_30410[(9)] = inst_30398);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30401__$1,inst_30399);
} else {
if((state_val_30402 === (2))){
var state_30401__$1 = state_30401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30401__$1,(4),ch);
} else {
if((state_val_30402 === (11))){
var inst_30381 = (state_30401[(8)]);
var inst_30390 = (state_30401[(2)]);
var inst_30378 = inst_30381;
var state_30401__$1 = (function (){var statearr_30411 = state_30401;
(statearr_30411[(7)] = inst_30378);

(statearr_30411[(10)] = inst_30390);

return statearr_30411;
})();
var statearr_30412_30430 = state_30401__$1;
(statearr_30412_30430[(2)] = null);

(statearr_30412_30430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (9))){
var inst_30381 = (state_30401[(8)]);
var state_30401__$1 = state_30401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30401__$1,(11),out,inst_30381);
} else {
if((state_val_30402 === (5))){
var inst_30378 = (state_30401[(7)]);
var inst_30381 = (state_30401[(8)]);
var inst_30385 = cljs.core._EQ_.call(null,inst_30381,inst_30378);
var state_30401__$1 = state_30401;
if(inst_30385){
var statearr_30414_30431 = state_30401__$1;
(statearr_30414_30431[(1)] = (8));

} else {
var statearr_30415_30432 = state_30401__$1;
(statearr_30415_30432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (10))){
var inst_30393 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
var statearr_30416_30433 = state_30401__$1;
(statearr_30416_30433[(2)] = inst_30393);

(statearr_30416_30433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (8))){
var inst_30378 = (state_30401[(7)]);
var tmp30413 = inst_30378;
var inst_30378__$1 = tmp30413;
var state_30401__$1 = (function (){var statearr_30417 = state_30401;
(statearr_30417[(7)] = inst_30378__$1);

return statearr_30417;
})();
var statearr_30418_30434 = state_30401__$1;
(statearr_30418_30434[(2)] = null);

(statearr_30418_30434[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30419[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30419[(1)] = (1));

return statearr_30419;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30401){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30420){if((e30420 instanceof Object)){
var ex__28650__auto__ = e30420;
var statearr_30421_30435 = state_30401;
(statearr_30421_30435[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30436 = state_30401;
state_30401 = G__30436;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_30422 = f__28744__auto__.call(null);
(statearr_30422[(6)] = c__28743__auto___30424);

return statearr_30422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30438 = arguments.length;
switch (G__30438) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28743__auto___30504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_30476){
var state_val_30477 = (state_30476[(1)]);
if((state_val_30477 === (7))){
var inst_30472 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30478_30505 = state_30476__$1;
(statearr_30478_30505[(2)] = inst_30472);

(statearr_30478_30505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (1))){
var inst_30439 = (new Array(n));
var inst_30440 = inst_30439;
var inst_30441 = (0);
var state_30476__$1 = (function (){var statearr_30479 = state_30476;
(statearr_30479[(7)] = inst_30441);

(statearr_30479[(8)] = inst_30440);

return statearr_30479;
})();
var statearr_30480_30506 = state_30476__$1;
(statearr_30480_30506[(2)] = null);

(statearr_30480_30506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (4))){
var inst_30444 = (state_30476[(9)]);
var inst_30444__$1 = (state_30476[(2)]);
var inst_30445 = (inst_30444__$1 == null);
var inst_30446 = cljs.core.not.call(null,inst_30445);
var state_30476__$1 = (function (){var statearr_30481 = state_30476;
(statearr_30481[(9)] = inst_30444__$1);

return statearr_30481;
})();
if(inst_30446){
var statearr_30482_30507 = state_30476__$1;
(statearr_30482_30507[(1)] = (5));

} else {
var statearr_30483_30508 = state_30476__$1;
(statearr_30483_30508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (15))){
var inst_30466 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30484_30509 = state_30476__$1;
(statearr_30484_30509[(2)] = inst_30466);

(statearr_30484_30509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (13))){
var state_30476__$1 = state_30476;
var statearr_30485_30510 = state_30476__$1;
(statearr_30485_30510[(2)] = null);

(statearr_30485_30510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (6))){
var inst_30441 = (state_30476[(7)]);
var inst_30462 = (inst_30441 > (0));
var state_30476__$1 = state_30476;
if(cljs.core.truth_(inst_30462)){
var statearr_30486_30511 = state_30476__$1;
(statearr_30486_30511[(1)] = (12));

} else {
var statearr_30487_30512 = state_30476__$1;
(statearr_30487_30512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (3))){
var inst_30474 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30476__$1,inst_30474);
} else {
if((state_val_30477 === (12))){
var inst_30440 = (state_30476[(8)]);
var inst_30464 = cljs.core.vec.call(null,inst_30440);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30476__$1,(15),out,inst_30464);
} else {
if((state_val_30477 === (2))){
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30476__$1,(4),ch);
} else {
if((state_val_30477 === (11))){
var inst_30456 = (state_30476[(2)]);
var inst_30457 = (new Array(n));
var inst_30440 = inst_30457;
var inst_30441 = (0);
var state_30476__$1 = (function (){var statearr_30488 = state_30476;
(statearr_30488[(7)] = inst_30441);

(statearr_30488[(8)] = inst_30440);

(statearr_30488[(10)] = inst_30456);

return statearr_30488;
})();
var statearr_30489_30513 = state_30476__$1;
(statearr_30489_30513[(2)] = null);

(statearr_30489_30513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (9))){
var inst_30440 = (state_30476[(8)]);
var inst_30454 = cljs.core.vec.call(null,inst_30440);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30476__$1,(11),out,inst_30454);
} else {
if((state_val_30477 === (5))){
var inst_30449 = (state_30476[(11)]);
var inst_30441 = (state_30476[(7)]);
var inst_30444 = (state_30476[(9)]);
var inst_30440 = (state_30476[(8)]);
var inst_30448 = (inst_30440[inst_30441] = inst_30444);
var inst_30449__$1 = (inst_30441 + (1));
var inst_30450 = (inst_30449__$1 < n);
var state_30476__$1 = (function (){var statearr_30490 = state_30476;
(statearr_30490[(11)] = inst_30449__$1);

(statearr_30490[(12)] = inst_30448);

return statearr_30490;
})();
if(cljs.core.truth_(inst_30450)){
var statearr_30491_30514 = state_30476__$1;
(statearr_30491_30514[(1)] = (8));

} else {
var statearr_30492_30515 = state_30476__$1;
(statearr_30492_30515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (14))){
var inst_30469 = (state_30476[(2)]);
var inst_30470 = cljs.core.async.close_BANG_.call(null,out);
var state_30476__$1 = (function (){var statearr_30494 = state_30476;
(statearr_30494[(13)] = inst_30469);

return statearr_30494;
})();
var statearr_30495_30516 = state_30476__$1;
(statearr_30495_30516[(2)] = inst_30470);

(statearr_30495_30516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (10))){
var inst_30460 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30496_30517 = state_30476__$1;
(statearr_30496_30517[(2)] = inst_30460);

(statearr_30496_30517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (8))){
var inst_30449 = (state_30476[(11)]);
var inst_30440 = (state_30476[(8)]);
var tmp30493 = inst_30440;
var inst_30440__$1 = tmp30493;
var inst_30441 = inst_30449;
var state_30476__$1 = (function (){var statearr_30497 = state_30476;
(statearr_30497[(7)] = inst_30441);

(statearr_30497[(8)] = inst_30440__$1);

return statearr_30497;
})();
var statearr_30498_30518 = state_30476__$1;
(statearr_30498_30518[(2)] = null);

(statearr_30498_30518[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30499[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30499[(1)] = (1));

return statearr_30499;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30476){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30500){if((e30500 instanceof Object)){
var ex__28650__auto__ = e30500;
var statearr_30501_30519 = state_30476;
(statearr_30501_30519[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30520 = state_30476;
state_30476 = G__30520;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_30502 = f__28744__auto__.call(null);
(statearr_30502[(6)] = c__28743__auto___30504);

return statearr_30502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30522 = arguments.length;
switch (G__30522) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28743__auto___30599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_30567){
var state_val_30568 = (state_30567[(1)]);
if((state_val_30568 === (7))){
var inst_30563 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30569_30600 = state_30567__$1;
(statearr_30569_30600[(2)] = inst_30563);

(statearr_30569_30600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (1))){
var inst_30523 = [];
var inst_30524 = inst_30523;
var inst_30525 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30567__$1 = (function (){var statearr_30570 = state_30567;
(statearr_30570[(7)] = inst_30524);

(statearr_30570[(8)] = inst_30525);

return statearr_30570;
})();
var statearr_30571_30601 = state_30567__$1;
(statearr_30571_30601[(2)] = null);

(statearr_30571_30601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (4))){
var inst_30528 = (state_30567[(9)]);
var inst_30528__$1 = (state_30567[(2)]);
var inst_30529 = (inst_30528__$1 == null);
var inst_30530 = cljs.core.not.call(null,inst_30529);
var state_30567__$1 = (function (){var statearr_30572 = state_30567;
(statearr_30572[(9)] = inst_30528__$1);

return statearr_30572;
})();
if(inst_30530){
var statearr_30573_30602 = state_30567__$1;
(statearr_30573_30602[(1)] = (5));

} else {
var statearr_30574_30603 = state_30567__$1;
(statearr_30574_30603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (15))){
var inst_30524 = (state_30567[(7)]);
var inst_30555 = cljs.core.vec.call(null,inst_30524);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30567__$1,(18),out,inst_30555);
} else {
if((state_val_30568 === (13))){
var inst_30550 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30575_30604 = state_30567__$1;
(statearr_30575_30604[(2)] = inst_30550);

(statearr_30575_30604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (6))){
var inst_30524 = (state_30567[(7)]);
var inst_30552 = inst_30524.length;
var inst_30553 = (inst_30552 > (0));
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30553)){
var statearr_30576_30605 = state_30567__$1;
(statearr_30576_30605[(1)] = (15));

} else {
var statearr_30577_30606 = state_30567__$1;
(statearr_30577_30606[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (17))){
var inst_30560 = (state_30567[(2)]);
var inst_30561 = cljs.core.async.close_BANG_.call(null,out);
var state_30567__$1 = (function (){var statearr_30578 = state_30567;
(statearr_30578[(10)] = inst_30560);

return statearr_30578;
})();
var statearr_30579_30607 = state_30567__$1;
(statearr_30579_30607[(2)] = inst_30561);

(statearr_30579_30607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (3))){
var inst_30565 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30567__$1,inst_30565);
} else {
if((state_val_30568 === (12))){
var inst_30524 = (state_30567[(7)]);
var inst_30543 = cljs.core.vec.call(null,inst_30524);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30567__$1,(14),out,inst_30543);
} else {
if((state_val_30568 === (2))){
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(4),ch);
} else {
if((state_val_30568 === (11))){
var inst_30528 = (state_30567[(9)]);
var inst_30524 = (state_30567[(7)]);
var inst_30532 = (state_30567[(11)]);
var inst_30540 = inst_30524.push(inst_30528);
var tmp30580 = inst_30524;
var inst_30524__$1 = tmp30580;
var inst_30525 = inst_30532;
var state_30567__$1 = (function (){var statearr_30581 = state_30567;
(statearr_30581[(12)] = inst_30540);

(statearr_30581[(7)] = inst_30524__$1);

(statearr_30581[(8)] = inst_30525);

return statearr_30581;
})();
var statearr_30582_30608 = state_30567__$1;
(statearr_30582_30608[(2)] = null);

(statearr_30582_30608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (9))){
var inst_30525 = (state_30567[(8)]);
var inst_30536 = cljs.core.keyword_identical_QMARK_.call(null,inst_30525,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_30567__$1 = state_30567;
var statearr_30583_30609 = state_30567__$1;
(statearr_30583_30609[(2)] = inst_30536);

(statearr_30583_30609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (5))){
var inst_30528 = (state_30567[(9)]);
var inst_30533 = (state_30567[(13)]);
var inst_30532 = (state_30567[(11)]);
var inst_30525 = (state_30567[(8)]);
var inst_30532__$1 = f.call(null,inst_30528);
var inst_30533__$1 = cljs.core._EQ_.call(null,inst_30532__$1,inst_30525);
var state_30567__$1 = (function (){var statearr_30584 = state_30567;
(statearr_30584[(13)] = inst_30533__$1);

(statearr_30584[(11)] = inst_30532__$1);

return statearr_30584;
})();
if(inst_30533__$1){
var statearr_30585_30610 = state_30567__$1;
(statearr_30585_30610[(1)] = (8));

} else {
var statearr_30586_30611 = state_30567__$1;
(statearr_30586_30611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (14))){
var inst_30528 = (state_30567[(9)]);
var inst_30532 = (state_30567[(11)]);
var inst_30545 = (state_30567[(2)]);
var inst_30546 = [];
var inst_30547 = inst_30546.push(inst_30528);
var inst_30524 = inst_30546;
var inst_30525 = inst_30532;
var state_30567__$1 = (function (){var statearr_30587 = state_30567;
(statearr_30587[(14)] = inst_30547);

(statearr_30587[(15)] = inst_30545);

(statearr_30587[(7)] = inst_30524);

(statearr_30587[(8)] = inst_30525);

return statearr_30587;
})();
var statearr_30588_30612 = state_30567__$1;
(statearr_30588_30612[(2)] = null);

(statearr_30588_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (16))){
var state_30567__$1 = state_30567;
var statearr_30589_30613 = state_30567__$1;
(statearr_30589_30613[(2)] = null);

(statearr_30589_30613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (10))){
var inst_30538 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30538)){
var statearr_30590_30614 = state_30567__$1;
(statearr_30590_30614[(1)] = (11));

} else {
var statearr_30591_30615 = state_30567__$1;
(statearr_30591_30615[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (18))){
var inst_30557 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30592_30616 = state_30567__$1;
(statearr_30592_30616[(2)] = inst_30557);

(statearr_30592_30616[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (8))){
var inst_30533 = (state_30567[(13)]);
var state_30567__$1 = state_30567;
var statearr_30593_30617 = state_30567__$1;
(statearr_30593_30617[(2)] = inst_30533);

(statearr_30593_30617[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28647__auto__ = null;
var cljs$core$async$state_machine__28647__auto____0 = (function (){
var statearr_30594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30594[(0)] = cljs$core$async$state_machine__28647__auto__);

(statearr_30594[(1)] = (1));

return statearr_30594;
});
var cljs$core$async$state_machine__28647__auto____1 = (function (state_30567){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_30567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e30595){if((e30595 instanceof Object)){
var ex__28650__auto__ = e30595;
var statearr_30596_30618 = state_30567;
(statearr_30596_30618[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30619 = state_30567;
state_30567 = G__30619;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
cljs$core$async$state_machine__28647__auto__ = function(state_30567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28647__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28647__auto____1.call(this,state_30567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28647__auto____0;
cljs$core$async$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28647__auto____1;
return cljs$core$async$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_30597 = f__28744__auto__.call(null);
(statearr_30597[(6)] = c__28743__auto___30599);

return statearr_30597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1644716833841
