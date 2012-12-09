var iconDisplayed = false;

$("img").each(function(index){
    var thiz = $(this);
    var img = new Image();
    img.onload = function() {
        if(this.width >= 1000 || this.height >= 1000 ){
            halfWidth = this.width/2;
            halfHeight = this.height/2;
            $(thiz).attr('Xw', this.width).width(halfWidth);
            $(thiz).attr('Xh', this.height).height(halfHeight);
            $(thiz).attr('title', this.width + "x" + this.height + " => " + halfWidth + "x" + halfHeight);
            if(!iconDisplayed){
                chrome.extension.sendRequest({}, function(response) {});
                iconDisplayed = true;
            }
        }
    };
    img.src = $(this).attr('src');
});
