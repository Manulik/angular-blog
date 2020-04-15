import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { IArticle } from '../../Interfaces/iarticle';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {

  articles: Array<any>;
  id;
  res;
  pageOfItems: Array<any>;

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location) { }

  ngOnInit() {
    this.res = JSON.parse(localStorage.getItem('todos')) || [];
    this.articles = this.res;
    console.log(this.articles);

    for (let article of this.articles) {
        article.date = Math.floor((Date.parse(article.date) - Date.now()) / 86400000);
        if(article.date <= 0) {
          article.date = 'Published today';
        } else if(article.date === 1){
          article.date = 'Published yesterday';
        } 
        else if(article.date > 0){
          article.date = 'Published' + article.date + 'days ago';
        }
        console.log(article.date);
    }
    }
  onItemClick() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

}
