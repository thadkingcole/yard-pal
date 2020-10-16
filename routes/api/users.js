const express = require('express');

const router = express.Router();

const User = require('../../database/models/user');
const passport = require('../../passport');

router.post('/', (req, res) => {
  
  const { username, password } = req.body;
  

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log('User Create Error: ', err);
      return;
    }

    if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }

    const newUser = new User({
      username: username,
      password: password,
    });

    newUser.save((err, savedUser) => {
      if (err) return res.json(err);

      res.json(savedUser);
    });
  });
});

router.post(
  '/login',
  (req, res, next) => {
    
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    
    res.send({
      username: req.user.username,
    });
  }
);

router.get('/', (req, res) => {
 
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post('/logout', (req, res) => {

  if (req.user) {
    req.logout();
    res.status(200).json({ msg: 'LOGGED OUT' });
  } else {
    res.status(404).json({ msg: 'NO USER TO LOGOUT' });
  }
});

// sale items add
router.put('/addItem', (req, res) => {
  if (req.user) {
    //add items to document
    
    User.findOneAndUpdate(
      { username: req.user.username },
      { $push: { items: req.body.item } },
      { safe: true, upsert: true, new: true, runValidators: true }
    ).then(dbItems => {
      
      res.json(dbItems);
    }).catch(err => {
      res.json(err);
    });
  } else {
    res.status(404).json({ msg: 'NO SELLER LOGGED IN' });
  }
});

//sale item delete
router.put('/delItem', (req, res) => {
  
  if (req.user) {
    //del items to document
    
    User.findOneAndUpdate(
      { username: req.user.username },
      { $pull: { items: { _id: req.body.itemId } } }, { safe: true, upsert: true },
    ).then(dbItems => {
      
      res.json(dbItems);
    }).catch(err => {
      res.json(err);
    });
  } else {
    res.status(404).json({ msg: 'NO SELLER LOGGED IN' });
  }
});

//browse items

router.get("/browseItems", (req, res) => {
  
  User.findOne(
    { username: req.user.username }

  ).then(dbItems => {
    
    res.json(dbItems);
  }).catch(err => {
    res.json(err);
  });

});

module.exports = router;
