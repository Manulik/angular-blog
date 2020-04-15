import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "../../services/article/article.service";
import { AdminService } from '../../services/admin/admin.service';
import { IArticle } from '../../Interfaces/iarticle';
import { DomSanitizer } from "@angular/platform-browser";
import { FormControl, FormGroup, FormControlName, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private sanitized: DomSanitizer,
    private adminService: AdminService
    ) { }
  public id;
  public article;
  public articles;

  editForm = new FormGroup({
    title: new FormControl(''),
    imageUrl: new FormControl(''),
    time: new FormControl(),
    description: new FormControl(''),
    id: new FormControl(''),
    content: new FormControl(),
  });

  ngOnInit() {
    this.getArticle();
    this.role = this.adminService.getRole();
    if(this.role === 'admin') {
      this.adminRole = 'admin';
    }
  }
  editBtn:boolean;
  role:string;
  adminRole: string;

  activateForm() {
    this.editBtn = true;
    console.log(this.editBtn);
  }
  
  remove() {
    this.articles.splice(this.article, 1);
    console.log(this.articles);
    localStorage.setItem('todos', JSON.stringify(this.articles));
  }

  getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const articles = JSON.parse(localStorage.getItem('todos'));
    this.articles = articles;
    for (let article of articles) {
      if(article.id === id) {
        this.article = article;
        console.log(this.article);

        this.article.date = Math.floor((Date.parse(this.article.date) - Date.now()) / 86400000);
        console.log(this.article.date);
        if(this.article.date <= 0) {
          this.article.date = 'Published today';
        } else if(this.article.date === 1){
          this.article.date = 'Published yesterday';
        }
        else if(article.date > 0){
          this.article.date = 'published ' + this.article.date + ' days ago';
        }
        console.log(this.article.date);

        let content = document.querySelector('.content');
        content.innerHTML = this.article.content;
        this.editForm.patchValue({title: this.article.title,
                                  imageUrl: this.article.imageUrl,
                                  time: this.article.time,
                                  description: this.article.discription,
                                  id: this.article.id,
                                  content: this.article.content});
      }

    }
  }
  edit() {
    console.log(this.editForm.value);
    if(this.editForm.value !== this.article) {
      this.article.title = this.editForm.value.title;
      this.article.imageUrl = this.editForm.value.imageUrl;
      this.article.time = this.editForm.value.time;
      this.article.discription = this.editForm.value.description;
      this.article.id = this.editForm.value.id;
      // let content = document.querySelector('.content');
      // content.innerHTML = this.article.content;
      this.article.content = this.editForm.value.content;

    }
    console.log(this.articles);
    this.articles.splice(this.article, this.editForm.value);
    // this.articles.splice(this.article, this.val);
    localStorage.setItem('todos', JSON.stringify(this.articles));
    // console.log(this.articles[this.article]);
    // console.log(val.title);
  }
  

}
