while (1)
{
var T=prompt("主题:");
var A=prompt("事件:");
var N=prompt("别名:");
if (T.count * A.count * N.count == 0)
{
alert ("发现未填写元素，请重试。");
continue;
}
break;
}
function run()
{
document.getElementById("demo").innerHTML=T+A+"是怎么回事呢？"+T+"相信大家都很熟悉，但是"+T+A+"是怎么回事呢，下面就让小编带大家一起了解吧。<br/><em>"+T+A+"，其实就是"+N+"</em>，大家可能会很惊讶"+T+"怎么会"+A+"呢？但事实就是这样，小编也感到非常惊讶。<br/>这就是关于"+T+A+"的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！";
document.getElementById("echo").innerHTML="已生成";
}
