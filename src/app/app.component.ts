import { Component } from '@angular/core';
import { AppSidebarLeftService } from './app-sidebar-left/app-sidebar-left.service';
import { SessionService } from './shared/lib/SessionService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public constructor(private sidebarLeftService: AppSidebarLeftService,
                       public sessionService: SessionService) {

        sidebarLeftService.headerIcon = 'business';
        sidebarLeftService.headerTitle = 'Settings';

    }

}
