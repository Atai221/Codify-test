// console.log('main');
//  fix/conflict
// console.log('fix/conflict');
// console.log('console from main');

function isBefore(target, base) {
   const targetDate=new Date(target)
   const baseDate=new Date(base)
   return  target>base
        
    
}


console.log(isBefore('01.01.2023', '01.02.2022')) // false
console.log(isBefore('01.02.2022', '01.01.2023'))// true
console.log(isBefore('01.02.2022', '01.02.2022')) // false