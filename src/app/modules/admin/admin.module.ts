import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management/management.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import {MatRadioModule} from "@angular/material/radio";



@NgModule({
  declarations: [ManagementComponent],
    imports: [
        CommonModule,
        CustomMaterialModule,
        MatRadioModule
    ]
})
export class AdminModule { }
