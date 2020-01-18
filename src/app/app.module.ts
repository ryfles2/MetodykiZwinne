import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GeneralModule } from './modules/general/general.module';
import { ErrorModule } from './modules/error/error.module';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { LockersService } from './core/http/lockers.service';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    GeneralModule,
    ErrorModule,
    AdminModule,
    CustomMaterialModule
  ],
  providers: [LockersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
