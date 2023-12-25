import React from 'react'

function MenuCard({pizzaImage,price}) {
  return (
    <div className=' z-10 bg-gray-50 p-4 rounded-lg text-center hover:shadow-2xl m-1'>
        <div className='text-center bg-secondary p-2 rounded-full h-[200px] w-[200px] mx-auto'>
            <img src={pizzaImage} alt='pizza'  />
        </div>
        <h4 className='text-xl font-semibold my-2'>Pizza olive noir</h4>
        <p className='text-gray-500 text-sm'>Explorez l'harmonie parfaite des saveurs avec notre Pizza 4 Fromages, un délice gourmand pour les amateurs de fromage
        </p>
        <button className='rounded-full py-2 px-6 mt-2'>Commander {price} €</button>
    </div>
  )
}

export default MenuCard