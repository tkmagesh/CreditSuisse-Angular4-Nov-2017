import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { MathCalculator1Component } from './calculator/mathCalculator1.component';
import { MathCalculator2Component } from './calculator/mathCalculator2.component';


@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , MathCalculator1Component
    , MathCalculator2Component
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
