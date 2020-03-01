import {
    config
} from '../config/config.js'

import {
    promisic
} from "./util.js";

/**
 * 定义http的request方法，包装wx.request 方法
 */
class Http {
    static async request({url, data, method = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
        });
        return res.data;
    };
}


export {
    Http
}