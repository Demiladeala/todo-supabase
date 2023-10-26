import Image from "next/image"

export default function Home() {
  

  return (
    <>
    <div className="hero-container bg-[#f8f8f8] relative w-full min-h-screen flex items-center justify-center">
      {/* CREATE TODO CARD */}
      <div className="bg-white absolute z-20 bottom-5 left-5 mx-auto shadow-2xl py-3 rounded-2xl px-5">
        <form className="">
          <input 
          type="text"
          placeholder="Enter your new to-do" 
          className="w-full bg-transparent outline-none border border-gray-100 mt-3 rounded-lg p-3 text-sm shadow-sm" />

          <div>
            <button
            className='text-white py-2 px-5 rounded bg-orange-600 mt-4 cursor-pointer hover:bg-opacity-75 shadow-lg' 
            type='submit'>Create Todo</button>
          </div>
        </form>
      </div>
      {/* CREATE TODO CARD */}

      {/* TODOS CARD */}
      <div className="bg-gray-100 z-10 relative shadow-2xl rounded-lg p-5 w-[85%] md:w-[60%] h-[70vh] mx-auto overflow-y-scroll">
        <h3 className="font-bold text-lg my-4 ml-2">To-do(s)</h3>
        <div className="bg-white my-5 shadow-2xl p-3 md:w-[60%] rounded-2xl">
          <div className="flex gap-4 items-center">
          <input type="checkbox" defaultChecked={false} className="checkbox checkbox-sm" />
          <p>Add stuff to Todo</p>
          </div>
          <p className="mt-4 ml-9 text-sm badge badge-warning badge-outline">Pending</p>
        </div>  

        <div className="bg-white my-5 shadow-2xl p-3 md:w-[60%] rounded-2xl">
          <div className="flex gap-4 items-center">
          <input type="checkbox" defaultChecked={false} className="checkbox checkbox-sm" />
          <p>Add stuff to Todo</p>
          </div>
          <p className="mt-4 ml-9 text-sm badge badge-warning badge-outline">Pending</p>
        </div>  

        <div className="bg-white my-5 shadow-2xl p-3 md:w-[60%] rounded-2xl">
          <div className="flex gap-4 items-center">
          <input type="checkbox" defaultChecked={false} className="checkbox checkbox-sm" />
          <p>Add stuff to Todo</p>
          </div>
          <p className="mt-4 ml-9 text-sm badge badge-warning badge-outline">Pending</p>
        </div>

        <div className="bg-white my-5 shadow-2xl p-3 md:w-[60%] rounded-2xl">
          <div className="flex gap-4 items-center">
          <input type="checkbox" defaultChecked={false} className="checkbox checkbox-sm" />
          <p>Add stuff to Todo</p>
          </div>
          <p className="mt-4 ml-9 text-sm badge badge-warning badge-outline">Pending</p>
        </div>

        <div className="bg-white my-5 shadow-2xl p-3 md:w-[60%] rounded-2xl">
          <div className="flex gap-4 items-center">
          <input type="checkbox" defaultChecked={false} className="checkbox checkbox-sm" />
          <p>Add stuff to Todo</p>
          </div>
          <p className="mt-4 ml-9 text-sm badge badge-warning badge-outline">Pending</p>
        </div>

      </div>
    </div>
    </>
  )
}
