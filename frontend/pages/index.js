import React, { useEffect, useState } from "react";


function Index() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:2000/home")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);

      });
  }, []);

  return (
  
    <div className="flex flex-nowrap bg min-h-screen">
      <div className='flex flex-col items-start my-auto -ml-20 w-1/2'>
        <h1 className='title text-7xl font-bold text-white'>Find<br />Your<br />Musics</h1>

        <div className="input max-w-sm mx-auto mt-10">
          <label htmlFor="input-label" className="block text-xl font-medium mb-5 text-white">
            Select a music you like
          </label>
          <input
            id="input-label"
            className="w-[350px] py-2.5 px-3 block text-white border-solid border-4 border-gray-100 rounded-lg text-lg mb-5 focus:border-violet-700  disabled:pointer-events-none bg-neutral-950 border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <button type="button" className="w-[350px] py-2.5 px-20 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-violet-700 hover:text-white focus:z-10 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Recommend
        </button>
      </div>

      <div className='flex flex-col items-center my-auto'>
        {/* <h1 className="text-xl font-bold underline text-white">
          {message}
        </h1> */}

        <div className="grid gap-x-8 gap-y-8 grid-cols-3 w-full mr-[20%]">
          <div className="container bg-slate-50 h-[350px] w-[250px] rounded-lg overflow-hidden hover:bg-neutral-100">
              <img className="object-cover"src='https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148' alt="style" />
              <h1 className="text-2xl text-center font-bold mt-5">{message}</h1>
              <h3 className="text-xl text-center">{message}</h3>
          </div>

          <div className="container bg-slate-50 h-[350px] w-[250px] rounded-lg overflow-hidden">
              <img className="object-cover"src='https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148' alt="style" />
              <h1 className="text-2xl text-center font-bold mt-5">{message}</h1>
              <h3 className="text-xl text-center">{message}</h3>
          </div>

          <div className="container bg-slate-50 h-[350px] w-[250px] rounded-lg overflow-hidden">
              <img className="object-cover"src='https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148' alt="style" />
              <h1 className="text-2xl text-center font-bold mt-5">{message}</h1>
              <h3 className="text-xl text-center">{message}</h3>
          </div>

          <div className="container bg-slate-50 h-[350px] w-[250px] rounded-lg overflow-hidden">
              <img className="object-cover"src='https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148' alt="style" />
              <h1 className="text-2xl text-center font-bold mt-5">{message}</h1>
              <h3 className="text-xl text-center">{message}</h3>
          </div>

          <div className="container bg-slate-50 h-[350px] w-[250px] rounded-lg overflow-hidden">
              <img className="object-cover"src='https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148' alt="style" />
              <h1 className="text-2xl text-center font-bold mt-5">{message}</h1>
              <h3 className="text-xl text-center">{message}</h3>
          </div>

          <div className="container bg-slate-50 h-[350px] w-[250px] rounded-lg overflow-hidden">
              <img className="object-cover"src='https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148' alt="style" />
              <h1 className="text-2xl text-center font-bold mt-5">{message}</h1>
              <h3 className="text-xl text-center">{message}</h3>
          </div>
      
        </div>

      </div>
    </div>

 
  );
}

export default Index;
