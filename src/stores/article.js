import Rest from '../util/rest'

console.log(Rest);
export default class Article extends Rest{
    constructor(url){
        super(url);
    }
}