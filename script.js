'use strict';

// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
function detonatorTimer(delay) {
	let count = delay;
    const detonator = setInterval(() => {
        if (count > 0){
            console.log(count);
            count--;
        }else {
            clearInterval(detonator);
            console.log("Boom");
        }
    }, 1000 );
}

detonatorTimer(3);


//2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  

/*function detonatorTimer1 (delay){
    function detonator(seconds){
        if (seconds > 0){
            console.log(seconds);
            setTimeout(() => detonator (seconds -1), 1000);
        }else{
            console.log("Boomm");
        }
    }
    detonator(delay);
}
detonatorTimer1(3);
*/

function detonatorTimer2(delay){
    let counter = delay;
    function detonate (){
        if (counter > 0 ){
            console.log(counter);
            counter --;
            setTimeout(detonate, 1000);
        }else{
            console.log("Boom");
        }
    }
    detonate(delay);
}
detonatorTimer2(3);

//3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять.

let me = {
	name: 'Juliana',
    origin: 'Ukraine, Chernivtsi ',
	residency: 'Berlin',
	gender: 'female',
	age: 27,
	hobby: 'watching NETFLIX',
	defaultMood: 'sleepy',
	currentMood: 'focused',
	introduce() {
		console.log(`My name is ${this.name} and I live in ${this.residency}. But originally I'm from ${this.origin}`);
	},
	prognose() {
		console.log(`In 31 days I'm gonna be ${this.age+1}`);
	},
	describeMyMood(){
		console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
	},
    hobbies(){
        console.log(`My current hobby is ${this.hobby}.`);
    }
}

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);
let securedSelfHobbies = me.hobbies.bind(me);

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfPrognose, 2000);   
setTimeout(securedSelfDescribeMyMood, 3000);  
setTimeout(securedSelfHobbies, 4000); 

//Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
function someFunction(arg) {
    return `Result: ${arg}`;
  }
  
  function slower(func, seconds) {
    return function (...args) {
      console.log(`Chill out, you will get your result in ${seconds} seconds`);
      setTimeout(() => {
        const result = func(...args);
        console.log(result);
      }, seconds * 1000);
    };
  }
  
  let slowedSomeFunction = slower(someFunction, 5);
  
  slowedSomeFunction("Hello, World!");
  