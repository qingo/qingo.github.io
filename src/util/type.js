var toString = {}.toString;

function typeOf(type){
    return function(instance){
        return toString.call(instance) === `[object ${type}]`;
    }
}

export default {
    isFunction: typeOf('Function'),
    isString: typeOf('String'),
    isArray: Array.isArray || typeOf('Array'),
    isObject: typeOf('Object'),
    isLocation: typeOf('Location')
};