$(document).ready(function () {
    $('.morebtn').click(function () {
        $('div').removeClass('detailExpand');
        $('div').removeClass('contentboxExp');

        if ($(this).text() != "Less") {
            $('.morebtn').text('More');
            $(this).parent().addClass('detailExpand');
            $(this).prev().prev().addClass('contentboxExp');
            $(this).text("Less");
        }
        else {
            $('.morebtn').text('More');
        }
    });
    (function waitForTawkIframe() {
        var iframes;
        setTimeout(function(){
           var interval = setInterval(function () {
            iframes = document.querySelectorAll('.widget-visible iframe');
            console.log("checking iframes:");
            iframes.forEach(function(iframe){
                var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                var style = document.createElement('style');
                style.textContent = `
                   .tawk-card-primary,.tawk-button,.tawk-agent-chat-bubble{
                    background:#BF4B04 !important;
                   }
                .tawk-branding{
                    display:none;
                }
                .tawk-toolbar-menu .tawk-dropdown-menu .tawk-button{
                    color:white !important;
                } 
                `;
                iframeDocument.head.appendChild(style);
                if(iframes){
                    console.log("iframe founded and interval is cleared")
                    clearInterval(interval)
                }
            })
        },50);
        },600);
    })();
});
