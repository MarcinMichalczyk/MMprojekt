import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  menus: any = [];
  currentIndex: number =-1;
  currentFood: Menu = {
    foodId: 0,
    foodName: '',
    foodPrice: 0,
    foodCategory: ''
  };
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

  foodEdit() {
    this.menuService.update(this.currentFood.foodId, this.currentFood)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  setActiveFood(menu: Menu, index: number){
    this.currentFood = menu;
    this.currentIndex = index;
  }
}

