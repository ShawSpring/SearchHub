// 默认情况下 百度搜索
//https://www.baidu.com/s?wd=window%20open


var searchbar = $('#search-sth');
$('#search-sth').keydown(function(event){
  if(event.keyCode=="13"){
    var text = $(this).val().trim();
    window.open('https://www.baidu.com/s?wd='+text);
  }
});

$('.item a').click(function (e) {
    e.preventDefault();
    var text = searchbar.val().trim(); // 搜索文本
   // var link = $(this).attr('href');
    var item = $(this).children('i').attr('class').split(' ')[1]; //截取 点击的 项别
    search_on_link(item,text);
  }
);



function isChinese(text) {
  var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  if (reg.test(text)) {
    return true;
  } else {
    return false;
  }
}