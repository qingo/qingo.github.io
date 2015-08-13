// 参考 restangular的设计封装数据接口(https://github.com/mgonto/restangular)
import Request from './request'
import { Emitter } from './emitter'
import URL from './url'



export default class Rest extends Emitter {
    constructor(url, type) {
        this.url = new URL(url);

    }

    get(params) {
        new Promise(function(resolve, reject){
            new Request({success: function(data){
                resolve(data);
            },error: function(){
                reject('');
            }});
        });

    }

    post() {

    }

    update() {

    }

    delete() {

    }

    jsonp(params){
        return new Promise(function (resolve, reject) {
            JSONP(this.url.stringify(params), function (data) {
                this.config(data);
                resolve(data);
            }.bind(this));
        }.bind(this));
    }

    head() {

    }

    config(data) {
        if (+data.status.status_code === 0) {
            this.list = data.result;
        } else {
        }
    }
}