const {app,BrowserWindow,ipcMain,session,Menu}=require('electron');
const path=require('path'),fs=require('fs'),vm=require('vm');
const SAMPLES=()=>path.join(app.getPath('documents'),'slop~','Samples');
function inside(base,rel){const p=path.resolve(base,String(rel||''));const r=path.relative(base,p);
  if(r.startsWith('..')||path.isAbsolute(r))throw new Error('path escapes folder');return p}
const AUDIO=/\.(wav|aif|aiff|mp3|flac|ogg|m4a)$/i;
ipcMain.handle('samples:list',(e,rel)=>fs.readdirSync(inside(SAMPLES(),rel),{withFileTypes:true})
  .filter(d=>!d.name.startsWith('.')&&(d.isDirectory()||AUDIO.test(d.name)))
  .map(d=>({name:path.posix.join(String(rel||''),d.name),dir:d.isDirectory()})));
ipcMain.handle('samples:read',(e,rel)=>fs.readFileSync(inside(SAMPLES(),rel)));
ipcMain.handle('code:check',(e,code)=>{try{new vm.Script(String(code),{filename:'instrument.js'});return{ok:true}}
  catch(x){const m=/instrument\.js:(\d+)/.exec(x.stack||'');return{ok:false,line:m?+m[1]:null,message:x.message}}});
let w;
function makeWindow(){const n=new BrowserWindow({width:1100,height:800,webPreferences:{preload:path.join(__dirname,'preload.js'),
  contextIsolation:true,nodeIntegration:false,sandbox:true}});
  n.webContents.setWindowOpenHandler(()=>({action:'deny'}));
  n.webContents.on('render-process-gone',(e,d)=>console.log('RENDERER GONE',d.reason));
  n.webContents.on('did-fail-load',(e,c,desc)=>console.log('LOAD FAIL',c,desc));
  n.loadFile('index.html');return n}
app.whenReady().then(()=>{
  fs.mkdirSync(SAMPLES(),{recursive:true});
  session.defaultSession.setPermissionRequestHandler((wc,perm,cb,d)=>{console.log('REQUEST',perm,d&&d.requestingUrl);cb(perm.startsWith('midi'))});
  session.defaultSession.setPermissionCheckHandler((wc,perm,origin)=>{console.log('CHECK',perm,origin);return perm.startsWith('midi')});
  w=makeWindow();
  const kill=()=>{const old=w;w=makeWindow();old.destroy()};
  Menu.setApplicationMenu(Menu.buildFromTemplate([{role:'appMenu'},{role:'editMenu'},
    {label:'Audio',submenu:[{label:'Open fresh window, discard stuck one',accelerator:'CommandOrControl+Shift+K',click:kill}]}]));
});
app.on('window-all-closed',()=>app.quit());
