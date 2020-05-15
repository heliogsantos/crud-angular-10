import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/tamplate/header/header.component';
import { FooterComponent } from './components/tamplate/footer/footer.component';
import { NavComponent } from './components/tamplate/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    [RouterModule.forRoot(routes)]
  ], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [RouterModule],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}