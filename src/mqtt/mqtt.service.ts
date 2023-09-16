import { Injectable, OnModuleInit } from "@nestjs/common";
import { connect } from "mqtt";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MqttService implements OnModuleInit {
    constructor(private configService: ConfigService) { }
    private mqttClient;

    public onModuleInit() {
        const host = this.configService.get<string>('mqtt.host');
        const port = this.configService.get<number>('mqtt.port');
        const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

        const connectUrl = `mqtt://${host}:${port}`;

        this.mqttClient = connect(connectUrl, {
            clientId,
            clean: true,
            connectTimeout: 4000,
            username: this.configService.get<string>('mqtt.username'),
            password: this.configService.get<string>('mqtt.password'),
            reconnectPeriod: 1000,
        });

        this.mqttClient.on("connect", function () {
            console.log("Connected to MQTT Broker!");
        });

        this.mqttClient.on("error", function () {
            console.log("Error in connecting to CloudMQTT");
        });
    }
    public publish(topic: string, payload: string): string {
        this.mqttClient.publish(topic, payload);
        return `Publishing to ${topic}`;
    }
}
