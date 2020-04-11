import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { LoginComponent } from './components/login/login.component';
import { AdminOnlyGuard } from './guards/admin/admin-only.guard';
import { ArticleComponent } from './components/article/article.component';
import { InformationAboutAuthorComponent } from './components/information-about-author/information-about-author.component';
import { TestComponent } from './components/test/test.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AdminService } from './services/admin/admin.service';

const routes: Routes = [
  {
    path: 'add', component: AddArticleComponent, canActivate: [AdminOnlyGuard]
  },
  {
    path: 'test', component: TestComponent
  },
  {
    path:'', redirectTo:'/articles', pathMatch: 'full'
  },
  {
    path: 'about', component: InformationAboutAuthorComponent
  },
  {
    path: 'articles/:id', component: ArticleComponent
  },
  {
    path: 'articles/:id/edit', component: EditArticleComponent, canActivate: [AdminOnlyGuard]
  },
  {
    path: 'add/:id', component: AddArticleComponent
  },
  {
    path:'articles', component: ArticleListComponent
  },
  {
    path: 'admin', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
