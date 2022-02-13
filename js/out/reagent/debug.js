// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25395__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25396__i = 0, G__25396__a = new Array(arguments.length -  0);
while (G__25396__i < G__25396__a.length) {G__25396__a[G__25396__i] = arguments[G__25396__i + 0]; ++G__25396__i;}
  args = new cljs.core.IndexedSeq(G__25396__a,0,null);
} 
return G__25395__delegate.call(this,args);};
G__25395.cljs$lang$maxFixedArity = 0;
G__25395.cljs$lang$applyTo = (function (arglist__25397){
var args = cljs.core.seq(arglist__25397);
return G__25395__delegate(args);
});
G__25395.cljs$core$IFn$_invoke$arity$variadic = G__25395__delegate;
return G__25395;
})()
);

(o.error = (function() { 
var G__25398__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25399__i = 0, G__25399__a = new Array(arguments.length -  0);
while (G__25399__i < G__25399__a.length) {G__25399__a[G__25399__i] = arguments[G__25399__i + 0]; ++G__25399__i;}
  args = new cljs.core.IndexedSeq(G__25399__a,0,null);
} 
return G__25398__delegate.call(this,args);};
G__25398.cljs$lang$maxFixedArity = 0;
G__25398.cljs$lang$applyTo = (function (arglist__25400){
var args = cljs.core.seq(arglist__25400);
return G__25398__delegate(args);
});
G__25398.cljs$core$IFn$_invoke$arity$variadic = G__25398__delegate;
return G__25398;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1644716828294
