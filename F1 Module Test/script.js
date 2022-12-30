let form = document.getElementById("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form Successfully Submitted!");
        document.getElementById("form").reset();
      });