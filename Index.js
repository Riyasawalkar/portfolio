// Resume download functionality

const resumeDownloadLink = document.getElementById('resume-download');
resumeDownloadLink.addEventListener('click', function(event) {
  event.preventDefault();
  const resumeFile = 'Resume riya sawalkar.pdf'; // replace with the name of your resume file
  const fileUrl = 'C:\Users\Riya\Documents' + resumeFile; // replace with the URL of your resume file
  const downloadLink = document.createElement('a');
  downloadLink.href = fileUrl;
  downloadLink.download = resumeFile;
  downloadLink.click();
});
