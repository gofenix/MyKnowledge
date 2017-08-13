var objApp = null;
var objDatabase = null;
try {
	objApp = external;
	objDatabase = objApp.Database;
}
catch (err) {
	objApp = new ActiveXObject("Wiz.WizExplorerApp");
	objDatabase = objApp.Database;
}

var pluginPath = objApp.GetPluginPathByScriptFileName("World.js");
var filename = pluginPath + "world.js";
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var objWindow = objApp.Window;

var objProgress = objApp.CreateWizObject("WizKMControls.WizProgressWindow");
var objDatabase = objApp.Database;

//var documents = objApp.Window.DocumentsCtrl.SelectedDocuments;
var sql_str = "DOCUMENT_GUID='70b78b79-f5ad-4271-8321-aa833bce1620'";
var documents = objDatabase.DocumentsFromSQL(sql_str);
if (documents == null)
	return null;
if (documents.Count == 0)
	return null;
	
objProgress.Max = documents.Count;

if (documents.Count) {
	objWindow.ShowMessage("File Number is :" + documents.Count,"The world is changing",  0x40);
	for (var i = 0; i < documents.Count; i++) {
		var objDoc = documents.Item(i);
		updateAttachment(objDoc);
		objProgress.Pos = i + 1;
	}
}

//
function updateAttachment(objDoc){
	if (objDoc==null)
		return;
	else
	{	var filename = "F:\\Tools\\KeePass\\zhyzou.kdbx";
		var Attachments = objDoc.Attachments;
		//var reg = /[^\\\/]*[\\\/]+/g;
		//var filename_withoutpath = filename.replace(reg,'');
		//var filetype=objAttachment.FileName.replace(reg,'').split(".")[1];
		
		if (Attachments.Count > 4) {
			var oldfile = Attachments.Item(0);
			//objWindow.ShowMessage(objAttachment.GUID,"The world is changing",  0x40);
			for (var j = 1; j < Attachments.Count; j++) {
				if(Attachments.Item(j).DataDateModified.getTime()<oldfile.DataDateModified.getTime()) {
					oldfile = Attachments.Item(j);
				}
			}
			oldfile.Delete();
			Attachments = objDoc.Attachments;
		}
		
		objDoc.AddAttachment(filename);
		//objWindow.ShowMessage("Attachments added successfully","The world is changing",  0x40);
		
		//var files = objCommon.EnumFiles(objDoc.AttachmentsFilePath, "*.*", true);    //files is a safe array
		//var localFiles = new VBArray(files).toArray();    //Convert to javascript Array
	}
}
