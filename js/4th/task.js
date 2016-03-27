/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
var aqiData = [];
function addAqiData(){
    var city = document.getElementById("aqi-city-input").value;
    var weather = document.getElementById("aqi-value-input").value;
    var check1 = new RegExp("[\\u4E00-\\u9FFF]+","g");
    var check2 = new RegExp("^-?\\d+$","g");
    var reg = /\s/g;
    city = city.replace(reg,"");
    weather = weather.replace(reg,"");
    if(check1.exec(city)){
        aqiData[0] = city;
    }else{
        alert("请按要求输入城市名称");
        aqiData[0]=null ;
    }
    if(check2.exec(weather)){
        aqiData[1] = weather;
    }else{
        alert("请按要求输入空气质量");
        aqiData[1]=null ;
    }
    return aqiData;
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById("aqi-table");
    var row = table.insertRow();               //创建列表行
    var cell1 = row.insertCell();              //创建单元格
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var dbutton = document.createElement("input"); // 单元格内创建删除按钮
    cell1.innerHTML = aqiData[0]+":";
    cell2.innerHTML = aqiData[1];
    cell3.appendChild(dbutton);
    dbutton.type = "button";
    dbutton.value = "删除";
    dbutton.name = "Del";
                                     //点击“删除”按钮删除按钮所在行
    dbutton.onclick = function () {
        table.deleteRow(dbutton.parentNode.parentNode.rowIndex);
        }
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    if(aqiData[0]!=null&&aqiData[1]!=null){
        renderAqiList();
    }

}

