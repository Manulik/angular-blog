import { Injectable } from '@angular/core';
import { IArticle } from '../../Interfaces/iarticle';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles;
  constructor(private http: HttpClient) {}

  articleSource$ = new BehaviorSubject(this.articles);

  public getArticles(){
    return this.http.post('/api/articles', {})
    // return this.articles;
  }
  public getArticlesById(id){
    // return this.articles.filter((article) => article.id === id)[0];
    return this.http.post('/api/getArticleById', {id: id});
  }
  public getArticle(id:number) {
    this.articles = localStorage.getItem('todos');
    return of(this.articles.find(article => article.id === id));
  }
}
