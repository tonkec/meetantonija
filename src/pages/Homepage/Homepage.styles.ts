import styled from 'styled-components';
import { device } from 'styles/devices';
export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 0;
  top: -10%;
  max-width: 80%;
  background-color: #0047b4;
  padding: 30px 20px;
  z-index: 999;
  @media ${device.laptop} {
    max-width: 50%;
    padding: 50px 80px;
  }
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
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height}px;
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  margin-bottom: 30vh;
  @media ${device.tablet} {
    mbargin-bottom: 20vh;
  }
  @media ${device.laptop} {
    margin-bottom: 0vh;
  }
`;

export const BackgroundImageDiv = styled.div`
  position: absolute;
  top: 100%;
  height: 100%;
  width: 100%;
  background-color: #43cea2;
  padding: 50px 40px;

  @media ${device.laptop} {
    top: 0;
    right: -100%;
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  line-height: 1;
  transition: all 0.5s ease-in-out;
  margin-bottom: 5vh;

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
    width: 100%;
  }

  &:hover::after {
    height: 100%;
    width: 100%;
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
  background-color: #e6f0ff;
  padding: 50px 50px;
  cursor: none;
  width: 95%;

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
    display: none;
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
    display: block;
    transform: translateY(0);
  }
`;

export const TestimonialCard = styled.div`
  padding: 40px;
  background-image: radial-gradient(black 1.5px, transparent 1.5px);
  background-size: calc(10 * 1.5px) calc(10 * 1.5px);
  flex-basis: calc(50% - 100px);
  margin-bottom: 30px;
`;

export const PenContainer = styled.a<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  padding: 50px 20px;
  height: 450px;
  margin-top: 50px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

export const SeeMore = styled.a`
  background-color: #292929;
  height: 450px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #6c7698;
  }
`;

export const BlogPostCard = styled.div`
  background-color: #43cea2;
  padding: 50px 40px;
  transition: background-color 0.5s ease-in-out;
  height: 350px;

  & > * {
    transition: color 0.5s ease-in-out;
  }

  &:hover {
    background-color: #0047b4;

    & > * {
      color: #f5f5f5;
    }
  }
`;
