import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/views/app.component';
import { config } from './app/views/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
