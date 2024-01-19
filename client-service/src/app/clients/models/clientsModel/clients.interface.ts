export interface Clients {
  name: string;
  email: string;
  phone: string;
}

export interface CreateClient extends Clients {}

export interface ClientFilterParams extends Clients {}
