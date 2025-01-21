import Link from "next/link"
import Image from "next/image"

export default function page() {
  
  return (
    <div className="text-center">
      <h1 className="text-3xl text-blue-600 text-center">Home</h1>
      <p className="text-xl text-rose-500">ลิง เป็นสัตว์เลี้ยงลูกด้วยนมในกลุ่ม Primates (สัตว์ตระกูลวานร) มีลักษณะเฉพาะหลายอย่างที่ทำให้เป็นสัตว์ที่มีความน่าสนใจและฉลาด มักพบได้ในหลายพื้นที่ทั่วโลก ตั้งแต่ป่าดิบชื้นไปจนถึงภูมิประเทศแบบกึ่งแห้งแล้ง</p>
      <Link href="http://www.pantip.com" target="_blank">Click Here</Link>
      <div className="flex justify-center">
        <Image src="https://i.pinimg.com/736x/13/17/44/1317441b5603590e9756adec6862e9ee.jpg" width={500} height={500} alt={""} />
      </div>
      <h1>66162110507-7 pusit</h1>
      <Link href="\fruit">Go to Fruits</Link>
    </div>
  )
}