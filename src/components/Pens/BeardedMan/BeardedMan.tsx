import { BeardedManContainer } from './BeardedMan.styles';
const BeardedMan = () => {
  return (
    <BeardedManContainer>
      <div className="man">
        <div className="face__hair">
          <div className="face__hair_component"></div>
          <div className="face__hair_component"></div>
          <div className="face__hair_component"></div>
        </div>
        <div className="face__hair_shadow"></div>
        <div className="face__ears">
          <div className="face__ear"></div>
          <div className="face__ear"></div>
        </div>
        <div className="face">
          <div className="face__eyes">
            <div className="face__eye"></div>
            <div className="face__eye"></div>
          </div>
          <div className="face__beard">
            <div className="face__mouth"></div>
          </div>
        </div>
        <div className="neck__top"></div>
        <div className="neck__bottom"></div>
      </div>
    </BeardedManContainer>
  );
};

export default BeardedMan;
