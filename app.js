  //for scroll button
  document.querySelector('.upscroll button').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  //for admisison form alert
          const dobInput = document.getElementById('dob');
        const ageInput = document.getElementById('childAge');

        dobInput.addEventListener('change', function() {
            const dob = new Date(this.value);
            if (!isNaN(dob)) {
                const today = new Date();
                let age = today.getFullYear() - dob.getFullYear();
                const m = today.getMonth() - dob.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                    age--;
                }
                ageInput.value = age;
            }
        });

        const form = document.getElementById('admissionForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Admission form submitted successfully!");
            form.reset();
        });
  // Show button when scrolled down 300px
  window.addEventListener("scroll", function () {
    const upScroll = document.querySelector(".upscroll");
    if (window.scrollY > 300) {
      upScroll.classList.add("show");
    } else {
      upScroll.classList.remove("show");
    }
  });

  // Scroll smoothly to top when clicked
  document.querySelector(".upscroll button").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });