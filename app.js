//app.js
App({
  globalData:{
    userInfo:null
  },
  getSubjectseTxt:function(subject){
    
  },
  detail:function(e){
    wx.navigateTo({
        url: '../detail/detail?id='+e.currentTarget.dataset.id
    })
  },
  //登录接口
  onLaunch: function() {
    wx.login({
      success: function(res) {
        wx.getUserInfo({
  success: function(res) {
    var userInfo = res.userInfo
    var nickName = userInfo.nickName
    var avatarUrl = userInfo.avatarUrl
    var gender = userInfo.gender //性别 0：未知、1：男、2：女 
    var province = userInfo.province
    var city = userInfo.city
    var country = userInfo.country
  }
})
        //console.log(res)
        if (res.code) {
          //发起网络请求
          /*wx.request({
            url: '',
            data: {
              code: res.code
            }
          })*/
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})