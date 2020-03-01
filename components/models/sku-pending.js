/**
 * 用户的选择状态记录
 */
import {Cell} from "./cell";
import {Joiner} from "../../utils/joiner";

class SkuPending {
    pending = []
    size

    constructor(size) {
        this.size = size
    }

    init(sku) {
        for (let i = 0; i < sku.specs.length; i++) {
            const cell = new Cell(sku.specs[i])
            this.insertCell(cell, i)
        }

    }

    /**
     *
     * @param cell
     * @param x 行号
     */
    insertCell(cell, x) {
        this.pending[x] = cell
    }

    // 是否已经选择完整sku
    isIntact() {
        // if(this.size !== this.pending.length){
        //     return false
        // }

        for (let i = 0; i < this.size; i++) {
            if (this._isEmptyPart(i)) {
                return false
            }
        }

        return true
    }

    removeCell(x) {
        this.pending[x] = null
    }

    findSelectedCellByX(x) {
        return this.pending[x]
    }

    isSelected(cell, x) {
        const pendingCell = this.pending[x]
        if (!pendingCell) {
            return false
        }

        return cell.id === pendingCell.id
    }

    getSkuNames() {
        const joiner = new Joiner('，')
        this.pending.forEach(c => {
            if (c) {
                joiner.join(c.title)
            }
        })

        return joiner.getStr()
    }

    getSelectedSkuCode() {
        const joiner = new Joiner('#')
        this.pending.forEach(s => {
            if (s) {
                joiner.join(s.spec.key_id + '-' + s.spec.value_id)
            }
        })

        return joiner.getStr()
    }

    _isEmptyPart(index) {
        return !this.pending[index]
    }

}

export {
    SkuPending
}