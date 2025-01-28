export default function Page() {
   async function create(formData:FormData) {
        'use server'
       console.log('helo from server')
       const email = formData.get('email')
       console.log(email)
    }
    return (
        <div>
            <form className="text-center" action={create}>
                <input type="email" name="email"required />
                <button>submit</button>
            </form>
        </div>
    )
}