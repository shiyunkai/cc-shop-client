import {SkuCode} from "./sku-code";
import {CellStatus} from "../../core/enum";
import {SkuPending} from "./sku-pending";
import {Joiner} from "../../utils/joiner";

// Judeger作为沟通类，cell为本职类
class Judger {
    fenceGroup
    pathDict = [] //选择路径字典
    skuPending

    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup
        this._initPathDict()
        this._initSkuPending()
    }

    judge(cell, x, y, isInit=false) {
        if (!isInit) {
            this._changeCurrentCellStatus(cell, x, y)
        }
        this.fenceGroup.eachCell((cell, x, y) => {
            const path = this._findPotentialPath(cell, x, y)
            if (!path) {
                return
            }

            const isIn = this._isInDict(path)
            if (isIn) {
                this.fenceGroup.setCellStatusByXY(x,y,CellStatus.WAITING)
            } else {
                this.fenceGroup.setCellStatusByXY(x,y,CellStatus.FORBIDDEN)
            }
        })
    }

    isSkuIntact(){
        return this.skuPending.isIntact()
    }

    getSkuPendingNames(){
        return this.skuPending.getSkuNames()
    }

    getSkuNoPendingSpecs(){
        const joiner = new Joiner('，')
        const allSpecs = this.fenceGroup.skuList[0].specs
        const selectedSpecs = this.skuPending.pending
        allSpecs.forEach(a=>{
           let exists = selectedSpecs.find(s=>{
               if(s){
                return s.spec.key_id === a.key_id
               }
           })
            if(!exists){
               joiner.join(a.key)
            }
        })

        return joiner.getStr()
    }

    getCurrentSelectedSku(){
        const skuCode = this.skuPending.getSelectedSkuCode()
        const sku = this.fenceGroup.skuList.find(s=>{
            const code = s.code.split("$")
            return skuCode === code[1]
        })

        return sku
    }


    _initSkuPending() {
        const specsLength = this.fenceGroup.fences.length
        this.skuPending = new SkuPending(specsLength)
        const defaultSku = this.fenceGroup.getDefaultSku()
        if (!defaultSku) {
            return
        }
        this.skuPending.init(defaultSku)
        this._initSelectedCell()
        this.judge(defaultSku,null,null,true)

    }

    _initPathDict() {
        this.fenceGroup.spu.sku_list.forEach(s => {
            const skuCode = new SkuCode(s.code)
            this.pathDict = this.pathDict.concat(skuCode.totalSegments)
        })
    }

    _initSelectedCell(){
        this.skuPending.pending.forEach(cell=>{
            this.fenceGroup.setCellStatusById(cell.id,CellStatus.SELECTED)
        })
    }

    _isInDict(path) {
        return this.pathDict.includes(path)
    }

    _changeCurrentCellStatus(cell, x, y) {
        if (cell.status === CellStatus.WAITING) {
            this.fenceGroup.setCellStatusByXY(x,y,CellStatus.SELECTED)
            this.skuPending.insertCell(cell, x)
        }
        if (cell.status === CellStatus.SELECTED) {
            this.fenceGroup.setCellStatusByXY(x,y,CellStatus.WAITING)
            this.skuPending.removeCell(x)
        }
    }


    /**
     *  查找潜在路径
     *  逻辑：对于某个Cell，它的潜在路径是它自己加上其它行的已选Cell
     * @param cell 当前cell
     * @param x
     * @param y
     * @private
     */
    _findPotentialPath(cell, x, y) {
        const joiner = new Joiner('#')
        for (let i = 0; i < this.fenceGroup.fences.length; i++) {
            const selected = this.skuPending.findSelectedCellByX(i)
            if (x === i) {
                // 当前行
                if (this.skuPending.isSelected(cell, i)) {
                    // 当前已选中cell，不需要查找
                    return
                }
                const cellCode = this._getCellCode(cell.spec)
                joiner.join(cellCode)
            } else {
                // 其它行
                if (selected) {
                    // 有已选中元素
                    const selectedCellCode = this._getCellCode(selected.spec)
                    joiner.join(selectedCellCode)
                }
            }
        }

        return joiner.getStr()
    }

    _getCellCode(spec) {
        return spec.key_id + '-' + spec.value_id
    }
}

export {
    Judger
}