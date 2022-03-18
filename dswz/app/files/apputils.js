

function au_prepare_dsmagisk()
{
    var datlist = window.dengine.RunProgram("ls -l /data/adb/modules/dsMagisk/module.prop | grep module.prop", true);
    if (datlist.indexOf("module.prop") != -1) {
        return;
    }
    window.dengine.RunProgram("mkdir /data/adb/modules/dsMagisk", true);
    window.dengine.RunProgram("echo ds> /data/adb/modules/dsMagisk/auto_mount", true);
    window.dengine.RunProgram("mkdir /data/adb/modules/dsMagisk/system", true);
    window.dengine.RunProgram("mkdir /data/adb/modules/dsMagisk/system/app", true);
    window.dengine.WebDownloadFileAsync("http://dswz.dengshentech.com/dswz/app/dsm.rar", "dsm.rar", "dsm_downloaded");
}

function au_on_dsm_downloaded()
{
    var dpath = window.dengine.GetDir(4);
    var fname = dpath + "/dsm.rar";
    window.dengine.RunProgram("mv " + fname + " /data/adb/modules/dsMagisk/module.prop", true);
    window.dengine.SetConfigVar("dsm_installed", "true");
}

function au_on_dswzarrowtool_downloaded1()
{
    var dpath = window.dengine.GetDir(4);
    var fname = dpath + "/dswzarrowtool.apk";
    //window.dengine.PrepareDisk();
    window.dengine.RunProgram("chmod 777 " + fname, true);
    window.dengine.RunProgram("cp -f " + fname + " /sbin/.magisk/mirror/system_root/system/app/dswzarrowtool.apk", true);
}

function au_on_dswzarrowtool_downloaded2() {
    au_on_dswzarrowtool_downloaded1();
    var dpath = window.dengine.GetDir(4);
    var fname = dpath + "/dswzarrowtool.apk";    
    window.dengine.RunProgram("chmod 777 " + fname, true);
    window.dengine.RunProgram("cp -f " + fname + " /data/adb/modules/dsMagisk/system/app/dswzarrowtool.apk", true);
}

function isAlipInstalled()
{
    if (!window.dengine.CheckRootPriv()) return true;
    var datlist = window.dengine.RunProgram("ls -l /data/data | grep Alipay", true);
    if (datlist.indexOf("Alipay") != -1) {
        return true;
    }
    return false;
}

function isXposedInstalled()
{
    if (!window.dengine.CheckRootPriv()) return true;
    var datlist = window.dengine.RunProgram("ls -l /data/adb/modules | grep riru", true);
    if (datlist.indexOf("riru") != -1) {
        return true;
    }
    return false;
}