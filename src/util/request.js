import { extend, clone } from './object'
import { URL } from './url'
const Configs = {
    type: 'GET',
    beforeSend: empty,
    success: empty,
    error: empty,
    complete: empty,
    context: null,
    global: true,
    accepts: {
        script: 'text/javascript, application/javascript, application/x-javascript',
        json: 'application/json',
        xml: 'application/xml, text/xml',
        html: 'text/html',
        text: 'text/plain'
    }
};


export default class Request {
    constructor(options = {}) {
        super();
        options = extend(options, Configs);
        this.url = options.url || URL.location;
        this.dataType = options.dataType;
        this.mime = options.accepts[data];
        this.async = options.async;
        this.crossDomain = false;


        this.xhr = new XMLHttpRequest();
        this.handle().then(this.success);
        this.open().config().send();
    }

    config() {
        var headers = {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
        };
        Object.keys(headers).forEach((header, value) => {
            this.xhr.setRequestHeader(header, value);
        });
        return this;
    }

    handle() {
        var xhr = this.xhr,
            dataType = this.dataType;
        return new Promise(function (resolve, reject) {
            xhr.onreadystatechange = function () {
                var result;
                if (xhr.readyState == 4) {
                    xhr.onreadystatechange = empty;
                    clearTimeout(timer);
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
                        result = xhr.responseText;
                        try {
                            if (dataType === 'script') (1, eval)(result);
                            else if (dataType === 'xml') result = xhr.responseXML;
                            else if (dataType === 'json') result = /^\s*$/.test(result) ? null : JSON.parse(result)
                        } catch (e) {
                            reject(e);
                        }
                        resolve(result)
                    } else {
                        reject('')
                    }
                }
            };
        });
    }


    open() {
        this.xhr.open(this.type, this.url, this.async, this.username, this.password);
        return this;
    }

    send() {
        this.send(this.data);
        return this;
    }

    padding() {

    }


}


function empty() {
}