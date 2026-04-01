import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  try {
    return new PrismaClient();
  } catch (error) {
    console.error("Prisma Client could not be initialized. Check your DATABASE_URL.", error);
    // Return a proxy or just the instance - Prisma often fails on the first query, not necessarily on 'new'
    return new PrismaClient(); 
  }
};

declare const globalThis: {
  prismaGlobalV3: any;
} & typeof global;

// We use 'any' for the global so we can safely handle connection failures
export const prisma = globalThis.prismaGlobalV3 ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobalV3 = prisma;
