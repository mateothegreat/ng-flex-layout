import {Component} from '@angular/core';
import {AppSidebarLeftService} from './app-sidebar-left/app-sidebar-left.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public constructor(private sidebarLeftService: AppSidebarLeftService) {

        sidebarLeftService.headerIcon = 'business';
        sidebarLeftService.headerTitle = 'Settings';

    }

}
