const max = ()=>{
    
    let max = (arr.sort(function(a, b){return b-a}))[0];
    return max;
}
const min = ()=> {
    let min= (arr.sort(function(a,b){return a-b}))[0];
    return min;
}
const avg=()=> {
      var s = 0;
   for (i = 0; i < arr.length; i++){
     if(arr[i]>0){
      s += arr[i];
let avg = s/arr.length-1;
return avg;
}