import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule,
         MdCardModule, MdInputModule,
         MdProgressSpinnerModule, MdSidenavModule,
         MdIconModule, MdListModule,
         MdDialogModule } from '@angular/material';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CcawComponent } from './projects/ccaw/ccaw.component';
import { ShelleyComponent } from './projects/shelley/shelley.component';
import { ThisAppComponent } from './projects/this-app/this-app.component';

import { CarouselComponent } from './shared/carousel/carousel.component';

import { TransitionService } from './shared/transition.service';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    HomeComponent,
    PortfolioComponent,
    CcawComponent,
    ShelleyComponent,
    ThisAppComponent,
    CarouselComponent, PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MdToolbarModule, MdButtonModule,
    MdCardModule, MdInputModule,
    MdProgressSpinnerModule, MdSidenavModule,
    MdIconModule, MdListModule, MdDialogModule
  ],
  providers: [ TransitionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
