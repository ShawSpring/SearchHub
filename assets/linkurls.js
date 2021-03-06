function search_on_link(item, text) {
    var home = searchURL[item].home;
    var search = searchURL[item].search;
    var gbk = searchURL[item].gbk;
    var link = "";
    if (!text) {
        window.open(home);
        return;
    }
    if (gbk) {
        link = search.replace("%keyword%", $URL.encode(text));
    } else {
        link = search.replace("%keyword%", text);
    }
    window.open(link);
}

var searchURL = {
    "iconfont": { //
        "search": "https://www.iconfont.cn/search/index?searchType=icon&q=%keyword%",
        "home": "https://www.iconfont.cn"
    },
    "dytt": { //
        "search": "http://s.ygdy8.com/plus/so.php?typeid=1&keyword=%keyword%",
        "home": "https://www.ygdy8.com/",
        "gbk": true
    },
    "btdx": { //
        "search": "https://www.btdx8.com/?s=%keyword%",
        "home": "https://www.btdx8.com/"
    },
    "django": { //
        "search": "https://docs.djangoproject.com/zh-hans/2.1/search/?q=%keyword%",
        "home": "https://docs.djangoproject.com/zh-hans/2.1/"
    },
    "baiduhanyu": { //
        "search": "https://dict.baidu.com/s?wd=%keyword%&from=home",
        "home": "https://dict.baidu.com/"
    },
    "jquery": { //
        "search": "http://hemin.cn/jq/%keyword%.html",
        "home": "http://hemin.cn/jq/"
    },
    //  这个不好弄
    "cssdict": { //
        "search": "https://www.w3cschool.cn/css/dict",
        "home": "https://www.w3cschool.cn/css/dict"
    },

    "douban": { //
        "search": "http://www.douban.com/search?q=%keyword%",
        "home": "http://www.douban.com"
    },
    "baidu": { //
        "search": "http://www.baidu.com/s?wd=%keyword%",
        "home": "http://www.baidu.com"
    },

    "sinaweibo": { //
        "search": "http://s.weibo.com/weibo/%keyword%",
        "home": "http://weibo.com"
    },
    "_17k": { //
        "search": "https://search.17k.com/search.xhtml?c.st=0&c.q=%keyword%",
        "home": "https://www.17k.com/"
    },
    "zongheng": { //
        "search": "http://search.zongheng.com/s?keyword=%keyword%",
        "home": "http://www.zongheng.com/"
    },
    "motie": { //
        "search": "http://www.motie.com/rest/search?queryString=%keyword%",
        "home": "http://www.motie.com/"
    },
    "chuangshi": { //
        "search": "http://chuangshi.qq.com/search/searchindex/type/all/wd/%keyword%.html",
        "home": "http://chuangshi.qq.com/"
    },
    "ireader": { //
        "search": "http://www.ireader.com/index.php?ca=search.index&keyword=%keyword%",
        "home": "http://www.ireader.com/"
    },

    "163app": {
        "search": "http://m.163.com/search/multiform?platform=1&query=%keyword%",
        "home": "http://m.163.com"
    },
    "xiami": { //
        "search": "http://www.xiami.com/search?key=%keyword%",
        "home": "http://www.xiami.com"
    },
    "wikipediaen": {
        "search": "http://en.wikipedia.org/w/index.php?search=%keyword%",
        "home": "http://en.wikipedia.org"
    },
    "wikipediazh": {
        "search": "http://zh.wikipedia.org/w/index.php?search=%keyword%",
        "home": "http://zh.wikipedia.org"
    },
    "flickr": { //
        "search": "https://secure.flickr.com/search/?q=%keyword%",
        "home": "https://flickr.com"
    },
    "windowsphonecn": {
        "search": "http://www.windowsphone.com/zh-cn/search?q=%keyword%",
        "home": "http://www.windowsphone.com/zh-cn/store"
    },
    "googleplay": {
        "search": "https://play.google.com/store/search?q=%keyword%",
        "home": "https://play.google.com"
    },
    "youku": {
        "search": "http://www.soku.com/search_video/q_%keyword%",
        "home": "http://youku.com"
    },
    "zhihu": {
        "search": "http://www.zhihu.com/search?q=%keyword%",
        "home": "http://www.zhihu.com"
    },
    "quora": {
        "search": "http://www.quora.com/search?q=%keyword%",
        "home": "http://www.quora.com"
    },
    "nounproject": {
        "search": "http://thenounproject.com/search/?q= %keyword%",
        "home": "http://thenounproject.com"
    },
    "iconmonstr": {
        "search": "http://iconmonstr.com/?s=%keyword%",
        "home": "http://iconmonstr.com"
    },
    "wikicommons": {
        "search": "http://commons.wikimedia.org/w/index.php?search=%keyword%",
        "home": "http://commons.wikimedia.org"
    },
    "webstagram": {
        "search": "http://web.stagram.com/search/%keyword%",
        "home": "http://instagram.com"
    },
    "cargo": {
        "search": "http://cargocollective.com/search/%keyword%",
        "home": "http://cargocollective.com"
    },
    "behance": {
        "search": "http://www.behance.net/search?search=%keyword%",
        "home": "http://www.behance.net"
    },
    "godaddy": {
        "search": "http://www.godaddy.com/domains/search.aspx?ci=54814&domainToCheck=%keyword%&tld=.com&checkAvail=1",
        "home": "http://www.godaddy.com"
    },
    "pinterest": { //
        "search": "http://pinterest.com/search/pins/?q=%keyword%",
        "home": "http://pinterest.com/"
    },
    "linkedin": {
        "search": "http://www.linkedin.com/search/fpsearch?type=people&keywords=%keyword%",
        "home": "http://www.linkedin.com"
    },
    "foursquare": {
        "search": "https://foursquare.com/explore?q=%keyword%",
        "home": "https://foursquare.com/"
    },
    "dribbble": {
        "search": "http://dribbble.com/search?q=%keyword%",
        "home": "http://dribbble.com"
    },
    "stackoverflow": {
        "search": "http://stackoverflow.com/search?q=%keyword%",
        "home": "http://stackoverflow.com"
    },
    "github": {
        "search": "https://github.com/search?q=%keyword%",
        "home": "https://github.com"
    },
    "archdaily": {
        "search": "https://www.archdaily.com/search/projects/text/%keyword%",
        "home": "http://www.archdaily.com"
    },
    "vimeo": {
        "search": "https://vimeo.com/search?q=%keyword%",
        "home": "https://vimeo.com"
    },
    "youtube": {
        "search": "https://www.youtube.com/results?search_query=%keyword%",
        "home": "https://www.youtube.com"
    },
    "baiduzhidao": {
        "search": "http://zhidao.baidu.com/search?=search&word=%keyword%",
        "home": "http://zhidao.baidu.com"
    },
    "gettycn": {
        "search": "http://www.gettyimages.cn/newsr.php?thekeyword=sss%keyword%",
        "home": "http://www.gettyimages.cn"
    },
    "gettyimages": {
        "search": "http://www.gettyimages.com/Search/Search.aspx?contractUrl=2&language=en-US&family=creative&assetType=image&excludenudity=false&p=%keyword%",
        "home": "http://www.gettyimages.com"
    },
    "google2": {
        "search": "https://www.ppx.pw/search?q=%keyword%",
        "home": "https://www.ppx.pw"
    },
    "tumblr": { //
        "search": "https://www.tumblr.com/search/%keyword%",
        "home": "http://www.tumblr.com"
    },
    "amazon": { //
        "search": "https://www.amazon.cn/s?k=%keyword%&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&ref=nb_sb_noss_1",
        "home": "http://www.amazon.cn"
    },

    "taobao": { //
        "search": "http://s.taobao.com/search?q=%keyword%",
        "home": "http://taobao.com"
    },
    "jingdong": { //
        "search": "http://search.jd.com/Search?keyword=%keyword%&enc=utf-8",
        "home": "http://jd.com"
    },
    "dianping": { //
        "search": "http://www.dianping.com/search/keyword/1/0_%keyword%",
        "home": "http://www.dianping.com"
    },
    "twitter": { //
        "search": "https://twitter.com/search?q=%keyword%",
        "home": "https://twitter.com"
    },
    "chromeexts": { //
        "search": "https://chrome.google.com/webstore/search/%keyword%",
        "home": "https://chrome.google.com/webstore"
    },
    "v2ex": { //
        "search": "https://google.com/search?q=site:v2ex.com %keyword%",
        "home": "http://v2ex.com"
    },
    "csdn": { //
        "search": "http://so.csdn.net/search?q=%keyword%",
        "home": "http://csdn.net"
    },
    "ziqiangxuetang": { //
        "search": "https://code.ziqiangxuetang.com/django/django-tutorial.html", //无
        "home": "https://code.ziqiangxuetang.com/django/django-tutorial.html"
    },
    "facebook": { //
        "search": "https://www.facebook.com/search/results.php?q=%keyword%",
        "home": "https://www.facebook.com"
    },



    "iconfinder": {
        "search": "http://www.iconfinder.com/search/?q=%keyword%",
        "home": "http://www.iconfinder.com"
    },
    "news163": { //
        "search": "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=site%3Anews.163.com%20%keyword%&oq=%keyword%",
        "home": "http://news.163.com"
    },
    "cnn": { //
        "search": "https://edition.cnn.com/search/?size=10&q=%keyword%",
        "home": "http://cnn.com"
    },
    "bbcnews": { //
        "search": "http://www.bbc.co.uk/search/news/?q=%keyword%",
        "home": "http://www.bbc.co.uk"
    },

    "reuters": { //路透社
        "search": "http://www.reuters.com/search?blob=%keyword%",
        "home": "http://www.reuters.com"
    },

    "googlenewscn": { //
        "search": "https://google.com/search?hl=zh-CN&gl=cn&tbm=nws&q=%keyword%",
        "home": "http://news.google.com.hk/"
    },
    "ifeng": { //
        "search": "http://search.ifeng.com/sofeng/search.action?q=%keyword%",
        "home": "http://ifeng.com"
    },
    'mdn':{ //
        "search":"https://developer.mozilla.org/zh-CN/search?q=%keyword%",
        "home":"https://developer.mozilla.org/zh-CN/"
    },
    'w3ctools':{ //
        "search":"https://123.w3cschool.cn/webtools", // 无
        "home":"https://123.w3cschool.cn/webtools"
    },
    'devdocs':{ //
        "search":"https://devdocs.io/", // 无
        "home":"https://devdocs.io/"
    },
    
    'cnblogs':{ //
        "search":"https://zzk.cnblogs.com/s?t=b&w=%keyword%", 
        "home":"https://www.cnblogs.com/"
    },
    
    "imdb": { //
        "search": "http://www.imdb.com/find?q=%keyword%",
        "home": "http://www.imdb.com"
    },

    "freeimages": { //
        "search": "https://cn.freeimages.com/search/%keyword%",
        "home": "https://cn.freeimages.com/"
    },
    "huaban":{ //
        "search":"https://huaban.com/search/?q=%keyword%",
        "home":"https://huaban.com/"
    },
    "ivsky":{ //天堂图片网
        "search":"https://www.ivsky.com/search.php?q=%keyword%",
        "home":"https://www.ivsky.com/"
    },
    "qianku": { //千库网
        "search": "https://588ku.com/", // 需要汉字转拼音
        "home": "https://588ku.com/"
    },
    "picjumbo":{
        "search":"https://picjumbo.com/?s=%keyword%",
        "home":"https://picjumbo.com/"
    },
    "qyer": { /// 穷游网
        "search": "http://search.qyer.com/index?wd=%keyword%",
        "home": "http://search.qyer.com"
    },

    "tools": { //
        "search": "https://tool.lu/search/?query=%keyword%",
        "home": "https://tool.lu/"
    },
    "xunleicang": { // 迅雷仓
        "search": "https://www.xunleicang.com/vod-search/?wd=%keyword%",
        "home": "https://www.xunleicang.com/"
    },

    "piaohua": { // 飘花资源网
        "search": "https://www.piaohua.com/plus/search.php?kwtype=0&keyword=%keyword%&searchtype=%E5%BD%B1%E8%A7%86%E6%90%9C%E7%B4%A2",
        "home": "https://www.piaohua.com/"
    },

    "vueapi": { //
        "search": "https://cn.vuejs.org/v2/api/", // 无
        "home": "https://cn.vuejs.org/v2/api/"
    },
    "weibopic": { // 
        "search": "http://s.weibo.com/pic/%keyword%",
        "home": "http://photo.weibo.com/"
    },
    "appstorm": {
        "search": "http://appstorm.net/?s=%keyword%",
        "home": "http://appstorm.net"
    },
    "soundcloud": {
        "search": "https://soundcloud.com/search?q=%keyword%",
        "home": "https://soundcloud.com"
    },

    "guokr": {
        "search": "http://www.guokr.com/search/all/?wd=%keyword%",
        "home": "http://www.guokr.com"
    },
    "qiushibaike": {
        "search": "http://www.baidu.com/baidu?word=&ie=utf-8&tn=bds&cl=3&ct=2097152&si=www.qiushibaike.com&s=on%keyword%",
        "home": "http://www.qiushibaike.com"
    },
    "lofter": { //
        "search": "http://www.lofter.com/tag/%keyword%",
        "home": "http://www.lofter.com"
    },

    "bing": {
        "search": "http://www.bing.com/search?q=%keyword%",
        "home": "http://www.bing.com"
    },

    "doubanmovie": {
        "search": "http://movie.douban.com/subject_search?search_text=%keyword%",
        "home": "http://movie.douban.com"
    },
    "doubanmusic": {
        "search": "http://music.douban.com/subject_search?search_text=%keyword%",
        "home": "http://music.douban.com"
    },
    "imgur": { //
        "search": "https://imgur.com/search?q=pyra%keyword%",
        "home": "http://imgur.com"
    },
    "dxy": { // 丁香园
        "search": "http://search.dxy.cn/?words=%keyword%",
        "home": "http://dxy.cn"
    },
    "dahuawang": {
        "search": "http://stu.dahuawang.com/?s=%keyword%",
        "home": "http://stu.dahuawang.com"
    },
    "tieba": { //
        "search": "http://tieba.baidu.com/f?ie=utf-8&kw=%keyword%",
        "home": "http://tieba.baidu.com"
    },
    "mop": {
        "search": "http://www.baidu.com/s?wd=site%3Amop.com+%keyword%",
        "home": "http://www.baidu.com"
    },
    "qidian": { //
        "search": "http://sosu.qidian.com/searchresult.aspx?searchkey=&searchtype=%E7%BB%BC%E5%90%88%keyword%",
        "home": "http://qidian.com"
    },
    "doubanbook": { //
        "search": "http://book.douban.com/subject_search?search_text=%keyword%",
        "home": "http://book.douban.com"
    },
    "kdnet": {
        "search": "http://search.kdnet.net/?q=%keyword%",
        "home": "http://kdnet.net"
    },
    "doubanapp": {
        "search": "http://www.douban.com/app/search?q=%keyword%",
        "home": "http://www.douban.com"
    },
    "googleplus": { // google+
        "search": "https://plus.google.com/u/0/s/%keyword%",
        "home": "https://plus.google.com"
    },
    "appstore": {
        "search": "https://fnd.io/#/us/search?mediaType=music&term=%keyword%",
        "home": "https://fnd.io/#/cn/charts/iphone/top-free/all"
    },
    "appdesignserved": {
        "search": "http://www.appdesignserved.co/search?search=%keyword%",
        "home": "http://www.appdesignserved.co"
    },
    "etao": {
        "search": "http://s.etao.com/search?q=%keyword%",
        "home": "http://etao.com"
    },
    "ishare": {
        "search": "http://ishare.iask.sina.com.cn/search.php?key=%keyword%",
        "home": "http://ishare.iask.sina.com"
    },
    "pandora": {
        "search": "http://www.pandora.com/search/%keyword%",
        "home": "http://www.pandora.com"
    },
    "lynda": {
        "search": "http://www.lynda.com/search?q=%keyword%",
        "home": "http://www.lynda.com"
    },
    "istockphoto": {
        "search": "http://www.istockphoto.com/search/text/%keyword%",
        "home": "http://www.istockphoto.com"
    },
    "medium": {
        "search": "https://medium.com/search?q=%keyword%",
        "home": "http://medium.com"
    },
    "giphy": {
        "search": "http://giphy.com/tags/%keyword%",
        "home": "http://giphy.com"
    },
    "caawiki": {
        "search": "http://caawiki.ivyb.org/index.php?title=%E7%89%B9%E6%AE%8A%3A%E6%90%9C%E7%B4%A2&search=%keyword%",
        "home": "http://caawiki.ivyb.org"
    },
    "alternativeto": {
        "search": "http://alternativeto.net/browse/search?q=%keyword%",
        "home": "http://alternativeto.net"
    },
    "lackar": {
        "search": "https://google.com/search?q=site:lackar.com %keyword%",
        "home": "http://lackar.com"
    },
    "appannie": {
        "search": "http://www.appannie.com/search/?q=%keyword%",
        "home": "http://www.appannie.com"
    },
    "fancy": {
        "search": "http://www.fancy.com/search?q=%keyword%",
        "home": "http://www.fancy.com"
    },
    "xyo": {
        "search": "http://xyo.net/iphone/%keyword%/?country=CN",
        "home": "http://xyo.net"
    },
    "knowyourmeme": {
        "search": "http://knowyourmeme.com/search?q=%keyword%",
        "home": "http://knowyourmeme.com"
    },
    "bilibili": { //
        "search": "http://www.bilibili.com/search?keyword=%keyword%",
        "home": "http://www.bilibili.com"
    },
    "ted": { //
        "search": "http://www.ted.com/search?cat=ss_all&q=%keyword%",
        "home": "http://www.ted.com"
    },
  
    "xiachufang": { // 下厨房
        "search": "http://www.xiachufang.com/search/?keyword=%keyword%",
        "home": "http://www.xiachufang.com"
    },
    "acfun": {
        "search": "http://www.acfun.cn/search/?#query=%keyword%",
        "home": "http://www.acfun.cn"
    },
    "mgtv": {
        "search": "https://so.mgtv.com/so/k-%keyword%",
        "home": "https://www.mgtv.com/"
    },
 
    "duokan": {  // 多看阅读
        "search": "http://book.duokan.com/search/%keyword%",
        "home": "http://book.duokan.com"
    },
    "artstack": {
        "search": "https://theartstack.com/search?utf8=✓&q=%keyword%",
        "home": "http://theartstack.com"
    },
 
    "googleimage": {
        "search": "https://google.com/search?q=%keyword%&source=lnms&tbm=isch",
        "home": "http://203.116.165.138//imghp?sbi=1"
    },
    "googlemaps": {
        "search": "https://maps.google.com.tw/maps?q=%keyword%",
        "home": "https://maps.google.com"
    },
    "googleditu": {
        "search": "http://www.google.cn/maps/search/%keyword%",
        "home": "https://www.google.cn/maps"
    },
    "processing": {
        "search": "https://google.com/search?as_sitesearch=processing.org&as_q=%keyword%",
        "home": "http://processing.org"
    },
    "w3cschool": { //
        "search": "https://www.w3cschool.cn/search?w=%keyword%",
        "home": "https://www.w3cschool.cn/"
    },
    "wandoujia": { //
        "search": "http://www.wandoujia.com/search?key=%keyword%",
        "home": "http://www.wandoujia.com"
    },
   

    "kindle": { //
        "search": "http://www.amazon.cn/s/ref=nb_sb_noss?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&url=node%3D116169071&field-keywords=%keyword%",
        "home": "http://www.amazon.cn/Kindle%E5%95%86%E5%BA%97/b?node=116087071"
    },
    "indiegogo": {
        "search": "http://www.indiegogo.com/projects?utf8=%E2%9C%93&filter_title=%keyword%&search_submit=Search",
        "home": "http://www.indiegogo.com"
    },
    "xueqiu": { // 雪球 投资股票类的
        "search": "http://xueqiu.com/k?q=%keyword%",
        "home": "http://xueqiu.com"
    },
   
    "artsy": {
        "search": "https://artsy.net/search?q=%keyword%",
        "home": "https://artsy.net"
    },
    "googleart": {
        "search": "https://google.com/culturalinstitute/browse/%keyword%",
        "home": "https://www.google.com/culturalinstitute/"
    },
    "arstechnica": {
        "search": "http://arstechnica.com/search/?query=%keyword%",
        "home": "http://arstechnica.com"
    },
    "qqnews": { //
        "search": "http://www.soso.com/q?w=%keyword%&cid=qs.news.smb&site=news.qq.com&idx=f",
        "home": "http://news.qq.com"
    },
   
    "wiktionary": {
        "search": "http://en.wiktionary.org/w/index.php?search=%keyword%",
        "home": "http://en.wiktionary.org"
    },
    "wikibooks": {
        "search": "http://en.wikibooks.org/w/index.php?search=%keyword%",
        "home": "http://en.wikibooks.org"
    },
    "wikinews": { // wiki 新闻
        "search": "http://en.wikinews.org/w/index.php?search=%keyword%",
        "home": "http://en.wikinews.org"
    },
    "wikidata": {
        "search": "http://www.wikidata.org/w/index.php?search=%keyword%",
        "home": "http://www.wikidata.org"
    },
    "wikiquote": {
        "search": "http://en.wikiquote.org/w/index.php?search=%keyword%",
        "home": "http://en.wikiquote.org"
    },
    "wikileaks": {
        "search": "https://encrypted.google.com/search?as_sitesearch=wikileaks.org&as_q=%keyword%",
        "home": "https://wikileaks.org"
    },
    "doubanalbum": {
        "search": "https://google.com/search?as_sitesearch=www.douban.com/photos/album&as_q=%keyword%",
        "home": "http://www.douban.com"
    },
    "tripadvisor": { // 猫途鹰
        "search": "http://www.tripadvisor.com/Search?q=%keyword%",
        "home": "http://www.tripadvisor.com"
    },
    "chanyouji": {
        "search": "http://chanyouji.com/search/attractions?q=%keyword%",
        "home": "http://chanyouji.com"
    },
    "breadtrip": { // 面包旅行
        "search": "http://breadtrip.com/search/?q=%keyword%",
        "home": "http://breadtrip.com"
    },
    "yyets": { // 含羞草
        "search": "http://hxcav6.com/index.aspx?AgentID=23707",
        "home": "http://hxcav6.com/index.aspx?AgentID=23707"
    },
    "weipan": { //
        "search": "http://vdisk.weibo.com/search/?type=public&keyword=%keyword%",
        "home": "http://vdisk.weibo.com"
    },
    // "shooter": { // 射手网  已关闭
    //     "search": "http://www.shooter.cn/search2/%keyword%",
    //     "home": "http://www.shooter.cn"
    // },
    "Quixey": {
        "search": "https://www.quixey.com/search/%keyword%",
        "home": "https://www.quixey.com"
    },
    "minecraftwiki": {
        "search": "http://zh.minecraftwiki.net/%keyword%",
        "home": "http://zh.minecraftwiki.net"
    },
    "yahoo": {
        "search": "http://search.yahoo.com/search?p=%keyword%",
        "home": "http://yahoo.com"
    },
    "designernews": {
        "search": "https://www.designernews.co/search?q=%keyword%",
        "home": "https://www.designernews.co"
    },
    "torrentsto": {
        "search": "http://www.torrents.to/search/kickasstorrents/%keyword%",
        "home": "http://www.torrents.to"
    },
    "tut": {
        "search": "http://hub.tutsplus.com/search?utf8=%E2%9C%93&search%5Bkeywords%5D=%keyword%",
        "home": "http://hub.tutsplus.com"
    },
    "googletrans": {
        "search": "https://translate.google.com/?q=%keyword%",
        "home": "https://translate.google.com"
    },
    "knicket": {
        "search": "http://en.knicket.com/overview/iphone/%keyword%",
        "home": "http://en.knicket.com"
    },
    "tudou": {
        "search": "http://www.soku.com/t/nisearch/%keyword%",
        "home": "http://www.tudou.com"
    },
    "ebay": {
        "search": "http://www.ebay.com/sch/%keyword%",
        "home": "http://www.ebay.com"
    },
    "brandsoftheworld": {
        "search": "http://www.brandsoftheworld.com/search/logo?search_api_views_fulltext=%keyword%",
        "home": "http://www.brandsoftheworld.com"
    },
    "beautifulpixels": {
        "search": "https://beautifulpixels.com/?s=%keyword%",
        "home": "https://beautifulpixels.com"
    },
    "aboutme": {
        "search": "http://about.me/search/#!/q/%keyword%",
        "home": "http://about.me"
    },
    "appledev": { //apple developer
        "search": "https://developer.apple.com/search/index.php?q=%keyword%",
        "home": "https://developer.apple.com"
    },
    "cocoacontrols": {
        "search": "https://www.cocoacontrols.com/search?utf8=✓&q=%keyword%",
        "home": "https://www.cocoacontrols.com"
    },
    "cocoachina": {
        "search": "https://google.com/search?q=%keyword%+site%3Acocoachina.com",
        "home": "http://cocoachina.com"
    },
    "code4app": {
        "search": "http://code4app.com/search/%keyword%",
        "home": "http://code4app.com"
    },
    "steam": { //
        "search": "http://store.steampowered.com/search/?snr=1_4_4__12&term=%keyword%",
        "home": "http://store.steampowered.com"
    },
    "indiedb": {
        "search": "http://www.indiedb.com/search?q=%keyword%",
        "home": "http://www.indiedb.com"
    },
    "gmail": { //
        "search": "https://mail.google.com/mail/u/0/#search/%keyword%",
        "home": "https://mail.google.com"
    },
    "niice": {
        "search": "https://niice.co/search/%keyword%",
        "home": "http://niice.co"
    },
    "tagboard": {
        "search": "https://tagboard.com/%keyword%",
        "home": "https://tagboard.com"
    },
    "fndio": {
        "search": "https://fnd.io/#/search?mediaType=ios&term=%keyword%",
        "home": "https://fnd.io/#/cn/charts/iphone/top-free/all"
    },
    "cocoapods": {
        "search": "http://cocoapods.org/?q=%keyword%",
        "home": "http://cocoapods.org"
    },
    "wolframalpha": {
        "search": "http://www.wolframalpha.com/input/?i=%keyword%",
        "home": "http://www.wolframalpha.com"
    },
    "duckduckgo": {
        "search": "https://duckduckgo.com/?q=%keyword%",
        "home": "https://duckduckgo.com"
    },
    "houzz": {
        "search": "http://www.houzz.com/%keyword%",
        "home": "http://www.houzz.com"
    },
    "dangdang": {
        "search": "http://search.dangdang.com/?key=%keyword%",
        "home": "http://dangdang.com"
    },
    "googletrends": {
        "search": "https://trends.google.com/trends/explore?q=%keyword%",
        "home": "ttps://trends.google.com/trends"
    },
    "spotify": {
        "search": "https://open.spotify.com/search/results/%keyword%",
        "home": "https://spotify.com"
    },
    "aol": {
        "search": "http://search.aol.com/aol/search?&q=%keyword%",
        "home": "http://aol.com"
    },
    "corbis": {
        "search": "http://www.corbisimages.com/Search#p=1&q=%keyword%",
        "home": "http://www.corbisimages.com"
    },
    "patterntap": {
        "search": "http://patterntap.com/?terms=%keyword%",
        "home": "http://patterntap.com"
    },
    "music163": { //
        "search": "http://music.163.com/#/search/m/?s=%keyword%",
        "home": "http://music.163.com"
    },
    "baidumap": {
        "search": "http://map.baidu.com/?newmap=1&s=con%26wd%3D%keyword%",
        "home": "http://map.baidu.com"
    },
    "grooveshark": {
        "search": "http://grooveshark.com/#!/search?q=%keyword%",
        "home": "http://grooveshark.com"
    },
    "baiduyun": {
        "search": "https://google.com/search?q=site%3Apan.baidu.com %keyword%",
        "home": "http://pan.baidu.com"
    },
    "wxgongzhonghao": {
        "search": "http://weixin.sogou.com/weixin?type=1&query=%keyword%",
        "home": "http://weixin.sogou.com"
    },
    "wxwenzhang": {
        "search": "http://weixin.sogou.com/weixin?type=2&query=%keyword%",
        "home": "http://weixin.sogou.com"
    },
    "wikihow": {
        "search": "http://zh.wikihow.com/wikiHowTo?search=%keyword%",
        "home": "http://zh.wikihow.com"
    },
    "sf": {
        "search": "http://www.sf-express.com/cn/sc/dynamic_functions/waybill/#search/bill-number/%keyword%",
        "home": "http://www.sf-express.com"
    },
    "chiphell": {
        "search": "http://zhannei.baidu.com/cse/search?s=13836577039777088209&q=%keyword%",
        "home": "http://www.chiphell.com"
    },
    "producthunt": {
        "search": "https://www.producthunt.com/search?q=%keyword%",
        "home": "http://www.producthunt.com"
    },
    "apisio": { //
        "search": "http://apis.io/?search=%keyword%",
        "home": "http://apis.io"
    },
    "chromehistory": {
        "search": "chrome://history/#q=%keyword%",
        "home": "chrome://history"
    },
    "chromebookmark": {
        "search": "chrome://bookmarks/#q=%keyword%",
        "home": "chrome://bookmarks"
    },
    "iqiyi": {
        "search": "http://so.iqiyi.com/so/q_%keyword%",
        "home": "http://iqiyi.com"
    },
    "bdwpss": {
        "search": "http://ff.6wu.cc:81/",
        "home": "http://ff.6wu.cc:81/so?keyword=%keyword%&page=1&url_path=so"
    },
    "smzdm": {
        "search": "http://search.smzdm.com/?c=home&s=%keyword%",
        "home": "http://smzdm.com"
    },
    "feedly": {
        "search": "http://feedly.com/i/spotlight/%keyword%",
        "home": "http://feedly.com"
    },
    "archilovers": {
        "search": "http://www.archilovers.com/home/search?keywords=%keyword%",
        "home": "http://www.archilovers.com"
    },
    "googlescholar": {
        "search": "http://scholar.google.com/scholar?q=%keyword%",
        "home": "http://scholar.google.com"
    },
    "sohutv": { //
        "search": "http://so.tv.sohu.com/mts?wd=%keyword%",
        "home": "http://tv.sohu.com/"
    },
    "alibaba": { //
        "search": "http://s.1688.com/selloffer/offer_search.htm?keywords=%keyword%",
        "home": "http://1688.com/",
        "gbk": true
    },
    "appppp": {
        "search": "http://weixin.sogou.com/weixin?type=2&query=appppp+%keyword%",
        "home": "http://mp.weixin.qq.com/profile?src=3&timestamp=1493090466&ver=1&signature=*LFHcRDUhS9uzWCDHX9tHppgBuhvSXrz-q1OIK0MmJSh9hHvQCAfRDRp5xtjIWDO65DbArh3kYJ5aptLW36w3A=="
    },
    "panoramio": {
        "search": "https://google.com/search?q=site%3Awww.panoramio.com %keyword%",
        "home": "http://www.panoramio.com"
    },
    "wired": {
        "search": "http://www.wired.com/?s=%keyword%",
        "home": "http://wired.com/"
    },
    "chromeexp": {
        "search": "https://www.chromeexperiments.com/?q=%keyword%",
        "home": "http://www.chromeexperiments.com/"
    },
    "airbnb": {
        "search": "https://airbnb.com/s/%keyword%",
        "home": "http://airbnb.com/"
    },
    "forvo": {
        "search": "http://www.forvo.com/search/%keyword%",
        "home": "http://www.forvo.com/"
    },
    "goodreads": {
        "search": "http://www.goodreads.com/search?query=%keyword%",
        "home": "http://www.goodreads.com/"
    },
    "architizer": {
        "search": "http://architizer.com/projects/q/q:%keyword%",
        "home": "http://architizer.com/"
    },
    "seeklogo": {
        "search": "http://seeklogo.com/search.html?q=%keyword%",
        "home": "http://seeklogo.com/"
    },
    "sketchfab": {
        "search": "https://sketchfab.com/models?q=%keyword%",
        "home": "https://sketchfab.com/"
    },
    "qdaily": {
        "search": "http://qdaily.com/display/articles/search?search=%keyword%",
        "home": "http://qdaily.com/"
    },
    "twitch": {
        "search": "http://www.twitch.tv/search?query=%keyword%",
        "home": "http://twitch.com/"
    },
    "brandtale": {
        "search": "https://www.brandtale.com/search?q=%keyword%",
        "home": "https://brandtale.com/"
    },
    "rottentomatoes": {
        "search": "http://www.rottentomatoes.com/search/?search=%keyword%",
        "home": "http://rottentomatoes.com/"
    },
    "thepiratebay": {
        "search": "https://thepiratebay.se/search/%keyword%",
        "home": "https://thepiratebay.se/"
    },
    "tianya": {
        "search": "http://search.tianya.cn/bbs?q=%keyword%",
        "home": "http://tianya.cn/"
    },
    "yingyongbao": {
        "search": "http://sj.qq.com/myapp/search.htm?kw=%keyword%",
        "home": "http://sj.qq.com/myapp"
    },
    "codepen": { //
        "search": "http://codepen.io/search?q=%keyword%",
        "home": "http://codepen.io/"
    },
    "urbandictionary": {
        "search": "http://www.urbandictionary.com/define.php?term=%keyword%",
        "home": "http://urbandictionary.com/"
    },
    "themeforest": {
        "search": "http://themeforest.net/search?utf8=%E2%9C%93&term=%keyword%",
        "home": "http://themeforest.net/"
    },
    "instructables": {
        "search": "http://www.instructables.com/howto/%keyword%",
        "home": "http://www.instructables.com/"
    },
    "graphicburger": {
        "search": "http://graphicburger.com/?s=%keyword%",
        "home": "http://graphicburger.com/"
    },
    "itchio": {
        "search": "https://itch.io/search?q=%keyword%",
        "home": "https://itch.io/"
    },
    "ustream": {
        "search": "http://www.ustream.tv/search?q=%keyword%",
        "home": "http://www.ustream.tv"
    },
    "ifttt": {
        "search": "https://ifttt.com/recipes/search?q=%keyword%",
        "home": "http://ifttt.com/"
    },
    "instagram": {
        "search": "https://instagram.com/explore/tags/%keyword%",
        "home": "http://instagram.com/"
    },
    "avira": {
        "search": "https://safesearch.avira.com/#web/result?q=%keyword%",
        "home": "https://safesearch.avira.com"
    },
    "namedotcom": {
        "search": "https://www.name.com/domain/search-3-1/%keyword%",
        "home": "https://www.name.com"
    },
    "vine": {
        "search": "https://vine.co/search/%keyword%",
        "home": "https://vine.co"
    },
    "googlephotos": {
        "search": "https://photos.google.com/search/%keyword%",
        "home": "https://photos.google.com"
    },
    "verygoods": {
        "search": "https://verygoods.co/search?q=%keyword%",
        "home": "https://verygoods.co"
    },
    "thngs": {
        "search": "https://thngs.co/search/%keyword%",
        "home": "https://thngs.co"
    },
    "meilishuo": {
        "search": "http://www.meilishuo.com/search/baobei/?filter=goods&searchKey=%keyword%",
        "home": "http://www.meilishuo.com"
    },
    "tmall": { //
        "search": "https://list.tmall.com/search_product.htm?q=%keyword%",
        "home": "https://www.tmall.com"
    },
    "mogujie": { //
        "search": "http://list.mogujie.com/s?q=%keyword%",
        "home": "http://www.mogujie.com"
    },
    "suning": { //
        "search": "http://search.suning.com/%keyword%/",
        "home": "http://www.suning.com/"
    },
    "fontsinuse": {
        "search": "http://fontsinuse.com/search?terms=%keyword%",
        "home": "http://fontsinuse.com"
    },
    "moegirl": {
        "search": "http://zh.moegirl.org/index.php?search=%keyword%",
        "home": "http://zh.moegirl.org"
    },
    "uncyclopedia": {
        "search": "http://cn.uncyclopedia.wikia.com/index.php?title=Special%3A%E6%90%9C%E7%B4%A2&search=%keyword%",
        "home": "http://cn.uncyclopedia.wikia.com/wiki/%E9%A6%96%E9%A1%B5"
    },
    "coursera": {
        "search": "https://www.coursera.org/courses?query=%keyword%",
        "home": "https://www.coursera.org"
    },
    "mobile01": {
        "search": "http://www.mobile01.com/googlesearch.php?q=%keyword%",
        "home": "http://www.mobile01.com"
    },
    "thinga": {
        "search": "http://thinga.com/feed/search?q=%keyword%",
        "home": "http://thinga.com"
    },
    "google": {
        "search": "https://www.google.com/#newwindow=1&safe=strict&q=%keyword%",
        "home": "https://www.google.com"
    },
    "yhd": { // 一号店
        "search": "http://search.yhd.com/c-/k%keyword%",
        "home": "http://www.yhd.com/"
    },
    "bandcamp": {
        "search": "https://bandcamp.com/search?q=%keyword%",
        "home": "https://bandcamp.com/"
    },
    "unity": {
        "search": "http://docs.unity3d.com/Manual/30_search.html?q=%keyword%",
        "home": "http://unity3d.com/"
    },
    "gaode": {
        "search": "http://ditu.amap.com/search?query=%keyword%&city=100000&geoobj=45.289172%7C9.847584%7C171.851672%7C57.021568",
        "home": "http://ditu.amap.com"
    },
    "sogou": {
        "search": "https://www.sogou.com/web?query=%keyword%",
        "home": "https://www.sogou.com"
    },
    "qqv": {
        "search": "https://v.qq.com/x/search/?q=%keyword%",
        "home": "https://v.qq.com"
    },
    "artstation": {
        "search": "https://www.artstation.com/search?q=%keyword%",
        "home": "https://www.artstation.com"
    },

    "tradingeconomics": {
        "search": "http://www.tradingeconomics.com/search.aspx?q=%keyword%",
        "home": "http://www.tradingeconomics.com/"
    },
    "wdl": {
        "search": "https://www.wdl.org/zh/search/?q=%keyword%",
        "home": "https://www.wdl.org/zh/"
    },
    "letv": {
        "search": "http://so.le.com/s?wd=%keyword%",
        "home": "http://www.letv.com/"
    },
    "theinitium": {
        "search": "https://theinitium.com/search/?q=%keyword%",
        "home": "https://theinitium.com"
    },
    "mbalib": {
        "search": "http://wiki.mbalib.com/wiki/Special:Search?search=%keyword%",
        "home": "http://wiki.mbalib.com/"
    },
    "jianshu": { // 简书
        "search": "http://www.jianshu.com/search?q=%keyword%",
        "home": "http://www.jianshu.com"
    },
    "shuge": {
        "search": "https://shuge.org/?s=%keyword%",
        "home": "https://shuge.org"
    },
    "dgtle": {
        "search": "http://www.dgtle.com/search.php?mod=portal&searchid=9718&searchsubmit=yes&kw=%keyword%",
        "home": "http://www.dgtle.com"
    },

    "khan": {
        "search": "https://www.khanacademy.org/search?page_search_query=%keyword%",
        "home": "https://www.khanacademy.org"
    },
    "worldcat": {
        "search": "https://www.worldcat.org/search?qt=worldcat_org_all&q=%keyword%",
        "home": "https://www.worldcat.org"
    },
    "pingwest": {
        "search": "http://www.pingwest.com/?s=%keyword%",
        "home": "http://www.pingwest.com"
    },
    "googleearth": {
        "search": "https://earth.google.com/web/search/%keyword%",
        "home": "https://earth.google.com/web"
    },
    "mafengwo": {
        "search": "http://www.mafengwo.cn/search/s.php?q=%keyword%",
        "home": "http://www.mafengwo.cn/"
    },
    "pixnet": {
        "search": "https://www.pixnet.net/searcharticle?q=%keyword%",
        "home": "https://www.pixnet.net"
    },
    "vgchartz": {
        "search": "http://www.vgchartz.com/gamedb/?name=%keyword%",
        "home": "http://www.vgchartz.com"
    },
    "coolapk": {
        "search": "https://www.coolapk.com/search?q=%keyword%",
        "home": "https://www.coolapk.com"
    },
    "youdict": {
        "search": "http://www.youdict.com/w/%keyword%",
        "home": "http://www.youdict.com"
    },
    "wenku": {
        "search": "https://wenku.baidu.com/search?word=%keyword%",
        "home": "https://wenku.baidu.com"
    },
    "tianyancha": {
        "search": "http://www.tianyancha.com/search?key=%keyword%",
        "home": "http://www.tianyancha.com"
    },
    "googlebook": {
        "search": "https://www.google.com/search?tbm=bks&hl=zh-CN&q=%keyword%",
        "home": "https://books.google.com/?hl=zh-CN"
    },
    "netflix": {
        "search": "https://www.netflix.com/search?q=%keyword%",
        "home": "https://www.netflix.com"
    },
    "tictail": {
        "search": "https://tictail.com/search?category=products&q=%keyword%",
        "home": "https://tictail.com"
    },
    "naver": {
        "search": "https://search.naver.com/search.naver?query=%keyword%",
        "home": "https://www.naver.com/"
    },
    "pixiv": {
        "search": "https://www.pixiv.net/search.php?word=%keyword%",
        "home": "https://www.pixiv.net"
    },
    "qichacha": { //
        "search": "https://www.qichacha.com/search?key=%keyword%",
        "home": "https://www.qichacha.com"
    },
    "qixin": { // 启信宝
        "search": "https://www.qixin.com/search?key=%keyword%&page=1",
        "home": "https://www.qixin.com/"
    },
    "fandom": {
        "search": "http://fandom.wikia.com/?s=%keyword%",
        "home": "http://fandom.wikia.com"
    },
    "indienova": {
        "search": "https://indienova.com/gamedb/s/%keyword%/p/1",
        "home": "https://indienova.com"
    },
    "pearvideo": {
        "search": "http://www.pearvideo.com/search.jsp?start=0&k=%keyword%",
        "home": "http://www.pearvideo.com"
    },
    "ithome": {
        "search": "https://dyn.ithome.com/search/adt_all_%keyword%_0.html",
        "home": "https://www.ithome.com/"
    },
    "bloomberg": {
        "search": "https://www.bloomberg.com/search?query=%keyword%",
        "home": "https://www.bloomberg.com"
    },
    "lofter": {
        "search": "http://www.lofter.com/tag/%keyword%",
        "home": "http://www.lofter.com"
    },
    "sspai": { // 少数派
        "search": "https://sspai.com/search/article?q=%keyword%",
        "home": "https://sspai.com"
    },
    "skypixel": {
        "search": "https://www.skypixel.com/search?q=%keyword%",
        "home": "https://www.skypixel.com/"
    },
    "ludwig": {
        "search": "https://ludwig.guru/s/%keyword%",
        "home": "https://ludwig.guru"
    },
    "asos": {
        "search": "http://www.asos.com/search/?q=%keyword%",
        "home": "http://www.asos.com"
    },
    "shodan": {
        "search": "https://www.shodan.io/search?query=%keyword%",
        "home": "https://www.shodan.io"
    },
    "douyu": {
        "search": "https://www.douyu.com/search/?kw=%keyword%",
        "home": "https://www.douyu.com"
    },
    "hypebeast": {
        "search": "https://hypebeast.com/zh/search?s=%keyword%",
        "home": "https://hypebeast.com"
    },
    "pincong": {
        "search": "https://www.pin-cong.com/local/search/page/?q=%keyword%",
        "home": "https://www.pin-cong.com"
    },
    "wipo": {
        "search": "http://www.wipo.int/tools/zh/gsearch.html?q=%keyword%",
        "home": "http://www.wipo.int"
    },
    "mastodon": {
        "search": "http://mastodonsearch.jp/cross/?q=%keyword%",
        "home": "https://joinmastodon.org/"
    },
    "xinhua": { //
        "search": "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=site%3Axinhuanet.com%20%keyword%&oq=%keyword%",
        "home": "http://xinhuanet.com"
    },
    "miaopai": { //
        "search": "https://www.miaopai.com/miaopai/topic?topicname=%keyword%",
        "home": "https://www.miaopai.com"
    },
    "kugou": { //
        "search": "http://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=%keyword%",
        "home": "http://www.kugou.com"
    },




    "phaidon": {
        "search": "http://uk.phaidon.com/store/search/?q=%keyword%",
        "home": "http://uk.phaidon.com/"
    }
}