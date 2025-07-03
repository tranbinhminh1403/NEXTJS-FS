CREATE TABLE `categories` (
	`category_id` serial AUTO_INCREMENT NOT NULL,
	`category_name` varchar(255) NOT NULL,
	CONSTRAINT `categories_category_id` PRIMARY KEY(`category_id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`product_id` serial AUTO_INCREMENT NOT NULL,
	`category_id` int NOT NULL,
	`product_name` varchar(255) NOT NULL,
	`price` int NOT NULL,
	`stock` int NOT NULL,
	`img` varchar(255) NOT NULL,
	`discount` int NOT NULL,
	`specs` varchar(1000),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `products_product_id` PRIMARY KEY(`product_id`)
);
