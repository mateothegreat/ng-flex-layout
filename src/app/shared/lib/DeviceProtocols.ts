import { DeviceProtocol } from './DeviceProtocol';

export class DeviceProtocols {

    public static readonly PROTOCOL_HTTP: DeviceProtocol = new DeviceProtocol('HTTP', 'Protocol HTTP.', 80);
    public static readonly PROTOCOL_HTTPS: DeviceProtocol = new DeviceProtocol('HTTP', 'Protocol HTTPs.', 443);
    public static readonly PROTOCOL_RTSP: DeviceProtocol = new DeviceProtocol('RTSP', 'Protocol for connecting to a camera stream over RTSP.', 1935);
    public static readonly PROTOCOL_RTMP: DeviceProtocol = new DeviceProtocol('RTMP', 'Protocol for connecting to a camera stream over RTMP.', 554);

    public static readonly PROTOCOLS: DeviceProtocol[] = [

        DeviceProtocols.PROTOCOL_HTTP,
        DeviceProtocols.PROTOCOL_HTTPS,
        DeviceProtocols.PROTOCOL_RTSP,
        DeviceProtocols.PROTOCOL_RTMP,

    ];

}
