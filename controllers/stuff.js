const express = require('express');
const router = express.Router()
const Monster = require('../models/stuff') //this means the monsters should make it to our index
//where i'll be doing all the coding

//every route inside here is implicitly starting at /monsters
router.get('/', (req, res)=>{
    
    res.render('index.ejs')
});

router.get('/', (req, res)=>{
    Monster.find({}, (err, monsters)=>{
        const data = {
            monsters: monsters
        }
        //we don't want to render until we've found monsters from database
        res.render('monsters/index.ejs', data)
    })
    
});

router.put('/new', (req, res)=>{
    //name of route that gives form to create
    res.render('monsters/new.ejs')
});

router.get('/:id', (req, res)=>{
    Monster.findById(req.params.id, (err, monster)=>{
        res.render('monsters/show.ejs', {
            monster: monster
        })
    })
});

router.post('/', (req, res)=>{
    res.redirect('/monsters')
});

router.post('/', (req, res)=>{
    Monster.create(req.body, (err, monster)=>{
        res.redirect('/monsters');
    })
});

router.delete('/:id', (req, res)=>{
    Monster.findByIdAndDelete(req.params.id, (err, deletedMonst)=>{
        res.redirect('/monsters')
})
});
//body parser, gotta get it before we put it, req.body
//all get routes will render
router.get('/:id/edit', (req,res)=>{
    Monster.findById(req.params.id, (err, monster)=>{
        res.render("monsters/edit.ejs")
    })
})

router.put('/:id/edit', (req,res)=>{
    Monster.findByIdAndUpdate(req.params.id, req.body, (err, monsterUpdated)=>{
        res.redirect(`/monster/${req.params.id}`)
    })
})




module.exports = router;