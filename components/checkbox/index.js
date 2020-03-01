// components/checkbox/index.js
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
    selected:false,
    src : './images/select.png',
    activeSrc : './images/select@selected.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    ontap(event){
      this.setData({
        selected:!this.data.selected
      })
      this.triggerEvent('onCheckboxTap',{selected:this.data.selected})
    }
  }
})
