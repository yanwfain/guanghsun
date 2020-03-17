// var t = getApp(), a = t.requirejs("core");

// Page({
//     data: {
//         page: 1,
//         loaded: !1,
//         loading: !1,
//         list: []
//     },
//     getList: function() {
//         var t = this;
//         t.setData({
//             loading: !0
//         }), a.get("shop/notice/get_list", {
//             page: this.data.page
//         }, function(a) {
//             t.setData({
//                 loading: !1,
//                 show: !0
//             }), a.list.length > 0 ? t.setData({
//                 page: t.data.page + 1,
//                 list: t.data.list.concat(a.list)
//             }) : a.list.length < a.pagesize && t.setData({
//                 loaded: !0
//             });
//         });
//     },
//     onReachBottom: function() {
//         this.data.loaded || this.getList();
//     },
//     onLoad: function(a) {
//         t.url(a), this.getList();
//     }
// });


// 日历-----------------------------------------------------
// const app = getApp()

// Page({

//   data: {
//     pageTopData: {
//       height: 0,
//       title: '定制旅行'
//     },
    
//   },
//   onSelectDateTap: function (e) {
//     wx.navigateTo({
//       url: '../calendar/index'
//     })
//   },
//   onSelectDateTapend: function (e) {
//     wx.navigateTo({
//       url: '../calendarflir/index'
//     })
//   },
//   onLoad: function (options) {
//     this.setData({
//       'pageTopData.height': app.globalData.statusBarHeight
//     })
//     var pages = getCurrentPages();
//     var currPage = pages[pages.length - 1];
//     this.data.mydata = currPage.data.predata
//     console.log(this.data.mydata)
//   },
//   onReady: function () {

//   },
//   onShow: function () {
//     if (typeof this.getTabBar === 'function' && this.getTabBar()) {
//       this.getTabBar().setData({
//         selected: 0
//       })
//     }
//     var pages = getCurrentPages();
//     var currPage = pages[pages.length - 1];
//     this.data.mydata = currPage.data.predata
//     console.log(this.data.mydata)
//     this.setData({
//       mydata: currPage.data.predata
//     })
//     this.setData({
//       mydataend: currPage.data.predataend
//     })
//     var times = this.data.mydata.year + '/' + this.data.mydata.month + '/' + this.data.mydata.datenum
//     var timesend = this.data.mydataend.year + '/' + this.data.mydataend.month + '/' + this.data.mydataend.datenum
//     console.log(times)
//     console.log(timesend)
//     var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
//     var myDate = new Date(Date.parse(times));
//     var myDateend = new Date(Date.parse(timesend));
//     console.log(weekDay[myDate.getDay()]); 
//     this.setData({
//       data_zhou: weekDay[myDate.getDay()],
//       data_zhouend: weekDay[myDateend.getDay()]
//     })  
//   },
//   onHide: function () {

//   },
//   onUnload: function () {

//   },
//   onPullDownRefresh: function () {

//   },
//   onReachBottom: function () {

//   },
//   onShareAppMessage: function () {

//   },
//   onSubmit: function () {
//     wx.navigateTo({
//       url: '/pages/custom-made-submit/index'
//     })
//   }
// })

var t = getApp(), a = t.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  inpu_ation:function(e){
    console.log(e)
    this.setData({
      destination: e.detail.value
    })
  },
  inpu_name: function (e) {
    console.log(e)
    this.setData({
      name_tit: e.detail.value
    })
  },
  inpu_phone: function (e) {
    console.log(e)
    this.setData({
      phone_tit: e.detail.value
    })
  },
  
  getPhoneNumber: function (e) {//点击获取手机号码按钮



    var that = this;



    wx.checkSession({

      success: function () {

        console.log(e.detail.errMsg)

        console.log(e.detail.iv)

        console.log(e.detail.encryptedData)



        var ency = e.detail.encryptedData;

        var iv = e.detail.iv;

        var sessionk = that.data.sessionKey;



        if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {

          that.setData({

            modalstatus: true

          });

        } else {//同意授权

          wx.request({

            method: "GET",

            url: 'https://xxx/wx/deciphering.do',

            data: {

              encrypdata: ency,

              ivdata: iv,

              sessionkey: sessionk

            },

            header: {

              'content-type': 'application/json' // 默认值

            },

            success: (res) => {

              console.log("解密成功~~~~~~~将解密的号码保存到本地~~~~~~~~");

              console.log(res);

              var phone = res.data.phoneNumber;

              console.log(phone);



            }, fail: function (res) {

              console.log("解密失败~~~~~~~~~~~~~");

              console.log(res);

            }

          });

        }

      },

      fail: function () {

        console.log("session_key 已经失效，需要重新执行登录流程");

        // that.wxlogin(); //重新登录

      }

    });
    },
  submit:function(e){
    if (!this.data.destination) {
      wx.showToast({
        title: '请填写地址',
        icon: 'none'
      })
      return
    }
    if (!this.data.name_tit){
      wx.showToast({
        title: '请填写姓名',
        icon:'none'
      })
      return
    }
    if (!this.data.phone_tit) {
      wx.showToast({
        title: '请填写手机号',
        icon: 'none'
      })
      return
    }
    var that= this.data;
    var t= this;
    a.get("member/custom/submit", { name: that.name_tit, destination_city: that.destination, mobile: that.phone_tit}, function (e) {
      // t.setData({
      //   loaded: !0,
      //   list: e.list,
      //   show: !0
      // });
    });
    wx.navigateTo({
      url: '../index_delits/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
