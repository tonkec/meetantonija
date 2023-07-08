import { useWindowSize } from '../../hooks/useWindowSize';

interface SquaresProps {
  numberOfSquares: number;
  titles?: string[];
  containerSize: number;
}

const Sqaures = ({ numberOfSquares, titles, containerSize }: SquaresProps) => {
  const size = useWindowSize();
  const arr = Array.from({ length: numberOfSquares });
  return (
    <section className="flex">
      {arr.map((item, index) => {
        return (
          <div
            className="box relative flex-1"
            style={{
              borderWidth: size.width / containerSize / numberOfSquares / 2,
            }}
          >
            <p className="absolute left-1/2 -translate-x-1/2 text-white">
              {titles && titles[index]}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Sqaures;
