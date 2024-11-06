export function GET(request: Request) {
  console.log(request, 'request')
  return new Response('Not implemented', { status: 501 })
}

// export function POST() {
//   return new Response('Not implemented', { status: 501 })
// }
