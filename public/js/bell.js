getCounts();    //to load quickly the numbers first
function getCounts(){
    const bellCount = document.getElementById('notifCount') 
    const jsonString = localStorage.getItem('notifications');   //get the array and it is string
    const parsedArray = jsonString ? JSON.parse(jsonString) : [];   //converted the string into an array
    const count = parsedArray.length
    addList(parsedArray)
    // console.log(count)
    bellCount.textContent = count;    
}

//update the count every 1 sec
setInterval(getCounts,1000);

function addList(parsedArray){
    const notifList = document.getElementById('notifList')  //container of the list
    notifList.innerHTML = []  
    notifList.innerHTML = `<h3> Notifications </h3>`
    parsedArray.forEach(item => {
        notifList.innerHTML += `<li>Bench 1 is at ${item.label}, ${item.code} </li>`
    }) 
}

//toggle the visilbity of the notifications
const container = document.getElementById('notification')
console.log(container)
container.addEventListener('click', ()=>{
    notifList.classList.toggle('active')
})

const header = document.getElementById('header')
const body = document.getElementById('body')
const outside = [header,body]
outside.forEach(tag => {
    tag.addEventListener('click', () => {
        console.log('clicked header')
        const notifList = document.getElementById('notifList') 
        notifList.classList.remove('active')
    })
})


