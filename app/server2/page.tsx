import { createEmail } from "./action"
export default function Page() {
     return (
         <div>
             <form className="text-center" action={createEmail}>
                 <input type="email" name="email"required />
                 <button>submit</button>
             </form>
         </div>
     )
 }