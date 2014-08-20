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
		var link = ""
		var imgURL = ""
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
	    	imgURL = req.data.link
	    	link = req.data.deletehash
	    	FB.api('/me/photos', 'post', {
	    		access_token: accessToken,
		    	message: get("pd").value,
		   		url:imgURL        
				}, function(response){
				    if (!response || response.error) {
				    	$("#load").modal("hide")
				        get("url").innerHTML = "分享錯誤"
				        $("#sdone").modal("show")
				        $.ajax({ 
			    			url: 'https://api.imgur.com/3/image/'+link,
			    			headers: {
			        			'Authorization': 'Client-ID e51ef6bcc76b94e'
			    			},	
			    			type: 'DELETE',
						});
				    } else {
				    	$("#load").modal("hide")
				        get("url").innerHTML = "https://www.facebook.com/photo.php?fbid="+response.id.toString()
				        get("url").href = get("url").innerHTML
				        $("#sdone").modal("show")
				        $.ajax({ 
			    			url: 'https://api.imgur.com/3/image/'+link,
			    			headers: {
			        			'Authorization': 'Client-ID e51ef6bcc76b94e'
			    			},	
			    			type: 'DELETE',
							});
				    }

				});
			}
		});
	}