import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-center">Page1</h1>
            <Image src="/ling.png" width={500} height={500} alt="player" className="flex justify-center" />
            <Link href="\page1">Go to Page1</Link>
            <br />
            <Link href="\page2">Go to Page2</Link>
            <br />
            <Link href="\page3">Go to Page3</Link>
        </div>
    );
}