/**
 * Created by Remy Jr on 2016/3/27.
 */
function judge(){
    var value = document.getElementById("value").value;
    var check = new RegExp("^[0-9]*$","g");
    if(check.exec(value)&&value.length>0){
        return true;
    }else {
        return false;
    }
}
function createP(){
    if(judge()==true){
        var node = document.createElement("p");
        node.innerHTML = document.getElementById("value").value;
        node.className = "number";
        return node;
    }else{
        alert("请输入数字！")
        return null;
    }
}
function leftIn(){
    var Lnode = createP();
    var tmp = document.getElementById("list");
    if(Lnode!=null){
        tmp.insertBefore(Lnode,tmp.firstChild);
    }
}
function rightIn() {
    var Rnode = createP();
    var tmp = document.getElementById("list");
    if (Rnode!= null) {
        tmp.appendChild(Rnode);
    }
}
function leftOut(){
    var tmp = document.getElementById("list");
    var length = tmp.childNodes.length;
    if(length>0){
        first = tmp.firstChild;
        tmp.removeChild(first);
    }else{
        alert("列表中无节点可删除！");
    }
}
function rightOut(){
    var tmp = document.getElementById("list");
    var length = tmp.childNodes.length;
    if(length>0){
        last = tmp.lastChild;
        tmp.removeChild(last);
    }else{
        alert("列表中无节点可删除！");
    }
}