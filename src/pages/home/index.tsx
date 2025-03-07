import { LayoutMain, Videoplay } from '../../components';

const HomePage = () => {
  const url = 'https://streamdz4.lat/player/embed.php?channel=disney2';

  return (
    <>
      <LayoutMain>
        <h1>Home Page</h1>
        <div className="flex">
          <div className="h-60 w-60 px-3 py-3">
            <div className="border-3 rounded-md px-3 py-3">
              <div className="w-full border-b-2">
                <h1>card title</h1>
              </div>
              <div>Body</div>
            </div>
          </div>
        </div>
      </LayoutMain>
    </>
  );
};

export default HomePage;
