const { user, todoItem, todoList, tag } = require("./models")

// async function listsWithUsers() {
//   const lists = await todoList.findAll({
//     include: [user],
//   });

//   return lists.map((list) => list.get({ plain: true }));
// }

// //listsWithUsers().then((lists) => console.log(lists));

// async function getUsers() {
//   const allUsers = await user.findAll({
//     include: { model: todoList, attributes: ["name"] },
//   });
//   return allUsers.map((user) => user.get({ plain: true }));
// }

// getUsers().then((users) => console.log(users));

async function findOneUserById(id) {

	const result = await user.findByPk(id, { 
    include: { 
      model: todoList, 
      attributes: ["name"]
    } 
  })

	return result.get({ plain: true })
}

//findOneUserById(1).then(user => console.log("user by id with lists", user))

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] }
      }
    ]
  });
  return result.get({ plain: true });
}

//fullUserById(1).then(user => console.log("User with tasks", user));

async function itemsWithTags() {
  const items = await todoItem.findAll({ include: [tag] });
  return items.map(item => item.get({ plain: true }));
}

itemsWithTags().then(items => console.log("items with tags", items));