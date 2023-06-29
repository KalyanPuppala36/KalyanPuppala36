// const str1 = "Hello world vyngian vepas you shink";
// const str2 = str1.substring(3, 5) + str1.substring(20,22) + " " + str1.substring(26,29) + " " + str1.substring(12,14)+str1.substring(30,32);
// console.log(str2);

var userinput = prompt('Enter a number');
var num = parseInt(userinput);
if(num%2==0){
    alert('Even');
}else{
    alert('Odd');
}
function reversestr(str){
    const chars=str.split('');
    const revchar = chars.reverse();
    const revstr = revchar.join('');
    return revstr;
}
const str = prompt('Enter a string');
const revstr = reversestr(str);
console.log(revstr);