import { Container } from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import sereci1 from '@/images/isra1.png'
import sereci2 from '@/images/isra2.png'
import sereci3 from '@/images/isra3.png'

import image1 from '@/images/israx1.png'
import image2 from '@/images/israx2.png'
import image3 from '@/images/israx3.png'
import image4 from '@/images/israx4.png'
import image5 from '@/images/israx5.png'
import image6 from '@/images/israx6.jpeg'
import image7 from '@/images/israx7.jpeg'
import { Metadata } from 'next'
const links = [
  {
    title: 'Página del SERECI',
    description:
      'Página del Servicio de Registro Cívico (SERECI) del Órgano Electoral Plurinacional',
    href: 'https://www.oep.org.bo/registro-civico/',
  },
  {
    title: 'Página del Tribunal Supremo de Justicia',
    description: 'Página oficial del Tribunal Supremo de Justicia de Bolivia',
    href: 'https://tsj.bo/',
  },
  {
    title: 'Resolución TSE-RSP N° 080/2012',
    description:
      'Reglamento de rectificación, cambio, complementación, ratificación, reposición, cancelación y traspaso de partidas del Registro Civil emitido por el Tribunal Supremo Electoral de Bolivia',
    href: 'https://www.oep.org.bo/wp-content/uploads/2023/02/RESOLUCION-080-2012-REGLAMENTO-RECTIFICACION-CAMBIO-COMPLEMENTACION-RATIFICACION-REPOSICION-CANCELACION-TRASPASO.pdf',
  },
  {
    title: 'Ley N° 807 de Identidad de Género',
    description:
      'Ley de Identidad de Género que establece el procedimiento para el cambio de nombre propio, dato de sexo e imagen de personas transexuales y transgénero en Bolivia',
    href: 'https://www.coordinadoradelamujer.org.bo/observatorio/archivos/marco/bolivialey807leydeidentidaddegnero22mai16_467.pdf',
  },
]

export const metadata: Metadata = {
  title: 'Documentos y Referencias',
  description:
    'El Nombre es el nombre que se asigna a una persona para su identificación dentro de la sociedad y para el ejercicio pleno de su vida civil, en todos los derechos y obligaciones que le corresponden. El Nombre es esencial para individualizar a las personas naturales y jurídicas, y está reconocido como un atributo fundamental de la personalidad tanto en el Código Civil como en la Constitución Política del Estado. Sin un nombre registrado adecuadamente, la persona no podría ejercer plenamente sus derechos civiles, lo cual incluye desde el acceso a la educación hasta el ejercicio de actividades económicas y legales.',
}

function Page() {
  return (
    <Container className="mt-16 sm:mt-2 dark:sm:mt-24">
      <h1 className="mt-8 text-center text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
        Documentos y Referencias
      </h1>

      <h2 className="mt-8 text-left text-xl font-bold tracking-tight text-zinc-700 dark:text-zinc-200">
        Enlaces
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        {links.map((link, linkIndex) => (
          <a
            key={linkIndex}
            target="_blank"
            href={link.href}
            className="flex items-center gap-4 rounded-lg bg-white px-4 py-2 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition hover:bg-zinc-50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:bg-zinc-700"
          >
            <span className="flex h-10 items-center justify-center rounded-lg bg-zinc-100 px-4 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
              {link.title}
            </span>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {link.description}
            </span>
          </a>
        ))}
      </div>
      <h2 className="mt-8 text-left text-xl font-bold tracking-tight text-zinc-700 dark:text-zinc-200">
        Formularios Sereci
      </h2>
      <div className="mt-6 flex flex-wrap gap-16">
        <Image src={sereci1} alt="Formulario Sereci 1" width={200} />

        <Image src={sereci2} alt="Formulario Sereci 2" width={200} />
        <Image src={sereci3} alt="Formulario Sereci 3" width={200} />
      </div>

      <h2 className="mt-8 text-left text-xl font-bold tracking-tight text-zinc-700 dark:text-zinc-200">
        Evidencias Visuales
      </h2>
      <div className="mt-6 flex flex-wrap gap-16">
        <Image src={image1} alt="Formulario Sereci 1" width={300} />
        <Image src={image2} alt="Formulario Sereci 2" width={300} />
        <Image src={image3} alt="Formulario Sereci 3" width={300} />
        <Image src={image4} alt="Formulario Sereci 4" width={300} />
        <Image src={image5} alt="Formulario Sereci 5" width={300} />
        <Image src={image6} alt="Formulario Sereci 6" width={300} />
        <Image src={image7} alt="Formulario Sereci 7" width={300} />
      </div>
    </Container>
  )
}

export default Page
