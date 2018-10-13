import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmojisComponent } from './emojis/emojis.component';

import { HttpClientModule }    from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmojisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
