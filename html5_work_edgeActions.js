
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_photo}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){this.i=1;this.t=5;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button_back}","click",function(sym,e){this.i=this.i-1;if(this.i==0)
{this.i=this.t}
$(this.lookupSelector("photo")).attr("src","images/"+this.i+".jpg");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button_next}","click",function(sym,e){if(this.i>this.t-1)
{this.i=0}
this.i=this.i+1;$(this.lookupSelector("photo")).attr("src","images/"+this.i+".jpg");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mail}","click",function(sym,e){window.open("mailto:t@tomnora.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitterLogo}","click",function(sym,e){window.open("http://twitter.com/tomnora","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TN2}","click",function(sym,e){window.open("http://www.tomnora.com","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__1}","click",function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'
})(jQuery,AdobeEdge,"EDGE-687162629");