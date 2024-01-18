import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class ClientsService {
  constructor(@Inject('PG_CONNECTION') private conn: Pool) {}

  async getClients() {
    const response = await this.conn.query('SELECT * FROM clients');
    return response.rows;
  }
}
