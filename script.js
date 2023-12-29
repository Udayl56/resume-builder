

let resumeData = {
    personalDetails:{
        fullName:'',
        email:'',
        contact:'',
        state:'',
        city:'',
        zipCode: '',
        Linkedin: '',
        github: '',
        otherLink: ''
    },
    summary: '',

    education: {
        InstituteName :'',
        degree:'',
        branch: '',
        percentage: '',
        completionYear: ''
    },

   experience:{
       companyName: '',
       role: '',
       responsibility: ''
    },

    project: {
        projectName: '',
        projectUrl:'',
        projectDetails:''
    },

    skills:[],

    certificates:[],

    achivement:[]
   
};


/*document.getElementById("Personal-details-form").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') { e.preventDefault(); }
});*/

// Certificate  event
let certificateCount = 0;
const maxcertificateCount = 4;
const addACertfBtn = document.getElementById("addCertifbtn");
const addCertifcont = document.getElementById("addCertif");
addACertfBtn.addEventListener('click', () => {
    if (certificateCount < maxcertificateCount) {
        const textCertificates = document.getElementById("Certificates").value;
        if (textCertificates.trim() !== '') {
            const elementCertificates = document.createElement('div');
            elementCertificates.classList.add('achivementborder', 'col-md-12', 'mb-2');
            elementCertificates.setAttribute('id', 'addcertificatesDiv');
            const headin = document.createElement('h5');
            headin.setAttribute('id', 'addedcertificates');
            headin.textContent = textCertificates;
            const removeButtonCertificates = document.createElement('button');
            removeButtonCertificates.classList.add('btn', 'badge-danger', 'mb-2');
            removeButtonCertificates.textContent = 'Remove';
            removeButtonCertificates.addEventListener('click', () => {
                elementCertificates.remove();
                certificateCount--;
                addACertfBtn.disabled = false;
            });
            elementCertificates.appendChild(headin);
            elementCertificates.appendChild(removeButtonCertificates);
            addCertifcont.appendChild(elementCertificates);
            document.getElementById("Certificates").value = '';
            certificateCount++;
            if (certificateCount === maxcertificateCount) {
                addACertfBtn.disabled = true; // Disable the button after reaching the limit
                setTimeout(() => {
                        alert('Maximum limit of 4 Certificate reached.');
                    }, 1200);
            }
        } else {
            alert('Please enter an Certificates.');
        }
    }
});

// skills
const skillBtn = document.getElementById("skillbtn");
const skillcont = document.getElementById("skilldiv");
let skillCount = 0;
const maxskillCount = 14;
skillBtn.addEventListener('click', () => {
    if (skillCount < maxskillCount) {
        const textValue = document.getElementById("skill").value;
        if (textValue.trim() !== ''){

            const element = document.createElement('div');
            element.classList.add('achivementborder','col-md-12','mb-2');
            element.setAttribute("id", 'addedSkilldiv');
            const heading = document.createElement('h5');
            heading.setAttribute("id",'addedSkill');
            heading.textContent = textValue;
            const removeButton = document.createElement('button');
            removeButton.classList.add('btn' ,'badge-danger','mb-2');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                element.remove();
                skillCount--;
                skillBtn.disabled=false; });
            element.appendChild(heading);
            element.appendChild(removeButton);
            skillcont.appendChild(element);
            document.getElementById("skill").value = '';
            skillCount++;
            if (skillCount === maxskillCount) {
                    
                skillBtn.disabled = true; // Disable the button after reaching the limit
                setTimeout(() => {
                    alert('Maximum limit of 14 skill reached.');
                }, 1200);
            }
        } else {
            alert('Please enter an skills.');}
        }
    });

// save skills
const saveSkillsBtn = document.getElementById("saveskillbtn");
saveSkillsBtn.addEventListener('click', () => {
    const skillsElements = skillcont.querySelectorAll('#addedSkilldiv');
    const newSkills = Array.from(skillsElements).map(div => {
        return div.querySelector('#addedSkill').textContent;
    });
    // Check if the skills to be saved are different from the current stored skills
    const skillsChanged = !arraysEqual(newSkills, resumeData.skills);
    if (skillsChanged) {
        resumeData.skills = newSkills;
        alert('Skills saved successfully.');
        }
        else{
            alert('same skills added');
        } 
});
function arraysEqual(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
        }
        return true;
      }
      
// Achivement event    
        
const addAchivBtn = document.getElementById("addAchivementbtn");
const addAchiv = document.getElementById("adddiv");
let achivementCount = 0;
const maxachivementCount = 4;
   
addAchivBtn.addEventListener('click', () => {
    if (achivementCount < maxachivementCount) {
        const textValue = document.getElementById("textAchivement").value;
        if (textValue.trim() !== '') {
            const element = document.createElement('div');
            element.classList.add('achivementborder','col-md-12','mb-2');
            element.setAttribute('id','achivdiv');
            const heading = document.createElement('h5');
            heading.setAttribute('id','achivh5');
            heading.textContent = textValue;
            const removeButton = document.createElement('button');
            removeButton.classList.add('btn' ,'badge-danger','mb-2');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                element.remove();
                achivementCount--;
                addAchivBtn.disabled=false; // Remove the parent element when the button is clicked
            });
            element.appendChild(heading);
            element.appendChild(removeButton);
            addAchiv.appendChild(element);
            document.getElementById("textAchivement").value = '';
            achivementCount++;
            if (achivementCount === maxachivementCount) {
                addAchivBtn.disabled = true; // Disable the button after reaching the limit
                setTimeout(() => {
                    alert('Maximum limit of 4 achivement reached.');
                }, 1200);
            }
        } else {
            alert('Please enter an achievement.');}
        }
    });
// save certificates
const savecertifBtn=document.getElementById("savecertifbtn");
savecertifBtn.addEventListener('click', () => {
    const certifElements = addCertifcont.querySelectorAll('#addcertificatesDiv');
    const newcertif = Array.from(certifElements).map(div => {
        return div.querySelector('#addedcertificates').textContent;
    });
 
   // Check if the skills to be saved are different from the current stored skills
    const certifChanged = !arraysEqual(newcertif, resumeData.certificates);
    if (certifChanged) {
        resumeData.certificates = newcertif;
        alert('certificates saved successfully.');
   }
   else{
        alert('same certificates added');
    }
});

// save achivement
const saveachivBtn=document.getElementById("saveachivbtn");
saveachivBtn.addEventListener('click', () => {
    const achivElements = addAchiv.querySelectorAll('#achivdiv');
    const newachiv = Array.from(achivElements).map(div => {
        return div.querySelector('#achivh5').textContent;
    });

    // Check if the skills to be saved are different from the current stored skills
    const achivChanged = !arraysEqual(newachiv, resumeData.achivement);
    if (achivChanged) {
        resumeData.achivement = newachiv;
        alert('achiv saved successfully.');
    }else{
        alert('same achiv added');
    } 
});
 
// save personalDetails
var personalDetails = false;
const savePersonalDetails = document.getElementById('savepersonaldetailsbtn');
savePersonalDetails.addEventListener('click', () => {
    resumeData.personalDetails = {
        fullName: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        contact:document.getElementById('number').value,
        state:document.getElementById('State').value,
        city:document.getElementById('City').value,
        zipCode:document.getElementById('zip').value,
        Linkedin:document.getElementById('Linkedin').value,
        github:document.getElementById('Github').value,
        otherLink: document.getElementById('Other_link').value
    }
});

// save summary
const saveSummary = document.getElementById('summarybtn');
saveSummary.addEventListener('click', () => {
    resumeData.summary = document.getElementById('summary').value;
});

// save education
const saveEdubtn = document.getElementById('educationbtn');
saveEdubtn.addEventListener('click', () => {
    resumeData.education = {
        InstituteName: document.getElementById('Institute_Name').value,
        degree: document.getElementById('degree').value,
        branch: document.getElementById('Branch').value,
        percentage: document.getElementById('percentage').value,
        completionYear: document.getElementById('compYear').value
    }
});
// save experience
const saveExpbtntn = document.getElementById('experbtn');
saveExpbtntn.addEventListener('click', () => {
    resumeData.experience = {
        companyName: document.getElementById('Company_name').value,
        role: document.getElementById('Role').value,
        responsibility: document.getElementById('Experience').value
    }
});

// save project
const saveprojectBtn = document.getElementById('projectbtn');
saveprojectBtn.addEventListener('click', () => {
    resumeData.project = {
        projectName: document.getElementById('Project_name').value,
        projectUrl:document.getElementById('URL').value,
        projectDetails:document.getElementById('projectDetails').value,
    }

});

 
 