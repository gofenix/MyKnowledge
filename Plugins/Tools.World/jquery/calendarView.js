var objApp = window.external;
//objApp = new ActiveXObject("Wiz.WizExplorerApp");
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var objSettings = objApp.CreateWizObject("WizKMCore.WizSettings");
var objDatabase = objApp.Database;
objSettings.Open(objApp.SettingsFileName);
//var appGUID = objApp.GetPluginAppGUID(document);
//本地化当前文档
objApp.PluginLocalizeHtmlDialog(WizChromeBrowser);

var objWindow = objApp.Window;
var pluginFileName = objApp.GetHtmlDocumentPath(document) + "Plugin.ini";

//设置标题
function setTitle(titlestr){
	document.title = titlestr;
}

//数字格式化
function formatInt(val) {
	if (val < 10)
		return "0" + val;
	else
		return "" + val;
}
function _removeStrPx(str){
	if (!str)
		return;
	if (str.indexOf("px") != -1){
		str = str.replace("px", "");
	}
	return Number(str);
}
//var width = _removeStrPx($(this).css("width"));

//转到固定长度的十六进制字符串，不够则补0(RGB-BGR)
function zero_fill_hex(num, digits) {
	if (num) {
	  var s = num.toString(16);
	  while (s.length < digits)
		s = "0" + s;
		s = s.substring(4,6) + s.substring(2,4) + s.substring(0,2);
	  return s;
    }
	else return "FF33FF";
}

//去除日期字符串
function removeDate(str) {
	if (!str)
	return "";
	return str.replace(/20[\s\S]*?\s/gi, "");
}
//日期格式
function strToDate(str) {
	var time = str.split(" ")[1].split(":");
	str = str.split(" ")[0];
	var a = str.split('-');
	if (a.length != 3)
		return null;
	//
	var year = parseInt(a[0], 10);
	var month = parseInt(a[1], 10);
	var day = parseInt(a[2], 10);
	var hour = time[0];
	var min = time[1];
	var sec = time[2];
	//
	var ret = new Date();
	ret.setFullYear(year, month - 1, day);
	ret.setHours(hour);
	ret.setMinutes(min);
	ret.setSeconds(sec);
	return ret;
}
//将Date()对象格式化成 2010-01-01 12:11:11这种形式
function dateToString(dt) {
	return dt.format('YYYY-MM-DD hh:mm:ss');
}

function wizGetChineseDate(date){
	var objChineseCal = new ChineseCalendar(date);
	var chineseStr = objChineseCal.solarDay2();
	var ret = '';
	// if (String.locale.toLowerCase() == "zh-cn"){
		if (objChineseCal.solarDay4().length > 0){
			ret = ' ' + objChineseCal.solarDay4();

		}else if(chineseStr.indexOf('初一') != -1){
			ret = ' ' + chineseStr.substr(2, chineseStr.indexOf('初一') - 2);
		}else {
			ret = ' ' + chineseStr.substr(chineseStr.indexOf('月') + 1);
		}
	// }
	return ret;
}

function ViewDoc(doc_guid) {
	var doc = objDatabase.DocumentFromGUID(doc_guid);
	if (doc != null) {
		objApp.Window.ViewDocument(doc, true);
		//var pluginPath = objApp.GetPluginPathByScriptFileName("World.js");
		//var htmlDialogFileName = pluginPath + "viewDocument.htm";
		//var dialogInitParam = doc;
		//var ret = objApp.Window.ShowHtmlDialog(doc.title, htmlDialogFileName, 800, 600, "", dialogInitParam);
		//var html_file_name = objCommon.GetATempFileName("htm");
		//doc.SaveToHtml(html_file_name, 0);
		//objApp.Window.ShowHtmlDialog(doc.title, html_file_name, 800, 600, "", "");
	}
}

function GetDoc(sql) {
	//var begin_date_string = dt.getFullYear() + "-" + formatInt(dt.getMonth() + 1) + "-" + formatInt(dt.getDate()) + " 00:00:00";
	//var end_date_string = dt.getFullYear() + "-" + formatInt(dt.getMonth() + 1) + "-" + formatInt(dt.getDate()) + " 23:59:59";
	//var str = "DT_CREATED >='" + begin_date_string + "' and DT_CREATED <='" + end_date_string + "'"
	//var sql =  sql_str +" and DOCUMENT_TYPE='event'";
	var documents = objDatabase.DocumentsFromSQL(sql);
	//
	if (documents == null)
		return null;
	if (documents.Count == 0)
		return null;
	//
	return documents;
}


//日历中按日期（某一天）列出历史文档，返回文档数量
function listHistoryByDate(dt) {
	if (typeof (objApp) == "undefined")
		return 0;
	var day_string = dt.format('MM-DD');
	var sql = "DT_CREATED like '%" + day_string + "%'";
	var documents = objDatabase.DocumentsFromSQL(sql);
	if (documents == null)
		return 0;
	//
	objApp.Window.DocumentsCtrl.SetDocuments(documents);
	//
	return documents.Count;
}

//定义事件类
function creatEvent(){
	var event = new Object();
	event.title = '';
	event.start = '';
	event.end = '';
	event.allDay = true;
	event.url = '';
	return event;
}

//文档转成事件
function DocToEvent(documents,type) {
	var events = new Array();
	if (documents == null) return events;
	if (documents.Count == 0) return events;
	if (type == 'journal') var bgcolor = '#DB66DE';
	else bgcolor = 'orange';
	for(var i=0;i<documents.Count;i++){
		var doc = documents.Item(i);
		var title = removeDate(doc.Title);
		var date = new Date(doc.DateCreated);
		var event = creatEvent();
		event.backgroundColor = bgcolor;
		event.textColor = '#000000';
		event.start = date;
		event.title = title;
		event.guid = doc.GUID;
		//
		events[i] = event;
	}
	return events;
}

//日历转化为事件
function CalToEvent(documents) {
	var events = new Array();
	if (documents == null||documents.Count == 0)
		return events;
	for(var i=0;i<documents.Count;i++){
		var doc = documents.Item(i);
		var event = creatEvent();
		event.allDay = false;
		event.start = strToDate(doc.ParamValue("Calendar_Start"));
		event.end = strToDate(doc.ParamValue("Calendar_End"));
		var docinfo = doc.ParamValue("Calendar_Info");
		docinfo = docinfo.split('/');
		event.backgroundColor = '#' + docinfo[0].replace('b=','');
		event.textColor = '#000000';
		event.title = doc.Title;
		event.guid = doc.GUID;
		//
		events[i] = event;
	}
	return events;
}

//日历事件转化为事件
function CalToEvent2(calevents) {
	var events = new Array();
	if (calevents == null||calevents.Count == 0)
		return events;
	for(var i=0;i<calevents.Count;i++){
		var calevent = calevents.Item(i);
		var event = creatEvent();
		event.allDay = false;
		event.start = new Date(calevent.Start);
		event.end = new Date(calevent.End);
		event.backgroundColor = '#' + zero_fill_hex(calevent.Color, 6);
		event.textColor = '#000000';
		event.title = calevent.Title;
		event.guid = calevent.GUID;
		//var document = objDatabase.documentFromGUID(doc.Guid);
		//
		events[i] = event;
	}
	return events;
}

//新建日历事件
function newCalendar() {
	var moment = $('#calendar').fullCalendar('getDate');
	var dtEvent = dateToString(moment);
	objCommon.CreateCalendarEvent(objDatabase,dtEvent);
}

//编辑日历事件
function editCalendar(objDoc) {
	objCommon.EditCalendarEvent(objDoc);
}

//新建日历事件
function newCalendar1() {
	$( "#eventbox" ).dialog({
		autoOpen: false,
		height: 480,
		width: 400,
		title: 'Creat new event',
		modal: true,
		position: "center",
		draggable: false,
		beforeClose: function(event, ui) {							
		},
		buttons: {
			"close": function() {
				$( this ).dialog( "close" );
			},
			"confirm": function() {	
				var title = $('#title').val();
				var details = $('#details').val();
				var dtStart = $('#dateStart').val()+" "+$('#timeStart').val();
				var dtEnd = $('#dateEnd').val()+" "+$('#timeEnd').val();
				var color = $('#color').val();
				var remtime = $("#remtime").val();
				var repcircle = $("#repcircle").val();
				var details = $("#details").val();
				//createEvent(title,details,dtStart,dtEnd,color,remtime,repcircle,details);
			}
		}
	});
}

//编辑日历事件
function editCalendar1(objDoc) {
	$("#title").val(calEvent.title);
	$("#tag").val();
	$("#start").val(calEvent.start);
	$("#end").val(calEvent.end);							
	$("#color").val(calEvent.backgroundColor);
	$("#remtime").val();
	$("#repcircle").val();
	$("#details").val(objDoc.AbstractText);
	$( "#eventbox" ).dialog({
		autoOpen: false,
		height: 450,
		width: 400,
		title: calEvent.title,
		modal: true,
		position: "center",
		draggable: false,
		beforeClose: function(event, ui) {							
		},
		buttons: {
			"close": function() {
				$( this ).dialog( "close" );
			},
			"confirm": function() {		
			}
		}
	});
	$( "#eventbox" ).dialog( "open" );
	return false;
}

function calendarsetup(){
	$( "#calendaroption" ).dialog({
		autoOpen: false,
		height: 180,
		width: 360,
		title: 'Calendar Option',
		modal: true,
		position: "center",
		draggable: false,
		beforeClose: function(event, ui) {							
		},
		buttons: {
			"close": function() {
				$( this ).dialog( "close" );
			}
		}
	});
	$( "#calendaroption" ).dialog( "open" );
	return false;
}

//刷新日历
function reloadCal() {
	$('#calendar').fullCalendar('removeEvents');
	$('#calendar').fullCalendar('refetchEvents');
}

function createEvent(title,details,dtStart,dtEnd,color,remtime,repcircle,details) {
	try {
	   //
		var content = "";
		if (!force) {
			var contentText = "";
			if (contentText.length == 0) {
				if (content.length < 10)
					return;
			}
		}
		//
		var nSeconds = -1;
		var bCompleted = 1;
		var extInfo = "b=" + color + "/r=" + nSeconds + "/c=" + bCompleted;
		
		if(title == null || title.length <1)
		{
			title = getLocalString("UnnamedEvent");
		}
		//
		var now = new Date(start);
		var month = formatInt(now.getMonth() + 1);
		var location = '/My Events/' + now.getFullYear() + '-' + month + '/';
		//
		var objFolder = objDatabase.GetFolderByLocation(location, true);
		//
		if (objDoc == null) {
			objDoc = objFolder.CreateDocument2(title, "");
			objDoc.Type = "event";
		}
		
		objDoc.ChangeTitleAndFileName(title);
		
		objDoc.UpdateDocument3(details, 0);
		//
		objDoc.AddToCalendar(dtStart,dtEnd,extInfo);
		//
		//
		//objApp.Window.ViewDocument(objDoc, true);
		//objApp.Window.CategoryCtrl.SelectedFolder = objFolder;
		//objApp.Window.DocumentsCtrl.SetDocuments(objFolder);
		//objApp.Window.DocumentsCtrl.SelectedDocuments = objDoc;
	}
	catch (err) {
		alert(err);
	}
}

//页面控制
function chang_page() {
	var view = $('#calendar').fullCalendar('getView');
	//left and right
	var moment = $('#calendar').fullCalendar('getDate');
    //alert("The current date of the calendar is " + moment.format());
	if (event.keyCode == 37 ) {
		$('#calendar').fullCalendar('incrementDate',{ days: -1 });
		$('#calendar').fullCalendar('select', moment.add(-1, 'days'));
		};
	if (event.keyCode == 39 ) {
		$('#calendar').fullCalendar('incrementDate',{ days: 1 });
		$('#calendar').fullCalendar('select', moment.add(1, 'days'));
	}
	//Page up and Page down
	if (event.keyCode == 33) {
		$('#calendar').fullCalendar('prev');
	}
	if (event.keyCode == 34) {
		$('#calendar').fullCalendar('next');
	}
	//up an down
	if (event.keyCode == 38) {
		if(view.name=='month') {
			$('#calendar').fullCalendar('incrementDate',{ days: -7 });
			$('#calendar').fullCalendar('select', moment.add(-7, 'days'));
		}
		else $('#calendar').fullCalendar('prev');
	}
	if (event.keyCode == 40) {
		if(view.name=='month') {
			$('#calendar').fullCalendar('incrementDate',{ days: 7 });
			$('#calendar').fullCalendar('select', moment.add(7, 'days'));
		}
		else $('#calendar').fullCalendar('next');
	}
	if(event.keyCode == 13) {
		event.returnValue = false;//取消回车键的默认操作
		button.click();
	}
}

function calendarViewOnLoad(){
	document.body.onmousewheel = function(){
		var view = $('#calendar').fullCalendar('getView');
		var moment = $('#calendar').fullCalendar('getDate');
		//var moment = $.fullCalendar.moment($( "#selecteddate" ).datepicker('getDate'));
		if(view.name=='month'){
			if (event.wheelDelta > 0) {
				$('#calendar').fullCalendar('incrementDate',{ days: -7 });
				$('#calendar').fullCalendar('select', moment.add(-7, 'days'));
				//$('#calendar').fullCalendar('prev');
			}
			else {
				$('#calendar').fullCalendar('incrementDate',{ days: 7 });
				$('#calendar').fullCalendar('select', moment.add(7, 'days'));
				//$('#calendar').fullCalendar('next');
			}
		}
		else {
			if (event.wheelDelta > 0) {
				$('#calendar').fullCalendar('prev');
			}
			else {
				$('#calendar').fullCalendar('next');
			}
		}
	}
	document.onkeydown = chang_page;
	setTitle("日历视图");
}

//
$(document).ready(function() {
	//var now = new Date();
	var now = $.fullCalendar.moment(new Date());
	var dates = $( "#dateStart, #dateEnd" ).datepicker({
			defaultDate: "+1w",
			changeMonth: false,
			numberOfMonths: 1,
			dateFormat: 'yy-mm-dd',
			onSelect: function( selectedDate ) {
				var option = this.id == "dateStart" ? "minDate" : "maxDate",
					instance = $( this ).data( "datepicker" ),
					date = $.datepicker.parseDate(
						instance.settings.dateFormat ||
						$.datepicker._defaults.dateFormat,
						selectedDate, instance.settings );
				dates.not( this ).datepicker( "option", option, date );
			}
		});
	$( "#dateStart, #dateEnd" ).attr("value","" + now.format('YYYY-MM-DD'));
	$( "#timeStart" ).attr("value",now.format('h:mm:ss'));
	$( "#timeEnd" ).attr("value",now.format('h:mm:ss'));
	$('#timeStart').timepicker({
		showSecond: true,
		timeFormat: 'hh:mm:ss'
	});
	$('#timeEnd').timepicker({
		showSecond: true,
		timeFormat: 'hh:mm:ss'
	});
	$("#color").spectrum({
		color: "#ECC",
		showInput: true,
		showPaletteOnly: true,
		showPalette: true,
		showSelectionPalette: true,
		maxPaletteSize: 10,
		preferredFormat: "hex",
		palette: [
			["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(204, 204, 204)", "rgb(217, 217, 217)"],
			["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)"], 
			["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)"]
		]
	});
	var tooltip = $('<div/>').qtip({
		id: 'calendar',
		prerender: true,
		content: {
			text: ' ',
			title: {
				button: true
			}
		},
		position: {
			my: 'bottom center',
			at: 'top center',
			target: 'mouse',
			viewport: $('#calendar'),
			adjust: {
				mouse: false,
				scroll: false
			}
		},
		show: false,
		hide: false,
		style: 'qtip-light'
	}).qtip('api');
	
	$('#calendar').fullCalendar({
		theme: true,
		header: {
			left: 'prev,next, today',
			//left: 'prevYear,nextYear,prev,next, today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
			//right: 'month,basicWeek,basicDay'
		},
		editable: true,
		//height: 600,
		defaultView: 'month',
		selectable: true,
		//selectHelper: true,
		eventLimit: true,
		weekMode: 'fixed',
		monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],  
		monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],  
		dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],  
		dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],  
		today: ["今天"],  
		firstDay: 1,  
		buttonText: {  
		  today: '今天',  
		  month: '月',  
		  week: '周',  
		  day: '日', 
		  prevYear: '去年', 
		  nextYear: '明年', 			  
		  prev: '上一月',  
		  next: '下一月'  
		}, 
		lazyFetching:true,
		//currentTimezone: 'Asia/Beijing', 
		//可选多个事件源
		eventSources: [
			{
				events: function(start,end,timezone,callback) {
					var events = [];
					if ($('#e2').is(':checked')) {
						var sql_str = "DT_CREATED >='" + dateToString(start) + "' and DT_CREATED <='" + dateToString(end) + "'";
						var journal_str =  sql_str +" and DOCUMENT_TYPE='journal'";
						var journal_source = DocToEvent(GetDoc(journal_str),'journal');
						events = events.concat(journal_source);
					}
					if ($('#e1').is(':checked')) {
						//var event_str =  sql_str +" and DOCUMENT_TYPE='event'";
						var documents = objDatabase.GetCalendarEvents2(dateToString(start),dateToString(end));
						var calendar_source = CalToEvent2(documents);
						events = events.concat(calendar_source);
						//events = events.concat($('#e1').is(':checked') ? calendar_source : []);
					}
					if ($('#e3').is(':checked')) {
						var normaldocument_str =  sql_str +" and DOCUMENT_TYPE!='event'" + " and DOCUMENT_TYPE!='journal'";
						var normaldocument_source = DocToEvent(GetDoc(normaldocument_str),'normal');
						events = events.concat(normaldocument_source);
					}
					callback(events);
				}
			}
		],
		viewRender: function(view) {
			dateArr = [];           
			var today = $('#calendar').fullCalendar('getDate');
			 //var viewData = $('#calendar').fullCalendar('getView');
			if(view.name=='month'){
				//rendering color
				//foreach event check each day on the calendar
				 $('td .fc-state-default').css('background','#CD7A00');
				 $('.fc-day-number').each(function(){
					//alert($(this).parents('td').html());
					//lDay = parseInt($(this).text());
					//if($(this).hasClass('fc-today')) $(this).css('color','#F2F7FE');
					if($(this).hasClass('fc-sat')) $(this).css('color','red');
					if($(this).hasClass('fc-sun')) $(this).css('color','red');
					//$('td .fc-day'+i).find('div.fc-day-number').text(dateArr[i].getDate() + chineseStr);
					var dateobj = new Date($(this).data('date'));
					var chineseStr = wizGetChineseDate(dateobj);
					$(this).text($(this).text() + chineseStr);
					$(this).hover(function (){
							$(this).css("text-decoration", "underline");
						},function(){
							$(this).css("text-decoration", "none");
						}
					);
				});
				//$('.fc-sat').each(function(){$(this).css('color','red');});
			}
			$('#calendar').fullCalendar( 'select', today, today);
			tooltip.hide();
		},
		dayRender: function( date, cell ) { 
			//if (date.format('E')==6) {alert(cell.parents('td').html());}
		},
		dayClick: function(date, jsEvent, view) {
			tooltip.hide();
			//alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
			$('#calendar').fullCalendar( 'gotoDate', date);
			//$(this).children().css("position", "relative");
			//alert($(this).parent().html());
			if ($('#e6').is(':checked')) var history = listHistoryByDate(date);
		},
		select: function(start, end, jsEvent, view) {
			var datetext = start.format('YYYY-MM-DD');
			$( "#selecteddate" ).attr('value',datetext);
			/*if (jsEvent) {
				var style = {
					zIndex: 200,
					backgroundColor : "#ddd",
					fontWeight: "",
					position: 'fixed', 
					left: jsEvent.pageX + 5, 
					top: jsEvent.pageY
					};
				$("#newEvents").css(style);
				$("#newEvents").show();
			}*/
			//var documents = objDatabase.GetCalendarEvents(dateToString(start),dateToString(end));
			//if(documents.Count) alert(documents.Item(0).Start);
		},
		unselect: function( view, jsEvent ) {
			if ($("newIcon")) $("newIcon").remove();
		},
		eventMouseover: function(calEvent, jsEvent, view) {
			if (calEvent.guid){
				var objDoc = objDatabase.DocumentFromGUID(calEvent.guid);
				var content = '<h3>'+calEvent.title+'</h3>' + '<div>' + '开始：'+$.fullCalendar.moment(calEvent.start).format() +'</br>结束：'+$.fullCalendar.moment(calEvent.end).format()+ '</div>' + '<div>摘要：' + objDoc.AbstractText + '</div>' ; 
				tooltip.set({
					'content.text': content
				})
				.reposition(jsEvent).show(jsEvent);
				if(objDoc.Type=='event')	{
					//editCalendar(objDoc);
				}else {}
			}
			//改变事件背景色
			//$(this).css('border-color', 'red');
			//calEvent.backgroundColor = '#FFFFF';
		},
		eventMouseout: function(calEvent, jsEvent, view) {
			tooltip.hide();
		},
		eventClick: function(calEvent, jsEvent, view) {
			//return false; //可以阻止浏览器跳转到对应日程事件在初始配置时指定的url地址
			if(calEvent.guid){
				var objDoc = objDatabase.DocumentFromGUID(calEvent.guid);
				ViewDoc(calEvent.guid)
			}
			else if (calEvent.id==1000){
				var date = calEvent.start;
				var dtEvent = dateToString(date);
				//objCommon.CreateCalendarEvent(objDatabase,dtEvent);
			}
		},
		eventResize: function(event,dayDelta,minuteDelta,revertFunc) {
			if(event.guid){
				var objDoc = objDatabase.DocumentFromGUID(event.guid);
				if(objDoc.Type=='event'){
					//alert("The end date of " + event.title + "has been moved " + dayDelta + " days and " + minuteDelta + " minutes.");
					var enddate = event.end;
					if (confirm("Are you sure about this change?")) {
						revertFunc();
						event.end = enddate;
						objDoc.ParamValue("Calendar_End") = dateToString(enddate);
						//$('#calendar').fullCalendar('updateEvent', event);
					}
					else revertFunc();
				}
				else revertFunc();
			}
			else revertFunc();
		},
		eventDrop: function(event,dayDelta,minuteDelta,allDay,revertFunc) {
			if(event.guid){
				var objDoc = objDatabase.DocumentFromGUID(event.guid);
				if(objDoc.Type=='event'){
					//alert(event.title + " was moved " + dayDelta + " days and " + minuteDelta + " minutes.");
					var startdate = event.start;
					var enddate = event.end;
					if (confirm("Are you sure about this change?")) {
						objDoc.ParamValue("Calendar_Start") = dateToString(startdate);
						objDoc.ParamValue("Calendar_End") = dateToString(enddate);
						//$('#calendar').fullCalendar('updateEvent', event);
					}
					else revertFunc();
				}
				else revertFunc();
			}
			else revertFunc();
		},
		eventRender: function(event, element) {
		}
	});
	$('#calendar').fullCalendar('option', 'height', 650);
	//goto date function
	$("#calendar .fc-left").append('<SPAN class=fc></SPAN><SPAN id="calendarsetup"  onclick="calendarsetup();" class="fc-button ui-state-default ui-corner-left ui-corner-right"><SPAN class=fc-button-inner><SPAN class=fc-button-content>设置</SPAN><SPAN class=fc-button-effect><SPAN></SPAN></SPAN></SPAN></SPAN>');
	$("#calendar .fc-right").prepend('<SPAN class="fc-button ui-state-default ui-corner-left"><SPAN class=fc-button-inner><input type="text" id="selecteddate" size="8" style="padding:3px;"><SPAN class=fc-button-effect><SPAN></SPAN></SPAN></SPAN></SPAN><SPAN class=fc-header-space></SPAN>');
	
	$( "#selecteddate" ).datepicker({
		dateFormat:'yy-mm-dd',
		beforeShow: function (input, instant) {  
			setTimeout(
				function () {
					$('#ui-datepicker-div').css("z-index", 150);
				}, 10
			);
		},
		onSelect: function(dateText, inst) {
			//var selectdate = new Date(dateText);
			var selectdate = $.fullCalendar.moment(dateText);
			$('#calendar').fullCalendar('gotoDate', selectdate.format());
			$('#calendar').fullCalendar('select', selectdate);
		}
	});
	$("#ui-datepicker-div").hide();
	$('#calendar').fullCalendar('select', $('#calendar').fullCalendar('getDate'));
	var history = listHistoryByDate(now);
});
