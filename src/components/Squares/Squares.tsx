import { useWindowSize } from 'hooks/useWindowSize';
import { FlexContainer } from 'styles/containers';
import { Overlay, Square } from './Square.styles';
import Text from 'components/Text';
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

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
  const navigate = useNavigate();
  const size = useWindowSize();
  const arr = Array.from({ length: numberOfSquares });

  return (
    <FlexContainer align="flex-start" wrap={wrap}>
      {arr.map((item, index) => {
        return titles && titles?.length > 0 ? (
          <Square hasTitles={titles.length > 0}>
            <Overlay
              onClick={() => navigate(`project/${titles[index].toLowerCase()}`)}
              className="is-clickable"
            ></Overlay>
            <GoArrowRight
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                color: 'black',
              }}
              className="is-clickable"
            />

            <Text type="p" color="#292929">
              {titles[index]}{' '}
            </Text>
          </Square>
        ) : (
          <Square
            style={{
              borderWidth: size.width / containerSize / numberOfSquares / 2,
            }}
          />
        );
      })}
    </FlexContainer>
  );
};

export default Sqaures;
