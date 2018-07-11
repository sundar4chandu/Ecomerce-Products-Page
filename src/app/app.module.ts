import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [DataService,HttpClientModule, HttpClient, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
