import prisma from "@/db"

export async function GET(request: Request) {
    const users = await prisma.user.findMany()
    return Response.json({ users })
  }

  export async function POST(request: Request) {
    
    return Response.json({ data:  request.body})
  }