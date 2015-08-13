const PI = Math.PI;
const ARC = PI / 180; //每度的弧度值
const Radius = 6378137; //赤道半径
const Equator = 2 * PI * Radius; //赤道长度
const SemiEquator = Equator / 2.0; //赤道半周长

export default class Coordinate {
    constructor(latitude, longtitude, zoom) {
        this.latitude = latitude;
        this.longitude = longtitude;
        this.zoom = zoom;
    }

    /**
     * @desc 每一像素的对应的地理距离值
     * @param size
     * @param zoom
     * @returns {number}
     */
    resolute(size = 256, zoom = this.zoom) {
        return Equator / (size * (Math.pow(2, zoom)))
    }

    /**
     * @desc 转换为墨卡托坐标
     * @returns {{x: number, y: number}}
     */
    toMercator() {
        var x = this.longitude * SemiEquator / 180.0,
            y = Math.log(Math.tan((90 + this.latitude) * PI / 360.0)) / (PI / 180.0);
        y = y * SemiEquator / 180.0;
        return {x, y}
    }

    /**
     * @desc 转换为像素点
     * @param size
     * @param zoom
     * @returns {{x: number, y: number}}
     */
    toPixel(size, zoom) {
        var mercator = this.toMercator();
        var res = this.resolute(size, zoom);
        var x = (mercator.x + SemiEquator) / res,
            y = (mercator.y + SemiEquator) / res;
        return {x, y}
    }

    /**
     * @desc 转换为磁块
     * @param size
     * @param zoom
     * @returns {{x: number, y: number}}
     */
    toTile(size, zoom) {
        var pixel = this.toPixel(size, zoom);
        var x = Math.ceil(pixel.x / size) - 1,
            y = Math.ceil(pixel.y / size) - 1;
        return {x, y}
    }
}

