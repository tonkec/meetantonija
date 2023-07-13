import { H1, H2, H3, H4, H5, P } from 'styles/typography';

interface TextInterface {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  color: string;
  children: React.ReactNode;
  style?: any;
  className?: string;
}

const Text = ({ type, color, children, style, className }: TextInterface) => {
  switch (type) {
    case 'h1':
      return (
        <H1 $textColor={color} style={style} className={className}>
          {children}
        </H1>
      );
    case 'h2':
      return (
        <H2 $textColor={color} style={style} className={className}>
          {children}
        </H2>
      );
    case 'h3':
      return (
        <H3 $textColor={color} style={style} className={className}>
          {children}
        </H3>
      );
    case 'h4':
      return (
        <H4 $textColor={color} style={style} className={className}>
          {children}
        </H4>
      );
    case 'h5':
      return (
        <H5 $textColor={color} style={style} className={className}>
          {children}
        </H5>
      );
    case 'p':
      return (
        <P $textColor={color} style={style} className={className}>
          {children}
        </P>
      );
    default:
      break;
  }

  return <p>Wrong text type</p>;
};

export default Text;
