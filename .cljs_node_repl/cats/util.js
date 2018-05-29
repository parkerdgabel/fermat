// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cats.util');
goog.require('cljs.core');
goog.require('cats.protocols');
cats.util.make_printable = (function cats$util$make_printable(klass){
klass.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

return klass.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (mv,writer,_){
var mv__$1 = this;
return cljs.core._write.call(null,writer,cats.protocols._repr.call(null,mv__$1));
});
});

//# sourceMappingURL=util.js.map
