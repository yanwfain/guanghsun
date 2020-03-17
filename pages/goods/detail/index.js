function t(t, e, a) {
  return e in t ? Object.defineProperty(t, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = a, t;
}

var e, a, o = getApp(),
  s = o.requirejs("core"),
  i = (o.requirejs("icons"), o.requirejs("foxui")),
  n = o.requirejs("biz/diypage"),
  r = o.requirejs("biz/diyform"),
  c = o.requirejs("biz/goodspicker"),
  d = o.requirejs("jquery"),
  l = o.requirejs("wxParse/wxParse"),
  u = 0,
  g = o.requirejs("biz/selectdate"),
  topll = (o.requirejs("jquery"), o.requirejs("core"));

var Moment = require("../../../utils/moment.js");
var DATE_YEAR = new Date().getFullYear();
var DATE_MONTH = new Date().getMonth() + 1;
var DATE_DAY = new Date().getDate();

Page((a = {
  data: (e = {
      year: '',
      month: '',
      day: '',
      days: {},
      systemInfo: {},
      weekStr: ['日', '一', '二', '三', '四', '五', '六'],
      checkDate: [],
      // date: ['日', '一', '二', '三', '四', '五', '六'],
      dateArr: [],
      isToday: 0,
      isTodayWeek: false,
      todayIndex: 0,
      indexitemone: '',
      indexitemtwo: '',
      indexitem: '',
      diypages: {},
      usediypage: !1,
      specs: [],
      options: [],
      icons: o.requirejs("icons"),
      goods: {},
      indicatorDots: !0,
      autoplay: !0,
      interval: 5e3,
      duration: 500,
      circular: !0,
      play: "/static/images/video_play.png",
      mute: "/static/images/icon/mute.png",
      voice: "/static/images/icon/voice.png",
      active: "",
      slider: "",
      tempname: "",
      info: "active",
      preselltimeend: "",
      presellsendstatrttime: "",
      advWidth: 0,
      dispatchpriceObj: 0,
      now: parseInt(Date.now() / 1e3),
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      timer: 0,
      discountTitle: "",
      istime: 1,
      istimeTitle: "",
      isSelected: !1,
      params: {},
      total: 1,
      optionid: 0,
      audios: {},
      audiosObj: {},
      defaults: {
        id: 0,
        merchid: 0
      },
      buyType: "",
      pickerOption: {},
      specsData: [],
      specsTitle: "",
      canBuy: "",
      diyform: {},
      showPicker: !1,
      showcoupon: !1,
      pvalOld: [0, 0, 0],
      pval: [0, 0, 0],
      areas: [],
      noArea: !0,
      commentObj: {},
      commentObjTab: 1,
      loading: !1,
      commentEmpty: !1,
      commentPage: 1,
      commentLevel: "all",
      commentList: [],
      closeBtn: !1,
      soundpic: !0,
      animationData: {},
      uid: "",
      stararr: ["all", "good", "normal", "bad", "pic"],
      nav_mask: !1,
      nav_mask2: !1,
      nav: 0,
      giftid: "",
      limits: !0,
      modelShow: !1,
      showgoods: !0
    }, t(e, "timer", 0), t(e, "lasttime", 0), t(e, "hour", "-"), t(e, "min", "-"), t(e, "sec", "-"),
    t(e, "currentDate", ""), t(e, "dayList", ""), t(e, "currentDayList", ""), t(e, "currentObj", ""),
    t(e, "currentDay", ""), t(e, "checkedDate", ""), t(e, "showDate", ""), t(e, "scope", ""),
    t(e, "goods_hint_show", !1), t(e, "presellisstart", 0), e),
  favorite: function(t) {
    var e = this;
    if (e.data.limits) {
      var a = t.currentTarget.dataset.isfavorite ? 0 : 1;
      s.get("member/favorite/toggle", {
        id: e.data.options.id,
        isfavorite: a
      }, function(t) {
        t.isfavorite ? e.setData({
          "goods.isfavorite": 1
        }) : e.setData({
          "goods.isfavorite": 0
        });
      });
    } else this.setData({
      modelShow: !0
    });
  },
  pickerProChanges: function(e) {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
    var times = Y + '-' + M + '-' + D
    console.log(times)
    console.log(e)
    console.log(new Date(times).getTime())
    var times2 = e.detail.value
    if (new Date(times2).getTime() < new Date(times).getTime()) {
      wx.showToast({
        title: '选择时间不能小于当前时间',
        icon: 'none'
      })
    } else {
      this.setData({
        ops: e.detail.value
      })

    }


    console.log(this.data.ops)
    this.dateDiff(this.data.op, this.data.ops)
  },
  pickerProChange: function(e) {
    console.log(e)
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
    var times = Y + '-' + M + '-' + D
    console.log(times)
    console.log(e)
    console.log(new Date(times).getTime())
    var times2 = e.detail.value
    if (new Date(times2).getTime() < new Date(times).getTime()) {
      wx.showToast({
        title: '选择时间不能小于当前时间',
        icon: 'none'
      })
    } else {
      this.setData({
        op: e.detail.value
      })

    }
    this.dateDiff(this.data.op, this.data.ops)
    console.log(this.data.op)
  },
  dateDiff: function(d1, d2) {
    console.log(d1)
    console.log(d2)
    var day = 24 * 60 * 60 * 1000;
    try {
      var dateArr = d1.split("-");
      var checkDate = new Date();
      checkDate.setFullYear(dateArr[0], dateArr[1] - 1, dateArr[2]);
      var checkTime = checkDate.getTime();
      var dateArr2 = d2.split("-");
      var checkDate2 = new Date();
      checkDate2.setFullYear(dateArr2[0], dateArr2[1] - 1, dateArr2[2]);
      var checkTime2 = checkDate2.getTime();
      var cha = (checkTime - checkTime2) / day;

      console.log(cha)
      this.setData({
        numtime: Math.ceil(cha)
      })
      return cha;
    } catch (e) {
      console.log(e)
      return false;
    }
  },
  goodsTab: function(t) {
    var e = this,
      a = t.currentTarget.dataset.tap;
    if ("info" == a) this.setData({
      info: "active",
      para: "",
      comment: ""
    });
    else if ("para" == a) this.setData({
      info: "",
      para: "active",
      comment: ""
    });
    else if ("comment" == a) {
      if (e.setData({
          info: "",
          para: "",
          comment: "active"
        }), e.data.commentList.length > 0) return void e.setData({
        loading: !1
      });
      e.setData({
        loading: !0
      }), s.get("goods/get_comment_list", {
        id: e.data.options.id,
        level: e.data.commentLevel,
        page: e.data.commentPage
      }, function(t) {
        t.list.length > 0 ? e.setData({
          loading: !1,
          commentList: t.list,
          commentPage: t.page
        }) : e.setData({
          loading: !1,
          commentEmpty: !0
        });
      });
    }
  },
  comentTap: function(t) {
    var e = this,
      a = t.currentTarget.dataset.type,
      o = "";
    1 == a ? o = "all" : 2 == a ? o = "good" : 3 == a ? o = "normal" : 4 == a ? o = "bad" : 5 == a && (o = "pic"),
      a != e.data.commentObjTab && s.get("goods/get_comment_list", {
        id: e.data.options.id,
        level: o,
        page: e.data.commentPage
      }, function(t) {
        t.list.length > 0 ? e.setData({
          loading: !1,
          commentList: t.list,
          commentPage: t.page,
          commentObjTab: a,
          commentEmpty: !1
        }) : e.setData({
          loading: !1,
          commentList: t.list,
          commentPage: t.page,
          commentObjTab: a,
          commentEmpty: !0
        });
      });
  },
  preview: function(t) {
    wx.previewImage({
      current: t.currentTarget.dataset.src,
      urls: t.currentTarget.dataset.urls
    });
  },
  getDetail: function(t) {
    var e = this,
      a = parseInt(Date.now() / 1e3);
    e.setData({
      loading: !0
    }), s.get("goods/get_detail", {
      id: t.id
    }, function(t) {
      console.log(t)
      e.setData({
        tdelit: t
      })
      console.log(e.data.tdelit)
      console.log(t), t.error > 0 && (e.setData({
        show: !0,
        showgoods: !1
      }), i.toast(e, t.message), setTimeout(function() {
        wx.navigateBack();
      }, 800));
      var o = t.goods.coupons,
        n = t.goods.thumbMaxHeight,
        r = t.goods.thumbMaxWidth / n;
      if (wx.getSystemInfo({
          success: function(t) {
            var a = t.windowWidth / r;
            e.setData({
              advWidth: t.windowWidth,
              advHeight: a
            });
          }
        }), e.setData({
          coupon: o,
          coupon_l: o.length,
          packagegoods: t.goods.packagegoods,
          packagegoodsid: t.goods.packagegoods.goodsid,
          credittext: t.goods.credittext,
          activity: t.goods.activity,
          phonenumber: t.goods.phonenumber,
          showDate: t.goods.showDate,
          scope: t.goods.scope
        }), t.goods.packagegoods && e.package(), l.wxParse("wxParseData", "html", t.goods.content, e, "0"),
        l.wxParse("wxParseData_buycontent", "html", t.goods.buycontent, e, "0"), e.setData({
          show: !0,
          goods: t.goods,
          minprice: t.goods.minprice,
          maxprice: t.goods.maxprice,
          preselltimeend: t.goods.preselltimeend,
          style: t.goods.labelstyle.style,
          navbar: t.goods.navbar,
          labels: t.goods.labels
        }), console.log(t.goods), wx.setNavigationBarTitle({
          title: t.goods.title || "商品详情"
        }), u = t.goods.hasoption, d.isEmptyObject(t.goods.dispatchprice) || "string" == typeof t.goods.dispatchprice ? e.setData({
          dispatchpriceObj: 0
        }) : e.setData({
          dispatchpriceObj: 1
        }), t.goods.isdiscount > 0 && t.goods.isdiscount_time >= a) {
        clearInterval(e.data.timer);
        c = setInterval(function() {
          e.countDown(0, t.goods.isdiscount_time);
        }, 1e3);
        e.setData({
          timer: c
        });
      } else e.setData({
        discountTitle: "活动已结束"
      });
      if (t.goods.istime > 0) {
        clearInterval(e.data.timer);
        c = setInterval(function() {
          e.countDown(t.goods.timestart, t.goods.timeend, "istime");
        }, 1e3);
        e.setData({
          timer: c
        });
      }
      if (t.goods.ispresell > 0) {
        var c = setInterval(function() {
          0 == t.goods.canbuy ? e.countDown(a, t.goods.preselltimestart, "istime") : 1 == t.goods.canbuy && e.countDown(a, t.goods.preselltimeend, "istime");
        }, 1e3);
        e.setData({
          timer: c,
          presellisstart: t.goods.presellisstart
        }), e.setData({
          preselltimeend: t.goods.preselltimeend || t.goods.preselltimeend.getMonth() + "月" + t.goods.preselltimeend || t.goods.preselltimeend.getDate() + "日 " + t.goods.preselltimeend || t.goods.preselltimeend.getHours() + ":" + t.goods.preselltimeend || t.goods.preselltimeend.getMinutes() + ":" + t.goods.preselltimeend || t.goods.preselltimeend.getSeconds(),
          presellsendstatrttime: t.goods.presellsendstatrttime || t.goods.presellsendstatrttime.getMonth() + "月" + t.goods.presellsendstatrttime || t.goods.presellsendstatrttime.getDate() + "日"
        });
      }
      t.goods.getComments > 0 && s.get("goods/get_comments", {
        id: e.data.options.id
      }, function(t) {
        e.setData({
          commentObj: t
        });
      }), t.goods.fullbackgoods && e.setData({
        fullbackgoods: t.goods.fullbackgoods
      });
      var g = e.data.fullbackgoods;
      if (void 0 != g) {
        console.log(g);
        var m = g.maxfullbackratio,
          h = g.maxallfullbackallratio,
          m = Math.round(m),
          h = Math.round(h);
        e.setData({
          maxfullbackratio: m,
          maxallfullbackallratio: h
        });
      }
      9 == t.goods.type && (e.setData({
        checkedDate: t.goods.nowDate
      }), e.show_cycelbuydate()), t.goods.seckillinfo && e.initSeckill(t.goods);
    });
  },
  initSeckill: function(t) {
    var e = this,
      a = parseInt(t.seckillinfo.status),
      s = t.seckillinfo.starttime,
      i = t.seckillinfo.endtime;
    if (-1 != a) {
      var n = 0,
        r = 0,
        c = o.globalData.approot;
      wx.request({
        url: c + "map.json",
        success: function(o) {
          var c = new Date(o.header.Date) / 1e3;
          n = 0 == a ? i - c : s - c, e.setData({
              lasttime: n
            }), clearInterval(e.data.timer), e.setTimer(t.seckillinfo), r = e.setTimerInterval(t.seckillinfo),
            e.setData({
              timer: r
            });
        }
      });
    }
  },
  setTimer: function(t) {
    var e = this,
      a = 0;
    if (-1 != t.status && parseInt(e.data.lasttime) % 10 == 0) {
      var s = parseInt(t.status),
        i = t.starttime,
        n = t.endtime;
      if (-1 != s) {
        var r = o.globalData.approot;
        wx.request({
          url: r + "map.json",
          success: function(t) {
            var o = new Date(t.header.Date) / 1e3;
            a = 0 == s ? n - o : i - o, e.setData({
              lasttime: a
            });
          }
        });
      }
    }
    a = parseInt(e.data.lasttime) - 1;
    var c = e.formatSeconds(a);
    e.setData({
      lasttime: a,
      hour: c.hour,
      min: c.min,
      sec: c.sec
    }), a <= 0 && e.onLoad();
  },
  setTimerInterval: function(t) {
    var e = this;
    return setInterval(function() {
      e.setTimer(t);
    }, 1e3);
  },
  formatSeconds: function(t) {
    var e = parseInt(t),
      a = 0,
      o = 0;
    return e > 60 && (a = parseInt(e / 60), e = parseInt(e % 60), a > 60 && (o = parseInt(a / 60),
      a = parseInt(a % 60))), {
      hour: o < 10 ? "0" + o : o,
      min: a < 10 ? "0" + a : a,
      sec: e < 10 ? "0" + e : e
    };
  },
  countDown: function(t, e, a) {
    var o = parseInt(Date.now() / 1e3),
      s = (t > o ? t : e) - o,
      i = parseInt(s),
      n = Math.floor(i / 86400),
      r = Math.floor((i - 24 * n * 60 * 60) / 3600),
      c = Math.floor((i - 24 * n * 60 * 60 - 3600 * r) / 60),
      d = [n, r, c, Math.floor(i - 24 * n * 60 * 60 - 3600 * r - 60 * c)];
    if (this.setData({
        time: d
      }), "istime") {
      var l = "";
      t > o ? l = "距离限时购开始" : t <= o && e > o ? l = "距离限时购结束" : (l = "活动已经结束，下次早点来~",
        this.setData({
          istime: 0
        })), this.setData({
        istimeTitle: l
      });
    }
  },
  cityPicker: function(t) {
    var e = this;
    t.currentTarget.dataset.tap;
    wx.navigateTo({
      url: "/pages/goods/region/index?id=" + e.data.goods.id + "&region=" + e.data.goods.citys.citys + "&onlysent=" + e.data.goods.citys.onlysent
    });
  },
  giftPicker: function() {
    this.setData({
      active: "active",
      gift: !0
    });
  },
  couponPicker: function() {
    this.setData({
      active: "active",
      showcoupon: !0
    });
  },
  couponrecived: function(t) {
    var e = t.currentTarget.dataset.id,
      a = this;
    s.post("goods.pay_coupon", {
      id: e
    }, function(t) {
      console.log(t), 0 == t.error ? (a.setData({
        showcoupon: !1,
        active: ""
      }), i.toast(a, "已领取")) : i.toast(a, t.message);
    });
  },
  selectPicker: function(t) {
    var e = this,
      a = t.currentTarget.dataset.time,
      o = t.currentTarget.dataset.timeout;
    if (e.data.limits) {
      if (console.log(o), "timeout" == a || "access_time" == a) {
        if ("false" == o) return void e.setData({
          goods_hint_show: !0
        });
        if ("true" == o) {
          if ("access_time" == a) {
            e.setData({
              goods_hint_show: !1
            });
            s = "goodsdetail";
            return void c.selectpicker(t, e, s);
          }
          if ("timeout" == a) return void e.setData({
            goods_hint_show: !1
          });
        }
      }
      var s = "goodsdetail";
      c.selectpicker(t, e, s);
    } else e.setData({
      modelShow: !0
    });
  },
  // 规格
  specsTap: function(t) {
    console.log(this.data)
    for (var i = 1; i < this.data.options.length; i++) {
      // console.log(this.data.options[i].day.length)
      if (this.data.options[i].day) {
        console.log('进来了')
        this.setData({
          days: '',
          _setdata: 1
        })
      }
    }
    this.setData({
      checkDate: []
    })
    console.log(t)
    console.log(this.data.days);
    var e = this;
    c.specsTap(t, e);
    console.log(t)
    console.log(e.data.specs)
    console.log(e.data.specs.length)
    console.log(this.data.specs.length)
    if (this.data.specslength.length == 2) {
      if (e.data.specs.length == 2) {
        var id_1 = e.data.specs[0].id
        var id_2 = e.data.specs[1].id
        var contid = e.data.specs[0].id + '_' + e.data.specs[1].id
        console.log(contid)
        this.createDateListData(contid);
      }
    }
    if (this.data.specslength.length == 3) {
      if (e.data.specs.length == 3) {
        var id_1 = e.data.specs[0].id
        var id_2 = e.data.specs[1].id
        var contid = e.data.specs[0].id + '_' + e.data.specs[1].id + '_' + e.data.specs[2].id
        console.log(contid)
        this.createDateListData(contid);
      }
    }
    if (this.data.specslength.length == 1) {
      this.setData({
        id_optionid: t.currentTarget.dataset.id
      })
      this.createDateListData(e.data.id_optionid);
    }

    console.log(t.currentTarget.dataset.id)

    console.log(this.data.checkDate)
  },
  emptyActive: function() {
    this.setData({
      active: "",
      slider: "out",
      tempname: "",
      showcoupon: !1,
      gift: !1,
      cycledate: !1
    });
  },
  // 立即购买
  buyNow: function(t) {

    var e = this;
    console.log(this.data.checkDate)
    if (this.data._setdata == 1 ) {
      console.log(this.data._setdata)
      if (e.data.tdelit.goods.is_order_time == 1 && this.data.tdelit.goods.is_calendar == 2) {
        if (this.data.checkDate.length == 0) {
          wx.showToast({
            title: '请选择日期',
            icon: 'none'
          })
          return
        } else {
          var option_stock_id = this.data.option_stock_id
          var stock_time = this.data.stock_time
          var idd = 1
          c.buyNow(option_stock_id, stock_time, idd, t, e, "goods_detail");
          console.log(t)
        }
      } else {
        if (e.data.tdelit.goods.is_order_time == 2 && this.data.tdelit.goods.is_calendar == 1) {
          if (!this.data.numtime) {
            wx.showToast({
              title: '请完善信息',
              icon: 'none'
            })
            return
          } else {
            var option_stock_id = this.data.op
            var stock_time = this.data.ops
            var idd = 2
            c.buyNow(option_stock_id, stock_time, idd, t, e, "goods_detail");
            console.log(t)
          }
        }
      }
    } else {
      console.log(this.data._setdata)
      c.buyNow(option_stock_id, stock_time, idd, t, e, "goods_detail");
    }
    // if (this.data._setdata == 1 && ) {


    // }

    //  return;



    // this.setData({
    //   checkDate: []
    // })

    console.log('1111')
  },
  // 加入购物车
  getCart: function(t) {

    var e = this;
    console.log(this.data.checkDate)
    // if (this.data._setdata == 1) {
    //   if (this.data.checkDate.length == 0) {
    //     wx.showToast({
    //       title: '请选择日期',
    //       icon:'none'
    //     })
    //     return
    //   }
    // }
    if (this.data._setdata == 1) {
      if (e.data.tdelit.goods.is_order_time == 1 && this.data.tdelit.goods.is_calendar == 2) {
        if (this.data.checkDate.length == 0) {
          wx.showToast({
            title: '请选择日期',
            icon: 'none'
          })
          return
        } else {
          var option_stock_id = this.data.option_stock_id
          var stock_time = this.data.stock_time
          // var idd = 1
          e.setData({
            idd: 1
          })
          var idd = e.data.idd
          // c.buyNow(option_stock_id, stock_time, idd, t, e, "goods_detail");
          console.log(t)
        }
      } else {
        if (e.data.tdelit.goods.is_order_time == 2 && this.data.tdelit.goods.is_calendar == 1) {
          if (!this.data.numtime) {
            wx.showToast({
              title: '请完善信息',
              icon: 'none'
            })
            return
          } else {
            var option_stock_id = this.data.op
            var stock_time = this.data.ops
            e.setData({
              idd: 2
            })
            var idd = e.data.idd
            // c.buyNow(option_stock_id, stock_time, idd, t, e, "goods_detail");
            console.log(t)
          }
        }
      }
    }
    c.getCart(t, e);
    // this.setData({
    //   checkDate: []
    // })

    console.log('222')
  },
  select: function() {
    var t = this,
      e = t.data.optionid;
    t.data.diyform;
    u > 0 && 0 == e ? i.toast(t, "请选择规格") : this.setData({
      active: "",
      slider: "out",
      isSelected: !0,
      tempname: ""
    });
  },
  inputNumber: function(t) {
    var e = this;
    c.inputNumber(t, e);
  },
  number: function(t) {
    var e = this;
    c.number(t, e);
  },
  onLoad: function(t) {
    console.log(t)
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1

    this.setData({
      year: year,
      month: month
    })
    var e = this;

    wx.getSystemInfo({
      success: function(res) {
        e.setData({
          systemInfo: res,
        });
      }
    })
    topll.get("goods/get_picker", {
      id: t.id
    }, function(a) {
      console.log(a)

      e.setData({
        op_nav: a.options,
        specslength: a.specs

      })

    })
    // var e = this;
    s.get("black", {}, function(t) {
      t.isblack && wx.showModal({
        title: "无法访问",
        content: "您在商城的黑名单中，无权访问！",
        success: function(t) {
          t.confirm && this.close(), t.cancel && this.close();
        }
      });
    }), n.get(this, "goodsdetail", function(t) {
      var a = t.diypage.items;
      for (var o in a) "copyright" == a[o].id && e.setData({
        copyright: a[o]
      });
    }), t = t || {};
    var a = decodeURIComponent(t.scene);
    if (!t.id && a) {
      var i = s.str2Obj(a);
      t.id = i.id, i.mid && (t.mid = i.mid);
    }
    this.setData({
      id: t.id
    }), o.url(t), wx.getSystemInfo({
      success: function(t) {
        e.setData({
          windowWidth: t.windowWidth,
          windowHeight: t.windowHeight
        });
      }
    }), e.setData({
      uid: t.id
    });
    o.getUserInfo(function() {
      e.setData({
        options: t
      }), wx.getSystemInfo({
        success: function(t) {
          e.setData({
            advWidth: t.windowWidth
          }), console.log(t.windowHeight);
        }
      }), e.setData({
        success: !0,
        cover: !0,
        showvideo: !0
      }), e.getDetail(t), setTimeout(function() {
        e.setData({
          areas: o.getCache("cacheset").areas
        });
      }, 3e3);
    }, function() {
      wx.redirectTo({
        url: "/pages/message/auth/index"
      });
    });
  },
  /**创建日历数据 */
  createDateListData: function(optionid, setYear, setMonth) {

    //全部时间的月份都是按0~11基准，显示月份才+1
    var dateArr = []; //需要遍历的日历数组数据
    var arrLen = 0; //dateArr的数组长度
    var now = setYear ? new Date(setYear, setMonth) : new Date();
    var year = setYear || now.getFullYear();
    var nextYear = 0;
    var month = setMonth || now.getMonth();
    //没有+1方便后面计算当月总天数
    var nextMonth = (month + 1) > 11 ? 1 : (month + 1);
    console.log("当前选中月nextMonth：" + nextMonth);
    //目标月1号对应的星期
    var startWeek = this.getWeek(year, nextMonth, 1); //new Date(year + ',' + (month + 1) + ',' + 1).getDay();  
    console.log("目标月1号对应的星期startWeek:" + startWeek);
    //获取目标月有多少天
    var dayNums = this.getTotalDayByMonth(year, nextMonth); //new Date(year, nextMonth, 0).getDate();         
    console.log("获取目标月有多少天dayNums:" + dayNums);
    var obj = {};
    var num = 0;
    if (month + 1 > 11) {
      nextYear = year + 1;
      dayNums = new Date(nextYear, nextMonth, 0).getDate();
    }
    var _num = 0;

    for (var j = -startWeek + 1; j <= dayNums; j++) {
      // console.log(66)
      var tempWeek = -1;
      if (j > 0) {
        tempWeek = this.getWeek(year, nextMonth, j);
        //console.log(year + "年" + month + "月" + j + "日" + "星期" + tempWeek);
      }
      // console.log(j)
      var clazz = '';
      if (tempWeek == 0 || tempWeek == 6)
        clazz = 'week'
      if (j < DATE_DAY && year == DATE_YEAR && nextMonth == DATE_MONTH)
        //当天之前的日期不可用
        clazz = 'unavailable ' + clazz;
      else
        clazz = '' + clazz
      /**如果当前日期已经选中，则变色 */
      var date = year + "-" + nextMonth + "-" + j;
      var index = this.checkItemExist(this.data.checkDate, date);
      if (index != -1) {
        clazz = clazz + ' active';
      }
      var this_option = this.data.options;
      console.log(this_option)
      for (var i = 0; i < this_option.length; i++) {
        // console.log(optionid)
        if (this_option[i].specs == optionid) {
          // console.log(44)
          var days = this_option[i].day;
          var days_l = days.length;
          var curDate = new Date();
          var curYear = curDate.getFullYear();  //获取完整的年份(4位,1970-????)
          var curMonth = curDate.getMonth() + 1;  //获取当前月份(0-11,0代表1月)
          var curDay = curDate.getDate();    //获取当前日(1-31)
          // console.log(curDay)
          var nowday = curDay;
          if (j >= nowday && _num < days_l) {

            dateArr.push({
              day: j,
              class: clazz,
              amount: '￥' + days[_num].marketprice,
              total: days[_num].stock,
              dayid: days[_num].id,
              _daytime: days[_num].day_time
            })
            _num++
          } else {
            dateArr.push({
              day: j,
            })
          }

        }
      }
      /*dateArr.push({
        day: j,
        class: clazz,
        amount: '￥99.8'
      })*/
    }
    this.setData({
      days: dateArr
    })
  },
  /**
   * 上个月
   */
  lastMonthEvent: function() {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
    let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.createDateListData(this.data.id_optionid, year, month);
  },
  /**
   * 下个月
   */
  nextMonthEvent: function() {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
    let month = this.data.month > 11 ? 0 : this.data.month;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.createDateListData(this.data.id_optionid, year, month);
  },
  /*
   * 获取月的总天数
   */
  getTotalDayByMonth: function(year, month) {
    month = parseInt(month, 10);
    var d = new Date(year, month, 0);
    return d.getDate();
  },
  /*
   * 获取月的第一天是星期几
   */
  getWeek: function(year, month, day) {
    var d = new Date(year, month - 1, day);
    return d.getDay();
  },
  /**
   * 点击日期事件
   */
  onPressDateEvent: function(e) {
    console.log(e)

    console.log(Number(e.currentTarget.dataset.total))
    if (Number(e.currentTarget.dataset.total) < 1) {
      wx.showToast({
        title: '当日库存不足',
        icon: 'none'
      })
      return
    }
    this.setData({
      option_stock_id: e.currentTarget.dataset.id,
      stock_time: e.currentTarget.dataset.daytime
    })
    var {
      year,
      month,
      day,
      amount
    } = e.currentTarget.dataset;
    console.log("当前点击的日期：" + year + "-" + month + "-" + day);
    //当前选择的日期为同一个月并小于今天，或者点击了空白处（即day<0），不执行
    if ((day < DATE_DAY && month == DATE_MONTH) || day <= 0)
      return;

    this.renderPressStyle(year, month, day, amount);
  },
  renderPressStyle: function(year, month, day, amount) {

    var days = this.data.days;
    //渲染点击样式
    for (var j = 0; j < days.length; j++) {
      var tempDay = days[j].day;
      if (tempDay == day) {
        var date = year + "-" + month + "-" + day;
        var obj = {
          day: date,
          amount: amount
        };
        var checkDateJson = this.data.checkDate;
        var index = this.checkItemExist(checkDateJson, date);
        if (index == -1) {
          checkDateJson.push(obj);
          // checkDateJson=obj;
          days[j].class = days[j].class + ' active';
        } else {
          checkDateJson.splice(index, 1);
          days[j].class = days[j].class.replace('active', ' ');
        }
        this.setData({
          checkDate: checkDateJson
        })
        console.log(this.data.checkDate);
        // if (this.data.checkDate){
        //   this.setData({
        //     _day_time:true
        //   })
        // }else{
        //   this.setData({
        //     _day_time: false
        //   })
        // }
        break;
      }
    }
    this.setData({
      days: days
    });

  },
  /**检查数组中是否存在该元素 */
  checkItemExist: function(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (value === arr[i].day) {
        return i;
      }
    }
    return -1;
  },
  show_cycelbuydate: function() {
    var t = this,
      e = g.getCurrentDayString(this, t.data.showDate),
      a = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    t.setData({
      currentObj: e,
      currentDate: e.getFullYear() + "年" + (e.getMonth() + 1) + "月" + e.getDate() + "日 " + a[e.getDay()],
      currentYear: e.getFullYear(),
      currentMonth: e.getMonth() + 1,
      currentDay: e.getDate(),
      initDate: Date.parse(e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate()),
      checkedDate: Date.parse(e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate()),
      maxday: t.data.scope
    });
  },
  package: function() {
    var t = this;
    s.get("package.get_list", {
      goodsid: this.data.packagegoodsid
    }, function(e) {
      console.log(e.list[0]), t.setData({
        packageList: e.list[0]
      });
    });
  },
  onShow: function() {
    // this.data.checkDate
    // this.setData({
    //   checkDate:false
    // })
    var t = this;
    console.log(t.data.pickerOption)
    o.getCache("isIpx") ? t.setData({
      isIpx: !0,
      iphonexnavbar: "fui-iphonex-navbar"
    }) : t.setData({
      isIpx: !1,
      iphonexnavbar: ""
    }), wx.getStorage({
      key: "mydata",
      success: function(e) {
        wx.removeStorage({
          key: "mydata",
          success: function(t) {}
        }), t.getDetail(e.data), wx.pageScrollTo({
          scrollTop: 0
        });
      }
    }), wx.getSetting({
      success: function(e) {
        var a = e.authSetting["scope.userInfo"];
        t.setData({
          limits: a
        });
      }
    });
  },
  onChange: function(t) {
    return r.onChange(this, t);
  },
  DiyFormHandler: function(t) {
    return r.DiyFormHandler(this, t);
  },
  selectArea: function(t) {
    return r.selectArea(this, t);
  },
  bindChange: function(t) {
    return r.bindChange(this, t);
  },
  onCancel: function(t) {
    return r.onCancel(this, t);
  },
  onConfirm: function(t) {
    return r.onConfirm(this, t);
  },
  getIndex: function(t, e) {
    return r.getIndex(t, e);
  },
  onShareAppMessage: function() {
    return this.setData({
      closeBtn: !1
    }), s.onShareAppMessage("/pages/goods/detail/index?id=" + this.data.options.id, this.data.goods.title);
  },
  showpic: function() {
    this.setData({
      showpic: !0,
      cover: !1,
      showvideo: !1
    }), this.videoContext = wx.createVideoContext("myVideo"), this.videoContext.pause();
  },
  showvideo: function() {
    this.setData({
      showpic: !1,
      showvideo: !0
    }), this.videoContext = wx.createVideoContext("myVideo"), this.videoContext.play();
  },
  startplay: function() {
    this.setData({
      cover: !1
    }), this.videoContext = wx.createVideoContext("myVideo"), this.videoContext.play();
  },
  bindfullscreenchange: function(t) {
    1 == t.detail.fullScreen ? this.setData({
      success: !1
    }) : this.setData({
      success: !0
    });
  },
  phone: function() {
    var t = this.data.phonenumber + "";
    wx.makePhoneCall({
      phoneNumber: t
    });
  },
  sharePoster: function() {
    wx.navigateTo({
      url: "/pages/goods/poster/poster?id=" + this.data.uid
    });
  },
  closeBtn: function() {
    this.setData({
      closeBtn: !1
    });
  },
  onHide: function() {
    this.setData({
      closeBtn: !1
    });
  },
  showshade: function() {
    this.setData({
      closeBtn: !0
    });
  },
  nav: function() {
    this.setData({
      nav_mask: !this.data.nav_mask
    });
  },
  nav2: function() {
    this.setData({
      nav_mask2: !this.data.nav_mask2
    });
  },
  changevoice: function() {
    this.data.sound ? this.setData({
      sound: !1,
      soundpic: !0
    }) : this.setData({
      sound: !0,
      soundpic: !1
    });
  },
  radioChange: function(t) {
    this.setData({
      giftid: t.currentTarget.dataset.giftgoodsid,
      gift_title: t.currentTarget.dataset.title
    });
  },
  activityPicker: function() {
    this.setData({
      fadein: "in"
    });
  },
  actOutPicker: function() {
    this.setData({
      fadein: ""
    });
  },
  hintclick: function() {
    wx.openSetting({
      success: function(t) {}
    });
  },
  cancelclick: function() {
    this.setData({
      modelShow: !1
    });
  },
  confirmclick: function() {
    this.setData({
      modelShow: !1
    })
    // , wx.openSetting({
    //     success: function(t) {}
    // });
  },
  sendclick: function() {
    wx.navigateTo({
      url: "/pages/map/index"
    });
  },
  syclecancle: function() {
    this.setData({
      cycledate: !1
    });
  },
  sycleconfirm: function() {
    this.setData({
      cycledate: !1
    });
  },
  editdate: function(t) {
    g.setSchedule(this), this.setData({
      cycledate: !0
    });
  },
  doDay: function(t) {
    g.doDay(t, this);
  },
  selectDay: function(t) {
    g.selectDay(t, this), g.setSchedule(this);
  },
  play: function(t) {
    var e = t.target.dataset.id,
      a = this.data.audiosObj[e] || !1;
    if (!a) {
      a = wx.createInnerAudioContext("audio_" + e);
      var o = this.data.audiosObj;
      o[e] = a, this.setData({
        audiosObj: o
      });
    }
    var s = this;
    a.onPlay(function() {
      var t = setInterval(function() {
        var o = a.currentTime / a.duration * 100 + "%",
          i = Math.floor(Math.ceil(a.currentTime) / 60),
          n = (Math.ceil(a.currentTime) % 60 / 100).toFixed(2).slice(-2),
          r = Math.ceil(a.currentTime);
        i < 10 && (i = "0" + i);
        var c = i + ":" + n,
          d = s.data.audios;
        d[e].audiowidth = o, d[e].Time = t, d[e].audiotime = c, d[e].seconds = r, s.setData({
          audios: d
        });
      }, 1e3);
    });
    var i = t.currentTarget.dataset.audio,
      n = t.currentTarget.dataset.time,
      r = t.currentTarget.dataset.pausestop,
      c = t.currentTarget.dataset.loopplay;
    0 == c && a.onEnded(function(t) {
      d[e].status = !1, s.setData({
        audios: d
      });
    });
    var d = s.data.audios;
    d[e] || (d[e] = {}), a.paused && 0 == n ? (a.src = i, a.play(), 1 == c && (a.loop = !0),
      d[e].status = !0, s.pauseOther(e)) : a.paused && n > 0 ? (a.play(), 0 == r ? a.seek(n) : a.seek(0),
      d[e].status = !0, s.pauseOther(e)) : (a.pause(), d[e].status = !1), s.setData({
      audios: d
    });
  },
  pauseOther: function(t) {
    var e = this;
    d.each(this.data.audiosObj, function(a, o) {
      if (a != t) {
        o.pause();
        var s = e.data.audios;
        s[a] && (s[a].status = !1, e.setData({
          audios: s
        }));
      }
    });
  }
}, t(a, "onHide", function() {
  this.pauseOther();
}), t(a, "onUnload", function() {
  this.pauseOther();
}), t(a, "navigate", function(t) {
  var e = t.currentTarget.dataset.url,
    a = t.currentTarget.dataset.phone,
    o = t.currentTarget.dataset.appid,
    s = t.currentTarget.dataset.appurl;
  e && wx.navigateTo({
    url: e
  }), a && wx.makePhoneCall({
    phoneNumber: a
  }), o && wx.navigateToMiniProgram({
    appId: o,
    path: s
  });
}), t(a, "userinfo", function(t) {
  var e = this;
  o.getUserInfo(function() {
    e.onShow();
  });
}), t(a, "close", function() {
  o.globalData.flag = !0, wx.reLaunch({
    url: "../index/index"
  });
}), a));