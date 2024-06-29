import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../Todo/Todo";

const Dashboard = () => {
    const [todos, setTodos] = useState([]);
    const [isValidUser, setIsValidUser] = useState(false);
    const navigation = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user_token');
        navigation('/login');
    }

    useEffect(() => {
        const fetchTodos = async () => {
            const URL = "http://localhost:8080/todosByUser";
            const config = {
                method: 'GET',
                headers: {
                    user_token: localStorage.getItem('user_token')
                }
            };

            const response = await fetch(URL, config);
            const data = await response.json();

            if(!response.ok){
                setIsValidUser(false);
                navigation('/login');
            }
            else{
                setTodos(data.todos);
                setIsValidUser(true);
            }

        };

        fetchTodos();
    }, []);

    return(
        <>
            {(isValidUser) ? 
                <div> 
                    <h2> Your list of todos </h2>
                    {todos.map((todo, index) => {
                        return( <Todo description={todo.description}
                                      status={todo.status}
                                      key={index}/>)
                    })}
                </div> : 
                ""}

            <button onClick={handleLogout}>
                Logout
            </button>
        </>
    );
}

export default Dashboard;