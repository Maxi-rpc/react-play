import { useState } from 'react';
import { Card, CardContent } from '../../components';
import { Data } from '../../services';

const HomePage = () => {
  const [filter, setFilter] = useState('');
  const [searchParam] = useState(['name']);

  const handelfilter = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return item[newItem].toString().toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
    });
  };

  return (
    <>
      <div className="grid grid-cols-6 xl:grid-cols-12 grid-rows-1 gap-4 px-4 py-4">
        <div className="col-span-6 xl:col-span-12 row-span-1 text-center">
          <input
            placeholder="Filtrar.."
            className="px-3 py-2 text-lg font-bold rounded-lg border focus:outline focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        {handelfilter(Data).map((item, index) => (
          <div key={index} className="col-span-2 xl:col-span-2 row-span-1">
            <Card>
              <CardContent>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base text-center uppercase  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
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
