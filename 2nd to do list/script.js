const input_box = document.querySelector('#input_box')
const list_container = document.querySelector('#list_container')
const d = new Date().toLocaleDateString();



let span = document.createElement('span')
console.log(input_box);
console.log(list_container);

function AddTask() {
    if (input_box.value === "") {
        alert("you must write something")
    }
    else {


        let li = document.createElement("li")
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let li2 = document.createElement("h6")
        li2.innerHTML = d;
        li.appendChild(li2);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input_box.value = ""
    storedata()
}

list_container.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storedata();
    }
    else {
        if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            e.target.li2.remove()
            storedata();
        }
    }
}, false);

function storedata() {
    localStorage.setItem("data", list_container.innerHTML)
}
function showtask() {
    list_container.innerHTML = localStorage.getItem("data")
}
showtask()