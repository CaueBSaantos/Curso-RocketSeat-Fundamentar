// adicionando elemenetos 
 const div = document.createElement('div')
 div.innerText = " ola mundao"

 // insertbefore

 const body = document.querySelector('body')
 // const script = document.querySelector('script')
// body.insertBefore(div, script)

// simulando insertAfter

const header = document.querySelector('header')
body.insertBefore(div, header.nextElementSibling)