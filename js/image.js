	function readFile(t) {
		get("imgLabel").setAttribute("for","")
		get("imgLabel").innerHTML = '<div onmousedown="moveStart(this,event)" id="movableIMG" style="display:none;top: -13px; left: 5px;"></div><div class="control_box" onmousedown="changeSizeStart(this,event)" style="display:none;" id="IMGleft"></div><div class="control_box" onmousedown="changeSizeStart(this,event)" style="display:none;" id="IMGright"></div><div class="control_box" onmousedown="changeSizeStart(this,event)" style="display:none;" id="IMGtop"></div><div class="control_box" onmousedown="changeSizeStart(this,event)" style="display:none;" id="IMGbuttom"></div><div class="control_box" onmousedown="changeSizeStart(this,event)" style="display:none;" id="IMGlt"></div><div class="control_box" onmousedown="changeSizeStart(this,event)" style="display:none;" id="IMGrt"></div><div class="control_box" onmousedown="changeSizeStart(this,event)" style="display:none;" id="IMGlb"></div><div class="control_box" onmousedown="changeSizeStart(this,event)" style="display:none;" id="IMGrb"></div><label id="imgChoose" style="display: block; cursor: pointer; position: absolute; left: 350px; top: -111px;" for="file"><img height="50" src="./resource/caMERA1.png" onmouseout=\'this.src="./resource/caMERA1.png"\' onmouseover="this.src=\'./resource/caMERA2.png\'" width="50"></img></label>'
		get("imgLabel").style.cursor = "default"
		get("imgChoose").style.display = "block"
		get("movableIMG").style.display = "block"
		get("IMGleft").style.display = "block"
		get("IMGright").style.display = "block"
		get("IMGtop").style.display = "block"
		get("IMGbuttom").style.display = "block"
		get("IMGrt").style.display = "block"
		get("IMGlt").style.display = "block"
		get("IMGrb").style.display = "block"
		get("IMGlb").style.display = "block"
	    var fr = new FileReader;
	    fr.onload = function() {
	    	get("img").height = 327
	    	get("img").width = 405
	    	get("img").style.top = "73px"
	    	get("img").style.left = "28px"
	    	get("movableIMG").style.height = "327px"
	    	get("movableIMG").style.width = "405px"
	    	get("movableIMG").style.top = "-13px"
	    	get("movableIMG").style.left = "5px"
	    	var Img = new Image()
	    	Img.src = fr.result
	    	Img.onload = function(){
		    	if(Img.width > Img.height){
		    		get("img").height = Img.height/(Img.width/405)
		    		get("movableIMG").style.height = get("img").height.toString() + "px"
		    		get("img").width = 405
		    	}else{
		    		get("img").height = 327
		    		get("img").width = Img.width/(Img.height/327)
		    		get("movableIMG").style.width = get("img").width.toString() + "px"
		    	}
		    	relo()
				get("img").src = fr.result;
				get("img").style.display = "block"
		    }
	    }
	    try{
	    	fr.readAsDataURL(t.files[0]);
	    	get("img").style.display = "none"
	    }catch(e){
			get("img").style.display = "block"
	    }
	}
	function relo () {
		he = parseInt(get("movableIMG").style.height.slice(0,((get("movableIMG").style.height.length)-2)))
	    wi = parseInt(get("movableIMG").style.width.slice(0,((get("movableIMG").style.width.length)-2)))
	    t = parseInt(get("movableIMG").style.top.slice(0,((get("movableIMG").style.top.length)-2)))
	    le = parseInt(get("movableIMG").style.left.slice(0,((get("movableIMG").style.left.length)-2)))
	    get("IMGlt").style.top = (t-10).toString()+"px"
	    get("IMGlt").style.left = (le-10).toString()+"px"
	    get("IMGrt").style.left = (le+wi-10).toString()+"px"
	    get("IMGrt").style.top = (t-10).toString()+"px"
	    get("IMGlb").style.top = (t+he-10).toString()+"px"
	    get("IMGlb").style.left = (le-10).toString()+"px"
	    get("IMGrb").style.left = (le+wi-10).toString()+"px"
	    get("IMGrb").style.top = (t+he-10).toString()+"px"
	    get("IMGleft").style.left = (le-10).toString()+"px"
	    get("IMGleft").style.top = (t+(he/2)-10).toString()+"px"
	    get("IMGright").style.left = (le+wi-10).toString()+"px"
	    get("IMGright").style.top = (t+(he/2)-10).toString()+"px"
	    get("IMGtop").style.left = (le+(wi/2)-10).toString()+"px"
	    get("IMGtop").style.top = (t-10).toString()+"px"
	    get("IMGbuttom").style.left = (le+(wi/2)-10).toString()+"px"
	    get("IMGbuttom").style.top = (t+he-10).toString()+"px"
	}
	function moveStart (th,e) {
		get("imgChoose").style.display = "none"
		tempX = e.pageX
		tempY = e.pageY
		th.setAttribute("onmousemove" , "move(this,event)")
		th.setAttribute("onmouseup" , "moveEnd(this,event)")
		th.setAttribute("onmouseout" , "moveEnd(this,event)")
	}
	function move (th,e) {
	    t = parseInt(get("movableIMG").style.top.slice(0,((get("movableIMG").style.top.length)-2)))
	    le = parseInt(get("movableIMG").style.left.slice(0,((get("movableIMG").style.left.length)-2)))
	    imgT = parseInt(get("img").style.top.slice(0,((get("img").style.top.length)-2)))
	    imgL = parseInt(get("img").style.left.slice(0,((get("img").style.left.length)-2)))
	    imgH = parseInt(get("img").height)
	    imgW = parseInt(get("img").width)
		nowX = e.pageX
		nowY = e.pageY
		if(imgH+(imgT+(nowY - tempY))<399&&(imgL+(nowX - tempX))+imgW<434&&(imgT+(nowY - tempY))>72&&(imgL+(nowX - tempX))>27){
			th.style.left = (le+(nowX - tempX)).toString() + "px"
			get("img").style.left = (imgL+(nowX - tempX)).toString() + "px"
			th.style.top = (t+(nowY - tempY)).toString() + "px"
			get("img").style.top = (imgT+(nowY - tempY)).toString() + "px"
		}
		relo()
		tempX = nowX
		tempY = nowY
	}
	function moveEnd (th,e){
		th.setAttribute("onmousemove" , "")
		th.setAttribute("onmouseup" , "")
		th.setAttribute("onmouseout" , "")
		get("imgChoose").style.display = "block"
	}
	function changeSizeStart(th,e){
		get("imgChoose").style.display = "none"
		tempX = e.pageX
		tempY = e.pageY
		th.setAttribute("onmousemove" , th.id.toLowerCase()+"(this,event)")
		th.setAttribute("onmouseup" , "moveEnd(this,event)")
		th.setAttribute("onmouseout" , "moveEnd(this,event)")
	}
	function imgtop (th,e) {
		nowY = e.pageY
		he = parseInt(get("movableIMG").style.height.slice(0,((get("movableIMG").style.height.length)-2)))
		t = parseInt(get("movableIMG").style.top.slice(0,((get("movableIMG").style.top.length)-2)))
		Imgt = parseInt(get("img").style.top.slice(0,((get("img").style.top.length)-2)))
		Imgh = parseInt(get("img").height)
		if((Imgt+(nowY - tempY))>72){
		    get("movableIMG").style.height = (he-(nowY - tempY)).toString() + "px"
		    get("movableIMG").style.top = (t+(nowY - tempY)).toString() + "px"
		    get("img").height = (Imgh-(nowY - tempY))
		    get("img").style.top = (Imgt+(nowY - tempY)).toString() + "px"
		}
	    tempY = nowY
	    relo()
	}
	function imglt (th,e) {
		nowY = e.pageY
		he = parseInt(get("movableIMG").style.height.slice(0,((get("movableIMG").style.height.length)-2)))
		t = parseInt(get("movableIMG").style.top.slice(0,((get("movableIMG").style.top.length)-2)))
		Imgt = parseInt(get("img").style.top.slice(0,((get("img").style.top.length)-2)))
		Imgh = parseInt(get("img").height)
		if((Imgt+(nowY - tempY))>72){
		    get("movableIMG").style.height = (he-(nowY - tempY)).toString() + "px"
		    get("movableIMG").style.top = (t+(nowY - tempY)).toString() + "px"
		    get("img").height = (Imgh-(nowY - tempY))
		    get("img").style.top = (Imgt+(nowY - tempY)).toString() + "px"
		}
	    tempY = nowY
	    relo()
		nowX = e.pageX
		w = parseInt(get("movableIMG").style.width.slice(0,((get("movableIMG").style.width.length)-2)))
		l = parseInt(get("movableIMG").style.left.slice(0,((get("movableIMG").style.left.length)-2)))
		Imgl = parseInt(get("img").style.left.slice(0,((get("img").style.left.length)-2)))
		Imgw = parseInt(get("img").width)
		if(Imgw-(nowX - tempX) > -1&&(Imgl+(nowX - tempX))>27){
		    get("movableIMG").style.width = (w-(nowX - tempX)).toString() + "px"
		    get("movableIMG").style.left = (l+(nowX - tempX)).toString() + "px"
		    get("img").width = (Imgw-(nowX - tempX))
		    get("img").style.left = (Imgl+(nowX - tempX)).toString() + "px"
		}
	    tempX = nowX
	    relo()
	}
	function imgrt (th,e) {
		nowY = e.pageY
		he = parseInt(get("movableIMG").style.height.slice(0,((get("movableIMG").style.height.length)-2)))
		t = parseInt(get("movableIMG").style.top.slice(0,((get("movableIMG").style.top.length)-2)))
		Imgt = parseInt(get("img").style.top.slice(0,((get("img").style.top.length)-2)))
		Imgh = parseInt(get("img").height)
		if((Imgt+(nowY - tempY))>72){
		    get("movableIMG").style.height = (he-(nowY - tempY)).toString() + "px"
		    get("movableIMG").style.top = (t+(nowY - tempY)).toString() + "px"
		    get("img").height = (Imgh-(nowY - tempY))
		    get("img").style.top = (Imgt+(nowY - tempY)).toString() + "px"
		}
	    tempY = nowY
	    relo()
		nowX = e.pageX
		w = parseInt(get("movableIMG").style.width.slice(0,((get("movableIMG").style.width.length)-2)))
		Imgw = parseInt(get("img").width)
		Imgl = parseInt(get("img").style.left.slice(0,((get("img").style.left.length)-2)))
		if((Imgw+(nowX - tempX))>-1&&Imgl+(Imgw+(nowX - tempX))<434){
			get("movableIMG").style.width = (w+(nowX - tempX)).toString() + "px"
			get("img").width = (Imgw+(nowX - tempX))
		}
		tempX = nowX
		relo()
	}
	function imgleft (th,e) {
		nowX = e.pageX
		w = parseInt(get("movableIMG").style.width.slice(0,((get("movableIMG").style.width.length)-2)))
		l = parseInt(get("movableIMG").style.left.slice(0,((get("movableIMG").style.left.length)-2)))
		Imgl = parseInt(get("img").style.left.slice(0,((get("img").style.left.length)-2)))
		Imgw = parseInt(get("img").width)
		if(Imgw-(nowX - tempX) > -1&&(Imgl+(nowX - tempX))>27){
		    get("movableIMG").style.width = (w-(nowX - tempX)).toString() + "px"
		    get("movableIMG").style.left = (l+(nowX - tempX)).toString() + "px"
		    get("img").width = (Imgw-(nowX - tempX))
		    get("img").style.left = (Imgl+(nowX - tempX)).toString() + "px"
		}
	    tempX = nowX
	    relo()
	}
	function imgright (th,e) {
		nowX = e.pageX
		w = parseInt(get("movableIMG").style.width.slice(0,((get("movableIMG").style.width.length)-2)))
		Imgw = parseInt(get("img").width)
		Imgl = parseInt(get("img").style.left.slice(0,((get("img").style.left.length)-2)))
		if((Imgw+(nowX - tempX))>-1&&Imgl+(Imgw+(nowX - tempX))<434){
			get("movableIMG").style.width = (w+(nowX - tempX)).toString() + "px"
			get("img").width = (Imgw+(nowX - tempX))
		}
		tempX = nowX
		relo()

	}
	function imglb (th,e) {
		nowX = e.pageX
		w = parseInt(get("movableIMG").style.width.slice(0,((get("movableIMG").style.width.length)-2)))
		l = parseInt(get("movableIMG").style.left.slice(0,((get("movableIMG").style.left.length)-2)))
		Imgl = parseInt(get("img").style.left.slice(0,((get("img").style.left.length)-2)))
		Imgw = parseInt(get("img").width)
		if(Imgw-(nowX - tempX) > -1&&(Imgl+(nowX - tempX))>27){
		    get("movableIMG").style.width = (w-(nowX - tempX)).toString() + "px"
		    get("movableIMG").style.left = (l+(nowX - tempX)).toString() + "px"
		    get("img").width = (Imgw-(nowX - tempX))
		    get("img").style.left = (Imgl+(nowX - tempX)).toString() + "px"
		}
	    tempX = nowX
	    relo()
		nowY = e.pageY
		he = parseInt(get("movableIMG").style.height.slice(0,((get("movableIMG").style.height.length)-2)))
		Imgh = parseInt(get("img").height)
		Imgt = parseInt(get("img").style.top.slice(0,((get("img").style.top.length)-2)))
		if((Imgh+(nowY - tempY))+Imgt<399){
			get("movableIMG").style.height = (he+(nowY - tempY)).toString() + "px"
			get("img").height = (Imgh+(nowY - tempY))
		}
		tempY = nowY
		relo()
	}
	function imgbuttom (th,e) {
		nowY = e.pageY
		he = parseInt(get("movableIMG").style.height.slice(0,((get("movableIMG").style.height.length)-2)))
		Imgh = parseInt(get("img").height)
		Imgt = parseInt(get("img").style.top.slice(0,((get("img").style.top.length)-2)))
		if((Imgh+(nowY - tempY))+Imgt<399){
			get("movableIMG").style.height = (he+(nowY - tempY)).toString() + "px"
			get("img").height = (Imgh+(nowY - tempY))
		}
		tempY = nowY
		relo()
	}
	function imgrb (th,e) {
		nowX = e.pageX
		w = parseInt(get("movableIMG").style.width.slice(0,((get("movableIMG").style.width.length)-2)))
		Imgw = parseInt(get("img").width)
		Imgl = parseInt(get("img").style.left.slice(0,((get("img").style.left.length)-2)))
		if((Imgw+(nowX - tempX))>-1&&Imgl+(Imgw+(nowX - tempX))<434){
			get("movableIMG").style.width = (w+(nowX - tempX)).toString() + "px"
			get("img").width = (Imgw+(nowX - tempX))
		}
		tempX = nowX
		relo()
		nowY = e.pageY
		he = parseInt(get("movableIMG").style.height.slice(0,((get("movableIMG").style.height.length)-2)))
		Imgh = parseInt(get("img").height)
		Imgt = parseInt(get("img").style.top.slice(0,((get("img").style.top.length)-2)))
		if((Imgh+(nowY - tempY))+Imgt<399){
			get("movableIMG").style.height = (he+(nowY - tempY)).toString() + "px"
			get("img").height = (Imgh+(nowY - tempY))
		}
		tempY = nowY
		relo()
	}
	function draw (d) {
		if(d=="u"){
			$("#load").modal("show")
		}else if(d=='s'){
			$("#sha").modal("hide")
			$("#load").modal("show")
		}
		console.log("輸出中")
		var ctx = get("output").getContext('2d');
		ctx.textAlign = "left"
		ctx.fillStyle = "black"
		ctx.font = ""
		var bg = new Image();
		bg.onload = function() {
			lef = parseInt(get("img").style.left.slice(0,((get("img").style.left.length)-2)))
			to = parseInt(get("img").style.top.slice(0,((get("img").style.top.length)-2)))
		    ctx.drawImage(bg,-201,-1,887,499);
			ctx.drawImage(get("img"),lef,to,get("img").width,get("img").height);
			var bd = new Image()
			bd.onload = function () {
				ctx.drawImage(bd,0,0,455,682)
				ctx.drawImage(get("type"),10,8,73,73)
				ctx.font = "bold 20px Arial";
				ctx.fillStyle = "white"
				ctx.fillText(get("name").value,100,37)
				var s = new Image();
				s.onload = function (){
					for (var i = 0; i < get("numStar").value; i++) {
						ctx.drawImage(s,100+(i*17),46,15,18)
					};
					ctx.font = "italic 32px Arial";
					ctx.textAlign="right"
					ctx.fillStyle = "white"
					ctx.fillText(get("space").value,430,80)
					ctx.font = "13px Arial"
					ctx.fillText(get("cd").value,355,580)
					if(get("cdLv").value == "最大")
						ctx.fillStyle = "#08D7CE"
					ctx.fillText(get("cdLv").value,423,579)
					get("oup").src = get("output").toDataURL("image/png")
					console.log("輸出完成")
					if(d=="d")
						downloadURL()
					else if(d=="u")
						sendToImgur()
					else if(d == "s")

						shareToFB()
				}
				if(get("sublimation").checked){
					ctx.drawImage(get("s1"),324,470,20,20)
					ctx.drawImage(get("s2"),351,470,20,20)
					ctx.drawImage(get("s3"),378,470,20,20)
					ctx.drawImage(get("s4"),405,470,20,20)
				}else{
					ctx.drawImage(get("cover"),300,470,132,23)
				}
				ctx.font = "15px Arial";
				ctx.textAlign="left"
				ctx.fillStyle = "#E7E7E7"
				ctx.fillText(get("actName").value,90,493)
				ctx.fillText(get("leaName").value,90,585)
				ctx.font = "13px Arial";
				for (var i = 0; i < m(get("actBody").value.toString().split("\n").length,3); i++) {
					ctx.fillText(get("actBody").value.toString().split("\n")[i],31,519+(i*16))
				};
				for (var i = 0; i < m(get("leaBody").value.toString().split("\n").length,3); i++) {
					ctx.fillText(get("leaBody").value.toString().split("\n")[i],33,611+(i*16))
				};
				ctx.drawImage(get("imgRace"),240,444,20,20)
				ctx.font = "bold 19px Arial";
				ctx.textAlign="right"
				ctx.fillStyle = "white"
				ctx.fillText(get("race").value,426,461)
				ctx.font = "21px"
				ctx.fillText(get("atk").value,426,429)
				ctx.fillText(get("health").value,223,429)
				ctx.fillText(get("back").value,223,461)
				ctx.font = "italic 32px arial"
				ctx.fillText(get("nowLv").value,97,397)
				if(get("nowLv").value == get("maxLv").value){
					ctx.fillStyle = "#08D7CE"
					ctx.font = "bold italic 15px arial"
					ctx.fillText("最大",128,397)
				}else{
					ctx.font = "italic 15px arial"
					ctx.fillText("/",103,397)
					ctx.font = "bold italic 15px arial"
					ctx.fillText(get("maxLv").value,123,397)
				}
				get("oup").src = get("output").toDataURL("image/png")
				s.src = "./resource/star.png"
			}
			bd.src = "./resource/c.png"
		};
		bg.src = "./resource/card_background.jpg";
	}