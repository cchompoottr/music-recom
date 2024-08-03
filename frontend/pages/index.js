import React, { useState } from "react";


function Index() {
  
  const [trackName, setTrackName] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [artistName, setArtistName] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleRecommend = () => {
    fetch(`http://localhost:2000/recommend?song=${encodeURIComponent(inputValue)}`)
      .then((response) => response.json())
      .then((data) => {
        setTrackName(data.recommendations || []);
        setImageUrls(data.image_urls || []);
        setArtistName(data.artist || []);
      })
    
  };


  return (
  
    <div className="flex flex-wrap bg sm:flex flex-col sm:flex-nowrap sm:h-fit md:flex items-stretch">
      <div className='items-start -ml-10 w-1/3  mt-20 sm:w-fit sm:mr-50 md:w-fit md:mr-[100px] md:pl-2 md:self-center md:-translate-y-20 lg:mr-20 lg:mt-[300px] lg:w-fit'>
        <h1 className='title text-7xl font-bold text-white mt-20 sm:text-7xl sm:mt-10 md:text-7xl'>Find<br />Your<br />Musics</h1>

        <div className="input max-w-sm mx-auto mt-10 md:mt-20 md:mx-auto md:translate-x-[65px] lg:mx-auto lg:translate-x-[90px]">
          <label htmlFor="input-label" className="block text-xl font-medium mb-5 text-white sm:text-base sm:-translate-x-5 md:-translate-x-5 md:text-base">
            Select a music you like
          </label>
          <input
            id="input-label"
            value={inputValue}
            onChange={handleInput}
            aria-label="Track Name"
            className="w-[350px] py-2.5 px-3 block text-white border-solid border-4 border-neutral-500 rounded-lg text-lg mb-5 focus:border-violet-700  disabled:pointer-events-none bg-neutral-950 sm:-translate-x-6 sm:py-1 sm:w-[290px] sm:text-lg md:text-lg md:py-2 md:w-[290px] md:-translate-x-6"
          />
        </div>

        <button 
        type="button" 
        onClick={handleRecommend}
        className="w-[350px] py-2.5 px-20 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-violet-700 hover:text-white focus:z-10 focus:ring-gray-100 hover:-translate-y-1 hover:scale-100 sm:py-2.5 sm:text-base sm:w-[290px] md:w-[290px] md:text-base md:-translate-x-2">
          Recommend
        </button>
      </div>

      <div className="items-end w-2/3 sm:translate-y-20 sm:pb-[100px] sm:mb-20 md:self-center md:ml-0 md:mt-[50px]">
        <div className="grid gap-x-0 gap-y-8 grid-cols-3 mt-20 translate-y-5 ml-20 sm:grid-cols-2 sm:gap-y-5  sm:gap-x-[150px] sm:-translate-x-10 md:grid-cols-2 md:ml-5 md:mr-20 lg:grid-cols-2 lg:gap-x-0">
          {trackName.length > 0 ? (
            trackName.map((name, index) => (
              <div key={index} className={`bg-slate-50 h-[325px] w-[225px] rounded-lg overflow-hidden hover:bg-neutral-100 hover:ring-4 ring-violet-700 sm:h-[225px] sm:w-[150px] md:w-[150px] md:h-[225px]`}>
                <img className="object-cover" src={imageUrls[index]} alt={`Cover for ${name}`} />
                <h1 className="text-base text-center font-bold mt-3 mx-1 sm:text-base sm:mt-3 md:text-base">{name}</h1>
                <p className="text-sm text-center text-black mx-1 mt-1">{artistName[index]}</p>
              </div>
            ))
          ): null}
        </div>
      </div>
    </div>
  );
}

export default Index;