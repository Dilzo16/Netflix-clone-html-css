
const lines=document.querySelectorAll('.question');


lines.forEach(line=>{
    const header=line.querySelector('.header');
    const content=line.querySelector('.content');
    const expandIcon=line.querySelector('.expand-icon');


    header.addEventListener('click',()=>{
        const isExpanded=line.classList.toggle('expanded');
        content.style.maxHeight=isExpanded ? "600px" : "0";
        expandIcon.innerHTML=isExpanded ? '<i class="uil uil-minus"></i>' : '<i class="uil uil-plus"></i>';

        if (isExpanded) {
            lines.forEach(otherLine => {
              if (otherLine !== line && otherLine.classList.contains('expanded')) {
                otherLine.classList.remove('expanded');
                otherLine.querySelector('.content').style.maxHeight = "0";
                otherLine.querySelector('.expand-icon').innerHTML = '<i class="uil uil-plus"></i>';
              }
            });
        
        }

    })
})