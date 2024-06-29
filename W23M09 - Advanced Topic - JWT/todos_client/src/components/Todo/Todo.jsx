
const Todo = (props) => {
    return(
        <>
            <p> Description: {props.description}</p>
            <p> Status: {props.status}</p>
        </>
    );
}

export default Todo;