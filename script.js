

function firstNonRepeatedChar(str) {
    // Write your code here
	if(str.length == 1){
    return str
	}
    for(let i = 0; i<str.length-1; i++){
        if(str[i] != str[i-1] && str[i] != str[i+1]){
            return str[i]
        }
    }

    return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 