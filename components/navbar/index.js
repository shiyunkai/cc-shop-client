import {
  promisic
} from "../../utils/util";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    navH: 0,
    top:0
  },

  lifetimes: {
    async attached () {
      const res = await promisic(wx.getSystemInfo)()
      const navH = res.statusBarHeight+26;
      const top = res.safeArea.top+54
      this.setData({
        navH,
        top
      })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toIndex() {
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  }
})