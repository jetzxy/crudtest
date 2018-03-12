import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './main/table/table.component';
import { RouterModule, Routes} from '@angular/router';
import { ComplaintsService } from './global/complaints.service';
import { AddComponent } from './main/add/add.component';
import { UpdateComponent } from './main/update/update.component';

const appRoutes: Routes = [
  { path: "main", component: MainComponent },
  { path: "add" , component: AddComponent },
  { path: "update" , component: UpdateComponent },
  { path: "update/:id" , component: UpdateComponent },
  { path: '**', redirectTo: '/main', pathMatch: 'full'}
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    TableComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [ComplaintsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
