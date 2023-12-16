import prisma from "@/db"

export async function GET(request: Request) {
  const companies = await prisma.company.findMany()

    return Response.json({ companies })
  }

  export async function POST(request: Request) {
    
   
    return Response.json({ data:  request.body})
  }