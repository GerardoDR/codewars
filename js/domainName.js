function domainName(url){
    let dom =""

    if (url.includes("//")) {
        dom = url.split('/')[2];
    }
    else {
        dom = url.split('/')[0];
    }
    
    if(dom.includes('www')){
        dom = dom.split('.')[1]
    } else {
        dom = dom.split('.')[0]        
    }
    dom = dom.split(':')[0];
    dom = dom.split('?')[0];

    return dom;
}

domainName("http://www.blog.classroom.me.uk/index.php")
domainName("http://www.youtube.com/watch?v=ClkQA2Lb_iE")
domainName("https://www.youtube.com/watch?v=ClkQA2Lb_iE")
domainName("www.youtube.com/watch?v=ClkQA2Lb_iE")
domainName("ftps://ftp.websitename.com/dir/file.txt")
domainName("websitename.com:1234/dir/file.txt")
domainName("ftps://websitename.com:1234/dir/file.txt")
domainName("example.com?param=value")
domainName("https://facebook.github.io/jest/")
domainName("//youtube.com/watch?v=ClkQA2Lb_iE")
domainName("http://localhost:4200/watch?v=ClkQA2Lb_iE")
domainName("http://google.com")
domainName("http://google.co.jp")
domainName("www.xakep.ru")
domainName("https://youtube.com")