interface VideoPlayProps {
  url?: string;
}

const VideoPlay = ({ url }: VideoPlayProps) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <iframe width="100%" height="350" src={url}></iframe>
      </div>
    </>
  );
};

export default VideoPlay;
