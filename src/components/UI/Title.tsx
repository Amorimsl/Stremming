interface PropsMovie {
  movies: string;
}

const Title: React.FC<PropsMovie> = ({ movies }) => {
  return <h1 className="text-white text-4xl font-bold">{movies}</h1>;
};

export default Title;
