$(document).ready(function(){function t(){var t=getViewport()[0],n=getViewport()[1];if(t!=e){var i=t/3;o.css("height",i)}s=n,e=t}e=getViewport()[0],s=getViewport()[1],widthIsWide=e>768,window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};var o=$(".section-cover");if(widthIsWide&&o.length>0){o=o.first();var e=getViewport()[0],s=getViewport()[1],n=e/3;o.css("height",n);var i;$(window).on("resize",function(){clearTimeout(i),i=setTimeout(t,1e3)});var a=$("nav"),r=a.outerHeight(),d=o.find(".section-cover-image"),w=o.find("h1");parallaxBackground=function(){var t=window.pageYOffset-r,e=t-10,s=o.offset().top,n=o.outerHeight(),i=s+n+r;if(t>0&&i>=t){var a=e/3+"px",f=e/5+"px",p=1-e/n;d.css({transform:"translateY("+a+")",opacity:p}),w.css({transform:"translateY("+f+")",opacity:p})}else d.css({transform:"",opacity:""}),w.css({transform:"",opacity:""})},parallaxBackground()}else parallaxBackground=function(){};if(MSIE||/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent)||window.addEventListener("scroll",function(){requestAnimationFrame(parallaxBackground)},!1),$(".no-bio").length>0){var f=["https://d1vw1wxlid17s8.cloudfront.net/assets/food-joke-1.jpg","https://d1vw1wxlid17s8.cloudfront.net/assets/food-joke-2.jpg","https://d1vw1wxlid17s8.cloudfront.net/assets/food-joke-3.jpg","https://d1vw1wxlid17s8.cloudfront.net/assets/food-pun1.jpg","https://d1vw1wxlid17s8.cloudfront.net/assets/food-pun2.jpg","https://d1vw1wxlid17s8.cloudfront.net/assets/food-pun3.jpg","https://d1vw1wxlid17s8.cloudfront.net/assets/food-pun4.jpg","https://d1vw1wxlid17s8.cloudfront.net/assets/food-pun5.jpg","https://d1vw1wxlid17s8.cloudfront.net/assets/food-pun6.jpg"],p=f[Math.floor(Math.random()*f.length)];$(".food-joke").attr("src",p)}});