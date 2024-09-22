
"use strict";

let ESCInfoItem = require('./ESCInfoItem.js');
let HilControls = require('./HilControls.js');
let ESCInfo = require('./ESCInfo.js');
let Mavlink = require('./Mavlink.js');
let RCOut = require('./RCOut.js');
let CommandCode = require('./CommandCode.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let ParamValue = require('./ParamValue.js');
let HilSensor = require('./HilSensor.js');
let RTCM = require('./RTCM.js');
let GPSRAW = require('./GPSRAW.js');
let Trajectory = require('./Trajectory.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let PositionTarget = require('./PositionTarget.js');
let MountControl = require('./MountControl.js');
let RTKBaseline = require('./RTKBaseline.js');
let RadioStatus = require('./RadioStatus.js');
let ESCStatus = require('./ESCStatus.js');
let LandingTarget = require('./LandingTarget.js');
let RCIn = require('./RCIn.js');
let Thrust = require('./Thrust.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let State = require('./State.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let ExtendedState = require('./ExtendedState.js');
let VehicleInfo = require('./VehicleInfo.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let LogData = require('./LogData.js');
let TerrainReport = require('./TerrainReport.js');
let SysStatus = require('./SysStatus.js');
let CellularStatus = require('./CellularStatus.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let VFR_HUD = require('./VFR_HUD.js');
let Param = require('./Param.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let DebugValue = require('./DebugValue.js');
let ActuatorControl = require('./ActuatorControl.js');
let StatusText = require('./StatusText.js');
let FileEntry = require('./FileEntry.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let Altitude = require('./Altitude.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let ManualControl = require('./ManualControl.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let Vibration = require('./Vibration.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let LogEntry = require('./LogEntry.js');
let Waypoint = require('./Waypoint.js');
let HomePosition = require('./HomePosition.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let GPSRTK = require('./GPSRTK.js');
let GPSINPUT = require('./GPSINPUT.js');
let HilGPS = require('./HilGPS.js');
let Tunnel = require('./Tunnel.js');
let WaypointList = require('./WaypointList.js');
let WaypointReached = require('./WaypointReached.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let BatteryStatus = require('./BatteryStatus.js');

module.exports = {
  ESCInfoItem: ESCInfoItem,
  HilControls: HilControls,
  ESCInfo: ESCInfo,
  Mavlink: Mavlink,
  RCOut: RCOut,
  CommandCode: CommandCode,
  GlobalPositionTarget: GlobalPositionTarget,
  ParamValue: ParamValue,
  HilSensor: HilSensor,
  RTCM: RTCM,
  GPSRAW: GPSRAW,
  Trajectory: Trajectory,
  ADSBVehicle: ADSBVehicle,
  EstimatorStatus: EstimatorStatus,
  OpticalFlowRad: OpticalFlowRad,
  ESCTelemetry: ESCTelemetry,
  PlayTuneV2: PlayTuneV2,
  PositionTarget: PositionTarget,
  MountControl: MountControl,
  RTKBaseline: RTKBaseline,
  RadioStatus: RadioStatus,
  ESCStatus: ESCStatus,
  LandingTarget: LandingTarget,
  RCIn: RCIn,
  Thrust: Thrust,
  OverrideRCIn: OverrideRCIn,
  AttitudeTarget: AttitudeTarget,
  State: State,
  ESCTelemetryItem: ESCTelemetryItem,
  ExtendedState: ExtendedState,
  VehicleInfo: VehicleInfo,
  HilActuatorControls: HilActuatorControls,
  WheelOdomStamped: WheelOdomStamped,
  LogData: LogData,
  TerrainReport: TerrainReport,
  SysStatus: SysStatus,
  CellularStatus: CellularStatus,
  CamIMUStamp: CamIMUStamp,
  HilStateQuaternion: HilStateQuaternion,
  VFR_HUD: VFR_HUD,
  Param: Param,
  CameraImageCaptured: CameraImageCaptured,
  DebugValue: DebugValue,
  ActuatorControl: ActuatorControl,
  StatusText: StatusText,
  FileEntry: FileEntry,
  MagnetometerReporter: MagnetometerReporter,
  Altitude: Altitude,
  OnboardComputerStatus: OnboardComputerStatus,
  ManualControl: ManualControl,
  TimesyncStatus: TimesyncStatus,
  Vibration: Vibration,
  ESCStatusItem: ESCStatusItem,
  LogEntry: LogEntry,
  Waypoint: Waypoint,
  HomePosition: HomePosition,
  NavControllerOutput: NavControllerOutput,
  GPSRTK: GPSRTK,
  GPSINPUT: GPSINPUT,
  HilGPS: HilGPS,
  Tunnel: Tunnel,
  WaypointList: WaypointList,
  WaypointReached: WaypointReached,
  CompanionProcessStatus: CompanionProcessStatus,
  BatteryStatus: BatteryStatus,
};
