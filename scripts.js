
var Extensions = [ {
    "logo": "images/logo-devlens.svg",
    "name": "DevLens",
    "description": "Quickly inspect page layouts and visualize element boundaries.",
    "isActive": false
},
{
    "logo": "images/logo-style-spy.svg",
    "name": "StyleSpy",
    "description": "Instantly analyze and copy CSS from any webpage element.",
    "isActive": false
},
{
    "logo": "images/logo-speed-boost.svg",
    "name": "SpeedBoost",
    "description": "Optimizes browser resource usage to accelerate page loading.",
    "isActive": false
},
{
    "logo": "images/logo-json-wizard.svg",
    "name": "JSONWizard",
    "description": "Formats, validates, and prettifies JSON responses in-browser.",
    "isActive": false
},
{
    "logo": "images/logo-tab-master-pro.svg",
    "name": "TabMaster Pro",
    "description": "Organizes browser tabs into groups and sessions.",
    "isActive": false
},
{
    "logo": "images/logo-viewport-buddy.svg",
    "name": "ViewportBuddy",
    "description": "Simulates various screen resolutions directly within the browser.",
    "isActive": false
},
{
    "logo": "images/logo-markup-notes.svg",
    "name": "Markup Notes",
    "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
    "isActive": false
},
{
    "logo": "images/logo-grid-guides.svg",
    "name": "GridGuides",
    "description": "Overlay customizable grids and alignment guides on any webpage.",
    "isActive": false
},
{
    "logo": "images/logo-palette-picker.svg",
    "name": "Palette Picker",
    "description": "Instantly extracts color palettes from any webpage.",
    "isActive": false
},
{
    "logo": "images/logo-link-checker.svg",
    "name": "LinkChecker",
    "description": "Scans and highlights broken links on any page.",
    "isActive": false
},
{
    "logo": "images/logo-dom-snapshot.svg",
    "name": "DOM Snapshot",
    "description": "Capture and export DOM structures quickly.",
    "isActive": false
},
{
    "logo": "images/logo-console-plus.svg",
    "name": "ConsolePlus",
    "description": "Enhanced developer console with advanced filtering and logging.",
    "isActive": false
}];


let mainArea = document.querySelector('.mainarea');
let allBtn = document.querySelector('.all');
let activeBtn = document.querySelector('.active');
let inactiveBtn = document.querySelector('.inactive');
let lightToggleBtn = document.querySelector('.dark-light-btn');
let headerBox = document.querySelector('.exthead');
let controlsBox = document.querySelector('.controls');


allBtn.classList.add('allbtn-js');

let generateHTML = (Ext) => {
  var html = '';

Ext.forEach((ext) => {
html += `
    <div class="ext ext-${ext.name}" data-id = "${ext.name}">
        <div class="details">
            <div class="logoarea">
                <img src="${ext.logo}" class = "extlogo">
            </div>
            <div class="extinfo">
                <p class="extname">${ext.name}</p>
                <p class="extabout">${ext.description}
                </p>
            </div>
        </div>
        <div class="extcontrols">
            <button class="remove" data-name = "${ext.name}">Remove</button>
            <input type="checkbox" id="${ext.name}" class="offscreen" name = "${ext.name}" ${ext.isActive ? "checked" : ""} />
<label for = "${ext.name}" class="switch"></label>
          
        </div>
    </div>
  `;

});

  mainArea.innerHTML = html;
}

function attachEventcheck() {
    let checkboxes = document.querySelectorAll(`.offscreen`);
    checkboxes.forEach((box) => {
   box.addEventListener('change',() => {
     Extensions.forEach((ext) => {
        if(ext.name === box.name) {
            ext.isActive = box.checked;
        }
     });
   })
    });
}

function applyThemeChange() {
    let extBox = document.querySelectorAll('.ext');
    let removebtn = document.querySelectorAll('.remove');
    if(document.body.classList.contains('light-mode')) {
        extBox.forEach(box => box.classList.add('extbox-js'));
    removebtn.forEach(btn => btn.classList.add('removebtn-js'));
  } else {
    extBox.forEach(box => box.classList.remove('extbox-js'));
    removebtn.forEach(btn => btn.classList.remove('removebtn-js'));
  }
}

function attachRemove() {
    let removeBtn =  document.querySelectorAll('.remove');
    let extBox = document.querySelectorAll('.ext');
    removeBtn.forEach((btn) => {
        btn.addEventListener('click',() => {
            let removeBtnId = btn.dataset.name;
            extBox.forEach((box) => {
             let boxId = box.dataset.id;
             if(removeBtnId === boxId) {
                box.remove();
             }
            });
            Extensions = Extensions.filter(ext => ext.name !== removeBtnId);
        });
    })
}

//page load setup
generateHTML(Extensions);
attachEventcheck();
attachRemove();
document.body.classList.add('dark-mode');
const activeExt = [];

let checkBox = document.querySelectorAll('.offscreen');
let extBox = document.querySelectorAll('.ext');
let removeBtn = document.querySelectorAll('.remove');



// checkBox.forEach((box) => {
//     box.addEventListener('click',() => {
//     if(box.checked) {
//           Extensions.forEach((ext) => {
//             if(box.name === ext.name) {
//                 matchingext = ext;
//                 activeExt.push(matchingext);
//                 console.log(activeExt);
//             }
//           });
//             }
//     else {
//           if(activeExt.length>=1) { 
//               index = activeExt.findIndex(item => item.name === box.name);
//              activeExt.splice(index,1);
//             }
//     console.log(activeExt);
//           }
         
//     });
//         });



allBtn.addEventListener('click', ()  => {
allBtn.classList.add('allbtn-js');
activeBtn.classList.remove('activebtn-js');
inactiveBtn.classList.remove('inactivebtn-js');
});

activeBtn.addEventListener('click', ()  => {
activeBtn.classList.add('activebtn-js');
allBtn.classList.remove('allbtn-js');
inactiveBtn.classList.remove('inactivebtn-js');

});


inactiveBtn.addEventListener('click', ()  => {
inactiveBtn.classList.add('inactivebtn-js');
allBtn.classList.remove('allbtn-js');
activeBtn.classList.remove('activebtn-js');
});


lightToggleBtn.addEventListener('click', () => {

let checkBox = document.querySelectorAll('.offscreen');
let extBox = document.querySelectorAll('.ext');
let removeBtn = document.querySelectorAll('.remove');

if(document.body.classList.contains('dark-mode'))
{
    lightToggleBtn.classList.add('js-lightbtn');
    lightToggleBtn.innerHTML = `<img src="images/icon-moon.svg" class="dark-light">`
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    headerBox.classList.add('header-js');
    allBtn.classList.add('allbtn_-js');
    activeBtn.classList.add('activebtn_-js');
    inactiveBtn.classList.add('inactivebtn_-js');
    controlsBox.classList.add('controls-js');
    extBox.forEach((ext) => {
    ext.classList.add('extbox-js');
   })
    removeBtn.forEach((btn) => {
       btn.classList.add('removebtn-js');
    });
} else {
    lightToggleBtn.classList.remove('js-lightbtn');
     lightToggleBtn.innerHTML = `<img src="images/icon-sun.svg" class="dark-light">`
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    headerBox.classList.remove('header-js');
    allBtn.classList.remove('allbtn_-js');
    activeBtn.classList.remove('activebtn_-js');
    inactiveBtn.classList.remove('inactivebtn_-js');
    controlsBox.classList.remove('controls-js');
    extBox.forEach((ext) => {
        ext.classList.remove('extbox-js');
       })
       removeBtn.forEach((btn) => {
        btn.classList.remove('removebtn-js');
     });
}
});



allBtn.addEventListener('click',()=> {
    generateHTML(Extensions);
    attachEventcheck();
    applyThemeChange();
    attachRemove();
});


activeBtn.addEventListener('click',() => {
    const active = Extensions.filter(ext => ext.isActive);
    generateHTML(active);
    attachEventcheck();
    applyThemeChange();
    attachRemove();
});

inactiveBtn.addEventListener('click',() => {
    const inactive = Extensions.filter(ext => !ext.isActive);
    generateHTML(inactive);
    attachEventcheck();
    applyThemeChange();
    attachRemove();
});








