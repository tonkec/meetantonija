import { H1, H2, H3, H4, P } from '../../styles/typography';

interface TextInterface {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  color: string;
  children: React.ReactNode;
  style?: any;
}

const Text = ({ type, color, children, style }: TextInterface) => {
  switch (type) {
    case 'h1':
      return (
        <H1 $textColor={color} style={style}>
          {children}
        </H1>
      );
    case 'h2':
      return (
        <H2 $textColor={color} style={style}>
          {children}
        </H2>
      );
    case 'h3':
      return (
        <H3 $textColor={color} style={style}>
          {children}
        </H3>
      );
    case 'h4':
      return (
        <H4 $textColor={color} style={style}>
          {children}
        </H4>
      );
    case 'p':
      return (
        <P $textColor={color} style={style}>
          {children}
        </P>
      );
    default:
      break;
  }

  return <p>Wrong text type</p>;
};

export default Text;
