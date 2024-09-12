document.addEventListener("DOMContentLoaded", function() { // the same '() =>'
    const switchPhoto = () => {
     const links = document.querySelectorAll('#link')
     const boxes = document.querySelectorAll ('#boxe')
     //console.log(links)
     const hideBoxe = () => {
     boxes.forEach((boxe) => { 
        boxe.style.display = "none"
     } ) 
    }

    hideBoxe()
     const removeActiveClass = () => {
        links.forEach((link) => {
          link.classList.remove("active")
        })
      }
  
     links[0].classList.add("active")
     boxes[0].style.display = "flex"
     links.forEach((link, idx) => {
      link.addEventListener('click', (be) => {
        removeActiveClass()
        hideBoxe()
        be.target.classList.add("active")
        boxes[idx].style.display = 'flex'
      } ) 
     } )
    }
 
    const main = () => {
      switchPhoto()
    }
  
    main()
  })
