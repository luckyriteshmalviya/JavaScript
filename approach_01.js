/***
 * First we change the string into an array
 * Then we run a loop.
 * In which we compare the character to the character of next index.
 * If it is identicalthen then it will create a separate string and placed in it.
 * Otherwise it will create another string.
 * Then we will count the character of all strings.
 * Then we will place the number of count + value of first index of that string.
 */
var data = "AAAA"                    //Ans:  4A3B2C1D2B3A
// var data=[...data_01];
// var data = ["A","A","A","A","B","B","B","C","C","D","B","B","A","A","A"];   
        //    [ 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14] index number
for ( let i=0; i<data.length; i++){
    var res = [];
    var count =0;
    var container_01 = "" ;
    for (let j=0; j<data.length; j++){
        
    if (data[i]===data[i++]){       // i=2
        res = [count = i , container_01 = data[i]];     // 4,A
    }
    else  if (data[i]!==data[i++]){
        // var container_i = data[i++];
        count = 0;     
        container_01 = data[i];
    }
    console.log(res);}
}
// console.log(res);
// res.toString();
// console.log(res);

