// search.js
var app = getApp();
Page({
  data:{
      searchVal:"",
      modalHide:true,
      loading:true,
      history:[],
      modalNull:true,
      movies:{}
  },
  //点击打开地图
  openMap:function(){
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        // success
        console.log(res)
        wx.openLocation({
          latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
          longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
          scale: 12, // 缩放比例  
          name:'乌镇' 
        })
      }
    })
  },
  onLoad:function(){
      var history = wx.getStorageSync('history');
      if(history){
          this.setData({
             history:history
          })
      }
  },
  modalChange:function(){
      this.setData({
          modalHide:true
      })
  },
  modalValid:function(){
        this.setData({
          modalNull:true
      })
  },
  inputChange:function(e){
      this.setData({
        searchVal:e.detail.value
      });
  },
  searchScenic:function(){
      //搜索
      var searchVal = this.data.searchVal;
      //判断查询信息是否为空
      if(searchVal){
          var that = this;
          this.setData({
              loading:false
          });
          //设置历史记录
          var history = wx.getStorageSync('history') || [];
          if(history.length >= 4) history.pop();
          //判断历史记录是否相同
          for(var val in history){
              if(history[val] == searchVal){
                  history.splice(val,1)
              }
          }
          history.unshift(searchVal);
          this.setData({
              history:history
          })
          wx.setStorageSync('history',history);
          wx.request({
              url:'https://api.h6vr.com/dyc',
              data:{keys_like:searchVal},
              header:{},
              success:function(res){
                  var subjects = res.data;
                  that.setData({
                    movies:subjects,
                    loading:true
                  });
                  var len = subjects.length;
                     console.log(len)

                  // 若查询没有查出结果，则直接显示提示信息
                  if (len === 0) {
                  that.setData({
                    modalNull:false
                })
                }
              }
          })
      }else{
          this.setData({
              modalHide:false
          })
      }
  },
  historySearch:function(e){
      var name = e.currentTarget.dataset.name;
      this.setData({
        searchVal:name
      });
      this.searchScenic();
  },
  //分享
  onShareAppMessage: function () {
    return {
      title: '导游词',
      desc: '您身边的解说员',
      path: '/pages/search/search'
    }
  }
  //detail:function(e){
      //app.detail(e);
  //}
})