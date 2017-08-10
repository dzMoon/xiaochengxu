// connect.js
Page({
  data: {
    markers: [{
      iconPath: "/source/location.png",
    id: 0,
    latitude: 0,
    longitude: 0,
    width: 50,
    height: 50,
    phoneNumber: "18013835807",
    tellNumber: "1654896198",
  }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
      latitude: 23.10229
    }, {
        longitude: 113.324520,
      latitude: 23.21229
    }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    address: '西安市雁塔区唐延路35号旺座现代城B座5层',
  },
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: that.data.phoneNumber,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  callNumber: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.tellNumber,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
         that.setData({
           latitude:res.latitude,
           longitude: res.longitude,
         })
         wx.openLocation({
           latitude: latitude,
           longitude: longitude,
           scale: 28,
         })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
})
