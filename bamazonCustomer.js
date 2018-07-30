var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    listItems();
    orderItem();
  });

function listItems() {
    var query = 'select * from products';
    connection.query(query, function(err, res) {
        console.log(`\nWelcome to Bamazon`);
        for (var i = 0; i < res.length; i++) {
            console.log(`\nitem id: ${res[i].item_id}\n` +
                        `product name: ${res[i].product_name}\n` + 
                        `price: ${res[i].price}\n`)
        }
    });
}

function orderItem() {
    inquirer.prompt([
     {
        name: 'item',
        type: 'input',
        message: 'Which item would you like to purchase?'
     }, {
        name: 'quantity',
        type: 'input',
        message: 'How many would you like to order?'
     }
    ])
}
