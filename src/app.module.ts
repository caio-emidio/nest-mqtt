import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
@Module({
  imports: [MqttModule, ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true,
  }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
