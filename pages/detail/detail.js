
Page({

  /**
   * 页面的初始数据
   */
  data: {
    specShow:false,
    spu:Object
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const spu = JSON.parse(`
   {
    "id":2,
    "title":"林间有风自营针织衫",
    "subtitle":"瓜瓜设计，3件包邮",
    "category_id":12,
    "root_category_id":2,
    "price":"77.00",
    "img":"http://i2.sleeve.7yue.pro/n11.png",
    "for_theme_img":"",
    "description":null,
    "discount_price":"62.00",
    "tags":"包邮$热门",
    "is_test":true,
    "online":true,
    "sku_list":[
        {
            "id":2,
            "price":77.76,
            "discount_price":100,
            "online":true,
            "img":"http://i2.sleeve.7yue.pro/m24.png",
            "title":"金属灰·七龙珠",
            "spu_id":2,
            "category_id":17,
            "root_category_id":3,
            "specs":[
                {
                    "key_id":1,
                    "key":"颜色",
                    "value_id":45,
                    "value":"金属灰"
                },
                {
                    "key_id":3,
                    "key":"图案",
                    "value_id":9,
                    "value":"七龙珠"
                },
                {
                    "key_id":4,
                    "key":"尺码",
                    "value_id":14,
                    "value":"小号 S"
                }
            ],
            "code":"2$1-45#3-9#4-14",
            "stock":5
        },
        {
            "id":3,
            "price":66,
            "discount_price":59,
            "online":true,
            "img":"http://i2.sleeve.7yue.pro/m17.png",
            "title":"青芒色·灌篮高手",
            "spu_id":2,
            "category_id":17,
            "root_category_id":3,
            "specs":[
                {
                    "key_id":1,
                    "key":"颜色",
                    "value_id":42,
                    "value":"青芒色"
                },
                {
                    "key_id":3,
                    "key":"图案",
                    "value_id":10,
                    "value":"灌篮高手"
                },
                {
                    "key_id":4,
                    "key":"尺码",
                    "value_id":15,
                    "value":"中号 M"
                }
            ],
            "code":"2$1-42#3-10#4-15",
            "stock":999
        },
        {
            "id":4,
            "price":88,
            "discount_price":100,
            "online":true,
            "img":"http://i2.sleeve.7yue.pro/m26.png",
            "title":"青芒色·圣斗士",
            "spu_id":2,
            "category_id":17,
            "root_category_id":3,
            "specs":[
                {
                    "key_id":1,
                    "key":"颜色",
                    "value_id":42,
                    "value":"青芒色"
                },
                {
                    "key_id":3,
                    "key":"图案",
                    "value_id":11,
                    "value":"圣斗士"
                },
                {
                    "key_id":4,
                    "key":"尺码",
                    "value_id":16,
                    "value":"大号  L"
                }
            ],
            "code":"2$1-42#3-11#4-16",
            "stock":8
        },
        {
            "id":5,
            "price":77,
            "discount_price":59,
            "online":true,
            "img":"http://i1.sleeve.7yue.pro/assets/09f32ac8-1af4-4424-b221-44b10bd0986e.png",
            "title":"橘黄色·七龙珠",
            "spu_id":2,
            "category_id":17,
            "root_category_id":3,
            "specs":[
                {
                    "key_id":1,
                    "key":"颜色",
                    "value_id":44,
                    "value":"橘黄色"
                },
                {
                    "key_id":3,
                    "key":"图案",
                    "value_id":9,
                    "value":"七龙珠"
                },
                {
                    "key_id":4,
                    "key":"尺码",
                    "value_id":14,
                    "value":"小号 S"
                }
            ],
            "code":"2$1-44#3-9#4-14",
            "stock":7
        }
    ],
    "spu_img_list":[
        {
            "id":165,
            "img":"http://i1.sleeve.7yue.pro/assets/5605cd6c-f869-46db-afe6-755b61a0122a.png",
            "spu_id":2
        }
    ],
    "spu_detail_img_list":[
        {
            "id":24,
            "img":"http://i2.sleeve.7yue.pro/n4.png",
            "spu_id":2,
            "index":1
        }
    ],
    "sketch_spec_id":1,
    "default_sku_id":2
}
    `)
    this.setData({
      spu
    })
  },

  onSelect(event){
    this.setData({
      specShow:true,
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