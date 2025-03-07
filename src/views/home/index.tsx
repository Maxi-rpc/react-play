import { Link } from 'react-router';

import { Card, CardContent, CardFooter, CardTitle, Button } from '../../components';
import { Data } from '../../services';

const HomePage = () => {
  Data.map((item) => {
    console.log(item);
  });

  return (
    <>
      <h1>Home Page</h1>

      <div className="grid grid-cols-6 grid-rows-5 gap-4 px-4 py-4">
        {Data.map((item, index) => (
          <div key={index} className="col-span-2 row-span-2">
            <Card>
              <CardContent>
                <CardTitle title={item.name} />
              </CardContent>
              <CardFooter>
                <Link
                  to="/play"
                  className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform text-center"
                >
                  Go Play
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
