var accessToken;r1="./resource/25px-Refine1.png";r2="./resource/25px-Refine2.png";r3="./resource/25px-Refine3.png";r4="./resource/25px-Refine4.png";sublimate={s1:!1,s2:!1,s3:!1,s4:!1};nowType=0;nowRace=8;function get(c){return document.getElementById(c)}function m(c,b){return c>b?b:c}function mt(c){return get("output").getContext("2d").measureText(c)}
function addN(c){if(385>mt(c).width)return c;for(var b="",d="",e=0;e<c.length;e++)b+=c[e],384<mt(b).width&&("\n"!=c[e+1]&&(b+="\n"),d+=b,b="");return d+b}function ajaxCallJsonp(c,b){$.getJSON(c,b)}function times(c,b){a="";for(var d=0;d<b;d++)a+=c;return a}function changeType(){nowType=(nowType+1)%5;get("type").src="./resource/"+nowType.toString()+".png"}
function changeStar(c){1>c.value?c.value=1:12<c.value?c.value=12:isNaN(c.value)&&(c.value=1);get("star").innerHTML=times('<span class="star"></span>',c.value)+'<input onchange="changeStar(this)" id="numStar" min="1" max="12" type="number" value="'+c.value+'"/>'}
function raceChange(c){switch(c.value){case "\ufffd\ufffd\ufffd\ufffd":nowRace=0;break;case "\ufffd]\ufffd\ufffd":nowRace=1;break;case "\ufffdH\ufffd\ufffd":nowRace=2;break;case "\ufffds\ufffd\ufffd":nowRace=3;break;case "\ufffd~\ufffd\ufffd":nowRace=4;break;case "\ufffdi\ufffd\u01af\ufffd\ufffd\ufffd":nowRace=5;break;case "\ufffdj\ufffd\u01af\ufffd\ufffd\ufffd":nowRace=6;break;case "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd":nowRace=7;break;default:nowRace=8}get("imgRace").src="./resource/race_"+nowRace.toString()+
".png"}function changeSublimation(c){if(sublimate[c.id])for(c=eval(c.id.slice(1,2));4>=c;c++)get("s"+c.toString()).src="./resource/n.png",sublimate["s"+c.toString()]&&(sublimate["s"+c.toString()]=!sublimate["s"+c.toString()]);else for(var b=1;b<=eval(c.id.slice(1,2));b++)get("s"+b.toString()).src=eval("r"+b.toString()),sublimate["s"+b.toString()]||(sublimate["s"+b.toString()]=!sublimate["s"+b.toString()])}
function sendToImgur(){$.ajax({url:"https://api.imgur.com/3/image",headers:{Authorization:"Client-ID e51ef6bcc76b94e"},type:"POST",data:{image:get("output").toDataURL("image/png").replace("data:image/png;base64,","")},datatype:"JSON",success:function(c){ajaxCallJsonp("http://card.boxhost.me/index.php",{URL:c.data.link,format:"json"});$("#load").modal("hide");get("link").href=c.data.link;get("link").innerHTML=c.data.link;$("#udone").modal("show")}})}
function changeOpen(c){if(c.checked)get("optionSublimation").innerHTML='<img onclick="changeSublimation(this)" id="s1" height="20" width="20" style="position:relative;top:-2px;cursor:pointer;border: none;outline: none;" src="./resource/n.png"/><img onclick="changeSublimation(this)" id="s2" height="20" width="20" style="position:relative;left:7px;top:-2px;cursor:pointer;border: none;outline: none;" src="./resource/n.png"/><img onclick="changeSublimation(this)" id="s3" height="20" width="20" style="position:relative;left:14px;top:-2px;cursor:pointer;border: none;outline: none;" src="./resource/n.png"/><img onclick="changeSublimation(this)" id="s4" height="20" width="20" style="position:relative;left:21px;top:-2px;cursor:pointer;border: none;outline: none;" src="./resource/n.png"/><img src="./resource/h.png"/>';
else{for(c=1;4>=c;c++)sublimate["s"+c.toString()]=!1;get("optionSublimation").innerHTML='<img style="position:relative;left:-25px;z-index: 10;" id="cover" height="23" width="132" src="./resource/b.png"/>'}}var downloadURL=function(){console.log("\ufffdU\ufffd\ufffd");var c=get("output").toDataURL("image/png"),c="data:application/force-download;"+c.toString().slice(15,c.toString().length);get("a").href=c;get("a").download=get("name").value+".png";try{get("a").click()}catch(b){alert("\ufffd\ufffd\ufffdy\ufffd\ufffd\u076dn\ufffd\u06e6\ufffd\ufffd\ufffdk\ufffd\ufffdU\ufffd\ufffd")}};
function disableSelection(c){try{c.onselectstart=function(){return!1}}catch(b){try{c.style.MozUserSelect="none"}catch(d){c.onmousedown=function(){return!1}}}}
function readFile(c){get("imgLabel").setAttribute("for","");get("imgLabel").style.cursor="default";get("pla").innerHTML="";get("imgChoose").style.display="block";get("movableIMG").style.display="block";get("IMGleft").style.display="block";get("IMGright").style.display="block";get("IMGtop").style.display="block";get("IMGbuttom").style.display="block";get("IMGrt").style.display="block";get("IMGlt").style.display="block";get("IMGrb").style.display="block";get("IMGlb").style.display="block";var b=new FileReader;
b.onload=function(){get("img").height=327;get("img").width=405;get("img").style.top="73px";get("img").style.left="28px";get("movableIMG").style.height="327px";get("movableIMG").style.width="405px";get("movableIMG").style.top="-13px";get("movableIMG").style.left="5px";var c=new Image;c.src=b.result;c.onload=function(){c.width>c.height?(get("img").height=c.height/(c.width/405),get("movableIMG").style.height=get("img").height.toString()+"px",get("img").width=405):(get("img").height=327,get("img").width=
c.width/(c.height/327),get("movableIMG").style.width=get("img").width.toString()+"px");relo();get("img").src=b.result;get("img").style.display="block"}};try{b.readAsDataURL(c.files[0]),get("img").style.display="none"}catch(d){get("img").style.display="block"}}
function relo(){he=parseInt(get("movableIMG").style.height.slice(0,get("movableIMG").style.height.length-2));wi=parseInt(get("movableIMG").style.width.slice(0,get("movableIMG").style.width.length-2));t=parseInt(get("movableIMG").style.top.slice(0,get("movableIMG").style.top.length-2));le=parseInt(get("movableIMG").style.left.slice(0,get("movableIMG").style.left.length-2));get("IMGlt").style.top=(t-10).toString()+"px";get("IMGlt").style.left=(le-10).toString()+"px";get("IMGrt").style.left=(le+wi-10).toString()+
"px";get("IMGrt").style.top=(t-10).toString()+"px";get("IMGlb").style.top=(t+he-10).toString()+"px";get("IMGlb").style.left=(le-10).toString()+"px";get("IMGrb").style.left=(le+wi-10).toString()+"px";get("IMGrb").style.top=(t+he-10).toString()+"px";get("IMGleft").style.left=(le-10).toString()+"px";get("IMGleft").style.top=(t+he/2-10).toString()+"px";get("IMGright").style.left=(le+wi-10).toString()+"px";get("IMGright").style.top=(t+he/2-10).toString()+"px";get("IMGtop").style.left=(le+wi/2-10).toString()+
"px";get("IMGtop").style.top=(t-10).toString()+"px";get("IMGbuttom").style.left=(le+wi/2-10).toString()+"px";get("IMGbuttom").style.top=(t+he-10).toString()+"px"}function moveStart(c,b){disableSelection(document.body);get("imgChoose").style.display="none";tempX=b.pageX;tempY=b.pageY;c.setAttribute("onmousemove","move(this,event)");c.setAttribute("onmouseup","moveEnd(this,event)");c.setAttribute("onmouseleave","moveEnd(this,event)")}
function move(c,b){t=parseInt(get("movableIMG").style.top.slice(0,get("movableIMG").style.top.length-2));le=parseInt(get("movableIMG").style.left.slice(0,get("movableIMG").style.left.length-2));imgT=parseInt(get("img").style.top.slice(0,get("img").style.top.length-2));imgL=parseInt(get("img").style.left.slice(0,get("img").style.left.length-2));imgH=parseInt(get("img").height);imgW=parseInt(get("img").width);nowX=b.pageX;nowY=b.pageY;399>imgH+(imgT+(nowY-tempY))&&434>imgL+(nowX-tempX)+imgW&&72<imgT+
(nowY-tempY)&&27<imgL+(nowX-tempX)&&(c.style.left=(le+(nowX-tempX)).toString()+"px",get("img").style.left=(imgL+(nowX-tempX)).toString()+"px",c.style.top=(t+(nowY-tempY)).toString()+"px",get("img").style.top=(imgT+(nowY-tempY)).toString()+"px");relo();tempX=nowX;tempY=nowY}function moveEnd(c,b){c.setAttribute("onmousemove","");c.setAttribute("onmouseup","");c.setAttribute("onmouseleave","");get("imgChoose").style.display="block"}
function changeSizeStart(c,b){disableSelection(document.body);get("imgChoose").style.display="none";tempX=b.pageX;tempY=b.pageY;c.setAttribute("onmousemove",c.id.toLowerCase()+"(this,event)");c.setAttribute("onmouseup","moveEnd(this,event)");c.setAttribute("onmouseleave","moveEnd(this,event)")}
function imgtop(c,b){nowY=b.pageY;he=parseInt(get("movableIMG").style.height.slice(0,get("movableIMG").style.height.length-2));t=parseInt(get("movableIMG").style.top.slice(0,get("movableIMG").style.top.length-2));Imgt=parseInt(get("img").style.top.slice(0,get("img").style.top.length-2));Imgh=parseInt(get("img").height);72<Imgt+(nowY-tempY)&&(get("movableIMG").style.height=(he-(nowY-tempY)).toString()+"px",get("movableIMG").style.top=(t+(nowY-tempY)).toString()+"px",get("img").height=Imgh-(nowY-tempY),
get("img").style.top=(Imgt+(nowY-tempY)).toString()+"px");tempY=nowY;relo()}
function imglt(c,b){nowY=b.pageY;he=parseInt(get("movableIMG").style.height.slice(0,get("movableIMG").style.height.length-2));t=parseInt(get("movableIMG").style.top.slice(0,get("movableIMG").style.top.length-2));Imgt=parseInt(get("img").style.top.slice(0,get("img").style.top.length-2));Imgh=parseInt(get("img").height);72<Imgt+(nowY-tempY)&&(get("movableIMG").style.height=(he-(nowY-tempY)).toString()+"px",get("movableIMG").style.top=(t+(nowY-tempY)).toString()+"px",get("img").height=Imgh-(nowY-tempY),
get("img").style.top=(Imgt+(nowY-tempY)).toString()+"px");tempY=nowY;relo();nowX=b.pageX;w=parseInt(get("movableIMG").style.width.slice(0,get("movableIMG").style.width.length-2));l=parseInt(get("movableIMG").style.left.slice(0,get("movableIMG").style.left.length-2));Imgl=parseInt(get("img").style.left.slice(0,get("img").style.left.length-2));Imgw=parseInt(get("img").width);-1<Imgw-(nowX-tempX)&&27<Imgl+(nowX-tempX)&&(get("movableIMG").style.width=(w-(nowX-tempX)).toString()+"px",get("movableIMG").style.left=
(l+(nowX-tempX)).toString()+"px",get("img").width=Imgw-(nowX-tempX),get("img").style.left=(Imgl+(nowX-tempX)).toString()+"px");tempX=nowX;relo()}
function imgrt(c,b){nowY=b.pageY;he=parseInt(get("movableIMG").style.height.slice(0,get("movableIMG").style.height.length-2));t=parseInt(get("movableIMG").style.top.slice(0,get("movableIMG").style.top.length-2));Imgt=parseInt(get("img").style.top.slice(0,get("img").style.top.length-2));Imgh=parseInt(get("img").height);72<Imgt+(nowY-tempY)&&(get("movableIMG").style.height=(he-(nowY-tempY)).toString()+"px",get("movableIMG").style.top=(t+(nowY-tempY)).toString()+"px",get("img").height=Imgh-(nowY-tempY),
get("img").style.top=(Imgt+(nowY-tempY)).toString()+"px");tempY=nowY;relo();nowX=b.pageX;w=parseInt(get("movableIMG").style.width.slice(0,get("movableIMG").style.width.length-2));Imgw=parseInt(get("img").width);Imgl=parseInt(get("img").style.left.slice(0,get("img").style.left.length-2));-1<Imgw+(nowX-tempX)&&434>Imgl+(Imgw+(nowX-tempX))&&(get("movableIMG").style.width=(w+(nowX-tempX)).toString()+"px",get("img").width=Imgw+(nowX-tempX));tempX=nowX;relo()}
function imgleft(c,b){nowX=b.pageX;w=parseInt(get("movableIMG").style.width.slice(0,get("movableIMG").style.width.length-2));l=parseInt(get("movableIMG").style.left.slice(0,get("movableIMG").style.left.length-2));Imgl=parseInt(get("img").style.left.slice(0,get("img").style.left.length-2));Imgw=parseInt(get("img").width);-1<Imgw-(nowX-tempX)&&27<Imgl+(nowX-tempX)&&(get("movableIMG").style.width=(w-(nowX-tempX)).toString()+"px",get("movableIMG").style.left=(l+(nowX-tempX)).toString()+"px",get("img").width=
Imgw-(nowX-tempX),get("img").style.left=(Imgl+(nowX-tempX)).toString()+"px");tempX=nowX;relo()}function imgright(c,b){nowX=b.pageX;w=parseInt(get("movableIMG").style.width.slice(0,get("movableIMG").style.width.length-2));Imgw=parseInt(get("img").width);Imgl=parseInt(get("img").style.left.slice(0,get("img").style.left.length-2));-1<Imgw+(nowX-tempX)&&434>Imgl+(Imgw+(nowX-tempX))&&(get("movableIMG").style.width=(w+(nowX-tempX)).toString()+"px",get("img").width=Imgw+(nowX-tempX));tempX=nowX;relo()}
function imglb(c,b){nowX=b.pageX;w=parseInt(get("movableIMG").style.width.slice(0,get("movableIMG").style.width.length-2));l=parseInt(get("movableIMG").style.left.slice(0,get("movableIMG").style.left.length-2));Imgl=parseInt(get("img").style.left.slice(0,get("img").style.left.length-2));Imgw=parseInt(get("img").width);-1<Imgw-(nowX-tempX)&&27<Imgl+(nowX-tempX)&&(get("movableIMG").style.width=(w-(nowX-tempX)).toString()+"px",get("movableIMG").style.left=(l+(nowX-tempX)).toString()+"px",get("img").width=
Imgw-(nowX-tempX),get("img").style.left=(Imgl+(nowX-tempX)).toString()+"px");tempX=nowX;relo();nowY=b.pageY;he=parseInt(get("movableIMG").style.height.slice(0,get("movableIMG").style.height.length-2));Imgh=parseInt(get("img").height);Imgt=parseInt(get("img").style.top.slice(0,get("img").style.top.length-2));399>Imgh+(nowY-tempY)+Imgt&&(get("movableIMG").style.height=(he+(nowY-tempY)).toString()+"px",get("img").height=Imgh+(nowY-tempY));tempY=nowY;relo()}
function imgbuttom(c,b){nowY=b.pageY;he=parseInt(get("movableIMG").style.height.slice(0,get("movableIMG").style.height.length-2));Imgh=parseInt(get("img").height);Imgt=parseInt(get("img").style.top.slice(0,get("img").style.top.length-2));399>Imgh+(nowY-tempY)+Imgt&&(get("movableIMG").style.height=(he+(nowY-tempY)).toString()+"px",get("img").height=Imgh+(nowY-tempY));tempY=nowY;relo()}
function imgrb(c,b){nowX=b.pageX;w=parseInt(get("movableIMG").style.width.slice(0,get("movableIMG").style.width.length-2));Imgw=parseInt(get("img").width);Imgl=parseInt(get("img").style.left.slice(0,get("img").style.left.length-2));-1<Imgw+(nowX-tempX)&&434>Imgl+(Imgw+(nowX-tempX))&&(get("movableIMG").style.width=(w+(nowX-tempX)).toString()+"px",get("img").width=Imgw+(nowX-tempX));tempX=nowX;relo();nowY=b.pageY;he=parseInt(get("movableIMG").style.height.slice(0,get("movableIMG").style.height.length-
2));Imgh=parseInt(get("img").height);Imgt=parseInt(get("img").style.top.slice(0,get("img").style.top.length-2));399>Imgh+(nowY-tempY)+Imgt&&(get("movableIMG").style.height=(he+(nowY-tempY)).toString()+"px",get("img").height=Imgh+(nowY-tempY));tempY=nowY;relo()}
function draw(c){"u"==c?$("#load").modal("show"):"s"==c&&($("#sha").modal("hide"),$("#load").modal("show"));console.log("\ufffd\ufffdX\ufffd\ufffd");var b=get("output").getContext("2d");b.textAlign="left";b.fillStyle="black";b.font="";var d=new Image;d.onload=function(){lef=parseInt(get("img").style.left.slice(0,get("img").style.left.length-2));to=parseInt(get("img").style.top.slice(0,get("img").style.top.length-2));b.drawImage(d,-201,-1,887,499);b.drawImage(get("img"),lef,to,get("img").width,get("img").height);
var e=new Image;e.onload=function(){b.drawImage(e,0,0,455,682);b.drawImage(get("type"),10,8,73,73);b.font="bold 20px Arial";b.fillStyle="white";b.fillText(get("name").value,100,37);var d=new Image;d.onload=function(){for(var e=0;e<get("numStar").value;e++)b.drawImage(d,100+17*e,46,15,18);b.font="italic 32px Arial";b.textAlign="right";b.fillStyle="white";b.fillText(get("space").value,430,80);b.font="13px Arial";b.fillText(get("cd").value,355,580);"\ufffd\u0324j"==get("cdLv").value&&(b.fillStyle="#08D7CE");
b.fillText(get("cdLv").value,423,579);get("oup").src=get("output").toDataURL("image/png");console.log("\ufffd\ufffdX\ufffd\ufffd\ufffd\ufffd");"d"==c?downloadURL():"u"==c?sendToImgur():"s"==c&&shareToFB()};get("sublimation").checked?(b.drawImage(get("s1"),324,470,20,20),b.drawImage(get("s2"),351,470,20,20),b.drawImage(get("s3"),378,470,20,20),b.drawImage(get("s4"),405,470,20,20)):b.drawImage(get("cover"),300,470,132,23);b.font="15px Arial";b.textAlign="left";b.fillStyle="#E7E7E7";b.fillText(get("actName").value,
90,493);b.fillText(get("leaName").value,90,585);b.font="13px Arial";for(var f=0;f<m(get("actBody").value.toString().split("\n").length,3);f++)b.fillText(get("actBody").value.toString().split("\n")[f],31,519+16*f);for(f=0;f<m(get("leaBody").value.toString().split("\n").length,3);f++)b.fillText(get("leaBody").value.toString().split("\n")[f],33,611+16*f);b.drawImage(get("imgRace"),240,444,20,20);b.font="bold 19px Arial";b.textAlign="right";b.fillStyle="white";b.fillText(get("race").value,426,461);b.font=
"21px";b.fillText(get("atk").value,426,429);b.fillText(get("health").value,223,429);b.fillText(get("back").value,223,461);b.font="italic 32px arial";b.fillText(get("nowLv").value,97,397);get("nowLv").value==get("maxLv").value?(b.fillStyle="#08D7CE",b.font="bold italic 15px arial",b.fillText("\ufffd\u0324j",128,397)):(b.font="italic 15px arial",b.fillText("/",103,397),b.font="bold italic 15px arial",b.fillText(get("maxLv").value,123,397));get("oup").src=get("output").toDataURL("image/png");d.src="./resource/star.png"};
e.src="./resource/c.png"};d.src="./resource/card_background.jpg"}(function(c,b,d){var e=c.getElementsByTagName(b)[0];c.getElementById(d)||(c=c.createElement(b),c.id=d,c.src="//connect.facebook.net/en_US/sdk.js",e.parentNode.insertBefore(c,e))})(document,"script","facebook-jssdk");window.fbAsyncInit=function(){FB.init({appId:"791606320879048",status:!0,cookie:!0,xfbml:!0,oauth:!0,version:"v2.0"})};
function shareToFB(){FB.getLoginStatus(function(c){"connected"===c.status?(accessToken=c.authResponse.accessToken,init()):login()})}function login(){FB.login(function(c){c.authResponse?init():($("#load").modal("hide"),get("url").innerHTML="\ufffdn\ufffdJ\ufffd\ufffd\ufffd\ufffd",$("#sdone").modal("show"))},{scope:"public_profile,publish_actions"})}
function init(){var c="",b="";$.ajax({url:"https://api.imgur.com/3/image",headers:{Authorization:"Client-ID e51ef6bcc76b94e"},type:"POST",data:{image:get("output").toDataURL("image/png").replace("data:image/png;base64,","")},datatype:"JSON",success:function(d){b=d.data.link;c=d.data.deletehash;FB.api("/me/photos","post",{access_token:accessToken,message:get("pd").value,url:b},function(b){!b||b.error?($("#load").modal("hide"),get("url").innerHTML="\ufffd\ufffd\ufffd\u027f\ufffd~"):($("#load").modal("hide"),
get("url").innerHTML="https://www.facebook.com/photo.php?fbid="+b.id.toString(),get("url").href=get("url").innerHTML);$("#sdone").modal("show");$.ajax({url:"https://api.imgur.com/3/image/"+c,headers:{Authorization:"Client-ID e51ef6bcc76b94e"},type:"DELETE"})})}})};
