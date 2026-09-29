import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";
export const users = mysqlTable("users", {
    // Change 'serial' to 'int' with autoincrement
    id: int("id").primaryKey().autoincrement(),
    fullName: varchar("full_name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
});
