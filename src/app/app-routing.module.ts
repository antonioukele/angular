import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsBrComponent } from './pages/news-br/news-br.component';
import { NewsUsComponent } from './pages/news-us/news-us.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
{path: 'todo', component: TodoComponent},
{path: 'news-br', component: NewsBrComponent},
{path: 'news-ur', component: NewsUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
