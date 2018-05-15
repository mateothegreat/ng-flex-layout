import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'form-buttons',
    templateUrl: './app-form-buttons.component.html',
    styleUrls: ['./app-form-buttons.component.scss']
})
export class AppFormButtonsComponent {

    @Output() public onButtonBackClick: any = new EventEmitter();
    @Output() public onButtonSaveClick: any = new EventEmitter();
    @Output() public onButtonDeleteClick: any = new EventEmitter();

    @Input() public buttonBackHide: boolean;
    @Input() public buttonBackPath: string;
    @Input() public buttonBackLabel: string = '< Back';
    @Input() public buttonSaveHide: boolean;
    @Input() public buttonSaveLabel: string = 'Save Changes';
    @Input() public buttonDeleteHide: boolean;
    @Input() public buttonDeleteLabel: string = 'Delete';

    private _onButtonBackClick(): void {

        this.onButtonBackClick.emit();

    }

    private _onButtonDeleteClick(): void {

        this.onButtonDeleteClick.emit();

    }

    private _onButtonSaveClick(): void {

        this.onButtonSaveClick.emit();

    }

}
