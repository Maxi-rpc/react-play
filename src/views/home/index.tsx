import { Card, CardContent } from '../../components';
import { Data } from '../../services';

const HomePage = () => {
  Data.map((item) => {
    console.log(item);
  });

  return (
    <>
      <div className="grid grid-cols-6 xl:grid-cols-12 grid-rows-5 gap-4 px-4 py-4">
        {Data.map((item, index) => (
          <div key={index} className="col-span-2 xl:col-span-2 row-span-1">
            <Card>
              <CardContent>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform text-center"
                >
                  {item.name}
                </a>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
