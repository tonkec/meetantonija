import { useWindowSize } from '../../hooks/useWindowSize';
import { FlexContainer } from '../../styles/containers';
import { Square } from './Square.styles';
import Text from '../Text/Text';
interface SquaresInterface {
  numberOfSquares: number;
  titles?: string[];
  containerSize: number;
  wrap: boolean;
}

const Sqaures = ({
  numberOfSquares,
  titles,
  containerSize,
  wrap,
}: SquaresInterface) => {
  const size = useWindowSize();
  const arr = Array.from({ length: numberOfSquares });
  return (
    <FlexContainer align="flex-start" wrap={wrap}>
      {arr.map((item, index) => {
        return (
          <Square
            style={{
              borderWidth: size.width / containerSize / numberOfSquares / 2,
              position: 'relative',
            }}
          >
            {titles && titles.length > 0 && (
              <Text
                type="p"
                color="#ffffff"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  transform: 'translateY(-50%)',
                  textAlign: 'center',
                }}
              >
                {titles[index]}
              </Text>
            )}
          </Square>
        );
      })}
    </FlexContainer>
  );
};

export default Sqaures;
