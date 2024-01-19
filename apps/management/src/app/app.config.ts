import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {reducers,metaReducers} from './shared-components/theme/theme.state';
import { ModalService} from '../app/services/modal-services/modal.services'
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
    provideStore(reducers,{metaReducers}),
    ModalService],
  
};
