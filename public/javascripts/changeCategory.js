let children = document.getElementById("v-pills-tab").children;

addHighlight = (nodelist, index) => {
  removeHighlight(nodelist);
  nodelist[index].classList.add("active");
};

removeHighlight = (nodelist) => {
  for (let i = 0; i < nodelist.length; i++) {
    nodelist[i].classList.remove("active");
  }
};

for (let i = 0; i < children.length; i++) {
  children[i].addEventListener("click", () => addHighlight(children, i));
}
