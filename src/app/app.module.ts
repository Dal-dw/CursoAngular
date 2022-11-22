import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BodyComponent } from './body/body.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [				AppComponent,
      MenuComponent,
      ToolbarComponent,
      BodyComponent,
      CardsComponent
   ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
