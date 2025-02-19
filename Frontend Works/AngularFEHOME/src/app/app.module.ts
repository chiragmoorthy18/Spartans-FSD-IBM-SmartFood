import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnimSliderComponent } from './anim-slider/anim-slider.component';
import { SignComponent } from './sign/sign.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,MatNativeDateModule,MatInputModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatIconModule,MatDatepickerModule, MatDatepicker} from '@angular/material';

import { RestaurantComponent, DialogDataExampleDialog } from './restaurant/restaurant.component';
import { SortCriteriaComponent } from './sort-criteria/sort-criteria.component';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';

import { HttpClientModule } from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { MapsService } from './maps.service';

import { PrefModelComponent } from './pref-model/pref-model.component';
import { FoodHomeComponent } from './food-home/food-home.component';
import { FoodRecomendComponent } from './food-recomend/food-recomend.component';
import { ReccoMendFoodComponent } from './recco-mend-food/recco-mend-food.component';

 


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AnimSliderComponent,
    SignComponent,
    CustomerProfileComponent,
    AboutUsComponent,
    RegisterComponent,
    VerifyOtpComponent,
   

    RestaurantComponent,
    SortCriteriaComponent,

    DialogDataExampleDialog

    PrefModelComponent,
    FoodHomeComponent,
    FoodRecomendComponent,
    ReccoMendFoodComponent


  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    SelectAutocompleteModule,
    HttpClientModule,
   
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBpF7XNgiejLB4qxKJOnMKUNQEVtK6ke0Q'
    })
    
  ],
 
  providers: [],
  bootstrap: [AppComponent,DialogDataExampleDialog],
  // entryComponents:
  // [
  //   RestaurantComponent,
  //   DialogDataExampleDialog,
  // ]
})
export class AppModule { }
