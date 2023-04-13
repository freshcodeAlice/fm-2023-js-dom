const userObj = [{
    firstName: 'John',
    lastName: 'Doe',
    age: 15,
    address: {
        city: 'London',
        street: 'Square',
        house: 15
    },
    isSubscribe: true,
    favouriteSong: ['1', '2', '3', '4'],
    friend: null,
    something: '',
    gymAbonement: undefined,
    sayHi: function() {
        console.log('hi');
    }
}]



const str = JSON.stringify(userObj); // Серіалізація
 
const recostructedObj = JSON.parse(str); // Десеріалізація