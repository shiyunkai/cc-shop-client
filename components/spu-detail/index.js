// components/sku-select/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object
  },

  observers:{
    'data':function(data){
      if(!data){
        return
      }
      if(!data.sku_list){
        return
      }
      
      this.setData({
        sku:data.sku_list[0]
      })

    }
  },

  lifetimes:{
    attached:function(){
      console.log('attache')
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    sku:Object, // 当前选中的sku
    selectedSpecs:String
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
