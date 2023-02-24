import axios from "axios";

function sum(a: number, b: number): number {
    return a + b;
}

function getEmail(base:string,domain:string): string {

    return `${base}@${domain}`;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

async function fetchData(): Promise<string> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    // @ts-ignore
    return response.data.title;
}

export {sum,getEmail,divide,fetchData}

