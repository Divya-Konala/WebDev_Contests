let img1clicks = 0,
      img2clicks = 0,
      img3clicks = 0,
      attempts = 0,
      totalscore = 0,
      img4clicks = 0,
      rollDiceClicks = 0;
    let step4enabled = false;
    let playerName, playerEmail, playerUsername;
    document
      .querySelector("#first-image")
      .addEventListener("click", FirstimageClick);
    document
      .querySelector("#second-image")
      .addEventListener("click", SecondimageClick);
    document
      .querySelector("#third-image")
      .addEventListener("click", ThirdimageClick);
    document
      .querySelector("#fourth-image")
      .addEventListener("click", FourthimageClick);

    function FirstimageClick() {
      if (img1clicks == 0) {
        document.querySelector("main").innerHTML = "";
        document.querySelector("#msg").textContent = "";
        let box = document.createElement("div");
        let form = document.createElement("form");
        let heading = document.createElement("h2");
        heading.textContent = "Register";
        let name = document.createElement("input");
        name.type = "text";
        name.placeholder = "Enter your name";
        name.setAttribute("id", "name");
        name.setAttribute("required", "");
        let email = document.createElement("input");
        email.type = "email";
        email.placeholder = "Enter your email ID";
        email.setAttribute("id", "email");
        email.setAttribute("required", "");
        let username = document.createElement("input");
        username.type = "text";
        username.placeholder = "Enter your username";
        username.setAttribute("id", "username");
        username.setAttribute("required", "");
        let submitBtn = document.createElement("input");
        submitBtn.type = "submit";
        submitBtn.textContent = "Submit";
        form.append(
          heading,
          name,
          document.createElement("br"),
          email,
          document.createElement("br"),
          username,
          document.createElement("br"),
          submitBtn
        );
        box.append(form);
        document.querySelector("main").append(box);
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          img1clicks++;
          playerName = name.value;
          playerEmail = email.value;
          playerUsername = username.value;
          document.querySelector("main").innerHTML = "";
          document.querySelector("#msg").textContent =
            "User Registered Successfully";
          document.querySelector("#msg").style.color = "#227C70";
        });
      } else {
        document.querySelector("main").innerHTML = "";
        document.querySelector("#msg").textContent = "User already registered";
        document.querySelector("#msg").style.color = "#f25119";
      }
    }
    function SecondimageClick() {
      if (img1clicks == 1 && img2clicks == 0) {
        img2clicks++;
        document.querySelector("main").innerHTML = "";
        document.querySelector("#msg").textContent = "";
        let heading = document.createElement("h2");
        heading.textContent = "Player Details";
        let table = document.createElement("table");
        let row1 = document.createElement("tr");
        let th1 = document.createElement("th");
        th1.textContent = "Name";
        let td1 = document.createElement("td");
        td1.textContent = playerName;
        row1.append(th1, td1);
        let row2 = document.createElement("tr");
        let th2 = document.createElement("th");
        th2.textContent = "E-Mail";
        let td2 = document.createElement("td");
        td2.textContent = playerEmail;
        row2.append(th2, td2);
        let row3 = document.createElement("tr");
        let th3 = document.createElement("th");
        th3.textContent = "UserName";
        let td3 = document.createElement("td");
        td3.textContent = playerUsername;
        row3.append(th3, td3);
        table.append(row1, row2, row3);
        document.querySelector("main").append(table);
      } else {
        document.querySelector("main").innerHTML = "";
        if (img1clicks == 0)
          document.querySelector("#msg").textContent = "Please complete step1";
        else
          document.querySelector("#msg").textContent =
            "User details can be viwed only once";
        document.querySelector("#msg").style.color = "#f25119";
      }
    }
    function ThirdimageClick() {
      if (
        img2clicks == 1 &&
        (img3clicks == 0 || img3clicks == 1) &&
        !step4enabled
      ) {
        img3clicks++;
        totalscore = 0;
        rollDiceClicks = 0;
        attempts++;
        document.querySelector("main").innerHTML = "";
        document.querySelector("#msg").textContent = "";
        let box = document.createElement("div");
        box.setAttribute("class", "rollDiceDiv");
        let heading = document.createElement("h2");
        heading.textContent = "Roll the Dice!";

        let rollDice = document.createElement("img");
        rollDice.setAttribute(
          "src",
          "https://www.freeiconspng.com/thumbs/dice-png/dice-png-transparent-images--png-all-4.png"
        );
        let scoreTxt = document.createElement("h3");

        rollDice.addEventListener("click", () => {
          if (rollDiceClicks < 3) {
            rollDiceClicks++;
            RollFun();
            if (rollDiceClicks == 3) {
              setTimeout(() => {
                document.querySelector("main").innerHTML = "";
                document.querySelector("#msg").innerHTML = "";
                if (totalscore > 10) {
                  document.querySelector("#msg").textContent =
                    "You can move to step4";
                  document.querySelector("#msg").style.color = "#227C70";
                  step4enabled = true;
                } else if (attempts == 1) {
                  document.querySelector("#msg").textContent = "Try Again!";
                  document.querySelector("#msg").style.color = "#f25119";
                } else {
                  document.querySelector("#msg").textContent =
                    "Bad Luck! You cannot move further in the game";
                  document.querySelector("#msg").style.color = "#f25119";
                }
              }, 1000);
            }
          } else {
            document.querySelector("main").innerHTML = "";
          }
        });

        let span1 = document.createElement("span");
        span1.textContent = "Score: ";
        let score1 = document.createElement("span");
        score1.setAttribute("id", "score");
        score1.textContent = 0;

        let span2 = document.createElement("span");
        span2.textContent = "Total Score: ";
        let score2 = document.createElement("span");
        score2.setAttribute("id", "totalscore");
        score2.textContent = 0;

        let diceimagebox = document.createElement("div");
        diceimagebox.setAttribute("id", "diceimage");

        scoreTxt.append(
          span1,
          score1,
          document.createElement("br"),
          span2,
          score2
        );
        box.append(heading, rollDice, scoreTxt, diceimagebox);
        document.querySelector("main").append(box);
      }else{
        document.querySelector("main").innerHTML = "";
        if (img2clicks == 0) {
          document.querySelector("#msg").textContent = "Please complete step2";
          document.querySelector("#msg").style.color = "#f25119";
        }else if (step4enabled) {
          document.querySelector("#msg").textContent = "You have already completed this step";
          document.querySelector("#msg").style.color = "#227C70";
        } else {
          document.querySelector("#msg").textContent =
            "Sorry! You cannot move forward in this game";
          document.querySelector("#msg").style.color = "#f25119";
        }
      }
    }
    function FourthimageClick() {
      if (step4enabled && img4clicks == 0) {
        img4clicks++;
        document.querySelector("main").innerHTML = "";
        document.querySelector("#msg").textContent = "";
        let couponDiv = document.createElement("div");
        couponDiv.setAttribute("class", "couponDiv");
        let heading = document.createElement("h2");
        heading.textContent = "Coupon Generated!";
        let couponNum = couponGenerate();
        let couponEle = document.createElement("h3");
        couponEle.textContent = "Coupon Number: " + couponNum;
        let congoImg = document.createElement("img");
        congoImg.setAttribute(
          "src",
          "https://www.freeiconspng.com/uploads/congratulations-png-15.png"
        );
        couponDiv.append(heading, couponEle, congoImg);
        document.querySelector("main").append(couponDiv);
      } else {
        document.querySelector("main").innerHTML = "";
        document.querySelector("#msg").textContent = "";
        if (img3clicks == 0 ) {
          document.querySelector("#msg").textContent = "Please Complete Step3";
          document.querySelector("#msg").style.color = "#f25119";
        } else if (img3clicks == 1 && !step4enabled) {
          document.querySelector("#msg").textContent =
            "Please try again after scoring more than 10";
          document.querySelector("#msg").style.color = "#f25119";
        }
        else if (img3clicks > 1 && !step4enabled) {
          document.querySelector("#msg").textContent =
            "Sorry! You cannot perform this operation";
          document.querySelector("#msg").style.color = "#f25119";
        } else if (img4clicks > 0) {
          document.querySelector("#msg").textContent =
            "Sorry! You have already generated the coupon";
          document.querySelector("#msg").style.color = "#f25119";
        } else {
          document.querySelector("#msg").textContent =
            "Sorry! You cannot perform this operation";
          document.querySelector("#msg").style.color = "#f25119";
        }
      }
    }

    function RollFun() {
      let rand = Math.floor(Math.random() * 6 + 1);
      document.querySelector("#diceimage").innerHTML =
        "<img src='./images/" + rand + ".png'/>";
      totalscore += rand;
      document.querySelector("#score").textContent = rand;
      document.querySelector("#totalscore").textContent = totalscore;
    }

    function couponGenerate() {
      let small = "abcdefghijklmnopqrstuvwxyz";
      let large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let num = "0123456789";
      let special = "!@#$%&*_?";
      let chars = small + large + num + special;
      let couponStr = "";
      for (let i = 0; i < 12; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        couponStr += chars[rand];
      }
      return couponStr;
    }