class Matrix {
    m

    constructor(martix) {
        this.m = martix
    }

    // 矩阵行
    rowsNum() {
        return this.m.length
    }

    // 矩阵列
    colsNum() {
        return this.m[0].length
    }

    // 遍历矩阵
    each(callback) {
        for (let j = 0; j < this.colsNum(); j++) {
            for (let i = 0; i < this.rowsNum(); i++) {
                const element = this.m[i][j]
                callback(element, i, j)
            }
        }
    }

    // 转置
    transpose() {
        const desArr = []
        for (let j = 0; j < this.colsNum(); j++) {
            desArr[j] = []
            for (let i = 0; i < this.rowsNum(); i++) {
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }

}

export {
    Matrix
}