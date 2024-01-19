import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { CreateClient } from '../models';
import { AxiosError } from 'axios';

@Injectable()
export class ClientsService {
  constructor(@Inject('PG_CONNECTION') private conn: Pool) {}

  async getClients() {
    try {
      const response = await this.conn.query('SELECT * FROM clients');
      return response.rows;
    } catch (error) {
      const formattedError = error as AxiosError;
      return {
        status: 500,
        message: formattedError.stack,
      };
    }
  }

  async getClientById(name: string) {
    try {
      const response = await this.conn.query(
        `SELECT * FROM clients WHERE name LIKE '%${name}%'`,
      );
      return response.rows;
    } catch (error) {
      const formattedError = error as AxiosError;
      return {
        status: 500,
        message: formattedError.stack,
      };
    }
  }

  async createClient(createClient: CreateClient) {
    try {
      const response = await this.conn.query(
        `INSERT INTO clients (name, email, phone) VALUES ('${createClient.name}', '${createClient.email}', '${createClient.phone}') RETURNING *`,
      );
      return response.rows;
    } catch (error) {
      const formattedError = error as AxiosError;
      return {
        status: 500,
        message: formattedError.stack,
      };
    }
  }
}
