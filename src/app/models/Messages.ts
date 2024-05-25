export class Message{
    user_id!:number | null;
    user_type!:string | null;
    message!:string | null;
    topic!:string[];
    type!:string | null;
    button_id!:number | null;
    time_stamp!:Date | null;
    is_connection_lose!:boolean;
    is_ShowDay!:boolean;
    is_loading!:boolean;
}