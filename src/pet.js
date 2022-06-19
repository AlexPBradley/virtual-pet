const maxFitness = 10;
const minFitness = 0;
const maxHunger = 10;
const minHunger = 0;
const maxAge = 30;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
    this.haveBaby = function(child){
        const baby = new Pet(child);
        this.children.push(baby);
    };
};

Pet.prototype = {
    get isAlive() {
      return this.age < maxAge && this.hunger < maxHunger && this.fitness > minFitness;
    }
  };

Pet.prototype.growUp = function(){
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };

    this.age +=1;
    this.hunger +=5;
    this.fitness -=3;
};

Pet.prototype.walk = function(){
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };

    if((this.fitness + 4) <= maxFitness){
        this.fitness += 4;
      }else{
        this.fitness = maxFitness;
      };
};

Pet.prototype.feed = function(){
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };

    if((this.hunger - 3) >= minHunger){
        this.hunger -= 3;
      }else{
        this.hunger = minHunger;
      };
};

Pet.prototype.checkup = function(){
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };

    if(this.fitness <= 3 && this.hunger >= 5){
        return "I am hungry AND I need a walk";
    }else if(this.fitness <= 3){
        return "I need a walk";
    }else if(this.hunger >= 5){
        return "I am hungry";
    }else{
        return "I feel great";
    };
};




module.exports = Pet;