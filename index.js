
      let inputs = document.querySelectorAll("input");
      let ta = document.getElementsByTagName("textarea");
      let h1 = document.createElement("h1");
      h1.style.color = "#FE0000";
      let div = document.getElementById("qwe");
      div.appendChild(h1);
      let check = () => {
        event.preventDefault();
        let userName = inputs[0].value;
        let email = inputs[1].value;
        let password = inputs[5].value;
        let textArea = ta[0].value;
        let isEmailValid = email.includes("@");
        let genderOptions = document.getElementsByName("gender");
        let genderSelected = false;
        for (let i = 0; i < genderOptions.length; i++) {
          if (genderOptions[i].checked) {
            genderSelected = true;
            break;
          }
        }

        if (
          userName === "" ||
          email === "" ||
          genderSelected === false ||
          password === "" ||
          textArea === ""
        ) {
          h1.innerHTML = `Field Should Be Filled`;
        } else if (userName.length <= 3 || userName.length > 16) {
          h1.innerHTML = `UserName should be in the range of 3 to 15`;
        } else if (!isEmailValid) {
          h1.innerHTML = `Email should have '@' symbol`;
        } else if (password.length < 8 || userName.length >= 20) {
          h1.innerHTML = `Password should be in the range of 8 to 20`;
        } else {
          h1.innerHTML = "";
          inputs[0].value = "";
          inputs[1].value = "";
          inputs[5].value = "";
          ta[0].value = "";
          genderOptions.forEach((ele) => {
            ele.checked = false;
          });
        }
      };
    
