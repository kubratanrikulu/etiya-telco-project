import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTitleComponent } from './components/login/login-title/login-title.component';



@NgModule({
  declarations: [
    LoginTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    LoginTitleComponent
  ]
})
export class SharedModule { }
