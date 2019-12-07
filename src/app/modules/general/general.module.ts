import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { LockersService } from 'src/app/core/http/lockers.service';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  providers: [LockersService]
})
export class GeneralModule { }
