// --------------All doms
let draggableItems = document.querySelectorAll('.box_items')
let dropTargets = document.querySelectorAll('.Blank_box')
let leftBox = document.querySelector('.left_box')
let SelectedItem
// ---------Quiz Container Dom
let ChangeQuiz = document.querySelector('.Container1')
let Quiz2      = document.querySelector('.Container2')
// ----Progress Dom
let ProgressBar = document.querySelector('.progress_bar')
let ProgressCount = document.querySelector('.ProgNum')
let GuessHead = document.querySelector('.GuessHead')
// ------------Drag Function Start
draggableItems.forEach(item => {
    item.addEventListener('dragstart', () => {
        SelectedItem = item
    })
});

[...dropTargets, leftBox].forEach(dropArea => {
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    dropArea.addEventListener('drop', () => {
        if (SelectedItem) {
            dropArea.appendChild(SelectedItem)
        }
    })
})

// -------------Next Button Function
let NextButton = document.querySelector('.animated-button')
let Answer1    = document.querySelector('.Answer1')
let Ques1      = document.querySelector('.ques1')
let Answer2    = document.querySelector('.Answer2')
let Ques2      = document.querySelector('.ques2')
let Answer3    = document.querySelector('.Answer3')
let Ques3      = document.querySelector('.ques3')
let Answer4    = document.querySelector('.Answer4')
let Ques4      = document.querySelector('.ques4')

NextButton.addEventListener('click', () => {

    // ------Question 1--------
    if (Ques1.contains(Answer4)) {
        Answer4.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer4.style = 'background-color:red;'
    }
    // ------Question 2--------
    if (Ques2.contains(Answer3)) {
        Answer3.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer3.style = 'background-color:red;'
    }
    // ------Question 3--------
    if (Ques3.contains(Answer2)) {
        Answer2.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer2.style = 'background-color:red;'
    }
    // ------Question 4--------
    if (Ques4.contains(Answer1)) {
        Answer1.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer1.style = 'background-color:red;'
    }

    // -------------All Quiz Output 
    if (Ques1.contains(Answer4) && Ques2.contains(Answer3) && Ques3.contains(Answer2) && Ques4.contains(Answer1)) {
        ChangeQuiz.style = 'display:none;'
        Quiz2.style = 'display:flex;'
        // --------ProgressBar
        ProgressCount.innerHTML = 1
        setTimeout(() => {
            ProgressBar.style.transform = 'translateX(-200px)';
        }, 300);
        GuessHead.innerHTML = 'Drag And Drop The Correct Animal Name'
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)) ,url(./Images/Background2.jpg)"
    }
})
// ------------------Quiz 1 End---------------









// ------------------Quiz 2---------------------
// --------------All doms
let draggableItems2 = document.querySelectorAll('.Box_items2')
let dropTargets2 = document.querySelectorAll('.blank_Box2')
let leftBox2 = document.querySelector('.left_box2')
let SelectedItem2
let ChangeQuiz2 = document.querySelector('.Container2')
// ----Progress Dom

// ------------Drag Function Start
draggableItems2.forEach(item2 => {
    item2.addEventListener('dragstart', () => {
        SelectedItem2 = item2
    })
});

[...dropTargets2, leftBox2].forEach(dropArea => {
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    dropArea.addEventListener('drop', () => {
        if (SelectedItem2) {
            dropArea.appendChild(SelectedItem2)
        }
    })
})

// -------------Next Button Function
let NextButton2 = document.querySelector('.animated-button2')
let Answer12    = document.querySelector('.Answer12')
let Ques12      = document.querySelector('.ques12')
let Answer22    = document.querySelector('.Answer22')
let Ques22      = document.querySelector('.ques22')
let Answer32    = document.querySelector('.Answer32')
let Ques32      = document.querySelector('.ques32')
let Answer42    = document.querySelector('.Answer42')
let Ques42      = document.querySelector('.ques42')

NextButton2.addEventListener('click', () => {

    // ------Question 1--------
    if (Ques12.contains(Answer22)) {
        Answer22.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer22.style = 'background-color:red;'
    }
    // ------Question 2--------
    if (Ques22.contains(Answer12)) {
        Answer12.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer12.style = 'background-color:red;'
    }
    // ------Question 3--------
    if (Ques32.contains(Answer42)) {
        Answer42.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer42.style = 'background-color:red;'
    }
    // ------Question 4--------
    if (Ques42.contains(Answer32)) {
        Answer32.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer32.style = 'background-color:red;'
    }

    // -------------All Quiz Output 
    if (Ques12.contains(Answer22) && Ques22.contains(Answer12) && Ques32.contains(Answer42) && Ques42.contains(Answer32)) {
        // --------ProgressBar
        ProgressCount.innerHTML = 2
        setTimeout(() => {
            ProgressBar.style.transform = 'translateX(-100px)';
        }, 300);
    }
})