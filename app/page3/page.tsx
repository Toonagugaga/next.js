import Image from 'next/image';
import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-center">Page3</h1>
            <Image src="https://i.pinimg.com/736x/13/17/44/1317441b5603590e9756adec6862e9ee.jpg" width={500} height={500} alt="images" className="rounded-xl" />
            <Link href="\page1">Go to Page1</Link>
            <br />
            <Link href="\page2">Go to Page2</Link>
            <br />
            <Link href="\page3">Go to Page3</Link>
        </div>
    );
}