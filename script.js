document.getElementById('attendance-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
  
    alert(`Attendance marked for ${name} (Roll: ${roll})`);
    document.getElementById('attendance-form').reset();
  });
  
  document.getElementById('upload-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length > 0) {
      alert(`File "${fileInput.files[0].name}" uploaded successfully!`);
    } else {
      alert('Please select a file to upload.');
    }
  });
  