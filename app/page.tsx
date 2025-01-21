import Link from "next/link"
import Image from "next/image"

function page() {
  
  return (
    <div>
      <h1 className="text-3xl text-blue-600 text-center">Home</h1>
      <p className="text-xl text-rose-500">ลิง เป็นสัตว์เลี้ยงลูกด้วยนมในกลุ่ม Primates (สัตว์ตระกูลวานร) มีลักษณะเฉพาะหลายอย่างที่ทำให้เป็นสัตว์ที่มีความน่าสนใจและฉลาด มักพบได้ในหลายพื้นที่ทั่วโลก ตั้งแต่ป่าดิบชื้นไปจนถึงภูมิประเทศแบบกึ่งแห้งแล้ง</p>
      <Link href="http://www.pantip.com" target="_blank">Click Here</Link>
      <div className="flex justify-center">
        <Image src="https://i.pinimg.com/736x/13/17/44/1317441b5603590e9756adec6862e9ee.jpg" width={500} height={500} alt={""} />
      </div>
      <h1>66162110507-7 pusit</h1>
      <br />
      <Link href="\page1">Go to Page1</Link>
      <br />
      <Link href="\page2">Go to Page2</Link>
      <br />
      <Link href="\page3">Go to Page3</Link>
      <br />
    </div>
  )
}

export default page