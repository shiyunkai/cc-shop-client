class Activity {
    static locationD = 'a-2'

    static async getHomeLocationD() {
        return await JSON.parse(`{
    "id": 2,
    "title": "夏日好礼送不停",
    "entrance_img": "http://i2.sleeve.7yue.pro/m14.png",
    "online": true,
    "remark": "限服装、鞋、文具等商品",
    "start_time": null,
    "end_time": null
}`)
        return await Http.request({
            url: `/activity/name/${Activity.locationD}`
        })
    }
}

export {
    Activity
}