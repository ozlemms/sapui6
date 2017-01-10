jQuery.sap.declare("sapui6.ui.layout.Layout4W"),sap.ui.core.Control.extend("sapui6.ui.layout.Layout4W",{metadata:{library:"sapui6.ui.layout",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},leftWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"25%"},leftMinWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},leftMiddleWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"25%"},leftMiddleMinWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},rightMiddleWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"25%"},rightMiddleMinWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},rightWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"25%"},rightMinWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},animation:{type:"string",defaultValue:""},enabled:{type:"boolean",group:"Behavior",defaultValue:!0},visible:{type:"boolean",group:"Appearance",defaultValue:!0}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:!0,singularName:"content"}}},renderer:function(t,e){if(e.getVisible()){t.write("<table"),t.writeControlData(e),t.addStyle("margin","0px 0px 0px 0px"),t.addStyle("padding","0px 0px 0px 0px"),t.addStyle("border-spacing","0px"),t.addStyle("width",e.getWidth()),t.writeStyles(),t.write(">");var i=e.getContent(),d=i.length;t.write("<tr>"),t.write("<td"),t.addStyle("vertical-align","top"),t.addStyle("padding","0px 0px 0px 0px"),t.addStyle("width",e.getLeftWidth()),""!=e.getLeftMinWidth()&&t.addStyle("min-width",e.getLeftMinWidth()),t.writeStyles(),t.write(">");for(var a=0;d>a;a++)t.write("<div"),t.addStyle("margin","0px 0px 0px 0px"),t.addStyle("padding","0px 0px 0px 0px"),t.writeStyles(),""!=e.getAnimation()&&(t.addClass("sapui6_"+e.getAnimation()),t.writeClasses()),t.write(">"),"A"==i[a].data("position")&&t.renderControl(i[a]),t.write("</div>");t.write("</td>"),t.write("<td"),t.addStyle("vertical-align","top"),t.addStyle("padding","0px 0px 0px 0px"),t.addStyle("width",e.getLeftMiddleWidth()),""!=e.getLeftMiddleMinWidth()&&t.addStyle("min-width",e.getLeftMiddleMinWidth()),t.writeStyles(),t.write(">");for(var a=0;d>a;a++)t.write("<div"),t.addStyle("margin","0px 0px 0px 0px"),t.addStyle("padding","0px 0px 0px 0px"),t.writeStyles(),""!=e.getAnimation()&&(t.addClass("sapui6_"+e.getAnimation()),t.writeClasses()),t.write(">"),"B"==i[a].data("position")&&t.renderControl(i[a]),t.write("</div>");t.write("</td>"),t.write("<td"),t.addStyle("vertical-align","top"),t.addStyle("padding","0px 0px 0px 0px"),t.addStyle("width",e.getRightMiddleWidth()),""!=e.getRightMiddleMinWidth()&&t.addStyle("min-width",e.getRightMiddleMinWidth()),t.writeStyles(),t.write(">");for(var a=0;d>a;a++)t.write("<div"),t.addStyle("margin","0px 0px 0px 0px"),t.addStyle("padding","0px 0px 0px 0px"),t.writeStyles(),""!=e.getAnimation()&&(t.addClass("sapui6_"+e.getAnimation()),t.writeClasses()),t.write(">"),"C"==i[a].data("position")&&t.renderControl(i[a]),t.write("</div>");t.write("</td>"),t.write("<td"),t.addStyle("vertical-align","top"),t.addStyle("padding","0px 0px 0px 0px"),t.addStyle("width",e.getRightWidth()),""!=e.getRightMinWidth()&&t.addStyle("min-width",e.getRightMinWidth()),t.writeStyles(),t.write(">");for(var a=0;d>a;a++)t.write("<div"),t.addStyle("margin","0px 0px 0px 0px"),t.addStyle("padding","0px 0px 0px 0px"),t.writeStyles(),""!=e.getAnimation()&&(t.addClass("sapui6_"+e.getAnimation()),t.writeClasses()),t.write(">"),"D"==i[a].data("position")&&t.renderControl(i[a]),t.write("</div>");t.write("</td>"),t.write("</tr>"),t.write("</table>")}}});