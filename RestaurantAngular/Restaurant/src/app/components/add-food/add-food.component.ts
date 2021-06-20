import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  menu: Menu = {
    foodId: 0,
    foodName: '',
    foodPrice: 0,
    foodCategory: ''
  };

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

  addFood() {
    const buffer: Menu = {
      foodId: this.menu.foodId,
      foodName: this.menu.foodName,
      foodPrice: this.menu.foodPrice,
      foodCategory: this.menu.foodCategory
    };

    this.menuService.create(buffer)
      .subscribe(Response => {
        console.log(Response);
      },
        error => console.log(error)
      );
  }

  

}
