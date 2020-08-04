"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"users",
			[
				{
					name: "Leo Messi",
					email: "leo@messi.com",
					phone: 1234567,
					password: "test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Dan Abramov",
					email: "dan@redux.com",
					phone: 1234567,
					password: "test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
}
