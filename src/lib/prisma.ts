import { PrismaClient } from "@prisma/client";
const global = globalThis as any;
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.db) {
    global.db = new PrismaClient();
  }
  prisma = global.db;
}
export { prisma };
