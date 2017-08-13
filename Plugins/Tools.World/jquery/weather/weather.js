/*
 *  ajax 获取天气
 *
 */
 
 var weather_input_obj = null;
 var objApp = window.external;

function refreshWeather(input_obj)
{
	if("object" != typeof(input_obj))
	{
		return false;
	}
	weather_input_obj = input_obj;
	startrequest();
	//input_obj.value = "晴转多云";
}

var xmlhttp;
function createxmlhttprequest()
{
//var xmlhttp=null;
try
  {
  // firefox, opera 8.0+, safari
  xmlhttp=new xmlhttprequest();
  }
catch (e)
  {
  // internet explorer
  try
    {
      xmlhttp = objApp.CreateActiveXObject("msxml2.xmlhttp");
    }
  catch (e)
    {
      xmlhttp = objApp.CreateActiveXObject("microsoft.xmlhttp");
    }
  }
return xmlhttp;
}

function startrequest()
{
	if(weather_input_obj == null)
		return;
    createxmlhttprequest();
    try
    {   
		var url="http://www.wiz.cn/weather/?" + (new Date()).valueOf();
		xmlhttp.onreadystatechange = handlestatechange;
		xmlhttp.open("post", url, true);
		xmlhttp.send(null);
    }
    catch(exception)
    {
        alert("xmlhttp fail");
    }
}
function handlestatechange()
{
    if(xmlhttp.readystate == 4)
    {
        if (xmlhttp.status == 200 || xmlhttp.status == 0)
        {
            var result = xmlhttp.responsetext;
            try{
	            var json = eval("(" + result + ")");
	            //alert('city:'+json.city);
	   			//alert('weather:'+json.weather);
	   			if(json.weather != null || json.weather !="")
	   			{
	   				weather_input_obj.value = json.weather;
	   			}
            }catch(e)
            {
            	//error data
            }
        }
    }
}