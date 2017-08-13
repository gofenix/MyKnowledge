//
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
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var objWindow = objApp.Window;

function DateTillNow(date0){
	var todayDate = new Date();
	//var date1 = new Date("11-21-1989");
	var date1 = new Date(date0);
	//objWindow.ShowMessage("Today is " + (todayDate.getMonth()+1) + '-' + todayDate.getDate() + '-' + todayDate.getFullYear(),"The world is changing",  0x40);
	var date2 = new Date((todayDate.getMonth()+1) + '-' + todayDate.getDate() + '-' + todayDate.getFullYear());
	var life = Math.round((date2-date1)/1000/60/60/24);
	if (life < 0) life = (-1)*life;
	return life;
}
var objWindow = objApp.Window;
//
objWindow.ShowMessage('Your are in the world for ' + DateTillNow("11-21-1989") + ' Days',"The world is changing",  0x40);
//objWindow.ShowMessage('Fall in love for ' + DateTillNow("5-31-2011") + 'Days',"The world is changing",  0x40);
