import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PromptAreaComponent } from './prompt-area/prompt-area.component';
import { PromptComponent } from './prompt/prompt.component';
import { PromptsJsonServiceService } from 'src/prompts-json-service.service';

const appInitFn = (promptService: PromptsJsonServiceService) => {
  return() => {
    return promptService.readData();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PromptAreaComponent,
    PromptComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    PromptsJsonServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFn,
      multi: true,
      deps: [PromptsJsonServiceService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
