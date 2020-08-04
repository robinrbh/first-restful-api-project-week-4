"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"todoLists",
			[
				{
          name: "Leo's football list",
          userId: 1,
          createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
          name: "Leo's other list",
          userId: 1,
          createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
          name: "Dan's list",
          userId: 2,
          createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.bulkDelete("todoLists", null, {});
	},
}
