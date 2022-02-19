const root = document.getElementById('root');

function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [ubah, setUbah] = React.useState({});
  const [message, setMessage] = React.useState('');

  function generatedId() {
    return Date.now();
  }

  function saveHandler(e) {
    e.preventDefault();
    setMessage('');

    if (!activity) {
      return setMessage('Aktivitas masih kosong!');
    }

    if (ubah.id) {
      const updatedTodo = { ...ubah,
        activity
      };
      const ubahTodoIndex = todos.findIndex(function (todo) {
        return todo.id == ubah.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[ubahTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      setActivity('');
      return cancelEditHandler();
    }

    ;
    setTodos([...todos, {
      id: generatedId(),
      activity,
      done: false
    }]);
    setActivity('');
  }

  function removeToDo(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (ubah.id) cancelEditHandler();
  }

  function editToDo(todo) {
    setActivity(todo.activity);
    setUbah(todo);
  }

  function cancelEditHandler() {
    setUbah({});
    setActivity('');
  }

  function doneTodoHandler(todo) {
    const updatedTodo = { ...todo,
      done: todo.done ? false : true
    };
    const ubahTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[ubahTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("section", {
    className: "main__container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "header"
  }, "My To Do List"), /*#__PURE__*/React.createElement("div", {
    className: "form__containter"
  }, message && /*#__PURE__*/React.createElement("div", {
    className: "message",
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveHandler,
    className: "form-input__container"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    type: "text",
    placeholder: "Masukkan todo list...",
    value: activity,
    onChange: function (input) {
      setActivity(input.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "button save__button",
    type: "submit"
  }, ubah.id ? 'simpan' : 'tambah'), ubah.id && /*#__PURE__*/React.createElement("button", {
    className: "button cancel__button",
    onClick: cancelEditHandler
  }, "Batal Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", {
    className: "list-items__container"
  }, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id,
      className: "todo-list__item"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, " ", todo.done ? '(selesai)' : '(belum selesai)', /*#__PURE__*/React.createElement("button", {
      className: "button button-edit",
      onClick: editToDo.bind(this, todo)
    }, "Ubah"), /*#__PURE__*/React.createElement("button", {
      className: "button button-delete",
      onClick: removeToDo.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", {
    className: "message"
  }, /*#__PURE__*/React.createElement("i", null, "Tidak ada todo")))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);