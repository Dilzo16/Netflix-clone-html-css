# Netflix-clone-html-css
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
The document.querySelectorAll('.question') selects all elements with the question class and returns a NodeList.
The forEach method loops through each element in the NodeList and sets up an event listener for its header element.
When the header is clicked, the isExpanded variable is toggled to determine whether the line should be expanded or collapsed.
The content.style.maxHeight property is set to expand or collapse the content section based on the isExpanded variable.
The expandIcon.innerHTML is set to display a plus or minus icon based on the isExpanded variable.
The if (isExpanded) block checks whether the line has been expanded. If it has, it loops through all the other lines and collapses them, so that only one line can be expanded at a time.
Note that the code assumes that each question element has a header, a content section and an expand-icon element. Also, it assumes that the plus icon has the class uil-plus and the minus icon has the class uil-minus.
