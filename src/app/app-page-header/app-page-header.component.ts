import {Component} from '@angular/core';
import {AppPageHeaderService} from './app-page-header.service';

@Component({
    selector: 'app-page-header',
    templateUrl: './app-page-header.component.html',
    styleUrls: ['./app-page-header.component.scss']
})
export class AppPageHeaderComponent {

    public constructor(public pageHeaderService: AppPageHeaderService) {
    }

}
