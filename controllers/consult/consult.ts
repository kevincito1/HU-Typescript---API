import { BodyResponse } from "../../models/body.models.js";

//const url_api: string = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url_api)
//  .then((response) => response.json())
//  .then((data)=> console.log(data))

export class Consult {
    constructor( private url_api: string ) { 
        this.url_api

    }

    async consultData(data:BodyResponse): Promise<void> {
        const headers: Record<string, string> ={
            'Content-Type': 'application/json',
        }

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        }

        const result: Response = await fetch(url_api, reqOptions);
      
    }
}

