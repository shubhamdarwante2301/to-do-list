var addTodo = document.getElementById("addTodo");
addTodo.addEventListener("click", checkEmptyvalue);

/******add event listener to delete task button*****/
var deleteTodo = document.getElementById('todoContainer');
deleteTodo.addEventListener('click', deleteThistodo);

/*******creating array of local storage values******/ 
let myTodo = JSON.parse(localStorage.getItem("myTask")) || [];


for (let k = 0; k < myTodo.length; k++) {
    var oldTodo = document.createTextNode(myTodo[k]);
    addTask(oldTodo);
}

/*******creating task********/
function checkEmptyvalue() {
    let inputField = document.getElementById("inputValue");
    let task = inputField.value;
    let taskData = document.createTextNode(task);

    if (task !== "") {
        addTask(taskData);
        myTodo[myTodo.length] = task;
        inputField.value = "";
        localStorage.setItem("myTask", JSON.stringify(myTodo));
    }
    else {
        alert("please enter something in input field");
    }
}

/*************function to add todo task************/
function addTask(a) {
    let newTask = document.createElement("p");
    newTask.className = "todoList";

    let closeBtn = document.createElement("a");
    closeBtn.className = "closeBtn";
    closeBtn.href = "#";
    closeBtn.appendChild(document.createTextNode("X"));

    newTask.appendChild(closeBtn);
    newTask.appendChild(a);

    var i = document.getElementById("todoContainer");
    i.appendChild(newTask);
}

/********function to delete my todo task***********/

function deleteThistodo (e) {
    var Cname = e.target.className;
    if (Cname == 'closeBtn')
    {
        let del = e.target.parentNode;
        let x = e.target;
        x.remove();
        var temp = del.innerText;
        let myTodo = JSON.parse(localStorage.getItem("myTask"));

        for(let i=0; i<myTodo.length; i++)
        {
            if(myTodo[i]==temp)
            {
                del.remove();

                var z = JSON.parse(localStorage.getItem("myTask")) || [];

                let arr1 = [];
                let arr2 = [];
                /****storing the tasks in arr1 till the task that want to delete*****/
                for(let x=0; x<=i; x++)
                {
                    arr1[x] = z[x];
                }
                arr1.pop();

                /***storing the tasks in arr2 after the task that want to delete***/
                let k=0;
                for(let y=(i+1); y<z.length; y++)
                {
                    arr2[k] = z[y];
                    k++;
                }
                const output = arr1.concat(arr2);

                /**** updating the local storage after completed task deletion ******/
                localStorage.setItem('myTask', JSON.stringify(output));
                
                break;
            }
        }
    }
}

