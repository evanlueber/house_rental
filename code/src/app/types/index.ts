import { User } from '@prisma/client';

export type SafeUser = Omit<
    User,
    "creatdAt" | "updatedAt" | "emailVerified"
> & {
    creadedAt: string;
    updatedAt: string;
    emailVerified: string | null; 
}