import React from 'react';


const index = () => {
  return (
      <main className="flex h-screen w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tertiary to-gray-100">
 
        <div className="py-8">
          <img src="XoDelightsblack.png" alt="Logo" className="w-24 h-8" />
        </div>
        
        <form>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Email</span>
            <input type="email" class="peer ..."/>
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
        </form>



        
      </main>
  )
}

export default index
