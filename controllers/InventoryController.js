
class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }

    getInventory(req, res) {
        const inventory = this.inventoryService.getInventory();
        res.json(inventory);
    }
}

module.exports = InventoryController;
