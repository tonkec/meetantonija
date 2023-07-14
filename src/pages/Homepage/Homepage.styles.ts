import styled from 'styled-components';
import { device } from 'styles/devices';
export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 0;
  top: -80px;
  max-width: 50%;
  background-color: #0047b4;
  padding: 50px 80px;
  z-index: 9;
`;

export const BackgroundImage = styled.div<{
  height: number;
  width: string;
  image: string;
  backgroundSize: string;
  backgroundPosition: string;
}>`
  height: 300px;
  width: 300px;
  background-image: url(${(props) => props.image});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;

  @media ${device.laptop} {
    width: ${(props) => props.width};
    height: ${(props) => props.height}px;
    background-size: ${(props) => props.backgroundSize};
    background-position: ${(props) => props.backgroundPosition};
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  line-height: 1;
  flex: 1;
  transition: all 0.5s ease-in-out;
  min-width: 40%;

  &::after {
    content: '';
    display: inline-block;
    background-image: radial-gradient(black 1.5px, transparent 1.5px);
    background-size: calc(10 * 1.5px) calc(10 * 1.5px);
    position: absolute;
    width: 50px;
    height: 40px;
    margin: 0 auto;
    z-index: 1;
    top: 0px;
    transition: all 0.5s ease-in-out;
  }

  div {
    background-color: #e6f0ff;
    height: 200px;
    padding: 50px 70px;
    width: 90%;
  }

  &:hover::after {
    height: 100%;
    width: 90%;
  }

  h3 {
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    h3 {
      opacity: 0;
    }
  }

  .definition {
    opacity: 0;
    color: black;
    font-size: 1rem;
    position: absolute;
    bottom: 30px;
    transform: translateY(100%);
    background-color: #43cea2;
    padding: 20px;
    transition: all 0.5s ease-in-out;
    z-index: 2;

    a {
      text-decoration: none;
      color: #292929;
    }
  }

  &:hover .definition {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CarouselItem = styled.div`
  background-color: #43cea2;
  padding: 50px 50px;
  width: 90%;
  height: 350px;
  cursor: none;

  p:first-child {
    margin-bottom: 20px;
    font-weight: bold;
  }
`;

export const ButtonCopy = styled.button<{ content: string }>`
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(to right, #000, #292929) 1;

  color: black;
  margin-top: 30px;
  background-color: transparent;
  span {
    position: relative;
    padding: 15px 80px;
    font-size: 1rem;
    display: block;
    overflow: hidden;
  }

  span::after {
    content: '${(props) => props.content}';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    color: #f5f5f5;
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
    padding-top: 15px;
  }

  span:hover::after {
    transform: translateY(0);
  }
`;

export const TestimonialCard = styled.div`
  padding: 40px;
  background-image: radial-gradient(black 1.5px, transparent 1.5px);
  background-size: calc(10 * 1.5px) calc(10 * 1.5px);
  margin-right: 20px;
  flex-basis: calc(50% - 100px);
  margin-bottom: 30px;
`;
