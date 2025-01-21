import Image from 'next/image';
import Link from 'next/link'

export default function Page() {
    return (
        <div className="text-3xl text-center">
        <h1 >Page3</h1>
        <div className="flex justify-center">
            <Image src="https://i.pinimg.com/736x/13/17/44/1317441b5603590e9756adec6862e9ee.jpg" width={300} height={300} alt="Image" />
            </div>
            <h1>66162110507-7 pusit</h1>
        <Link href="\page1">Go to Page1</Link>
        <br />
        <Link href="\page2">Go to Page2</Link>
        <br />
        <Link href="\page3">Go to Page3</Link>
        <br />
        <Link href="\page">Go back Home</Link>
    </div>
    );
}