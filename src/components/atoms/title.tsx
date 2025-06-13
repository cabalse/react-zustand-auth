type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <h1 className="text-3xl font-bold uppercase">{title}</h1>;
};

export default Title;
