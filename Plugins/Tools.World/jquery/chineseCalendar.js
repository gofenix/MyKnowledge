function ChineseCalendar(dateObj){
    this.dateObj = (dateObj != undefined) ? dateObj : new Date();
    this.SY = this.dateObj.getFullYear();
    this.SM = this.dateObj.getMonth();
    this.SD = this.dateObj.getDate();
    this.lunarInfo = [0x04bd8/* 1900 */,
            0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,
            0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,
            0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,
            0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,
            0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,
            0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,
            0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,
            0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,0x095b0,
            0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,
            0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,
            0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,
            0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,
            0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,
            0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,
            0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,0x14b63,
            0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,0x0a2e0,
            0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,0x052d0,
            0x0a9b8,0x0a950,0x0a4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba0,0x0a5b0,0x052b0,0x0b273,
            0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d260,0x0e968,
            0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a4d0,0x0d150,0x0f252,0x0d520/* 2100 */];
    var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
    var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
    var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
    var SY = this.dateObj.getFullYear();
    var SM = this.dateObj.getMonth();
    var SD = this.dateObj.getDate();

    //==== 传入 offset 传回干支, 0=甲子
    function cyclical(num){
        return(Gan[num%10]+Zhi[num%12]);
    }


    //传回农历 y年闰哪个月 1-12 , 没闰传回 0
    this.leapMonth = function(y){
        return this.lunarInfo[y - 1900] & 0xf;
    };
    //传回农历 y年m月的总天数
    this.monthDays = function(y, m){
        return (this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29;
    };
    //传回农历 y年闰月的天数
    this.leapDays = function(y){
        if (this.leapMonth(y)) {
            return (this.lunarInfo[y - 1900] & 0x10000) ? 30 : 29;
        }
        else {
            return 0;
        }
    };
    //传回农历 y年的总天数
    this.lYearDays = function(y){
        var i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) {
            sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0;
        }
        return sum + this.leapDays(y);
    };
    //算出农历, 传入日期对象, 传回农历日期对象
    //该对象属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl
    this.Lunar = function(dateObj){
        var i, leap = 0, temp = 0, lunarObj = {};
        var baseDate = new Date(1900, 0, 31);
        var offset = (dateObj - baseDate) / 86400000;
        //
        offset = Math.round(offset);
        //
        lunarObj.dayCyl = offset + 40;
        lunarObj.monCyl = 14;
        for (i = 1900; i < 2050 && offset > 0; i++) {
            temp = this.lYearDays(i);
            offset -= temp;
            lunarObj.monCyl += 12;
        }
        if (offset < 0) {
            offset += temp;
            i--;
            lunarObj.monCyl -= 12;
        }
        
        lunarObj.year = i;
        lunarObj.yearCyl = i - 1864;
        leap = this.leapMonth(i);
        lunarObj.isLeap = false;
        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i == (leap + 1) && lunarObj.isLeap == false) {
                --i;
                lunarObj.isLeap = true;
                temp = this.leapDays(lunarObj.year);
            }
            else {
                temp = this.monthDays(lunarObj.year, i)
            }
            if (lunarObj.isLeap == true && i == (leap + 1)) {
                lunarObj.isLeap = false;
            }
            offset -= temp;
            if (lunarObj.isLeap == false) {
                lunarObj.monCyl++;
            }
        }
        
        if (offset == 0 && leap > 0 && i == leap + 1) {
            if (lunarObj.isLeap) {
                lunarObj.isLeap = false;
            }
            else {
                lunarObj.isLeap = true;
                --i;
                --lunarObj.monCyl;
            }
        }
        
        if (offset < 0) {
            offset += temp;
            --i;
            --lunarObj.monCyl
        }
        lunarObj.month = i;
        lunarObj.day = offset + 1;
        return lunarObj;
    };
    //中文日期
    this.cDay = function(m, d){
        var nStr1 = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        var nStr2 = ['初', '十', '廿', '卅', '　'];
        var s;
        if (m > 10) {
            s = '十' + nStr1[m - 10];
        }
        else {
            s = nStr1[m];
        }
        s += '月';
        switch (d) {
            case 10:
                s += '初十';
                break;
            case 20:
                s += '二十';
                break;
            case 30:
                s += '三十';
                break;
            default:
                s += nStr2[Math.floor(d / 10)];
                s += nStr1[d % 10];
        }
        return s;
    };
    this.solarDay2 = function(){
        var sDObj = new Date(this.SY, this.SM, this.SD);
        var lDObj = this.Lunar(sDObj);
        var tt = '农历' + this.cDay(lDObj.month, lDObj.day);
        lDObj = null;
        return tt;
    };
    this.weekday = function(){
        var day = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
        return day[this.dateObj.getDay()];
    };
    this.YYMMDD = function(){
        var dateArr = [this.SY, '年', this.SM + 1, '月', this.SD, '日'];
        return dateArr.join('');
    }
    // 12生肖
    this.animals = function(){
        var sDObj = new Date(SY, SM, SD);
        var lDObj = this.Lunar(sDObj);
        
        var tt = Animals[(SY-4)%12];
        return tt;
    }
    //天干地支
    this.ganZhi = function(){
        var sDObj = new Date(SY, SM, SD);
        var lDObj = this.Lunar(sDObj);
        var tt = cyclical(SY-1900+36)+'年 ';
        return tt;
    }
    //节气（  这里面还有样式！）
    this.solarDay4 = function(){
        var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
        var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑"," 大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
        var lFtv = new Array("0101*春节","0115 元宵节","0505 端午节","0707 七夕情人节","0715 中元节","0815 中秋节","0909 重阳节","1208 腊八节","1224 小年");
        var sFtv = new Array("0101*元旦","0214 情人节","0308 妇女节","0312 植树节","0315 消费者权益日","0401 愚人节","0501 劳动节","0504 青年节","0512 护士节","0601 儿童节","0701 建党节 香港回归纪念","0801 建军节","0808 父亲节","0909 毛席逝世纪念","0910 教师节","0928 孔子诞辰","1001*国庆节","1006 老人节","1024 联合国日","1112 孙中山诞辰","1220 澳门回归纪念","1225 圣诞节","1226 毛席诞辰");

        var sDObj = new Date(SY, SM, SD);
        var lDObj = this.Lunar(sDObj);
        var lDPOS = new Array(3);
        var festival='',solarTerms='',solarFestival='',lunarFestival='',tmp1,tmp2;
        //农历节日
        for (i in lFtv)
          if (lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
                tmp1=Number(RegExp.$1)-lDObj.month;
                tmp2=Number(RegExp.$2)-lDObj.day;
            if(tmp1==0 && tmp2==0)
                lunarFestival=RegExp.$4;
          }
        //国历节日
        for (i in sFtv)
          if (sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)){
                tmp1 = Number(RegExp.$1)-(SM+1);
                tmp2 = Number(RegExp.$2)-SD;
            if (tmp1==0 && tmp2==0)
                solarFestival = RegExp.$4;
          }
        //节气
        tmp1 = new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2+1]*60000)+Date.UTC(1900,0,6,2,5));
        tmp2 = tmp1.getUTCDate();
        if (tmp2 == SD)
            solarTerms = solarTerm[SM*2+1];
        tmp1 = new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2]*60000)+Date.UTC(1900,0,6,2,5));
        tmp2 = tmp1.getUTCDate();
        if (tmp2 == SD)
            solarTerms = solarTerm[SM*2];

        if (solarTerms == '' && solarFestival == '' && lunarFestival == '')
            festival = '';
        else
            festival = solarTerms + ' ' + solarFestival + ' ' + lunarFestival;
        var wq = '';
        if (lunarFestival != '')
            wq = ' ';
        var t = solarTerms + wq + lunarFestival;
        
        return festival;
    }
}