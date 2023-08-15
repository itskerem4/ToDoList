let userFormDOM = document.querySelector('#todoForm')
userFormDOM.addEventListener('submit', formHandler)


function formHandler(event) {
    event.preventDefault()
    const SUBJECT = document.querySelector("#subject")
    const EXPLAN = document.querySelector("#explan")
    
    if (SUBJECT.value && EXPLAN.value) {
        addItem(SUBJECT.value, EXPLAN.value)
        SUBJECT.value = "" 
        EXPLAN.value = ""
        
    }
}


let userListDOM = document.querySelector('#listGroup')

const deleteItem = (subject) => {
    localStorage.removeItem(subject)
    userListDOM.removeChild(userListDOM.childNodes[0])
}
const addItem = (subject, explan) => {
    let liDOM = document.createElement('div')
    localStorage.setItem(subject,explan)
    liDOM.innerHTML = `
    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${subject }</h5>
      </div>
      <p class="mb-1">${explan}</p>
      <button class="btn btn-danger mt-2" id="#delete" onclick="deleteItem('${subject}')">Delete</button>
    </a>
    `


    userListDOM.appendChild(liDOM)

}