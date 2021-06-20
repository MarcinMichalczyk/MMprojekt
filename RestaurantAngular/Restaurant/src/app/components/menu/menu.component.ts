import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: any = [];
  orders: any[] = [];
  ordersPrice: any[] = [];
  sum:number = 0;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.foodGet();
  }

  foodGet() {
    this.menuService.getAll().subscribe(data => {
      this.menus = data as Menu[];
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  foodDelete(id:number) {
    this.menuService.deleteById(id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }
  ordersList(name:string,price:number){
    this.orders.push(name);
    this.ordersPrice.push(price);
    this.sum += price;
    console.log(this.orders);
  }
  ordersListClean(){
    this.orders = [];
    this.ordersPrice = [];
    this.sum = 0;
  }

}