
function WizOnRecommentButtonClicked() {
    var pluginPath = objApp.GetPluginPathByScriptFileName("WizRecomment.js");
    var bookmarksListHtmlFileName = pluginPath + "Recomment.htm";
    //
    var rect = objWindow.GetToolButtonRect("document", "RecommentButton");
    var arr = rect.split(',');
    objWindow.ShowSelectorWindow(bookmarksListHtmlFileName, (parseInt(arr[0]) + parseInt(arr[2])) / 2, arr[3], 300, 500, "");
}
function WizInitRecommentButton() {
    var pluginPath = objApp.GetPluginPathByScriptFileName("WizRecomment.js");
    var languangeFileName = pluginPath + "plugin.ini";
    var buttonText = objApp.LoadStringFromFile(languangeFileName, "strRecomment");
    objWindow.AddToolButton("document", "RecommentButton", buttonText, pluginPath + "Recomment.ico", "WizOnRecommentButtonClicked");
}

WizInitRecommentButton();
