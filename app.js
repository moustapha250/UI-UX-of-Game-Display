 const texts =['Play your Favor Game','Explore beyond Your limits','Be The Best Version of Yourself'];

 let count = 0;
 let index = 0;
 let currentText='';
 let letter = '';

 (function type(){

      if (count=== texts.length){
          count = 0;
      }

      currentText = texts[count];
      letter =currentText.slice(0, ++index);

      document.querySelector(".typing").textContent=letter;
      if(letter.length==currentText.length){
          count++;
          index=0;
      }
      setTimeout(type,200);
 }())