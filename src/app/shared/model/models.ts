export interface Iproduct{
    pname :string,
    pdesc:string,
    pStatus : Istatus,
    pId : string
 }

 export enum Istatus{
    inProgress = "inProgress",
    delivered = "delivered",
    dispatched = "dispatched"
 }