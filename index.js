let q=0;
let p=125.00;
let i=1;

function normal(){
    document.getElementById('pop').style.display='none';
    document.getElementById('body').style.opacity='1';
}

function menu(){
    document.getElementById('pop').style.display='block';
    document.getElementById('body').style.opacity='.7';
}

function cart(){
    $('#basket').toggle();
}

function plus(){
    if(q<10){
        q++;
        document.getElementById("quantity").innerHTML = q;
    }
}

function minus(){
    if(q>0){
        q--;
        document.getElementById("quantity").innerHTML = q;
    }
}

function add(){
    document.getElementById('empty').style.display='none';
    document.getElementById('rem').style.display='none';
    document.getElementById('added').innerHTML='Added To Cart';
    document.getElementById('buy').style.display='grid';
    if(q==0){
        document.getElementById("num").innerHTML = q+1;
        document.getElementById("total").innerHTML ="$" + (q+1)*p;
    }
    else{
        document.getElementById("num").innerHTML = q;
        document.getElementById("total").innerHTML ="$" + q*p;
    }
}

function del(){
    document.getElementById('empty').style.display='block';
    document.getElementById('buy').style.display='none';
    document.getElementById('rem').style.display='block';
    document.getElementById('added').innerHTML='Add To Cart';
}

function normalHeader(){
    document.getElementById('collections').style.borderWidth='0px';
    document.getElementById('men').style.borderWidth='0px';
    document.getElementById('women').style.borderWidth='0px';
    document.getElementById('about').style.borderWidth='0px';
    document.getElementById('contact').style.borderWidth='0px';
    document.getElementById('collections').style.fontSize='16px';
    document.getElementById('men').style.fontSize='16px';
    document.getElementById('women').style.fontSize='16px';
    document.getElementById('about').style.fontSize='16px';
    document.getElementById('contact').style.fontSize='16px';
    document.getElementById('collections').style.color='grey';
    document.getElementById('men').style.color='grey';
    document.getElementById('women').style.color='grey';
    document.getElementById('about').style.color='grey';
    document.getElementById('contact').style.color='grey';
}

function collect(){
    document.getElementById('collections').style.borderWidth='4px';
    document.getElementById('collections').style.fontSize='19px';
    document.getElementById('collections').style.color='black';
}

function men(){
    document.getElementById('men').style.borderWidth='4px';
    document.getElementById('men').style.fontSize='19px';
    document.getElementById('men').style.color='black';
}

function women(){
    document.getElementById('women').style.borderWidth='4px';
    document.getElementById('women').style.fontSize='19px';
    document.getElementById('women').style.color='black';
}

function about(){
    document.getElementById('about').style.borderWidth='4px';
    document.getElementById('about').style.fontSize='19px';
    document.getElementById('about').style.color='black';
}

function contact(){
    document.getElementById('contact').style.borderWidth='4px';
    document.getElementById('contact').style.fontSize='19px';
    document.getElementById('contact').style.color='black';
}

function normalThumb(){
    document.getElementById('thumb1').style.opacity='1';
    document.getElementById('thumb2').style.opacity='1';
    document.getElementById('thumb3').style.opacity='1';
    document.getElementById('thumb4').style.opacity='1';
    document.getElementById('thumb1').style.borderWidth='0';
    document.getElementById('thumb2').style.borderWidth='0';
    document.getElementById('thumb3').style.borderWidth='0';
    document.getElementById('thumb4').style.borderWidth='0';
    document.getElementById('img1').style.display='none';
    document.getElementById('img2').style.display='none';
    document.getElementById('img3').style.display='none';
    document.getElementById('img4').style.display='none';
}

function img(x){
    switch(x){
        case 1:
            document.getElementById('thumb1').style.opacity='.5';
            document.getElementById('thumb1').style.borderWidth='2.5px';
            document.getElementById('img1').style.display='block';
            break;
            case 2:
            document.getElementById('thumb2').style.opacity='.5';
            document.getElementById('thumb2').style.borderWidth='2.5px';
            document.getElementById('img2').style.display='block';
            break;
            case 3:
            document.getElementById('thumb3').style.opacity='.5';
            document.getElementById('thumb3').style.borderWidth='2.5px';
            document.getElementById('img3').style.display='block';
            break;
            case 4:
            document.getElementById('thumb4').style.opacity='.5';
            document.getElementById('thumb4').style.borderWidth='2.5px';
            document.getElementById('img4').style.display='block';
            break;
    }
}

function altr(i){
    switch(i){
        case 1:
            $('#image').attr('src','images/image-product-1.jpg');
            break;
        case 2:
            $('#image').attr('src','images/image-product-2.jpg');
            break;
        case 3:
            $('#image').attr('src','images/image-product-3.jpg');
            break;
        case 4:
            $('#image').attr('src','images/image-product-4.jpg');
            break;
    }
}
  
$(document).ready(function(){

    $('#mainImg').click(function(){
        $('.lightbox').css('display','flex');
    });

    $('#end').click(function(){
        $('.lightbox').css('display','none');
    });

    $('#light1').click(function(){
        $('#image').attr('src','images/image-product-1.jpg'); 
        i=1;
    });

    $('#light2').click(function(){
        $('#image').attr('src','images/image-product-2.jpg'); 
        i=2;
    });

    $('#light3').click(function(){
        $('#image').attr('src','images/image-product-3.jpg'); 
        i=3;
    });

    $('#light4').click(function(){
        $('#image').attr('src','images/image-product-4.jpg'); 
        i=4;
    });

    $('#pre').click(function(){
        if(i==1){
            i=4;
        }
        else{
            i--;
        }
        altr(i);
    });
    
    $('#next').click(function(){
        if(i==4){
            i=1;
        }
        else{
            i++;
        } 
        altr(i);
    });
}


);
