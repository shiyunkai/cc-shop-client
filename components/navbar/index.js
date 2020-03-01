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
    top:0,
    placeholderH:0
  },

  lifetimes: {
    async attached () {
      const res = await promisic(wx.getSystemInfo)()
      if(res.model==="iPhone X"){
        res.statusBarHeight+=15
        res.safeArea.top+=15
      }
      const navH = res.statusBarHeight+26;
      const top = res.safeArea.top+54
      const placeholderH = res.statusBarHeight+120
      this.setData({
        navH,
        top,
        placeholderH
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