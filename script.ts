const form = document.getElementById('admitForm') as HTMLFormElement;
const admitCard = document.getElementById('admitCard') as HTMLDivElement;
const printButton = document.getElementById('printButton') as HTMLButtonElement;

let rollNumber = parseInt(localStorage.getItem('rollNumber') ?? '1', 10);
if (isNaN(rollNumber)) {
  rollNumber = 1;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
  const fathersName = (document.getElementById('fathersName') as HTMLInputElement).value;
  const dob = (document.getElementById('dob') as HTMLInputElement).value;
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

  (document.getElementById('admitFullName')!).textContent = `Full Name: ${fullName}`;
  (document.getElementById('admitFathersName')!).textContent = `Father's Name: ${fathersName}`;
  (document.getElementById('admitDOB')!).textContent = `Date of Birth: ${dob}`;
  (document.getElementById('admitRollNumber')!).textContent = `Roll Number: ${rollNumber.toString().padStart(3, '0')}`;

  const profileImg = document.getElementById('profileImg') as HTMLImageElement;
  if (profilePictureInput.files && profilePictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImg.src = e.target?.result as string;
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
