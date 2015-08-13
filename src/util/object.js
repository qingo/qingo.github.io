export function merge (target, source) {
    Object.keys(source).forEach((v, k) => {
        target[k] = v;
    });
}

export function clone (obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function extend(target, source){
    Object.keys(source).forEach((v,k) => {
        if(!target[k]){
            target[k] = v;
        }
    })
}