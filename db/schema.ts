import { relations } from "drizzle-orm";
import { int, mysqlTable, text, timestamp, mysqlEnum } from "drizzle-orm/mysql-core";

export const cliente = mysqlTable('cliente', {
    identificacion: int("identificacion").primaryKey(),
    tipoIdentification: mysqlEnum('tipoIdentification', ['CC', 'CE', 'TI', 'NIT']),
    creadoEl: timestamp('creadoEn').defaultNow(),
    actualizadoEl: timestamp('actualizadoEn').defaultNow(),
});

export const clienteRelacion = relations(cliente, ({ one }) => ({
    perfil: one(perfil),
}));

export const perfil = mysqlTable('perfil', {
    id: int("id").primaryKey().autoincrement(),
    cliente: int("cliente").references( () => cliente.identificacion),
    cobrador: int("cobrador").references( () => cobrador.id),
    nombre: text('nombre').notNull(),
    apellido: text('apellido').notNull(),
    telefono: text('telefono').notNull(),
    direccion: text('direccion').notNull(),
});

export const cobrador = mysqlTable('cobrador', {
    id: int("id").primaryKey().autoincrement(),
    clave: text('clave').notNull(),
});

export const cobradorRelacion = relations(cobrador, ({ one }) => ({
    perfil: one(perfil),
}));
