import { NavLink } from 'react-router';

const ErrorPage = () => {
  return (
    <>
      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">No se encontro la pagina.</p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              Pero no te preocupes, encontraras las webs habilitadas en home.
            </p>
            <NavLink to="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
              Vuelve a home
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
