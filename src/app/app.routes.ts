import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'add', component: ProductAddComponent },
    { path: 'edit/:id', component: ProductEditComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];
