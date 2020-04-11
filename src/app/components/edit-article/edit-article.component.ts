import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormControlDirective } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';



@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.sass']
})
export class EditArticleComponent implements OnInit {

  editForm = new FormGroup({
    title: new FormControl(''),
    imageUrl: new FormControl(''),
    time: new FormControl(),
    description: new FormControl(''),
    id: new FormControl(''),
    content: new FormControl(),
  });
  public article;
  public articles;

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getArticle();

  }
  getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const articles = JSON.parse(localStorage.getItem('todos'));
    this.articles = articles;
    for (let article of articles) {
      if(article.id === id) {
        this.article = article;
        console.log(this.article);
        // this.sanitized.bypassSecurityTrustHtml(article.content);
        // console.log(article.content);
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
  back(){
    this.location.back();
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
