import { Container } from '@/components/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marco Normativo en Bolivia',
  description:
    'El Nombre es el nombre que se asigna a una persona para su identificación dentro de la sociedad y para el ejercicio pleno de su vida civil, en todos los derechos y obligaciones que le corresponden. El Nombre es esencial para individualizar a las personas naturales y jurídicas, y está reconocido como un atributo fundamental de la personalidad tanto en el Código Civil como en la Constitución Política del Estado. Sin un nombre registrado adecuadamente, la persona no podría ejercer plenamente sus derechos civiles, lo cual incluye desde el acceso a la educación hasta el ejercicio de actividades económicas y legales.',
}

export default function Normativo() {
  return (
    <Container className="mt-16 sm:mt-2 dark:sm:mt-24">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
          Marco Normativo en Bolivia sobre la rectificación o cambio de Nombre
        </h2>
        <h3 className="text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
          Leyes N° 018 y N° 025
        </h3>

        <p>
          En Bolivia, el cambio de nombre está regulado a través de
          procedimientos administrativos y judiciales. El marco normativo
          principal se basa en la Ley N° 018 del Órgano Electoral Plurinacional
          y la Ley N° 025 del Órgano Judicial, las cuales establecen los
          mecanismos para garantizar los procesos de rectificación o cambio de
          nombre.
        </p>

        <h4 className="text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
          Ley N° 018 - Ley del Órgano Electoral Plurinacional (2010)
        </h4>
        <p>
          La Ley N° 018, promulgada el 16 de junio de 2010, regula el ejercicio
          de la función electoral, así como la jurisdicción, competencias,
          obligaciones, atribuciones, organización, funcionamiento, servicios y
          el régimen de responsabilidades del Órgano Electoral Plurinacional
          (OEP). Su objetivo principal es garantizar una democracia
          intercultural en el Estado Plurinacional de Bolivia.
        </p>
        <p>
          La ley establece que el OEP tiene la misma jerarquía constitucional
          que los Órganos Legislativo, Ejecutivo y Judicial, actuando bajo los
          principios de independencia, separación, coordinación y cooperación.
          El OEP está conformado por el Tribunal Supremo Electoral, los
          Tribunales Electorales Departamentales, los Juzgados Electorales, los
          Jurados de Mesas de Sufragio y los Notarios Electorales.
        </p>
        <p>
          Entre las entidades que prestan servicios bajo el OEP, se encuentra el
          Servicio de Registro Cívico (SERECI).
        </p>

        <h5 className="text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
          ¿Qué es el SERECI?
        </h5>
        <p>
          El Servicio de Registro Cívico (SERECI) es una entidad pública
          dependiente del Órgano Electoral Plurinacional, encargada de
          administrar el registro civil y electoral en Bolivia. Su función
          principal es registrar y certificar hechos vitales como nacimientos,
          matrimonios y defunciones, así como gestionar rectificaciones,
          complementaciones y cambios de datos personales, incluyendo el cambio
          de nombre mediante un procedimiento administrativo.
        </p>

        <p>
          <strong>Principales artículos de la Ley N° 018:</strong>
        </p>
        <ul>
          <li>
            <strong>Artículo 70:</strong> El SERECI organiza y administra el
            registro de personas naturales en aspectos como nombres, apellidos,
            estado civil, filiación, nacimiento y defunción.
          </li>
          <li>
            <strong>Artículo 71, numeral 9:</strong> Faculta al SERECI para
            corregir, cambiar o complementar datos del registro civil mediante
            un trámite administrativo gratuito.
          </li>
          <li>
            <strong>Artículo 73:</strong> Establece que es competencia del
            SERECI realizar la rectificación de errores y la complementación de
            datos, en el caso del nombre, mediante trámite administrativo en
            situaciones no contenciosas.
          </li>
        </ul>
        <p>
          👉 Consulta aquí la Ley N° 018 completa:
          <a
            href="https://www.oep.org.bo/wp-content/uploads/2017/01/Ley_018.pdf"
            className="text-orange-400"
          >
            Texto oficial en PDF
          </a>
        </p>

        <h4 className="text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
          Ley N° 025 - Ley del Órgano Judicial (2010)
        </h4>
        <p>
          La Ley N° 025, conocida como la Ley del Órgano Judicial, establece en
          su Artículo 69 que los juzgados civiles y comerciales tienen
          competencia para conocer y decidir sobre los procesos de rectificación
          o cambio de nombre.
        </p>
        <p>
          Esto significa que cuando una persona no puede realizar el cambio de
          nombre por la vía administrativa —por ejemplo, debido a la existencia
          de controversias, oposición de terceros o causas no contempladas por
          la Ley N° 018— debe recurrir a la vía judicial.
        </p>

        <p>
          <strong>Procedimiento judicial:</strong>
        </p>
        <ul>
          <li>
            Se inicia un proceso ordinario presentando una demanda, regularmente
            dirigida contra el mismo SERECI.
          </li>
          <li>
            El interesado expone los motivos fundados para solicitar el cambio
            de nombre.
          </li>
          <li>
            Se notifica a posibles terceros interesados para que puedan
            manifestar oposición si existiera.
          </li>
          <li>Se evalúan las pruebas presentadas para justificar el cambio.</li>
          <li>
            Se lleva a cabo una audiencia donde las partes pueden exponer sus
            argumentos.
          </li>
          <li>
            El juez emite una sentencia basada en la protección de la identidad,
            la dignidad del solicitante y el interés público, autorizando o
            denegando el cambio.
          </li>
        </ul>
        <p>
          👉 Consulta aquí la Ley N° 025 completa:{' '}
          <a
            href="https://tsj.bo/wp-content/uploads/2019/11/ley-025-ley-del-organo-judicial.pdf"
            className="text-orange-400"
          >
            Texto oficial en PDF
          </a>
        </p>

        <h4 className="text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
          Relación y Coordinación entre SERECI y Órgano Judicial
        </h4>
        <p>
          Existe una coordinación clara entre ambas vías, cada una según la
          naturaleza y complejidad del caso:
        </p>
        <ul>
          <li>
            <strong>SERECI:</strong> Atiende trámites administrativos más
            ágiles, gratuitos y aplicables en casos de correcciones simples, sin
            controversias.
          </li>
          <li>
            <strong>Órgano Judicial:</strong> Interviene en casos complejos que
            requieren un análisis más profundo, en disputas legales o cuando no
            es posible utilizar la vía administrativa.
          </li>
        </ul>
        <p>
          De este modo, se garantiza el derecho al nombre a través de vías
          diferenciadas según las necesidades de cada situación.
        </p>

        <h4 className="text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
          Ejemplos Prácticos
        </h4>
        <p>
          <strong>Procedimiento administrativo ante el SERECI:</strong>
          <br />
          Un ciudadano que tiene un error tipográfico en su nombre —por ejemplo,
          registrado como &#34Solis&#34 en lugar de &#34Soliz&#34— puede
          solicitar la corrección directamente al SERECI. Si la solicitud se
          presenta correctamente con toda la documentación de respaldo, el
          SERECI autoriza la corrección mediante trámite administrativo, sin
          necesidad de recurrir a un proceso judicial.
        </p>

        <p>
          <strong>Procedimiento judicial:</strong>
          <br />
          Una persona que considera que su nombre completo le genera
          discriminación y afecta su dignidad debe iniciar un proceso judicial
          para cambiarlo. El juez, luego de analizar las pruebas y los
          argumentos, resolverá si procede o no la autorización del cambio de
          nombre.
        </p>
      </div>
    </Container>
  )
}
