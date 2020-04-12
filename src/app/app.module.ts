import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { InformationAboutAuthorComponent } from './components/information-about-author/information-about-author.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { EditBiographyComponent } from './components/edit-biography/edit-biography.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    AddArticleComponent,
    ArticleListComponent,
    LoginComponent,
    ArticleComponent,
    InformationAboutAuthorComponent,
    JwPaginationComponent,
    EditArticleComponent,
    EditBiographyComponent
  ],
  imports: [
    FroalaEditorModule.forRoot(),
     FroalaViewModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EditorModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
