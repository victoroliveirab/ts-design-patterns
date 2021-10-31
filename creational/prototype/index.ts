import { Prototype } from './prototype';
import utils from '../../utils';

type animalBody = {
  color: string;
  legs: number;
  tail: boolean;
};

type animalProps = {
  body: animalBody;
  someProp: number;
};

class Animal extends Prototype {
  private props: animalProps;
  constructor(props: animalProps) {
    super();
    this.props = props;
  }

  // TODO: figure out why does not work with getters

  getBody(): animalBody {
    return this.props.body;
  }

  getColor(): string {
    return this.props.body.color;
  }
}

class Dog extends Animal {
  private dogNumber: number;

  constructor(props: animalProps) {
    super(props);
    this.dogNumber = utils.generateId();
  }

  get id(): number {
    return this.dogNumber;
  }
}

const dog1 = new Dog({
  body: {
    color: 'black',
    legs: 4,
    tail: true,
  },
  someProp: 42,
});

const dog2 = dog1.clone();

utils.printWithTime(`Are dog1 and dog2 the same dog? ${dog1 === dog2}`);
utils.printWithTime(
  `Do dog1 and dog2 have the same id? ${dog1.id === dog2.id}`
);
utils.printWithTime(
  `Do dog1 and dog2 have the same body object? ${
    dog1.getBody() === dog2.getBody()
  }`
);
utils.printWithTime(
  `Do dog1 and dog2 have the same color? ${dog1.getColor() === dog2.getColor()}`
);
