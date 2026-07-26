const circles = document.querySelectorAll('.circle');
const lineActive = document.getElementById('lineActive');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

let currentStep = 1;
const totalSteps = circles.length;

function updateProgress() {
  circles.forEach(function(circle, index) {
    if (index < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  lineActive.style.width = percentage + '%';
}

btnNext.addEventListener('click', function() {
  if (currentStep < totalSteps) {
    currentStep++;
    updateProgress();
  }
});

btnPrev.addEventListener('click', function() {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
});

updateProgress();