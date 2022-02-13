// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('rand_cljc.core');
goog.require('cljs.core');
goog.require('goog.testing.PseudoRandom');
goog.require('goog.array');
goog.scope(function(){
rand_cljc.core.goog$module$goog$array = goog.module.get('goog.array');
});

/**
 * @interface
 */
rand_cljc.core.IRandom = function(){};

var rand_cljc$core$IRandom$_rand$dyn_25924 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (rand_cljc.core._rand[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$);
} else {
var m__4549__auto__ = (rand_cljc.core._rand["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-rand",this$);
}
}
});
rand_cljc.core._rand = (function rand_cljc$core$_rand(this$){
if((((!((this$ == null)))) && ((!((this$.rand_cljc$core$IRandom$_rand$arity$1 == null)))))){
return this$.rand_cljc$core$IRandom$_rand$arity$1(this$);
} else {
return rand_cljc$core$IRandom$_rand$dyn_25924.call(null,this$);
}
});

var rand_cljc$core$IRandom$_shuffle$dyn_25925 = (function (this$,coll){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (rand_cljc.core._shuffle[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,coll);
} else {
var m__4549__auto__ = (rand_cljc.core._shuffle["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,coll);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-shuffle",this$);
}
}
});
rand_cljc.core._shuffle = (function rand_cljc$core$_shuffle(this$,coll){
if((((!((this$ == null)))) && ((!((this$.rand_cljc$core$IRandom$_shuffle$arity$2 == null)))))){
return this$.rand_cljc$core$IRandom$_shuffle$arity$2(this$,coll);
} else {
return rand_cljc$core$IRandom$_shuffle$dyn_25925.call(null,this$,coll);
}
});

(goog.testing.PseudoRandom.prototype.rand_cljc$core$IRandom$ = cljs.core.PROTOCOL_SENTINEL);

(goog.testing.PseudoRandom.prototype.rand_cljc$core$IRandom$_rand$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.random();
}));

(goog.testing.PseudoRandom.prototype.rand_cljc$core$IRandom$_shuffle$arity$2 = (function (this$,coll){
var this$__$1 = this;
var arr = cljs.core.to_array.call(null,coll);
rand_cljc.core.goog$module$goog$array.shuffle.call(null,arr,(function (){
return this$__$1.random();
}));

return cljs.core.vec.call(null,arr);
}));
rand_cljc.core.rng = (function rand_cljc$core$rng(var_args){
var G__25927 = arguments.length;
switch (G__25927) {
case 0:
return rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new goog.testing.PseudoRandom());
}));

(rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return (new goog.testing.PseudoRandom(seed));
}));

(rand_cljc.core.rng.cljs$lang$maxFixedArity = 1);

rand_cljc.core.rand = (function rand_cljc$core$rand(var_args){
var G__25930 = arguments.length;
switch (G__25930) {
case 1:
return rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$1 = (function (rng){
return rand_cljc.core._rand.call(null,rng);
}));

(rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$2 = (function (rng,n){
return (n * rand_cljc.core._rand.call(null,rng));
}));

(rand_cljc.core.rand.cljs$lang$maxFixedArity = 2);

rand_cljc.core.rand_int = (function rand_cljc$core$rand_int(rng,n){
return ((n * rand_cljc.core.rand.call(null,rng)) | (0));
});
rand_cljc.core.rand_nth = (function rand_cljc$core$rand_nth(rng,coll){
return cljs.core.nth.call(null,coll,rand_cljc.core.rand_int.call(null,rng,cljs.core.count.call(null,coll)));
});
rand_cljc.core.random_sample = (function rand_cljc$core$random_sample(var_args){
var G__25933 = arguments.length;
switch (G__25933) {
case 2:
return rand_cljc.core.random_sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rand_cljc.core.random_sample.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rand_cljc.core.random_sample.cljs$core$IFn$_invoke$arity$2 = (function (rng,prob){
return cljs.core.filter.call(null,(function (_){
return (rand_cljc.core.rand.call(null,rng) < prob);
}));
}));

(rand_cljc.core.random_sample.cljs$core$IFn$_invoke$arity$3 = (function (rng,prob,coll){
return cljs.core.filter.call(null,(function (_){
return (rand_cljc.core.rand.call(null,rng) < prob);
}),coll);
}));

(rand_cljc.core.random_sample.cljs$lang$maxFixedArity = 3);

rand_cljc.core.shuffle = (function rand_cljc$core$shuffle(rng,coll){
return rand_cljc.core._shuffle.call(null,rng,coll);
});

//# sourceMappingURL=core.js.map?rel=1644716831514
