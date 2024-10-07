function primenum(numbers){
    let prime;
    for(i=0;i<numbers.length;i++){
        if (numbers[i]==2||numbers[i]==3||numbers[i]==5||numbers[i]==7||numbers[i]==11||numbers[i]==13){
            prime += " " + numbers[i];
        }
        else{
        if(numbers[i]%2==0||numbers[i]%3==0||numbers[i]%5==0||numbers[i]%7==0||numbers[i]%11==0||numbers[i]%13==0){
           prime+= " "+ numbers[i];
        }
        
    }
    return prime;
}
}

const numbers =[19,23,4,16,28,13,31,87,29,14,6,35,2,11,17,5,9,27,12,30];
console.log(primenum(numbers));