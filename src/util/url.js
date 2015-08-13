/**
 * 详细的模型参考 MDN中的 URL
 * (https://developer.mozilla.org/en-US/docs/Web/API/URL)
 * URLUtils
 * (https://developer.mozilla.org/en-US/docs/Web/API/URLUtils)
 * 和 URLSearchParams
 * (https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
 * 和 url parser
 * (https://github.com/component/url/blob/master/index.js#L10)
 */

import type from './type'
import object from './object'

class URLSearchParams {
    constructor(query) {
        var list = query.split('&'),
            params = this._params = {};
        list.forEach(function (param) {
            var kv = param.split('=');
            params[kv[0]] = decodeURI(kv[1]);
        });
    }

    append(key, value) {
        this._params[key] = value;
    }

    delete(key) {
        delete this._params[key]
    }

    get(key) {
        return this._params[key];
    }

    getAll() {
        return this._params;
    }

    has(key) {
        return !!this._params[key];
    }

    set(key, value) {
        this._params[key] = value;
    }

    toString() {
        var query = '';
        Object.keys(this._params).forEach(key => {
            query += [key, '=', JSON.stringify(params[key]), '&'].join('');
        });
        return query.slice(0, -1);
    }
}

class URL {
    constructor(url) {
        var a;
        if (type.isLocation(url)) {
            a = url;
        } else if (type.isString(url)) {
            if (window.URL) {
                Object.keys(URL.prototype).forEach( key => {
                    if (key !== 'toString' && key !== 'constructor'){
                        window.URL.prototype[key] = this[key];
                        console.log()
                    }
                });
                var rst = new window.URL(url);
                rst.searchParams = new URLSearchParams(rst.search.slice(1));
                return rst
            } else {
                a = document.createElement('a');
                a.href = url;
            }
        } else {
            return NaN;
        }
        this.href = a.href;
        this.protocol = a.protocol;
        this.host = a.host;
        this.port = a.port;
        this.pathname = a.pathname;
        this.hash = a.hash;
        this.search = a.search;
        this.username = a.username;
        this.password = a.password;
        this.origin = a.origin;
        this.searchParams = new URLSearchParams(this.search.slice(1));

    }

    query(name) {
        return this.searchParams.get(name);
    }

    queryAll() {
        return this.searchParams
    }

    toString() {
        return [this.origin, this.pathname, this.hash, '?', this.searchParams].join('');
    }

    stringify(pathname, params) {
        var query = '';
        if (type.isString(pathname)) {
            this.pathname = pathname;
        }else{
            params = pathname
        }
        Object.keys(params).forEach(function (key) {
            query += [key, '=', JSON.stringify(params[key]), '&'].join('');
        });
        return [this.origin, this.pathname, this.hash, '?', query].join('').slice(0, -1);
    }
}

URL.URLSearchParams = URLSearchParams;
URL.location= new URL(location);
export default URL;