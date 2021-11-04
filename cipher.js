function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = 0; i < str.length; i++){
        if(alphabet.indexOf(str[i]) === -1){
            result += str[i]
        }else{
            let indexAwal = alphabet.indexOf(str[i])
            let indexAkhir = (indexAwal + 13) % 26
            result += alphabet[indexAkhir] 
        }
        
    }
    return result;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  //FREE CODE CAMP