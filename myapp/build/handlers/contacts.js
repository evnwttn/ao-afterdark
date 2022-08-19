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
require('dotenv').config();
function contactsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // emailjs.send(
        //   process.env.EMAILJS_SERVICE_ID,
        //   process.env.EMAILJS_TEMPLATE_ID,
        //   req.body,
        //   process.env.EMAILJS_USER_ID
        // );
        console.log(process.env.EMAILJS_SERVICE_ID);
    });
}
exports.contactsHandler = contactsHandler;
// export async function contactsHandler(req: Request, res: Response) {
//     console.log(JSON.stringify(req.body, null, 4));
//     // console.log(req.body.name)
//     // console.log(req.body.email)
//     // console.log(req.body.message)
//     try {
//       await fs.writeFile('test.json', req.body);
//       res
//         .status(200)
//         .json({ message: `yo` });
//     } catch (error) {
//       res.sendStatus(500)
//     }
// }
