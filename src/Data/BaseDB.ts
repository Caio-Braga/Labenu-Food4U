import Knex from 'knex';

export class BaseDB {
    protected connection = Knex({
      client: "mysql",
      connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        port: 3306,
        user: "eduardo",
        password: "v$vdxCYsib9BsCY38k0k",
        database: "bouman-eduardo"
      }
    })
}