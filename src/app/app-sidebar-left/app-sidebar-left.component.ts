import {Component} from '@angular/core';
import {AppSidebarLeftService} from './app-sidebar-left.service';

@Component({
    selector: 'app-sidebar-left',
    templateUrl: './app-sidebar-left.component.html',
    styleUrls: ['./app-sidebar-left.component.scss']
})
export class AppSidebarLeftComponent {

    public constructor(public sidebarLeftService: AppSidebarLeftService) {

    }

}
