/*! iToolTip - v1.0 - 2013-06-22 2:44:17 PM
* Copyright (c) 2013 Letao; Licensed  */
KISSY.add("gallery/iToolTip/1.0/index",function(a,b,c){function d(a){var b=this;b.tt=e(a.thumbtack),b.ew=a.expandWidth||225,b.bcls=a.bodyClass||".itt-body",b.init()}var e=b.all;return a.DOM,a.Event,a.extend(d,c,{init:function(){var a=this;a.tt.each(function(b){b.defaultWidth=b.width(),b.parentWidth=b.parent().width(),b.defaultLeft=parseInt(b.css("left")),a.bindEvent(b)})},bindEvent:function(b){var c=this;b.on("mouseenter",function(){b.status&&b.status.isRunning()&&b.status.stop();var d={width:c.ew};b.defaultLeft+c.ew>b.parentWidth&&(d.left=b.defaultLeft+(b.parentWidth-(b.defaultLeft+c.ew))),b.status=new a.Anim(b,d,.2,"easeOut",function(){var d=b.one(c.bcls);if(d){d.css("display","block");var e=d.height();d.css("height","0"),new a.Anim(d,{height:e},.15,"easeOut",function(){}).run()}}),b.status.run()}).on("mouseleave",function(){b.status&&b.status.isRunning()&&b.status.stop();var d={width:b.defaultWidth,left:b.defaultLeft};b.status=new a.Anim(b,d,.2,"easeOut",function(){var d=b.one(c.bcls);d&&new a.Anim(d,{height:0},.15,"easeOut",function(){d.css({height:"auto",display:"none"})}).run()}),b.status.run()})}},{ATTRS:{}}),d},{requires:["node","base"]});