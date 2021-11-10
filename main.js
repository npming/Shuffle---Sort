var data = [
    {num: 1, attr: 'light'},
    {num: 2, attr: 'medium'},
    {num: 3, attr: 'dark'},
    {num: 4, attr: 'medium'},
    {num: 5, attr: 'dark'},
    {num: 6, attr: 'grey'},
    {num: 7, attr: 'grey'},
    {num: 8, attr: 'light'},
    {num: 9, attr: 'dark'},
]

data.map(items => {
    var element = document.createElement('li');
    var para = document.createElement("p");
    para.innerHTML = items.num;
    element.appendChild(para);
    element.setAttribute("class", items.attr);
    document.getElementById('list').appendChild(element);
})

function shuffle() {
    document.getElementById("list").innerHTML = "";
    data.sort(() => Math.random() - 0.5);
    data.map(items => {
        var element = document.createElement('li');
        var para = document.createElement("p");
        para.innerHTML = items.num;
        element.appendChild(para);
        element.setAttribute("class", items.attr);
        document.getElementById('list').appendChild(element);
    });
}
function sort() {
    document.getElementById("list").innerHTML = "";
    data.sort((a, b) => (a.num > b.num) ? 1 : -1);
    data.map(items => {
        var element = document.createElement('li');
        var para = document.createElement("p");
        para.innerHTML = items.num;
        element.appendChild(para);
        element.setAttribute("class", items.attr);
        document.getElementById('list').appendChild(element);
    });
}