import { BodyResponse } from "../../models/body.models";

const url_api: string = 'https://jsonplaceholder.typicode.com/posts'

fetch(url_api)
 .then((response) => response.json())
 .then((data)=> console.log(data))

export class Edit {
    constructor( private url_api: string ) { 

    }

    async editData(data:BodyResponse): Promise<void> {
        const headers: Record<string, string> ={
            'Content-Type': 'application/json',
        }

        const reqOptions: RequestInit = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data),
        }
    }
}