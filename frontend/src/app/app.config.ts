import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './services/food.service';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),HttpClientModule]
};
