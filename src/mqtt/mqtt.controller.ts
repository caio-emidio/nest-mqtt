
import { Body, Controller, Post } from '@nestjs/common';
import { MqttService } from './mqtt.service';
@Controller()
export class MqttController {
    constructor(private readonly service: MqttService) { }

    @Post()
    create(@Body() mqtt: { topic: string, message: string }): string {
        return this.service.publish(mqtt.topic, mqtt.message)
    }
}