async function getEmp() {
    const results = await fetch('http://localhost:3000/api/emp')
    console.log(results)
    if (!results.ok) {
        throw new Error("check your api")
    }
    return results.json()
}
export default async function Page() {
    const emps = await getEmp()
    console.log(emps)
    return (
        <div>
            {emps.map((emp, index) => (
                <div key={index}>
                   name {emp.name}{}
                    age {emp.age}
                   salary {emp.salary}</div>
            ))}
        </div>
    )
}