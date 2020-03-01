// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";
import {Spu} from "../../models/spu";

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        spu: Object
    },

    observers: {
        'spu': function (spu) {
            if (!spu) {
                return
            }
            if (Spu.isNoSpec(spu)) {
                this.processNoSpec(spu)
            } else {
                this.processHasSpec(spu)
            }
        },

    },

    /**
     * 组件的初始数据
     */
    data: {
        fences: [],
        judger: Object,
        previewImg: String,
        title: String,
        price: Number,
        discountPrice: Number,
        count:Number,
        noSpec: false,
        skuIntact: false,
        selectedSpecsNames: String,
        noSelectedSpecsNames: String
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindFenceGroupData(fenceGroup) {
            this.setData({
                fences: fenceGroup.fences
            })
        },

        bindSpuData() {
            const spu = this.properties.spu
            this.setData({
                previewImg: spu.img,
                title: spu.title,
                price: spu.price,
                discountPrice: spu.discount_price,
                skuIntact: this.data.judger.isSkuIntact()
            })
        },

        bindSkuData(sku) {
            this.setData({
                previewImg: sku.img,
                title: sku.title,
                price: sku.price,
                discountPrice: sku.discount_price,
                stock: sku.stock,
                skuIntact: this.data.judger.isSkuIntact()
            })
        },

        bindSelectedSkuNames() {
            this.setData({
                selectedSpecsNames: this.data.judger.getSkuPendingNames(),
                skuIntact: this.data.judger.isSkuIntact()
            })
        },

        bindNoSelectedSkuNames() {
            this.setData({
                noSelectedSpecsNames: this.data.judger.getSkuNoPendingSpecs(),
                skuIntact: this.data.judger.isSkuIntact()
            })
        },

        processNoSpec(spu) {
            this.setData({
                noSpec: true
            })
            this.bindSkuData(spu.sku_list[0])
        },

        processHasSpec(spu) {
            const fenceGroup = new FenceGroup(spu)
            fenceGroup.initFences()
            this.data.judger = new Judger(fenceGroup)
            const defaultSku = fenceGroup.getDefaultSku()
            if (defaultSku) {
                this.bindSkuData(defaultSku)
            } else {
                this.bindSpuData()
            }
            this.bindFenceGroupData(fenceGroup)
            this.bindSelectedSkuNames()
            this.bindNoSelectedSkuNames()
        },

        onCellTap(event) {
            const cell = event.detail.cell
            // console.log('cell',cell) // 这里的cell是渲染层返回的，不是modules中的Cell类对象，只有属性，没有方法
            const x = event.detail.x
            const y = event.detail.y
            const judger = this.data.judger
            judger.judge(cell, x, y)
            this.bindFenceGroupData(judger.fenceGroup)
            this.bindSelectedSkuNames()
            this.bindNoSelectedSkuNames()

            if(this.data.skuIntact){
                const sku = this.data.judger.getCurrentSelectedSku()
                this.bindSkuData(sku)
            }
        },

        onBuy(event){
            if(!this.data.skuIntact){
                wx.showToast({
                    title:"请选择: "+this.data.noSelectedSpecsNames,
                    icon:"none"
                })
            }

        }
    }
})
