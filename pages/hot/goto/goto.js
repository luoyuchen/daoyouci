var app=getApp()
Page({
  data:{
    text:"",
    controls:true,
    //地图标记
    markers:[{
      latitude:29.318550,
      longitude:110.437560,
      width:30,
      height:40,
      iconPath: "/images/666.png",
      title:'张家界国家森林公园'
    }
    ]
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
        that.setData({text:res.data[0].title})
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
          latitude: 29.318550, // 纬度，范围为-90~90，负数表示南纬
          longitude: 110.437560, // 经度，范围为-180~180，负数表示西经
          scale: 12, // 缩放比例  
          name:'张家界' 
        })
      }
    })
  },
  
  //分享
    onShareAppMessage: function () {
    return {
      title: '导游词',
      desc: '您身边的解说员',
      path: '/pages/search/search'
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