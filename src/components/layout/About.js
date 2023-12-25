import React from 'react'
import HeaderSection from './HeaderSection'

function About() {
  return (
    <section id='about' className='text-center my-16 p-2'>
        <HeaderSection mainHeader={'qui nous somme ?'} subHeader={'Notre histoire'}/>
        <div className='max-w-md md:max-w-xl mx-auto mt-8 text-secondary flex flex-col gap-4'>
            <p>Bienvenue dans notre oasis gastronomique, où chaque bouchée est une escapade en Italie ! Notre pizzeria est bien plus qu'un lieu pour déguster de délicieuses pizzas – c'est une expérience culinaire qui fusionne l'authenticité des saveurs italiennes avec une ambiance chaleureuse et conviviale.</p>
            <p>Nous sommes fiers de créer des pizzas artisanales, préparées avec des ingrédients frais et de qualité, chaque création étant une œuvre d'art délicieuse.</p>
            <p>Que vous soyez un amateur de classiques intemporels ou que vous recherchiez l'audace de saveurs innovantes, notre menu varié a de quoi satisfaire toutes les papilles. Rejoignez-nous pour un voyage gustatif inoubliable, où la passion pour la pizza rencontre l'hospitalité italienne. Bienvenue chez nous, bienvenue chez vous !</p>
        </div>
    </section>
  )
}

export default About