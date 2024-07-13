// Get elements
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// Local storage keys
const TODOS_KEY = "toDos";

// Array to store to-dos
let toDos = [];

// Save to-dos to local storage
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Delete a to-do item
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

// Mark a to-do item as completed
function completeToDo(event) {
    const li = event.target.parentElement;
    const toDo = toDos.find(toDo => toDo.id === parseInt(li.id));
    if (!toDo.completed) {
        toDo.completed = true;
        li.classList.add('completed-rect');
        li.querySelector('input[type="text"]').classList.add('completed-text');
        incrementScore(); // Call to increment score
        saveToDos();
    }
}

// Edit a to-do item
function editToDo(event) {
    const li = event.target.parentElement;
    const input = li.querySelector('input[type="text"]');
    const editButton = li.querySelector('.edit-btn');

    input.readOnly = false;
    input.focus();
    editButton.textContent = 'Save';
    editButton.className = 'save-btn';

    editButton.removeEventListener('click', editToDo);
    editButton.addEventListener('click', () => saveEditedToDo(li, input, editButton));
}

// Save edited to-do item
function saveEditedToDo(li, input, editButton) {
    input.readOnly = true;
    const editedText = input.value;

    const toDo = toDos.find(toDo => toDo.id === parseInt(li.id));
    toDo.text = editedText;

    saveToDos();
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';

    editButton.removeEventListener('click', saveEditedToDo);
    editButton.addEventListener('click', editToDo);
}

// Render a to-do item
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.draggable = true;

    const input = document.createElement("input");
    input.type = "text";
    input.value = newTodo.text;
    input.readOnly = true;

    const editButton = document.createElement("button");
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', editToDo);

    const completeButton = document.createElement("button");
    completeButton.textContent = 'Completed';
    completeButton.className = 'complete-btn';
    completeButton.addEventListener('click', completeToDo);

    const deleteButton = document.createElement("button");
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', deleteToDo);

    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);

    addDragAndDropListeners(li);
}

// Handle form submission
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        completed: false
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

// Add drag and drop functionality
function addDragAndDropListeners(item) {
    item.addEventListener('dragstart', (e) => handleDragStart(e, item));
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragend', handleDragEnd);

    item.addEventListener('touchstart', (e) => handleTouchStart(e, item), { passive: true });
    item.addEventListener('touchmove', handleTouchMove, { passive: false });
    item.addEventListener('touchend', handleTouchEnd);
}

function handleDragStart(e, item) {
    item.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', item.outerHTML);
    setTimeout(() => item.classList.add('invisible'), 0);
}

function handleDragOver(e) {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');
    if (draggingItem) {
        const afterElement = getDragAfterElement(toDoList, e.clientY);
        if (afterElement == null) {
            toDoList.appendChild(draggingItem);
        } else {
            toDoList.insertBefore(draggingItem, afterElement);
        }
    }
}

function handleDragEnd(e) {
    const draggingItem = document.querySelector('.dragging');
    if (draggingItem) {
        draggingItem.classList.remove('dragging', 'invisible');
        updateOrder();
    }
}

function handleTouchStart(e, item) {
    item.classList.add('dragging');
    const touch = e.touches[0];
    item.setAttribute('data-startX', touch.clientX);
    item.setAttribute('data-startY', touch.clientY);
}

function handleTouchMove(e) {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');
    if (!draggingItem) return;

    const touch = e.touches[0];
    const startX = parseFloat(draggingItem.getAttribute('data-startX'));
    const startY = parseFloat(draggingItem.getAttribute('data-startY'));
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    draggingItem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    const afterElement = getDragAfterElement(toDoList, touch.clientY);
    if (afterElement == null) {
        toDoList.appendChild(draggingItem);
    } else {
        toDoList.insertBefore(draggingItem, afterElement);
    }
}

function handleTouchEnd() {
    const draggingItem = document.querySelector('.dragging');
    if (draggingItem) {
        draggingItem.style.transform = '';
        draggingItem.classList.remove('dragging');
        updateOrder();
    }
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Update the order of the to-dos in local storage after drag and drop
function updateOrder() {
    const reorderedToDos = [];
    const listItems = toDoList.querySelectorAll('li');
    listItems.forEach(li => {
        const toDo = toDos.find(todo => todo.id === parseInt(li.id));
        reorderedToDos.push(toDo);
    });
    toDos = reorderedToDos;
    saveToDos();
}

// Event listener for form submission
toDoForm.addEventListener("submit", handleToDoSubmit);

// Load saved to-dos
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
