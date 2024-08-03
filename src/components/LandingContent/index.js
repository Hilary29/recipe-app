import React from 'react'

const index = () => {
  return (
    <>
      <div class="max-w-xl lg:max-w-4xl mx-auto bg-white rounded-md shadow-sm overflow-hidden mb-4 ">
        <div class="md:flex">
        <div class="md:shrink-0">
          <img class="h-42 w-52 object-cover md:h-full md:w-48 mx-auto p-2" src="Logo.png" alt="Img"/>
        </div>
        <div class="p-8">
          <div class=" tracking-wide text-xl text-indigo-500 font-semibold">XoDelights</div>
          <p class="block mt-1 uppercase text-lg leading-tight font-medium text-black hover:underline">Votre guide culinaire</p>
          <p class="mt-2 text-slate-500">Apprenez des recettes pour epater vos amis, ou simplement pour un diner en famille. Des plats les plus simples aux mets les plus techniques. Decouvrez et partagez!</p>
        </div>
        </div>

        <div class="flex ">
          <div class="flex-1 bg-blue-500 m-2 text-center rounded-sm">
            02
          </div>
          <div class="flex-1 bg-blue-950 m-2 text-center rounded-sm">
            03
          </div>
        </div>
      </div>

      <div class="max-w-xl lg:max-w-4xl mx-auto bg-white rounded-md shadow-sm overflow-hidden mb-4 ">
        <div class="flex ">
          <div class="flex-1 bg-blue-500 m-2 text-center rounded-sm">
            <p className='pb-16'>First</p>
          </div>
          <div class="flex-1 bg-blue-950 m-2 text-center rounded-sm">
            03
          </div>
        </div>
      </div>

      <div class="flex flex-row gap-2 max-w-xl lg:max-w-4xl mx-auto bg-white rounded-md shadow-sm mb-4">
        <div class="basis-1/4 m-2 p-2 bg-lime-500">
        <p className='pb-16'>First</p>
        </div>
        <div class="basis-1/4 m-2 p-2 bg-lime-700">02</div>
        <div class="basis-1/2 m-2 p-2 bg-violet-900">03</div>
      </div>

      <div class="grid grid-cols-3 gap-4 max-w-xl lg:max-w-4xl mx-auto  rounded-md shadow-sm">
        <div class="bg-white">01</div>
        <div class="bg-white">02</div>
        <div class="bg-white">03</div>
        <div class="col-span-2 bg-white">04</div>
        <div class="bg-white">05</div>
        <div class="bg-white">06</div>
        <div class="col-span-2 bg-white">07</div>
      </div>
  </>
  )
}

export default index
