const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); // é importante que este código fique após app.use(express.json());


app.listen(3333);


/**
 * ABAIXO SEGUEM COMENTÁRIOS INSTRUTIVOS
 */

/**
 * npm serve para instalar um pacote
 * npx serve para executar um pacote
 */

/**
 * 
 * Rodar o servidor Node no terminal
 * npm start
 */


/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * Delete: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados diretamente na rota após "?" (Filtros, paginação)
   * ex: ?page=2&nome=Bruno
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * npm install nodemon -D
    * Faz  com que não precise ficar encerrando a aplicação em toda mudança
    * além disso a instalação com -D coloca esta dependência apenas em dev
    */

    /**
     * Banco de Dados
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     * 
     * Install Knex
     * npm install knex
     * Install BD
     * npm install sqlite3
     */

     /**
      * Para criar a migration
      * npx knex migrate:make migration_name
      * 
      * Para executar a migration
      * npx knex migrate:latest
      * Desfaz a última etapa feita
      * npx knex migrate:rollback
      */