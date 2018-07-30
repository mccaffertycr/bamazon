create database bamazon;
use bamazon;

create table products(
  item_id integer(11) auto_increment not null,
  product_name varchar(255) not null,
  department_name varchar(255),
  price integer(11) not null,
  stock_quantity integer(11),
  primary key (item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values ('The Plant Paradox', 'Books', 7.48, 15);
insert into products (product_name, department_name, price, stock_quantity)
values ('Cuisinart Casserole', 'Cookware', 179.99, 5);
insert into products (product_name, department_name, price, stock_quantity)
values ('Nintendo Switch', 'Video Games', 299, 19);
insert into products (product_name, department_name, price, stock_quantity)
values ('Cascade Complete ActionPacs Dishwasher Detergent', 'Household Supplies', 11.99, 50);
insert into products (product_name, department_name, price, stock_quantity)
values ('Hedge Shears', 'Lawn and Garden', 64.31, 25);
insert into products (product_name, department_name, price, stock_quantity)
values ('Classic Jansport Backpack', 'Backpacks', 47.95, 150);
insert into products (product_name, department_name, price, stock_quantity)
values ('T-Shirt (pack of 4)', 'Clothing', 9.99, 250);
insert into products (product_name, department_name, price, stock_quantity)
values ('Athletic Socks (6 pack)', 'Clothing', 13.99, 250);
insert into products (product_name, department_name, price, stock_quantity)
values ('Sapiens: A Brief History of Humankind', 'Books', 13.79, 99);
insert into products (product_name, department_name, price, stock_quantity)
values ('The Wind-Up Bird Chronicle', 'Books', 11.52, 11);
