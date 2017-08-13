//Format Date
function formatInt(val) {
	if (val < 10)
		return "0" + val;
	else
		return "" + val;
}

function DateToStr(dt) {
	return "" + dt.getFullYear() + "-" + formatInt(dt.getMonth() + 1) + "-" + formatInt(dt.getDate());
}

//Clean Title
function cleanTitle(objDoc)
{
	if (objDoc==null)
			return;
	else
	{	
		var str = objDoc.Title;
		objDoc.Title=objDoc.Title.replace(/\[.*\]/,"");
		var reg = /http:\/\/[^\s]+/;
		var url = objDoc.Title.match(reg);
		//var reg=new RegExp('',"gmi");
		if (url) {
			objWindow.ShowMessage(url[0],"The World",  0x40);
			objDoc.URL = url[0];
			objDoc.Title=objDoc.Title.replace(reg,"");
		}
		
	}
}

//Add user-defined journal date properties 		
function journaldate(objDoc){
	var param_e = objDoc.Params;
	if (objDoc.Type == "journal") {
		if(!objDoc.ParamValue("journal-date")){
			var title = objDoc.Title;
			title = title.split(" ")[0];
			var reg = /[\u4E00-\u9FA5\uf900-\ufa2d]/;
			a = title.split(reg);
			if (a.length == 3){
				var year = formatInt(parseInt(a[0], 10));
				var month = formatInt(parseInt(a[1], 10));
				var day = formatInt(parseInt(a[2], 10));
				var date = "" + year + "-" + month + "-" + day + " 00:00:00";
				objDoc.SetParamValue("journal-date", date);
			}
		}
	}
}

function docInfo(objDoc){
	var param = new Array();
	for (key in objDoc){
		param.push(key + ":  " + objDoc[key]);
		//objWindow.ShowMessage(key + ":  " + objDoc[key],"The World",  0x40);
	}
	var param = ["Title: " + objDoc.Title, "GUID: " + objDoc.GUID, "Author: " + objDoc.Author, "Keywords: " + objDoc.Keywords, "Tags: " + objDoc.Tags, "Location: " + objDoc.Location, "FileName: " + objDoc.FileName, "Url: " + objDoc.URL, "Type: " + objDoc.Type, "Owner: " + objDoc.Owner, "FileType: " + objDoc.FileType, "Style: " + objDoc.Style, "ReadCount: " + objDoc.ReadCount, "DateCreated: " + objDoc.DateCreated, "DateModified: " + objDoc.DateModified, "name: " + objDoc.Title];
	//User-defined properties
	var parame = new Array();
	for (j=0;j<objDoc.Params.count;j++){
		parame.push(objDoc.Params.Item(j).Name + ": " + objDoc.Params.Item(j).Value);
	}

	//Show properties
	var properties = "Basic Properties: "+"\n"+param.join("; \n")+"\n"+"Custom Properties: "+"\n"+parame.join("; \n")+"\n"+"Tags: "+ objDoc.TagsText + "\n";
	objWindow.ShowMessage(properties,"The world is changing",  0x40);
	//objCommon.CopyTextToClipboard(properties);
	if (objDoc.Type == 'event') {
		objCommon.EditCalendarEvent(objDoc);
		//objWindow.ShowMessage(objDoc.event.Title+'\n'+objDoc.event.Guid+'\nStart:'+objDoc.event.Start+'\nEnd:'+objDoc.event.End+'\nColor:'+objDoc.event.Color+'\nReminder:'+objDoc.event.Reminder+'\nCompleted:'+objDoc.event.Completed+'\nRecurrence:'+objDoc.event.Recurrence+'\nEndRecurrence:'+objDoc.event.EndRecurrence+'\nRecurrenceIndex:'+objDoc.event.RecurrenceIndex,'Calendar Info', 0x40);
		//objWindow.ShowMessage(objDoc.Params.count,"The world is changing",  0x40);
		/*if (objDoc.Params.count==0){
			//Add to calendar
			var dateobj = new Date(objDoc.DateCreated);
			var dateString = DateToStr(dateobj);
			//objWindow.ShowMessage(dateString,"The world is changing",  0x40);
			var dtStart = dateString + " 00:00:00";
			var dtEnd = dateString + " 23:59:59";
			var nSeconds = -1;
			var bCompleted = 1;
			//var bstrExtInfo = "/b=D5F8DD/r=" + nSeconds + "/c=" + bCompleted;
			var bstrExtInfo = "/b=00FF00/r=" + nSeconds + "/c=" + bCompleted;
			//objDoc.AddToCalendar(dtStart, dtEnd, bstrExtInfo);
			var bstrRecurrence = '-1';
			var bstrEndRecurrence = '';
			objDoc.AddToCalendar2(dtStart, dtEnd, bstrRecurrence, bstrEndRecurrence, bstrExtInfo); 
		}*/
		//objDoc.BeginUpdateParams();
	}
	
	//****Change Document property to "event"
	//objDoc.Type = 'event';
	//objDoc.FileType = '';
	//****Delete Url
	//objDoc.URL = '';
	//Modify date
	//objDoc.DateCreated="2014-11-21 23:45:00";
	//objDoc.DateModified="2012-11-04 21:45:00";
	//cleanTitle(objDoc);
}

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

//var objSettings = objApp.CreateWizObject("WizKMCore.WizSettings");
//objSettings.Open(objApp.SettingsFileName);
//objSettings.Close();

var pluginPath = objApp.GetPluginPathByScriptFileName("World.js");
var filename = pluginPath + "world.js";
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var objWindow = objApp.Window;
//var temp = objCommon.GetSpecialFolder('TemporaryFolder');
//var objHtmlDocument = objApp.Window.CurrentDocumentHtmlDocument;
//get the current html document object (IHTMLDocument2)
//objCommon.CopyTextToClipboard(objHtmlDocument.URL);
//objApp.Window.ViewHtml("http://wiz.zhyzou.3eeweb.com/calendar.html",true);
var documents = objApp.Window.DocumentsCtrl.SelectedDocuments;
for (var i = 0; i < documents.Count; i++) {
	var objDoc = documents.Item(i);
	docInfo(objDoc);
}