var app=getApp()
Page({
  data:{
    text:"",
    controls:true,
    //地图标记
    markers:[{
      latitude:40.040236,
      longitude:119.747389,
      width:30,
      height:40,
      iconPath: "/images/666.png",
      title:'山海关·角山'
    }
    ],
    audio_src:'http://api.h6vr.com/static/voice/shanhaiguan/shanhaiguan_jiaoshan.mp3',
    audio_poster:'http://api.h6vr.com/static/pic/shanhaiguan/shanhaiguan_jiaoshan.jpg',
    audio_author:'导游词',
    audio_name:'山海关·角山',
    // 播放状态
    playStatus: true, //状态开关
    classfirst: ['innerline stopfirst'],
    classsecond: ['innerline stopsecond'],
    classthird: ['innerline stopthird'],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    var that=this
     wx.request({
      url: 'https://api.h6vr.com/dyc',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        //console.log(res.data)
        that.setData({text:res.data[217].title})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })


     // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  
  openMap:function(){
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        // success
        wx.openLocation({
          latitude: 40.040236, // 纬度，范围为-90~90，负数表示南纬
          longitude: 119.747389, // 经度，范围为-180~180，负数表示西经
          scale: 12, // 缩放比例  
          name:'角山' 
        })
      }
    })
  },
  
  /*音乐播放*/ 
  audioPlay: function () {
    
     //console.log(this)
   if (this.data.playStatus==true) {
      this.audioCtx.play();
      this.setData({
      playStatus: false,
      classfirst: ['innerline animatefirst'],
        classsecond: ['innerline animatesecond'],
        classthird: ['innerline animatethird'],
       })
      //console.log(this.data)
   } else {
     this.audioCtx.pause();
     this.setData({
       playStatus:true,
       classfirst: ['innerline stopfirst'],
        classsecond: ['innerline stopsecond'],
        classthird: ['innerline stopthird'],
     }
       
     )
   }
  
   
  },
  //分享
    onShareAppMessage: function () {
    return {
      title: '【山海关·角山】语音解说',
      desc: '您身边的解说员',
      path: '/pages/scenic/shanhaiguan/js'
    }
  },
  onShow:function(){
    // 页面显示
   
  },
  onHide:function(){
    // 页面隐藏
   
  },
  onUnload:function(){
    // 页面关闭
  
  }
})