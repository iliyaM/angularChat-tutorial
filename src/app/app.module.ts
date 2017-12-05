import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageContainer } from './components/message-container/message-container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SharedService } from './shared.service';
import { HomescreenComponent } from './components/homescreen/homescreen.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageContainer,
    SidebarComponent,
    HomescreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
