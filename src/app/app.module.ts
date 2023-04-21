import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeroBannerComponent } from './component/hero-banner/hero-banner.component';
import { MatIconModule } from '@angular/material/icon';
import { ShortcutComponent } from './component/shortcut/shortcut.component';
import { ProductPlanComponent } from './component/product-plan/product-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroBannerComponent,
    ShortcutComponent,
    ProductPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
