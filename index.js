function odd_even(numbers){
    let odd=0,even=0;
    for(i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
           even+= " "+ numbers[i];
        }
        else {
            odd+=" "+ numbers[i];
        }
    }
    return "even num is     "+ even+"         odd num is"+odd;
}

const numbers =[3,7,2,15,9,20,5,14,12,1,8,11,6,19,4,10,17,13,16,18]
console.log(odd_even(numbers));
