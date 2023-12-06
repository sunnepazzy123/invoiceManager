import prisma from "@/db";

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
      const users = await prisma.user;
      res.status(200).json("helo");
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }