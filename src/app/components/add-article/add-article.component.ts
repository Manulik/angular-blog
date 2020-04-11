import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormControlDirective } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ArticleService } from '../../services/article/article.service';
import { AdminService } from '../../services/admin/admin.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.sass']
})
export class AddArticleComponent implements OnInit {
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
    time: new FormControl(),
    discription: new FormControl(''),
    id: new FormControl(''),
    content: new FormControl(),
  })
  constructor(private articleService: ArticleService,
              private adminService: AdminService,
              private router: Router,
              private route: ActivatedRoute) { }
    articles
  ngOnInit() {
    this.articles = JSON.parse(localStorage.getItem('todos')) || [];
  }
  onSubmit() {
    console.warn(this.articleForm.value);
  }
  add() {
    console.log('disabled')
    if(this.articleForm.valid) {
      this.articleForm.controls['id'].setValue((this.articles.length + 1).toString());
      console.log(this.articleForm.value.id);
      this.articles.unshift(this.articleForm.value);
      console.log(this.articles);
      localStorage.setItem('todos', JSON.stringify(this.articles));
      this.articleForm.patchValue({title: '',
                                  imageUrl: '',
                                  time: '',
                                  discription: '',
                                  content: ''});
    }
  }
  logOut() {
    this.adminService.logOut();
    // window.location.reload();
  }
}
