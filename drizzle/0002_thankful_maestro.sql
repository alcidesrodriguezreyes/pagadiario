CREATE TABLE `prestamo` (
	`id` int NOT NULL,
	`clienteId` int,
	`cobradorId` int,
	`monto` int NOT NULL,
	`cuotas` int NOT NULL,
	`valorCuota` int NOT NULL,
	`fechaInicio` timestamp DEFAULT (now()),
	`fechaFin` timestamp DEFAULT (now()),
	`creadoEn` timestamp DEFAULT (now()),
	`actualizadoEn` timestamp DEFAULT (now()),
	CONSTRAINT `prestamo_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `prestamo` ADD CONSTRAINT `prestamo_clienteId_cliente_identificacion_fk` FOREIGN KEY (`clienteId`) REFERENCES `cliente`(`identificacion`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `prestamo` ADD CONSTRAINT `prestamo_cobradorId_cobrador_identificacion_fk` FOREIGN KEY (`cobradorId`) REFERENCES `cobrador`(`identificacion`) ON DELETE no action ON UPDATE no action;