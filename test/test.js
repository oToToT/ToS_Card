	function get(a){
		return document.getElementById(a)
	}
	(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	window.fbAsyncInit = function() {
	    FB.init({
	    	appId: "791606320879048",
	    	status: true, 
	    	cookie: true, 
	    	xfbml: true, 
	    	oauth: true, 
	    	version: 'v2.0'
	    	}
		);
	}
	
	function shareToFB () {
		FB.getLoginStatus(function(response) {
		    if (response.status === 'connected') {
		        //已登入且和app連結
		        var uid = response.authResponse.accessToken;
		        accessToken = response.authResponse.accessToken;
		        userID = response.authResponse.userID;
		        init();
		    } else if (response.status === 'not_authorized') {
		        //已登入但未與app連結
		        login();
		    } else {
		        //未登入
		        login()
		    }
		});
	}
	function login() {
	    FB.login(function(response) {
	        if (response.authResponse) {
	            init()
	        }else{
	        	$("#load").modal("hide")
				get("url").innerHTML = "登入失敗"
				$("#sdone").modal("show")
	        }
	    }, { scope: 'public_profile,publish_actions' });
	}
	function init () {
		$("#sha").modal("hide")
		$("#load").modal("show")
		var link = ""
		var imgURL = ""
	    FB.api('/me/feed', 'post', {
	    	access_token: accessToken,
		   	message: get("pd").value,
			}, function(response){
		    if (!response || response.error) {
			    	$("#load").modal("hide")
			        get("url").innerHTML = "分享錯誤"
			        $("#sdone").modal("show")
			    } else {
			    	$("#load").modal("hide")
			    	console.log(response)
			        get("url").innerHTML = "https://www.facebook.com/"+userID.toString()+"/posts/"+response.id.toString().split("_")[1]
			        get("url").href = get("url").innerHTML
			        $("#sdone").modal("show")
			    }
			});
	}
