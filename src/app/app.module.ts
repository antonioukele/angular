import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './pages/todo/todo.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsBrComponent } from './pages/news-br/news-br.component';
import { NewsUsComponent } from './pages/news-us/news-us.component';
import { StarWarsPeopleComponent } from './pages/star-wars-people/star-wars-people.component';
import { StarWarsStarshipsComponent } from './pages/star-wars-starships/star-wars-starships.component';
import { StarWarsPlanetsComponent } from './pages/star-wars-planets/star-wars-planets.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BreadcrumbsComponent,
    FooterComponent,
    TodoComponent,
    HomeComponent,
    NewsBrComponent,
    NewsUsComponent,
    StarWarsPeopleComponent,
    StarWarsStarshipsComponent,
    StarWarsPlanetsComponent,
    SobreComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
