var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

// establish connection upon running them program and run listItems
connection.connect(function(err) {
    if (err) throw err;
    listItems();
});


// lists all of the products in the bamazon database
function listItems() {
    var query = 'select * from products';
    connection.query(query, function(err, res) {
        console.log(`\nWelcome to Bamazon`);
        for (var i = 0; i < res.length; i++) {
            console.log(`\nitem id: ${res[i].item_id}\n` +
                        `product name: ${res[i].product_name}\n` + 
                        `price: ${res[i].price}\n`)
        }
        orderItem();
    });
}

// prompts the user once the items have been listed
function orderItem() {
    inquirer.prompt([
     {
        name: 'item',
        type: 'input',
        message: 'Which item would you like to purchase? (enter item id)'
     }, {
        name: 'quantity',
        type: 'input',
        message: 'How many would you like to order?'
     }
    ])
    .then(function(answers) {
        var query = 'select * from products where ?';
        connection.query(query, {item_id: parseInt(answers.item)}, function(err, res) {
            if (err) throw err;
            if (res[0].stock_quantity > answers.quantity) {
                updateInv(res[0].product_name, answers.quantity, res[0].price);
            } else {
                console.log(`sold out! try again later`);    
                listItems();
            }
        })
    })
}

// updates the product inventory when an item is ordered
function updateInv(item, quantity, price) {
    var query = 'update products set ? where ?';
    connection.query(
        query, 
        [
          {
            stock_quantity: quantity
          },
          {
            item_id: item
          }
        ],
        function(err) {
            if (err) throw err;
            console.log(`You purchased ${quantity} ${item} for $${price}`);
        }
    );
    connection.end();
}
