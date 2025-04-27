import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marco Normativo en Bolivia',
  description:
    'El Nombre es el nombre que se asigna a una persona para su identificación dentro de la sociedad y para el ejercicio pleno de su vida civil, en todos los derechos y obligaciones que le corresponden. El Nombre es esencial para individualizar a las personas naturales y jurídicas, y está reconocido como un atributo fundamental de la personalidad tanto en el Código Civil como en la Constitución Política del Estado. Sin un nombre registrado adecuadamente, la persona no podría ejercer plenamente sus derechos civiles, lo cual incluye desde el acceso a la educación hasta el ejercicio de actividades económicas y legales.',
}

export default function Normativo() {
  return (
    <Container className="mt-16 sm:mt-2 dark:sm:mt-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-4">
        <div className="pt-16 lg:order-last lg:row-span-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Marco Normativo en Bolivia: Leyes N° 018 y N° 025
          </h1>
          <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              La Ley Nº 018, promulgada el 16 de junio de 2010, regula el
              ejercicio de la función electoral, así como la jurisdicción,
              competencias, obligaciones, atribuciones, organización,
              funcionamiento, servicios y el régimen de responsabilidades del
              Órgano Electoral Plurinacional (OEP). Su objetivo principal es
              garantizar una democracia intercultural en el Estado Plurinacional
              de Bolivia.
            </p>
            <p>
              Dentro del marco normativo de esta ley, se establece que su
              finalidad es normar el ejercicio de la función electoral y
              asegurar el respeto a la diversidad cultural en la vida
              democrática del país. El OEP es reconocido como un órgano del
              poder público con la misma jerarquía constitucional que los
              Órganos Legislativo, Ejecutivo y Judicial, y actúa bajo los
              principios de independencia, separación, coordinación y
              cooperación.
            </p>
            <p>
              El Órgano Electoral Plurinacional está conformado por el Tribunal
              Supremo Electoral, los Tribunales Electorales Departamentales, los
              Juzgados Electorales, los Jurados de Mesas de Sufragio y los
              Notarios Electorales. Para cumplir con los fines establecidos por
              la ley, el OEP presta servicios a través de distintas entidades,
              entre ellas el Servicio de Registro Cívico (SERECI).
            </p>
          </div>

          <h1 className="mt-16 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            ¿Qué es el SERECI?
          </h1>

          <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              El Servicio de Registro Cívico (SERECI) es una entidad pública
              dependiente del Órgano Electoral Plurinacional, encargada de
              administrar el registro civil y electoral en Bolivia. Su función
              principal consiste en registrar y certificar los hechos vitales de
              las personas, como nacimientos, matrimonios, defunciones, además
              de gestionar la rectificación y modificación de datos personales,
              incluyendo el cambio de nombre, mediante un procedimiento
              administrativo.
            </p>
            <p>
              Artículo 70: Establece que el SERECI tiene la responsabilidad de
              organizar y administrar el registro de personas naturales en lo
              que respecta a nombres, apellidos, estado civil, filiación,
              nacimiento, hechos vitales y defunción, así como también del
              registro electoral.
            </p>
            <p>
              Artículo 71, numeral 2: Dispone que el SERECI debe registrar
              hechos como nacimientos, matrimonios, divorcios, defunciones,
              reconocimientos y la nacionalidad de las personas naturales.
            </p>
            <p>
              Artículo 71, numeral 9:Señala que el SERECI tiene la facultad de
              rectificar, cambiar o complementar los datos inscritos en el
              Registro Civil mediante un trámite administrativo gratuito. Esto
              incluye la corrección de errores, la modificación de datos y la
              incorporación de información faltante.
            </p>

            <p>
              Artículo 73: Regula el procedimiento para la rectificación o
              cambio de nombre. La solicitud debe presentarse ante la Dirección
              Departamental del SERECI correspondiente, junto con los documentos
              que respalden la causa del cambio y la identidad del solicitante.
              El SERECI tiene un plazo de 15 días para emitir una resolución
              administrativa que autorice o rechace la solicitud. En caso de que
              falten requisitos, se notificará al solicitante para que los
              subsane.
            </p>
          </div>

          <h1 className="mt-16 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Leyes N° 018 y N° 025
          </h1>
          <h2 className="mt-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Ley N° 018 - Ley del Órgano Electoral Plurinacional (2010)
          </h2>
          <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Texto oficial completo en PDF:
              <p className="relative z-10 mt-2 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <Link href="https://oep.org.bo/wp-content/uploads/2017/01/Ley_018.pdf">
                  https://oep.org.bo/wp-content/uploads/2017/01/Ley_018.pdf
                </Link>
              </p>
            </p>
          </div>

          <h2 className="mt-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Ley N° 018 - Ley del Órgano Electoral Plurinacional (2010)
          </h2>
          <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Ley N° 025 (Ley del Órgano Judicial): Según el artículo 69 de la
              Ley N° 025, los juzgados civiles y comerciales tienen competencia
              para conocer y decidir sobre los procesos de rectificación o
              cambio de nombre. Esto implica que cuando una persona no puede
              realizar el cambio de nombre mediante el procedimiento
              administrativo en el SERECI (por ejemplo, porque existen
              controversias, oposición de terceros o causas no contempladas en
              la Ley N° 018), debe acudir a estos juzgados para iniciar un
              proceso judicial. El procedimiento ordinario se inicia con la
              presentación de una demanda regularmente contra el mismo SERECI
              ante el juzgado correspondiente, donde el interesado expone los
              motivos fundados para solicitar el cambio de nombre.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Se notifica a terceros que puedan tener interés en el caso, para
                que puedan presentar oposición si la hubiera.
              </li>
              <li>
                Se evalúan las pruebas presentadas para justificar el cambio.{' '}
              </li>
              <li>
                Se realiza una audiencia donde las partes pueden exponer sus
                argumentos.
              </li>
            </ul>
            <p>
              El juez toma una decisión basada en la protección de la identidad,
              la dignidad del solicitante y el interés público, autorizando o
              denegando el cambio de nombre. Ley N° 025 - Ley del Órgano
              Judicial (Tribunal Supremo de Justicia, 2010)
              <p className="relative z-10 mt-2 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <Link href="https://tsj.bo/wp-content/uploads/2019/11/ley-025-ley-del-organo-judicial.pdf">
                  https://tsj.bo/wp-content/uploads/2019/11/ley-025-ley-del-organo-judicial.pdf
                </Link>
              </p>
            </p>
          </div>

          <div className="h-4" />

          <h2 className="mb-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Relación y coordinación entre ambos órganos
          </h2>

          <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              El SERECI atiende procedimientos administrativos, que son más
              ágiles, menos costosos y aplicables en casos claros y sin
              conflictos. El Órgano Judicial interviene cuando el caso requiere
              un análisis más profundo, existen controversias o la ley no
              permite la vía administrativa. Sin embargo, ambos órganos
              garantizan el derecho al nombre, ofreciendo vías adecuadas según
              la complejidad y naturaleza del caso.
            </p>
            <p>
              SERECI: Corrección de errores, cambios por razones de dignidad o
              identidad sin controversias.
            </p>
            <p>
              Órgano Judicial: Cambios complejos, disputas legales, o cuando se
              requiere autorización judicial para modificaciones no contempladas
              en la vía administrativa.
            </p>
          </div>

          <h2 className="mb-6 pt-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Ejemplos Practicos
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-2"
          >
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Situación administrativa
              </h2>
              <Card.Description>
                Una persona cuyo nombre fue registrado con un error tipográfico
                puede solicitar al SERECI la corrección mediante trámite
                administrativo. Como por ejemplo alguien que esté registrado con
                el apellido Solis, pero, en realidad sea Soliz. Si el SERECI
                verifica la solicitud y documentos, autoriza la corrección sin
                necesidad de juicio.
              </Card.Description>
            </Card>

            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Situación judicia
              </h2>
              <Card.Description>
                Una persona que desea cambiar su nombre completo por causas
                fundadas como que su nombre actual genera discriminación, debe
                iniciar un proceso judicial. El juez evaluará el caso y decidirá
                si procede el cambio.
              </Card.Description>
            </Card>
          </ul>
        </div>
      </div>
    </Container>
  )
}
