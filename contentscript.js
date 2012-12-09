$("img").each(function(index){
    var thiz = $(this);
    var img = new Image();
    img.onload = function() {
        if(this.width >= 1000 || this.height >= 1000 ){
            $(thiz).attr('Xw', this.width).width(this.width/2);
            chrome.extension.sendRequest({}, function(response) {});
        }
    };
    img.src = $(this).attr('src');
});
