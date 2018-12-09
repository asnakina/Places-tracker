const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { Place } = require('./models');
const PORT = process.env.PORT || 7777;

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json ({
    message: 'Here we are'
  });
});

app.get('/places', async(req, res) => {
  try{
    const places = await Place.findAll();
    res.json(places);
  } catch(e) {
    res.status(500).json({ message: e.message});
    // res.status(500).json(`here is a bug ${e.message}`);
  }
});

app.get('/places/:id', async (req, res) => {
  try {
    const idConvert = parseInt(req.params.id)
    const places = await Place.findById(idConvert);
    res.json({data: places});
  } catch (e) {
    console.error(e);
    res.status(500).json({message: e.message});
  }
})

//it would be nice to have url '/places/visited'!
app.get('/placesvisited', async(req, res) => {
  try{
    const places = await Place.findAll({
      where: {
        visited: true
      }
    });
    res.json(places);
  } catch(e) {
    res.status(500).json({message: e.message});
  }
})

app.get('/placesnotvisited', async(req, res) => {
  try{
    const places = await Place.findAll({
      where: {
        visited: false
      }
    });
    res.json(places);
  } catch(e) {
    res.status(500).json({message: e.message});
  }
})

app.post('/places', async (req, res) => {
  try {
    const postPlace = await Place.create(req.body);
    res.json(postPlace);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message});
    // res.status(500).json(`here is a bug ${e.message}`);
  }
});

app.delete('/places/:id', async (req, res) => {
  try {
    const destroyedPlace = await Place.findById(req.params.id);
    if (destroyedPlace) await destroyedPlace.destroy();
    res.json({ message: `The place with id ${req.params.id} has been deleted`});
  } catch (e) {
    res.status(500).json({
      message: e.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
