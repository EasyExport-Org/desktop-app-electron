const { app, BrowserWindow } = require('electron')
const { shell } = require('electron')



// const createWindow = () => {
//   const win = new BrowserWindow({
//     height: 800,
//     width: 1200,
//     minWidth: 900,
//     minHeight: 800,
//     icon: "chr.ico"
//   })
//   shell.openExternal(url, { activate: true })
//   win.loadURL('https://desktop.easyexport.in/')
// }

// app.whenReady().then(() => {
//   createWindow()
// })


const link = document.querySelector('#my-link')

// attach an event listener to the link element
link.addEventListener('click', (event) => {
  // prevent the link from opening in the current tab
  event.preventDefault()

  // get the href attribute of the link element
  const href = link.getAttribute('href')

  // open the link in a new tab
  shell.openExternal(href)
})