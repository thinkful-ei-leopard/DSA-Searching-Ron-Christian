const BinarySearchTree = require('./BST');

function createCrew(){
    const bst = new BinarySearchTree();
    bst.insert(10, 'Captain Picard');
    bst.insert(6, 'Commander Riker');
    bst.insert(3,'Lt. Cmdr. Worf');
    bst.insert(8,'Lt. Cmdr. LaForge');
    bst.insert(1, 'Lieutenant security Officer');
    bst.insert(12, 'Commander Data');
    bst.insert(14, 'Lt. Cmdr Crusher');
    bst.insert(13, 'Lieutenant Selar');

    return bst;
}

const crew = createCrew();
console.log(crew);

// Captain