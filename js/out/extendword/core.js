// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('extendword.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('goog.string');
goog.require('goog.events');
goog.require('extendword.words');
goog.require('rand_cljc.core');
goog.require('clojure.set');
extendword.core.display = reagent.core.atom.call(null,"none");
extendword.core.seconds = reagent.core.atom.call(null,(0));
extendword.core.handler = reagent.core.atom.call(null,null);
extendword.core.puzzle = reagent.core.atom.call(null,cljs.core.rand_int.call(null,(1000000)));
extendword.core.is_running = reagent.core.atom.call(null,false);
extendword.core.corrects = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
extendword.core.wrongs = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
extendword.core.passes = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
extendword.core.qlist = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
extendword.core.answer = reagent.core.atom.call(null,"");
extendword.core.position = reagent.core.atom.call(null,(0));
extendword.core.allset = cljs.core.set.call(null,extendword.words.all);
extendword.core.stop_timer = (function extendword$core$stop_timer(){
return clearInterval(cljs.core.deref.call(null,extendword.core.handler));
});
extendword.core.start_game = (function extendword$core$start_game(){
var r = rand_cljc.core.rng.call(null,cljs.core.deref.call(null,extendword.core.puzzle));
cljs.core.reset_BANG_.call(null,extendword.core.is_running,true);

cljs.core.reset_BANG_.call(null,extendword.core.wrongs,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,extendword.core.corrects,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,extendword.core.passes,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,extendword.core.qlist,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__33924_SHARP_){
return extendword.words.questions.call(null,p1__33924_SHARP_);
}),cljs.core.repeatedly.call(null,(30),(function (){
return rand_cljc.core.rand_int.call(null,r,cljs.core.count.call(null,extendword.words.questions));
})))));

cljs.core.reset_BANG_.call(null,extendword.core.seconds,(30));

cljs.core.reset_BANG_.call(null,extendword.core.position,(0));

cljs.core.reset_BANG_.call(null,extendword.core.handler,setInterval((function (){
return cljs.core.swap_BANG_.call(null,extendword.core.seconds,(function (s){
return (s - ((1) / (10)));
}));
}),(100)));

return document.getElementById("thebox").focus();
});
extendword.core.stop_game = (function extendword$core$stop_game(){
clearInterval(cljs.core.deref.call(null,extendword.core.handler));

return cljs.core.reset_BANG_.call(null,extendword.core.is_running,false);
});
extendword.core.start_new_random_game = (function extendword$core$start_new_random_game(){
cljs.core.reset_BANG_.call(null,extendword.core.puzzle,cljs.core.rand_int.call(null,(1000000)));

return extendword.core.start_game.call(null);
});
extendword.core.handle_enter = (function extendword$core$handle_enter(){
if(cljs.core.truth_(cljs.core.deref.call(null,extendword.core.is_running))){
var word = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,extendword.core.qlist),cljs.core.deref.call(null,extendword.core.position)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,extendword.core.answer))].join('');
if(cljs.core.truth_((function (){var and__4251__auto__ = (cljs.core.count.call(null,cljs.core.deref.call(null,extendword.core.answer)) > (1));
if(and__4251__auto__){
return extendword.core.allset.call(null,word);
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,extendword.core.corrects,cljs.core.conj,word);
} else {
cljs.core.swap_BANG_.call(null,extendword.core.wrongs,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [word,cljs.core.rand_nth.call(null,cljs.core.second.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,extendword.core.qlist),cljs.core.deref.call(null,extendword.core.position))))], null));
}

cljs.core.swap_BANG_.call(null,extendword.core.position,cljs.core.inc);

return cljs.core.reset_BANG_.call(null,extendword.core.answer,"");
} else {
return null;
}
});
extendword.core.handle_pass = (function extendword$core$handle_pass(){
if(cljs.core.truth_(cljs.core.deref.call(null,extendword.core.is_running))){
cljs.core.swap_BANG_.call(null,extendword.core.passes,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,extendword.core.qlist),cljs.core.deref.call(null,extendword.core.position))),cljs.core.rand_nth.call(null,cljs.core.second.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,extendword.core.qlist),cljs.core.deref.call(null,extendword.core.position))))], null));

cljs.core.swap_BANG_.call(null,extendword.core.position,cljs.core.inc);

cljs.core.swap_BANG_.call(null,extendword.core.seconds,(function (p1__33925_SHARP_){
return (p1__33925_SHARP_ - (1));
}));

return cljs.core.reset_BANG_.call(null,extendword.core.answer,"");
} else {
return null;
}
});
extendword.core.handle_key_down = (function extendword$core$handle_key_down(key){
var G__33926 = key;
switch (G__33926) {
case "Enter":
return extendword.core.handle_enter.call(null);

break;
case "Control":
return extendword.core.handle_pass.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33926)].join('')));

}
});
extendword.core.puzzle_num = (function extendword$core$puzzle_num(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter a puzzle number or just use the random one generated for you: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,extendword.core.puzzle),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,extendword.core.is_running),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__33928_SHARP_){
return cljs.core.reset_BANG_.call(null,extendword.core.puzzle,parseInt(p1__33928_SHARP_.target.value));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-9","button.button-9",-1768381114),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),extendword.core.start_game,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,extendword.core.is_running),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10%",new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null)], null),"Start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-9","button.button-9",-1768381114),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),extendword.core.start_new_random_game,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,extendword.core.is_running),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10%",new cljs.core.Keyword(null,"width","width",-384071477),"40%"], null)], null),"Start random"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-9","button.button-9",-1768381114),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,extendword.core.display,"block");
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"16%"], null)], null),"Help"], null)], null)], null);
});
extendword.core.timer = (function extendword$core$timer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),goog.string.format("%.1f",cljs.core.deref.call(null,extendword.core.seconds))], null);
});
extendword.core.the_word = (function extendword$core$the_word(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"30px",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"width","width",-384071477),"520px",new cljs.core.Keyword(null,"table-layout","table-layout",-1260034150),"fixed"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,extendword.core.qlist),cljs.core.deref.call(null,extendword.core.position)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"160px",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"thebox",new cljs.core.Keyword(null,"size","size",1098693007),"6",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,extendword.core.answer),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__33929_SHARP_){
return cljs.core.reset_BANG_.call(null,extendword.core.answer,p1__33929_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"30px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#F0FFFF",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"160px",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-9","button.button-9",-1768381114),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"80%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
extendword.core.handle_pass.call(null);

return document.getElementById("thebox").focus();
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,cljs.core.deref.call(null,extendword.core.is_running))], null),"Pass"], null)], null)], null)], null)], null);
});
extendword.core.dashboard = (function extendword$core$dashboard(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"100px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"33%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"17px"], null)], null),(function (){var iter__4652__auto__ = (function extendword$core$dashboard_$_iter__33930(s__33931){
return (new cljs.core.LazySeq(null,(function (){
var s__33931__$1 = s__33931;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__33931__$1);
if(temp__5753__auto__){
var s__33931__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33931__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__33931__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__33933 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__33932 = (0);
while(true){
if((i__33932 < size__4651__auto__)){
var x = cljs.core._nth.call(null,c__4650__auto__,i__33932);
cljs.core.chunk_append.call(null,b__33933,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"color","color",1011675173),"#50C878",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," is valid"].join('')], null));

var G__33954 = (i__33932 + (1));
i__33932 = G__33954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33933),extendword$core$dashboard_$_iter__33930.call(null,cljs.core.chunk_rest.call(null,s__33931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33933),null);
}
} else {
var x = cljs.core.first.call(null,s__33931__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"color","color",1011675173),"#50C878",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," is valid"].join('')], null),extendword$core$dashboard_$_iter__33930.call(null,cljs.core.rest.call(null,s__33931__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.deref.call(null,extendword.core.corrects));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"33%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"17px"], null)], null),(function (){var iter__4652__auto__ = (function extendword$core$dashboard_$_iter__33934(s__33935){
return (new cljs.core.LazySeq(null,(function (){
var s__33935__$1 = s__33935;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__33935__$1);
if(temp__5753__auto__){
var s__33935__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33935__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__33935__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__33937 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__33936 = (0);
while(true){
if((i__33936 < size__4651__auto__)){
var vec__33938 = cljs.core._nth.call(null,c__4650__auto__,i__33936);
var p = cljs.core.nth.call(null,vec__33938,(0),null);
var q = cljs.core.nth.call(null,vec__33938,(1),null);
cljs.core.chunk_append.call(null,b__33937,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null),["Passed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),". Possible ans: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('')], null));

var G__33955 = (i__33936 + (1));
i__33936 = G__33955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33937),extendword$core$dashboard_$_iter__33934.call(null,cljs.core.chunk_rest.call(null,s__33935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33937),null);
}
} else {
var vec__33941 = cljs.core.first.call(null,s__33935__$2);
var p = cljs.core.nth.call(null,vec__33941,(0),null);
var q = cljs.core.nth.call(null,vec__33941,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null),["Passed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),". Possible ans: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('')], null),extendword$core$dashboard_$_iter__33934.call(null,cljs.core.rest.call(null,s__33935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.deref.call(null,extendword.core.passes));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"width","width",-384071477),"33%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"17px"], null)], null),(function (){var iter__4652__auto__ = (function extendword$core$dashboard_$_iter__33944(s__33945){
return (new cljs.core.LazySeq(null,(function (){
var s__33945__$1 = s__33945;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__33945__$1);
if(temp__5753__auto__){
var s__33945__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33945__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__33945__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__33947 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__33946 = (0);
while(true){
if((i__33946 < size__4651__auto__)){
var vec__33948 = cljs.core._nth.call(null,c__4650__auto__,i__33946);
var p = cljs.core.nth.call(null,vec__33948,(0),null);
var q = cljs.core.nth.call(null,vec__33948,(1),null);
cljs.core.chunk_append.call(null,b__33947,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)," is not valid. Possible ans: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('')], null));

var G__33956 = (i__33946 + (1));
i__33946 = G__33956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33947),extendword$core$dashboard_$_iter__33944.call(null,cljs.core.chunk_rest.call(null,s__33945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33947),null);
}
} else {
var vec__33951 = cljs.core.first.call(null,s__33945__$2);
var p = cljs.core.nth.call(null,vec__33951,(0),null);
var q = cljs.core.nth.call(null,vec__33951,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)," is not valid. Possible ans: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('')], null),extendword$core$dashboard_$_iter__33944.call(null,cljs.core.rest.call(null,s__33945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.deref.call(null,extendword.core.wrongs));
})()], null)], null)], null);
});
extendword.core.modal = (function extendword$core$modal(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),cljs.core.deref.call(null,extendword.core.display)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close","span.close",-217177185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,extendword.core.display,"none");
})], null),"X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You will be given a word on the left. Extend the word to make another valid word by at least 2 characters."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"After typing your answer, press enter. If you can't think of anything, you can click on 'Pass' or press Ctrl on your keyboard."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You have 30 seconds to extend as many words as possible. Each pass reduces your time by 1 second."], null)], null)], null);
});
extendword.core.result = (function extendword$core$result(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"30px",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620)], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,extendword.core.is_running)))?["Your score is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,extendword.core.corrects)))].join(''):null)], null)], null);
});
extendword.core.repl = (function extendword$core$repl(){
var r = rand_cljc.core.rng.call(null,(123));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rand_cljc.core.rand_int.call(null,r,(20))),"first"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,extendword.words.questions)),extendword.core.allset))], null)], null);
});
extendword.core.home_page = (function extendword$core$home_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extendword.core.modal], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to extend word"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extendword.core.puzzle_num], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extendword.core.timer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extendword.core.the_word], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extendword.core.dashboard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extendword.core.result], null)], null);
});
extendword.core.mount_root = (function extendword$core$mount_root(){
cljs.core.add_watch.call(null,extendword.core.seconds,new cljs.core.Keyword(null,"w","w",354169001),(function (k,r,o,n){
if((n < 0.01)){
return extendword.core.stop_game.call(null);
} else {
return null;
}
}));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extendword.core.home_page], null),document.getElementById("app"));
});
extendword.core.init_BANG_ = (function extendword$core$init_BANG_(){
goog.events.listen(document,"keydown",(function (p1__33957_SHARP_){
return extendword.core.handle_key_down.call(null,p1__33957_SHARP_.key);
}));

return extendword.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1644738084234
