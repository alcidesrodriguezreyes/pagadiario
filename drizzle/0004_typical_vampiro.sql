CREATE TABLE `usuario` (
	`id` int AUTO_INCREMENT NOT NULL,
	`cobradorId` int,
	`clave` text NOT NULL,
	`creadoEn` timestamp DEFAULT (now()),
	`actualizadoEn` timestamp DEFAULT (now()),
	CONSTRAINT `usuario_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_cobradorId_cobrador_identificacion_fk` FOREIGN KEY (`cobradorId`) REFERENCES `cobrador`(`identificacion`) ON DELETE no action ON UPDATE no action;