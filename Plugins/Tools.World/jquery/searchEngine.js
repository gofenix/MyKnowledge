function CheckAll(form) {
    for (var i = 0; i < form.elements.length; i++) {
        var e = form.elements[i];
        if (e.name != 'chkall')
            e.checked = form.chkall.checked;
    }
}

function netsearch(formname) {
    var Bing1
    var Bing2
    var Sogou1
    var Sogou2
    var youdao1
    var youdao2
    var baidu1
    var baidu2
    var taobao1
    var taobao2
    var wizdocument1
    var wizdocument2
    var Huihui1
    var Huihui2
    var Google1
    var Google2
    var TEXT
    var noENGINE
    var haveTEXT
    TEXT = formname.TEXT.value;
    noEngine = true;
    haveTEXT = true;
    if (TEXT == "") {
        alert("请输入搜索内容！")
        haveTEXT = false
    }
    Bing1 = formname.Bing.checked;
    Bing2 = "http://www.bing.com/search?q=" + TEXT;
    if (Bing1) {
        noEngine = false
        if (haveTEXT) {
            newWindow = window.open(Bing2, "Bing", "toolbar,location,directories,status,menubar,scrollbars,resizable=1")
        }
    }
    Sogou1 = formname.Sogou.checked;
    Sogou2 = "http://www.sogou.com/web?query=" + TEXT;
    if (Sogou1) {
        noEngine = false
        if (haveTEXT) {
            newWindow = window.open(Sogou2, "Sogou", "toolbar,location,directories,status,menubar,scrollbars,resizable=1")
        }
    }
    youdao1 = formname.youdao.checked;
    youdao2 = "http://www.youdao.com/search?q=" + TEXT;
    if (youdao1) {
        noEngine = false
        if (haveTEXT) {
            newWindow = window.open(youdao2, "youdao", "toolbar,location,directories,status,menubar,scrollbars,resizable=1")
        }
    }
    baidu1 = formname.baidu.checked;
    baidu2 = "http://www1.baidu.com/baidu?myselectvalue=0&tn=net900&word=" + TEXT;
    if (baidu1) {
        noEngine = false
        if (haveTEXT) {
            newWindow = window.open(baidu2, "baidu", "toolbar,location,directories,status,menubar,scrollbars,resizable=1")
        }
    }
    Huihui1 = formname.Huihui.checked;
    Huihui2 = "http://www.huihui.cn/search?q=" + TEXT;
    if (Huihui1) {
        noEngine = false
        if (haveTEXT) {
            newWindow = window.open(Huihui2, "Huihui", "toolbar,location,directories,status,menubar,scrollbars,resizable=1")
        }
    }
    Google1 = formname.Google.checked;
    Google2 = "http://www.google.com/search?hl=zh-CN&q=" + TEXT;
    if (Google1) {
        noEngine = false
        if (haveTEXT) {
            newWindow = window.open(Google2, "n", "toolbar,location,directories,status,menubar,scrollbars,resizable=1")
        }
    }
    taobao1 = formname.taobao.checked;
    taobao2 = "http://s.taobao.com/search?initiative_id=staobaoz_20140509&js=1&q=" + TEXT;
    if (taobao1) {
        noEngine = false
        if (haveTEXT) {
            newWindow = window.open(taobao2, "taobao", "toolbar,location,directories,status,menubar,scrollbars,resizable=1")
        }
    }
    wizdocument1 = formname.wizdocument.checked;
    wizdocument2 = "http://" + TEXT;
    if (wizdocument1) {
        noEngine = false
        if (haveTEXT) {
            newWindow = window.open(wizdocument2, "wizdocument", "toolbar,location,directories,status,menubar,scrollbars,resizable=1")
        }
    }
    if (noEngine) {
        alert("请选择搜索引擎！")
    }

}