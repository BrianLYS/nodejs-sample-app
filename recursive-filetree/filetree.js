const fs = require('fs');
const path = require('path');

function createStructure(basePath, structure) {
    if(structure.type === 'folder') {
        const newFolderPath = path.join(basePath, structure.name);
        if(!fs.existsSync(newFolderPath)) {
            fs.mkdirSync(newFolderPath);
        }
        for(let child of structure.children) {
            createStructure(newFolderPath, child);
        }
    } else if(structure.type === 'file') {
        const newFilePath = path.join(basePath, structure.name);
        if(!fs.existsSync(newFilePath)) {
            fs.writeFileSync(newFilePath, '', 'utf8');
        }
    }
}

const structure = {
  "type": "folder",
  "name": "Example-Folder",
  "children": [
    {
      "type": "file",
      "name": "Cool.js"
    },
    {
      "type": "file",
      "name": "Awesome.js"
    },
    {
      "type": "folder",
      "name": "Another-Folder",
      "children": [
        {
          "type": "file",
          "name": "WowSoDeep.js"
        }
      ]
    },
    {
      "type": "file",
      "name": "lolol.js"
    }
  ]
};

const basePath = './';
createStructure(basePath, structure);
