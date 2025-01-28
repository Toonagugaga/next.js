export async function GET(req: Request, res: Response) {
    const data = [
        { 'name': 'john', 'age': 18, 'salary': '3000' },
        { 'name': 'jack', 'age': 19, 'salary': '3000' },
        { 'name': 'agugaa', 'age': 28, 'salary': '3000' }
    ]

    return Response.json(data)
}