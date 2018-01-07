function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children

      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
  }
}

function deepestChild() {
  let parentNode = document.getElementById('grand-node');
  let nextChildNode = parentNode.children[0];

  while (nextChildNode) {
  parentNode = nextChildNode
  nextChildNode = parentNode.children[0]
}

return parentNode;
}
