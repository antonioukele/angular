import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

interface Pessoa{
  name: string
  birth_year: string
  created: string
  edited: string
  eye_color: string
  films: []
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  skin_color: string
  species: []
  starships: []
  url: string
  vehicles:string
}

interface Artigo{
  createdAt: string
  name: string
  avatar: string
  id: string
}

@Component({
  selector: 'app-news-br',
  templateUrl: './news-br.component.html',
  styleUrls: ['./news-br.component.css']
})




export class NewsBrComponent implements OnInit {
  constructor(private newsService: NewsService) { }
  pessoa: Pessoa[] = [];  
  artigos: Artigo[] = [];
  ngOnInit(): void {
    this.newsService.getPessoa().subscribe(
      (response) => {                           //next() callback
        console.log(response);
        this.artigos = response;
      },
      (error) => {
        console.log(error.status)
      }
    )
  this.newsService.adicionarProduto();
  }

  

}
