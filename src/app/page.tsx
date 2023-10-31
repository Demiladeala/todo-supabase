import Image from "next/image"
import backgroundImage from '../../public/mountain.avif'

export default function Home() {
  

  return (
    <>
    <div className="bg-[#f7f7f7] relative w-full min-h-screen">
    
            {/* BACKGGROUND OVERLAY */}
      <div className="relative z-10 w-full mx-auto h-[43vh]">
        <Image src={backgroundImage} alt="background" 
        className="absolute top-0 left-0 w-full h-full object-cover bg-center bg-no-repeat rounded-br-2xl rounded-bl-2xl">
        </Image>
        <div 
        className="absolute top-0 left-0 w-full h-full rounded-br-2xl rounded-bl-2xl 
        bg-gradient-to-r from-orange-600 to-gray-100 opacity-80"></div>
      </div>

              {/* TODOS INPUT */}
      <div className="absolute w-full z-20 top-[10%]">
        <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
          <h1 className="text-3xl min-[1300px]:text-4xl text-white px-2 font-bold tracking-wide">TODO</h1>

              {/* TODO CONTENT */}
          <div className="relative w-full bg-white rounded-xl px-3 py-2 md:px-8 mt-5 flex justify-between">
            <input type="text"
            placeholder="Start Typing..."
            className="outline-none  text-sm placeholder-gray-500 font-semibold" />

            <button className="right-5 bg-orange-600 rounded-lg text-white px-3 py-[5px] text-sm ">
              Create
            </button>
          </div>

              {/*TODO DISPLAY */}
          <div className="relative w-full bg-white rounded-xl shadow-2xl px-3 py-2 md:px-8 mt-8 flex flex-col">
            <div>
              <div className="relative mt-2 flex items-center gap-4">
                <input type="checkbox"  className="checkbox checkbox-sm" />
                <p className="font-medium">Check the Garage</p>
              </div>
              <div className="h-px w-full bg-gray-100 mt-4 mb-2"></div>
            </div>

            <div>
              <div className="relative mt-2 flex items-center gap-4">
                <input type="checkbox"  className="checkbox checkbox-sm" />
                <p className="font-medium">Finish Working on a Project</p>
              </div>
              <div className="h-px w-full bg-gray-100 mt-4 mb-2"></div>
            </div>

            <div>
              <div className="relative mt-2 flex items-center gap-4">
                <input type="checkbox"  className="checkbox checkbox-sm" />
                <p className="font-medium">Exercise before I sleep</p>
              </div>
              <div className="h-px w-full bg-gray-100 mt-4 mb-2"></div>
            </div>

            <div>
              <div className="relative mt-2 flex items-center gap-4">
                <input type="checkbox"  className="checkbox checkbox-sm" />
                <p className="font-medium">Check the Garage</p>
              </div>
              <div className="h-px w-full bg-gray-100 mt-4 mb-2"></div>
            </div>

            <div>
              <div className="relative mt-2 flex items-center gap-4">
                <input type="checkbox"  className="checkbox checkbox-sm" />
                <p className="font-medium">Finish Working on a Project</p>
              </div>
              <div className="h-px w-full bg-gray-100 mt-4 mb-2"></div>
            </div>

            <div>
              <div className="relative mt-2 flex items-center gap-4">
                <input type="checkbox"  className="checkbox checkbox-sm" />
                <p className="font-medium">Exercise before I sleep</p>
              </div>
              <div className="h-px w-full bg-gray-100 mt-4 mb-2"></div>
            </div>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}
