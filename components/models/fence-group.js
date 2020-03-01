import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu
    skuList
    fences

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }

    // 方法一
    initFences1() {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        let currentJ = -1
        matrix.each((element, i, j) => {
            if (currentJ !== j) {
                currentJ = j
                fences[currentJ] = this._createFance(element)
            }
            fences[currentJ].pushValueTitle(element.value)
        })
    }

    // 方法二 使用矩阵转置
    initFences() {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        const AT = matrix.transpose()

        AT.forEach(r => {
            const fance = new Fence(r)
            fance.init()
            fences.push(fance)
        })

        this.fences = fences
    }

    eachCell(cb) {
        for (let i = 0; i < this.fences.length; i++) {
            for (let j = 0; j < this.fences[i].cells.length; j++) {
                const cell = this.fences[i].cells[j]
                cb(cell, i, j)
            }
        }
    }

    getDefaultSku(){
        const defaultSkuId = this.spu.default_sku_id
        if(!defaultSkuId){
            return
        }

        return this.skuList.find(s=>s.id === defaultSkuId)
    }

    setCellStatusById(cellID, status){
        this.eachCell((cell)=>{
            if(cell.id === cellID){
                cell.status = status
            }
        })

    }

    setCellStatusByXY(x,y,status){
        this.fences[x].cells[y].status = status
    }


    _createMatrix(skuList) {
        const m = []
        skuList.forEach(sku => {
            m.push(sku.specs)
        })
        return new Matrix(m)
    }

    _createFance(element) {
        const fence = new Fence()
        return fence
    }
}

export {
    FenceGroup
} 