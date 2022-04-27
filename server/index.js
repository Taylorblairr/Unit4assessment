const express = require("express");
const cors = require("cors");

const app = express();

let namesArr = ["Jeff", "Jim", "Node" ]

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortune = ["Big money id on the horzion",
           "Bright days are ahead",
           "You will meet a man names Jeff",
  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/enc", (req, res) => {
  const enc = ["6 Months of school isn't that long",
           "Soon you will secure the bag",
           "Great wage and beneifts just around the corner!",
  ];
  let randomIndex = Math.floor(Math.random() * enc.length);
  let randomEnc= enc[randomIndex];

  res.status(200).send(randomEnc);
  
});




app.get("/api/last", (req, res) => {
  const last = [ 'Dont be pushed around by the fears in your mind. Be led by the dreams in your heart.',
  'Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.',
  'Dont waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.',
  'Keep Going, Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.',

  ];
  let randomIndex = Math.floor(Math.random() * last.length);
  let randomLast= last[randomIndex];

  res.status(200).send(randomLast);
  
});


app.post("/api/name/", (req,res) => {
  const {inputValue} = req.body
  namesArr.push(inputValue)
  console.log(namesArr)
  res.status(200).send(namesArr)
})


  app.delete("/api/remove/", (req, res) => {
      const {remoValue}  = req.body
          remoValue.filter(namesArr, 0)
          namesArr.splice(remoValue, -1)
          console.log(namesArr)
          res.status(200).send(namesArr)  
  });




app.listen(4000, () => console.log("Server running on 4000"))