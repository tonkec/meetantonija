interface SectionProps {
  text?: string;
  backgroundColor: string;
  textAlign: 'left' | 'right';
}

const Section = ({ text, backgroundColor, textAlign }: SectionProps) => {
  return (
    <section
      className="p-20 h-full flex"
      style={{
        backgroundColor: backgroundColor,
        justifyContent: textAlign === 'left' ? 'flex-start' : 'flex-end',
      }}
    >
      {text && <h4 className="m-0 max-w-lg">{text}</h4>}
    </section>
  );
};

export default Section;
