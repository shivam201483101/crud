
const Inventory = require('../models/Inventory');

class InventoryService {
    constructor() {
        this.inventory = [
            { id: 1001, name: 'COG', description: 'convenience goods' },
            { id: 2001, name: 'SHG', description: 'shopping goods' },
            { id: 2008, name: 'SPG', description: 'specialty goods' },
            { id: 3001, name: 'UNG', description: 'unsought goods' }
        ];
    }

   
    getAllInventory() {
        return this.inventory;
    }

   
    getInventoryById(id) {
        return this.inventory.find(item => item.id === id);
    }

   
    createInventory(id, name, description) {
        
        const existingItem = this.inventory.find(item => item.id === id);
        if (existingItem) {
            throw new Error('Item with this ID already exists');
        }

        const newItem = { id, name, description };
        this.inventory.push(newItem);
        return newItem;
    }

    
    updateInventory(id, name, description) {
        const item = this.inventory.find(inv => inv.id === id);
        if (item) {
            item.name = name;
            item.description = description;
            return item;
        }
        return null; 
    }

   
    deleteInventory(id) {
        const index = this.inventory.findIndex(inv => inv.id === id);
        if (index !== -1) {
            const deletedItem = this.inventory.splice(index, 1);
            return deletedItem;
        }
        return null;  
    }
}

module.exports = InventoryService;
