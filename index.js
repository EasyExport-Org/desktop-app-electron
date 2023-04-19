const {app, BrowserWindow, ipcMain, screen} = require('electron');
const path = require("path");
// const {PosPrinter} = require("../dist/index");
var pdf = require("pdf-creator-node");
var fs = require("fs");

var html = fs.readFileSync("index.html", "utf8");
// var convert = document.getElementById('convert');
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Ajay Gupta</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};



var users = [
    {
      name: "Ajay",
      age: "26",
    }
  ];

  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./11_march_new.pdf",
    type: "",
  };

  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });


