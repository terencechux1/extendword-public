// Compiled by ClojureScript 1.10.896 {:optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4253__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__4253__auto__){
return or__4253__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30810 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__30810 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__30810,"requires");
}
}):(function (path){
var G__30811 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__30811 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__30811);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30812_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30812_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30813 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__30813__$1 = (((G__30813 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__30813,"provides"));
if((G__30813__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__30813__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__30814 = cljs.core.seq.call(null,provides);
var chunk__30815 = null;
var count__30816 = (0);
var i__30817 = (0);
while(true){
if((i__30817 < count__30816)){
var prov = cljs.core._nth.call(null,chunk__30815,i__30817);
var seq__30826_30838 = cljs.core.seq.call(null,requires);
var chunk__30827_30839 = null;
var count__30828_30840 = (0);
var i__30829_30841 = (0);
while(true){
if((i__30829_30841 < count__30828_30840)){
var req_30842 = cljs.core._nth.call(null,chunk__30827_30839,i__30829_30841);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30842,prov);


var G__30843 = seq__30826_30838;
var G__30844 = chunk__30827_30839;
var G__30845 = count__30828_30840;
var G__30846 = (i__30829_30841 + (1));
seq__30826_30838 = G__30843;
chunk__30827_30839 = G__30844;
count__30828_30840 = G__30845;
i__30829_30841 = G__30846;
continue;
} else {
var temp__5753__auto___30847 = cljs.core.seq.call(null,seq__30826_30838);
if(temp__5753__auto___30847){
var seq__30826_30848__$1 = temp__5753__auto___30847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30826_30848__$1)){
var c__4679__auto___30849 = cljs.core.chunk_first.call(null,seq__30826_30848__$1);
var G__30850 = cljs.core.chunk_rest.call(null,seq__30826_30848__$1);
var G__30851 = c__4679__auto___30849;
var G__30852 = cljs.core.count.call(null,c__4679__auto___30849);
var G__30853 = (0);
seq__30826_30838 = G__30850;
chunk__30827_30839 = G__30851;
count__30828_30840 = G__30852;
i__30829_30841 = G__30853;
continue;
} else {
var req_30854 = cljs.core.first.call(null,seq__30826_30848__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30854,prov);


var G__30855 = cljs.core.next.call(null,seq__30826_30848__$1);
var G__30856 = null;
var G__30857 = (0);
var G__30858 = (0);
seq__30826_30838 = G__30855;
chunk__30827_30839 = G__30856;
count__30828_30840 = G__30857;
i__30829_30841 = G__30858;
continue;
}
} else {
}
}
break;
}


var G__30859 = seq__30814;
var G__30860 = chunk__30815;
var G__30861 = count__30816;
var G__30862 = (i__30817 + (1));
seq__30814 = G__30859;
chunk__30815 = G__30860;
count__30816 = G__30861;
i__30817 = G__30862;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__30814);
if(temp__5753__auto__){
var seq__30814__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30814__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__30814__$1);
var G__30863 = cljs.core.chunk_rest.call(null,seq__30814__$1);
var G__30864 = c__4679__auto__;
var G__30865 = cljs.core.count.call(null,c__4679__auto__);
var G__30866 = (0);
seq__30814 = G__30863;
chunk__30815 = G__30864;
count__30816 = G__30865;
i__30817 = G__30866;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30814__$1);
var seq__30830_30867 = cljs.core.seq.call(null,requires);
var chunk__30831_30868 = null;
var count__30832_30869 = (0);
var i__30833_30870 = (0);
while(true){
if((i__30833_30870 < count__30832_30869)){
var req_30871 = cljs.core._nth.call(null,chunk__30831_30868,i__30833_30870);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30871,prov);


var G__30872 = seq__30830_30867;
var G__30873 = chunk__30831_30868;
var G__30874 = count__30832_30869;
var G__30875 = (i__30833_30870 + (1));
seq__30830_30867 = G__30872;
chunk__30831_30868 = G__30873;
count__30832_30869 = G__30874;
i__30833_30870 = G__30875;
continue;
} else {
var temp__5753__auto___30876__$1 = cljs.core.seq.call(null,seq__30830_30867);
if(temp__5753__auto___30876__$1){
var seq__30830_30877__$1 = temp__5753__auto___30876__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30830_30877__$1)){
var c__4679__auto___30878 = cljs.core.chunk_first.call(null,seq__30830_30877__$1);
var G__30879 = cljs.core.chunk_rest.call(null,seq__30830_30877__$1);
var G__30880 = c__4679__auto___30878;
var G__30881 = cljs.core.count.call(null,c__4679__auto___30878);
var G__30882 = (0);
seq__30830_30867 = G__30879;
chunk__30831_30868 = G__30880;
count__30832_30869 = G__30881;
i__30833_30870 = G__30882;
continue;
} else {
var req_30883 = cljs.core.first.call(null,seq__30830_30877__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30883,prov);


var G__30884 = cljs.core.next.call(null,seq__30830_30877__$1);
var G__30885 = null;
var G__30886 = (0);
var G__30887 = (0);
seq__30830_30867 = G__30884;
chunk__30831_30868 = G__30885;
count__30832_30869 = G__30886;
i__30833_30870 = G__30887;
continue;
}
} else {
}
}
break;
}


var G__30888 = cljs.core.next.call(null,seq__30814__$1);
var G__30889 = null;
var G__30890 = (0);
var G__30891 = (0);
seq__30814 = G__30888;
chunk__30815 = G__30889;
count__30816 = G__30890;
i__30817 = G__30891;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__30834 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__30835 = null;
var count__30836 = (0);
var i__30837 = (0);
while(true){
if((i__30837 < count__30836)){
var prov = cljs.core._nth.call(null,chunk__30835,i__30837);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__30834,chunk__30835,count__30836,i__30837,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30834,chunk__30835,count__30836,i__30837,prov,requires))
);


var G__30892 = seq__30834;
var G__30893 = chunk__30835;
var G__30894 = count__30836;
var G__30895 = (i__30837 + (1));
seq__30834 = G__30892;
chunk__30835 = G__30893;
count__30836 = G__30894;
i__30837 = G__30895;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__30834);
if(temp__5753__auto__){
var seq__30834__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30834__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__30834__$1);
var G__30896 = cljs.core.chunk_rest.call(null,seq__30834__$1);
var G__30897 = c__4679__auto__;
var G__30898 = cljs.core.count.call(null,c__4679__auto__);
var G__30899 = (0);
seq__30834 = G__30896;
chunk__30835 = G__30897;
count__30836 = G__30898;
i__30837 = G__30899;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30834__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__30834,chunk__30835,count__30836,i__30837,prov,seq__30834__$1,temp__5753__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30834,chunk__30835,count__30836,i__30837,prov,seq__30834__$1,temp__5753__auto__,requires))
);


var G__30900 = cljs.core.next.call(null,seq__30834__$1);
var G__30901 = null;
var G__30902 = (0);
var G__30903 = (0);
seq__30834 = G__30900;
chunk__30835 = G__30901;
count__30836 = G__30902;
i__30837 = G__30903;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30904){
var vec__30905 = p__30904;
var _ = cljs.core.nth.call(null,vec__30905,(0),null);
var v = cljs.core.nth.call(null,vec__30905,(1),null);
var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
return v.call(null,dep);
} else {
return and__4251__auto__;
}
}),cljs.core.filter.call(null,(function (p__30908){
var vec__30909 = p__30908;
var k = cljs.core.nth.call(null,vec__30909,(0),null);
var v = cljs.core.nth.call(null,vec__30909,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30921_30929 = cljs.core.seq.call(null,deps);
var chunk__30922_30930 = null;
var count__30923_30931 = (0);
var i__30924_30932 = (0);
while(true){
if((i__30924_30932 < count__30923_30931)){
var dep_30933 = cljs.core._nth.call(null,chunk__30922_30930,i__30924_30932);
if(cljs.core.truth_((function (){var and__4251__auto__ = dep_30933;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30933));
} else {
return and__4251__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30933,(depth + (1)),state);
} else {
}


var G__30934 = seq__30921_30929;
var G__30935 = chunk__30922_30930;
var G__30936 = count__30923_30931;
var G__30937 = (i__30924_30932 + (1));
seq__30921_30929 = G__30934;
chunk__30922_30930 = G__30935;
count__30923_30931 = G__30936;
i__30924_30932 = G__30937;
continue;
} else {
var temp__5753__auto___30938 = cljs.core.seq.call(null,seq__30921_30929);
if(temp__5753__auto___30938){
var seq__30921_30939__$1 = temp__5753__auto___30938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30921_30939__$1)){
var c__4679__auto___30940 = cljs.core.chunk_first.call(null,seq__30921_30939__$1);
var G__30941 = cljs.core.chunk_rest.call(null,seq__30921_30939__$1);
var G__30942 = c__4679__auto___30940;
var G__30943 = cljs.core.count.call(null,c__4679__auto___30940);
var G__30944 = (0);
seq__30921_30929 = G__30941;
chunk__30922_30930 = G__30942;
count__30923_30931 = G__30943;
i__30924_30932 = G__30944;
continue;
} else {
var dep_30945 = cljs.core.first.call(null,seq__30921_30939__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = dep_30945;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30945));
} else {
return and__4251__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30945,(depth + (1)),state);
} else {
}


var G__30946 = cljs.core.next.call(null,seq__30921_30939__$1);
var G__30947 = null;
var G__30948 = (0);
var G__30949 = (0);
seq__30921_30929 = G__30946;
chunk__30922_30930 = G__30947;
count__30923_30931 = G__30948;
i__30924_30932 = G__30949;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30925){
var vec__30926 = p__30925;
var seq__30927 = cljs.core.seq.call(null,vec__30926);
var first__30928 = cljs.core.first.call(null,seq__30927);
var seq__30927__$1 = cljs.core.next.call(null,seq__30927);
var x = first__30928;
var xs = seq__30927__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__30912_SHARP_){
return clojure.set.difference.call(null,p1__30912_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__30950_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__30950_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30951 = cljs.core.seq.call(null,provides);
var chunk__30952 = null;
var count__30953 = (0);
var i__30954 = (0);
while(true){
if((i__30954 < count__30953)){
var prov = cljs.core._nth.call(null,chunk__30952,i__30954);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30963_30971 = cljs.core.seq.call(null,requires);
var chunk__30964_30972 = null;
var count__30965_30973 = (0);
var i__30966_30974 = (0);
while(true){
if((i__30966_30974 < count__30965_30973)){
var req_30975 = cljs.core._nth.call(null,chunk__30964_30972,i__30966_30974);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30975,prov);


var G__30976 = seq__30963_30971;
var G__30977 = chunk__30964_30972;
var G__30978 = count__30965_30973;
var G__30979 = (i__30966_30974 + (1));
seq__30963_30971 = G__30976;
chunk__30964_30972 = G__30977;
count__30965_30973 = G__30978;
i__30966_30974 = G__30979;
continue;
} else {
var temp__5753__auto___30980 = cljs.core.seq.call(null,seq__30963_30971);
if(temp__5753__auto___30980){
var seq__30963_30981__$1 = temp__5753__auto___30980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30963_30981__$1)){
var c__4679__auto___30982 = cljs.core.chunk_first.call(null,seq__30963_30981__$1);
var G__30983 = cljs.core.chunk_rest.call(null,seq__30963_30981__$1);
var G__30984 = c__4679__auto___30982;
var G__30985 = cljs.core.count.call(null,c__4679__auto___30982);
var G__30986 = (0);
seq__30963_30971 = G__30983;
chunk__30964_30972 = G__30984;
count__30965_30973 = G__30985;
i__30966_30974 = G__30986;
continue;
} else {
var req_30987 = cljs.core.first.call(null,seq__30963_30981__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30987,prov);


var G__30988 = cljs.core.next.call(null,seq__30963_30981__$1);
var G__30989 = null;
var G__30990 = (0);
var G__30991 = (0);
seq__30963_30971 = G__30988;
chunk__30964_30972 = G__30989;
count__30965_30973 = G__30990;
i__30966_30974 = G__30991;
continue;
}
} else {
}
}
break;
}


var G__30992 = seq__30951;
var G__30993 = chunk__30952;
var G__30994 = count__30953;
var G__30995 = (i__30954 + (1));
seq__30951 = G__30992;
chunk__30952 = G__30993;
count__30953 = G__30994;
i__30954 = G__30995;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__30951);
if(temp__5753__auto__){
var seq__30951__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30951__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__30951__$1);
var G__30996 = cljs.core.chunk_rest.call(null,seq__30951__$1);
var G__30997 = c__4679__auto__;
var G__30998 = cljs.core.count.call(null,c__4679__auto__);
var G__30999 = (0);
seq__30951 = G__30996;
chunk__30952 = G__30997;
count__30953 = G__30998;
i__30954 = G__30999;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30951__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30967_31000 = cljs.core.seq.call(null,requires);
var chunk__30968_31001 = null;
var count__30969_31002 = (0);
var i__30970_31003 = (0);
while(true){
if((i__30970_31003 < count__30969_31002)){
var req_31004 = cljs.core._nth.call(null,chunk__30968_31001,i__30970_31003);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31004,prov);


var G__31005 = seq__30967_31000;
var G__31006 = chunk__30968_31001;
var G__31007 = count__30969_31002;
var G__31008 = (i__30970_31003 + (1));
seq__30967_31000 = G__31005;
chunk__30968_31001 = G__31006;
count__30969_31002 = G__31007;
i__30970_31003 = G__31008;
continue;
} else {
var temp__5753__auto___31009__$1 = cljs.core.seq.call(null,seq__30967_31000);
if(temp__5753__auto___31009__$1){
var seq__30967_31010__$1 = temp__5753__auto___31009__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30967_31010__$1)){
var c__4679__auto___31011 = cljs.core.chunk_first.call(null,seq__30967_31010__$1);
var G__31012 = cljs.core.chunk_rest.call(null,seq__30967_31010__$1);
var G__31013 = c__4679__auto___31011;
var G__31014 = cljs.core.count.call(null,c__4679__auto___31011);
var G__31015 = (0);
seq__30967_31000 = G__31012;
chunk__30968_31001 = G__31013;
count__30969_31002 = G__31014;
i__30970_31003 = G__31015;
continue;
} else {
var req_31016 = cljs.core.first.call(null,seq__30967_31010__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31016,prov);


var G__31017 = cljs.core.next.call(null,seq__30967_31010__$1);
var G__31018 = null;
var G__31019 = (0);
var G__31020 = (0);
seq__30967_31000 = G__31017;
chunk__30968_31001 = G__31018;
count__30969_31002 = G__31019;
i__30970_31003 = G__31020;
continue;
}
} else {
}
}
break;
}


var G__31021 = cljs.core.next.call(null,seq__30951__$1);
var G__31022 = null;
var G__31023 = (0);
var G__31024 = (0);
seq__30951 = G__31021;
chunk__30952 = G__31022;
count__30953 = G__31023;
i__30954 = G__31024;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31025_31029 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31026_31030 = null;
var count__31027_31031 = (0);
var i__31028_31032 = (0);
while(true){
if((i__31028_31032 < count__31027_31031)){
var ns_31033 = cljs.core._nth.call(null,chunk__31026_31030,i__31028_31032);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31033);


var G__31034 = seq__31025_31029;
var G__31035 = chunk__31026_31030;
var G__31036 = count__31027_31031;
var G__31037 = (i__31028_31032 + (1));
seq__31025_31029 = G__31034;
chunk__31026_31030 = G__31035;
count__31027_31031 = G__31036;
i__31028_31032 = G__31037;
continue;
} else {
var temp__5753__auto___31038 = cljs.core.seq.call(null,seq__31025_31029);
if(temp__5753__auto___31038){
var seq__31025_31039__$1 = temp__5753__auto___31038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31025_31039__$1)){
var c__4679__auto___31040 = cljs.core.chunk_first.call(null,seq__31025_31039__$1);
var G__31041 = cljs.core.chunk_rest.call(null,seq__31025_31039__$1);
var G__31042 = c__4679__auto___31040;
var G__31043 = cljs.core.count.call(null,c__4679__auto___31040);
var G__31044 = (0);
seq__31025_31029 = G__31041;
chunk__31026_31030 = G__31042;
count__31027_31031 = G__31043;
i__31028_31032 = G__31044;
continue;
} else {
var ns_31045 = cljs.core.first.call(null,seq__31025_31039__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31045);


var G__31046 = cljs.core.next.call(null,seq__31025_31039__$1);
var G__31047 = null;
var G__31048 = (0);
var G__31049 = (0);
seq__31025_31029 = G__31046;
chunk__31026_31030 = G__31047;
count__31027_31031 = G__31048;
i__31028_31032 = G__31049;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4253__auto__ = goog.require__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__31050__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31051__i = 0, G__31051__a = new Array(arguments.length -  0);
while (G__31051__i < G__31051__a.length) {G__31051__a[G__31051__i] = arguments[G__31051__i + 0]; ++G__31051__i;}
  args = new cljs.core.IndexedSeq(G__31051__a,0,null);
} 
return G__31050__delegate.call(this,args);};
G__31050.cljs$lang$maxFixedArity = 0;
G__31050.cljs$lang$applyTo = (function (arglist__31052){
var args = cljs.core.seq(arglist__31052);
return G__31050__delegate(args);
});
G__31050.cljs$core$IFn$_invoke$arity$variadic = G__31050__delegate;
return G__31050;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31053_SHARP_,p2__31054_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31053_SHARP_)),p2__31054_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31055_SHARP_,p2__31056_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31055_SHARP_),p2__31056_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31057 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31057.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__31057.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__31057;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31058){if((e31058 instanceof Error)){
var e = e31058;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31058;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31059){if((e31059 instanceof Error)){
var e = e31059;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31059;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31060 = cljs.core._EQ_;
var expr__31061 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31060.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31061))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31060.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31061))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31060.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31061))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31063,callback){
var map__31064 = p__31063;
var map__31064__$1 = cljs.core.__destructure_map.call(null,map__31064);
var file_msg = map__31064__$1;
var request_url = cljs.core.get.call(null,map__31064__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4253__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_31101){
var state_val_31102 = (state_31101[(1)]);
if((state_val_31102 === (7))){
var inst_31097 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31103_31129 = state_31101__$1;
(statearr_31103_31129[(2)] = inst_31097);

(statearr_31103_31129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (1))){
var state_31101__$1 = state_31101;
var statearr_31104_31130 = state_31101__$1;
(statearr_31104_31130[(2)] = null);

(statearr_31104_31130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (4))){
var inst_31067 = (state_31101[(7)]);
var inst_31067__$1 = (state_31101[(2)]);
var state_31101__$1 = (function (){var statearr_31105 = state_31101;
(statearr_31105[(7)] = inst_31067__$1);

return statearr_31105;
})();
if(cljs.core.truth_(inst_31067__$1)){
var statearr_31106_31131 = state_31101__$1;
(statearr_31106_31131[(1)] = (5));

} else {
var statearr_31107_31132 = state_31101__$1;
(statearr_31107_31132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (15))){
var inst_31082 = (state_31101[(8)]);
var inst_31080 = (state_31101[(9)]);
var inst_31084 = inst_31082.call(null,inst_31080);
var state_31101__$1 = state_31101;
var statearr_31108_31133 = state_31101__$1;
(statearr_31108_31133[(2)] = inst_31084);

(statearr_31108_31133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (13))){
var inst_31091 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31109_31134 = state_31101__$1;
(statearr_31109_31134[(2)] = inst_31091);

(statearr_31109_31134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (6))){
var state_31101__$1 = state_31101;
var statearr_31110_31135 = state_31101__$1;
(statearr_31110_31135[(2)] = null);

(statearr_31110_31135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (17))){
var inst_31088 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31111_31136 = state_31101__$1;
(statearr_31111_31136[(2)] = inst_31088);

(statearr_31111_31136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (3))){
var inst_31099 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31101__$1,inst_31099);
} else {
if((state_val_31102 === (12))){
var state_31101__$1 = state_31101;
var statearr_31112_31137 = state_31101__$1;
(statearr_31112_31137[(2)] = null);

(statearr_31112_31137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (2))){
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31101__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31102 === (11))){
var inst_31072 = (state_31101[(10)]);
var inst_31078 = figwheel.client.file_reloading.blocking_load.call(null,inst_31072);
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31101__$1,(14),inst_31078);
} else {
if((state_val_31102 === (9))){
var inst_31072 = (state_31101[(10)]);
var state_31101__$1 = state_31101;
if(cljs.core.truth_(inst_31072)){
var statearr_31113_31138 = state_31101__$1;
(statearr_31113_31138[(1)] = (11));

} else {
var statearr_31114_31139 = state_31101__$1;
(statearr_31114_31139[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (5))){
var inst_31067 = (state_31101[(7)]);
var inst_31073 = (state_31101[(11)]);
var inst_31072 = cljs.core.nth.call(null,inst_31067,(0),null);
var inst_31073__$1 = cljs.core.nth.call(null,inst_31067,(1),null);
var state_31101__$1 = (function (){var statearr_31115 = state_31101;
(statearr_31115[(10)] = inst_31072);

(statearr_31115[(11)] = inst_31073__$1);

return statearr_31115;
})();
if(cljs.core.truth_(inst_31073__$1)){
var statearr_31116_31140 = state_31101__$1;
(statearr_31116_31140[(1)] = (8));

} else {
var statearr_31117_31141 = state_31101__$1;
(statearr_31117_31141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (14))){
var inst_31072 = (state_31101[(10)]);
var inst_31082 = (state_31101[(8)]);
var inst_31080 = (state_31101[(2)]);
var inst_31081 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31082__$1 = cljs.core.get.call(null,inst_31081,inst_31072);
var state_31101__$1 = (function (){var statearr_31118 = state_31101;
(statearr_31118[(8)] = inst_31082__$1);

(statearr_31118[(9)] = inst_31080);

return statearr_31118;
})();
if(cljs.core.truth_(inst_31082__$1)){
var statearr_31119_31142 = state_31101__$1;
(statearr_31119_31142[(1)] = (15));

} else {
var statearr_31120_31143 = state_31101__$1;
(statearr_31120_31143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (16))){
var inst_31080 = (state_31101[(9)]);
var inst_31086 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31080);
var state_31101__$1 = state_31101;
var statearr_31121_31144 = state_31101__$1;
(statearr_31121_31144[(2)] = inst_31086);

(statearr_31121_31144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (10))){
var inst_31093 = (state_31101[(2)]);
var state_31101__$1 = (function (){var statearr_31122 = state_31101;
(statearr_31122[(12)] = inst_31093);

return statearr_31122;
})();
var statearr_31123_31145 = state_31101__$1;
(statearr_31123_31145[(2)] = null);

(statearr_31123_31145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (8))){
var inst_31073 = (state_31101[(11)]);
var inst_31075 = eval(inst_31073);
var state_31101__$1 = state_31101;
var statearr_31124_31146 = state_31101__$1;
(statearr_31124_31146[(2)] = inst_31075);

(statearr_31124_31146[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__28647__auto__ = null;
var figwheel$client$file_reloading$state_machine__28647__auto____0 = (function (){
var statearr_31125 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31125[(0)] = figwheel$client$file_reloading$state_machine__28647__auto__);

(statearr_31125[(1)] = (1));

return statearr_31125;
});
var figwheel$client$file_reloading$state_machine__28647__auto____1 = (function (state_31101){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31126){if((e31126 instanceof Object)){
var ex__28650__auto__ = e31126;
var statearr_31127_31147 = state_31101;
(statearr_31127_31147[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31148 = state_31101;
state_31101 = G__31148;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28647__auto__ = function(state_31101){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28647__auto____1.call(this,state_31101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28647__auto____0;
figwheel$client$file_reloading$state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28647__auto____1;
return figwheel$client$file_reloading$state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_31128 = f__28744__auto__.call(null);
(statearr_31128[(6)] = c__28743__auto__);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31150 = arguments.length;
switch (G__31150) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31152,callback){
var map__31153 = p__31152;
var map__31153__$1 = cljs.core.__destructure_map.call(null,map__31153);
var file_msg = map__31153__$1;
var namespace = cljs.core.get.call(null,map__31153__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31154){
var map__31155 = p__31154;
var map__31155__$1 = cljs.core.__destructure_map.call(null,map__31155);
var file_msg = map__31155__$1;
var namespace = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31156){
var map__31157 = p__31156;
var map__31157__$1 = cljs.core.__destructure_map.call(null,map__31157);
var file_msg = map__31157__$1;
var namespace = cljs.core.get.call(null,map__31157__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4251__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4251__auto__){
var or__4253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4251__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31158,callback){
var map__31159 = p__31158;
var map__31159__$1 = cljs.core.__destructure_map.call(null,map__31159);
var file_msg = map__31159__$1;
var request_url = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28743__auto___31208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_31193){
var state_val_31194 = (state_31193[(1)]);
if((state_val_31194 === (1))){
var inst_31167 = cljs.core.seq.call(null,files);
var inst_31168 = cljs.core.first.call(null,inst_31167);
var inst_31169 = cljs.core.next.call(null,inst_31167);
var inst_31170 = files;
var state_31193__$1 = (function (){var statearr_31195 = state_31193;
(statearr_31195[(7)] = inst_31169);

(statearr_31195[(8)] = inst_31168);

(statearr_31195[(9)] = inst_31170);

return statearr_31195;
})();
var statearr_31196_31209 = state_31193__$1;
(statearr_31196_31209[(2)] = null);

(statearr_31196_31209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (2))){
var inst_31176 = (state_31193[(10)]);
var inst_31170 = (state_31193[(9)]);
var inst_31175 = cljs.core.seq.call(null,inst_31170);
var inst_31176__$1 = cljs.core.first.call(null,inst_31175);
var inst_31177 = cljs.core.next.call(null,inst_31175);
var inst_31178 = (inst_31176__$1 == null);
var inst_31179 = cljs.core.not.call(null,inst_31178);
var state_31193__$1 = (function (){var statearr_31197 = state_31193;
(statearr_31197[(11)] = inst_31177);

(statearr_31197[(10)] = inst_31176__$1);

return statearr_31197;
})();
if(inst_31179){
var statearr_31198_31210 = state_31193__$1;
(statearr_31198_31210[(1)] = (4));

} else {
var statearr_31199_31211 = state_31193__$1;
(statearr_31199_31211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (3))){
var inst_31191 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31193__$1,inst_31191);
} else {
if((state_val_31194 === (4))){
var inst_31176 = (state_31193[(10)]);
var inst_31181 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31176);
var state_31193__$1 = state_31193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31193__$1,(7),inst_31181);
} else {
if((state_val_31194 === (5))){
var inst_31187 = cljs.core.async.close_BANG_.call(null,out);
var state_31193__$1 = state_31193;
var statearr_31200_31212 = state_31193__$1;
(statearr_31200_31212[(2)] = inst_31187);

(statearr_31200_31212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (6))){
var inst_31189 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31201_31213 = state_31193__$1;
(statearr_31201_31213[(2)] = inst_31189);

(statearr_31201_31213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (7))){
var inst_31177 = (state_31193[(11)]);
var inst_31183 = (state_31193[(2)]);
var inst_31184 = cljs.core.async.put_BANG_.call(null,out,inst_31183);
var inst_31170 = inst_31177;
var state_31193__$1 = (function (){var statearr_31202 = state_31193;
(statearr_31202[(12)] = inst_31184);

(statearr_31202[(9)] = inst_31170);

return statearr_31202;
})();
var statearr_31203_31214 = state_31193__$1;
(statearr_31203_31214[(2)] = null);

(statearr_31203_31214[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____0 = (function (){
var statearr_31204 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31204[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__);

(statearr_31204[(1)] = (1));

return statearr_31204;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____1 = (function (state_31193){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31205){if((e31205 instanceof Object)){
var ex__28650__auto__ = e31205;
var statearr_31206_31215 = state_31193;
(statearr_31206_31215[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31216 = state_31193;
state_31193 = G__31216;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__ = function(state_31193){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____1.call(this,state_31193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_31207 = f__28744__auto__.call(null);
(statearr_31207[(6)] = c__28743__auto___31208);

return statearr_31207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31217,opts){
var map__31218 = p__31217;
var map__31218__$1 = cljs.core.__destructure_map.call(null,map__31218);
var eval_body = cljs.core.get.call(null,map__31218__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4251__auto__ = eval_body;
if(cljs.core.truth_(and__4251__auto__)){
return typeof eval_body === 'string';
} else {
return and__4251__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31219){var e = e31219;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31220_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31220_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5751__auto__)){
var file_msg = temp__5751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31221){
var vec__31222 = p__31221;
var k = cljs.core.nth.call(null,vec__31222,(0),null);
var v = cljs.core.nth.call(null,vec__31222,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31225){
var vec__31226 = p__31225;
var k = cljs.core.nth.call(null,vec__31226,(0),null);
var v = cljs.core.nth.call(null,vec__31226,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31232,p__31233){
var map__31234 = p__31232;
var map__31234__$1 = cljs.core.__destructure_map.call(null,map__31234);
var opts = map__31234__$1;
var before_jsload = cljs.core.get.call(null,map__31234__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31234__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31234__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31235 = p__31233;
var map__31235__$1 = cljs.core.__destructure_map.call(null,map__31235);
var msg = map__31235__$1;
var files = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28744__auto__ = (function (){var switch__28646__auto__ = (function (state_31367){
var state_val_31368 = (state_31367[(1)]);
if((state_val_31368 === (7))){
var inst_31247 = (state_31367[(7)]);
var inst_31249 = (state_31367[(8)]);
var inst_31248 = (state_31367[(9)]);
var inst_31250 = (state_31367[(10)]);
var inst_31255 = cljs.core._nth.call(null,inst_31248,inst_31250);
var inst_31256 = figwheel.client.file_reloading.eval_body.call(null,inst_31255,opts);
var inst_31257 = (inst_31250 + (1));
var tmp31369 = inst_31247;
var tmp31370 = inst_31249;
var tmp31371 = inst_31248;
var inst_31247__$1 = tmp31369;
var inst_31248__$1 = tmp31371;
var inst_31249__$1 = tmp31370;
var inst_31250__$1 = inst_31257;
var state_31367__$1 = (function (){var statearr_31372 = state_31367;
(statearr_31372[(7)] = inst_31247__$1);

(statearr_31372[(8)] = inst_31249__$1);

(statearr_31372[(11)] = inst_31256);

(statearr_31372[(9)] = inst_31248__$1);

(statearr_31372[(10)] = inst_31250__$1);

return statearr_31372;
})();
var statearr_31373_31440 = state_31367__$1;
(statearr_31373_31440[(2)] = null);

(statearr_31373_31440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (20))){
var inst_31290 = (state_31367[(12)]);
var inst_31298 = figwheel.client.file_reloading.sort_files.call(null,inst_31290);
var state_31367__$1 = state_31367;
var statearr_31374_31441 = state_31367__$1;
(statearr_31374_31441[(2)] = inst_31298);

(statearr_31374_31441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (27))){
var state_31367__$1 = state_31367;
var statearr_31375_31442 = state_31367__$1;
(statearr_31375_31442[(2)] = null);

(statearr_31375_31442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (1))){
var inst_31239 = (state_31367[(13)]);
var inst_31236 = before_jsload.call(null,files);
var inst_31237 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31238 = (function (){return (function (p1__31229_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31229_SHARP_);
});
})();
var inst_31239__$1 = cljs.core.filter.call(null,inst_31238,files);
var inst_31240 = cljs.core.not_empty.call(null,inst_31239__$1);
var state_31367__$1 = (function (){var statearr_31376 = state_31367;
(statearr_31376[(14)] = inst_31236);

(statearr_31376[(15)] = inst_31237);

(statearr_31376[(13)] = inst_31239__$1);

return statearr_31376;
})();
if(cljs.core.truth_(inst_31240)){
var statearr_31377_31443 = state_31367__$1;
(statearr_31377_31443[(1)] = (2));

} else {
var statearr_31378_31444 = state_31367__$1;
(statearr_31378_31444[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (24))){
var state_31367__$1 = state_31367;
var statearr_31379_31445 = state_31367__$1;
(statearr_31379_31445[(2)] = null);

(statearr_31379_31445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (4))){
var inst_31284 = (state_31367[(2)]);
var inst_31285 = cljs.core.List.EMPTY;
var inst_31286 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31285);
var inst_31287 = (function (){return (function (p1__31230_SHARP_){
var and__4251__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31230_SHARP_);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31230_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31230_SHARP_))));
} else {
return and__4251__auto__;
}
});
})();
var inst_31288 = cljs.core.filter.call(null,inst_31287,files);
var inst_31289 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31290 = cljs.core.concat.call(null,inst_31288,inst_31289);
var state_31367__$1 = (function (){var statearr_31380 = state_31367;
(statearr_31380[(16)] = inst_31286);

(statearr_31380[(17)] = inst_31284);

(statearr_31380[(12)] = inst_31290);

return statearr_31380;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31381_31446 = state_31367__$1;
(statearr_31381_31446[(1)] = (16));

} else {
var statearr_31382_31447 = state_31367__$1;
(statearr_31382_31447[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (15))){
var inst_31274 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31383_31448 = state_31367__$1;
(statearr_31383_31448[(2)] = inst_31274);

(statearr_31383_31448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (21))){
var inst_31300 = (state_31367[(18)]);
var inst_31300__$1 = (state_31367[(2)]);
var inst_31301 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31300__$1);
var state_31367__$1 = (function (){var statearr_31384 = state_31367;
(statearr_31384[(18)] = inst_31300__$1);

return statearr_31384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31367__$1,(22),inst_31301);
} else {
if((state_val_31368 === (31))){
var inst_31365 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31367__$1,inst_31365);
} else {
if((state_val_31368 === (32))){
var inst_31342 = (state_31367[(19)]);
var inst_31346 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31347 = cljs.core.map.call(null,inst_31346,inst_31342);
var inst_31348 = cljs.core.pr_str.call(null,inst_31347);
var inst_31349 = ["figwheel-no-load meta-data: ",inst_31348].join('');
var inst_31350 = figwheel.client.utils.log.call(null,inst_31349);
var state_31367__$1 = state_31367;
var statearr_31385_31449 = state_31367__$1;
(statearr_31385_31449[(2)] = inst_31350);

(statearr_31385_31449[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (33))){
var state_31367__$1 = state_31367;
var statearr_31386_31450 = state_31367__$1;
(statearr_31386_31450[(2)] = null);

(statearr_31386_31450[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (13))){
var inst_31260 = (state_31367[(20)]);
var inst_31264 = cljs.core.chunk_first.call(null,inst_31260);
var inst_31265 = cljs.core.chunk_rest.call(null,inst_31260);
var inst_31266 = cljs.core.count.call(null,inst_31264);
var inst_31247 = inst_31265;
var inst_31248 = inst_31264;
var inst_31249 = inst_31266;
var inst_31250 = (0);
var state_31367__$1 = (function (){var statearr_31387 = state_31367;
(statearr_31387[(7)] = inst_31247);

(statearr_31387[(8)] = inst_31249);

(statearr_31387[(9)] = inst_31248);

(statearr_31387[(10)] = inst_31250);

return statearr_31387;
})();
var statearr_31388_31451 = state_31367__$1;
(statearr_31388_31451[(2)] = null);

(statearr_31388_31451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (22))){
var inst_31308 = (state_31367[(21)]);
var inst_31303 = (state_31367[(22)]);
var inst_31300 = (state_31367[(18)]);
var inst_31304 = (state_31367[(23)]);
var inst_31303__$1 = (state_31367[(2)]);
var inst_31304__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31303__$1);
var inst_31305 = (function (){var all_files = inst_31300;
var res_SINGLEQUOTE_ = inst_31303__$1;
var res = inst_31304__$1;
return (function (p1__31231_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31231_SHARP_));
});
})();
var inst_31306 = cljs.core.filter.call(null,inst_31305,inst_31303__$1);
var inst_31307 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31308__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31307);
var inst_31309 = cljs.core.not_empty.call(null,inst_31308__$1);
var state_31367__$1 = (function (){var statearr_31389 = state_31367;
(statearr_31389[(21)] = inst_31308__$1);

(statearr_31389[(24)] = inst_31306);

(statearr_31389[(22)] = inst_31303__$1);

(statearr_31389[(23)] = inst_31304__$1);

return statearr_31389;
})();
if(cljs.core.truth_(inst_31309)){
var statearr_31390_31452 = state_31367__$1;
(statearr_31390_31452[(1)] = (23));

} else {
var statearr_31391_31453 = state_31367__$1;
(statearr_31391_31453[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (36))){
var state_31367__$1 = state_31367;
var statearr_31392_31454 = state_31367__$1;
(statearr_31392_31454[(2)] = null);

(statearr_31392_31454[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (29))){
var inst_31308 = (state_31367[(21)]);
var inst_31306 = (state_31367[(24)]);
var inst_31303 = (state_31367[(22)]);
var inst_31342 = (state_31367[(19)]);
var inst_31300 = (state_31367[(18)]);
var inst_31304 = (state_31367[(23)]);
var inst_31336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31339 = (function (){var all_files = inst_31300;
var res_SINGLEQUOTE_ = inst_31303;
var res = inst_31304;
var files_not_loaded = inst_31306;
var dependencies_that_loaded = inst_31308;
return (function (p__31338){
var map__31393 = p__31338;
var map__31393__$1 = cljs.core.__destructure_map.call(null,map__31393);
var namespace = cljs.core.get.call(null,map__31393__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_31340 = cljs.core.group_by.call(null,inst_31339,inst_31306);
var inst_31341 = cljs.core.__destructure_map.call(null,inst_31340);
var inst_31342__$1 = cljs.core.get.call(null,inst_31341,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31343 = cljs.core.get.call(null,inst_31341,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31344 = cljs.core.not_empty.call(null,inst_31342__$1);
var state_31367__$1 = (function (){var statearr_31394 = state_31367;
(statearr_31394[(19)] = inst_31342__$1);

(statearr_31394[(25)] = inst_31343);

(statearr_31394[(26)] = inst_31336);

return statearr_31394;
})();
if(cljs.core.truth_(inst_31344)){
var statearr_31395_31455 = state_31367__$1;
(statearr_31395_31455[(1)] = (32));

} else {
var statearr_31396_31456 = state_31367__$1;
(statearr_31396_31456[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (6))){
var inst_31281 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31397_31457 = state_31367__$1;
(statearr_31397_31457[(2)] = inst_31281);

(statearr_31397_31457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (28))){
var inst_31306 = (state_31367[(24)]);
var inst_31333 = (state_31367[(2)]);
var inst_31334 = cljs.core.not_empty.call(null,inst_31306);
var state_31367__$1 = (function (){var statearr_31398 = state_31367;
(statearr_31398[(27)] = inst_31333);

return statearr_31398;
})();
if(cljs.core.truth_(inst_31334)){
var statearr_31399_31458 = state_31367__$1;
(statearr_31399_31458[(1)] = (29));

} else {
var statearr_31400_31459 = state_31367__$1;
(statearr_31400_31459[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (25))){
var inst_31304 = (state_31367[(23)]);
var inst_31320 = (state_31367[(2)]);
var inst_31321 = cljs.core.not_empty.call(null,inst_31304);
var state_31367__$1 = (function (){var statearr_31401 = state_31367;
(statearr_31401[(28)] = inst_31320);

return statearr_31401;
})();
if(cljs.core.truth_(inst_31321)){
var statearr_31402_31460 = state_31367__$1;
(statearr_31402_31460[(1)] = (26));

} else {
var statearr_31403_31461 = state_31367__$1;
(statearr_31403_31461[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (34))){
var inst_31343 = (state_31367[(25)]);
var inst_31353 = (state_31367[(2)]);
var inst_31354 = cljs.core.not_empty.call(null,inst_31343);
var state_31367__$1 = (function (){var statearr_31404 = state_31367;
(statearr_31404[(29)] = inst_31353);

return statearr_31404;
})();
if(cljs.core.truth_(inst_31354)){
var statearr_31405_31462 = state_31367__$1;
(statearr_31405_31462[(1)] = (35));

} else {
var statearr_31406_31463 = state_31367__$1;
(statearr_31406_31463[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (17))){
var state_31367__$1 = state_31367;
var statearr_31407_31464 = state_31367__$1;
(statearr_31407_31464[(2)] = recompile_dependents);

(statearr_31407_31464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (3))){
var state_31367__$1 = state_31367;
var statearr_31408_31465 = state_31367__$1;
(statearr_31408_31465[(2)] = null);

(statearr_31408_31465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (12))){
var inst_31277 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31409_31466 = state_31367__$1;
(statearr_31409_31466[(2)] = inst_31277);

(statearr_31409_31466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (2))){
var inst_31239 = (state_31367[(13)]);
var inst_31246 = cljs.core.seq.call(null,inst_31239);
var inst_31247 = inst_31246;
var inst_31248 = null;
var inst_31249 = (0);
var inst_31250 = (0);
var state_31367__$1 = (function (){var statearr_31410 = state_31367;
(statearr_31410[(7)] = inst_31247);

(statearr_31410[(8)] = inst_31249);

(statearr_31410[(9)] = inst_31248);

(statearr_31410[(10)] = inst_31250);

return statearr_31410;
})();
var statearr_31411_31467 = state_31367__$1;
(statearr_31411_31467[(2)] = null);

(statearr_31411_31467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (23))){
var inst_31308 = (state_31367[(21)]);
var inst_31306 = (state_31367[(24)]);
var inst_31303 = (state_31367[(22)]);
var inst_31300 = (state_31367[(18)]);
var inst_31304 = (state_31367[(23)]);
var inst_31311 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31313 = (function (){var all_files = inst_31300;
var res_SINGLEQUOTE_ = inst_31303;
var res = inst_31304;
var files_not_loaded = inst_31306;
var dependencies_that_loaded = inst_31308;
return (function (p__31312){
var map__31412 = p__31312;
var map__31412__$1 = cljs.core.__destructure_map.call(null,map__31412);
var request_url = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_31314 = cljs.core.reverse.call(null,inst_31308);
var inst_31315 = cljs.core.map.call(null,inst_31313,inst_31314);
var inst_31316 = cljs.core.pr_str.call(null,inst_31315);
var inst_31317 = figwheel.client.utils.log.call(null,inst_31316);
var state_31367__$1 = (function (){var statearr_31413 = state_31367;
(statearr_31413[(30)] = inst_31311);

return statearr_31413;
})();
var statearr_31414_31468 = state_31367__$1;
(statearr_31414_31468[(2)] = inst_31317);

(statearr_31414_31468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (35))){
var inst_31343 = (state_31367[(25)]);
var inst_31356 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31343);
var inst_31357 = cljs.core.pr_str.call(null,inst_31356);
var inst_31358 = ["not required: ",inst_31357].join('');
var inst_31359 = figwheel.client.utils.log.call(null,inst_31358);
var state_31367__$1 = state_31367;
var statearr_31415_31469 = state_31367__$1;
(statearr_31415_31469[(2)] = inst_31359);

(statearr_31415_31469[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (19))){
var inst_31290 = (state_31367[(12)]);
var inst_31296 = figwheel.client.file_reloading.expand_files.call(null,inst_31290);
var state_31367__$1 = state_31367;
var statearr_31416_31470 = state_31367__$1;
(statearr_31416_31470[(2)] = inst_31296);

(statearr_31416_31470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (11))){
var state_31367__$1 = state_31367;
var statearr_31417_31471 = state_31367__$1;
(statearr_31417_31471[(2)] = null);

(statearr_31417_31471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (9))){
var inst_31279 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31418_31472 = state_31367__$1;
(statearr_31418_31472[(2)] = inst_31279);

(statearr_31418_31472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (5))){
var inst_31249 = (state_31367[(8)]);
var inst_31250 = (state_31367[(10)]);
var inst_31252 = (inst_31250 < inst_31249);
var inst_31253 = inst_31252;
var state_31367__$1 = state_31367;
if(cljs.core.truth_(inst_31253)){
var statearr_31419_31473 = state_31367__$1;
(statearr_31419_31473[(1)] = (7));

} else {
var statearr_31420_31474 = state_31367__$1;
(statearr_31420_31474[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (14))){
var inst_31260 = (state_31367[(20)]);
var inst_31269 = cljs.core.first.call(null,inst_31260);
var inst_31270 = figwheel.client.file_reloading.eval_body.call(null,inst_31269,opts);
var inst_31271 = cljs.core.next.call(null,inst_31260);
var inst_31247 = inst_31271;
var inst_31248 = null;
var inst_31249 = (0);
var inst_31250 = (0);
var state_31367__$1 = (function (){var statearr_31421 = state_31367;
(statearr_31421[(7)] = inst_31247);

(statearr_31421[(8)] = inst_31249);

(statearr_31421[(31)] = inst_31270);

(statearr_31421[(9)] = inst_31248);

(statearr_31421[(10)] = inst_31250);

return statearr_31421;
})();
var statearr_31422_31475 = state_31367__$1;
(statearr_31422_31475[(2)] = null);

(statearr_31422_31475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (26))){
var inst_31308 = (state_31367[(21)]);
var inst_31306 = (state_31367[(24)]);
var inst_31303 = (state_31367[(22)]);
var inst_31300 = (state_31367[(18)]);
var inst_31304 = (state_31367[(23)]);
var inst_31323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31325 = (function (){var all_files = inst_31300;
var res_SINGLEQUOTE_ = inst_31303;
var res = inst_31304;
var files_not_loaded = inst_31306;
var dependencies_that_loaded = inst_31308;
return (function (p__31324){
var map__31423 = p__31324;
var map__31423__$1 = cljs.core.__destructure_map.call(null,map__31423);
var namespace = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_31326 = cljs.core.map.call(null,inst_31325,inst_31304);
var inst_31327 = cljs.core.pr_str.call(null,inst_31326);
var inst_31328 = figwheel.client.utils.log.call(null,inst_31327);
var inst_31329 = (function (){var all_files = inst_31300;
var res_SINGLEQUOTE_ = inst_31303;
var res = inst_31304;
var files_not_loaded = inst_31306;
var dependencies_that_loaded = inst_31308;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_31330 = setTimeout(inst_31329,(10));
var state_31367__$1 = (function (){var statearr_31424 = state_31367;
(statearr_31424[(32)] = inst_31323);

(statearr_31424[(33)] = inst_31328);

return statearr_31424;
})();
var statearr_31425_31476 = state_31367__$1;
(statearr_31425_31476[(2)] = inst_31330);

(statearr_31425_31476[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (16))){
var state_31367__$1 = state_31367;
var statearr_31426_31477 = state_31367__$1;
(statearr_31426_31477[(2)] = reload_dependents);

(statearr_31426_31477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (30))){
var state_31367__$1 = state_31367;
var statearr_31427_31478 = state_31367__$1;
(statearr_31427_31478[(2)] = null);

(statearr_31427_31478[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (10))){
var inst_31260 = (state_31367[(20)]);
var inst_31262 = cljs.core.chunked_seq_QMARK_.call(null,inst_31260);
var state_31367__$1 = state_31367;
if(inst_31262){
var statearr_31428_31479 = state_31367__$1;
(statearr_31428_31479[(1)] = (13));

} else {
var statearr_31429_31480 = state_31367__$1;
(statearr_31429_31480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (18))){
var inst_31294 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
if(cljs.core.truth_(inst_31294)){
var statearr_31430_31481 = state_31367__$1;
(statearr_31430_31481[(1)] = (19));

} else {
var statearr_31431_31482 = state_31367__$1;
(statearr_31431_31482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (37))){
var inst_31362 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31432_31483 = state_31367__$1;
(statearr_31432_31483[(2)] = inst_31362);

(statearr_31432_31483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (8))){
var inst_31247 = (state_31367[(7)]);
var inst_31260 = (state_31367[(20)]);
var inst_31260__$1 = cljs.core.seq.call(null,inst_31247);
var state_31367__$1 = (function (){var statearr_31433 = state_31367;
(statearr_31433[(20)] = inst_31260__$1);

return statearr_31433;
})();
if(inst_31260__$1){
var statearr_31434_31484 = state_31367__$1;
(statearr_31434_31484[(1)] = (10));

} else {
var statearr_31435_31485 = state_31367__$1;
(statearr_31435_31485[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____0 = (function (){
var statearr_31436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31436[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__);

(statearr_31436[(1)] = (1));

return statearr_31436;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____1 = (function (state_31367){
while(true){
var ret_value__28648__auto__ = (function (){try{while(true){
var result__28649__auto__ = switch__28646__auto__.call(null,state_31367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28649__auto__;
}
break;
}
}catch (e31437){if((e31437 instanceof Object)){
var ex__28650__auto__ = e31437;
var statearr_31438_31486 = state_31367;
(statearr_31438_31486[(5)] = ex__28650__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31487 = state_31367;
state_31367 = G__31487;
continue;
} else {
return ret_value__28648__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__ = function(state_31367){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____1.call(this,state_31367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28647__auto__;
})()
})();
var state__28745__auto__ = (function (){var statearr_31439 = f__28744__auto__.call(null);
(statearr_31439[(6)] = c__28743__auto__);

return statearr_31439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28745__auto__);
}));

return c__28743__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31490,link){
var map__31491 = p__31490;
var map__31491__$1 = cljs.core.__destructure_map.call(null,map__31491);
var file = cljs.core.get.call(null,map__31491__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5753__auto__ = link.href;
if(cljs.core.truth_(temp__5753__auto__)){
var link_href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__31488_SHARP_,p2__31489_SHARP_){
if(cljs.core._EQ_.call(null,p1__31488_SHARP_,p2__31489_SHARP_)){
return p1__31488_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31493){
var map__31494 = p__31493;
var map__31494__$1 = cljs.core.__destructure_map.call(null,map__31494);
var match_length = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31492_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31492_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31495_SHARP_,p2__31496_SHARP_){
return cljs.core.assoc.call(null,p1__31495_SHARP_,cljs.core.get.call(null,p2__31496_SHARP_,key),p2__31496_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5751__auto__)){
var link = temp__5751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31497 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31497);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31497);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31498,p__31499){
var map__31500 = p__31498;
var map__31500__$1 = cljs.core.__destructure_map.call(null,map__31500);
var on_cssload = cljs.core.get.call(null,map__31500__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31501 = p__31499;
var map__31501__$1 = cljs.core.__destructure_map.call(null,map__31501);
var files_msg = map__31501__$1;
var files = cljs.core.get.call(null,map__31501__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5753__auto__)){
var f_datas = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1644716834231
