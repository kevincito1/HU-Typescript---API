import { BodyResponse } from "../../models/body.models";

const url_api: string = 'https://jsonplaceholder.typicode.com/posts'

fetch(url_api)
 .then((response) => response.json())
 .then((data)=> console.log(data))

export class Delete {
    constructor( private url_api: string ) { 

    }

    async deleteData(data:BodyResponse): Promise<void> {
        const headers: Record<string, string> ={
            'Content-Type': 'application/json',
        }

        const reqOptions: RequestInit = {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify(data),
        }
    }
}