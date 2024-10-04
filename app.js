
const express = require('express');
const InventoryService = require('./services/InventoryService'); 
const InventoryController = require('./controllers/InventoryController');

const app = express();

const inventoryService = new InventoryService(); 
const inventoryController = new InventoryController(inventoryService);


app.get('/api/inventory', (req, res) => inventoryController.getInventory(req, res));


app.use(express.static('public'));

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
