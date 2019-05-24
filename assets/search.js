// 默认情况下 百度搜索
//https://www.baidu.com/s?wd=window%20open

var searchbar = $('#search-sth');


$('.item a').click(function (e) {
  e.preventDefault();
  var text = searchbar.val().trim(); // 搜索文本
  var link = $(this).attr('href');
  var item = $(this).children('i').attr('class').split(' ')[1]; //截取 点击的 项别
  var url = "";
  if (!text) {
    window.open(link);
    return;
  }

  //https://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=sfd
  if (['baidu', 'baiduzhidao'].indexOf(item) >= 0) {
    url = link + "search?" + "word=" + text;
  }
  //https://dict.baidu.com/s?wd=%E6%8B%86&device=pc&from=home
  if ('baiduhanyu' == item) {
    url = "https://dict.baidu.com/s?wd=" + text + "&device=pc&from=home";
  }

  //https://www.zhihu.com/search?type=content&q=wode
  if (['zhihu'].indexOf(item) >= 0) {
    url = link + 'search?' + "type=content&q=" + text;
  }
  //https://wiki.mbalib.com/wiki/Special:Search?search=%E5%8D%8E%E4%B8%BA&fulltext=%E6%90%9C%E7%B4%A2
  if (['mba'].indexOf(item) >= 0) {
    url = link + "Special:Search?search=" + text + "&fulltext=搜索";
  }

  //https://github.com/search?utf8=%E2%9C%93&q=ssr&type=
  if (item == 'github') {
    url = link + "search?utf8=%E2%9C%93&q=" + text;
  }

  //v2ex 用的是 google
  //https://www.google.com/search?q=site:v2ex.com/t%20%E7%88%AC%E8%99%AB
  if (item == 'v2ex') {
    url = "https://www.google.com/search?q=site:v2ex.com/t%20" + text;
  }
  //https://stackoverflow.com/search?q=ssr
  if (item == "stackoverflow") {
    url = link + "search?q=" + text;
  }
  //https://www.w3cschool.cn/search?w=map
  if (item == "w3cschool") {
    url = link + "search?w=" + text;
  }

  //https://www.douban.com/search?q=%E5%B1%B1
  if (['douban'].indexOf(item) >= 0) {
    url = link + "search?q=" + text;
  }

  //https://www.w3cschool.cn/css/dict 通过js交互的
  if (item == "cssdict") {

    url = link;
  }

  //https://tieba.baidu.com/f?ie=utf-8&kw=%E6%B9%96%E4%BA%BA&fr=search
  if (['tieba'].indexOf(item) >= 0) {
    url = link + "f?ie=utf-8&kw=" + text + "&fr=search";
  }

  // https://www.qichacha.com/search?key=ssr
  if (item == 'qichacha') {
    url = "https://www.qichacha.com/search?key=" + text;
  }

  //https://fanyi.baidu.com/translate#zh/en/%E6%98%AF%E5%90%A6
  if (item == "baidutranslate") {
    if (isChinese(text)) {
      url = "https://fanyi.baidu.com/translate#zh/en/" + text;
    } else {
      url = "https://fanyi.baidu.com/translate#en/zh/" + text;
    }
  }
  //https://python3-cookbook.readthedocs.io/zh_CN/latest/search.html?q=slots&check_keywords=yes&area=default
  if (item == "python3-cookbook") {
    url = "https://python3-cookbook.readthedocs.io/zh_CN/latest/search.html?q=" + text + "&check_keywords=yes&area=default";
  }

  //https://docs.djangoproject.com/zh-hans/2.1/search/?q=url
  if (item == "django") {
    url = link + "search/?q=" + text;
  }
  //https://www.iconfont.cn/search/index?searchType=icon&q=user
  if (item == "iconfont") {
    url = "https://www.iconfont.cn/search/index?searchType=icon&q=" + text;
  }
  //https://s.taobao.com/search?q=眼镜
  if (item == "taobao") {
    url = "https://s.taobao.com/search?q=" + text;
  }
  //https://search.jd.com/Search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC&enc=utf-8&wq=%E7%AC%94%E8%AE%B0%E6%9C%AC
  if (item == "jingdong") {
    url = "https://search.jd.com/Search?keyword=" + text + "&enc=utf-8&wq=" + text;
  }
  //https://www.amazon.cn/s?k=%E6%89%8B%E6%9C%BA
  if (item == "amazon") {
    url = "https://www.amazon.cn/s?k=" + text;
  }
  //https://s.1688.com/selloffer/offer_search.htm?keywords=桃子
  if (item == "alibaba") {
    url = "https://s.1688.com/selloffer/offer_search.htm?keywords=" + $URL.encode(text); //转换成 gb2312编码
  }

  //https://search.bilibili.com/all?keyword=%E7%8C%AB&from_source=banner_search
  if (item == "bilibili") {
    url = "https://search.bilibili.com/all?keyword=" + text;
  }
  //https://v.qq.com/x/search/?q=%E9%9A%90%E5%BD%A2%E5%AE%88%E6%8A%A4%E8%80%85&stag=0&smartbox_ab=
  if (item == "tencentvedio") {
    url = "https://v.qq.com/x/search/?q=" + text;
  }

  //https://www.btdx8.com/?s=%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%83
  if (item == "btdx") {
    url = "https://www.btdx8.com/?s=" + text;
  }
  //http://s.ygdy8.com/plus/so.php?typeid=1&keyword=%BE%C8%D4%AE
  if (item == "dytt") {
    url = "http://s.ygdy8.com/plus/so.php?typeid=1&keyword=" + $URL.encode(text);
  }
  if(item=="vdisk"){
    url ="http://vdisk.weibo.com/search/?keyword="+text;
  }

  if(item =="bdwpss"){
    //http://ff.6wu.cc:81/so?keyword=%E4%BC%9A%E8%AE%A1&page=1&url_path=so
    url ="http://ff.6wu.cc:81/so?keyword="+text+"&page=1&url_path=so";
  }
  if(item=="youku"){
    url="https://so.youku.com/search_video/q_"+text;
  }
  if(item == "iqiyi"){
    url="https://so.iqiyi.com/so/q_"+text;
  }
  window.open(url);
});

function isChinese(text) {
  var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  if (reg.test(text)) {
    return true;
  } else {
    return false;
  }
}