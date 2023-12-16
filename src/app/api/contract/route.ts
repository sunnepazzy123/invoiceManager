export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    return Response.json({ product: "fdfdf" })
  }

  export async function POST(request: Request) {

    console.log(request.body)
   
    return Response.json({ data: "gesst"})
  }