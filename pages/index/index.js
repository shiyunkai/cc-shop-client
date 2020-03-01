//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    spuList: [{
        id:1,
        title: "青梅饼 56克",
        img: "/images/home/spu_1.png",
        desc: "又到一年梅饼季",
        price: 16
      },
      {
        id: 2,
        title: "冻干龙眼榴莲",
        img: "/images/home/spu_2.png",
        desc: "龙眼榴莲，甜香搭配",
        price: 18
      },
      {
        id: 3,
        title: "青梅饼 56克",
        img: "/images/home/spu_1.png",
        desc: "又到一年梅饼季",
        price: 16
      },
      {
        id:4,
        title: "冻干龙眼榴莲",
        img: "/images/home/spu_2.png",
        desc: "龙眼榴莲，甜香搭配",
        price: 18
      },
      {
        id: 5,
        title: "青梅饼 56克",
        img: "/images/home/spu_1.png",
        desc: "又到一年梅饼季",
        price: 16
      },
      {
        id: 6,
        title: "冻干龙眼榴莲",
        img: "/images/home/spu_2.png",
        desc: "龙眼榴莲，甜香搭配",
        price: 18
      }
    ]
  },

  onLoad: function() {
    this._spuListRender()
  },

  _spuListRender(){
    wx.lin.renderWaterFlow(this.data.spuList,false,()=>{})
  }

})