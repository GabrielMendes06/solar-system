interface IntercessionProps {
  children: React.ReactNode
}

const Intercession: React.FC<IntercessionProps> = ({ children }) => {
  return (
    <div className="container new-font text-small m-auto py-4">
        {children}
    </div>
  );
};

export default Intercession
