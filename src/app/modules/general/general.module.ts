import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class GeneralModule { }
