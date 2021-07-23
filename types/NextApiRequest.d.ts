import { IncomingMessage } from "http";
declare module 'next' {
    export interface NextApiRequest extends IncomingMessage {
        user: {
            _id?: string,
            name?: string,
            email?: string,
            password?: string
        },
        file?: any,
        json?: any,
        db?: any,
        logIn?: any
        logOut?: any,
        status?: any,
        dbClient?: any
    }
}