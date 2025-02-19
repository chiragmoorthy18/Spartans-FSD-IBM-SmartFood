import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathMatch } from 'tough-cookie';
import { HomePageComponent } from './home-page/home-page.component';
import { SignComponent } from './sign/sign.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FoodHomeComponent } from './food-home/food-home.component';


const routes: Routes = [

  {
    path:" ",
    component: HomePageComponent
  },
    {
      path:"login",
      component: SignComponent
    },{
      path:"register",
      component:RegisterComponent
    },{
      path:"optVerify",
      component:VerifyOtpComponent
    },
    {
      path:"home",
      component: HomePageComponent
    },
    {  
      path:"aboutUs",
      component: AboutUsComponent

    },
    {
      path:"customerProfile",
      component: CustomerProfileComponent
    },
    {
      path:"foodHome",
      component:FoodHomeComponent
    },
    {
      path:"restaurant",
      component: RestaurantComponent
    },
    {
      path:"**",
      component: HomePageComponent
    }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
