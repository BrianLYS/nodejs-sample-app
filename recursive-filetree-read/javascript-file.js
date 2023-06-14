function createFileTree(jsonObj) {
  let ulElement = document.createElement("ul");

  let liElement = document.createElement("li");
  liElement.textContent = jsonObj.name;

  ulElement.appendChild(liElement);

  if (jsonObj.type === "folder" && jsonObj.children) {
    liElement.addEventListener("click", function (e) {
      // this will stop the event from bubbling up to parent folders
      e.stopPropagation();
      this.classList.toggle("open");
    });

    for (let child of jsonObj.children) {
      let childElement = createFileTree(child);
      liElement.appendChild(childElement);
    }
  }

  return ulElement;
}

document.addEventListener('DOMContentLoaded', (event) => {
    let fileStructure = {
        "name": "Example-Folder",
        "type": "folder",
        "children": [
            {"name": "Cool.js", "type": "file"},
            {"name": "Awesome.js", "type": "file"},
            {
                "name": "Another-Folder",
                "type": "folder",
                "children": [
                    {"name": "WowSoDeep.js", "type": "file"}
                ]
            },
            {"name": "lolol.js", "type": "file"}
        ]
    };

    document.body.appendChild(createFileTree(fileStructure));
});
