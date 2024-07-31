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
  
    <div className="flex flex-wrap bg lg:flex flex-col lg:flex-nowrap lg:h-fit">
      <div className='items-start -ml-10 w-1/3  mt-20 lg:w-full lg:-translate-x-2 lg:mt-20'>
        <h1 className='title text-7xl font-bold text-white mt-20 lg:text-6xl lg:mt-10'>Find<br />Your<br />Musics</h1>

        <div className="input max-w-sm mx-auto mt-10 lg:translate-y-10 lg:mt-20">
          <label htmlFor="input-label" className="block text-xl font-medium mb-5 text-white lg:text-base ">
            Select a music you like
          </label>
          <input
            id="input-label"
            className="w-[350px] py-2.5 px-3 block text-white border-solid border-4 border-gray-100 rounded-lg text-lg mb-5 focus:border-violet-700  disabled:pointer-events-none bg-neutral-950 border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 lg:py-1.5 lg:w-[300px] lg:text-lg"
          />
        </div>

        <button type="button" className="w-[350px] py-2.5 px-20 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-violet-700 hover:text-white focus:z-10 focus:ring-gray-100 hover:-translate-y-1 hover:scale-100 lg:py-1.5 lg:text-base lg:w-[300px] lg:mt-10">
          Recommend
        </button>
      </div>

      <div className="items-end w-2/3 lg:translate-y-20 lg:pb-[120px]">
        <div className="grid gap-x-0 gap-y-8 grid-cols-3 mt-20 translate-y-5 ml-20 lg:grid-cols-2 lg:gap-x-[100px] lg:gap-y-5 lg:mt-20 lg:ml-10">
          {Array(6).fill().map((_, index) => (
              <div key={index} className={`container bg-slate-50 h-[325px] w-[225px] rounded-lg overflow-hidden hover:bg-neutral-100 hover:ring-4 ring-violet-700 lg:h-[225px] lg:w-[150px]`}>
                <img className="object-cover" src='https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148' alt="style" />
                <h1 className="text-2xl text-center font-bold mt-5 lg:text-base mt-3">{message}</h1>
                <h3 className="text-xl text-center lg:text-sm">{message}</h3>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;

