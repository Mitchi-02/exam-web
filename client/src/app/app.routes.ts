import { Routes } from '@angular/router';
import { ItemsComponent } from './items/list/items.component';
import { CreateItemComponent } from './items/create/createItem.component';
import { UpdateItemComponent } from './items/update/updateItem.component';
import { OneItemComponent } from './items/one/oneItem.component';

export const routes: Routes = [
  {
    path: 'items',
    component: ItemsComponent,
  },

  {
    path: 'items/create',
    component: CreateItemComponent,
  },

  {
    path: 'items/update/:id',
    component: UpdateItemComponent,
  },

  {
    path: 'items/:id',
    component: OneItemComponent,
  },
];
