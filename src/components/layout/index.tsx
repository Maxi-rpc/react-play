import Header from './header';

const LayoutMain = () => {
  return (
    <>
      <Header />
      <div>
        <h1>hola mundo</h1>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
          space.
        </p>
        <iframe width="100%" height="350" src="https://streamdz4.lat/player/embed.php?channel=disney2"></iframe>
      </div>
    </>
  );
};

export default LayoutMain;
