//微信等陆
var wxObj=null;
var qqObj=null;
var sinaObj=null;
function wxlogin(){
	plus.oauth.getServices(function(services){
		//console.log(JSON.stringify(services));
		
		for(var k in services){
			if(services[k].id=='weixin'){
				wxObj=services[k];
			}
		}
		//console.log(wxObj);
		console.log(JSON.stringify(wxObj));
		
		if(wxObj==null){mui.toast('未获取到微信服务或者未安装微信');};
		
		wxObj.login(function(res){
			//console.log(JSON.stringify(res));
			console.log(JSON.stringify(wxObj));
			var unionid  = wxObj.authResult.unionid;
			var uface     = wxObj.userInfo.headimgurl;
			var uname    = wxObj.userInfo.nickname;
			
			mui.post('http://hoa.hcoder.net/index.php?c=members&m=addByWx',
			    {
					openid   : unionid,
					nickname : uname
				},function(data){
					console.log(JSON.stringify(data));
					//服务器传回获取数据
					var uid   = data.id;
					var urand = data.randnumber;
					
					//进行本地存储
					plus.storage.setItem("uid",uid+"");
					plus.storage.setItem("urand",urand+"");
					plus.storage.setItem("uface",uface);
					plus.storage.setItem("uname",uname);
					
					var sub4=plus.webview.getWebviewById("sub/sub4.html");
					sub4.evalJS("location.reload()");
					
					mui.toast('登录成功');
					mui.back();
					//console.log(goto);
					//console.log(typeof goto);
					/*var _index=plus.webview.getLaunchWebview();
					_index.evalJS("changeSub(3)");*/
				}
			);
			
		},function(e){
			mui.toast("获取微信登录认证失败---->"+e.message+"---->"+e.code);
		});
		
		
	},function(e){
		mui.toast("获取登录服务列表失败---->"+e.message+"---->"+e.code);
	})
}

//退出登录
/*function logOut(){
	plus.oauth.getServices(function(services){
		for(var k in services){
			if(services[k].id=='weixin'){
				wxObj=services[k];
			}
		}
		if(wxObj==null){mui.toast('未获取到微信服务或者未安装微信');};
		
		wxObj.logout(function(){
			plus.storage.removeItem('uid');
			plus.storage.removeItem('uname');
			plus.storage.removeItem('uface');
			plus.storage.removeItem('urand');
			
			
			mui.toast('退出成功');
			var _index=plus.webview.getLaunchWebview();
			_index.evalJS("changeSub(3);");
			var sub4=plus.webview.getWebviewById("sub/sub4.html");
			sub4.evalJS("location.reload()");
			sub4.evalJS('document.getElementById("face").src="../images/user-photo.png";');
			_index.evalJS('h("#navFooter").find("a").removeClass("mui-active");h("#sub4").addClass("mui-active");');
			
		},function(e){
			mui.toast(e.message+"---->"+e.code);
			console.log(e.message+"---->"+e.code);
		})
		
	},function(e){
		mui.toast("获取微信登录认证失败---->"+e.message+"---->"+e.code);
	})
}*/





/***********************************QQ登录*******************************************/
//QQ等陆
function qqlogin(){
	plus.oauth.getServices(function(services){
		//console.log(JSON.stringify(services));
		
		for(var k in services){
			if(services[k].id=='qq'){
				qqObj=services[k];
			}
		}
		//console.log(qqObj);
		console.log(JSON.stringify(qqObj));
		
		if(qqObj==null){mui.toast('未获取到微信服务或者未安装微信');};
		
		qqObj.login(function(res){
			//console.log(JSON.stringify(res));
			console.log(JSON.stringify(wxObj));
			var unionid  = qqObj.authResult.unionid;
			var uface     = qqObj.userInfo.headimgurl;
			var uname    = qqObj.userInfo.nickname;
			
			mui.post('http://hoa.hcoder.net/index.php?c=members&m=addByWx',
			    {
					openid   : unionid,
					nickname : uname
				},function(data){
					console.log(JSON.stringify(data));
					//服务器传回获取数据
					var uid   = data.id;
					var urand = data.randnumber;
					
					//进行本地存储
					plus.storage.setItem("uid",uid+"");
					plus.storage.setItem("urand",urand+"");
					plus.storage.setItem("uface",uface);
					plus.storage.setItem("uname",uname);
					
					var sub4=plus.webview.getWebviewById("sub/sub4.html");
					sub4.evalJS("location.reload()");
					
					mui.toast('登录成功');
					mui.back();
				}
			);
			
		},function(e){
			mui.toast("获取微信登录认证失败---->"+e.message+"---->"+e.code);
		});
		
		
	},function(e){
		mui.toast("获取登录服务列表失败---->"+e.message+"---->"+e.code);
	})
}

/***********************************sina登录*******************************************/
//sina等陆
function sinalogin(){
	plus.oauth.getServices(function(services){
		console.log(JSON.stringify(services));
		
		for(var k in services){
			if(services[k].id=='sinaweibo'){
				sinaObj=services[k];
			}
		}
		//console.log(qqObj);
		console.log(JSON.stringify(sinaObj));
		
		if(sinaObj==null){mui.toast('未获取到微博服务或者未安装微博');};
		
		sinaObj.login(function(res){
			//console.log(JSON.stringify(res));
			console.log(JSON.stringify(sinaObj));
			var unionid  = sinaObj.authResult.unionid;
			var uface     = sinaObj.userInfo.headimgurl;
			var uname    = sinaObj.userInfo.nickname;
			
			mui.post('http://hoa.hcoder.net/index.php?c=members&m=addByWx',
			    {
					openid   : unionid,
					nickname : uname
				},function(data){
					console.log(JSON.stringify(data));
					//服务器传回获取数据
					var uid   = data.id;
					var urand = data.randnumber;
					
					//进行本地存储
					plus.storage.setItem("uid",uid+"");
					plus.storage.setItem("urand",urand+"");
					plus.storage.setItem("uface",uface);
					plus.storage.setItem("uname",uname);
					
					var sub4=plus.webview.getWebviewById("sub/sub4.html");
					sub4.evalJS("location.reload()");
					
					mui.toast('登录成功');
					mui.back();
				}
			);
			
		},function(e){
			mui.toast("获取微信登录认证失败---->"+e.message+"---->"+e.code);
		});
		
		
	},function(e){
		mui.toast("获取登录服务列表失败---->"+e.message+"---->"+e.code);
	})
}

//退出登录
function logOut(){
	plus.oauth.getServices(function(services){
		for(var k in services){
			if(services[k].id=='weixin'){
				wxObj=services[k];
			}else if(services[k].id=='qq'){
				qqObj=services[k];
			}else if(services[k].id=='sina'){
				sinaObj=services[k];
			}
		}
		console.log(wxObj);
		console.log(qqObj);
		console.log(sinaObj);
		//if(wxObj==null){mui.toast('未获取到微信服务或者未安装微信');};
		
		wxObj.logout(function(){
			plus.storage.removeItem('uid');
			plus.storage.removeItem('uname');
			plus.storage.removeItem('uface');
			plus.storage.removeItem('urand');

			mui.toast('退出成功');
			var _index=plus.webview.getLaunchWebview();
			_index.evalJS("changeSub(3);");
			var sub4=plus.webview.getWebviewById("sub/sub4.html");
			sub4.evalJS("location.reload()");
			sub4.evalJS('document.getElementById("face").src="../images/user-photo.png";');
			_index.evalJS('h("#navFooter").find("a").removeClass("mui-active");h("#sub4").addClass("mui-active");');
			
		},function(e){
			mui.toast(e.message+"---->"+e.code);
			console.log(e.message+"---->"+e.code);
		});
		
		qqObj.logout(function(){
			plus.storage.removeItem('uid');
			plus.storage.removeItem('uname');
			plus.storage.removeItem('uface');
			plus.storage.removeItem('urand');

			mui.toast('退出成功');
			var _index=plus.webview.getLaunchWebview();
			_index.evalJS("changeSub(3);");
			var sub4=plus.webview.getWebviewById("sub/sub4.html");
			sub4.evalJS("location.reload()");
			sub4.evalJS('document.getElementById("face").src="../images/user-photo.png";');
			_index.evalJS('h("#navFooter").find("a").removeClass("mui-active");h("#sub4").addClass("mui-active");');
			
		},function(e){
			mui.toast(e.message+"---->"+e.code);
			console.log(e.message+"---->"+e.code);
		})
		
		sinaObj.logout(function(){
			plus.storage.removeItem('uid');
			plus.storage.removeItem('uname');
			plus.storage.removeItem('uface');
			plus.storage.removeItem('urand');

			mui.toast('退出成功');
			var _index=plus.webview.getLaunchWebview();
			_index.evalJS("changeSub(3);");
			var sub4=plus.webview.getWebviewById("sub/sub4.html");
			sub4.evalJS("location.reload()");
			sub4.evalJS('document.getElementById("face").src="../images/user-photo.png";');
			_index.evalJS('h("#navFooter").find("a").removeClass("mui-active");h("#sub4").addClass("mui-active");');
			
		},function(e){
			mui.toast(e.message+"---->"+e.code);
			console.log(e.message+"---->"+e.code);
		})
		
	},function(e){
		mui.toast("微信退出失败---->"+e.message+"---->"+e.code);
	})
}