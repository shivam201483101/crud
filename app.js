
const express = require('express');
const app = express();
const InventoryService = require('./services/InventoryService');
const InventoryController = require('./controllers/InventoryController');

// Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const inventoryService =  new InventoryService();
const inventoryController = new InventoryController(inventoryService);


app.get('/api/inventory', (req, res) => inventoryController.getInventory(req, res));
app.get('/api/inventory/:id', (req, res) => inventoryController.getInventoryById(req, res));    
app.post('/api/inventory', (req, res) => inventoryController.createInventory(req, res));        
app.put('/api/inventory/:id', (req, res) => inventoryController.updateInventory(req, res));    
app.delete('/api/inventory/:id', (req, res) => inventoryController.deleteInventory(req, res));  




app.use(express.static('public'));


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


