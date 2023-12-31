//JSON iteration for using for in loop

let json= {
  "name": "Ranjith",

  "email": "ranjith@gmail.com",

  "phone": "9999999999",

  "address": "dubai main road, dubai cross street, dubai, 7767877",
  
  "education": [
    {
      "degree": "Master of Science in physics",

      "school": "University of Madras",

      "year": 2021
    }
  ],
  
   
  "skills": [

    "JavaScript",

    "HTML",

    "CSS",

    "React",

    "Node.js",

    "Git",

    "Problem Solving"
  ]
}

for(let i in json){console.log(json[i])}

//JSON iteration for using for loop

let json= {
  "name": "Ranjith",

  "email": "ranjith@gmail.com",

  "phone": "9999999999",

  "address": "dubai main road, dubai cross street, dubai, 7767877",
  
  "education": "=>",

  "degree": "Master of Science in physics",

  "school": "University of Madras",

  "year": 2021,  
  
   
  "skills": [

    "JavaScript",

    "HTML",

    "CSS",

    "React",

    "Node.js",

    "Git",

    "Problem Solving"
  ]
};


let keys = Object.keys(json);
//console.log(keys)
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = json[key];
  console.log(key + ": " + value);

}
//JSON iteration for using forEach 

let json= {
  "name": "Ranjith",

  "email": "ranjith@gmail.com",

  "phone": "9999999999",

  "address": "dubai main road, dubai cross street, dubai, 7767877",
  
  "education": "=>",

  "degree": "Master of Science in physics",

  "school": "University of Madras",

  "year": 2021,  
  
   
  "skills": [

    "JavaScript",

    "HTML",

    "CSS",

    "React",

    "Node.js",

    "Git",

    "Problem Solving"
  ]
};

let entries=Object.entries(json);
entries.forEach(([key, value]) => {
  console.log(key + ": " + value);
  });

  //JSON iteration for using for of loop

  let json= {
  "name": "Ranjith",

  "email": "ranjith@gmail.com",

  "phone": "9999999999",

  "address": "dubai main road, dubai cross street, dubai, 7767877",
  
  "education": "=>",

  "degree": "Master of Science in physics",

  "school": "University of Madras",

  "year": 2021,  
  
   
  "skills": [

    "JavaScript",

    "HTML",

    "CSS",

    "React",

    "Node.js",

    "Git",

    "Problem Solving"
  ]
};

let keys=Object.keys(json)

for(let i of keys){
    console.log(i,":",json[i])
}
