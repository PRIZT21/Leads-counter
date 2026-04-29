
let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-El")

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.ayobamiji1234.com")
// myLeads= JSON.stringify(myLeads)
// console.log(typeof myLeads)


// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epicleads.com")
// console.log(myLeads)
// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epiclead.com")

// console.log(myLeads)




inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    // inputEl.value = ""

    console.log(localStorage.getItem("myLeads"))
    
})


// localStorage.setItem("myName", "oluwanisola")
// localStorage.getItem("myLeads")

// localStorage.clear

// function renderLead(){
//     let listItem = "<li>" + inputEl.value + "</li>"
//     ulEl.innerHTML= listItem
// }

function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        // listItems += "<li> <a  target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a> </li>"
        listItems += `
            <li> 
                <a  target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]} 
                </a> 
            </li>
        `
        //   const li = document.createElement("li")
        //   li.textContent = myLeads[i]
        //   ulEl.append(li)
    }

    ulEl.innerHTML= listItems
}
