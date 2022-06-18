const Pet = require('../src/pet')

describe('constructor', () => {
    it('sets the name property', () => {
        const Fido = new Pet('Fido');
    
        expect(Fido.name).toEqual('Fido');
      });

      it('has a initial age of 0', () => {
        const Fido = new Pet('Fido');
    
        expect(Fido.age).toEqual(0);
      });
});

describe('growUp', () => {
    it('alter age, hunger and fitness', () => {
        const Fido = new Pet('Fido');

        Fido.growUp();

        expect(Fido.age).toEqual(1);
        expect(Fido.hunger).toEqual(5);
        expect(Fido.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increase fitness by 4', () => {
        const Fido = new Pet('Fido');

        Fido.fitness = 4;
        Fido.walk();

        expect(Fido.fitness).toEqual(8);
    });

    it('fitness max is 10', () => {
        const Fido = new Pet('Fido');

        Fido.fitness = 8;
        Fido.walk();

        expect(Fido.fitness).toEqual(10);

    });
});

describe('feed', () => {
    it('hunger decrese 3', () => {
        const Fido = new Pet('Fido');

        Fido.hunger = 9;
        Fido.feed();

        expect(Fido.hunger).toEqual(6);
    });

    it('hunger minimum is 0', () => {
        const Fido = new Pet('Fido');

        Fido.hunger = 2;
        Fido.feed();

        expect(Fido.hunger).toEqual(0);
    });
});

describe('checkup', () => {
    it('Fidos hungry and needs a walk', () => {
        const Fido = new Pet('Fido');

        Fido.hunger = 8;
        Fido.fitness = 2;

        expect(Fido.checkup()).toEqual("I am hungry AND I need a walk");
    })

    it('Fidos needs a walk', () => {
        const Fido = new Pet('Fido');

        Fido.fitness = 2;

        expect(Fido.checkup()).toEqual("I need a walk");
    })

    it('Fidos hungry', () => {
        const Fido = new Pet('Fido');

        Fido.hunger = 8;

        expect(Fido.checkup()).toEqual("I am hungry");
    })

    it('Fidos good', () => {
        const Fido = new Pet('Fido');

        Fido.hunger = 2;
        Fido.fitness = 7;

        expect(Fido.checkup()).toEqual("I feel great");
    })
});