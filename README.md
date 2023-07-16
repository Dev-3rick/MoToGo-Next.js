
MoToGo - Aplicativo de Entrega de Moto
======================

MoToGo é um aplicativo de entrega de moto, onde os motociclistas podem pegar encomendas e entregá-las nos locais solicitados pelos clientes. O backend é desenvolvido em C# e o frontend em Next.js com Tailwind CSS.

Funcionalidades Principais
---------------------------

- Registro e autenticação de motociclistas
- Solicitação de encomendas pelos clientes
- Atribuição de encomendas aos motociclistas disponíveis
- Rastreamento de entrega em tempo real
- Avaliação e feedback dos clientes

Requisitos do Projeto
----------------------

- Node.js versão 12 ou superior
- NPM ou Yarn instalado
- Banco de dados SQL Server
- ASP.NET Core para o backend em C#
- Next.js e Tailwind CSS para o frontend

Configuração do Ambiente
-------------------------

Backend (C#) "Ainda não finalizado"
~~~~~~~~~~~~~

1. Clone o repositório do projeto

2. Abra a solução do backend em um ambiente de desenvolvimento (Visual Studio ou Visual Studio Code)

3. Configure a conexão com o banco de dados no arquivo `appsettings.json`

4. Execute as migrações para criar as tabelas do banco de dados:

   .. code-block:: bash

      dotnet ef database update

5. Inicie o servidor backend:

   .. code-block:: bash

      dotnet run

Frontend (Next.js)
~~~~~~~~~~~~~~~~~~

1. Abra o diretório do frontend no terminal

2. Instale as dependências:

   .. code-block:: bash

      npm install

      ou

      yarn install

3. Configure as variáveis de ambiente no arquivo `.env.local`:

   .. code-block:: plaintext

      NEXT_PUBLIC_API_URL=http://localhost:5000/api

4. Inicie o servidor de desenvolvimento:

   .. code-block:: bash

      npm run dev

      ou

      yarn dev

5. Abra o aplicativo no navegador em `http://localhost:3000`

Contribuição
-------------

Contribuições são bem-vindas! Se você quiser colaborar com este projeto, siga as diretrizes de contribuição descritas em CONTRIBUTING.md.

Licença
--------

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
