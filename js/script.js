// --------------All doms
let draggableItems = document.querySelectorAll('.box_items')
let dropTargets = document.querySelectorAll('.Blank_box')
let leftBox = document.querySelector('.left_box')
let SelectedItem
let ChangeQuiz = document.querySelector('.Container1')
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
let Answer1 = document.querySelector('.Answer1')
let Ques1 = document.querySelector('.ques1')
let Answer2 = document.querySelector('.Answer2')
let Ques2 = document.querySelector('.ques2')
let Answer3 = document.querySelector('.Answer3')
let Ques3 = document.querySelector('.ques3')
let Answer4 = document.querySelector('.Answer4')
let Ques4 = document.querySelector('.ques4')

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
    if(Ques2.contains(Answer3)){
        Answer3.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer3.style = 'background-color:red;'
    }
    // ------Question 3--------
    if(Ques3.contains(Answer2)){
        Answer2.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer2.style = 'background-color:red;'
    }
    // ------Question 4--------
    if(Ques4.contains(Answer1)){
        Answer1.style = 'background-color:#5CB338;'
        console.log('Correct');
    } else {
        console.log('Incorrect');
        Answer1.style = 'background-color:red;'
    }
    // -------------All Quiz Output
    if(Ques2.contains(Answer3) && Ques2.contains(Answer3) && Ques3.contains(Answer2) && Ques4.contains(Answer1)){
        ChangeQuiz.style = 'display:none;'
    }
})