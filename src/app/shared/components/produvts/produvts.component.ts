import { Component, OnInit } from '@angular/core';
import { Iproduct, Istatus } from '../../model/models';
import { PostArrayService } from '../../service/postArray.service';
import { UtilityService } from '../../service/utility.service';

@Component({
  selector: 'app-produvts',
  templateUrl: './produvts.component.html',
  styleUrls: ['./produvts.component.scss']
})
export class ProduvtsComponent implements OnInit {
   public productsArray : Array<Iproduct> = [];
   productStatus = Istatus
  
   constructor(private _productsService :PostArrayService,
    private _utility:UtilityService) { }

   

  ngOnInit(): void {
    this.productsArray = this._productsService.getAllproducts()
  }

  onAddProducts(pname:HTMLInputElement, pdesc:HTMLInputElement){
 
    let obj :Iproduct ={
        pname : pname.value,
        pdesc :pdesc.value,
        pStatus : Istatus.inProgress,
        pId : this._utility.getId()
      }
      console.log(obj)
     
      this._productsService.addProduct(obj)
    
  }
  

  onproductStatus(id :string,productStatus:Istatus){
     this._productsService.changePrdouctStatus(id,productStatus)
}
onproductStatusdelivered(id :string,productStatus:Istatus){
  this._productsService.changePrdouctStatus(id,productStatus)
}
onproductStatusdispatched(id :string,productStatus:Istatus){
  this._productsService.changePrdouctStatus(id,productStatus)
}
}
