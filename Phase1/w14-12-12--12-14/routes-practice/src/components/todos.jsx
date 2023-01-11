import { useLoaderData, Link } from "react-router-dom"

function TodosPage()
{
  const todos = useLoaderData();

  console.log(todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
        <li>
            <Link to={`/todo/${todo.id}`}>{todo.name}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosPage;