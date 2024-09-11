"use strict";
const form = document.getElementById('admitForm');
const admitCard = document.getElementById('admitCard');
const printButton = document.getElementById('printButton');
let rollNumber = parseInt(localStorage.getItem('rollNumber') || '', 10);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get user inputs
    const fullName = document.getElementById('fullName').value;
    const fathersName = document.getElementById('fathersName').value;
    const dob = document.getElementById('dob').value;
    const profilePictureInput = document.getElementById('profilePicture');
    // Update Admit Card Details
    (document.getElementById('admitFullName')).textContent = `Full Name: ${fullName}`;
    (document.getElementById('admitFathersName')).textContent = `Father's Name: ${fathersName}`;
    (document.getElementById('admitDOB')).textContent = `Date of Birth: ${dob}`;
    (document.getElementById('admitRollNumber')).textContent = `Roll Number: ${rollNumber.toString().padStart(3, '0')}`;
    // Handle Profile Picture if provided
    const profileImg = document.getElementById('profileImg');
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            profileImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    form.style.display = 'none';
    admitCard.style.display = 'block';
    rollNumber++;
    localStorage.setItem('rollNumber', rollNumber.toString());
});
printButton.addEventListener('click', () => {
    window.print();
});
