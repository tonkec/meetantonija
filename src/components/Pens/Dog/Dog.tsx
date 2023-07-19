import { DogStyles } from './Dog.styles';

const Dog = () => (
  <DogStyles>
    <div className="dog">
      <div className="dog__head">
        <div>
          <div className="eye"></div>
          <div className="dimple"></div>
          <div className="dimple"></div>
          <div className="dimple"></div>
          <div className="dimple"></div>
          <div className="nose"></div>
        </div>
        <div>
          <div className="eye"></div>
          <div className="dimple"></div>
          <div className="dimple"></div>
          <div className="dimple"></div>
          <div className="dimple"></div>
          <div className="nose"></div>
        </div>
        <div className="dog__collar">
          <div></div>
          <div></div>
        </div>
        <div className="dog__tongue">
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  </DogStyles>
);

export default Dog;
