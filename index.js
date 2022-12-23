let  kredi = document.querySelector('#kredi');
let  reload= document.querySelector('.reload');
let KrediZamanList = document.querySelector('#VadeListe') ;
let hesap = document.querySelector('#hesap');
let sonuc = document.querySelector('#sonuc')
let KrediFaiz =[1.1, 1.2 , 1.3, 1.4] ;
let TotalgeriKredi;
let AylikGeriKredi ;

hesap.addEventListener('click',()=>{
     kredi = kredi.value;
     KrediZaman =  KrediZamanList.options[KrediZamanList.selectedIndex].value
     if (KrediZaman ==12){
          TotalgeriKredi = kredi*1.1;
     }
     else if (KrediZaman ==24){
          TotalgeriKredi = kredi*1.2;
     }
     else if (KrediZaman ==36){
          TotalgeriKredi = kredi*1.3;
     }
     else if (KrediZaman ==48){
          TotalgeriKredi =kredi*1.4;
     }
     
     AylikGeriKredi = TotalgeriKredi /  KrediZaman 
     sonuc.innerHTML = `The total amount you have to pay ${TotalgeriKredi} $ 
     and you will pay in installments of ${AylikGeriKredi.toFixed(2)} $ each month. `

     reload.addEventListener('click',()=>{
          window.location.reload();
     })
})


