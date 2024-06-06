import { int, mysqlTable, text, timestamp, mysqlEnum } from "drizzle-orm/mysql-core";

export const cliente = mysqlTable('cliente', {
    identificacion: int("identificacion").primaryKey(),
    tipoIdentification: mysqlEnum('tipoIdentification', ['CC', 'CE', 'TI', 'NIT']).default('CC'),
    nombre: text('nombre').notNull(),
    apellido: text('apellido').notNull(),
    telefono: text('telefono').notNull(),
    direccion: text('direccion').notNull(),
    cobradorId: int("cobradorId").references( () => cobrador.identificacion),
    creadoEl: timestamp('creadoEn').defaultNow(),
    actualizadoEl: timestamp('actualizadoEn').defaultNow(),
});

export const cobrador = mysqlTable('cobrador', {
    identificacion: int("identificacion").primaryKey(),
    tipoIdentification: mysqlEnum('tipoIdentification', ['CC', 'CE', 'TI', 'NIT']).default('CC'),
    clave: text('clave').notNull(),
    nombre: text('nombre').notNull(),
    apellido: text('apellido').notNull(),
    telefono: text('telefono').notNull(),
    direccion: text('direccion').notNull(),
    creadoEl: timestamp('creadoEn').defaultNow(),
    actualizadoEl: timestamp('actualizadoEn').defaultNow(),
});

export const prestamo = mysqlTable('prestamo', {
    id: int("id").autoincrement().primaryKey(),
    clienteId: int("clienteId").references( () => cliente.identificacion),
    cobradorId: int("cobradorId").references( () => cobrador.identificacion),
    monto: int("monto").notNull(),
    cuotas: int("cuotas").notNull(),
    valorCuota: int("valorCuota").notNull(),
    fechaInicio: timestamp('fechaInicio').defaultNow(),
    fechaFin: timestamp('fechaFin').defaultNow(),
    creadoEl: timestamp('creadoEn').defaultNow(),
    actualizadoEl: timestamp('actualizadoEn').defaultNow(),
});

export const pago = mysqlTable('pago', {
    id: int("id").autoincrement().primaryKey(),
    prestamoId: int("prestamoId").references( () => prestamo.id),
    cobradorId: int("cobradorId").references( () => cobrador.identificacion),
    valor: int("valor").notNull(),
    fecha: timestamp('fecha').defaultNow(),
    creadoEl: timestamp('creadoEn').defaultNow(),
    actualizadoEl: timestamp('actualizadoEn').defaultNow(),
});

export const usuario = mysqlTable('usuario', {
    id: int("id").autoincrement().primaryKey(),
    cobradorId: int("cobradorId").references( () => cobrador.identificacion),
    clave: text('clave').notNull(),
    creadoEl: timestamp('creadoEn').defaultNow(),
    actualizadoEl: timestamp('actualizadoEn').defaultNow(),
});





