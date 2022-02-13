// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31827){if((e31827 instanceof Error)){
var e = e31827;
return "Error: Unable to stringify";
} else {
throw e31827;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31830 = arguments.length;
switch (G__31830) {
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

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31828_SHARP_){
if(typeof p1__31828_SHARP_ === 'string'){
return p1__31828_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31828_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31833 = arguments.length;
var i__4865__auto___31834 = (0);
while(true){
if((i__4865__auto___31834 < len__4864__auto___31833)){
args__4870__auto__.push((arguments[i__4865__auto___31834]));

var G__31835 = (i__4865__auto___31834 + (1));
i__4865__auto___31834 = G__31835;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31832){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31832));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31837 = arguments.length;
var i__4865__auto___31838 = (0);
while(true){
if((i__4865__auto___31838 < len__4864__auto___31837)){
args__4870__auto__.push((arguments[i__4865__auto___31838]));

var G__31839 = (i__4865__auto___31838 + (1));
i__4865__auto___31838 = G__31839;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31836){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31836));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

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
if(((b === true) || (b === false))){
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
if(((b === true) || (b === false))){
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31840){
var map__31841 = p__31840;
var map__31841__$1 = cljs.core.__destructure_map.call(null,map__31841);
var message = cljs.core.get.call(null,map__31841__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31841__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4253__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4251__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4251__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4251__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
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
var c__28743__auto___31919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_31891){
var state_val_31892 = (state_31891[(1)]);
if((state_val_31892 === (7))){
var inst_31887 = (state_31891[(2)]);
var state_31891__$1 = state_31891;
var statearr_31893_31920 = state_31891__$1;
(statearr_31893_31920[(2)] = inst_31887);

(statearr_31893_31920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (1))){
var state_31891__$1 = state_31891;
var statearr_31894_31921 = state_31891__$1;
(statearr_31894_31921[(2)] = null);

(statearr_31894_31921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (4))){
var inst_31844 = (state_31891[(7)]);
var inst_31844__$1 = (state_31891[(2)]);
var state_31891__$1 = (function (){var statearr_31895 = state_31891;
(statearr_31895[(7)] = inst_31844__$1);

return statearr_31895;
})();
if(cljs.core.truth_(inst_31844__$1)){
var statearr_31896_31922 = state_31891__$1;
(statearr_31896_31922[(1)] = (5));

} else {
var statearr_31897_31923 = state_31891__$1;
(statearr_31897_31923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (15))){
var inst_31851 = (state_31891[(8)]);
var inst_31866 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31851);
var inst_31867 = cljs.core.first.call(null,inst_31866);
var inst_31868 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31867);
var inst_31869 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31868)].join('');
var inst_31870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31869);
var state_31891__$1 = state_31891;
var statearr_31898_31924 = state_31891__$1;
(statearr_31898_31924[(2)] = inst_31870);

(statearr_31898_31924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (13))){
var inst_31875 = (state_31891[(2)]);
var state_31891__$1 = state_31891;
var statearr_31899_31925 = state_31891__$1;
(statearr_31899_31925[(2)] = inst_31875);

(statearr_31899_31925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (6))){
var state_31891__$1 = state_31891;
var statearr_31900_31926 = state_31891__$1;
(statearr_31900_31926[(2)] = null);

(statearr_31900_31926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (17))){
var inst_31873 = (state_31891[(2)]);
var state_31891__$1 = state_31891;
var statearr_31901_31927 = state_31891__$1;
(statearr_31901_31927[(2)] = inst_31873);

(statearr_31901_31927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (3))){
var inst_31889 = (state_31891[(2)]);
var state_31891__$1 = state_31891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31891__$1,inst_31889);
} else {
if((state_val_31892 === (12))){
var inst_31850 = (state_31891[(9)]);
var inst_31864 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31850,opts);
var state_31891__$1 = state_31891;
if(inst_31864){
var statearr_31902_31928 = state_31891__$1;
(statearr_31902_31928[(1)] = (15));

} else {
var statearr_31903_31929 = state_31891__$1;
(statearr_31903_31929[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (2))){
var state_31891__$1 = state_31891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31891__$1,(4),ch);
} else {
if((state_val_31892 === (11))){
var inst_31851 = (state_31891[(8)]);
var inst_31856 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31857 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31851);
var inst_31858 = cljs.core.async.timeout.call(null,(1000));
var inst_31859 = [inst_31857,inst_31858];
var inst_31860 = (new cljs.core.PersistentVector(null,2,(5),inst_31856,inst_31859,null));
var state_31891__$1 = state_31891;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31891__$1,(14),inst_31860);
} else {
if((state_val_31892 === (9))){
var inst_31851 = (state_31891[(8)]);
var inst_31877 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31878 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31851);
var inst_31879 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31878);
var inst_31880 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31879)].join('');
var inst_31881 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31880);
var state_31891__$1 = (function (){var statearr_31904 = state_31891;
(statearr_31904[(10)] = inst_31877);

return statearr_31904;
})();
var statearr_31905_31930 = state_31891__$1;
(statearr_31905_31930[(2)] = inst_31881);

(statearr_31905_31930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (5))){
var inst_31844 = (state_31891[(7)]);
var inst_31846 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31847 = (new cljs.core.PersistentArrayMap(null,2,inst_31846,null));
var inst_31848 = (new cljs.core.PersistentHashSet(null,inst_31847,null));
var inst_31849 = figwheel.client.focus_msgs.call(null,inst_31848,inst_31844);
var inst_31850 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31849);
var inst_31851 = cljs.core.first.call(null,inst_31849);
var inst_31852 = figwheel.client.autoload_QMARK_.call(null);
var state_31891__$1 = (function (){var statearr_31906 = state_31891;
(statearr_31906[(8)] = inst_31851);

(statearr_31906[(9)] = inst_31850);

return statearr_31906;
})();
if(cljs.core.truth_(inst_31852)){
var statearr_31907_31931 = state_31891__$1;
(statearr_31907_31931[(1)] = (8));

} else {
var statearr_31908_31932 = state_31891__$1;
(statearr_31908_31932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (14))){
var inst_31862 = (state_31891[(2)]);
var state_31891__$1 = state_31891;
var statearr_31909_31933 = state_31891__$1;
(statearr_31909_31933[(2)] = inst_31862);

(statearr_31909_31933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (16))){
var state_31891__$1 = state_31891;
var statearr_31910_31934 = state_31891__$1;
(statearr_31910_31934[(2)] = null);

(statearr_31910_31934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (10))){
var inst_31883 = (state_31891[(2)]);
var state_31891__$1 = (function (){var statearr_31911 = state_31891;
(statearr_31911[(11)] = inst_31883);

return statearr_31911;
})();
var statearr_31912_31935 = state_31891__$1;
(statearr_31912_31935[(2)] = null);

(statearr_31912_31935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (8))){
var inst_31850 = (state_31891[(9)]);
var inst_31854 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31850,opts);
var state_31891__$1 = state_31891;
if(cljs.core.truth_(inst_31854)){
var statearr_31913_31936 = state_31891__$1;
(statearr_31913_31936[(1)] = (11));

} else {
var statearr_31914_31937 = state_31891__$1;
(statearr_31914_31937[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28647__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28647__auto____0 = (function (){
var statearr_31915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31915[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28647__auto__);

(statearr_31915[(1)] = (1));

return statearr_31915;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28647__auto____1 = (function (state_31891){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31916){if((e31916 instanceof Object)){
var ex__28650__auto__ = e31916;
var statearr_31917_31938 = state_31891;
(statearr_31917_31938[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31939 = state_31891;
state_31891 = G__31939;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28647__auto__ = function(state_31891){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28647__auto____1.call(this,state_31891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28647__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28647__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_31918 = f__28744__auto__.call(null);
(statearr_31918[(6)] = c__28743__auto___31919);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31940_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31940_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31946 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31942 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31943 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31944 = true;
var _STAR_print_fn_STAR__temp_val__31945 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31944);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31945);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31943);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31942);
}}catch (e31941){if((e31941 instanceof Error)){
var e = e31941;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31946], null));
} else {
var e = e31941;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31947){
var map__31948 = p__31947;
var map__31948__$1 = cljs.core.__destructure_map.call(null,map__31948);
var opts = map__31948__$1;
var build_id = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31949){
var vec__31950 = p__31949;
var seq__31951 = cljs.core.seq.call(null,vec__31950);
var first__31952 = cljs.core.first.call(null,seq__31951);
var seq__31951__$1 = cljs.core.next.call(null,seq__31951);
var map__31953 = first__31952;
var map__31953__$1 = cljs.core.__destructure_map.call(null,map__31953);
var msg = map__31953__$1;
var msg_name = cljs.core.get.call(null,map__31953__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31951__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31954){
var vec__31955 = p__31954;
var seq__31956 = cljs.core.seq.call(null,vec__31955);
var first__31957 = cljs.core.first.call(null,seq__31956);
var seq__31956__$1 = cljs.core.next.call(null,seq__31956);
var map__31958 = first__31957;
var map__31958__$1 = cljs.core.__destructure_map.call(null,map__31958);
var msg = map__31958__$1;
var msg_name = cljs.core.get.call(null,map__31958__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31956__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31959){
var map__31960 = p__31959;
var map__31960__$1 = cljs.core.__destructure_map.call(null,map__31960);
var on_compile_warning = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31961){
var vec__31962 = p__31961;
var seq__31963 = cljs.core.seq.call(null,vec__31962);
var first__31964 = cljs.core.first.call(null,seq__31963);
var seq__31963__$1 = cljs.core.next.call(null,seq__31963);
var map__31965 = first__31964;
var map__31965__$1 = cljs.core.__destructure_map.call(null,map__31965);
var msg = map__31965__$1;
var msg_name = cljs.core.get.call(null,map__31965__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31963__$1;
var pred__31966 = cljs.core._EQ_;
var expr__31967 = msg_name;
if(cljs.core.truth_(pred__31966.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31967))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31966.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31967))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
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
var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_32056){
var state_val_32057 = (state_32056[(1)]);
if((state_val_32057 === (7))){
var inst_31976 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
if(cljs.core.truth_(inst_31976)){
var statearr_32058_32105 = state_32056__$1;
(statearr_32058_32105[(1)] = (8));

} else {
var statearr_32059_32106 = state_32056__$1;
(statearr_32059_32106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (20))){
var inst_32050 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32060_32107 = state_32056__$1;
(statearr_32060_32107[(2)] = inst_32050);

(statearr_32060_32107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (27))){
var inst_32046 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32061_32108 = state_32056__$1;
(statearr_32061_32108[(2)] = inst_32046);

(statearr_32061_32108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (1))){
var inst_31969 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32056__$1 = state_32056;
if(cljs.core.truth_(inst_31969)){
var statearr_32062_32109 = state_32056__$1;
(statearr_32062_32109[(1)] = (2));

} else {
var statearr_32063_32110 = state_32056__$1;
(statearr_32063_32110[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (24))){
var inst_32048 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32064_32111 = state_32056__$1;
(statearr_32064_32111[(2)] = inst_32048);

(statearr_32064_32111[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (4))){
var inst_32054 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32056__$1,inst_32054);
} else {
if((state_val_32057 === (15))){
var inst_32052 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32065_32112 = state_32056__$1;
(statearr_32065_32112[(2)] = inst_32052);

(statearr_32065_32112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (21))){
var inst_32005 = (state_32056[(2)]);
var inst_32006 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32007 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32006);
var state_32056__$1 = (function (){var statearr_32066 = state_32056;
(statearr_32066[(7)] = inst_32005);

return statearr_32066;
})();
var statearr_32067_32113 = state_32056__$1;
(statearr_32067_32113[(2)] = inst_32007);

(statearr_32067_32113[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (31))){
var inst_32035 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32056__$1 = state_32056;
if(inst_32035){
var statearr_32068_32114 = state_32056__$1;
(statearr_32068_32114[(1)] = (34));

} else {
var statearr_32069_32115 = state_32056__$1;
(statearr_32069_32115[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (32))){
var inst_32044 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32070_32116 = state_32056__$1;
(statearr_32070_32116[(2)] = inst_32044);

(statearr_32070_32116[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (33))){
var inst_32031 = (state_32056[(2)]);
var inst_32032 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32033 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32032);
var state_32056__$1 = (function (){var statearr_32071 = state_32056;
(statearr_32071[(8)] = inst_32031);

return statearr_32071;
})();
var statearr_32072_32117 = state_32056__$1;
(statearr_32072_32117[(2)] = inst_32033);

(statearr_32072_32117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (13))){
var inst_31990 = figwheel.client.heads_up.clear.call(null);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(16),inst_31990);
} else {
if((state_val_32057 === (22))){
var inst_32011 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32012 = figwheel.client.heads_up.append_warning_message.call(null,inst_32011);
var state_32056__$1 = state_32056;
var statearr_32073_32118 = state_32056__$1;
(statearr_32073_32118[(2)] = inst_32012);

(statearr_32073_32118[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (36))){
var inst_32042 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32074_32119 = state_32056__$1;
(statearr_32074_32119[(2)] = inst_32042);

(statearr_32074_32119[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (29))){
var inst_32022 = (state_32056[(2)]);
var inst_32023 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32024 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32023);
var state_32056__$1 = (function (){var statearr_32075 = state_32056;
(statearr_32075[(9)] = inst_32022);

return statearr_32075;
})();
var statearr_32076_32120 = state_32056__$1;
(statearr_32076_32120[(2)] = inst_32024);

(statearr_32076_32120[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (6))){
var inst_31971 = (state_32056[(10)]);
var state_32056__$1 = state_32056;
var statearr_32077_32121 = state_32056__$1;
(statearr_32077_32121[(2)] = inst_31971);

(statearr_32077_32121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (28))){
var inst_32018 = (state_32056[(2)]);
var inst_32019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32020 = figwheel.client.heads_up.display_warning.call(null,inst_32019);
var state_32056__$1 = (function (){var statearr_32078 = state_32056;
(statearr_32078[(11)] = inst_32018);

return statearr_32078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(29),inst_32020);
} else {
if((state_val_32057 === (25))){
var inst_32016 = figwheel.client.heads_up.clear.call(null);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(28),inst_32016);
} else {
if((state_val_32057 === (34))){
var inst_32037 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(37),inst_32037);
} else {
if((state_val_32057 === (17))){
var inst_31996 = (state_32056[(2)]);
var inst_31997 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31998 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31997);
var state_32056__$1 = (function (){var statearr_32079 = state_32056;
(statearr_32079[(12)] = inst_31996);

return statearr_32079;
})();
var statearr_32080_32122 = state_32056__$1;
(statearr_32080_32122[(2)] = inst_31998);

(statearr_32080_32122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (3))){
var inst_31988 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32056__$1 = state_32056;
if(inst_31988){
var statearr_32081_32123 = state_32056__$1;
(statearr_32081_32123[(1)] = (13));

} else {
var statearr_32082_32124 = state_32056__$1;
(statearr_32082_32124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (12))){
var inst_31984 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32083_32125 = state_32056__$1;
(statearr_32083_32125[(2)] = inst_31984);

(statearr_32083_32125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (2))){
var inst_31971 = (state_32056[(10)]);
var inst_31971__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32056__$1 = (function (){var statearr_32084 = state_32056;
(statearr_32084[(10)] = inst_31971__$1);

return statearr_32084;
})();
if(cljs.core.truth_(inst_31971__$1)){
var statearr_32085_32126 = state_32056__$1;
(statearr_32085_32126[(1)] = (5));

} else {
var statearr_32086_32127 = state_32056__$1;
(statearr_32086_32127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (23))){
var inst_32014 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32056__$1 = state_32056;
if(inst_32014){
var statearr_32087_32128 = state_32056__$1;
(statearr_32087_32128[(1)] = (25));

} else {
var statearr_32088_32129 = state_32056__$1;
(statearr_32088_32129[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (35))){
var state_32056__$1 = state_32056;
var statearr_32089_32130 = state_32056__$1;
(statearr_32089_32130[(2)] = null);

(statearr_32089_32130[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (19))){
var inst_32009 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32056__$1 = state_32056;
if(inst_32009){
var statearr_32090_32131 = state_32056__$1;
(statearr_32090_32131[(1)] = (22));

} else {
var statearr_32091_32132 = state_32056__$1;
(statearr_32091_32132[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (11))){
var inst_31980 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32092_32133 = state_32056__$1;
(statearr_32092_32133[(2)] = inst_31980);

(statearr_32092_32133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (9))){
var inst_31982 = figwheel.client.heads_up.clear.call(null);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(12),inst_31982);
} else {
if((state_val_32057 === (5))){
var inst_31973 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32056__$1 = state_32056;
var statearr_32093_32134 = state_32056__$1;
(statearr_32093_32134[(2)] = inst_31973);

(statearr_32093_32134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (14))){
var inst_32000 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32056__$1 = state_32056;
if(inst_32000){
var statearr_32094_32135 = state_32056__$1;
(statearr_32094_32135[(1)] = (18));

} else {
var statearr_32095_32136 = state_32056__$1;
(statearr_32095_32136[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (26))){
var inst_32026 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32056__$1 = state_32056;
if(inst_32026){
var statearr_32096_32137 = state_32056__$1;
(statearr_32096_32137[(1)] = (30));

} else {
var statearr_32097_32138 = state_32056__$1;
(statearr_32097_32138[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (16))){
var inst_31992 = (state_32056[(2)]);
var inst_31993 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31994 = figwheel.client.heads_up.display_exception.call(null,inst_31993);
var state_32056__$1 = (function (){var statearr_32098 = state_32056;
(statearr_32098[(13)] = inst_31992);

return statearr_32098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(17),inst_31994);
} else {
if((state_val_32057 === (30))){
var inst_32028 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32029 = figwheel.client.heads_up.display_warning.call(null,inst_32028);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(33),inst_32029);
} else {
if((state_val_32057 === (10))){
var inst_31986 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32099_32139 = state_32056__$1;
(statearr_32099_32139[(2)] = inst_31986);

(statearr_32099_32139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (18))){
var inst_32002 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32003 = figwheel.client.heads_up.display_exception.call(null,inst_32002);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(21),inst_32003);
} else {
if((state_val_32057 === (37))){
var inst_32039 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32100_32140 = state_32056__$1;
(statearr_32100_32140[(2)] = inst_32039);

(statearr_32100_32140[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (8))){
var inst_31978 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(11),inst_31978);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto____0 = (function (){
var statearr_32101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32101[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto__);

(statearr_32101[(1)] = (1));

return statearr_32101;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto____1 = (function (state_32056){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_32056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e32102){if((e32102 instanceof Object)){
var ex__28650__auto__ = e32102;
var statearr_32103_32141 = state_32056;
(statearr_32103_32141[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32142 = state_32056;
state_32056 = G__32142;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto__ = function(state_32056){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto____1.call(this,state_32056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_32104 = f__28744__auto__.call(null);
(statearr_32104[(6)] = c__28743__auto__);

return statearr_32104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28743__auto___32171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_32157){
var state_val_32158 = (state_32157[(1)]);
if((state_val_32158 === (1))){
var state_32157__$1 = state_32157;
var statearr_32159_32172 = state_32157__$1;
(statearr_32159_32172[(2)] = null);

(statearr_32159_32172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (2))){
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32157__$1,(4),ch);
} else {
if((state_val_32158 === (3))){
var inst_32155 = (state_32157[(2)]);
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32157__$1,inst_32155);
} else {
if((state_val_32158 === (4))){
var inst_32145 = (state_32157[(7)]);
var inst_32145__$1 = (state_32157[(2)]);
var state_32157__$1 = (function (){var statearr_32160 = state_32157;
(statearr_32160[(7)] = inst_32145__$1);

return statearr_32160;
})();
if(cljs.core.truth_(inst_32145__$1)){
var statearr_32161_32173 = state_32157__$1;
(statearr_32161_32173[(1)] = (5));

} else {
var statearr_32162_32174 = state_32157__$1;
(statearr_32162_32174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (5))){
var inst_32145 = (state_32157[(7)]);
var inst_32147 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32145);
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32157__$1,(8),inst_32147);
} else {
if((state_val_32158 === (6))){
var state_32157__$1 = state_32157;
var statearr_32163_32175 = state_32157__$1;
(statearr_32163_32175[(2)] = null);

(statearr_32163_32175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (7))){
var inst_32153 = (state_32157[(2)]);
var state_32157__$1 = state_32157;
var statearr_32164_32176 = state_32157__$1;
(statearr_32164_32176[(2)] = inst_32153);

(statearr_32164_32176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (8))){
var inst_32149 = (state_32157[(2)]);
var state_32157__$1 = (function (){var statearr_32165 = state_32157;
(statearr_32165[(8)] = inst_32149);

return statearr_32165;
})();
var statearr_32166_32177 = state_32157__$1;
(statearr_32166_32177[(2)] = null);

(statearr_32166_32177[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28647__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28647__auto____0 = (function (){
var statearr_32167 = [null,null,null,null,null,null,null,null,null];
(statearr_32167[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28647__auto__);

(statearr_32167[(1)] = (1));

return statearr_32167;
});
var figwheel$client$heads_up_plugin_$_state_machine__28647__auto____1 = (function (state_32157){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_32157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e32168){if((e32168 instanceof Object)){
var ex__28650__auto__ = e32168;
var statearr_32169_32178 = state_32157;
(statearr_32169_32178[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32179 = state_32157;
state_32157 = G__32179;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28647__auto__ = function(state_32157){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28647__auto____1.call(this,state_32157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28647__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28647__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_32170 = f__28744__auto__.call(null);
(statearr_32170[(6)] = c__28743__auto___32171);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_32185){
var state_val_32186 = (state_32185[(1)]);
if((state_val_32186 === (1))){
var inst_32180 = cljs.core.async.timeout.call(null,(3000));
var state_32185__$1 = state_32185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32185__$1,(2),inst_32180);
} else {
if((state_val_32186 === (2))){
var inst_32182 = (state_32185[(2)]);
var inst_32183 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32185__$1 = (function (){var statearr_32187 = state_32185;
(statearr_32187[(7)] = inst_32182);

return statearr_32187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32185__$1,inst_32183);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28647__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28647__auto____0 = (function (){
var statearr_32188 = [null,null,null,null,null,null,null,null];
(statearr_32188[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28647__auto__);

(statearr_32188[(1)] = (1));

return statearr_32188;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28647__auto____1 = (function (state_32185){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_32185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e32189){if((e32189 instanceof Object)){
var ex__28650__auto__ = e32189;
var statearr_32190_32192 = state_32185;
(statearr_32190_32192[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32193 = state_32185;
state_32185 = G__32193;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28647__auto__ = function(state_32185){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28647__auto____1.call(this,state_32185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28647__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28647__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_32191 = f__28744__auto__.call(null);
(statearr_32191[(6)] = c__28743__auto__);

return statearr_32191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
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
var temp__5753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5753__auto__)){
var figwheel_version = temp__5753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_32200){
var state_val_32201 = (state_32200[(1)]);
if((state_val_32201 === (1))){
var inst_32194 = cljs.core.async.timeout.call(null,(2000));
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32200__$1,(2),inst_32194);
} else {
if((state_val_32201 === (2))){
var inst_32196 = (state_32200[(2)]);
var inst_32197 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32198 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32197);
var state_32200__$1 = (function (){var statearr_32202 = state_32200;
(statearr_32202[(7)] = inst_32196);

return statearr_32202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32200__$1,inst_32198);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto____0 = (function (){
var statearr_32203 = [null,null,null,null,null,null,null,null];
(statearr_32203[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto__);

(statearr_32203[(1)] = (1));

return statearr_32203;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto____1 = (function (state_32200){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_32200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e32204){if((e32204 instanceof Object)){
var ex__28650__auto__ = e32204;
var statearr_32205_32207 = state_32200;
(statearr_32205_32207[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32208 = state_32200;
state_32200 = G__32208;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto__ = function(state_32200){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto____1.call(this,state_32200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_32206 = f__28744__auto__.call(null);
(statearr_32206[(6)] = c__28743__auto__);

return statearr_32206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32209){
var map__32210 = p__32209;
var map__32210__$1 = cljs.core.__destructure_map.call(null,map__32210);
var file = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32211 = "";
var G__32211__$1 = (cljs.core.truth_(file)?[G__32211,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32211);
var G__32211__$2 = (cljs.core.truth_(line)?[G__32211__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32211__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__32211__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32211__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32212){
var map__32213 = p__32212;
var map__32213__$1 = cljs.core.__destructure_map.call(null,map__32213);
var ed = map__32213__$1;
var exception_data = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32215 = (function (){var G__32214 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32214)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32214;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32215);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32216){
var map__32217 = p__32216;
var map__32217__$1 = cljs.core.__destructure_map.call(null,map__32217);
var w = map__32217__$1;
var message = cljs.core.get.call(null,map__32217__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public\\js\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4251__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4251__auto__;
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
var seq__32218 = cljs.core.seq.call(null,plugins);
var chunk__32219 = null;
var count__32220 = (0);
var i__32221 = (0);
while(true){
if((i__32221 < count__32220)){
var vec__32228 = cljs.core._nth.call(null,chunk__32219,i__32221);
var k = cljs.core.nth.call(null,vec__32228,(0),null);
var plugin = cljs.core.nth.call(null,vec__32228,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32234 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32218,chunk__32219,count__32220,i__32221,pl_32234,vec__32228,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32234.call(null,msg_hist);
});})(seq__32218,chunk__32219,count__32220,i__32221,pl_32234,vec__32228,k,plugin))
);
} else {
}


var G__32235 = seq__32218;
var G__32236 = chunk__32219;
var G__32237 = count__32220;
var G__32238 = (i__32221 + (1));
seq__32218 = G__32235;
chunk__32219 = G__32236;
count__32220 = G__32237;
i__32221 = G__32238;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__32218);
if(temp__5753__auto__){
var seq__32218__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32218__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__32218__$1);
var G__32239 = cljs.core.chunk_rest.call(null,seq__32218__$1);
var G__32240 = c__4679__auto__;
var G__32241 = cljs.core.count.call(null,c__4679__auto__);
var G__32242 = (0);
seq__32218 = G__32239;
chunk__32219 = G__32240;
count__32220 = G__32241;
i__32221 = G__32242;
continue;
} else {
var vec__32231 = cljs.core.first.call(null,seq__32218__$1);
var k = cljs.core.nth.call(null,vec__32231,(0),null);
var plugin = cljs.core.nth.call(null,vec__32231,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32243 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32218,chunk__32219,count__32220,i__32221,pl_32243,vec__32231,k,plugin,seq__32218__$1,temp__5753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32243.call(null,msg_hist);
});})(seq__32218,chunk__32219,count__32220,i__32221,pl_32243,vec__32231,k,plugin,seq__32218__$1,temp__5753__auto__))
);
} else {
}


var G__32244 = cljs.core.next.call(null,seq__32218__$1);
var G__32245 = null;
var G__32246 = (0);
var G__32247 = (0);
seq__32218 = G__32244;
chunk__32219 = G__32245;
count__32220 = G__32246;
i__32221 = G__32247;
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
var G__32249 = arguments.length;
switch (G__32249) {
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

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32250_32255 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32251_32256 = null;
var count__32252_32257 = (0);
var i__32253_32258 = (0);
while(true){
if((i__32253_32258 < count__32252_32257)){
var msg_32259 = cljs.core._nth.call(null,chunk__32251_32256,i__32253_32258);
figwheel.client.socket.handle_incoming_message.call(null,msg_32259);


var G__32260 = seq__32250_32255;
var G__32261 = chunk__32251_32256;
var G__32262 = count__32252_32257;
var G__32263 = (i__32253_32258 + (1));
seq__32250_32255 = G__32260;
chunk__32251_32256 = G__32261;
count__32252_32257 = G__32262;
i__32253_32258 = G__32263;
continue;
} else {
var temp__5753__auto___32264 = cljs.core.seq.call(null,seq__32250_32255);
if(temp__5753__auto___32264){
var seq__32250_32265__$1 = temp__5753__auto___32264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32250_32265__$1)){
var c__4679__auto___32266 = cljs.core.chunk_first.call(null,seq__32250_32265__$1);
var G__32267 = cljs.core.chunk_rest.call(null,seq__32250_32265__$1);
var G__32268 = c__4679__auto___32266;
var G__32269 = cljs.core.count.call(null,c__4679__auto___32266);
var G__32270 = (0);
seq__32250_32255 = G__32267;
chunk__32251_32256 = G__32268;
count__32252_32257 = G__32269;
i__32253_32258 = G__32270;
continue;
} else {
var msg_32271 = cljs.core.first.call(null,seq__32250_32265__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32271);


var G__32272 = cljs.core.next.call(null,seq__32250_32265__$1);
var G__32273 = null;
var G__32274 = (0);
var G__32275 = (0);
seq__32250_32255 = G__32272;
chunk__32251_32256 = G__32273;
count__32252_32257 = G__32274;
i__32253_32258 = G__32275;
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
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32279 = arguments.length;
var i__4865__auto___32280 = (0);
while(true){
if((i__4865__auto___32280 < len__4864__auto___32279)){
args__4870__auto__.push((arguments[i__4865__auto___32280]));

var G__32281 = (i__4865__auto___32280 + (1));
i__4865__auto___32280 = G__32281;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32277){
var map__32278 = p__32277;
var map__32278__$1 = cljs.core.__destructure_map.call(null,map__32278);
var opts = map__32278__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32276){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32276));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32282){if((e32282 instanceof Error)){
var e = e32282;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32282;

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
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__32283){
var map__32284 = p__32283;
var map__32284__$1 = cljs.core.__destructure_map.call(null,map__32284);
var msg_name = cljs.core.get.call(null,map__32284__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1644716834601
