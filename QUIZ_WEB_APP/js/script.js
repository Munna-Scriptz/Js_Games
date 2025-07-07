
let allQues = {
    "html":{
        "q1" : 'What does HTML stand for?',
        "op1a":'Hyper Text Markup Language',
        "op1b":'Hyperlinks and Markup Language',
        "op1c": 'Home tool Markup Language',

        "q2" : 'Who is making the Web standards?',
        "op2a":'Google',
        "op2b":'W3c',
        "op2c": 'Mozilla',

        "q3" : 'How can you make a numbered list?',
        "op3a":'ul',
        "op3b":'ol',
        "op3c":'list'
    },
    "javascript" :{
        "q1" : 'How do you create a function in JavaScript?',
        "op1a": 'function myFunction()',
        "op1b":'function = myFunction()',
        "op1c":'function:myFunction',

        "q2" : 'Which keyword is used to define a constant in JavaScript?',
        "op2a":'var',
        "op2b" :'const',
        "op2c":'let',

        "q3" :'Which method is used to convert a string to an integer in JavaScript?',
        "op3a":'int()',
        "op3b":'parseInt()',
        "op3c":'Integer()'
    },
    "node":{
        "q1":'In Node.js, which built‑in module lets you create an HTTP server?',
        "op1a":'url',
        "op1b":'fs',
        "op1c":'http',

        "q2":'Which object gives you access to command‑line arguments in Node.js?',
        "op2a":'global',
        "op2b":'process',
        "op2c":'console',

        "q3":'Which of the following is NOT a core (built‑in) Node.js module?',
        "op3a":'path',
        "op3b":'events',
        "op3c":'express'
    } 
}



// DOM
let submit     = document.querySelector('.submit')
let body       = document.querySelector('body')

// level1
let L1           = document.querySelector('.L1')
let question1    = document.querySelector('.question1')
let P1a          = document.querySelector('.P1a')
let P1b          = document.querySelector('.P1b')
let P1c          = document.querySelector('.P1c')

let question2    = document.querySelector('.question2')
let P2a          = document.querySelector('.P2a')
let P2b          = document.querySelector('.P2b')
let P2c          = document.querySelector('.P2c')

let question3    = document.querySelector('.question3')
let P3a          = document.querySelector('.P3a')
let P3b          = document.querySelector('.P3b')
let P3c          = document.querySelector('.P3c')

// level-2
let L2      =document.querySelector('.L2')
let jsQ1    =document.querySelector('.jsQ1')
let j1a     =document.querySelector('.j1a')
let j1b     =document.querySelector('.j1b')
let j1c     =document.querySelector('.j1c') 

let jsQ2    =document.querySelector('.jsQ2')
let j2a     =document.querySelector('.j2a')
let j2b     =document.querySelector('.j2b')
let j2c     =document.querySelector('.j2c') 

let jsQ3    =document.querySelector('.jsQ3')
let j3a     =document.querySelector('.j3a')
let j3b     =document.querySelector('.j3b')
let j3c     =document.querySelector('.j3c') 
let Next    =document.querySelector('.Next')//level 2 button

// level3
let L3         = document.querySelector('.L3')
let nodeQ1     = document.querySelector('.nodeQ1')
let n1a        = document.querySelector('.n1a')
let n1b        = document.querySelector('.n1b')
let n1c        = document.querySelector('.n1c')

let nodeQ2     = document.querySelector('.nodeQ2')
let n2a        = document.querySelector('.n2a')
let n2b        = document.querySelector('.n2b')
let n2c        = document.querySelector('.n2c')

let nodeQ3     = document.querySelector('.nodeQ3')
let n3a        = document.querySelector('.n3a')
let n3b        = document.querySelector('.n3b')
let n3c        = document.querySelector('.n3c')

let Final      = document.querySelector('.Final')//finalButton

// result
let resultText   = document.querySelector('.resultText')
let result       = document.querySelector('.result')



// add level1 content

question1.innerHTML = allQues.html.q1
P1a.innerHTML = allQues.html.op1a
P1b.innerHTML = allQues.html.op1b
P1c.innerHTML = allQues.html.op1c

question2.innerHTML = allQues.html.q2
P2a.innerHTML = allQues.html.op2a
P2b.innerHTML = allQues.html.op2b
P2c.innerHTML = allQues.html.op2c

question3.innerHTML = allQues.html.q3
P3a.innerHTML = allQues.html.op3a
P3b.innerHTML = allQues.html.op3b
P3c.innerHTML = allQues.html.op3c
// add level2 content
jsQ1.innerHTML = `${allQues.javascript.q1}`
j1a.innerHTML=`${allQues.javascript.op1a}`
j1b.innerHTML=`${allQues.javascript.op1b}`
j1c.innerHTML=`${allQues.javascript.op1c}`

jsQ2.innerHTML=`${allQues.javascript.q2}`
j2a.innerHTML=`${allQues.javascript.op2a}`
j2b.innerHTML=`${allQues.javascript.op2b}`
j2c.innerHTML=`${allQues.javascript.op2c}`

jsQ3.innerHTML=`${allQues.javascript.q3}`
j3a.innerHTML =`${allQues.javascript.op3a}`
j3b.innerHTML =`${allQues.javascript.op3b}`
j3c.innerHTML =`${allQues.javascript.op3c}`
// add level3 content
nodeQ1.innerHTML=`${allQues.node.q1}`
n1a.innerHTML = `${allQues.node.op1a}`
n1b.innerHTML = `${allQues.node.op1b}`
n1c.innerHTML = `${allQues.node.op1c}`

nodeQ2.innerHTML=`${allQues.node.q2}`
n2a.innerHTML = `${allQues.node.op2a}`
n2b.innerHTML = `${allQues.node.op2b}`
n2c.innerHTML = `${allQues.node.op2c}`

nodeQ3.innerHTML=`${allQues.node.q3}`
n3a.innerHTML = `${allQues.node.op3a}`
n3b.innerHTML = `${allQues.node.op3b}`
n3c.innerHTML = `${allQues.node.op3c}`




submit.addEventListener('click',()=>{
    let q1  = document.querySelector('.q1').checked 
    let q2  = document.querySelector('.q2').checked
    let q3  = document.querySelector('.q3').checked

    let i = 0

    if(q1){
        i++
    }
    if(q2){
        i++
    }
    if(q3){
        i++
    }
    if(i == 0){
        alert(`Your mark : ${i} , You Are FAIL`)
    }
    else if(i == 1){
        alert(`Your mark : ${i} , Good but learn more`)
    }
    else if(i == 2){
        alert(`Your mark : ${i} , Good Job , Try Again`)
    }
    else{
        alert(`your mark : ${i} , GOAT , YOU ARE HTML BOSS`)
        L1.style.display='none'
        L2.style.display='block'
        body.style ='background : url("https://cdn.pixabay.com/photo/2018/01/03/05/33/the-sun-3057622_1280.jpg")'
        body.style = 'background-repeat:no-repeat'
        body.style = 'background-size: cover'
        body.style ='background-position: center'
    }
    // alert('Your Mark :' + i)
})

// level-2 button
Next.addEventListener('click',()=>{
    let j1  = document.querySelector('.j1').checked
    let j2  = document.querySelector('.j2').checked
    let j3  = document.querySelector('.j3').checked

    let s =0
    if(j1){
        s++
    }
    if(j2){
        s++
    }
    if(j3){
        s++
    }
    if(s == 0){
        alert(`Your Mark : ${s} , You Are FAIL`)
    }
    else if(s == 1){
        alert(`Your Mark : ${s} , Good but learn more`)
    }
    else if(s == 2){
        alert(`Your Mark : ${s} , Good Job , Try Again`)
    }
    else{
        alert(`Your Mark : ${s} , GREAT , YOU ARE JAVASCRIPT BOSS`)
        L2.style.display='none'
        L3.style.display='block'
        body.style = 'background : url("https://cdn.pixabay.com/photo/2021/10/19/22/18/cabaneros-national-park-6724690_1280.jpg")'
        body.style = 'background-repeat:no-repeat'
        body.style = 'background-size: cover'
        body.style ='background-position: center'
    }
    
})

// level-3
Final.addEventListener('click',()=>{
    let n1 = document.querySelector('.n1').checked
    let n2 = document.querySelector('.n2').checked
    let n3 = document.querySelector('.n3').checked

    let m = 0 

    if(n1){
        m++
    }
    if(n2){
        m++
    }
    if(n3){
        m++
    }

    if(m == 0){
        alert(`Your Mark : ${m} , You Are FAIL`)
    }
    else if(m == 1){
        alert(`Your Mark : ${m} , Good but learn more`)
    }
    else if(m == 2){
        alert(`Your Mark : ${m} , Good Job , Try Again`)
    }
    else{
        alert('Your Mark :' + m)
        L3.style.display='none'
        result.style.display='block'
        resultText.innerHTML = ` GREAT , YOU ARE NODE.JS & Development BOSS`
        body.style ='background : url("https://cdn.pixabay.com/photo/2018/01/03/05/33/the-sun-3057622_1280.jpg")'
        body.style = 'background-repeat:no-repeat'
        body.style = 'background-size: cover'
        body.style ='background-position: center'

    }
    
})


// again
let handleAgain =()=>{
    window.location.reload()
}

// FB
let handleFb = ()=>{
    alert('Upload Successful')

}
// Insta
let handleInsta = ()=>{
    alert('Upload Successful')
}
// Git
let handleGit = ()=>{
    alert('Upload Successful')
}