import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {UserOrderService} from "../../services/user-order.service";

@Component({
  selector: 'app-list-products-order',
  templateUrl: './list-products-order.component.html',
  styleUrls: ['./list-products-order.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule
  ]
})
export class ListProductsOrderComponent {

  constructor(
    public userOrderService: UserOrderService
  ) { }

}
