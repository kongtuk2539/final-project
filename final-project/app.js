const number = document.getElementById("number");
      const circle = document.getElementById("circle");
      let counter = 0;
      let coin = 25;
      
      setInterval(() => {
        if (counter == coin) {
          clearInterval();
        } else {
          counter += 1;
          number.innerHTML = counter + "Coin";
        }
      }, 20);

      //440-440*% ex. 440-440*0.5 = 50%
      const coinPercent = coin / 100;
      const valueStroke = 440 - 440 * coinPercent


      const animation = circle.animate(
        [
          { strokeDashoffset: 440 }, // Start with the circle fully hidden
          { strokeDashoffset: valueStroke }, // End with the circle fully visible
        ],
        {
          duration: 2000, // 2 seconds
          easing: "linear",
          fill: "forwards", // Ensure the final state is applied after animation
        }
      );