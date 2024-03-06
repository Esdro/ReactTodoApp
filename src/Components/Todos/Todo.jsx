import {Checkbox} from "../FormUtilities/Checkbox.jsx";

export function Todo({todo, deleteTodo, toggleTodo}) {

    const {id, text, completed} = todo;
    return (
        <>
            <tr id={id}  key={id} >
                <td> <Checkbox checked={completed} onChange={toggleTodo} /> {completed === false ? 'A faire ' : "Déjà fait "}   </td>
                <td><span> <strong> {text}</strong> </span></td>
                <td><button className={'btn  btn-danger'} onClick={deleteTodo}> Effacer</button></td>
            </tr>
        </>
    )
}