import { Container } from '@/components/Container'
import logo from '@/images/logo.png'
import Image from 'next/image'
import image1 from '@/images/israx1.png'
import image2 from '@/images/israx2.png'
import image3 from '@/images/israx3.png'
import image4 from '@/images/israx4.png'
import image5 from '@/images/israx5.png'
import image6 from '@/images/israx6.jpeg'
import image7 from '@/images/israx7.jpeg'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'El Nombre es el nombre que se asigna a una persona para su identificación dentro de la sociedad y para el ejercicio pleno de su vida civil, en todos los derechos y obligaciones que le corresponden. El Nombre es esencial para individualizar a las personas naturales y jurídicas, y está reconocido como un atributo fundamental de la personalidad tanto en el Código Civil como en la Constitución Política del Estado. Sin un nombre registrado adecuadamente, la persona no podría ejercer plenamente sus derechos civiles, lo cual incluye desde el acceso a la educación hasta el ejercicio de actividades económicas y legales.',
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5, image6, image7].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                rotations[imageIndex % rotations.length],
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ),
        )}
      </div>
    </div>
  )
}
export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="mx-auto w-full px-4">
          <div className="flex items-center justify-center gap-4">
            <Image
              src={logo}
              alt=""
              className="h-32 w-32 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
            />
            <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              ARS IURIS
            </h1>
          </div>
          <div className="mx-auto mt-6 px-6 text-center">
            <h2 className="mt-6 pb-4 text-base text-zinc-600 dark:text-zinc-400">
              Nombres completos de los integrantes del grupo.
            </h2>
            <ul className="space-y-2 pl-6">
              <li>Ricardo Ugarte Peredo</li>
              <li>Pablo Sebastián Rivas</li>
              <li>Coronado Israel</li>
              <li>Rodrigo Celiz</li>
              <li>Caero Correo electrónico</li>
            </ul>
            <h3 className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Correo electrónico o medio de contacto para consultas.
            </h3>
            <a
              href="mailto:arsiuris.sujetosdederecho@gmail.com"
              className="mt-2 text-base text-orange-400 dark:text-zinc-400"
            >
              arsiuris.sujetosdederecho@gmail.com
            </a>
          </div>
          <div className="">
            <h4 className="mt-6 text-center text-2xl font-bold text-zinc-600 dark:text-zinc-400">
              Agradecimientos
            </h4>
            <p className="mt-6 text-center text-base text-zinc-600 dark:text-zinc-400">
              Queremos expresar nuestro más profundo agradecimiento a la{' '}
              <strong>Dra. Sara Clarisse Ferreira Quevedo</strong>, cuya guía,
              compromiso y pasión por el conocimiento fueron pilares
              fundamentales en la realización de este proyecto. Su dedicación
              incansable y su generosidad al compartir su saber no sólo
              enriquecieron nuestro trabajo, sino también nuestra visión sobre
              el valor de la investigación jurídica de campo y el servicio a la
              sociedad. A usted, doctora, nuestro respeto, admiración y eterna
              gratitud.
            </p>
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
