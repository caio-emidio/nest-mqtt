export default () => ({
    mqtt: {
        host: process.env.MQTT_HOST,
        port: process.env.MQTT_PORT,
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD,
    },
});