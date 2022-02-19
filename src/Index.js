const root = document.getElementById('root');

function App () {
    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [ubah, setUbah] = React.useState({});
    const [message, setMessage] = React.useState('');

    function generatedId () {
        return Date.now();
    }

    function saveHandler(e) {
        e.preventDefault();

        setMessage('');

        if(!activity) {
            return setMessage('Aktivitas masih kosong!');
        }

        if(ubah.id) {
            const updatedTodo = {
                ...ubah,
                activity
            };

            const ubahTodoIndex = todos.findIndex(function(todo) {
                return todo.id == ubah.id;
            });

            const updatedTodos = [...todos];
            updatedTodos[ubahTodoIndex] = updatedTodo;

            setTodos(updatedTodos);
            setActivity('');
            
            return cancelEditHandler();
        };

        setTodos([...todos, {
            id: generatedId(),
            activity,
            done: false
        }])
        setActivity('');
    }

    function removeToDo (todoId) {
        const filteredTodos = todos.filter(function(todo) {
            return todo.id !== todoId;
        });

        setTodos(filteredTodos);
        if(ubah.id) cancelEditHandler();
    }

    function editToDo (todo) {
        setActivity(todo.activity)
        setUbah(todo)
    }

    function cancelEditHandler () {
        setUbah({});
        setActivity('');
    }

    function doneTodoHandler (todo) {
        const updatedTodo = {
            ...todo,
            done: todo.done ? false : true
        }

        const ubahTodoIndex = todos.findIndex(function(currentTodo) {
            return currentTodo.id == todo.id;
        });

        const updatedTodos = [...todos];
        updatedTodos[ubahTodoIndex] = updatedTodo;

        setTodos(updatedTodos);
    }

    return (
        <div className='container'>
            <section className='main__container'>
                <h1 className="header">My To Do List</h1>

                <div className='form__containter'>
                    {message && <div className="message" style={{ color:'red' }}>{message}</div>}
                    <form onSubmit={saveHandler} className="form-input__container">
                        <input className="form-input" type="text" placeholder="Masukkan todo list..." value={activity} onChange={function(input) {
                            setActivity(input.target.value);
                        }}/>

                        <button className="button save__button" type="submit">{ubah.id ? 'simpan' : 'tambah'}</button>
                        {ubah.id && <button className="button cancel__button" onClick={cancelEditHandler}>Batal Edit</button>}
                    </form>

                    {todos.length > 0 ? 
                        (<ul className="list-items__container">
                            {todos.map(function(todo) {
                                return (
                                    <li key={todo.id} className="todo-list__item">
                                        <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)}/>
                                        {todo.activity} {(todo.done ? '(selesai)' : '(belum selesai)')}
                                        <button className="button button-edit" onClick={editToDo.bind(this, todo)}>Ubah</button>
                                        <button className="button button-delete" onClick={removeToDo.bind(this, todo.id)}>Hapus</button>
                                    </li>
                                )
                            })}
                        </ul>) : 
                    (<p className="message"><i>Tidak ada todo</i></p>)}
                </div>
            </section>
        </div>
    )
}

ReactDOM.render(<App/>, root)