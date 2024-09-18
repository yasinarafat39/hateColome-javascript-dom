const box22 = document.getElementById("box2");
// add class
box22.classList.add("amarClass");
// remove class
box22.classList.remove("amarClass");
// add or set Attribute
box22.setAttribute("data-attr", "something");
// update Attribute
box22.setAttribute("data-attr", "someOtherThing");
// remove Attribute
box22.removeAttribute("data-attr");

const newParagraph = document.createElement("p");
newParagraph.innerText = "His name is: Yasin Arafat";

// ----------------------- style ---------------------------
const newDiv = document.createElement("div");
newDiv.innerText = "DOM Manipulation is Fun!";
newDiv.style.backgroundColor = "#000";
newDiv.style.color = "#fff";

// ------------------------- element place ------------------------------
const box1 = document.getElementById("box1");
// box1.insertAdjacentElement('beforebegin', newDiv)
// box1.insertAdjacentElement('afterbegin', newDiv)
// box1.insertAdjacentElement('beforeend', newDiv)
box1.insertAdjacentElement("afterend", newParagraph);
box1.insertAdjacentElement("afterend", newDiv);

// ------------------------ using appendChild() method --------------------
// box1.appendChild(box22)

// -------------------------- insertBefore() method -----------------------
const box1h4 = document.querySelector("#box1>h4");
box1.insertBefore(box22, box1h4);

// ---------------------- Element Remove -------------------------
newParagraph.previousSibling.remove(); // using previousSibling() method
box1.nextSibling.remove(); // using nextSibling() method
box1.childNodes[1].remove() // using parent to child selector 
box1.removeChild(box1h4) // remove a specific child using removechild() method
box1.remove() // remove directly selected a element
