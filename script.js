const slots = ['first', 'second', 'third']
const locations = [...document.getElementsByTagName('UL')]

const users = [ 
    {id:1, name: 'moe', slot: '', selected: false},
    {id:2, name: 'larry', slot: '', selected: false},
    {id:3, name: 'curly', slot: '', selected: false},
    {id:4, name: 'lucy', slot: '', selected: false},
]


const button = document.getElementsByTagName('INPUT')[0];
button.addEventListener('click', initialize())

function initialize(){
    create_lists()
}

function create_lists(){
    for(let i of users){
        let row  = Math.floor(Math.random()*3)
        i.slot = slots[row]
        let li = document.createElement('li')
        li.innerHTML = i.name
        locations[row].appendChild(li)
    }
}