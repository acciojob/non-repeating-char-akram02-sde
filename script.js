function firstNonRepeatedChar(str) {
    // Write your code here
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if(obj[str[i]] == undefined){
            obj[str[i]] = 1
        }
        else{
            obj[str[i]]++
        }
    }

    for (const key in obj) {
        if (obj[key] == 1) {
            return key   
        }
    }
    return null
}