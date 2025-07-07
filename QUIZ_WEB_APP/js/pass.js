 let   passwordBox    = document.querySelector('.password')
 let len = 12

 let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 let lowerCase = "abcdefghijklmnopqrstuvwxyz"
 let number    = "0123456789"
 let symbol    = "@#%$!*&/\()_"
 let allChars      = upperCase + lowerCase + number + symbol

 passwordBox.setAttribute('readonly','readonly')

 let handleBtn = ()=>{
    let Password = ''

    Password += upperCase[Math.floor(Math.random() * upperCase.length )]
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length )]
    Password += number[Math.floor(Math.random() * number.length )]
    Password += symbol[Math.floor(Math.random() * symbol.length )]

    

    while(len > Password.length){
        Password += allChars[Math.floor(Math.random() * allChars.length )]
    }
    passwordBox.value = Password


 }
 
 let handleCopy = ()=>{
    passwordBox.select()
    document.execCommand('copy')
 }

//  AOS
AOS.init();