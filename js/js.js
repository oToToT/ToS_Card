	var accessToken;
	r1 = "./resource/25px-Refine1.png";
	r2 = "./resource/25px-Refine2.png";
	r3 = "./resource/25px-Refine3.png";
	r4 = "./resource/25px-Refine4.png";
	sublimate = {
		"s1": false,
		"s2": false,
		"s3": false,
		"s4": false
	};
	nowType = 0;
	nowRace = 8;
	function get(s){
		return document.getElementById(s)
	}
	
	function m(a,b){
		if(a>b)
			return b;
		else 
			return a
	}
	function mt (a) {
		return get("output").getContext("2d").measureText(a)
	}
	function addN (s) {
		if(mt(s).width<385)
			return s
		var temp = ""
		var a = ""
		for (var i = 0; i < s.length; i++) {
			temp += s[i];
			if(mt(temp).width > 384){
				if(s[i+1]!="\n")
					temp+="\n"
				a += temp
				temp = "" 
			}
		};
		a+=temp
		return a
	}
	function ajaxCallJsonp(target,options){
	    var data = $.getJSON(target,options);
	}
	function times(s,n){
		a = ""
		for(var i = 0;i<n;i++){
			a+=s
		}
		return a
	}
	function changeType(){
		nowType = (nowType+1)%5
		get("type").src = "./resource/"+nowType.toString()+".png"
	}
	function changeStar (t) {
		if(t.value<1){
			t.value = 1
		}else if(t.value > 12 ){
			t.value = 12
		}else if(isNaN(t.value)){
			t.value = 1
		}
		get("star").innerHTML = times('<span class="star"></span>',t.value)+'<input onchange="changeStar(this)" id="numStar" min="1" max="12" type="number" value="'+t.value+'"/>'
	}
	function raceChange (t) {
		switch(t.value){
			case "神族":
				nowRace = 0;
				break;
			case "魔族":
				nowRace = 1;
				break;
			case "人類":
				nowRace = 2;
				break;
			case "龍類":
				nowRace = 3;
				break;
			case "獸類":
				nowRace = 4;
				break;
			case "進化素材":
				nowRace = 5;
				break;
			case "強化素材":
				nowRace = 6;
				break;
			case "妖精類":
				nowRace = 7;
				break;
			default:
				nowRace = 8;
				break;
		}
	get("imgRace").src = "./resource/race_" + nowRace.toString() + ".png"
	}
	function changeSublimation (t) {
		if(!sublimate[t.id]){
			for (var a = 1; a <= eval(t.id.slice(1,2)); a++ ){
				get("s"+a.toString()).src = eval("r"+a.toString());
				if(!sublimate["s"+a.toString()])
					sublimate["s"+a.toString()] = !sublimate["s"+a.toString()]
			};
			
		}
		else{
			for (var i = eval(t.id.slice(1,2)); i <= 4 ; i++) {
				get("s"+i.toString()).src = "./resource/n.png";
				if(sublimate["s"+i.toString()])
					sublimate["s"+i.toString()] = !sublimate["s"+i.toString()]
			};
		}
	}
	function sendToImgur () {
		$.ajax({ 
	    url: 'https://api.imgur.com/3/image',
	    headers: {
	        'Authorization': 'Client-ID e51ef6bcc76b94e'
	    },
	    type: 'POST',
	    data: {
	        'image': get("output").toDataURL("image/png").replace("data:image/png;base64,","")
	    },
	    datatype: 'JSON',
	    success: function(req) {
	    	var options = {
	            URL: req.data.link,
	            format: "json"
	        };
	        ajaxCallJsonp("http://card.boxhost.me/index.php",options);
	    	$("#load").modal("hide")
	    	get("link").href = req.data.link
	    	get("link").innerHTML = req.data.link
	    	$("#udone").modal("show")
	    }
		});
	}	
	function changeOpen (t) {
		if(t.checked){
			get("optionSublimation").innerHTML = '<img onclick="changeSublimation(this)" id="s1" height="20" width="20" style="position:relative;top:-2px;cursor:pointer;border: none;outline: none;" src="./resource/n.png"/><img onclick="changeSublimation(this)" id="s2" height="20" width="20" style="position:relative;left:7px;top:-2px;cursor:pointer;border: none;outline: none;" src="./resource/n.png"/><img onclick="changeSublimation(this)" id="s3" height="20" width="20" style="position:relative;left:14px;top:-2px;cursor:pointer;border: none;outline: none;" src="./resource/n.png"/><img onclick="changeSublimation(this)" id="s4" height="20" width="20" style="position:relative;left:21px;top:-2px;cursor:pointer;border: none;outline: none;" src="./resource/n.png"/><img src="./resource/h.png"/>'
		}else{
			for(var i = 1;i<=4;i++)
				sublimate["s"+i.toString()] = false
			get("optionSublimation").innerHTML = '<img style="position:relative;left:-25px;z-index: 10;" id="cover" height="23" width="132" src="./resource/b.png"/>'
		}
	}
	var downloadURL = function downloadURL() {
		console.log("下載中")
		var url = get("output").toDataURL("image/png")
		var last = "data:application/force-download;" + url.toString().slice(15,url.toString().length)
		get("a").href = last
		get("a").download = get("name").value+".png"
		try{
			get("a").click()
		}catch(e){
			alert("此流覽器需要自行按右鍵下載")
		}
	}
	function disableSelection(target){
		try{
			target.onselectstart=function(){return false}
		}catch(e){
			try{
				target.style.MozUserSelect="none"
			}catch(e){
				target.onmousedown=function(){return false}
			}
		}
			
	}