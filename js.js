const root = document.querySelector('#root');

function onCheck() {
  const btn = document.querySelector('.btn');
  this.root.innerHTML = `
    <a class="btn btn-danger w-100" onclick="home()">Home</a>
    <div class="zero"></div>
  `
}

function home() {
  this.root.innerHTML = `
    <a class="btn btn-danger" onclick="onCheck()">Check Level of Confidence</a>
  `
}