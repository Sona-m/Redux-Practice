import Chance from 'chance';     // getting the api data from chance

const chance = Chance() ;

export const fakeUserData = () => {
    console.log(chance.name({middle : true})); // setting middle name as true for full name
    return chance.name({middle : true});
}