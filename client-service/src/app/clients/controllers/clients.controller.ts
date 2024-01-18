import { Controller, Get } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}
  @Get('/')
  getClients() {
    return this.clientService.getClients();
  }
}
