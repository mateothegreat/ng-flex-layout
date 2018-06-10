import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Camera } from '../cameras/camera';
import { CamerasService } from '../cameras/cameras.service';

@Injectable()
export class CamerasManageService {

    private camera: BehaviorSubject<Camera> = new BehaviorSubject<Camera>(new Camera());
    public camera$: Observable<Camera> = this.camera.asObservable();

    public constructor(private camerasService: CamerasService) {


    }

    public getCamera(cameraId: Number): void {

        this.camerasService.getById(cameraId).subscribe((camera: Camera) => {

            this.camera.next(camera);

        })

    }

}
