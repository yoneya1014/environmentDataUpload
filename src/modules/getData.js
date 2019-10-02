/* センサーデータ取得モジュール */

module.exports = {

    /* 温度取得 */
    "getTemplature": function () {
        return 25;
    },

    /* 湿度取得 */

    "getHumidity": function () {
        return 50;
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