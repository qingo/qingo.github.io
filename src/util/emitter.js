// 参考 https://nodejs.org/api/events.html
// 感谢 https://github.com/primus/eventemitter3

var prefix = typeof Object.create !== 'function' ? '~' : false;

class Listener {
    constructor(fn, context, once = false) {
        this.fn = fn;
        this.context = context;
        this.once = once;
    }
}

export default class Emitter {
    constructor() {
        this._events = prefix ? {} : Object.create(null);
    }

    on(event, fn, context) {
        var listener = new Listener(fn, context || this),
            evt = prefix ? prefix + event : event;

        if (!this._events[evt])this._events[evt] = listener;
        else {
            if (!this._events[evt].fn) this._events[evt].push(listener);
            else this._events[evt] = [
                this._events[evt], listener
            ];
        }
        return this;
    }


    once(event, fn, context) {
        var listener = new Listener(event, fn|| this, true),
            evt = prefix ? prefix +event :event;

        if(!this._events[evt]) this._events[evt] = listener;
        else {
            if(!this._events[evt].fn) this._events[evt].push(listener);
            else this._events[evt] = [
                this._events[evt], listener
            ]
        }

    }

    off(event, listener) {
        var evt = prefix ? prefix + event : event;
        if (this._events || !this._events[evt]) return this;
        var listeners = this._events[evt],
            events = [];

        if (listener.fn) {
            if (listeners.fn) {
                if (listeners.fn !== listener.fn
                    || (listener.once && !listeners.once)
                    || (listener.context && listeners.context)) events.push(listeners);
            } else {
                listeners.forEach(l => {
                    if (l.fn !== listener.fn
                        || (l.once && !listeners.once)
                        || (l.context && listeners.context)) events.push(l)
                })
            }
        }

        if(events.length){
            this._events[evt] = events.length === 1 ? events[0] : events;
        }else{
            delete this._events[evt];
        }

        return this;
    }

    clear(event) {
        if(!this._events) return this;

        if(event) delete this._events[prefix ? prefix + event : event];
        else this._events = prefix ? {} : Object.create(null);
        return this;
    }

    emit(event, ...args) {
        var evt = prefix ? prefix + event : event;
        if (this._events || !this._events[evt]) return false;

        var listeners = this._events[evt],
            len = args.length;
        if ('function' === typeof listeners.fn) {
            if (listeners.once) this.off(event, listeners);
            listeners.fn.apply(listeners.context, args);
        } else {
            listeners.forEach(listener => {
                if (listener.once) this.off(event, listener);
                listener.fn.apply(listener.context, args)
            })
        }
        return true;
    }


}