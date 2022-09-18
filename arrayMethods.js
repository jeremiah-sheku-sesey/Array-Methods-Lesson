const numbers = [1, 2, 3, 4, 5];

//Using Array Methods

//fillMethod(); this method change, modifies and return the new array content(s).
// you can also specifies your starting and endpoint index.


// const nums = numbers.fill(100)
// console.log(numbers);
// console.log(nums);

// const nums = numbers.fill(100, 1, 3)
// console.log(numbers);
// console.log(nums);

 
//the array sort() sort the items in an array element either in assending(1) or desending(-1) manner.

// const cities =['USA', 'FREETOWN', 'LAGOS', 'LONDON', 'KINGSTON']

// console.log(cities)
// cities.sort();
// console.log(cities)


// to sort() a number we use a callback function that we can pass as an arguments in the sort(sortNumFun)method
// const sortNums =[1, 78, 105, 3, 9, 35];
// let sortNumFun =(x, y)=>{
//     return y-x;
// }
// console.log(sortNums.sort(sortNumFun));

//the array join() method it create anew string from an array by concat it into a single value
//by default there is a comma as a separator but u can specifies your own separator

// const cities =['USA', 'FREETOWN', 'LAGOS', 'LONDON', 'KINGSTON']

// let newCities = cities.join(' >');

// console.log(newCities);

// the array includes() method check if a value is in an array

// const movies = ['K-29', 'Sara Azonto', 'Two Fools']
// console.log(movies.includes('K-29'));

// the array concat methods allows you to match two or multiply arrays together


// const cities =['USA', 'FREETOWN', 'LAGOS', 'LONDON', 'KINGSTON'];
// const number = [1, 2, 3, 4, 5];
// const sortNums =[1, 78, 105, 3, 9, 35];

// const concatArray= cities.concat(sortNums, number);
// console.log(concatArray);

//the array push() methods is used to add add two or more value at the end of the array
// const cities =['USA', 'FREETOWN', 'LAGOS', 'LONDON', 'KINGSTON'];
// cities.push('India', 'Acra')
// console.log(cities);

// the array some() method execute a given function on the element of the array 
//and return a truthy value if one elenent of the array resolve to true and false if they all resolve to false

// const sortNums =[1, 78, 105, 3, 9, 35];
// bigDigit = sortNums.some(bigDigit)

// function bigDigit(bigDigit){
//     return bigDigit > 35;
// }

// console.log(bigDigit);

//the array find method search and retuen value from the callback function from the element of an array;
// const cities =['USA', 'FREETOWN', 'LAGOS', 'LONDON', 'KINGSTON'];
// const myCity= cities.find(findCity);

// function findCity(findMyCity){
//         return findMyCity ==='FREETOWN';
//     }

//     console.log(myCity);


// the reverse() array method as the name implies, it is self explanatory.
// const cities =['USA', 'FREETOWN', 'LAGOS', 'LONDON', 'KINGSTON'];
// const myCitiesReverse=cities.reverse();
// console.log(myCitiesReverse);

//indexOf and lastindexOf
// indexOf read from front and lastindexOf read from back.
// const cities =['USA', 'FREETOWN', 'LAGOS', 'LONDON', 'KINGSTON'];
// const myIndexOf=cities.indexOf('USA')
// console.log(myIndexOf);

// const state =['USA', 'FREETOWN', 'LAGOS', 'USA', 'LONDON', 'KINGSTON'];
// const myLastIndexOf=state.lastIndexOf('USA')
// console.log(myLastIndexOf);

// the array pop() method remove the last element from an array.
// const state =['USA', 'FREETOWN', 'LAGOS', 'USA', 'LONDON', 'KINGSTON'];
// state.pop();

// console.log(state);

//the array unshift() method is used to add two or more value at the begining of the array, it is an alternative of push

// const state =['USA', 'FREETOWN', 'LAGOS', 'USA', 'LONDON', 'KINGSTON'];
// state.unshift('Makeni', 'kabala');

// console.log(state);


// the array shift() method remove the first element from an array, it is an alternative of pop().
// const state =['USA', 'FREETOWN', 'LAGOS', 'USA', 'LONDON', 'KINGSTON'];
// state.shift();
// console.log(state);

//the array slice() method

// const state =['USA', 'FREETOWN', 'LAGOS', 'USA', 'LONDON', 'KINGSTON'];
// const mySlice=state.slice();

// console.log(mySlice);

//the array splice() method it take multiply parameters, but the first two are the starting index where you want the delete to start 
//and the amount of items you want to delete
//and we can optionally add element to the array at the same index
//if we do not want to delete element from the array using the splice method if we only waant to add element
//we just have to pass the giving index where we want the array to start insertion and set the number of items which is to be deleted to zero(0)
// const state =['USA', 'FREETOWN', 'LAGOS', 'USA', 'LONDON', 'KINGSTON'];
// const mySplice1=state.splice(1, 2);
// const mySplice2=state.splice(0, 3, 'Bo', 'KENEMA');
// const mySplice2=state.splice(3, 0, 'Bo', 'KENEMA');
// console.log(mySplice2);
// console.log(state);

//the array flat() is used to convert or concat multidimentional array into a single array container

// const myFlatArray=[1,[2, [3, ]]]

// the argument that is pass to the flat() is the depth of the array which is to be concat as one. or we can easily usi  the Infinity argument
// let res=myFlatArray.flat(Infinity);
// console.log(res);

// the every() in an array class is use to check is all the element which are present in and array has a unique attribute.

// const sortNums =[1, 78, 105, 3, 9, 35];
// bigDigit = sortNums.every(bigDigit)

// function bigDigit(bigDigit){
//     return bigDigit > 35;
// }

// console.log(bigDigit);


//filter()in array

// const sortNums =[1, 78, 105, 3, 9, 35];
// bigDigit = sortNums.filter(bigDigit)

// function bigDigit(bigDigit){
//     return bigDigit > 35;
// }

// console.log(bigDigit);


// the array reduce() reduce everything into a single value



// const sortNums =[1, 78, 105, 3, 9, 35];
// const myReduceArrayMethodValue = sortNums.reduce(sum)

// function sum(accumulator, value){
//     return accumulator + value;
// }

// console.log(myReduceArrayMethodValue);


//mapping ==>map() method in the array class. it takes a callback function.
const mapNums =[1, 78, 105, 3, 9, 35];

const newMapValues = mapNums.map((value)=>{
    return "<h1>" + value *5  + "</h1>";
});

console.log(newMapValues);