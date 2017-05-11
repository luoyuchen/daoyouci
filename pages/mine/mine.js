var app = getApp()
//var API_URL = "http://api.h6vr.com/wx/login";
Page({
    data: {
        userMes: {},
    },
 onLoad: function () {
       var that=this;
                wx.getUserInfo({//getUserInfo流程
                    success: function (userInfo) {//获取userinfo成功
                    //console.log(userInfo);
                    var userData=userInfo.userInfo;
                    //console.log(userData)
                    that.setData({userMes:userData})
                    //console.log(that)
                    
                }
            })
    
} 
})