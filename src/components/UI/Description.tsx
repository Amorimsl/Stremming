interface PropsOverviews {
  overviews: string;
}

const Description: React.FC<PropsOverviews> = ({ overviews }) => {
  return (
    <div className="text-white font-normal text-xl md:max-w-719">
      {overviews}
    </div>
  );
};

export default Description;
