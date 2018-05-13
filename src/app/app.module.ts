import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MaterialModule} from './shared/MaterialModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({

    declarations: [

        AppComponent,

        PageHeaderComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,

        MaterialModule

    ],

    providers: [],

    bootstrap: [AppComponent]

})
export class AppModule {
}
