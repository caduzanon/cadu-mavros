
"use strict";

let FileClose = require('./FileClose.js')
let FileChecksum = require('./FileChecksum.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let CommandTOL = require('./CommandTOL.js')
let SetMavFrame = require('./SetMavFrame.js')
let StreamRate = require('./StreamRate.js')
let FileWrite = require('./FileWrite.js')
let CommandBool = require('./CommandBool.js')
let FileMakeDir = require('./FileMakeDir.js')
let WaypointPush = require('./WaypointPush.js')
let ParamSet = require('./ParamSet.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let ParamPush = require('./ParamPush.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let FileRemove = require('./FileRemove.js')
let LogRequestData = require('./LogRequestData.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let FileList = require('./FileList.js')
let MessageInterval = require('./MessageInterval.js')
let CommandLong = require('./CommandLong.js')
let CommandHome = require('./CommandHome.js')
let FileRead = require('./FileRead.js')
let SetMode = require('./SetMode.js')
let FileTruncate = require('./FileTruncate.js')
let FileRename = require('./FileRename.js')
let MountConfigure = require('./MountConfigure.js')
let ParamGet = require('./ParamGet.js')
let WaypointPull = require('./WaypointPull.js')
let FileOpen = require('./FileOpen.js')
let ParamPull = require('./ParamPull.js')
let LogRequestList = require('./LogRequestList.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let WaypointClear = require('./WaypointClear.js')
let CommandAck = require('./CommandAck.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let CommandInt = require('./CommandInt.js')

module.exports = {
  FileClose: FileClose,
  FileChecksum: FileChecksum,
  FileRemoveDir: FileRemoveDir,
  CommandTOL: CommandTOL,
  SetMavFrame: SetMavFrame,
  StreamRate: StreamRate,
  FileWrite: FileWrite,
  CommandBool: CommandBool,
  FileMakeDir: FileMakeDir,
  WaypointPush: WaypointPush,
  ParamSet: ParamSet,
  CommandTriggerInterval: CommandTriggerInterval,
  ParamPush: ParamPush,
  VehicleInfoGet: VehicleInfoGet,
  FileRemove: FileRemove,
  LogRequestData: LogRequestData,
  CommandVtolTransition: CommandVtolTransition,
  FileList: FileList,
  MessageInterval: MessageInterval,
  CommandLong: CommandLong,
  CommandHome: CommandHome,
  FileRead: FileRead,
  SetMode: SetMode,
  FileTruncate: FileTruncate,
  FileRename: FileRename,
  MountConfigure: MountConfigure,
  ParamGet: ParamGet,
  WaypointPull: WaypointPull,
  FileOpen: FileOpen,
  ParamPull: ParamPull,
  LogRequestList: LogRequestList,
  LogRequestEnd: LogRequestEnd,
  CommandTriggerControl: CommandTriggerControl,
  WaypointClear: WaypointClear,
  CommandAck: CommandAck,
  WaypointSetCurrent: WaypointSetCurrent,
  CommandInt: CommandInt,
};
