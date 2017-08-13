    var g_objApp = null;
    var g_objCmn = null;
    var g_objDb = null;
    //
    function GetUrlParam(name) {
        var reg = new RegExp("[?&]" + name + "=([^?&]*)[&]?", "i");
        var match = location.href.match(reg);
        return match == null ? "" : match[1];
    }
    function GetUrlParam2(url, name) {
        var reg = new RegExp("[?&]" + name + "=([^?&]*)[&]?", "i");
        var match = url.match(reg);
        return match == null ? "" : match[1];
    }
    function TOLOG(strLog) {
        try {
            if (g_objApp) {
                g_objApp.WriteToLog("WELCOME_PAGE: " + strLog);
            }
        }
        catch (e) {
        }
    }
    function TOLOG1(strLog, param) {
        strLog = strLog.replace("%1", param);
        //
        TOLOG(strLog);
    }
    function TOLOG2(strLog, param0, param1) {
        strLog = strLog.replace("%1", param0).replace("%2", param1);
        //
        TOLOG(strLog);
    }
    function TOLOG3(strLog, param0, param1, param2) {
        strLog = strLog.replace("%1", param0)
        			   .replace("%2", param1)
        			   .replace("%3", param2);
        //
        TOLOG(strLog);
    }
    function SafeArrayToJS(safeArray) {
        var vbArray = new VBArray(safeArray);
        if (!vbArray || !vbArray.toArray)
            return;
        return vbArray.toArray();
    }
    function Remove_r_n_t(strText) {
        strText = strText.replace(/[\n\t\r]/ig, '');
        return strText;
    }
    function CloneArray(arrayIn) {
        if (!IsArray(arrayIn))
            return;
        var arrayOut = [];
        for (var i = 0; i < arrayIn.length; i ++) {
            arrayOut.push(arrayIn[i]);
        }
        //
        return arrayOut;
    }
    function IsArray(array) {
        return (array instanceof Array);
    }
    function IsAChildArray(arrayParent, arrayChild) {
        if (!IsArray(arrayChild) || !IsArray(arrayParent))
            return false;
        //
        if ((arrayChild.length == 0 && arrayParent.length != 0) 
        	|| (arrayChild.length != 0 && arrayParent.length == 0))
            return false;
        // 
        for (var i = 0; i < arrayChild.length; i++) {
            var bIn = false;
            for (var j = 0; j < arrayParent.length; j++) {
                if (arrayChild[i] == arrayParent[j]) {
                    bIn = true;
                    break;
                }
            }
            //
            if (!bIn)
                return false;
        }
        //
        return true;
    }
    function CompareArray(array1, array2) {
        if (!(array1 instanceof Array) || !(array2 instanceof Array))
            return false;
        //
        if ((array1.length == 0 && array2.length != 0)
			|| (array1.length != 0 && array2.length == 0))
            return false;
        //
        return IsAChildArray(array1, array2) && 
        		IsAChildArray(array2, array1);
    }
    function RemoveHollowElement(array) {
        if (!IsArray(array))
            return;
        var arrayNew = [];
        for (var i = 0; i < array.length; i ++) {
            if (array[i]) {
                arrayNew.push(array[i]);
            }
        }
        //
        return arrayNew;
    }
    function CompareObject(obj1, obj2){
        if(obj1 == obj2) 
            return true;
        if(typeof(obj2)=="undefined"||obj2==null||typeof(obj2)!="object") 
            return false;
        var length = 0; var length1=0;
        for(var ele in obj1) {
            length++;
        }               
        for(var ele in obj2) {
            length1++;
        }               
        if(length!=length1) 
            return false;
        if(obj2.constructor==obj1.constructor){
            for(var ele in obj1){
                if(typeof(obj1[ele])=="object") {
                    if(!CompareObject(obj1[ele], obj2[ele]))
                        return false;
                }
                else if(typeof(obj1[ele])=="function"){
                    if(!CompareObject(obj1[ele].toString(), obj2[ele].toString())) 
                        return false;
                }
                else if(obj1[ele]!=obj2[ele]) 
                    return false;
            }
            return true;
        }
        return false;
    };
    function setSelectionRange(input, selectionStart, selectionEnd) {
      if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
      }
      else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
      }
    }

    function setCaretToPos (input, pos) {
      setSelectionRange(input, pos, pos);
    }
    function formatIntToDateString(n){
        
        return n < 10 ? '0' + n : n;
    }
    function D2S(dt){
        //
        var ret = dt.getFullYear() + "-" + 
                    formatIntToDateString(dt.getMonth() + 1) + "-" + 
                    formatIntToDateString(dt.getDate()) + " " + 
                    formatIntToDateString(dt.getHours())+ ":" + 
                    formatIntToDateString(dt.getMinutes()) + ":" + 
                    formatIntToDateString(dt.getSeconds());
        return ret;
    }
    function S2D(str){
        if (!str)
            return '';
        var date = new Date(str.substr(0, 4),
                        str.substr(5, 2) - 1,
                        str.substr(8, 3),
                        str.substr(11, 2),
                        str.substr(14, 2),
                        str.substr(17, 2)
                        );      
        return date;
    }    
    function GetDateTimeDate(strDateTime) {
        if (typeof(strDateTime) != "string")
            return;
        //
        return strDateTime.substr(0, 10);
    }
    function StopBubble(e) {
        //如果提供了事件对象，则这是一个非IE浏览器  
        if (e && e.stopPropagation) {
            //因此它支持W3C的stopPropagation()方法  
            e.stopPropagation();
        } else {
            //否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
        return false;
    }
    function WizRGB2Hex(rgb) {
        var leftBracket = rgb.indexOf('(');
        var rightBracket = rgb.indexOf(')');
        //
        var strValue = rgb.substring(leftBracket + 1, rightBracket);
        //
        strValue = strValue.replace(/\s/g, '');
        //
        var array = strValue.split(',');
        //
        if (!array || array.length < 3)
            return '#ff0000';
        //
        return '#' + Number(array[0]).toString(16) + 
                     Number(array[1]).toString(16) + 
                     Number(array[2]).toString(16);
    }
    //////////////////////////////////////////////////////////////////////
    /**//**  
     * 设置Cookies  
     */
    var Cookies = {};
    //
    Cookies.set = function(name, value){
         var argv = arguments;   
         var argc = arguments.length;
         var expires = (argc > 2) ? argv[2] : null;
         var path = (argc > 3) ? argv[3] : '/';   
         var domain = (argc > 4) ? argv[4] : null;   
         var secure = (argc > 5) ? argv[5] : false;   
         document.cookie = name + "=" + escape (value) +   
           ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +   
           ((path == null) ? "" : ("; path=" + path)) +   
           ((domain == null) ? "" : ("; domain=" + domain)) +   
           ((secure == true) ? "; secure" : "");
    };   
    /**//**  
     * 读取Cookies  
     */  
    Cookies.get = function(name){   
        var arg = name + "=";   
        var alen = arg.length;   
        var clen = document.cookie.length;   
        var i = 0;   
        var j = 0;   
        while(i < clen){   
            j = i + alen;   
            if (document.cookie.substring(i, j) == arg)   
                return Cookies.getCookieVal(j);   
            i = document.cookie.indexOf(" ", i) + 1;   
            if(i == 0)   
                break;   
        }   
        return null;   
    };   
    /**//**  
     * 清除Cookies  
     */  
    Cookies.clear = function(name) {   
      if(Cookies.get(name)){   
        var expdate = new Date();    
        expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));    
        Cookies.set(name, "", expdate);    
      }
    };   
      
    Cookies.getCookieVal = function(offset) {
       var endStr = document.cookie.indexOf(";", offset);   
       if(endStr == -1){   
           endStr = document.cookie.length;   
       }   
       return unescape(document.cookie.substring(offset, endStr));   
    };
    function SetCookie(key, value, expires) {
        Cookies.set(key, value, expires);
    }
    function GetCookie(key){
        return Cookies.get(key);
    }
    //////////////////////////////////////////////////////////////////////
    function WizSaveTextToFile(strFileName, strText) {
        if (!g_objCmn) {
            TOLOG("Can't to save text to file, g_objCmn is invalid.");
            return;
        }
        //
        try {
            g_objCmn.SaveTextToFile(strFileName, strText, "unicode");
        } catch (e) {
            TOLOG1("Failed to call SaveTextToFile, filename: %1", 
            	strFileName);
            alert(e);
        }
    }
    function WizLoadTextFromFile(strFileName) {
        if (!g_objCmn) {
            TOLOG("WizLoadTextFromFile, g_objCmn is invalid.");
            return;
        }
        //
        var strText;
        try {
            strText = g_objCmn.LoadTextFromFile(strFileName);
        } catch(e) {
            TOLOG1("Failed to call LoadTextFromFile, e: %1", e);
            return;
        }
        //
        return strText;
    }
    function WizGetDataStorePath() {
        if (!g_objApp)
            return;
        //
        return g_objApp.DataStore;
    }
    function WizCloseWindow(retValue) {
        if (!g_objApp)
            return;
        //
        if (!retValue)
            retValue = 0;
        g_objApp.window.CloseHtmlDialog(document, retValue);
    }
    function WizLocalizeCurrentDocument(strFileName) {
        if (!g_objApp)
            return;
        //
        g_objApp.LocalizeHtmlDocument(strFileName, document);
    }
    function WizGetRecentDocuments(nCount) {
        if (!g_objDb)
            return;
        var arrayDocs;
        // create db index
        try {
            var sql = 'create index if not exists index_td_modified on wiz_document (dt_modified)';
            g_objDb.SQLExecute(sql, '');
        }
        catch(e) {}
        //
       /* try {
            arrayDocs = g_objDb.GetRecentDocuments('', nCount);
        } catch(e) {
            TOLOG1("Failed to call WizGetRecentDocuments, exception: %1", e);
        }
        //
		*/
		
		//Zou
		try {
			var today = new Date();
			var month = today.getUTCMonth() + 1;
			var date = today.getUTCDate()
			var today_string = month + "-" + date;
			//var today_string = today.format('MM-DD');
			var sql = "DT_CREATED like '%" + today_string + "%'";
			var arrayDocs = g_objDb.DocumentsFromSQL(sql);
            //arrayDocs = g_objDb.GetRecentDocuments('', nCount);
        } catch(e) {
            TOLOG1("Failed to call WizGetRecentDocuments, exception: %1", e);
        }
		
        return arrayDocs;
    }
    function WizGetDocumentByGUID(guid) {
        if (!g_objDb)
            return;
        //
        if (!guid)
            return;
        //
        var doc;
        //
        try {
            doc = g_objDb.DocumentFromGUID(guid);
        } catch(e) {
            TOLOG2("Failed to call WizGetDocumentByGUID, guid: %1, exception: %2"
                , guid, e);
        }
        //
        return doc;
    }
    function WizGetDocumentsFromSql(sql) {
        if (!sql)
            return;
        if (!g_objDb)
            return;
        //
        var docColl;
        try {
            docColl = g_objDb.DocumentsFromSQL(sql);
        } catch(e) {
            TOLOG2("Failed to call WizGetDocumentsFromSql, sql: %1, exception: %2"
                , sql, e);
        }
        //
        return docColl;
    }
    function WizSetDocumentsDocCtrl(docs) {
        if (!docs)
            return;
        if (!g_objApp)
            return;
        try {
            g_objApp.Window.DocumentsCtrl.SetDocuments(docs);
        } catch(e) {
            TOLOG("Failed to call SetDocuments.");
        }
    }
    function WIZ_GET_DOCUMENTS_SQL(y, m, d, flag) {
        if (!y || !m || !d)
            return;
        //
        var strStart = y + '-' + m + '-' + d + ' ' + "00:00:00";
        var strEnd = y + '-' + m + '-' + d + ' ' + "23:59:59";
        //
        var sql = "%1 >='" + strStart + "' and %2 <='" + strEnd + "'";
        var condition = flag == 'bycreated' ? 'DT_CREATED' : 'DT_MODIFIED';
        //
        sql = sql.replace('%1', condition).replace('%2', condition);
        //
        return sql;
    }
    function WizViewDocumentsByDate(y, m, d, flag) {
        if (!y || !m || !d)
            return;
        //
        var sql = WIZ_GET_DOCUMENTS_SQL(y, m, d, flag);
        //
        var docColl = WizGetDocumentsFromSql(sql);
        //
        WizSetDocumentsDocCtrl(docColl);
    }
    function WizViewDocument(doc) {
        if (!doc)
            return;
        //
        if (!g_objApp)
            return;
        //
        try {
            g_objApp.Window.ViewDocument(doc, true);
        } catch(e) {
            TOLOG("Failed to call WizViewDocument.");
        }
    }
    function WizOpenURLInDefaultBrowser(url) { 
        if (!g_objCmn)
            return;
        if (!url)
            return;
        try {
            g_objCmn.OpenURLInDefaultBrowser(url);
        }
        catch(e) {
            TOLOG("Failed to call WizOpenURLInDefaultBrowser, err: " + e.toString());
        }
    }
    function WizSqlQuery(sql) {
        if (!g_objDb)
            return;
        if (!sql)
            return;
        try {
            var rowset = g_objDb.SQLQuery(sql, '');
            return rowset;
        }
        catch(err) {
            TOLOG("Failed to call WizExecuteSql, sql: " + sql + ", err: " + err.toString());
        }
        //
        return;
    }
    function WizGetUserId() {
        if (!g_objDb)
            return;
        try {
            return g_objDb.UserName;
        }
        catch (err) {
            TOLOG("Failed to call WizGetUserId, err: " + err.toString());
        }
        //
        return '';
    }
    //////////////////////////////////////////////////////////////////////
    function IsIE() {
        if(navigator.userAgent.indexOf("MSIE") > 0)
            return true;
    }
    function CheckInitInIE() {
        if (!IsIE())
            return;
        //
        if (g_objCmn)
            return;
        //
        g_objApp = new ActiveXObject("Wiz.WizExplorerApp");
        g_objCmn = g_objApp.CreateWizObject("WizKMControls.WizCommonUI");
        g_objDb = g_objApp.Database;
    }
    function WizInit() {
	    if (g_objApp) {
	        return;
	    }
	    try {
	        g_objApp = window.external;
	        g_objCmn = g_objApp.CreateWizObject("WizKMControls.WizCommonUI");
            g_objDb = g_objApp.Database;
	    }
	    catch (err) {}
        //
        CheckInitInIE();
    }