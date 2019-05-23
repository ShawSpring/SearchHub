var searchbar = $('#search-sth');

    $('.item a').click(function (e) {
        e.preventDefault();
        var text = searchbar.val();
        var link  = $(this).attr('href');
        var item = $(this).children('i').attr('class').split(' ')[1];
        var url = "";
      // 第一类
      //https://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=sfd
      if(['baidu','baiduzhidao'].indexOf(item)>=0){
          url = link+"search?"+"word="+text;
      }
      // 第二类
      //https://www.zhihu.com/search?type=content&q=wode
      if(['zhihu'].indexOf(item)>=0){
          url = link+'search?'+"type=content&q="+text;
      }

      window.open(url || link);
    });