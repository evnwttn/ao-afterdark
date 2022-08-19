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
exports.contactsHandler = void 0;
const emailjs_1 = require("emailjs");
// import * as fs from 'fs/promises';
const client = new emailjs_1.SMTPClient({
    user: 'user',
    password: 'password',
    host: 'smtp-mail.gmail.com',
    ssl: true,
});
function contactsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(JSON.stringify(req.body, null, 4));
        try {
            const message = yield client.sendAsync({
                text: 'testing from ev to ev',
                from: 'you <username@gmail.com>',
                to: 'Evan <evnwttn@gmail.com>',
                subject: 'testing emailjs',
            });
            console.log(message);
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.contactsHandler = contactsHandler;
// export async function contactsHandler(req: Request, res: Response) {
//     console.log(JSON.stringify(req.body, null, 4));
//     try {
//       await fs.writeFile('test.json', req.body);
//       res
//         .status(200)
//         .json({ message: `yo` });
//     } catch (error) {
//       res.sendStatus(500)
//     }
// }
