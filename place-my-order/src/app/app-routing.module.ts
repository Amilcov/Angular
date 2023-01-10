import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DetailComponent } from './restaurant/detail/detail.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  
  {
     path: 'restaurants', 
     component: RestaurantComponent
  },
  
  {
     path: 'restaurant/:slug', 
     component: DetailComponent
  },
  
  {
     path: 'restaurant/:slug/order', 
     component: OrderComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
