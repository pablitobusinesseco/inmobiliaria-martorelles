CREATE TABLE `properties` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type` enum('house','apartment','land','commercial','other') NOT NULL DEFAULT 'house',
	`transactionType` enum('sale','rent') NOT NULL DEFAULT 'sale',
	`titleEs` varchar(255) NOT NULL,
	`titleCa` varchar(255) NOT NULL,
	`titleEn` varchar(255) NOT NULL,
	`descriptionEs` text,
	`descriptionCa` text,
	`descriptionEn` text,
	`location` varchar(255) NOT NULL,
	`price` varchar(50) NOT NULL,
	`bedrooms` int DEFAULT 0,
	`bathrooms` int DEFAULT 0,
	`area` int DEFAULT 0,
	`extraArea` int DEFAULT 0,
	`extraAreaLabel` varchar(50),
	`tag` enum('featured','exclusive','new') DEFAULT 'new',
	`isActive` int NOT NULL DEFAULT 1,
	`sortOrder` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `properties_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `property_images` (
	`id` int AUTO_INCREMENT NOT NULL,
	`propertyId` int NOT NULL,
	`url` varchar(500) NOT NULL,
	`sortOrder` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `property_images_id` PRIMARY KEY(`id`)
);
