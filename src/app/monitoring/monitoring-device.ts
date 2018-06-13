import { Organization } from '../settings-organizations/Organization';
import { Statuses } from '../shared/lib/Statuses';

export class MonitoringDevice {

    public organization: Organization;
    public id: Number;

    public name: String;
    public description: String;

    public static: Statuses

}
