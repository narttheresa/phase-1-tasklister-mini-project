document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
        toDoListText(e.target.querySelector('#new-task-description').value);
        form.reset();
    });
});


function toDoListText(toDo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteBtn);
  btn.textContent = 'x';
  p.textContent = `${toDo}  `;
  p.appendChild(btn);
  

// editing the text:
p.addEventListener('dblclick', function() {
  p.contentEditable = true;
  p.focus();
});

p.addEventListener('blur', function() {
  p.contentEditable = false;
  
})

document.querySelector('#tasks').appendChild(p);
}


function deleteBtn(e) {
  e.target.parentNode.remove();
}

