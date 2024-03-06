import {useEffect, useState} from 'react'
import {Input} from "./Components/FormUtilities/Input.jsx";
import {Todo} from "./Components/Todos/Todo.jsx";
import useFetch from "./CustomHooks/useFetch.jsx";
function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('ReduxTodos')) || []);
  // on utilise useEffect pour actualiser les todos dans localStorage
  useEffect(() => {
    localStorage.setItem('ReduxTodos', JSON.stringify(todos));
  }, [todos]);

  const {isLoading, errorMessage, data } = useFetch('https://jsonplaceholder.typicode.com/todos')

  const [input, setInput] = useState('');

  function resetInput() {
    return setInput('')
  }
  
//fonction gérant la soumission du formulaire d'ajout
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (input.trim().length < 1) return alert('Please Add a todo !');

    // on crée notre todo
    const todo = {
      id: Math.random(),
      text: input,
      completed: false
    }
    // on met à jour le tableau des todos
    setTodos([...todos, todo])

    // on réinitialise l'input
    resetInput()
  }



  // effaçons un Todo
  const deleteTodo = (todoId)  => {
   // console.log(todoId)
    return setTodos(todos.filter(todo => {
      return todo.id !== todoId;

    }))
  }


  const toggleTodo = (todoId) => {
    return setTodos(todos.map((todo) => {
      if (todo.id === todoId) {
       return {...todo, completed: !todo.completed}
      }
      return todo
    }))
  }




  return (
    <>

      <div className={'container p-4 '}  >

        <div className={'row align-items-center justify-content-center'}>

          <div className={'col-6'}>
            <FormComponent
             inputValue={input}
             setInputValue={setInput}
             placeholder={'Add todo'}
             handleSubmit={formSubmitHandler}  />
          </div>
        </div>
        <div className={'row align-items-center justify-content-center'}>
          <div className={'col-6'}>

            <table className={'table table-hover table-striped table-bordered'} >
              <thead>
              <tr>
                <th>Etat  </th>
                <th>Contenu </th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {
                todos.length >= 1 ?
                    todos.map(todo => (
                  <Todo todo={todo} key={todo.id} toggleTodo={ () => toggleTodo(todo.id)} deleteTodo={() => deleteTodo(todo.id)  }/>
              )) :
                    <tr>
                <td colSpan={3} ><div className="alert alert-warning" role="alert" > Rien à afficher dans ce tableau. Ajouter une tâche </div>  </td>
              </tr>}
              </tbody>

            </table>


          </div>
        </div>

      </div>


    </>
  )
}

function FormComponent({handleSubmit, inputValue, setInputValue, placeholder}) {

  return (
      <>

        <div className={'row align-items-center justify-content-center'}>
        <Input onChange={setInputValue} value={inputValue} placeholder={placeholder}/>
          <button className="btn btn-primary my-4" type={'submit'} onClick={handleSubmit} > Ajouter cette tâche   </button>
        </div>
      </>
  )


}



export default App
