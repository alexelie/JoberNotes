export async function GET(request: Request) {

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');

    const res = await fetch('https://data.mongodb-api.com/...', {
        method: 'POST',
        headers: requestHeaders
    })
    const data = await res.json()
     
    return Response.json({ data })
}