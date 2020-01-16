import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatInputModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatListModule, MatIconModule, MatDialogModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgxSpinnerModule
  ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgxSpinnerModule
  ]
})
export class CustomMaterialModule { }
