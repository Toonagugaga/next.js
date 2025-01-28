'use server'
export async function createEmail(formData: FormData) {
    console.log('helo from server')
    const email = formData.get('email')
    console.log(email)
}