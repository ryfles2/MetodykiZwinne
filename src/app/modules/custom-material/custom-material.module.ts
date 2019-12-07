import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatInputModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatListModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



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
    MatIconModule
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
    MatIconModule
  ]
})
export class CustomMaterialModule { }
