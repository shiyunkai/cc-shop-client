import {Http} from "../utils/http";

class Banner {
   static locationB = 'b-1'
    static locationG = 'b-2'
   static async getHomeLocationB() {
     return await JSON.parse(`{
    "id": 1,
    "name": "b-1",
    "description": "首页顶部主banner",
    "img": null,
    "title": null,
    "items": [
        {
            "id": 12,
            "img": "http://i2.sleeve.7yue.pro/m1.png",
            "keyword": "t-2",
            "type": 3,
            "name": null,
            "banner_id": 1
        },
        {
            "id": 13,
            "img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
            "keyword": "23",
            "type": 1,
            "name": null,
            "banner_id": 1
        },
        {
            "id": 14,
            "img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
            "keyword": "24",
            "type": 1,
            "name": null,
            "banner_id": 1
        }
    ]
}`)
      return await Http.request({
         url: `banner/name/${Banner.locationB}`
      })
   }

    static async getHomeLocationG() {
        return await JSON.parse(`{
    "id": 2,
    "name": "b-2",
    "description": "热销商品banner",
    "img": "http://i2.sleeve.7yue.pro/m4.png",
    "title": null,
    "items": [
        {
            "id": 5,
            "img": "http://i2.sleeve.7yue.pro/m6.png",
            "keyword": "28",
            "type": 1,
            "name": "left",
            "banner_id": 2
        },
        {
            "id": 6,
            "img": "http://i2.sleeve.7yue.pro/m7.png",
            "keyword": "26",
            "type": 1,
            "name": "right-top",
            "banner_id": 2
        },
        {
            "id": 7,
            "img": "http://i2.sleeve.7yue.pro/m8.png",
            "keyword": "27",
            "type": 1,
            "name": "right-bottom",
            "banner_id": 2
        }
    ]
}
`)
        return await Http.request({
            url: `banner/name/${Banner.locationG}`
        })
    }


}

export{
   Banner
}