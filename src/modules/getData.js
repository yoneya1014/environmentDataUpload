/* センサーデータ取得モジュール */

let data = {};

module.exports = {

    /* データセット */
    "setData": function (data) {
        this.data = data;
    },

    /* 温度取得 */
    "getTemperature": function () {
        return data.temperature;
    },

    /* 湿度取得 */

    "getHumidity": function () {
        return data.humidity;
    },

    /* 土壌湿度取得 */

    "getSoliHumidity": function () {
        return 65;
    },

    /* 気圧取得 */

    "getBarometricPressure": function () {
        return 1023;
    },

    /* 照度取得 */
    "getIlluminance": function () {
        return 60;
    }
};