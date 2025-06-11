// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { provideAnimations } from '@angular/platform-browser/animations';

export function playerFactory() {
  return player;
}

bootstrapApplication(AppComponent, {
  
  providers: [
    provideRouter(routes),  provideAnimations(),
    provideLottieOptions({
      player: playerFactory
    }),
  
  
  ]
});
