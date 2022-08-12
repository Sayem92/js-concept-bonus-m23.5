const nayok={
    name:'sakib khan',
    id: 112,
    addres:'movie cinema',
    isSingle: true,
    friends: ['amir', 'sami', 'apu', 'kamir'],
    movies:[{name:'no 1', year:2015},{name:'king khan', year: 2018}],
    act: function(){
        console.log('acting like saki khan')
    } ,
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacture:{
            name:'tesla',
            ceo: 'elon mask',
            country:'USA'
        }
    }
}
// console.log(student.car);
nayok.act();
console.log(nayok.act);