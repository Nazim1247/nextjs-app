
 
export async function GET() {
  const data = {
    message: "successfully get data",
    error: false,
    status: 200
  }
 
  return Response.json({ data })
}