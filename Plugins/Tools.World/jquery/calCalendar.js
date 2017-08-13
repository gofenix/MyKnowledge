/*****************************************************************************
                                   日期资料
*****************************************************************************/
//国历节日 *表示放假日
	var sFtv = new Array(
        "0101*元旦",
        "0106  中国13亿人口日",
        "0110  中国110宣传日",

        "0202  世界湿地日",
        "0204  世界抗癌症日",
        "0210  世界气象日",
        "0214  情人节",
        "0221  国际母语日",
        "0207  国际声援南非日",

        "0303  全国爱耳日",
        "0308  妇女节",
        "0312  植树节 孙中山逝世纪念日",
        "0315  消费者权益保护日",
        "0321  世界森林日",
        "0322  世界水日",
        "0323  世界气象日",
        "0324  世界防治结核病日",

        "0401  愚人节",
        "0407  世界卫生日",
        "0422  世界地球日",

        "0501*国际劳动节",
        "0504  中国青年节",
        "0505  全国碘缺乏病日",
        "0508  世界红十字日",
        "0512  国际护士节",
        "0515  国际家庭日",
        "0517  世界电信日",
        "0518  国际博物馆日",
        "0519  中国汶川地震哀悼日 全国助残日",
        "0520  全国学生营养日",
        "0522  国际生物多样性日",
        "0523  国际牛奶日",
        "0531  世界无烟日",

        "0601  国际儿童节",
        "0605  世界环境日",
        "0606  全国爱眼日",
        "0617  防治荒漠化和干旱日",
        "0623  国际奥林匹克日",
        "0625  全国土地日",
        "0626  国际反毒品日",

        "0701  建党节 香港回归纪念日",
        "0707  抗日战争纪念日",
        "0711  世界人口日",

        "0801  八一建军节",
        "0815  日本正式宣布无条件投降日",

        "0908  国际扫盲日",
        "0909  毛泽东逝世纪念日",
        "0910  教师节",
        "0916  国际臭氧层保护日",
        "0917  国际和平日",
        "0918  九·一八事变纪念日",
        "0920  国际爱牙日",
        "0927  世界旅游日",
        "0928  孔子诞辰",

        "1001*国庆节 国际音乐节 国际老人节",
        "1002  国际减轻自然灾害日",
        "1004  世界动物日",
        "1007  国际住房日",
        "1008  世界视觉日 全国高血压日",
        "1009  世界邮政日",
        "1010  辛亥革命纪念日 世界精神卫生日",
        "1015  国际盲人节",
        "1016  世界粮食节",
        "1017  世界消除贫困日",
        "1022  世界传统医药日",
        "1024  联合国日",
        "1025  人类天花绝迹日",
        "1026  足球诞生日",
        "1031  万圣节",

        "1107  十月社会主义革命纪念日",
        "1108  中国记者日",
        "1109  消防宣传日",
        "1110  世界青年节",
        "1112  孙中山诞辰",
        "1114  世界糖尿病日",
        "1117  国际大学生节",

        "1201  世界艾滋病日",
        "1203  世界残疾人日",
        "1209  世界足球日",
        "1210  世界人权日",
        "1212  西安事变纪念日",
        "1213  南京大屠杀",
        "1220  澳门回归纪念日",
        "1221  国际篮球日",
        "1224  平安夜",
        "1225  圣诞节 世界强化免疫日",
        "1226  毛泽东诞辰")

	//农历节日 *表示放假日
	var lFtv = new Array(
        "0101*春节",
        "0102*大年初二",
        "0103*大年初三",
        "0105  路神生日",
        "0115  元宵节",
        "0202  龙抬头",
        "0219  观世音圣诞",
        "0404  寒食节",
        "0408  佛诞节 ",
        "0505*端午节",
        "0606  天贶节 姑姑节",
        "0624  彝族火把节",
        "0707  七夕情人节",
        "0714  鬼节(南方)",
        "0715  盂兰节",
        "0730  地藏节",
        "0815*中秋节",
        "0909  重阳节",
        "1001  祭祖节",
        "1117  阿弥陀佛圣诞",
        "1208  腊八节 释迦如来成道日",
        "1223  过小年",
        "0100*除夕")

	//某月的第几个星期几
	var wFtv = new Array(
	"0131 Martin Luther King Day",
	"0231 President's Day",
	"0520 母亲节",
	"0530 Armed Forces Day",
	"0531 Victoria Day",
	"0716 合作节",
	"0730 被奴役国家周",
	"0811 Civic Holiday",
	"0911 Labor Holiday",
	"1021 Columbus Day",
	"1144 Thanksgiving")
	
	var lunarInfo=new Array(
	0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
	0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
	0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
	0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
	0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
	0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
	0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
	0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
	0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
	0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
	0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
	0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
	0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
	0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
	0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)

	var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
	var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
	var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
	var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至")
	var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758)
	var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十')
	var nStr2 = new Array('初','十','廿','卅','　')
	var monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");


	/*****************************************************************************
										  日期计算
	*****************************************************************************/

	//====================================== 传回农历 y年的总天数
	function lYearDays(y) {
	   var i, sum = 348
	   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0
	   return(sum+leapDays(y))
	}

	//====================================== 传回农历 y年闰月的天数
	function leapDays(y) {
	   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29)
	   else return(0)
	}

	//====================================== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
	function leapMonth(y) {
	   return(lunarInfo[y-1900] & 0xf)
	}

	//====================================== 传回农历 y年m月的总天数
	function monthDays(y,m) {
	   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )
	}

	//====================================== 算出农历, 传入日期物件, 传回农历日期物件
	//                                       该物件属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl
	function Lunar(objDate) {

	   var i, leap=0, temp=0
	   var baseDate = new Date(1900,0,31)
	   var offset   = (objDate - baseDate)/86400000
	   
	   offset = Math.round(offset)

	   this.dayCyl = offset + 40
	   this.monCyl = 14

	   for(i=1900; i<2050 && offset>0; i++) {
		  temp = lYearDays(i)
		  offset -= temp
		  this.monCyl += 12
	   }

	   if(offset<0) {
		  offset += temp;
		  i--;
		  this.monCyl -= 12
	   }

	   this.year = i
	   this.yearCyl = i-1864

	   leap = leapMonth(i) //闰哪个月
	   this.isLeap = false

	   for(i=1; i<13 && offset>0; i++) {
		  //闰月
		  if(leap>0 && i==(leap+1) && this.isLeap==false)
			 { --i; this.isLeap = true; temp = leapDays(this.year); }
		  else
			 { temp = monthDays(this.year, i); }

		  //解除闰月
		  if(this.isLeap==true && i==(leap+1)) this.isLeap = false

		  offset -= temp
		  if(this.isLeap == false) this.monCyl ++
	   }

	   if(offset==0 && leap>0 && i==leap+1)
		  if(this.isLeap)
			 { this.isLeap = false; }
		  else
			 { this.isLeap = true; --i; --this.monCyl;}

	   if(offset<0){ offset += temp; --i; --this.monCyl; }

	   this.month = i
	   this.day = offset + 1
	}

	//==============================传回国历 y年某m+1月的天数
	function solarDays(y,m) {
	   if(m==1)
		  return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28)
	   else
		  return(solarMonth[m])
	}
	//============================== 传入 offset 传回干支, 0=甲子
	function cyclical(num) {
	   return(Gan[num%10]+Zhi[num%12])
	}

	//============================== 月历属性
	function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

		  this.isToday    = false;
		  //国历
		  this.sYear      = sYear;
		  this.sMonth     = sMonth;
		  this.sDay       = sDay;
		  this.week       = week;
		  //农历
		  this.lYear      = lYear;
		  this.lMonth     = lMonth;
		  this.lDay       = lDay;
		  this.isLeap     = isLeap;
		  //干支
		  this.cYear      = cYear;
		  this.cMonth     = cMonth;
		  this.cDay       = cDay;
		  //节日
		  this.lunarFestival = ''; //农历节日
		  this.solarFestival = ''; //国历节日
		  this.solarTerms    = ''; //节气

	}

	//===== 某年的第n个节气为几日(从0小寒起算)
	function sTerm(y,n) {
	   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) )
	   return(offDate.getUTCDate())
	}

	//====================== 中文日期
	function cDay(d){
	   var s;

	   switch (d) {
		  case 10:
			 s = '初十'; break;
		  case 20:
			 s = '二十'; break;
			 break;
		  case 30:
			 s = '三十'; break;
			 break;
		  default :
			 s = nStr2[Math.floor(d/10)];
			 s += nStr1[d%10];
	   }
	   return(s);
	}

	///////////////////////////////////////////////////////////////////////////////

	// 将农历iLunarMonth月格式化成农历表示的字符串
	function FormatLunarMonth(iLunarMonth) {
		var szText = new String("正二三四五六七八九十");
		var strMonth;
		if (iLunarMonth <= 10) {
			strMonth = szText.substr(iLunarMonth - 1, 1);
		}
		else if (iLunarMonth == 11) strMonth = "十一";
		else strMonth = "十二";
		return strMonth + "月";
	}
	// 将农历iLunarDay日格式化成农历表示的字符串
	function FormatLunarDay(iLunarDay) {
		var szText1 = new String("初十廿三");
		var szText2 = new String("一二三四五六七八九十");
		var strDay;
		if ((iLunarDay != 20) && (iLunarDay != 30)) {
			strDay = szText1.substr((iLunarDay - 1) / 10, 1) + szText2.substr((iLunarDay - 1) % 10, 1);
		}
		else if (iLunarDay != 20) {
			strDay = szText1.substr(iLunarDay / 10, 1) + "十";
		}
		else {
			strDay = "二十";
		}
		return strDay;
	}

	//============================== 传回月历物件 ()
	function lunarcalendar(objDate) {
		var SY = objDate.getFullYear();
		var SM = objDate.getMonth();
		var SD = objDate.getDate();
		var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2
		sDObj = new Date(SY,SM,SD); //当日农历日期
		var lDObj = new Lunar(sDObj); //农历
		 lY    = lDObj.year           //农历年
		 lM    = lDObj.month          //农历月
		 lD    = lDObj.day            //农历日
		 lL    = lDObj.isLeap         //农历是否闰月
		 lX    = lL? leapDays(lY): monthDays(lY,lM) //农历当月最後一天
		var SW = objDate.getDay()    //国历当月1日星期几
		var lunarday = new calElement(SY, SM, SD, nStr1[SW%7],
								   lY, lM, lD++, lL,
								   cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) )
	    //
		var festival='',solarTerms='',solarFestival='',lunarFestival='',tmp1,tmp2;
		//农历节日 
		for(i in lFtv)
		if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
		   tmp1=Number(RegExp.$1)-lDObj.month
		   tmp2=Number(RegExp.$2)-lDObj.day
		   if(tmp1==0 && tmp2==0) lunarFestival=RegExp.$4 
		}
		//国历节日
		for(i in sFtv)
		if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)){
		   tmp1=Number(RegExp.$1)-(SM+1)
		   tmp2=Number(RegExp.$2)-SD
		   if(tmp1==0 && tmp2==0) solarFestival = RegExp.$4 
		}
		//节气
		tmp1 = new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2+1]*60000)+Date.UTC(1900,0,6,2,5))
		tmp2 = tmp1.getUTCDate()
		if (tmp2==SD) solarTerms = solarTerm[SM*2+1] 
		tmp1 = new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2]*60000)+Date.UTC(1900,0,6,2,5))
		tmp2= tmp1.getUTCDate()
		if (tmp2==SD) solarTerms = solarTerm[SM*2]
		lunarday.solarTerms = solarTerms;
		lunarday.solarFestival = solarFestival;
		lunarday.lunarFestival = lunarFestival;
		
		//日期显示		
		if(solarTerms == '' && solarFestival == '' && lunarFestival == '')
			festival = '';
		else festival = '<TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR="#CCFFCC"><TR><TD>'+
		'<FONT COLOR="#000000" STYLE="font-size:9pt;">'+solarTerms + ' ' + solarFestival + ' ' + lunarFestival+'</FONT></TD>'+
		'</TR></TABLE>';

		lunarday.displaydate1 = '<TABLE WIDTH="130" BORDER=0 CELLPADDING="2" CELLSPACING=0 BGCOLOR="#000066" style="filter:Alpha(opacity=80)"><TR><TD>' +
		'<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN="right"><FONT COLOR="#ffffff" STYLE="font-size:9pt;">'+
		lunarday.sYear+' 年 '+lunarday.sMonth+' 月 '+lunarday.sDay+' 日<br>星期'+lunarday.week+'<br>'+
		'<font color="violet">农历'+(lunarday.isLeap?'闰 ':' ')+lunarday.lMonth+' 月 '+lunarday.lDay+' 日</font><br>'+
		'<font color="yellow">'+lunarday.cYear+'年 '+lunarday.cMonth+'月 '+lunarday.cDay + '日</font>'+
		'</FONT></TD></TR></TABLE>'+ festival +'</TD></TR></TABLE>';
		
		lunarday.displaydate2 = '<div style = "border: 1px solid #BBBBBB;background-color:#FFFFFF;width:160px;text-align:left; padding:0px 20px;"><p style = "font-size:14px;font-weight:bold;color:#3d3d3d;font-family:"宋体"; padding:12px 26px 0;"><span style = "color:#3d3d3d;">2014年4月28日星期一</span></p><p style="font-size:12px;color:#3d3d3d;font-family:"宋体";">农历三月廿九</p><p style="font-size:12px;color:#3d3d3d;font-family:"宋体";">甲午年 戊辰月 己巳日</p><p><div style="color:#519153;">交通安全反思日</div></p></div>';
				
		var sdate = '<font style="font-size:9pt;">' + SY + '年' + (SM+1) + '月' + SD +'日</font>';
		var wdate = '<font style="font-size:9pt;">' + ' 星期'+nStr1[SW%7]+'</font>';
		var ldate = '<font style="font-size:9pt;" >' + (lDObj.isLeap ? '闰' : ' ') + FormatLunarMonth(lDObj.month) + ' '+ FormatLunarDay(lDObj.day) + '</font>';
		var cdate = '<font style="font-size:9pt;" >'+'【'+Animals[(SY-4)%12]+'】'+cyclical(lDObj.yearCyl) + '年 '+cyclical(lDObj.monCyl)+'月 '+cyclical(lDObj.dayCyl)+'日' +'</font>';
		
		lunarday.displaydate3 = '<TABLE WIDTH="160" BORDER=0 CELLPADDING="2" CELLSPACING=0 style="filter:Alpha(opacity=80)"><TR><TD>' + '<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN="right">'+'<font style="font-size:9pt;">' + SY + '年' + (SM+1) + '月' + SD +'日</font>'+' ' + '<font style="font-size:9pt;">' + ' 星期'+nStr1[SW%7]+'</font>' + ' ' + '<br>'+'<font style="font-size:9pt;" >' + (lDObj.isLeap ? '闰' : ' ') + FormatLunarMonth(lDObj.month) + ' '+ FormatLunarDay(lDObj.day) + '</font>'+'<br>'+'<font style="font-size:9pt;" >'+'【'+Animals[(SY-4)%12]+'】'+cyclical(lDObj.yearCyl) + '年 '+cyclical(lDObj.monCyl)+'月 '+cyclical(lDObj.dayCyl)+'日' +'</font>'+'</TD></TR></TABLE>'+ festival +'</TD></TR></TABLE>';
		
		lunarday.displaydate4 = '<table style="font: 24px Arial,Helvetica, Sans-Serif;" border="1" cellspacing="3" width="130" bordercolor="#000000" bgcolor="#FFFFFF" height="110" cellpadding="2")'+'<tr><td align="center"><b><font color=#008040>'+SY + '年' + (SM+1) + '月' +'</font><br><font face="Arial" size="6" color=#FF8040>'+ SD + '日'+'</font><br><font color=#008040><span>'+'星期'+nStr1[SW%7]+'</span></font>'+'<br><font color=#9B4E00>'+ (lDObj.isLeap ? '闰' : ' ') + FormatLunarMonth(lDObj.month) + FormatLunarDay(lDObj.day) +'</font></b></td></tr></table>';
		
		lunarday.displaydate5 =  SY + '年' + (SM+1) + '月' + SD +'日 星期'+nStr1[SW%7] + ' 农历' + (lDObj.isLeap ? '闰' : ' ') + FormatLunarMonth(lDObj.month) + ' '+ FormatLunarDay(lDObj.day);

		return lunarday;
	}
	
	var now = new Date();