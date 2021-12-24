let input = document.getElementById('input');
let Add = document.getElementById('add');
let container = document.getElementById('container');

Add.addEventListener('click', () => {

    if (input.value.length == 0) {
        alert("Please Enter a Task")
    } else {
        container.innerHTML += `
            <div class="task">
                <input id="taskname" value="${input.value}" disabled="true">
                <button class="edit">
                <i>edit</i>
                </button>
                <button class="delete">
                <i>delete</i>
                </button>
            </div>
        `;

        var edit_tasks = document.querySelectorAll(".edit")
        for (var i = 0; i < edit_tasks.length; i++) {
            edit_tasks[i].addEventListener('click', function () {
                document.getElementById('taskname').disabled = !document.getElementById('taskname').disabled;
            })
        }

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].addEventListener('click', function () {
                this.parentNode.remove()
            })
        }

        // var tasks = document.querySelectorAll("#taskname");
        // for (var i = 0; i < tasks.length; i++) {
        //     tasks[i].addEventListener('click', function () {
        //         tasks.classList.toggle('completed');
        //     })
        // }


        input.value = "";

    }
})

n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

