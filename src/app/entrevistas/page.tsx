import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entrevistas',
  description:
    'El Nombre es el nombre que se asigna a una persona para su identificación dentro de la sociedad y para el ejercicio pleno de su vida civil, en todos los derechos y obligaciones que le corresponden. El Nombre es esencial para individualizar a las personas naturales y jurídicas, y está reconocido como un atributo fundamental de la personalidad tanto en el Código Civil como en la Constitución Política del Estado. Sin un nombre registrado adecuadamente, la persona no podría ejercer plenamente sus derechos civiles, lo cual incluye desde el acceso a la educación hasta el ejercicio de actividades económicas y legales.',
}

const interviews = [
  {
    title: 'Entrevista 1: César Campos - Funcionario de SERECI, mesa 2',
    dialogue: [
      {
        speaker: 'Entrevistador',
        text: 'Buenas tardes. ¿Podría darnos una breve introducción sobre la función del SERECI en relación al cambio de nombre y correcciones de partidas?',
      },
      {
        speaker: 'César Campos - Funcionario de SERECI, mesa 2',
        text: 'Buenas tardes. Mi nombre es César Campos. En el SERECI nos encargamos de tramitar cambios y correcciones en los registros civiles, conforme a lo establecido en la Ley 018 y la Ley 080. Aunque no efectuamos cambios de nombre por voluntad propia de los titulares —esa competencia corresponde al órgano judicial— sí realizamos correcciones, rectificaciones, complementaciones y algunas modificaciones en base a documentos de filiación. Cada trámite es diferente y se analiza de forma particular. Lo que más atendemos, por ejemplo, son casos en los que se requiere igualar las partidas de nacimiento de todos los hermanos. Esto sucede cuando, al tramitar un certificado de descendencia, se detectan errores en los nombres o apellidos de los padres en las partidas de nacimiento de los hijos. En esos casos solicitamos documentos de filiación, como certificados de matrimonio o actas de reconocimiento, que nos permitan corregir y completar la información de manera adecuada. Si los padres se casaron después del nacimiento de los hijos, utilizamos los documentos de legitimación correspondientes para realizar la corrección.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Perfecto. Como usted mencionaba, el cambio de nombre voluntario es competencia del órgano judicial. ¿Qué sucede cuando una persona ya cuenta con una sentencia judicial para el cambio de nombre? ¿Cómo actúa el SERECI en ese caso?',
      },
      {
        speaker: 'César Campos - Funcionario de SERECI, mesa 2',
        text: 'Cuando llega una sentencia judicial, el procedimiento es mucho más sencillo. La orden del juez no se discute, simplemente se acata. Tenemos una ventanilla especializada (Ventanilla 15) donde los juzgados entregan los testimonios de sentencia. La persona interesada recoge el documento y, tras verificar su autenticidad, procedemos a registrar la corrección o cambio de nombre en la partida de nacimiento. Lo que analizamos principalmente es el "Por Tanto" de la sentencia, que es donde el juez dispone expresamente el cambio. No revisamos el resto del contenido procesal.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Respecto a los trámites administrativos de corrección, ¿cuánto tiempo suelen demorar, aproximadamente, y tienen algún costo?',
      },
      {
        speaker: 'César Campos - Funcionario de SERECI, mesa 2',
        text: 'Los trámites administrativos en el SERECI son gratuitos a nivel nacional. Una vez que el interesado presenta toda la documentación necesaria (certificados de matrimonio, actas de reconocimiento, sentencia judicial, etc.), la corrección en ventanilla puede realizarse en aproximadamente 10 a 15 minutos. Claro que este tiempo se refiere al momento en que el trámite ya ha sido admitido en ventanilla; antes de eso, puede haber un pequeño periodo de verificación en sala.',
      },
      {
        speaker: 'Entrevistador',
        text: 'En relación con las personas transgénero, ¿pueden realizar el cambio de nombre y sexo directamente en el SERECI?',
      },
      {
        speaker: 'César Campos - Funcionario de SERECI, mesa 2',
        text: 'Sí. El procedimiento para personas transgénero está regulado por la Ley 807 de Identidad de Género. Esta norma permite a las personas cambiar su nombre y su género registrado mediante un trámite administrativo en el SERECI, siguiendo los requisitos establecidos en la ley. El procedimiento está claramente detallado en dicha normativa.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Finalmente, ¿qué criterios utilizan ustedes como SERECI para determinar si una solicitud administrativa procede o si debe ser derivada a la vía judicial?',
      },
      {
        speaker: 'César Campos - Funcionario de SERECI, mesa 2',
        text: 'El principal criterio es la existencia de pruebas documentales válidas. Si una persona solicita la corrección de un apellido, pero no presenta certificados de matrimonio, actas de reconocimiento o documentos que respalden el cambio, no podemos intervenir. En esos casos, derivamos necesariamente a la vía judicial. Otro ejemplo: si ya se realizó una corrección administrativa en el pasado (por ejemplo, cambiar de "Solís" con "s" a "Solíz" con "z") y ahora quieren volver al nombre anterior, tampoco podemos modificarlo nuevamente por la vía administrativa; tendría que resolverse por medio de un proceso judicial.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Muchas gracias, doctor, por su tiempo y por la valiosa información.',
      },
    ],
  },
  {
    title: 'Entrevista 2: Dr Jose García',
    dialogue: [
      {
        speaker: 'Entrevistador',
        text: 'Buen día, doctor. Vamos a tratar el tema del cambio de nombre como atributo de la personalidad jurídica. Queremos abordar tanto el trámite administrativo, que corresponde al SERECI, como el trámite judicial mediante demanda ordinaria. Antes de comenzar con las preguntas teóricas, ¿podría contarnos brevemente sobre su trayectoria profesional?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Mi nombre es José García. Tengo aproximadamente 28 años de ejercicio profesional. Soy licenciado en Derecho, con especialidad en Procedimiento Civil y Procesal Civil, además de contar con una maestría en Derecho Civil. Me desempeño principalmente en el área civil y constitucional, ya que estas materias me permiten un análisis doctrinal, conceptual y jurisprudencial profundo, a diferencia del área penal, donde predomina el criterio de convencimiento. Actualmente, soy abogado de empresas, trabajando para el Banco Mercantil, Banco Unión, y otros empresarios de Cochabamba, además de atender clientes particulares. Desde mis inicios como funcionario judicial, he desarrollado mi carrera en este ámbito que tanto me apasiona.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Muchas gracias, doctor. Ahora, yendo al tema teórico, ¿podría darnos una definición breve de qué es el nombre y por qué se considera un atributo de la personalidad jurídica?',
      },
      {
        speaker: 'Doctor José García',
        text: 'El nombre es la denominación que se asigna a una persona para su identificación dentro de la sociedad y para el ejercicio pleno de su vida civil, en todos los derechos y obligaciones que le corresponden. El nombre es esencial para individualizar a las personas naturales y jurídicas, y está reconocido como un atributo fundamental de la personalidad tanto en el Código Civil como en la Constitución Política del Estado. Sin un nombre registrado adecuadamente, la persona no podría ejercer plenamente sus derechos civiles, lo cual incluye desde el acceso a la educación hasta el ejercicio de actividades económicas y legales.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Gracias, doctor. Desde su experiencia, ¿podría describirnos el procedimiento judicial para solicitar un cambio de nombre? ¿Cuáles son los pasos principales y los requisitos que debe cumplir una persona?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Claro. Primero, es importante distinguir: si se trata de una simple corrección de datos menores, puede realizarse por vía administrativa en el SERECI. Sin embargo, si el cambio es sustancial —como el aditamento o modificación de un nombre o apellido— debe tramitarse judicialmente mediante un proceso ordinario. El procedimiento judicial implica presentar una demanda ante un juez público en materia civil, cumpliendo los requisitos del artículo 110 del Código Procesal Civil: identificación clara del demandante, fundamentos de hecho (explicando las razones del cambio), fundamentos de derecho (basados en el Código Civil y la Constitución) y la solicitud concreta. La demanda debe dirigirse contra el SEGIP y contra presuntos interesados, pues el cambio podría afectar derechos de terceros. Tras la admisión, se notifican las partes, se tramita la contestación y se realiza la audiencia preliminar donde se admite la prueba, principalmente documental, y eventualmente testifical complementaria. Finalmente, el juez dicta sentencia ordenando —de ser procedente— el cambio de nombre.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Muchas gracias, doctor. Sabemos que una de las características principales del nombre es su inmutabilidad. ¿Cuáles son las causas válidas para autorizar el cambio de nombre judicialmente, y existen limitaciones?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Las principales causas que permiten el cambio de nombre son aquellas donde el nombre asignado genera afectaciones a la dignidad de la persona. Por ejemplo, nombres considerados ridículos, peyorativos o que han sido motivo de burla constante en la vida civil. Otra causa válida es la confusión entre miembros de una misma familia debido a nombres demasiado similares. También se admiten cambios o complementaciones en casos donde existan errores en los registros civiles que afecten la identificación de la persona. Por supuesto, cualquier solicitud de cambio debe estar adecuadamente fundamentada y probada.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Qué documentos o pruebas suelen ser necesarias para fundamentar la solicitud de cambio de nombre?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Principalmente, el certificado de nacimiento del solicitante, certificados de matrimonio si corresponde, documentos públicos emitidos por autoridades estatales (como títulos profesionales, certificados de estudios, cédula de identidad, etc.). Toda prueba documental que respalde la existencia del nombre a modificar. Adicionalmente, puede incorporarse prueba testifical que acredite el perjuicio sufrido y, en algunos casos, pruebas periciales o inspecciones si existe homonimia o confusión en registros civiles.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿El cambio de nombre puede ser solicitado únicamente por personas mayores de edad, o también por menores? ¿Quién representa a los menores en este proceso?',
      },
      {
        speaker: 'Doctor José García',
        text: 'El cambio puede ser solicitado tanto por personas mayores de edad como por menores. En el caso de menores, son sus padres o representantes legales quienes deben iniciar el trámite, sin necesidad de un poder especial, ya que la representación legal se presume conforme al Código Procesal Civil y el Código de las Familias.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Doctor, en relación con las personas transgénero o con identidad de género diferente al asignado al nacer, ¿qué implicancias tiene el cambio de nombre?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Es una realidad que debemos asumir. El cambio de nombre en personas transgénero permite la adecuación de su identidad en todos los registros civiles y documentos oficiales, como el SEGIP y el SERECI. Este cambio tiene implicaciones importantes en el ejercicio de sus derechos, incluyendo la protección especial de leyes dirigidas a mujeres, en caso de que la persona haya modificado su género registral. A partir de la resolución judicial o administrativa correspondiente, su identidad debe ser plenamente reconocida en todos los ámbitos.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Qué sucede si una persona cambia su nombre judicialmente y luego desea revertirlo o hacer un nuevo cambio?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Puede solicitar un nuevo cambio, pero debe iniciar un nuevo proceso judicial y fundamentar adecuadamente su solicitud. No existe prohibición, pero el juez evaluará si existen razones válidas para autorizarlo.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Cómo afecta el cambio de nombre a los derechos sucesorios o patrimoniales de una persona?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Afecta especialmente si se modifica o complementa un apellido, ya que puede alterar la identificación en la línea de sucesión hereditaria. Por tanto, cualquier cambio de nombre o apellido debe ser cuidadosamente documentado y registrado para evitar futuros conflictos patrimoniales o de filiación.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Qué recomendaciones daría a una persona que desea iniciar un proceso judicial para cambiar su nombre? ¿Cuánto tiempo suele demorar el proceso?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Le recomendaría reflexionar bien sobre las razones que motivan su decisión, ya que el proceso implica tiempo, esfuerzo y costos económicos. El trámite judicial puede demorar entre 10 meses a 1 año, dependiendo de la carga procesal. Además, los honorarios legales pueden variar entre 4.000 y 10.000 bolivianos, según la complejidad del caso.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Podría compartirnos algún caso que haya conocido o atendido relacionado con el cambio de nombre?',
      },
      {
        speaker: 'Doctor José García',
        text: 'Atendí un caso donde un joven tenía un nombre que coincidía con el de una mascota, motivo de constante burla en su vida escolar. Antes de su graduación de bachiller, realizamos todo el trámite de cambio de nombre. El proceso tardó aproximadamente 10 meses y permitió al joven graduarse con un nombre digno, logrando excelentes resultados académicos.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Muchas gracias, doctor, por su tiempo y por compartir su experiencia y conocimientos con nosotros.',
      },
    ],
  },
  {
    title: 'Entrevista 3: Dr. Javier Rodrigo Celiz Ortuño',
    dialogue: [
      {
        speaker: 'Entrevistador',
        text: 'Buen día, doctor. Le agradecemos mucho por su tiempo y disposición. Antes de comenzar, ¿podría contarnos brevemente sobre su trayectoria profesional y por qué decidió especializarse en Derecho Civil?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Buenos días. Estudié Derecho en la Universidad Mayor de San Simón y llevo casi treinta años de ejercicio profesional. Comencé como abogado litigante y después ingresé en la judicatura. Empecé mi carrera judicial en 2004 como juez instructor mixto en la provincia Eduardo Avaroa, en Challapata (Oruro), atendiendo casos en materia penal, civil y familiar. Posteriormente, fui juez en Sacaba por dos años y luego me trasladé a Cochabamba, donde ejercí seis años como juez en materia civil. Además, fui Vocal del Tribunal Departamental de Justicia en la Sala Civil Primera durante ocho años y desempeñé el cargo de Presidente del Tribunal Departamental. Desde hace cinco años, retomé la práctica privada de la abogacía, principalmente en el ámbito civil, porque es una materia amplia, apasionante, que requiere mucho estudio y dedicación constante.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Gracias, doctor. Desde el punto de vista jurídico, ¿qué es el nombre y por qué se considera un atributo fundamental de la personalidad?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'El nombre es el conjunto de palabras que individualizan a una persona en la sociedad. El Código Civil lo define como un atributo esencial de la personalidad, que permite a cada individuo ejercer plenamente sus derechos y cumplir sus obligaciones, especialmente aquellos derechos personales que solo pueden reclamarse directamente. Su función primordial es identificar a las personas, facilitando el ejercicio efectivo de derechos y obligaciones.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Doctor, ¿podría describirnos el procedimiento judicial para solicitar un cambio de nombre?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Primero es importante mencionar que existe un principio de inmutabilidad del nombre, que establece que el nombre no debería cambiarse, pues es clave para la identidad. No obstante, la ley permite excepciones. Si el cambio es simple (errores ortográficos o similares), se realiza en vía administrativa ante el registro civil. Si el caso es más complejo, debe tramitarse judicialmente. Este proceso judicial implica presentar una demanda formal ante un juez, explicando claramente las razones para el cambio y permitiendo la participación de terceros afectados. Si el juez encuentra justificados los motivos, emitirá una sentencia ordenando al registro civil realizar el cambio.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Cuáles serían causas válidas para autorizar un cambio de nombre judicialmente, según su experiencia?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Aunque la ley boliviana no detalla situaciones específicas, considero válidos aquellos casos donde el nombre afecta claramente la dignidad humana o expone al individuo al ridículo. Por ejemplo, homonimias con personajes negativos (Adolfo Hitler) o nombres cuya combinación resulta humillante (Dolores Fuertes, Armando Paredes, Soyla Vaca). La solicitud debe demostrar una afectación objetiva y real a la dignidad.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Cuánto suele durar en promedio este proceso judicial?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Depende mucho del juzgado y de la carga procesal. Aunque el Código señala aproximadamente dos a tres meses, en la práctica puede extenderse hasta un año o más, especialmente si hay apelaciones o retrasos judiciales.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Puede solicitarse un cambio de nombre para menores de edad?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Sí, siempre que los padres justifiquen adecuadamente que el nombre asignado afecta gravemente la dignidad del menor o le causa daño emocional significativo, como bullying severo.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Qué implicancias tiene el cambio de nombre para personas transgénero?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Es un tema actual complejo. Permitir el cambio de nombre implica también un cambio de identidad registral. Por ello, deben existir mecanismos que aseguren que este cambio no facilite la evasión de responsabilidades legales o patrimoniales, ni permita cometer fraudes u ocultar antecedentes penales. Se debería mantener confidencialmente una vinculación entre la identidad original y la nueva.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Considera necesario solicitar registros de antecedentes penales al realizar este proceso?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Sí, lo considero imprescindible para evitar que individuos utilicen el cambio de nombre para evadir obligaciones legales, como pensiones alimentarias, cobro de deudas o antecedentes penales.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Qué sucede si una persona quiere revertir el cambio de nombre o realizar uno nuevo?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Legalmente no hay impedimento alguno. La ley no prohíbe realizar múltiples cambios de nombre, siempre que la petición esté debidamente fundamentada. Por lo tanto, sí es posible volver a cambiar el nombre si se justifica correctamente.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Cómo afecta el cambio de nombre a los derechos sucesorios o patrimoniales?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Puede generar serias dificultades, especialmente si afecta el apellido, que establece la filiación necesaria para acceder a herencias y derechos patrimoniales. Estos casos requieren aclaraciones judiciales para restablecer la filiación correcta y garantizar los derechos sucesorios.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Qué recomendaciones daría a alguien que desea iniciar este proceso?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Que analice detenidamente si realmente tiene razones válidas y contundentes. Este proceso es largo y costoso. Recomendaría no buscar cambios basados en simples preferencias personales o vanidad, sino en situaciones objetivas que afecten significativamente la dignidad.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Finalmente, ¿alguna reflexión o sugerencia sobre el tema?',
      },
      {
        speaker: 'Doctor Javier Rodrigo Celiz Ortuño',
        text: 'Sugeriría que este trámite deje de ser competencia judicial y pase a ser manejado exclusivamente en vía administrativa. Las instituciones administrativas deben estar fortalecidas para facilitar estos cambios sin afectar la identidad jurídica original, asegurando que estos ajustes no sean utilizados para evadir responsabilidades. Esto reduciría significativamente la carga judicial y haría más sencillo el proceso para las personas interesadas.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Muchísimas gracias, doctor, por su tiempo y valiosa información.',
      },
    ],
  },
  {
    title: 'Entrevista 4: Juez Héctor Blanco Vargas - Civil Comercial 6',
    dialogue: [
      {
        speaker: 'Entrevistador',
        text: 'Buenas tardes, doctor. Vamos a proceder a realizar una entrevista. Somos estudiantes de la materia "Sujetos de Derecho" de la Universidad Católica Boliviana. Antes de pasar al tema jurídico, ¿podría presentarse y contarnos brevemente su trayectoria profesional, especialmente como juez?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'Mi nombre es Héctor Blanco Vargas. Soy egresado de la Universidad Mayor de San Andrés de La Paz. He trabajado en diversas instituciones relacionadas con temas civiles, como el SENASIR, en asuntos vinculados a problemas de nombres. Además, cuento con diplomados y maestrías en el área civil. Actualmente, llevo alrededor de siete años ejerciendo como juez.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Muchísimas gracias, doctor. Ahora sí, entrando en el tema, desde el punto de vista jurídico, ¿qué es el nombre y por qué se considera un atributo fundamental de la personalidad?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'El Código Civil, en su artículo 9, así como la Constitución Política del Estado, reconocen el derecho a la identidad y la filiación como elementos esenciales de cada persona. El nombre permite a los individuos desarrollarse plenamente en la sociedad, ya que otorga la personalidad necesaria para actuar en todo tipo de relaciones jurídicas y sociales.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Podría describirnos el procedimiento judicial para solicitar un cambio de nombre?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'El procedimiento para el cambio de nombre tiene dos instancias. Primero, debe agotarse la vía administrativa ante el SERECI, donde se presenta un recurso y, en su caso, un recurso jerárquico. Si esta vía no resuelve favorablemente, recién se puede acudir al órgano judicial. Como jueces, analizamos si efectivamente existe una causa que justifique el cambio, como casos de discriminación vinculados al nombre o apellido. Evaluamos si la solicitud está respaldada por una afectación real o no.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Desde su experiencia, ¿cuáles son las causas o motivos que la ley considera válidos para autorizar un cambio de nombre? ¿Existen limitaciones?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'Principalmente, los motivos válidos son aquellos relacionados con discriminación o daño a la dignidad del solicitante. Algunos apellidos o nombres pueden ser objeto de burla o desprecio social. Por ejemplo, apellidos como "Titirico" o nombres poco comunes pueden generar discriminación. Sin embargo, hay apellidos como "Mamani" o "Condori" que, lejos de ser discriminatorios, han adquirido relevancia social en los últimos años. No cualquier incomodidad personal justifica el cambio; debe existir un perjuicio comprobable.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Qué documentos o pruebas suelen requerir los jueces para fundamentar una solicitud de cambio de nombre?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'Generalmente se valoran declaraciones testificales que demuestren que el solicitante ha sufrido discriminación o burlas debido a su nombre. También aplicamos la sana crítica para evaluar el contexto. Además, debe demostrarse que se ha agotado la vía administrativa previa en el SERECI.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Cuánto tiempo suele durar, en promedio, un proceso judicial para cambiar el nombre?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'Si el trámite es sencillo y no hay oposición, puede resolverse en unos tres meses. Sin embargo, si existen complicaciones, recursos o alta carga procesal, el proceso puede extenderse hasta un año o incluso más. La duración también depende del cumplimiento de los requisitos formales y del flujo de audiencias en los juzgados.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Es posible solicitar el cambio de nombre en el caso de menores de edad?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'Sí, es posible. La solicitud debe ser presentada por los padres o representantes legales. He conocido casos, como el de una menor que fue registrada con un nombre sin significado claro ("Zutila"), donde el cambio fue autorizado para proteger su interés superior.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Doctor, en relación con la comunidad LGBTQ+, ¿qué implicancias tiene el cambio de nombre en casos de personas transgénero o con identidad de género diferente a la asignada al nacer?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'Actualmente, este tipo de cambios está regulado principalmente por vía administrativa. Existen normativas específicas que permiten el cambio de nombre para adecuarlo a la identidad de género, siempre que se demuestre la situación mediante informes psicológicos y otros requisitos. En lo personal, aún no he tramitado un caso de esta naturaleza como juez, pero es un tema que se encuentra en desarrollo normativo y social.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Qué sucede si una persona cambia su nombre judicialmente y luego desea revertirlo o hacer un nuevo cambio? ¿Es posible?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'No es posible de manera automática. Solo procedería si se demuestra una situación concreta y fundada a través de un nuevo proceso judicial ordinario. El cambio de nombre debe tener estabilidad para no generar inseguridad jurídica.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿De qué manera afecta el cambio de nombre a los derechos sucesorios o patrimoniales?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'Puede afectar significativamente, especialmente en temas de herencia. El cambio de nombre implica una posible desconexión con el linaje familiar, salvo que el solicitante pueda demostrar posteriormente su identidad a través de otros medios probatorios en un proceso ordinario.',
      },
      {
        speaker: 'Entrevistador',
        text: '¿Podría compartirnos algún caso que haya conocido, respetando siempre la privacidad de las personas?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'He conocido casos de cambio de nombre aprobados por motivos de discriminación, como el de una menor llamada "Zutila" o situaciones relacionadas con apellidos considerados peyorativos. También he tratado casos de solicitud de inversión de apellidos que no fueron aprobados por falta de justificación suficiente.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Finalmente, doctor, ¿podría dejarnos una reflexión o sugerencia sobre el cambio de nombre a nivel jurídico?',
      },
      {
        speaker: 'Doctor Héctor Blanco Vargas',
        text: 'El cambio de nombre es una decisión seria que afecta la identidad de la persona. Aunque algunos pueden sentir desde jóvenes que su nombre no los representa, debemos valorar el significado de nuestros nombres y apellidos como parte de nuestra herencia familiar. Salvo situaciones de verdadera afectación, es importante mantener y honrar el nombre recibido de nuestros padres.',
      },
      {
        speaker: 'Entrevistador',
        text: 'Muchísimas gracias, doctor, por su tiempo y por compartir sus conocimientos con nosotros.',
      },
    ],
  },
]
export default function Entrevistas() {
  return (
    <Container className="mt-16 pt-12 sm:mt-2 dark:sm:mt-24">
      <h1 className="mx-auto mb-8 block text-center text-3xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
        Trabajo de Campo (Entrevistas)
      </h1>
      <div className="mx-auto flex flex-col gap-32">
        {interviews.map((interview, interviewIndex) => (
          <div key={interviewIndex}>
            <h1 className="pb-4 text-center text-xl font-medium text-zinc-700">
              {interview.title}
            </h1>
            <article key={interviewIndex} className="mt-4 flex flex-col gap-8">
              {interview.dialogue.map((dialogue, dialogueIndex) => (
                <Card
                  className={
                    dialogueIndex % 2 === 0
                      ? 'md:col-span-4'
                      : 'ml-auto text-right md:col-span-4'
                  }
                  key={dialogueIndex}
                >
                  <h2
                    className={clsx(
                      'mt-auto w-full self-end text-sm font-bold text-orange-400 dark:text-zinc-500',
                    )}
                  >
                    {dialogue.speaker}
                  </h2>
                  <p
                    className={clsx('max-w-2xl text-xs', {
                      'text-zinc-500 dark:text-zinc-400':
                        dialogueIndex % 2 === 0,
                    })}
                  >
                    {dialogue.text}
                  </p>
                </Card>
              ))}
            </article>
            <div className="mt-16 h-1 w-full rounded-xl bg-orange-200" />
          </div>
        ))}
      </div>
    </Container>
  )
}
