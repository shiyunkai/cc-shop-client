import {CellStatus} from "../../core/enum";

class Cell {
    title
    id
    status = CellStatus.WAITING
    spec

    constructor(spec) {
        this.spec = spec
        this.title = spec.value
        this.id = spec.value_id
    }

    getCellCode(){
        return this.spec.key_id + '-'+this.spec.value_id
    }
}

export {
    Cell
}