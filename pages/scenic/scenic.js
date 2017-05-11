//index.js
var app = getApp();
Page({
  data: {
    movies:[],
    banners:['../../images/lvxingji.jpg','../../images/daoyouci.jpg','../../images/shijiezhimei.jpg','../../images/xue.jpg'],
    dots:true,
    autoplay:true,//是否自动播放
    text:"",
    gtext:"",
    isShow:false,
    gShow:false,
    interval:5000, //自动播放间隔
    hots:[]
  },
   
 
  detail:function(e){
    app.detail(e);
  },
  onPullDownRefresh:function(){
    this.setData({
      loading:false
    });
    this.getMovies();
  },
  btnClick:function(){
    //var text=this.data.text
    //this.setData({text:"新文字"})
    var that=this
    var show=this.data.isShow
    console.log(show)
    wx.request({
      url: 'https://api.h6vr.com/dyc',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data)
        that.setData({text:res.data[0].title,isShow:!show})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
    ggClick:function(){
    //var text=this.data.text
    //this.setData({text:"新文字"})
    var that=this
    var show=this.data.gShow
    console.log(show)
    wx.request({
      url: 'https://api.h6vr.com/dyc',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data)
        that.setData({gtext:res.data[1].title,gShow:!show})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  llt: function() {
    wx.navigateTo({
      url: '../scenic/shanhaiguan/llt'
    })
  },
   mjn: function() {
    wx.navigateTo({
      url: '../scenic/shanhaiguan/mjn'
    })
  },
   css: function() {
    wx.navigateTo({
      url: '../scenic/shanhaiguan/css'
    })
  },
  js:function(){
    wx.navigateTo({
      url: '../scenic/shanhaiguan/js'
    })
  },
  lijiang:function(){
    wx.navigateTo({
      url: '../hot/lijiang/lijiang',
    })
  },
  changcheng:function(){
    wx.navigateTo({
      url: '../hot/changcheng/changcheng',
    })
  },
  jiuzhaigou:function(){
    wx.navigateTo({
      url: '../hot/jiuzhaigou/jiuzhaigou',
    })
  },
  wuzhen:function(){
    wx.navigateTo({
      url: '../hot/wuzhen/wuzhen',
    })
  },
  budalagong:function(){
    wx.navigateTo({
      url: '../hot/budalagong/budalagong',
    })
  },
  onRead:function(){
    
     // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  onShareAppMessage: function () {
    return {
      title: '【山海关】语音解说',
      desc: '您身边的解说员',
      path: '/pages/scenic/scenic'
    }
  },
  //登录接口
  onLaunch: function() {
    wx.login({
      success: function(res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://api.h6vr.com/wx/login',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }

})