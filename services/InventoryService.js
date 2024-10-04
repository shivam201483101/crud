
class InventoryService {
    getInventory() {
        return [
            { id: 1001, name: 'COG', description: 'convenience goods' },
            { id: 2001, name: 'SHG', description: 'shopping goods' },
            { id: 2008, name: 'SPG', description: 'specialty goods' },
            { id: 3001, name: 'UNG', description: 'unsought goods' }
        ];
    }
}

module.exports = InventoryService;
