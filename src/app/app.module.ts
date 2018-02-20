import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms"


import { AppComponent } from './app.component';
import {SearchComponent} from "./search/search.component";
import {CreateComponent} from "./create/create.component";

const appRoutes: Routes = [
  {path:'', component: SearchComponent},
  {path:'nuevo', component: CreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
