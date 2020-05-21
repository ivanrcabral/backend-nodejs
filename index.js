const express = require('express');
const app = express();
const sha256 = require('sha256');
const cors = require('cors');

app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true
  })
);

app.get('/api/getFeatures', function (req, res) {
  res.json([
    {
      name: "Feature's One",
      feature_id: sha256(new Date().getTime()+"").slice(0, 7),
      features: [
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        }
      ]
    },
    {
      name: "Feature's Two",
      feature_id: sha256(new Date().getTime()+"").slice(0, 7),
      features: [
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        }
      ]
    },
    {
      name: "Feature's Three",
      feature_id: sha256(new Date().getTime()+"").slice(0, 7),
      features: [
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: 3,
          dif: 5
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        }
      ]
    },
    {
      name: "Feature's Four",
      feature_id: sha256(new Date().getTime()+"").slice(0, 7),
      features: [
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "x",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "y",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "z",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        },
        {   
          control: "diameter",
          dev: Math.floor(Math.random() * 11),
          dif: Math.floor(Math.random() * 11)+3
        }
      ]
    }
  ]);
});

app.listen(4000, function () {
  console.log('App listening on port 3000!');
});


