function compare(obj1,obj2){
    var keys = Object.keys(obj2);
    if(Object.keys(obj1).length!=keys.length){
        return false;
    }
    for(var key of keys){
        if(!obj1.hasOwnProperty(key)){
            return false;
        }
        if(obj1[key]!=obj2[key]){
            return false;
        }
    }
    return true;
}

const obj1 = {car:"volvo",type:"SUV"};
const obj2 = {car:"volvo",type:"SUV"};
if(compare(obj1,obj2)){
    console.log('They are same');
}
