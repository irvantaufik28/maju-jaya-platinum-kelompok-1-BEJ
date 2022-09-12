const bcrypt = require("bcrypt")
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'admin',
          username: 'admin',
          image: null,
          telp: null,
          is_admin: true,
          email:'admin@mail.com',
          password: bcrypt.hashSync('123456', 10),
          address_id:null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
