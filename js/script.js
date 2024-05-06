const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: '',
            todos: []
        }
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
            this.saveTodos();
        },
        saveTodos() {
            axios.post('writejson.php', this.todos);
        },
        addTodo() {
            let text = this.newTodo.trim();
            if (text) {
                this.todos.push({ text: text });
                this.newTodo = '';
                this.saveTodos();
            }
        },
        toggleCompleted(index) {
            this.todos[index].completed = !this.todos[index].completed;
            this.saveTodos();
        },
    },


    created() {
        axios.get('readjson.php')
            .then(response => (this.todos = response.data))
    },
}).mount('#app')