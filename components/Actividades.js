// Importo la imagen para poner en el src de Picture de 1203x503 1204x504 1205x505
import genteaccion from "./assets/welcome.jpg";

const Actividades = () => {
  return (
    <section className="text-gray-700 body-font" name="actividades">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src={require("./assets/welcome.jpg")}
                alt="content"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Aprendiendo a vivir con Diabetes
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a className="text-royal inline-flex items-center mt-3" href>
              Leer Más
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src={genteaccion}
                alt="content"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Operacion del labio y paladar hendido
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a className="text-royal inline-flex items-center mt-3" href>
              Leer Más
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src={genteaccion}
                alt="content"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              End Polio
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a className="text-royal inline-flex items-center mt-3" href>
              Leer Más
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actividades;
