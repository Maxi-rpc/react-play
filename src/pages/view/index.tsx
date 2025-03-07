import { LayoutMain, Videoplay } from '../../components';

interface ViewPageProps {
  name?: string;
  src?: string;
}

const ViewPage = ({ name, src }: ViewPageProps) => {
  return (
    <>
      <LayoutMain>
        <h1>{name ? name : 'Single Page Video name title'}</h1>
        <Videoplay url={src} />
      </LayoutMain>
    </>
  );
};

export default ViewPage;
