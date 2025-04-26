
// console.log(2>1);
// console.log(2==1);
// console.log(2<1);
// console.log(2 >=2);
// console.log(2<=2);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);  *************dont use this type**********


console.log(null > 0);
console.log(null ==0);
console.log(null >=0); 



// ****************
//  == and >, < , >=,<= comparison operator works differently whi
// in this the >=0 converts null to zero which leads to >= => true.
// *************** 


console.log(undefined ==0); // conversion occurs
console.log(undefined >0);
console.log(undefined<0);

// === check val and also datatype no conversion (Mostly avoid)
console.log("2" === 1);



