import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { LockersService } from 'src/app/core/http/lockers.service';
import { LoginDialogComponent } from './home/login-dialog/login-dialog.component';
import { LockerTroublesComponent } from './locker-troubles/locker-troubles.component';



@NgModule({
  declarations: [HomeComponent, LoginDialogComponent, LockerTroublesComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [LockersService]
})
export class GeneralModule { }
