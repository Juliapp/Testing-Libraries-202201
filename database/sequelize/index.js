import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('teste', 'root', '1234', {
  //passar os dados para o sequelize
  dialect: 'mysql', //informar o tipo de banco que vamos utilizar
  host: 'localhost', //o host, neste caso estamos com um banco local
});

const PessoaRepository = sequelize.define(
  'pessoa',
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    idade: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

async function DB() {
  await sequelize.sync();

  // Com ORM
  // const clients = await PessoaRepository.findAll();
  // console.log(clients);

  // Com Raw Queries

  // Inserindo
  // await sequelize.query(`
  //   INSERT INTO pessoa(nome, idade)
  //   VALUES
  //     ('Mateus', 18);
  // `);

  // Buscando
  const result = await sequelize.query('SELECT * FROM pessoa');
  console.log(result);
  sequelize.raw;
}

DB();

export default sequelize; //exportar
