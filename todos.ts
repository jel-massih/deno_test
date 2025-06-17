
export async function getTestTodo() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/' + Math.floor(Math.random() * 100));
    const data = await resp.json();
    return data;
}