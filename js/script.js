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
    },

    created() {
        axios.get('readjson.php')
            .then(response => (this.todos = response.data))
    },
}).mount('#app')