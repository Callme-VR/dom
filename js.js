        let currentIndex = 3; // Keeps track of the next todo ID

        //  Function to add a new todo
        function addTodo() {
            const inputEl = document.getElementById("inp");
            const todoText = inputEl.value.trim();

            if (todoText === "") {
                alert("Please enter a todo!");
                return;
            }

            // Create a new todo item
            const newTodo = document.createElement("div");
            newTodo.setAttribute("id", "todo-" + currentIndex);
            newTodo.innerHTML = `
        <h4>${currentIndex}. ${todoText}</h4>
        <button onclick="deleteTodo(${currentIndex})">Delete</button>
      `;

            // Add the new todo to the parent container
            const todosContainer = document.getElementById("todos");
            todosContainer.appendChild(newTodo);

            // Increment the index for the next todo
            currentIndex++;

            // Clear the input field
            inputEl.value = "";
        }

        // Function to delete a todo by index
        function deleteTodo(index) {
            const todoElement = document.getElementById("todo-" + index);
            if (todoElement) {
                todoElement.remove();
            } else {
                alert("Todo item not found!");
            }
        }