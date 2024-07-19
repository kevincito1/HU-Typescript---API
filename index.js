"use strict";
// import { BodyResponse } from "./models/body.models.js";
// import { Consult } from "./controllers/consult/consult.js";
// import { Delete } from "./controllers/delete/delete.js";
// import { Edit } from "./controllers/edit/edit.js";
// import { Insert } from "./controllers/insert/insert.js";
const url_api = 'https://jsonplaceholder.typicode.com/posts';
fetch(url_api)
    .then(response => response.json())
    .then((data) => {
    console.log(data);
});
