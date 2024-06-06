CREATE TABLE `pago` (
	`id` int AUTO_INCREMENT NOT NULL,
	`prestamoId` int,
	`cobradorId` int,
	`valor` int NOT NULL,
	`fecha` timestamp DEFAULT (now()),
	`creadoEn` timestamp DEFAULT (now()),
	`actualizadoEn` timestamp DEFAULT (now()),
	CONSTRAINT `pago_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `prestamo` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `pago` ADD CONSTRAINT `pago_prestamoId_prestamo_id_fk` FOREIGN KEY (`prestamoId`) REFERENCES `prestamo`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pago` ADD CONSTRAINT `pago_cobradorId_cobrador_identificacion_fk` FOREIGN KEY (`cobradorId`) REFERENCES `cobrador`(`identificacion`) ON DELETE no action ON UPDATE no action;