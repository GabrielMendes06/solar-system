interface NightBackgroundProps {
  children: React.ReactNode
}

const NightBackground: React.FC<NightBackgroundProps> = ( {children} ) => {
  return (
      <div className="stars">
        <div className="twinkling">
          {children}
        </div>
      </div>
  );
};

export default NightBackground;
