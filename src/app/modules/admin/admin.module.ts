import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management/management.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { CreateUserDialogComponent } from './management/create-user-dialog/create-user-dialog.component';
import {MatDialogConfig, MatDialogRef} from "@angular/material/dialog";



@NgModule({
  declarations: [ManagementComponent, CreateUserDialogComponent],
    imports: [
        CommonModule,
        CustomMaterialModule
    ],
  entryComponents: [CreateUserDialogComponent],
  providers: [
    MatDialogConfig
  ],
})
export class AdminModule { }
