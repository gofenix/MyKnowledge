/*****************************************************************************
                                   ��������
*****************************************************************************/
//�������� *��ʾ�ż���
	var sFtv = new Array(
        "0101*Ԫ��",
        "0106  �й�13���˿���",
        "0110  �й�110������",

        "0202  ����ʪ����",
        "0204  ���翹��֢��",
        "0210  ����������",
        "0214  ���˽�",
        "0221  ����ĸ����",
        "0207  ������Ԯ�Ϸ���",

        "0303  ȫ��������",
        "0308  ��Ů��",
        "0312  ֲ���� ����ɽ����������",
        "0315  ������Ȩ�汣����",
        "0321  ����ɭ����",
        "0322  ����ˮ��",
        "0323  ����������",
        "0324  ������ν�˲���",

        "0401  ���˽�",
        "0407  ����������",
        "0422  ���������",

        "0501*�����Ͷ���",
        "0504  �й������",
        "0505  ȫ����ȱ������",
        "0508  �����ʮ����",
        "0512  ���ʻ�ʿ��",
        "0515  ���ʼ�ͥ��",
        "0517  ���������",
        "0518  ���ʲ������",
        "0519  �й��봨���𰧵��� ȫ��������",
        "0520  ȫ��ѧ��Ӫ����",
        "0522  ���������������",
        "0523  ����ţ����",
        "0531  ����������",

        "0601  ���ʶ�ͯ��",
        "0605  ���绷����",
        "0606  ȫ��������",
        "0617  ���λ�Į���͸ɺ���",
        "0623  ���ʰ���ƥ����",
        "0625  ȫ��������",
        "0626  ���ʷ���Ʒ��",

        "0701  ������ ��ۻع������",
        "0707  ����ս��������",
        "0711  �����˿���",

        "0801  ��һ������",
        "0815  �ձ���ʽ����������Ͷ����",

        "0908  ����ɨä��",
        "0909  ë������������",
        "0910  ��ʦ��",
        "0916  ���ʳ����㱣����",
        "0917  ���ʺ�ƽ��",
        "0918  �š�һ���±������",
        "0920  ���ʰ�����",
        "0927  ����������",
        "0928  ���ӵ���",

        "1001*����� �������ֽ� �������˽�",
        "1002  ���ʼ�����Ȼ�ֺ���",
        "1004  ���綯����",
        "1007  ����ס����",
        "1008  �����Ӿ��� ȫ����Ѫѹ��",
        "1009  ����������",
        "1010  �������������� ���羫��������",
        "1015  ����ä�˽�",
        "1016  ������ʳ��",
        "1017  ��������ƶ����",
        "1022  ���紫ͳҽҩ��",
        "1024  ���Ϲ���",
        "1025  �����컨������",
        "1026  ��������",
        "1031  ��ʥ��",

        "1107  ʮ������������������",
        "1108  �й�������",
        "1109  ����������",
        "1110  ���������",
        "1112  ����ɽ����",
        "1114  ����������",
        "1117  ���ʴ�ѧ����",

        "1201  ���簬�̲���",
        "1203  ����м�����",
        "1209  ����������",
        "1210  ������Ȩ��",
        "1212  �����±������",
        "1213  �Ͼ�����ɱ",
        "1220  ���Żع������",
        "1221  ����������",
        "1224  ƽ��ҹ",
        "1225  ʥ���� ����ǿ��������",
        "1226  ë�󶫵���")

	//ũ������ *��ʾ�ż���
	var lFtv = new Array(
        "0101*����",
        "0102*�������",
        "0103*�������",
        "0105  ·������",
        "0115  Ԫ����",
        "0202  ��̧ͷ",
        "0219  ������ʥ��",
        "0404  ��ʳ��",
        "0408  �𵮽� ",
        "0505*�����",
        "0606  ���ܽ� �ùý�",
        "0624  �����ѽ�",
        "0707  ��Ϧ���˽�",
        "0714  ���(�Ϸ�)",
        "0715  ������",
        "0730  �زؽ�",
        "0815*�����",
        "0909  ������",
        "1001  �����",
        "1117  �����ӷ�ʥ��",
        "1208  ���˽� ���������ɵ���",
        "1223  ��С��",
        "0100*��Ϧ")

	//ĳ�µĵڼ������ڼ�
	var wFtv = new Array(
	"0131 Martin Luther King Day",
	"0231 President's Day",
	"0520 ĸ�׽�",
	"0530 Armed Forces Day",
	"0531 Victoria Day",
	"0716 ������",
	"0730 ��ū�۹�����",
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
	var Gan=new Array("��","��","��","��","��","��","��","��","��","��");
	var Zhi=new Array("��","��","��","î","��","��","��","δ","��","��","��","��");
	var Animals=new Array("��","ţ","��","��","��","��","��","��","��","��","��","��");
	var solarTerm = new Array("С��","��","����","��ˮ","����","����","����","����","����","С��","â��","����","С��","����","����","����","��¶","���","��¶","˪��","����","Сѩ","��ѩ","����")
	var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758)
	var nStr1 = new Array('��','һ','��','��','��','��','��','��','��','��','ʮ')
	var nStr2 = new Array('��','ʮ','إ','ئ','��')
	var monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");


	/*****************************************************************************
										  ���ڼ���
	*****************************************************************************/

	//====================================== ����ũ�� y���������
	function lYearDays(y) {
	   var i, sum = 348
	   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0
	   return(sum+leapDays(y))
	}

	//====================================== ����ũ�� y�����µ�����
	function leapDays(y) {
	   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29)
	   else return(0)
	}

	//====================================== ����ũ�� y�����ĸ��� 1-12 , û�򴫻� 0
	function leapMonth(y) {
	   return(lunarInfo[y-1900] & 0xf)
	}

	//====================================== ����ũ�� y��m�µ�������
	function monthDays(y,m) {
	   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )
	}

	//====================================== ���ũ��, �����������, ����ũ���������
	//                                       ����������� .year .month .day .isLeap .yearCyl .dayCyl .monCyl
	function Lunar(objDate) {

	   var i, leap=0, temp=0
	   var baseDate = new Date(1900,0,31)
	   var offset   = (objDate - baseDate)/86400000

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

	   leap = leapMonth(i) //���ĸ���
	   this.isLeap = false

	   for(i=1; i<13 && offset>0; i++) {
		  //����
		  if(leap>0 && i==(leap+1) && this.isLeap==false)
			 { --i; this.isLeap = true; temp = leapDays(this.year); }
		  else
			 { temp = monthDays(this.year, i); }

		  //�������
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

	//==============================���ع��� y��ĳm+1�µ�����
	function solarDays(y,m) {
	   if(m==1)
		  return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28)
	   else
		  return(solarMonth[m])
	}
	//============================== ���� offset ���ظ�֧, 0=����
	function cyclical(num) {
	   return(Gan[num%10]+Zhi[num%12])
	}

	//============================== ��������
	function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

		  this.isToday    = false;
		  //����
		  this.sYear      = sYear;
		  this.sMonth     = sMonth;
		  this.sDay       = sDay;
		  this.week       = week;
		  //ũ��
		  this.lYear      = lYear;
		  this.lMonth     = lMonth;
		  this.lDay       = lDay;
		  this.isLeap     = isLeap;
		  //��֧
		  this.cYear      = cYear;
		  this.cMonth     = cMonth;
		  this.cDay       = cDay;

		  this.color      = '';

		  this.lunarFestival = ''; //ũ������
		  this.solarFestival = ''; //��������
		  this.solarTerms    = ''; //����

	}

	//===== ĳ��ĵ�n������Ϊ����(��0С������)
	function sTerm(y,n) {
	   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) )
	   return(offDate.getUTCDate())
	}

	//====================== ��������
	function cDay(d){
	   var s;

	   switch (d) {
		  case 10:
			 s = '��ʮ'; break;
		  case 20:
			 s = '��ʮ'; break;
			 break;
		  case 30:
			 s = '��ʮ'; break;
			 break;
		  default :
			 s = nStr2[Math.floor(d/10)];
			 s += nStr1[d%10];
	   }
	   return(s);
	}

	///////////////////////////////////////////////////////////////////////////////

	// ��ũ��iLunarMonth�¸�ʽ����ũ����ʾ���ַ���
	function FormatLunarMonth(iLunarMonth) {
		var szText = new String("�������������߰˾�ʮ");
		var strMonth;
		if (iLunarMonth <= 10) {
			strMonth = szText.substr(iLunarMonth - 1, 1);
		}
		else if (iLunarMonth == 11) strMonth = "ʮһ";
		else strMonth = "ʮ��";
		return strMonth + "��";
	}
	// ��ũ��iLunarDay�ո�ʽ����ũ����ʾ���ַ���
	function FormatLunarDay(iLunarDay) {
		var szText1 = new String("��ʮإ��");
		var szText2 = new String("һ�����������߰˾�ʮ");
		var strDay;
		if ((iLunarDay != 20) && (iLunarDay != 30)) {
			strDay = szText1.substr((iLunarDay - 1) / 10, 1) + szText2.substr((iLunarDay - 1) % 10, 1);
		}
		else if (iLunarDay != 20) {
			strDay = szText1.substr(iLunarDay / 10, 1) + "ʮ";
		}
		else {
			strDay = "��ʮ";
		}
		return strDay;
	}
	function solarDay(objDate){
		var SY = objDate.getYear();
		var SM = objDate.getMonth();
		var SD = objDate.getDate();
		var SW = objDate.getDay();
		sDObj = new Date(SY,SM,SD);
		var lDObj = new Lunar(sDObj);
		var sdate = '<font color="blue" style="font-size:9pt;">' + SY + '��' + (SM+1) + '��' + SD + '��<br>����'+nStr1[SW%7]+'</font>';
		var ldate = '<font style="font-size:9pt;color:violet;" >' + (lDObj.isLeap ? '��' : ' ') + FormatLunarMonth(lDObj.month) + ' '+ FormatLunarDay(lDObj.day) + '</font>';
		var cdate = '<font style="font-size:9pt;color:violet;" >'+'��'+Animals[(SY-4)%12]+'��'+cyclical(lDObj.yearCyl) + '�� '+cyclical(lDObj.monCyl)+'�� '+cyclical(lDObj.dayCyl)+'��' +'</font>';
		//
		var festival='',solarTerms='',solarFestival='',lunarFestival='',tmp1,tmp2;
		//ũ������ 
		for(i in lFtv)
		if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
		   tmp1=Number(RegExp.$1)-lDObj.month
		   tmp2=Number(RegExp.$2)-lDObj.day
		   if(tmp1==0 && tmp2==0) lunarFestival=RegExp.$4 
		}
		//��������
		for(i in sFtv)
		if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)){
		   tmp1=Number(RegExp.$1)-(SM+1)
		   tmp2=Number(RegExp.$2)-SD
		   if(tmp1==0 && tmp2==0) solarFestival = RegExp.$4 
		}
		//����
		tmp1 = new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2+1]*60000)+Date.UTC(1900,0,6,2,5))
		tmp2 = tmp1.getUTCDate()
		if (tmp2==SD) solarTerms = solarTerm[SM*2+1] 
		tmp1 = new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2]*60000)+Date.UTC(1900,0,6,2,5))
		tmp2= tmp1.getUTCDate()
		if (tmp2==SD) solarTerms = solarTerm[SM*2]
		if(solarTerms == '' && solarFestival == '' && lunarFestival == '')
			festival = '';
		else
			festival = '<TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR="#CCFFCC"><TR><TD align=center><marquee direction=left scrolldelay=120 behavior=alternate>'+
			'<FONT COLOR="#FF33FF" STYLE="font-size:9pt;"><b>'+solarTerms + ' ' + solarFestival + ' ' + lunarFestival+'</b></FONT></marquee></TD>'+
			'</TR></TABLE>';
		var s= '<TABLE WIDTH="160" BORDER=0 CELLPADDING="2" CELLSPACING=0 style="filter:Alpha(opacity=80)"><TR><TD>' + '<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN="right">'+sdate+' '+'<br>'+ldate+'<br>'+cdate+'</TD></TR></TABLE>'+ festival +'</TD></TR></TABLE>';
		var s1='<table border="1" cellspacing="3" width="130" bordercolor="#000000" bgcolor="#FFFFFF" height="110" cellpadding="2")'+'<tr><td align="center"><b><font color=#008040>'+SY + '��' + (SM+1) + '��' +'</font><br><font face="Arial" size="6" color=#FF8040>'+ SD + '��'+'</font><br><font color=#008040><span style="FONT-SIZE: 10.5pt">'+'����'+nStr1[SW%7]+'</span></font>'+'<br><font color=#9B4E00>'+ (lDObj.isLeap ? '��' : ' ') + FormatLunarMonth(lDObj.month) + ' '+ FormatLunarDay(lDObj.day) +'</font></b>'+ festival +'</td></tr></table>';
		return(s1);
	}
	
	//============================== ����������� ()
	function lunarcalendar(objDate) {
		var SY = objDate.getYear();
		var SM = objDate.getMonth();
		var SD = objDate.getDate();
		var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2
		sDObj = new Date(SY,SM,SD); //����ũ������
		var lDObj = new Lunar(sDObj); //ũ��
		 lY    = lDObj.year           //ũ����
		 lM    = lDObj.month          //ũ����
		 lD    = lDObj.day            //ũ����
		 lL    = lDObj.isLeap         //ũ���Ƿ�����
		 lX    = lL? leapDays(lY): monthDays(lY,lM) //ũ����������һ��
		var SW = objDate.getDay()    //��������1�����ڼ�
		var lunarday = new calElement(SY, SM, SD, nStr1[SW%7],
								   lY, lM, lD++, lL,
								   cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) )
	    //
		var festival='',solarTerms='',solarFestival='',lunarFestival='',tmp1,tmp2;
		//ũ������ 
		for(i in lFtv)
		if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
		   tmp1=Number(RegExp.$1)-lDObj.month
		   tmp2=Number(RegExp.$2)-lDObj.day
		   if(tmp1==0 && tmp2==0) lunarFestival=RegExp.$4 
		}
		//��������
		for(i in sFtv)
		if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)){
		   tmp1=Number(RegExp.$1)-(SM+1)
		   tmp2=Number(RegExp.$2)-SD
		   if(tmp1==0 && tmp2==0) solarFestival = RegExp.$4 
		}
		//����
		tmp1 = new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2+1]*60000)+Date.UTC(1900,0,6,2,5))
		tmp2 = tmp1.getUTCDate()
		if (tmp2==SD) solarTerms = solarTerm[SM*2+1] 
		tmp1 = new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2]*60000)+Date.UTC(1900,0,6,2,5))
		tmp2= tmp1.getUTCDate()
		if (tmp2==SD) solarTerms = solarTerm[SM*2]
		lunarday.solarTerms = solarTerms;
		lunarday.solarFestival = solarFestival;
		lunarday.lunarFestival = lunarFestival;
		return lunarday;
	}
	var now = new Date();