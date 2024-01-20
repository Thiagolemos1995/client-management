# ClientManagement

Este é um sistema de gerenciamento de clientes.

Nesta plataforma será possível gerenciar clientes e gerar um plano de percurso
listando em ordem otimizada qual cliente deve ser visitado.

## Tecnologias utilizadas
Foi utilizado como gerenciador do respositório o NX.

O NX é um gerenciador de Monorepo eficiente que auxilia principalmente no desenvolvimento de aplicações em escala

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

--- 

Para a aplicação Back end foi utilizado NestJS.

O NestJS é um framework Node, que utiliza o padrão typescript, onde podemos desenvolver utilizando injeções de dependências, tornando
mais simples o desenvolvimento das aplicações.

<a alt="Nest logo" href="https://nestjs.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/28507035?s=48&v=4" width="45"></a>

---
Como banco de dados foi utilizado Postgresql.

O Postgresql é um sistema gerenciador de banco de dados e relacional de código aberto.

<a alt="postgres logo" href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/177543?s=200&v=4" width="45"></a>

---
Para o Front end foi utilizado NextJS.

O NextJS é um framework React, uma poderosa ferramenta de desenvolvimento, onde é possível renderizar componentes e realizar o data fetching no lado do servidor
disponibilizando uma melhor performance para aplicação.

<a alt="Next logo" href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" width="45"></a>

--- 

Para os componentes foi utilizado a biblioteca Chakra UI.

Uma biblioteca de componentes completa, versátil e de fácil implementação.

<a alt="Chakra UI logo" href="https://chakra-ui.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/54212428?s=200&v=4" width="45"></a>

---

## Instalação do Repositório
Para instalar as dependências no repositório:

- Utilizando npm:
  
    `npm i`

- Utilizando Yarn:
  
    `Yarn`

Para rodar o projeto é necessário possuir o PostgresSQL instalado e rodando.

Utilizando o WSL2:
  - Instalando POSTGRESQL
  
      `sudo apt-get install postgresql`

  - Definir a senha 'admin' ao POSTGRESQL:
  
     `sudo passwd postgres`

    Após este comando, será informado uma interface para inputar a nova senha e confirmar nova senha.

  - Inicie o serviço do banco de dados, caso não tenha iniciado:

      `sudo service postgresql start`

  - Para conectar ao postgres:
  
      `sudo -u postgres psql`

  - Assim que conectado no Postgresql, será necessário adicionar uma nova extensão, para gerar UUIDs:
  
      `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

      `SELECT uuid_generate_v4()`

  - Criando a base de dados clients:
  
      `CREATE DATABASE clients;`

  - Para confirmar se a base de dados foi criada, execute o comando:
  
      `\l`

  - Conectando na base de dados clients:
  
      `\c clients`

  - Criando a tabela de clients:
      ``` CREATE TABLE [IF NOT EXISTS] clients (
          id uuid DEFAULT uuid_generate_v4 (),
          name VARCHAR NOT NULL,
          email VARCHAR NOT NULL,
          phone VARCHAR NOT NULL,
          PRIMARY KEY (id)
      );

  - Pronto, para confirmar se a tabela foi criada, execute o comando:
  
      `\dt`

Com o posgres criado, configurado e rodando, podemos rodar a aplicação.
Com o repositório aberto, abra um terminal e execute os comandos:

  - Para rodar o client-service (aplicação back-end):
      `yarn client-service` ou `npm run client-service`

  - Para rodar a client-ui (aplicação front-end):
      `yarn client-ui` ou `npm run client-ui`

# Próximos passos 
- Implementação de um docker file e docker-compose para subir as imagens e os serviços de forma automática,
- Adicionar a informação de coordenada (x,y) aos clientes da plataforma,
- Adicionar o serviço de calculo de menor Rota entre os clientes,
- Adicionar integração no filtro da tela de Lista de 'Clientes',
- Adicionar controller para edição de clientes;
- Adicionar controller para deletar clientes;
- Adicionar gerenciamento de status via Proxy na client-ui, utilizando Valtio
  
  Obs: Não foi possível desenvolver por completo, pois minha máquina esta estourando o uso de memória ao rodar as aplicações + base de dados no WSL2.