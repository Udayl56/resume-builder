

function isDataValid(resumeData) {
  for (const section in resumeData) {
      if (resumeData.hasOwnProperty(section)) {
          if (typeof resumeData[section] === 'object') {
              for (const field in resumeData[section]) {
                  if (resumeData[section].hasOwnProperty(field) && !resumeData[section][field]) {
                      return false; // If any field is empty or null, return false
                  }
              }
          } else if (!resumeData[section]) {
              return false; // If any section is empty or null, return false
          }
      }
  }
  return true; // If all fields have values, return true
}




function generatePDF() {
    
    if (isDataValid(resumeData)) {
    // Create a new PDF document
        const { jsPDF } = window.jspdf
        const doc = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: [220, 298]
  });

  // Page size in pixel 220*298
  // doc.text(20, 30, "Uday Ladhi");
  // doc.line(10,20,10,278); //left margin
  // doc.line(210,20,210,278);// right margin
 // doc.line(90,20,90,278); // divided  1st line
 // doc.line(100,20,100,278); // divided  2nd line


  doc.setFont('Times New Roman','bold');
  doc.setFontSize(25);
  doc.text(resumeData.personalDetails.fullName,10,20);
  doc.line(10,32,210,32);
  doc.setLineWidth(3);
  
 

  doc.setFontSize(16);
  doc.setTextColor(32, 121, 199);

  doc.text("Education",100,40);
  doc.text("Experience",100,82);
  doc.text("Project",100,146);
  doc.text("Certificates",100,210);
  doc.text("Achivement",100,252);

  doc.text("Summary",10,40);
  doc.text("Contact",10,90);
  doc.text("Social link",10,124);
  doc.text("Skills",10,158);
  doc.setFont('Times New Roman','normal','light');

  // font 
  doc.setTextColor(40,40,40);
  doc.setFontSize(12);

  
  // summary
  doc.text(12,48,resumeData.summary,{maxWidth:80,align:'justify'});
  
  // role
  doc.text("Web developer",12,28);
   
  // contact
   doc.text(12,98,resumeData.personalDetails.contact);
   doc.text(12,106,resumeData.personalDetails.email);
   doc.text(12,114,resumeData.personalDetails.city + ' ' + resumeData.personalDetails.zipCode);
  
  // social link 
  doc.text(12,132,resumeData.personalDetails.Linkedin);
   doc.text(12,140,resumeData.personalDetails.github);
   doc.text(12,148,resumeData.personalDetails.otherLink);

 // skills
 const skills =resumeData.skills;
 let y=158;
 for (var i in skills){
   y +=8; doc.text(12,y,skills[i]);

 }

 // education
 doc.text(resumeData.education.InstituteName,102,48);
 doc.text(resumeData.education.degree + '-' + resumeData.education.branch,102,56);
 doc.text('CGPA/percentage :'+resumeData.education.percentage ,102,64);
 doc.text(resumeData.education.completionYear,102,72);
// experience 
 doc.text(resumeData.experience.companyName , 102,90);
 doc.text(resumeData.experience.role, 102,98);
      doc.text(102, 106, resumeData.experience.responsibility, { maxWidth: 100, align: 'justify' })
// project
doc.text(resumeData.project.projectName, 102, 154);
doc.text(102,162,resumeData.project.projectDetails,{maxWidth:100,align:'justify'})
doc.text(resumeData.project.projectUrl, 102,200);
// certificates
let x=210;
 for (var i in resumeData.certificates){
   x +=8;
   doc.text(102,x,resumeData.certificates[i]);
}
// achivement
 const achiv = resumeData.achivement;
 let z=252;
 for (var i in achiv){
   z +=8;
   doc.text(102,z,achiv[i]);
}
// bold
 doc.setFont('Times New Roman','bold');
  // Save or download the PDF
  doc.save('resume.pdf');}
  else{
    alert('please fill all required field');
  }
}