import Image from "next/image"

export default function Home() {
  

  return (
    <>
    <div className="bg-[#f8f8f8] relative w-full min-h-screen">
      <div className="relative w-full h-[40vh] border">
        <Image>
          
        </Image>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-blue-500 opacity-80"></div>
      </div>
    </div>
    </>
  )
}
