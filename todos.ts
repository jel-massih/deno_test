
export async function getTestTodo() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await resp.json();
    return data;
}