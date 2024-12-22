// Sticky header logic to hide on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    header.style.top = "-80px";  // Hide the header
  } else {
    // Scrolling up
    header.style.top = "0";  // Show the header
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Attendance form submission
document.getElementById('attendance-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;

  alert(`Attendance marked for ${name} (Roll: ${roll})`);
  document.getElementById('attendance-form').reset();
});

// Notes file upload
document.getElementById('upload-btn').addEventListener('click', () => {
  const fileInput = document.getElementById('file-input');
  if (fileInput.files.length > 0) {
    alert(`File "${fileInput.files[0].name}" uploaded successfully!`);
  } else {
    alert('Please select a file to upload.');
  }
});
