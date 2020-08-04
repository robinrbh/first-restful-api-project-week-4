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
			"todoItems",
			[
				{
					task: "Add data",
					deadline: "now",
				},
				{
					task: "Remove some data",
					deadline: "soon",
        },
        {
					task: "Remove some more data? Revert and apply",
					deadline: "later"
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
