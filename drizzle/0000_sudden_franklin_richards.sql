CREATE TABLE `cliente` (
	`identificacion` int NOT NULL,
	`tipoIdentification` enum('CC','CE','TI','NIT'),
	`creadoEn` timestamp DEFAULT (now()),
	`actualizadoEn` timestamp DEFAULT (now()),
	CONSTRAINT `cliente_identificacion` PRIMARY KEY(`identificacion`)
);
--> statement-breakpoint
CREATE TABLE `cobrador` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clave` text NOT NULL,
	CONSTRAINT `cobrador_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `perfil` (
	`id` int AUTO_INCREMENT NOT NULL,
	`cliente` int,
	`cobrador` int,
	`nombre` text NOT NULL,
	`apellido` text NOT NULL,
	`telefono` text NOT NULL,
	`direccion` text NOT NULL,
	CONSTRAINT `perfil_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `perfil` ADD CONSTRAINT `perfil_cliente_cliente_identificacion_fk` FOREIGN KEY (`cliente`) REFERENCES `cliente`(`identificacion`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `perfil` ADD CONSTRAINT `perfil_cobrador_cobrador_id_fk` FOREIGN KEY (`cobrador`) REFERENCES `cobrador`(`id`) ON DELETE no action ON UPDATE no action;