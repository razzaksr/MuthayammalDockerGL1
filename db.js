let experts=[
    {
        "fullname":"Razak Mohamed S",
        "contact":234323434,
        "experience":10.5,
        "commercials":210000,
        "expert":"Java"
    },
    {
        "fullname":"Annamalai S",
        "contact":876567897,
        "experience":5,
        "commercials":13900,
        "expert":"Python"
    },
    {
        "fullname":"Manoj",
        "contact":234323434,
        "experience":5,
        "commercials":13900,
        "expert":"Java"
    }   
]

const find=()=>{
  return experts  
}

const save=(obj)=>{
    experts.push(obj)
    return obj.fullname+" has added"
}

module.exports={find,save}