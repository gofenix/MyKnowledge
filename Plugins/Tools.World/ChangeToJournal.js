var objApp = WizExplorerApp;
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
//
var objDatabase = objApp.Database;
//

var appGUID = objApp.CurPluginAppGUID;
//

function jsAlert(msg) {
    objApp.Window.ShowMessage(msg, "{p}", 0x00000040);
}
//��ʽ������
function formatInt(val) {
	if (val < 10)
		return "0" + val;
	else
		return "" + val;
}
//
function DateToStr(dt) {
	return "" + dt.getFullYear() + "-" + formatInt(dt.getMonth() + 1) + "-" + formatInt(dt.getDate());
}
//Date()��ʽת�������� 2012��06��17�ո�ʽ
function DateToCStr(dt) {
	return "" + dt.getFullYear() + "��" + formatInt(dt.getMonth() + 1) + "��" + formatInt(dt.getDate()) + "��";
}
//��Date()�����ʽ���� 2010��01��01�� 12:11:11������ʽ
function DateToCString(dt) {
	return formatInt(dt.getFullYear()) + "��"
	+ formatInt(dt.getMonth() + 1) + "��"
	+ formatInt(dt.getDate()) + "�� "
	+ formatInt(dt.getHours()) + ":"
	+ formatInt(dt.getMinutes()) + ":"
	+ formatInt(dt.getSeconds());
}		

function ChangeDocuments(documents) {
    try {
        var objProgress = objApp.CreateWizObject("WizKMControls.WizProgressWindow");
        objProgress.Title = objApp.LoadPluginString(appGUID, "strChanging");
        objProgress.Max = documents.Count;
        objProgress.Show();
        //
        try {
            for (var i = 0; i < documents.Count; i++) {
                var objDoc = documents.Item(i);
                objProgress.Text = objDoc.Title;
                //
				var htmltext = objDoc.GetHtml();

                var date = null;
                date = new Date(objDoc.DateCreated);
                //var date_string = date.toLocaleDateString();
				var date_string = DateToCString(date);
                //
                var title = DateToCStr(date) + " " + objDoc.Title;
                //
				objDoc.Type = "journal";
                var location = "/My Journals/" + date.getFullYear() + "-" + formatInt(date.getMonth() + 1) + "/";
                //
                var objFolder = objDatabase.GetFolderByLocation(location, true);
                
                if (objDoc.Location != location) {
                    objDoc.MoveTo(objFolder);
                }
                objDoc.ChangeTitleAndFileName(title);
                //objDoc.ParamValue("journal-date") = DateToStr(date) + " 00:00:00";
				objDoc.SetParamValue('journal-date', DateToStr(date) + " 00:00:00");
				
				//<body style="" contenteditable="true">
				
				var journalInfo = "<b> %date% &nbsp;&nbsp;&nbsp; %weather% </b><br>";

				//<BODY>
				var htmltext = objDoc.GetHtml();
				var regbody = /<body(.*)>/i;
				htmltext = htmltext.replace(regbody, "<body " + "$1" + ">" + journalInfo);
                htmltext = htmltext.replace("%date%", date_string);
                htmltext = htmltext.replace("%weather%", "Clear");
				
                objDoc.UpdateDocument3(htmltext, 0);

                var params = "/DatabasePath=" + objDatabase.DatabasePath + " /KbGUID=" + objDatabase.KbGUID + " /DocumentGUID=" + objDoc.GUID;
                objApp.Window.ExecCommand("locatedocument", params);
                objProgress.Pos = i + 1;
            }
        }
        finally {
            objProgress.Hide();
            objProgress.Destroy();
        }
    }
    catch (err) {
    }
}

function init() {
    var documents = objApp.Window.DocumentsCtrl.SelectedDocuments;
    if (documents == null || documents.Count == 0) {
        var msg = objApp.LoadPluginString(appGUID, "strNoDocumentsSelected");
        jsAlert(msg);
        return;
    }
    //
    ChangeDocuments(documents);
}

init();
