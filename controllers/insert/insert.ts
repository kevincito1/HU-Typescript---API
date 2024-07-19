import { BodyResponse } from "../../models/body.models.js";

const url_api: string = 'https://jsonplaceholder.typicode.com/posts'

fetch(url_api)
 .then((response) => response.json())
 .then((data)=> console.log(data))

export class Insert {
    constructor( private url_api: string ) { 

    }

    async insertData(data:BodyResponse): Promise<void> {
        const headers: Record<string, string> ={
            'Content-Type': 'application/json',
        }

        const reqOptions: RequestInit = {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data),
        }
    }
}