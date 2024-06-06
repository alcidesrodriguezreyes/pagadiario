CREATE TABLE `cliente` (
	`identificacion` int NOT NULL,
	`tipoIdentification` enum('CC','CE','TI','NIT') DEFAULT 'CC',
	`nombre` text NOT NULL,
	`apellido` text NOT NULL,
	`telefono` text NOT NULL,
	`direccion` text NOT NULL,
	`cobradorId` int,
	`creadoEn` timestamp DEFAULT (now()),
	`actualizadoEn` timestamp DEFAULT (now()),
	CONSTRAINT `cliente_identificacion` PRIMARY KEY(`identificacion`)
);
--> statement-breakpoint
CREATE TABLE `cobrador` (
	`identificacion` int NOT NULL,
	`tipoIdentification` enum('CC','CE','TI','NIT') DEFAULT 'CC',
	`clave` text NOT NULL,
	`nombre` text NOT NULL,
	`apellido` text NOT NULL,
	`telefono` text NOT NULL,
	`direccion` text NOT NULL,
	CONSTRAINT `cobrador_identificacion` PRIMARY KEY(`identificacion`)
);
--> statement-breakpoint
ALTER TABLE `cliente` ADD CONSTRAINT `cliente_cobradorId_cobrador_identificacion_fk` FOREIGN KEY (`cobradorId`) REFERENCES `cobrador`(`identificacion`) ON DELETE no action ON UPDATE no action;