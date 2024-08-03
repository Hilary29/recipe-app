import React from 'react';



const index = () => {
  return (
    <div className="flex text-white bg-gradient-to-b from-[#e53939a3] via-tertiary to-transparent p-[2%] pb-4">
      <div>
      <span className='text-black mr-8 text-3xl'></span>
      <input type='text' placeholder='Je recherche une recette, un ingredient,...' className='px-4'/>
      <h1 className="text-4xl">Welcome to Recipe App</h1>
      </div>
    </div>
  )
}

export default index
