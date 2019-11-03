require('dotenv/config');
require('date-utils');
const admin = require('firebase-admin');
const getData = require('./modules/getData');

admin.initializeApp({
    credential: admin.credential.cert(require('../config/serviceAccountKey')),
    databaseURL: "https://jetfarm-test1.firebaseio.com"
});

const database = admin.database();

function uploadData() {
    const ref = database.ref('data' + String(process.env.SENSOR_NUMBER));
    const date = new Date();
    const data = {
        "templature": getData.getTemplature(),
        "humidity": getData.getHumidity(),
        /*"solihumidity": getData.getSoliHumidity(),
        "barometricpressure": getData.getBarometricPressure(),
        "illuminance": getData.getIlluminance(),
        "timestamp": date.toFormat("YYYY年MM月DD日HH24時MI分SS秒")*/
    };
    console.log(data);
    ref.set(data)
        .catch((error) => {
        console.log(error);
    });
}

setInterval(function () {
    uploadData()
}, process.env.UPLOAD_TIMEOUT);