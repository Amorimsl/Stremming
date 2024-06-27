interface PropsRelease {
  releaseDate: string;
}

const Info: React.FC<PropsRelease> = ({ releaseDate }) => {
  return <div className="text-white font-normal text-base">{releaseDate}</div>;
};

export default Info;
