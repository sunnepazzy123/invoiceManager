import prisma from "@/db"

export async function GET(request: Request) {
  const bankDetails = await prisma.bankDetail.findMany()

    return Response.json({ bankDetails })
  }

  export async function POST(request: Request) {
    
   
    return Response.json({ data:  request.body})
  }