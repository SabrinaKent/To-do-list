// Get references to DOM elements using getElementById
const textInput = document.getElementById('textInput')
const submitBtn = document.getElementById('submitBtn')
const  taskList = document.getElementById('taskList')


// Add event listener for clicks on submit button
submitBtn.addEventListener('click', ()=>{
    addTask()
})

// Add event listener for Enter key press in text input
textInput.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        console.log(1)
        addTask()
        console.log ('keyPresses')
    }
})


// Function to add a task to the list
function addTask(){
    const input = textInput.value.trim()
    if(input !== ""){
        const list = document.createElement('li')
        list.textContent =input
        taskList.appendChild(list)

        textInput.value =""
    }
}