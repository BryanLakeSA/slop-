const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('slopHost',{
  listSamples:rel=>ipcRenderer.invoke('samples:list',rel),
  readSample:rel=>ipcRenderer.invoke('samples:read',rel),
  checkCode:code=>ipcRenderer.invoke('code:check',code)});
