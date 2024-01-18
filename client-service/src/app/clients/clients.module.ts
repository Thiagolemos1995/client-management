import { Module } from '@nestjs/common';
import { ClientsService } from './services/clients.service';
import { ClientsController } from './controllers/clients.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
