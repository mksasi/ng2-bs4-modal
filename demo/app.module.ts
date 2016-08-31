import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {ModalModule} from '../src/ng2-bs4-modal/ng2-bs4-modal';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule,
        routing
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
