function OnToolboxClicked() {
        var pluginPath = objApp.GetPluginPathByScriptFileName("World.js");
        var fileName = pluginPath + "Toolbox.htm";
		//objWindow.ShowHtmlDialog("",fileName,750,700,"","");
		// left,top,right,bottom
		var rect = objWindow.GetToolButtonRect("main", "Toolbox");
        var arr = rect.split(',');
        objWindow.ShowSelectorWindow(fileName, arr[0], arr[3], 540, 360, "");
		//objWindow.ViewHtml(fileName,true);
}
function OnWorldClicked() {
        var pluginPath = objApp.GetPluginPathByScriptFileName("World.js");
        //var fileName = pluginPath + "World.htm";
		var fileName = pluginPath + "/welcomepage/index.html";
		objWindow.ViewHtml(fileName,true);
}
function OnCalendarClicked() {
        var pluginPath = objApp.GetPluginPathByScriptFileName("World.js");
        var fileName = pluginPath + "CalendarView.htm";
		objWindow.ViewHtml(fileName,true);
}
function OnZouCalendarClicked() {
		//objWindow.ViewHtml("http://cal.wiz.3eeweb.com/calendar.html",true);
		objWindow.ViewHtml("http://zzou.co.nf/calendar.html",true);
}

function InitWorld() {
    var pluginPath = objApp.GetPluginPathByScriptFileName("World.js");
    var languangeFileName = pluginPath + "plugin.ini";
    var bt_World = objApp.LoadStringFromFile(languangeFileName, "strWorld");
	//Add button for homepage
    objWindow.AddToolButton("main", "World", bt_World, "", "OnWorldClicked");
	//Show homepage at start
	//OnWorldClicked();
	var bt_strToolbox = objApp.LoadStringFromFile(languangeFileName, "strToolbox");
	//Add button for toolbox
	//objWindow.AddToolButton("main", "Toolbox", bt_strToolbox, "", "OnToolboxClicked");
	var bt_strCalendarView = objApp.LoadStringFromFile(languangeFileName, "strCalendarView");
	//Add button for CalendarView
	objWindow.AddToolButton("main", "CalendarView", bt_strCalendarView, "", "OnCalendarClicked");
	//Add button for Calendar
	var bt_ZouCalendar = objApp.LoadStringFromFile(languangeFileName, "strZouCalendar");
    //objWindow.AddToolButton("main", "ZouCalendar", bt_ZouCalendar, "", "OnZouCalendarClicked");
	//Add listener
	function myontabcreate(doc) {
		WizAlert("ontabcreate");
	}
	//eventsTabCreate.add(myontabcreate);
	function myonhtmldocumentcomplete(doc) {
		//WizAlert("onhtmldocumentcomplete");
	}
	//eventsHtmlDocumentComplete.add(myonhtmldocumentcomplete);
}
//
InitWorld();