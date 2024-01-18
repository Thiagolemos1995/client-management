import { Module } from '@nestjs/common';
import { Pool } from 'pg';

const dbProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    user: process.env.POSTGRES_USER || 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DATABASE || 'clients',
    password: process.env.POSTGRES_PASSWORD || 'admin',
    port: Number(process.env.POSTGRES_PORT) || 5432,
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}
