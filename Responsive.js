//<![CDATA[

window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"?",u=n.label||"القائمة",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();$(document).ready(function(){selectnav('nav');selectnav('nav1');selectnav('nav3');});

$(".post").each(function(){
var e = $(this);
e.find(".post-meta").appendTo( e.find(".post-info") );

});
$(function() {
        "use strict";
        $("#postAD-top")["append"]($("#HTML201"));
        $("#postAD-bottom")["append"]($("#HTML203"));
        var _0x8468x0 = Math["floor"]($(".post-body *")["length"] / 2);
        $(".post-body *:eq(" + _0x8468x0 + ")")["after"]($("#HTML202"));
       
});
    var container = $('.search-wrapper');
    $( '.toggle-search' ).on( 'click', function( event ) {
        $('.search-overlay').toggleClass( 'open' );
         $('.site').toggleClass( 'open' );
        container.addClass('active');

    });

    $( '.close' ).on( 'click', function( event ) {
        $('.search-overlay').removeClass( 'open' );
        $('.site').removeClass( 'open' );
        container.removeClass('active');

    });
function labelthumbs(t){for(var e=0;e<numposts;e++){var n,r=t.feed.entry[e],m=r.title.$t;if(e==t.feed.entry.length)break;for(var i=0;i<r.link.length;i++){if("replies"==r.link[i].rel&&"text/html"==r.link[i].type)var l=r.link[i].title,o=r.link[i].href;if("alternate"==r.link[i].rel){n=r.link[i].href;break}}var u;try{u=r.media$thumbnail.url,u=u.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")}catch(h){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb}var p=r.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10),g=new Array;g[1]="يناير",g[2]="فبراير",g[3]="مارس",g[4]="أبريل",g[5]="ماي",g[6]="يونيو",g[7]="يوليوز",g[8]="غشت",g[9]="شتنبر",g[10]="أكتوبر",g[11]="نونبر",g[12]="دجنبر",document.write('<span class="blanter_right">'),document.write('<ul class="blanter_thumbs">'),document.write("<li>"),1==showpostthumbnails&&document.write('<a href="'+n+'"><div class="cat_thumb"><span class="rollover"></span><img width="'+thumb_width+'" height="'+thumb_height+'" alt="'+m+'" src="'+u+'"/></div></a>'),document.write('<span class="blanter_title"><a href="'+n+'" target ="_top">'+m+"</a></span>");var v="";if(document.write('<span class="blanter_meta">'),1==showpostdate&&(v=v+'<span class="blanter_meta_date">'+g[parseInt(_)]+" "+f+", "+w+"</span>"),1==showcommentnum&&("1 Comments"==l&&(l="1 Comments"),"0 Comments"==l&&(l="0 Comments"),showcomment='<span class="blanter_meta_comment"><a href="'+o+'">'+l+"</a></span>",v+=showcomment),1==displaymore&&(v=v+'<span class="blanter_meta_more"><a href="'+n+'" class="url" target ="_top">Read More...</a></span>'),document.write(v),document.write("</span>"),document.write('<span class="blanter_summary">'),"content"in r)var y=r.content.$t;else if("summary"in r)var y=r.summary.$t;else var y="";var k=/<\S[^>]*>/g;if(y=y.replace(k,""),1==showpostsummary)if(y.length<numchars)document.write(""),document.write(y),document.write("");else{document.write(""),y=y.substring(0,numchars);var $=y.lastIndexOf(" ");y=y.substring(0,$),document.write(y+"..."),document.write("")}document.write("</span>"),document.write("</li>"),document.write("</ul>"),document.write("</span>")}document.write('<span class="blanter_left">'),document.write('<ul class="blanter_thumbs2">');for(var e=1;e<numposts2;e++){var n,r=t.feed.entry[e],m=r.title.$t;if(e==t.feed.entry.length)break;for(var i=1;i<r.link.length;i++){if("replies"==r.link[i].rel&&"text/html"==r.link[i].type)var l=r.link[i].title,o=r.link[i].href;if("alternate"==r.link[i].rel){n=r.link[i].href;break}}var x;try{x=r.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")}catch(h){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),x=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb2}var p=r.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10);1==showpostthumbnails2&&document.write('<a href="'+n+'"><div class="cat_thumb2"><img width="'+thumb_width2+'" height="'+thumb_height2+'" alt="'+m+'" src="'+x+'"/></div></a>'),document.write("<li>"),document.write('<span class="blanter_title blanter_title2"><a href="'+n+'" target ="_top">'+m+"</a></span>");var v="";document.write('<span class="blanter_meta blanter_meta2">'),1==showpostdate2&&(v=v+'<span class="blanter_meta_date">'+g[parseInt(_)]+" "+f+", "+w+"</span>"),1==showcommentnum2&&("1 Comment"==l&&(l="1 Comments"),"0 Comment"==l&&(l="0 Comments"),showcomment='<span class="blanter_meta_comment blanter_meta_comment2"><a href="'+o+'">'+l+"</a></span>",v+=showcomment),1==displaymore2&&(v=v+'<span class="blanter_meta_more blanter_meta_more2"><a href="'+n+'" class="url" target ="_top">Read More...</a></span>'),document.write(v),document.write("</span>"),document.write("</li>")}document.write("</ul>"),document.write("</span>")}

var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();function related_results_labels(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++;break;}}}}
function removeRelatedDuplicates(){var tmp=new Array(0);var tmp2=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];}}
relatedTitles=tmp2;relatedUrls=tmp;}
function contains(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false;}
function printRelatedLabels(){var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;document.write('<ul>');while(i<relatedTitles.length&&i<20){document.write('<li><a href="'+relatedUrls[r]+'">'+relatedTitles[r]+'</a></li>');if(r<relatedTitles.length-1){r++;}else{r=0;}
i++;}
document.write('</ul>');document.write('<a href="" target="_blank"><font size="1" color="black"></font></a>');}
//]]>
