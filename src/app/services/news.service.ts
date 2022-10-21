import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  
  getPessoa(): Observable<any> {
    return this.http.get('https://6352adf3a9f3f34c37465715.mockapi.io/artigo/');
  }

  adicionarProduto() {
    var produto = { id : "100", name : "Antonio", avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/96.jpg",crecreatedAt:"2022-10-20T15:19:52.508Z"};
  
    this.http.post('https://6352adf3a9f3f34c37465715.mockapi.io/artigo/', produto)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro);
                  }
                }
              );
  }
}

