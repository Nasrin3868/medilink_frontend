/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'flowbite';
// import { Modal } from 'flowbite'
// import type { ModalOptions, ModalInterface } from 'flowbite'


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
