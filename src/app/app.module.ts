import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent,DialogDataExampleDialog} from './header/header.component';
import { ServiceService } from './service.service';
  import { HomepageComponent} from './homepage/homepage.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    GallerypageComponent,
     
    DialogDataExampleDialog,
    AboutpageComponent,
    FooterComponent
  ],
  imports: [
    SlickCarouselModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    NguCarouselModule,
    MatDialogModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  entryComponents:[DialogDataExampleDialog]
})
export class AppModule { }
