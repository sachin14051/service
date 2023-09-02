import { Injectable, OnInit } from "@angular/core";
import { Iproduct, Istatus } from "../model/models";

@Injectable({
    providedIn: "root"
})
export class PostArrayService implements OnInit {


    products: Array<Iproduct> = [
        {
            pname: "samsung",
            pdesc: "android",
            pStatus: Istatus.inProgress,
            pId: "bdbdd"
        },
        {
            pname: "apple",
            pdesc: "ios",
            pStatus: Istatus.inProgress,
            pId: "ffgrfgrgreg"
        },
        {
            pname: "nokia",
            pdesc: "windows",
            pStatus: Istatus.inProgress,
            pId: "bdwwwewrefdwbdd"
        }
    ]

    ngOnInit(): void {


    }


    getAllproducts() {
        return this.products
    }

    addProduct(obj: Iproduct){
        return this.products.unshift(obj)
    }

    changePrdouctStatus(id:string,pStatus:Istatus){
    return this.products.forEach(e=>{
       if(e.pId ===id ){
         e.pStatus = pStatus
       }
    })
    }




}