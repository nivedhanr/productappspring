import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent {
  constructor(private api:ApiService){
    api.fetchproduct().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
 data:any=[]
}
