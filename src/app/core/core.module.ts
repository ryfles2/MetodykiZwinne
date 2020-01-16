import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomMaterialModule } from '../modules/custom-material/custom-material.module';
import { LockersService } from './http/lockers.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginDialogComponent } from '../modules/general/home/login-dialog/login-dialog.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  providers: [LockersService]
})
export class CoreModule { }
