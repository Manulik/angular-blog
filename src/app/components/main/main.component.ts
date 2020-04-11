import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { IArticle } from '../../Interfaces/iarticle';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  date = Date.now();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

}
