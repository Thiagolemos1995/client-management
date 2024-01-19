import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';
import { CreateClient } from '../models';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}
  @Get('/')
  getClients() {
    return this.clientService.getClients();
  }

  @Get(':name')
  getClientByName(@Param('name') name: string) {
    return this.clientService.getClientById(name);
  }

  @Post('/')
  createClient(@Body() clientData: CreateClient) {
    return this.clientService.createClient(clientData);
  }
}
