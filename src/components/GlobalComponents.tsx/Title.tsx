interface PropTitle {
  content: string | React.ReactNode;
  className?: string;
}

const Title: React.FC<PropTitle> = ({ content, className }) => {
  return <h1 className={className}>{content}</h1>;
};

export default Title;
