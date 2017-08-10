//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    interval:3000,
    duration:500,
    urls: ["../../source/item1.jpg", "../../source/item2.jpg","../../source/item3.jpg"],
    info:[
      {
        id:1,
        title:"小陈股是怎样来过去最有价值的客户呢？",
        date: "2017-07-28",
        content:"一个简单的小程序1"
      },
      {
        id:2,
        title: "80%商家将入驻小程序",
        date: "2017-07-26",
        content: "一个简单的小程序2",
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  link:function(){
    wx.navigateTo({
      url: '../content/content',
      success: function(res) {
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
