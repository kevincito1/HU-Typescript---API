"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consult = void 0;
const url_api = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url_api)
//  .then((response) => response.json())
//  .then((data)=> console.log(data))
class Consult {
    constructor(url_api) {
        this.url_api = url_api;
    }
    consultData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                'Content-Type': 'application/json',
            };
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            };
            const result = yield fetch(url_api, reqOptions);
            console.log(result);
        });
    }
}
exports.Consult = Consult;
