import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { EditFoodComponent } from './components/edit-food/edit-food.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'addFood', component: AddFoodComponent },
  { path: 'editFood', component: EditFoodComponent },
  { path: '', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
