import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const email = "yash@toprankindia.com";
  const password = "Yash1275$"; // As provided by user
  
  console.log('--- TopRank Admin Seeding ---');
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        password: hashedPassword,
        name: "Yash TopRank"
      },
      create: {
        email,
        password: hashedPassword,
        name: "Yash TopRank"
      },
    });

    console.log('✅ Success! Admin user created/updated:');
    console.log('Email:', user.email);
    console.log('--- You can now login on Vercel ---');
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
