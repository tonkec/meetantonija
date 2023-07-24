import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => (
  <AnimatedCursor
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    innerStyle={{
      backgroundColor: '#A98AFE',
      zIndex: 99999,
    }}
    outerStyle={{
      border: '5px solid #A98AFE',
      zIndex: 99999,
    }}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.is-clickable',
    ]}
  />
);

export default Cursor;
