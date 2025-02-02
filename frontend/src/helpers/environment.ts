import { PrismaClient } from '@prisma/client';
// lib/apiUtils.ts
export const isDevelopmentMode = (): boolean => process.env.NODE_ENV === 'development';

export const getApiUrl = (): string => {
  return isDevelopmentMode() ? 'http://localhost:4005' : window.location.origin;
};




const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
