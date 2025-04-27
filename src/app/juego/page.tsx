import { Container } from '@/components/Container'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Juego Interactivo',
  description:
    'El Nombre es el nombre que se asigna a una persona para su identificación dentro de la sociedad y para el ejercicio pleno de su vida civil, en todos los derechos y obligaciones que le corresponden. El Nombre es esencial para individualizar a las personas naturales y jurídicas, y está reconocido como un atributo fundamental de la personalidad tanto en el Código Civil como en la Constitución Política del Estado. Sin un nombre registrado adecuadamente, la persona no podría ejercer plenamente sus derechos civiles, lo cual incluye desde el acceso a la educación hasta el ejercicio de actividades económicas y legales.',
}
function page() {
  return (
    <Container className="mt-9">
      <a
        className="mx-auto block text-center text-orange-400"
        href="
        https://kahoot.it/challenge/08567171?challenge-id=9827b32c-e568-49a6-9d96-2fd436434d78_1745779597947"
      >
        Juego Interactivo, haz click para entrar
      </a>
    </Container>
  )
}

export default page
