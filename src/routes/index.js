const {Router } = require('express');
const router = Router();
const _ = require('underscore');

const datos = require('../datos.json');
console.log(datos);

router.get('/', (req, res) => {

    res.json(datos);
});

router.post('/', (req, res) => {
    
    if(name && last_name && credit)
    {
        const id = datos.length + 1;
        const newDato = {id, ...req.body};
        datos.push(newDato);
        res.json(datos);
    }
    else
    {
        res.status(500).json({error: 'There was an error'});
    }
});

router.put('/:id',  (req, res) => {
    const {id} = req.params;
    const {name, last_name, credit} = req.body;
    if(name && last_name && credit)
    {
        _.each(datos, (dato, i) => 
        {
            if(dato.id == id)
            {
                dato.name = name;
                dato.last_name = last_name;
                dato.credit = credit;
            }
        });
        
        res.json(datos); 
    }
    else
    {
        res.status(500).json({error: 'There was an error'});
    }
});


router.delete('/:id',  (req, res) => {
    const {id} = req.params;
    _.each(datos, (dato, i) => {
        if(dato.id == id)
        {
            datos.splice(i, 1);
            res.json(datos); 
        }
    })
});

module.exports = router;