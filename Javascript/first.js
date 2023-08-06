console.log("connected with external js file");

/* comment */


/* conditional statement */
var a = 1;
var b = 2;

if(a+b>4)
{
	console.log(a+b);
}
else if(a+b<1)
{
	console.log(a+b);
}
else
	console.log("hi");


/* loops */

for(var num=0;num<11;num=num+2)
	console.log(num);

var a = [1,2,3,4];
a.forEach(item => console.log(item));

for(var item in a)
	console.log(item);

for(var item of a)
	console.log(item);



/* operators */

var num = 0;
while(num<5)
{
	console.log(num);
	num++;
}
do{
	console.log(num);
	num++;
}while(num<5)
	
var itr = 10;
console.log(itr++);
console.log(itr);

console.log(++itr);
console.log(itr);

var num1=8,n=2;

console.log(num1<<n);

console.log(num1>>n);



/* hoisting */

console.log(x);
/* let & const will stop hoisting */
var x=10;
console.log(x);


/* primitive datatypes */

var d="dibyajeet";

console.log(d + " is 24 years old");
console.log(`${d} is 24 years old`);


/* objects */

var obj = {
	name:"dibyajeet",
	roll_no:40,
	sing(){
		console.log(`${this.name} sings`);
		// body...
	}
}
console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);



/* arrays */

var y = [1,2,,4,5]

y.push(2);



/* functions */
sg();

function sg(){
	console.log("DSVSV");
	
	var fat = function()
	{
		console.log("Fat");
		//body
	}
	
	fat();
}