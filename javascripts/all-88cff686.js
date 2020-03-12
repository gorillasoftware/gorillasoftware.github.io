/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
var libFuncName=null;if("undefined"==typeof jQuery&&"undefined"==typeof Zepto&&"function"==typeof $)libFuncName=$;else if("function"==typeof jQuery)libFuncName=jQuery;else{if("function"!=typeof Zepto)throw new TypeError;libFuncName=Zepto}!function(t,e,r,n){"use strict";/*
    matchMedia() polyfill - Test a CSS media 
    type/query in JS. Authors & copyright (c) 2012: 
    Scott Jehl, Paul Irish, Nicholas Zakas. 
    Dual MIT/BSD license

    https://github.com/paulirish/matchMedia.js
  */
t("head").append('<meta class="foundation-mq-small">'),t("head").append('<meta class="foundation-mq-medium">'),t("head").append('<meta class="foundation-mq-large">'),e.matchMedia=e.matchMedia||function(t){var e,r=t.documentElement,n=r.firstElementChild||r.firstChild,i=t.createElement("body"),a=t.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(a),function(t){return a.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(i,n),e=42===a.offsetWidth,r.removeChild(i),{matches:e,media:t}}}(r),Array.prototype.filter||(Array.prototype.filter=function(t){if(null==this)throw new TypeError;var e=Object(this),r=e.length>>>0;if("function"==typeof t){for(var n=[],i=arguments[1],a=0;r>a;a++)if(a in e){var s=e[a];t&&t.call(i,s,a,e)&&n.push(s)}return n}}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),r=this,n=function(){},i=function(){return r.apply(this instanceof n&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,i.prototype=new n,i}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(null==this)throw new TypeError;var e=Object(this),r=e.length>>>0;if(0===r)return-1;var n=0;if(arguments.length>1&&(n=Number(arguments[1]),n!=n?n=0:0!=n&&1/0!=n&&n!=-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=r)return-1;for(var i=n>=0?n:Math.max(r-Math.abs(n),0);r>i;i++)if(i in e&&e[i]===t)return i;return-1}),t.fn.stop=t.fn.stop||function(){return this},e.Foundation={name:"Foundation",version:"4.3.2",cache:{},media_queries:{small:t(".foundation-mq-small").css("font-family").replace(/\'/g,""),medium:t(".foundation-mq-medium").css("font-family").replace(/\'/g,""),large:t(".foundation-mq-large").css("font-family").replace(/\'/g,"")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,init:function(e,r,n,i,a,s){var o,l=[e,n,i,a],c=[],s=s||!1;if(s&&(this.nc=s),this.rtl=/rtl/i.test(t("html").attr("dir")),this.scope=e||this.scope,r&&"string"==typeof r&&!/reflow/i.test(r)){if(/off/i.test(r))return this.off();if(o=r.split(" "),o.length>0)for(var u=o.length-1;u>=0;u--)c.push(this.init_lib(o[u],l))}else{/reflow/i.test(r)&&(l[1]="reflow");for(var h in this.libs)c.push(this.init_lib(h,l))}return"function"==typeof r&&l.unshift(r),this.response_obj(c,l)},response_obj:function(t,e){for(var r=0,n=e.length;n>r;r++)if("function"==typeof e[r])return e[r]({errors:t.filter(function(t){return"string"==typeof t?t:void 0})});return t},init_lib:function(t,e){return this.trap(function(){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),this.libs[t].init.apply(this.libs[t],e)):function(){}}.bind(this),t)},trap:function(t,e){if(!this.nc)try{return t()}catch(r){return this.error({name:e,message:"could not be initialized",more:r.name+" "+r.message})}return t()},patch:function(t){this.fix_outer(t),t.scope=this.scope,t.rtl=this.rtl},inherit:function(t,e){for(var r=e.split(" "),n=r.length-1;n>=0;n--)this.lib_methods.hasOwnProperty(r[n])&&(this.libs[t.name][r[n]]=this.lib_methods[r[n]])},random_str:function(t){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");t||(t=Math.floor(Math.random()*e.length));for(var r="",n=0;t>n;n++)r+=e[Math.floor(Math.random()*e.length)];return r},libs:{},lib_methods:{set_data:function(t,e){var r=[this.name,+new Date,Foundation.random_str(5)].join("-");return Foundation.cache[r]=e,t.attr("data-"+this.name+"-id",r),e},get_data:function(t){return Foundation.cache[t.attr("data-"+this.name+"-id")]},remove_data:function(e){e?(delete Foundation.cache[e.attr("data-"+this.name+"-id")],e.attr("data-"+this.name+"-id","")):t("[data-"+this.name+"-id]").each(function(){delete Foundation.cache[t(this).attr("data-"+this.name+"-id")],t(this).attr("data-"+this.name+"-id","")})},throttle:function(t,e){var r=null;return function(){var n=this,i=arguments;clearTimeout(r),r=setTimeout(function(){t.apply(n,i)},e)}},data_options:function(e){function r(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function n(e){return"string"==typeof e?t.trim(e):e}var i,a,s={},o=(e.attr("data-options")||":").split(";"),l=o.length;for(i=l-1;i>=0;i--)a=o[i].split(":"),/true/i.test(a[1])&&(a[1]=!0),/false/i.test(a[1])&&(a[1]=!1),r(a[1])&&(a[1]=parseInt(a[1],10)),2===a.length&&a[0].length>0&&(s[n(a[0])]=n(a[1]));return s},delay:function(t,e){return setTimeout(t,e)},scrollTo:function(r,n,i){if(!(0>i)){var a=n-t(e).scrollTop(),s=a/i*10;this.scrollToTimerCache=setTimeout(function(){isNaN(parseInt(s,10))||(e.scrollTo(0,t(e).scrollTop()+s),this.scrollTo(r,n,i-10))}.bind(this),10)}},scrollLeft:function(t){return t.length?"scrollLeft"in t[0]?t[0].scrollLeft:t[0].pageXOffset:void 0},empty:function(t){if(t.length&&t.length>0)return!1;if(t.length&&0===t.length)return!0;for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0},addCustomRule:function(t,e){if(e===n)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var r=Foundation.media_queries[e];r!==n&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}}},fix_outer:function(t){t.outerHeight=function(t,e){return"function"==typeof Zepto?t.height():"undefined"!=typeof e?t.outerHeight(e):t.outerHeight()},t.outerWidth=function(t,e){return"function"==typeof Zepto?t.width():"undefined"!=typeof e?t.outerWidth(e):t.outerWidth()}},error:function(t){return t.name+" "+t.message+"; "+t.more},off:function(){return t(this.scope).off(".fndtn"),t(e).off(".fndtn"),!0},zj:t},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(libFuncName,this,this.document),function(t,e,r){"use strict";Foundation.libs.topbar={name:"topbar",version:"4.3.2",settings:{index:0,stickyClass:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,mobile_show_parent_link:!1,scrolltop:!0,init:!1},init:function(r,n,i){Foundation.inherit(this,"data_options addCustomRule");var a=this;return"object"==typeof n?t.extend(!0,this.settings,n):"undefined"!=typeof i&&t.extend(!0,this.settings,i),"string"!=typeof n?(t(".top-bar, [data-topbar]").each(function(){t.extend(!0,a.settings,a.data_options(t(this))),a.settings.$w=t(e),a.settings.$topbar=t(this),a.settings.$section=a.settings.$topbar.find("section"),a.settings.$titlebar=a.settings.$topbar.children("ul").first(),a.settings.$topbar.data("index",0);var r=a.settings.$topbar.parent();r.hasClass("fixed")||r.hasClass(a.settings.stickyClass)?(a.settings.$topbar.data("height",a.outerHeight(r)),a.settings.$topbar.data("stickyoffset",r.offset().top)):a.settings.$topbar.data("height",a.outerHeight(a.settings.$topbar));var n=t("<div class='top-bar-js-breakpoint'/>").insertAfter(a.settings.$topbar);a.settings.breakPoint=n.width(),n.remove(),a.assemble(),a.settings.is_hover&&a.settings.$topbar.find(".has-dropdown").addClass("not-click"),a.addCustomRule(".f-topbar-fixed { padding-top: "+a.settings.$topbar.data("height")+"px }"),a.settings.$topbar.parent().hasClass("fixed")&&t("body").addClass("f-topbar-fixed")}),a.settings.init||this.events(),this.settings.init):this[n].call(this,i)},toggle:function(){var r=this,n=t(".top-bar, [data-topbar]"),i=n.find("section, .section");r.breakpoint()&&(r.rtl?(i.css({right:"0%"}),i.find(">.name").css({right:"100%"})):(i.css({left:"0%"}),i.find(">.name").css({left:"100%"})),i.find("li.moved").removeClass("moved"),n.data("index",0),n.toggleClass("expanded").css("height","")),r.settings.scrolltop?n.hasClass("expanded")?n.parent().hasClass("fixed")&&(r.settings.scrolltop?(n.parent().removeClass("fixed"),n.addClass("fixed"),t("body").removeClass("f-topbar-fixed"),e.scrollTo(0,0)):n.parent().removeClass("expanded")):n.hasClass("fixed")&&(n.parent().addClass("fixed"),n.removeClass("fixed"),t("body").addClass("f-topbar-fixed")):(n.parent().hasClass(r.settings.stickyClass)&&n.parent().addClass("fixed"),n.parent().hasClass("fixed")&&(n.hasClass("expanded")?(n.addClass("fixed"),n.parent().addClass("expanded")):(n.removeClass("fixed"),n.parent().removeClass("expanded"),r.updateStickyPositioning())))},timer:null,events:function(){var n=this;t(this.scope).off(".fndtn.topbar").on("click.fndtn.topbar",".top-bar .toggle-topbar, [data-topbar] .toggle-topbar",function(t){t.preventDefault(),n.toggle()}).on("click.fndtn.topbar",".top-bar li.has-dropdown",function(e){{var r=t(this),i=t(e.target),a=r.closest("[data-topbar], .top-bar");a.data("topbar")}return i.data("revealId")?(n.toggle(),void 0):(n.breakpoint()||(!n.settings.is_hover||Modernizr.touch)&&(e.stopImmediatePropagation(),"A"===i[0].nodeName&&i.parent().hasClass("has-dropdown")&&e.preventDefault(),r.hasClass("hover")?(r.removeClass("hover").find("li").removeClass("hover"),r.parents("li.hover").removeClass("hover")):r.addClass("hover")),void 0)}).on("click.fndtn.topbar",".top-bar .has-dropdown>a, [data-topbar] .has-dropdown>a",function(r){if(n.breakpoint()&&t(e).width()!=n.settings.breakPoint){r.preventDefault();var i=t(this),a=i.closest(".top-bar, [data-topbar]"),s=a.find("section, .section"),o=(i.next(".dropdown").outerHeight(),i.closest("li"));a.data("index",a.data("index")+1),o.addClass("moved"),n.rtl?(s.css({right:-(100*a.data("index"))+"%"}),s.find(">.name").css({right:100*a.data("index")+"%"})):(s.css({left:-(100*a.data("index"))+"%"}),s.find(">.name").css({left:100*a.data("index")+"%"})),a.css("height",n.outerHeight(i.siblings("ul"),!0)+n.settings.$topbar.data("height"))}}),t(e).on("resize.fndtn.topbar",function(){if("undefined"!=typeof n.settings.$topbar){var e,i=n.settings.$topbar.parent("."+this.settings.stickyClass);if(!n.breakpoint()){var a=n.settings.$topbar.hasClass("expanded");t(".top-bar, [data-topbar]").css("height","").removeClass("expanded").find("li").removeClass("hover"),a&&n.toggle()}i.length>0&&(i.hasClass("fixed")?(i.removeClass("fixed"),e=i.offset().top,t(r.body).hasClass("f-topbar-fixed")&&(e-=n.settings.$topbar.data("height")),n.settings.$topbar.data("stickyoffset",e),i.addClass("fixed")):(e=i.offset().top,n.settings.$topbar.data("stickyoffset",e)))}}.bind(this)),t("body").on("click.fndtn.topbar",function(e){var r=t(e.target).closest("li").closest("li.hover");r.length>0||t(".top-bar li, [data-topbar] li").removeClass("hover")}),t(this.scope).on("click.fndtn",".top-bar .has-dropdown .back, [data-topbar] .has-dropdown .back",function(e){e.preventDefault();var r=t(this),i=r.closest(".top-bar, [data-topbar]"),a=i.find("section, .section"),s=r.closest("li.moved"),o=s.parent();i.data("index",i.data("index")-1),n.rtl?(a.css({right:-(100*i.data("index"))+"%"}),a.find(">.name").css({right:100*i.data("index")+"%"})):(a.css({left:-(100*i.data("index"))+"%"}),a.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",n.outerHeight(o,!0)+n.settings.$topbar.data("height")),setTimeout(function(){s.removeClass("moved")},300)})},breakpoint:function(){return t(r).width()<=this.settings.breakPoint||t("html").hasClass("lt-ie9")},assemble:function(){var e=this;this.settings.$section.detach(),this.settings.$section.find(".has-dropdown>a").each(function(){var r=t(this),n=r.siblings(".dropdown"),i=r.attr("href");if(e.settings.mobile_show_parent_link&&i&&i.length>1)var a=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="'+i+'">'+r.text()+"</a></li>");else var a=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');1==e.settings.custom_back_text?a.find("h5>a").html(e.settings.back_text):a.find("h5>a").html("&laquo; "+r.html()),n.prepend(a)}),this.settings.$section.appendTo(this.settings.$topbar),this.sticky()},height:function(e){var r=0,n=this;return e.find("> li").each(function(){r+=n.outerHeight(t(this),!0)}),r},sticky:function(){var r=t(e),n=this;r.scroll(function(){n.updateStickyPositioning()})},updateStickyPositioning:function(){var r="."+this.settings.stickyClass,n=t(e);if(t(r).length>0){var i=this.settings.$topbar.data("stickyoffset");t(r).hasClass("expanded")||(n.scrollTop()>i?t(r).hasClass("fixed")||(t(r).addClass("fixed"),t("body").addClass("f-topbar-fixed")):n.scrollTop()<=i&&t(r).hasClass("fixed")&&(t(r).removeClass("fixed"),t("body").removeClass("f-topbar-fixed")))}},off:function(){t(this.scope).off(".fndtn.topbar"),t(e).off(".fndtn.topbar")},reflow:function(){}}}(Foundation.zj,this,this.document),function(t,e){"use strict";Foundation.libs.tooltips={name:"tooltips",version:"4.3.2",settings:{selector:".has-tip",additionalInheritableClasses:[],tooltipClass:".tooltip",touchCloseText:"tap to close",appendTo:"body","disable-for-touch":!1,tipTemplate:function(t,e){return'<span data-selector="'+t+'" class="'+Foundation.libs.tooltips.settings.tooltipClass.substring(1)+'">'+e+'<span class="nub"></span></span>'}},cache:{},init:function(e,r,n){Foundation.inherit(this,"data_options");var i=this;return"object"==typeof r?t.extend(!0,this.settings,r):"undefined"!=typeof n&&t.extend(!0,this.settings,n),"string"==typeof r?this[r].call(this,n):(Modernizr.touch?t(this.scope).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip","[data-tooltip]",function(e){var r=t.extend({},i.settings,i.data_options(t(this)));r["disable-for-touch"]||(e.preventDefault(),t(r.tooltipClass).hide(),i.showOrCreateTip(t(this)))}).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip",this.settings.tooltipClass,function(e){e.preventDefault(),t(this).fadeOut(150)}):t(this.scope).on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip","[data-tooltip]",function(e){var r=t(this);/enter|over/i.test(e.type)?i.showOrCreateTip(r):("mouseout"===e.type||"mouseleave"===e.type)&&i.hide(r)}),void 0)},showOrCreateTip:function(t){var e=this.getTip(t);return e&&e.length>0?this.show(t):this.create(t)},getTip:function(e){var r=this.selector(e),n=null;return r&&(n=t('span[data-selector="'+r+'"]'+this.settings.tooltipClass)),"object"==typeof n?n:!1},selector:function(t){var e=t.attr("id"),r=t.attr("data-tooltip")||t.attr("data-selector");return(e&&e.length<1||!e)&&"string"!=typeof r&&(r="tooltip"+Math.random().toString(36).substring(7),t.attr("data-selector",r)),e&&e.length>0?e:r},create:function(e){var r=t(this.settings.tipTemplate(this.selector(e),t("<div></div>").html(e.attr("title")).html())),n=this.inheritable_classes(e);r.addClass(n).appendTo(this.settings.appendTo),Modernizr.touch&&r.append('<span class="tap-to-close">'+this.settings.touchCloseText+"</span>"),e.removeAttr("title").attr("title",""),this.show(e)},reposition:function(r,n,i){var a,s,o,l,c;if(n.css("visibility","hidden").show(),a=r.data("width"),s=n.children(".nub"),o=this.outerHeight(s),l=this.outerHeight(s),c=function(t,e,r,n,i,a){return t.css({top:e?e:"auto",bottom:n?n:"auto",left:i?i:"auto",right:r?r:"auto",width:a?a:"auto"}).end()},c(n,r.offset().top+this.outerHeight(r)+10,"auto","auto",r.offset().left,a),t(e).width()<767)c(n,r.offset().top+this.outerHeight(r)+10,"auto","auto",12.5,t(this.scope).width()),n.addClass("tip-override"),c(s,-o,"auto","auto",r.offset().left);else{var u=r.offset().left;Foundation.rtl&&(u=r.offset().left+r.offset().width-this.outerWidth(n)),c(n,r.offset().top+this.outerHeight(r)+10,"auto","auto",u,a),n.removeClass("tip-override"),i&&i.indexOf("tip-top")>-1?c(n,r.offset().top-this.outerHeight(n),"auto","auto",u,a).removeClass("tip-override"):i&&i.indexOf("tip-left")>-1?c(n,r.offset().top+this.outerHeight(r)/2-2.5*o,"auto","auto",r.offset().left-this.outerWidth(n)-o,a).removeClass("tip-override"):i&&i.indexOf("tip-right")>-1&&c(n,r.offset().top+this.outerHeight(r)/2-2.5*o,"auto","auto",r.offset().left+this.outerWidth(r)+o,a).removeClass("tip-override")}n.css("visibility","visible").hide()},inheritable_classes:function(e){var r=["tip-top","tip-left","tip-bottom","tip-right","noradius"].concat(this.settings.additionalInheritableClasses),n=e.attr("class"),i=n?t.map(n.split(" "),function(e){return-1!==t.inArray(e,r)?e:void 0}).join(" "):"";return t.trim(i)},show:function(t){var e=this.getTip(t);this.reposition(t,e,t.attr("class")),e.fadeIn(150)},hide:function(t){var e=this.getTip(t);e.fadeOut(150)},reload:function(){var e=t(this);return e.data("fndtn-tooltips")?e.foundationTooltips("destroy").foundationTooltips("init"):e.foundationTooltips("init")},off:function(){t(this.scope).off(".fndtn.tooltip"),t(this.settings.tooltipClass).each(function(e){t("[data-tooltip]").get(e).attr("title",t(this).text())}).remove()},reflow:function(){}}}(Foundation.zj,this,this.document),function(t,e,r,n){"use strict";var i=function(){},a=function(i,a){if(i.hasClass(a.slides_container_class))return this;var c,u,h,f,p,d,g=this,m=i,v=0,y=!1;m.children().first().addClass(a.active_slide_class),g.update_slide_number=function(e){a.slide_number&&(u.find("span:first").text(parseInt(e)+1),u.find("span:last").text(m.children().length)),a.bullets&&(h.children().removeClass(a.bullets_active_class),t(h.children().get(e)).addClass(a.bullets_active_class))},g.update_active_link=function(e){var r=t('a[data-orbit-link="'+m.children().eq(e).attr("data-orbit-slide")+'"]');r.parents("ul").find("[data-orbit-link]").removeClass(a.bullets_active_class),r.addClass(a.bullets_active_class)},g.build_markup=function(){m.wrap('<div class="'+a.container_class+'"></div>'),c=m.parent(),m.addClass(a.slides_container_class),a.navigation_arrows&&(c.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)),c.append(t('<a href="#"><span></span></a>').addClass(a.next_class))),a.timer&&(f=t("<div>").addClass(a.timer_container_class),f.append("<span>"),f.append(t("<div>").addClass(a.timer_progress_class)),f.addClass(a.timer_paused_class),c.append(f)),a.slide_number&&(u=t("<div>").addClass(a.slide_number_class),u.append("<span></span> "+a.slide_number_text+" <span></span>"),c.append(u)),a.bullets&&(h=t("<ol>").addClass(a.bullets_container_class),c.append(h),m.children().each(function(e){var r=t("<li>").attr("data-orbit-slide",e);h.append(r)})),a.stack_on_small&&c.addClass(a.stack_on_small_class),g.update_slide_number(0),g.update_active_link(0)},g._goto=function(e,r){if(e===v)return!1;"object"==typeof d&&d.restart();var n=m.children(),i="next";y=!0,v>e&&(i="prev"),e>=n.length?e=0:0>e&&(e=n.length-1);var s=t(n.get(v)),o=t(n.get(e));s.css("zIndex",2),s.removeClass(a.active_slide_class),o.css("zIndex",4).addClass(a.active_slide_class),m.trigger("orbit:before-slide-change"),a.before_slide_change(),g.update_active_link(e);var l=function(){var t=function(){v=e,y=!1,r===!0&&(d=g.create_timer(),d.start()),g.update_slide_number(v),m.trigger("orbit:after-slide-change",[{slide_number:v,total_slides:n.length}]),a.after_slide_change(v,n.length)};m.height()!=o.height()&&a.variable_height?m.animate({height:o.height()},250,"linear",t):t()};if(1===n.length)return l(),!1;var c=function(){"next"===i&&p.next(s,o,l),"prev"===i&&p.prev(s,o,l)};o.height()>m.height()&&a.variable_height?m.animate({height:o.height()},250,"linear",c):c()},g.next=function(t){t.stopImmediatePropagation(),t.preventDefault(),g._goto(v+1)},g.prev=function(t){t.stopImmediatePropagation(),t.preventDefault(),g._goto(v-1)},g.link_custom=function(e){e.preventDefault();var r=t(this).attr("data-orbit-link");if("string"==typeof r&&""!=(r=t.trim(r))){var n=c.find("[data-orbit-slide="+r+"]");-1!=n.index()&&g._goto(n.index())}},g.link_bullet=function(){var e=t(this).attr("data-orbit-slide");"string"==typeof e&&""!=(e=t.trim(e))&&g._goto(parseInt(e))},g.timer_callback=function(){g._goto(v+1,!0)},g.compute_dimensions=function(){var e=t(m.children().get(v)),r=e.height();a.variable_height||m.children().each(function(){t(this).height()>r&&(r=t(this).height())}),m.height(r)},g.create_timer=function(){var t=new s(c.find("."+a.timer_container_class),a,g.timer_callback);return t},g.stop_timer=function(){"object"==typeof d&&d.stop()},g.toggle_timer=function(){var t=c.find("."+a.timer_container_class);t.hasClass(a.timer_paused_class)?("undefined"==typeof d&&(d=g.create_timer()),d.start()):"object"==typeof d&&d.stop()},g.init=function(){g.build_markup(),a.timer&&(d=g.create_timer(),d.start()),p=new l(a,m),"slide"===a.animation&&(p=new o(a,m)),c.on("click","."+a.next_class,g.next),c.on("click","."+a.prev_class,g.prev),c.on("click","[data-orbit-slide]",g.link_bullet),c.on("click",g.toggle_timer),a.swipe&&c.on("touchstart.fndtn.orbit",function(t){t.touches||(t=t.originalEvent);var e={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:n};c.data("swipe-transition",e),t.stopPropagation()}).on("touchmove.fndtn.orbit",function(t){if(t.touches||(t=t.originalEvent),!(t.touches.length>1||t.scale&&1!==t.scale)){var e=c.data("swipe-transition");if("undefined"==typeof e&&(e={}),e.delta_x=t.touches[0].pageX-e.start_page_x,"undefined"==typeof e.is_scrolling&&(e.is_scrolling=!!(e.is_scrolling||Math.abs(e.delta_x)<Math.abs(t.touches[0].pageY-e.start_page_y))),!e.is_scrolling&&!e.active){t.preventDefault();var r=e.delta_x<0?v+1:v-1;e.active=!0,g._goto(r)}}}).on("touchend.fndtn.orbit",function(t){c.data("swipe-transition",{}),t.stopPropagation()}),c.on("mouseenter.fndtn.orbit",function(){a.timer&&a.pause_on_hover&&g.stop_timer()}).on("mouseleave.fndtn.orbit",function(){a.timer&&a.resume_on_mouseout&&d.start()}),t(r).on("click","[data-orbit-link]",g.link_custom),t(e).on("resize",g.compute_dimensions),t(e).on("load",g.compute_dimensions),t(e).on("load",function(){c.prev(".preloader").css("display","none")}),m.trigger("orbit:ready")},g.init()},s=function(t,e,r){var n,i,a=this,s=e.timer_speed,o=t.find("."+e.timer_progress_class),l=-1;this.update_progress=function(t){var e=o.clone();e.attr("style",""),e.css("width",t+"%"),o.replaceWith(e),o=e},this.restart=function(){clearTimeout(i),t.addClass(e.timer_paused_class),l=-1,a.update_progress(0)},this.start=function(){return t.hasClass(e.timer_paused_class)?(l=-1===l?s:l,t.removeClass(e.timer_paused_class),n=(new Date).getTime(),o.animate({width:"100%"},l,"linear"),i=setTimeout(function(){a.restart(),r()},l),t.trigger("orbit:timer-started"),void 0):!0},this.stop=function(){if(t.hasClass(e.timer_paused_class))return!0;clearTimeout(i),t.addClass(e.timer_paused_class);var r=(new Date).getTime();l-=r-n;var o=100-l/s*100;a.update_progress(o),t.trigger("orbit:timer-stopped")}},o=function(e){var r=e.animation_speed,n=1===t("html[dir=rtl]").length,i=n?"marginRight":"marginLeft",a={};a[i]="0%",this.next=function(t,e,n){e.animate(a,r,"linear",function(){t.css(i,"100%"),n()})},this.prev=function(t,e,n){e.css(i,"-100%"),e.animate(a,r,"linear",function(){t.css(i,"100%"),n()})}},l=function(e){{var r=e.animation_speed;1===t("html[dir=rtl]").length}this.next=function(t,e,n){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},r,"linear",function(){t.css("margin","100%"),n()})},this.prev=function(t,e,n){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},r,"linear",function(){t.css("margin","100%"),n()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"4.3.2",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:i,after_slide_change:i},init:function(e,r){var n=this;if(Foundation.inherit(n,"data_options"),"object"==typeof r&&t.extend(!0,n.settings,r),t(e).is("[data-orbit]")){var i=t(e),s=n.data_options(i);new a(i,t.extend({},n.settings,s))}t("[data-orbit]",e).each(function(e,r){var i=t(r),s=n.data_options(i);new a(i,t.extend({},n.settings,s))})}}}(Foundation.zj,this,this.document),function(){var t=/\blang(?:uage)?-(?!\*)(\w+)\b/i,e=self.Prism={util:{type:function(t){return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1]},clone:function(t){var r=e.util.type(t);switch(r){case"Object":var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=e.util.clone(t[i]));return n;case"Array":return t.slice()}return t}},languages:{extend:function(t,r){var n=e.util.clone(e.languages[t]);for(var i in r)n[i]=r[i];return n},insertBefore:function(t,r,n,i){i=i||e.languages;var a=i[t],s={};for(var o in a)if(a.hasOwnProperty(o)){if(o==r)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);s[o]=a[o]}return i[t]=s},DFS:function(t,r){for(var n in t)r.call(t,n,t[n]),"Object"===e.util.type(t)&&e.languages.DFS(t[n],r)}},highlightAll:function(t,r){for(var n,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),a=0;n=i[a++];)e.highlightElement(n,t===!0,r)},highlightElement:function(n,i,a){for(var s,o,l=n;l&&!t.test(l.className);)l=l.parentNode;if(l&&(s=(l.className.match(t)||[,""])[1],o=e.languages[s]),o){n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s,l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c=n.textContent;if(c){c=c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var u={element:n,language:s,grammar:o,code:c};if(e.hooks.run("before-highlight",u),i&&self.Worker){var h=new Worker(e.filename);h.onmessage=function(t){u.highlightedCode=r.stringify(JSON.parse(t.data),s),e.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(u.element),e.hooks.run("after-highlight",u)},h.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=e.highlight(u.code,u.grammar,u.language),e.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(n),e.hooks.run("after-highlight",u)}}},highlight:function(t,n,i){return r.stringify(e.tokenize(t,n),i)},tokenize:function(t,r){var n=e.Token,i=[t],a=r.rest;if(a){for(var s in a)r[s]=a[s];delete r.rest}t:for(var s in r)if(r.hasOwnProperty(s)&&r[s]){var o=r[s],l=o.inside,c=!!o.lookbehind,u=0;o=o.pattern||o;for(var h=0;h<i.length;h++){var f=i[h];if(i.length>t.length)break t;if(!(f instanceof n)){o.lastIndex=0;var p=o.exec(f);if(p){c&&(u=p[1].length);var d=p.index-1+u,p=p[0].slice(u),g=p.length,m=d+g,v=f.slice(0,d+1),y=f.slice(m+1),b=[h,1];v&&b.push(v);var x=new n(s,l?e.tokenize(p,l):p);b.push(x),y&&b.push(y),Array.prototype.splice.apply(i,b)}}}}return i},hooks:{all:{},add:function(t,r){var n=e.hooks.all;n[t]=n[t]||[],n[t].push(r)},run:function(t,r){var n=e.hooks.all[t];if(n&&n.length)for(var i,a=0;i=n[a++];)i(r)}}},r=e.Token=function(t,e){this.type=t,this.content=e};if(r.stringify=function(t,n,i){if("string"==typeof t)return t;if("[object Array]"==Object.prototype.toString.call(t))return t.map(function(e){return r.stringify(e,n,t)}).join("");var a={type:t.type,content:r.stringify(t.content,n,i),tag:"span",classes:["token",t.type],attributes:{},language:n,parent:i};"comment"==a.type&&(a.attributes.spellcheck="true"),e.hooks.run("wrap",a);var s="";for(var o in a.attributes)s+=o+'="'+(a.attributes[o]||"")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'" '+s+">"+a.content+"</"+a.tag+">"},!self.document)return self.addEventListener("message",function(t){var r=JSON.parse(t.data),n=r.language,i=r.code;self.postMessage(JSON.stringify(e.tokenize(i,e.languages[n]))),self.close()},!1),void 0;var n=document.getElementsByTagName("script");n=n[n.length-1],n&&(e.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",e.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:class|interface|extends|implements|trait|instanceof|new)\s+)[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),function(){if(self.Prism&&self.document&&document.querySelector){var t={js:"javascript",html:"markup",svg:"markup"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){var r=e.getAttribute("data-src"),n=(r.match(/\.(\w+)$/)||[,""])[1],i=t[n]||n,a=document.createElement("code");a.className="language-"+i,e.textContent="",a.textContent="Loading…",e.appendChild(a);var s=new XMLHttpRequest;s.open("GET",r,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(a.textContent=s.responseText,Prism.highlightElement(a)):a.textContent=s.status>=400?"✖ Error "+s.status+" while fetching file: "+s.statusText:"✖ Error: File does not exist or is empty")},s.send(null)})}}(),Prism.languages.coffeescript=Prism.languages.extend("javascript",{"block-comment":/([#]{3}\s*\r?\n(.*\s*\r*\n*)\s*?\r?\n[#]{3})/g,comment:/(\s|^)([#]{1}[^#^\r^\n]{2,}?(\r?\n|$))/g,keyword:/\b(this|window|delete|class|extends|namespace|extend|ar|let|if|else|while|do|for|each|of|return|in|instanceof|new|with|typeof|try|catch|finally|null|undefined|break|continue)\b/g}),Prism.languages.insertBefore("coffeescript","keyword",{"function":{pattern:/[a-z|A-z]+\s*[:|=]\s*(\([.|a-z\s|,|:|{|}|\"|\'|=]*\))?\s*-&gt;/gi,inside:{"function-name":/[_?a-z-|A-Z-]+(\s*[:|=])| @[_?$?a-z-|A-Z-]+(\s*)| /g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g}},"attr-name":/[_?a-z-|A-Z-]+(\s*:)| @[_?$?a-z-|A-Z-]+(\s*)| /g}),Prism.languages.bash=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])(#.*?(\r?\n|$))/g,lookbehind:!0},string:{pattern:/("|')(\\?[\s\S])*?\1/g,inside:{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/g}},keyword:/\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/g}),Prism.languages.insertBefore("bash","keyword",{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/g}),Prism.languages.insertBefore("bash","comment",{important:/(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/g}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,"pseudo-class":/:[-\w]+(?:\(.*\))?/g,"class":/\.[-:\.\w]+/g,id:/#[-:\.\w]+/g}},Prism.languages.insertBefore("css","ignore",{hexcode:/#[\da-f]{3,6}/gi,entity:/\\[\da-f]{1,8}/gi,number:/[\d%\.]+/g,"function":/(attr|calc|cross-fade|cycle|element|hsla?|image|lang|linear-gradient|matrix3d|matrix|perspective|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgba?|rotatex|rotatey|rotatez|rotate3d|rotate|scalex|scaley|scalez|scale3d|scale|skewx|skewy|skew|steps|translatex|translatey|translatez|translate3d|translate|url|var)/gi}),Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/g,inside:{property:/^\b(POST|GET|PUT|DELETE|OPTIONS)\b/g,"attr-name":/:\w+/g}},"response-status":{pattern:/^HTTP\/1.[01] [0-9]+.*/g,inside:{property:/[0-9]+[A-Z\s-]+$/g}},keyword:/^[\w-]+:(?=.+)/gm};
var httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var contentType in httpLanguages)if(httpLanguages[contentType]){var options={};options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)\\n\\n[\\w\\W]*","gi"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","keyword",options)}Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},atrule:/@[\w-]+(?=\s+(\(|\{|;))/gi,url:/([-a-z]+-)*url(?=\()/gi,selector:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&amp;|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm}),Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return)|(?=@for\s+\$[-_\w]+\s)+from/i}),Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i}),Prism.languages.insertBefore("scss","ignore",{placeholder:/%[-_\w]+/i,statement:/\B!(default|optional)\b/gi,"boolean":/\b(true|false)\b/g,"null":/\b(null)\b/g,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g}),Prism.languages.python={comment:{pattern:/(^|[^\\])#.*?(\r?\n|$)/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,keyword:/\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,"boolean":/\b(True|False)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.groovy=Prism.languages.extend("clike",{keyword:/\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g,string:/("""|''')[\W\w]*?\1|("|'|\/)[\W\w]*?\2/g,number:/\b0b[01_]+\b|\b0x[\da-f_]+(\.[\da-f_p\-]+)?\b|\b[\d_]+(\.[\d_]+[e]?[\d]*)?[glidf]\b|[\d_]+(\.[\d_]+)?\b/gi,operator:/={0,2}~|\?\.|\*?\.@|\.&amp;|\.(?=\w)|\.{2}(&lt;)?(?=\w)|-&gt;|\?:|[-+]{1,2}|!|&lt;=&gt;|(&gt;){1,3}|(&lt;){1,2}|={1,2}|(&amp;){1,2}|\|{1,2}|\?|\*{1,2}|\/|\^|%/g,punctuation:/\.+|[{}[\];(),:$]/g,annotation:/@\w+/}),Prism.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(setup|given|when|then|and|cleanup|expect|where):/g}),Prism.hooks.add("wrap",function(t){if("groovy"===t.language&&"string"===t.type){var e=t.content[0];"'"!=e&&(t.content=Prism.highlight(t.content,{expression:{pattern:/([^\\])(\$(\{.*?\}|[\w\.]*))/,lookbehind:!0,inside:Prism.languages.groovy}}),t.classes.push("/"===e?"regex":"gstring"))}}),function(){$(function(){var t;return t=Modernizr.touch?"sticky-disabled":"sticky",$(document).foundation("topbar",{stickyClass:t,scrolltop:!1}),$(document).foundation("orbit",{timer_show_progress_bar:!1}),$(document).foundation("tooltips")})}.call(this),function(){}.call(this);