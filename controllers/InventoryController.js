

const Inventory = require('../models/Inventory');

class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }

    
    getInventory(req, res) {
        const items = this.inventoryService.getAllInventory();
        res.json(items);
    }

    
    getInventoryById(req, res) {
        const id = parseInt(req.params.id);
        const item = this.inventoryService.getInventoryById(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Item not found');
        }
    }

   
    createInventory(req, res) {
        const { id, name, description } = req.body;
        
       
        try {
            const newItem = this.inventoryService.createInventory(id, name, description);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(400).send(error.message); 
        }
    }

   
    updateInventory(req, res) {
        const id = parseInt(req.params.id);
        const { name, description } = req.body;

        const updatedItem = this.inventoryService.updateInventory(id, name, description);
        if (updatedItem) {
            res.json(updatedItem);
        } else {
            res.status(404).send('Item not found');
        }
    }

   
    deleteInventory(req, res) {
        const id = parseInt(req.params.id);
        const deletedItem = this.inventoryService.deleteInventory(id);
        if (deletedItem) {
            res.json(deletedItem);
        } else {
            res.status(404).send('Item not found');
        }
    }
}

module.exports = InventoryController;
