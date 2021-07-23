import { ServerResponse } from "http";
declare module 'next' {
    export interface NextApiResponse extends ServerResponse {
        logOut: any,
        status: any,
        json: any,
        send: any
    }
}