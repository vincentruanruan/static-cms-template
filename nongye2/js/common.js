
let setNav = (index)=>{
    $(`.navBar .navbar-nav li:nth-child(${index})`).addClass('active')
}

// 导航颜色
$(window).scroll(function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>75){
        $('.navbar').addClass('bgShow')
    }else{
        $('.navbar').removeClass('bgShow')
    }
})