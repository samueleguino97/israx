import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
export const metadata: Metadata = {
  title: 'Teoria',
  description:
    'El Nombre es el nombre que se asigna a una persona para su identificación dentro de la sociedad y para el ejercicio pleno de su vida civil, en todos los derechos y obligaciones que le corresponden. El Nombre es esencial para individualizar a las personas naturales y jurídicas, y está reconocido como un atributo fundamental de la personalidad tanto en el Código Civil como en la Constitución Política del Estado. Sin un nombre registrado adecuadamente, la persona no podría ejercer plenamente sus derechos civiles, lo cual incluye desde el acceso a la educación hasta el ejercicio de actividades económicas y legales.',
}

export default function Teoria() {
  return (
    <Container className="mt-16 sm:mt-2 dark:sm:mt-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-4">
        <div className="pt-16 lg:order-last lg:row-span-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Introduccion
          </h1>
          <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              El nombre constituye uno de los atributos fundamentales de la
              personalidad jurídica y desempeña un papel esencial en la
              configuración de la identidad de toda persona, tanto en el ámbito
              individual como en el colectivo.
            </p>
            <p>
              Para las personas individuales, el nombre está compuesto por el
              nombre propio y los apellidos, elementos que permiten su
              individualización y diferenciación dentro de la sociedad. Es el
              primer atributo reconocible de la personalidad jurídica, y junto a
              otros atributos como el domicilio o el estado civil integra el
              núcleo que habilita a las personas a ejercer derechos, asumir
              obligaciones y participar activamente en la vida jurídica y sobre
              todo social.
            </p>
            <p>
              Más que un conjunto de sílabas, el nombre es un elemento que
              acompaña al individuo desde su nacimiento y que, en muchos casos,
              se convierte en símbolo de pertenencia, respeto y dignidad. Su
              valor trasciende lo formal, proyectándose como una manifestación
              concreta de la personalidad, la autonomía y la inserción de cada
              persona en la sociedad.
            </p>
          </div>

          <h1 className="mt-16 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Antecedentes Generales del Derecho al Nombre y su Reconocimiento
            Internacional
          </h1>

          <h2 className="mt-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Breve recorrido histórico desde los orígenes del Nombre
          </h2>
          <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Desde tiempos inmemoriales, el nombre ha sido el principal medio
              para designar e identificar a las personas dentro de cualquier
              sociedad. En las primeras civilizaciones, donde las comunidades
              eran pequeñas y las relaciones personales directas, un nombre
              individual bastaba para distinguir a cada miembro. Sin embargo, a
              medida que las poblaciones crecieron y las sociedades se hicieron
              más complejas, esta forma básica de identificación resultó
              insuficiente para diferenciar claramente a cada individuo.
            </p>
            <p>
              En la antigua Roma se desarrolló un sistema de nombres mucho más
              elaborado y estructurado. Cada ciudadano romano poseía un
              praenomen o nombre personal, que era el equivalente a nuestro
              nombre de pila. A este se añadía el nomen, que indicaba la
              pertenencia a una familia o clan, conocido como gens. Finalmente,
              en muchos casos se sumaba un tercer nombre, el cognomen, que
              funcionaba como un sobrenombre o apelativo para distinguir a los
              individuos dentro de una misma familia. Este sistema tripartito no
              solo facilitaba la identificación personal, sino que también
              reflejaba la posición social, el linaje y, en ocasiones,
              características personales o logros. Este modelo romano sentó las
              bases para la formación de los apellidos modernos en muchas
              culturas occidentales.
            </p>
            <p>
              No obstante, esta práctica no fue exclusiva de Roma. Otros
              pueblos, especialmente los germánicos, desarrollaron sistemas
              complementarios de identificación basados en la filiación y la
              descendencia. Era común el uso de expresiones patronímicas “ing”
              (hijo de), como en “Johann Harting” que significa Johann hijo de
              Hart. Con la llegada de los visigodos -un pueblo germánico que se
              asentó en la península ibérica durante la Edad Media- esta
              costumbre se consolidó y evolucionó dentro del contexto de las
              lenguas romances que allí se hablaban. Así surgió el uso del
              sufijo “-ez”, que significa literalmente “hijo de”, dando origen a
              apellidos tan comunes como Fernández (hijo de Fernando), González
              (hijo de Gonzalo) o Martínez (hijo de Martín).
            </p>
            <p>
              Además de la filiación, los sobrenombres y apellidos también
              podían derivar de la profesión, características físicas o rasgos
              personales. Por ejemplo, una persona dedicada a la herrería podía
              ser conocida como “Arturo Herrero”, mientras que alguien con
              cabello claro podía recibir un apelativo como “Arturo Rubio”.
              Estas denominaciones reflejaban aspectos sociales y culturales y
              ayudaban a identificar a las personas de manera más precisa en
              comunidades cada vez más grandes y complejas.
            </p>
          </div>

          <h1 className="mt-16 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Conceptos Básicos sobre el Nombre
          </h1>
          <h2 className="mt-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Definición jurídica del nombre:
          </h2>
          <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Desde tiempos inmemoriales, el nombre ha sido el principal medio
              para designar e identificar a las personas dentro de cualquier
              sociedad. En las primeras civilizaciones, donde las comunidades
              eran pequeñas y las relaciones personales directas, un nombre
              individual bastaba para distinguir a cada miembro. Sin embargo, a
              medida que las poblaciones crecieron y las sociedades se hicieron
              más complejas, esta forma básica de identificación resultó
              insuficiente para diferenciar claramente a cada individuo.
            </p>
            <p>
              En la antigua Roma se desarrolló un sistema de nombres mucho más
              elaborado y estructurado. Cada ciudadano romano poseía un
              praenomen o nombre personal, que era el equivalente a nuestro
              nombre de pila. A este se añadía el nomen, que indicaba la
              pertenencia a una familia o clan, conocido como gens. Finalmente,
              en muchos casos se sumaba un tercer nombre, el cognomen, que
              funcionaba como un sobrenombre o apelativo para distinguir a los
              individuos dentro de una misma familia. Este sistema tripartito no
              solo facilitaba la identificación personal, sino que también
              reflejaba la posición social, el linaje y, en ocasiones,
              características personales o logros. Este modelo romano sentó las
              bases para la formación de los apellidos modernos en muchas
              culturas occidentales.
            </p>
            <p>
              No obstante, esta práctica no fue exclusiva de Roma. Otros
              pueblos, especialmente los germánicos, desarrollaron sistemas
              complementarios de identificación basados en la filiación y la
              descendencia. Era común el uso de expresiones patronímicas “ing”
              (hijo de), como en “Johann Harting” que significa Johann hijo de
              Hart. Con la llegada de los visigodos -un pueblo germánico que se
              asentó en la península ibérica durante la Edad Media- esta
              costumbre se consolidó y evolucionó dentro del contexto de las
              lenguas romances que allí se hablaban. Así surgió el uso del
              sufijo “-ez”, que significa literalmente “hijo de”, dando origen a
              apellidos tan comunes como Fernández (hijo de Fernando), González
              (hijo de Gonzalo) o Martínez (hijo de Martín).
            </p>
            <p>
              Además de la filiación, los sobrenombres y apellidos también
              podían derivar de la profesión, características físicas o rasgos
              personales. Por ejemplo, una persona dedicada a la herrería podía
              ser conocida como “Arturo Herrero”, mientras que alguien con
              cabello claro podía recibir un apelativo como “Arturo Rubio”.
              Estas denominaciones reflejaban aspectos sociales y culturales y
              ayudaban a identificar a las personas de manera más precisa en
              comunidades cada vez más grandes y complejas.
            </p>
          </div>

          <div className="h-4" />

          <h2 className="mb-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Definición jurídica del nombre:
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
                Personalisimo
              </h2>
              <Card.Description>
                El nombre está intrínsecamente vinculado a la identidad de la
                persona, reflejando su individualidad y siendo indispensable
                para su identificación tanto en la sociedad como ante la ley.
                Esta característica implica que el nombre es exclusivo de cada
                individuo y no puede ser utilizado por otros para evitar
                confusiones o suplantaciones.
              </Card.Description>
            </Card>

            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Inalienable
              </h2>
              <Card.Description>
                El nombre no puede ser objeto de compraventa, cesión o cualquier
                tipo de transacción comercial. Es un derecho inherente e
                inseparable de la persona, que no puede ser transferido ni
                negociado, pues no constituye un bien económico, sino un
                elemento esencial de la personalidad.
              </Card.Description>
            </Card>
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Irrenunciable
              </h2>
              <Card.Description>
                Toda persona tiene el derecho y, a la vez, la obligación de
                poseer un nombre que la identifique. Por ello, no es posible
                renunciar voluntariamente a este derecho, ya que el nombre es
                necesario para el ejercicio de otros derechos y para la vida en
                sociedad.
              </Card.Description>
            </Card>
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Extrapatrimonial
              </h2>
              <Card.Description>
                La inmutabilidad del nombre significa que, en principio, no
                puede ser cambiado arbitrariamente. Según Guillermo A. Borda, en
                su obra Derecho Civil. Parte General, el nombre solo puede
                modificarse por causas graves y justificadas, y siempre mediante
                resolución judicial o administrativa conforme a la ley. Nadie
                puede cambiar su nombre por mera voluntad personal sin cumplir
                con los procedimientos legales establecidos
              </Card.Description>
            </Card>
          </ul>

          <h2 className="mb-6 pt-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Las causas consideradas graves que justifican el cambio de nombre
            incluyen, entre otras:
          </h2>

          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-2"
          >
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 pt-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Significado ridículo, injurioso o agraviantes
              </h2>
              <Card.Description>
                {' '}
                Cuando el nombre, en el idioma oficial del país, tiene un
                significado que puede ser objeto de burla, ofensa o deformación
                maliciosa. Por ejemplo, un nombre como “Kacas” podría ser
                cambiado a “Katz” para evitar burlas.
              </Card.Description>
            </Card>

            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Contradicción con el sentimiento religioso
              </h2>
              <Card.Description>
                Si el nombre es contrario a las creencias religiosas del
                solicitante y al sentir mayoritario de la sociedad. Por ejemplo,
                cambiar un nombre como “Ateo” por “Atilio” para respetar la
                identidad religiosa.
              </Card.Description>
            </Card>
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Traducción o adaptación de nombres extranjeros
              </h2>
              <Card.Description>
                Cuando el nombre original proviene de otro idioma y se desea su
                traducción o adaptación al idioma oficial para facilitar su
                pronunciación o integración cultural.
              </Card.Description>
            </Card>
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Deshonra pública
              </h2>
              <Card.Description>
                Si el nombre ha sido públicamente deshonrado, ya sea por los
                padres o por otros homónimos, debido a la comisión de delitos
                graves, actos inhumanos o situaciones que hayan causado
                notoriedad negativa, afectando la dignidad del titular.
              </Card.Description>
            </Card>

            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Extrapatrimonial
              </h2>
              <Card.Description>
                El nombre no tiene un valor económico y no puede ser objeto de
                comercio ni de derechos patrimoniales. Esto protege la
                integridad personal y evita que el nombre se utilice como un
                bien susceptible de explotación comercial.
              </Card.Description>
            </Card>
          </ul>

          <h2 className="mb-6 pt-6 text-xl font-semibold tracking-tight text-zinc-400 sm:text-2xl dark:text-zinc-100">
            Funciones y efectos legales del nombre en la sociedad y el derecho:
          </h2>

          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-2"
          >
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 pt-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Identificación
              </h2>
              <Card.Description>
                {' '}
                Permite individualizar a las personas, diferenciándose unas de
                otras en todos los ámbitos.
              </Card.Description>
            </Card>

            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Localización
              </h2>
              <Card.Description>
                Facilita la ubicación de un individuo en registros y bases de
                datos, siendo esencial para trámites legales y administrativos.
              </Card.Description>
            </Card>
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Atribución de derechos y obligaciones
              </h2>
              <Card.Description>
                El nombre vincula a la persona con sus derechos y deberes
                legales, permitiendo ejercerlos y responder por ellos.
              </Card.Description>
            </Card>
            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Establecimiento de relaciones jurídicas
              </h2>
              <Card.Description>
                {' '}
                Esencial para realizar contratos, transacciones y participar en
                procesos judiciales.
              </Card.Description>
            </Card>

            <Card
              as="li"
              className="rounded-2xl bg-zinc-100 px-4 py-6 dark:bg-zinc-800"
            >
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Protección de la identidad
              </h2>
              <Card.Description>
                El nombre está protegido legalmente contra el uso no autorizado
                por terceros, garantizando el derecho a la identidad personal.{' '}
              </Card.Description>
            </Card>
          </ul>
        </div>
      </div>
    </Container>
  )
}
