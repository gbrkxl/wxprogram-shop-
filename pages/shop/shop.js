// pages/shop/shop.js
var itemJson = require('../../json/data');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        citys:'北京',
        itemArr:[],
        msg: '',
        items:[
            {
                id: 0,
                image: '../../images/item1.png',
                name: '美容养颜'
            },
            {
                id: 1,
                image: '../../images/item2.png',
                name: '保健调养'
            },
            {
                id: 2,
                image: '../../images/item3.png',
                name: '滋补'
            },
            {
                id: 3,
                image: '../../images/item4.png',
                name: '减肥'
            },
            {
                id: 4,
                image: '../../images/item5.png',
                name: '母婴'
            },
            {
                id: 5,
                image: '../../images/item6.png',
                name: '气节'
            },
            {
                id: 6,
                image: '../../images/item7.png',
                name: '常见食疗'
            },
            {
                id: 7,
                image: '../../images/item8.png',
                name: '维生素'
            },

        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options)
        var city = wx.getStorageSync('city');
        // console.log(city);
        if(city){
            // console.log(options)
            this.setData({citys:city});
        }
        // console.log(itemJson);
        this.setData({itemArr:itemJson.itemJson});
        // wx.request({
        //   url: '../../json/data.json',
        //   url:'http://iwenwiki.com:3002/api/foods/list',
        //   data: {
        //       city: this.data.citys,
        //       page: 1
        //   },
        //   success: res => {
        //       console.log(res.data);
        //   },
        //   fail: error =>{
        //       console.log(error);
        //   }
        // })
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
        wx.showToast({
            title: '页面刷新',
          })
          // this.setData({itemArr:itemJson.itemJson});
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        //如果有多个数据可以通过数组拼接的方法
        // this.setData({itemArr: itemArr.concat(itemJson.itemJson)})
        this.setData({msg:'没有更多数据了'});
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})