import {useLoaderData} from "react-router-dom";

function TodoPage()
{
    const todo = useLoaderData();

    return (
        <div>{todo.name}</div>
    )
}

export default TodoPage;