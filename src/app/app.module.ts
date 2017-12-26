import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './components/banner/banner.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/container/header/header.component';
import { BodyComponent } from './components/container/body/body.component';
import { FooterComponent } from './components/container/footer/footer.component';
import { MenuComponent } from './components/container/header/menu/menu.component';
import { SliderComponent } from './components/container/body/slider/slider.component';
import { ItemOtoComponent } from './components/container/body/item-oto/item-oto.component';
import { BandoComponent } from './components/bando/bando.component';
import { BanggiaComponent } from './components/banggia/banggia.component';
import { ChitietComponent } from './components/chitiet/chitiet.component';
import { PagenotfoundComponent } from './components/other/pagenotfound/pagenotfound.component';


const routesConfig: Routes = [
  { path: 'bando', component: BandoComponent },
  { path: 'banggia', component: BanggiaComponent },
  { path: '', component: BodyComponent },
  { path: '**', component: PagenotfoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContainerComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    SliderComponent,
    ItemOtoComponent,
    BandoComponent,
    BanggiaComponent,
    ChitietComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyAU4HQAPlrvjuuxkMnxKb34blJp6df4i6Y'
    }),
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
