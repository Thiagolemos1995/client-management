import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
