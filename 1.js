function profile(name,age){ // nama dan umur adalah 2 parameter
    return {
        name: name, // String, parameter pertama
        age: age, // Number, parameter kedua
        address: 'perum jatihurip blok 7 no 102', //String Alamat
        hobbies: ['olahraga', 'Mendengarkan Musik'], //Array
        is_married: false, //Boolean
        list_school: [{ // Array of object
            
            name: "SMA Negeri 1 cimalaka",
            year_in: "2012",
            year_out: "2015",
            major: "IPA"

        },
        {
            name: 'Universitas Padjajaran',
            year_in: '2015',
            year_out: '2018',
            major: 'komunikasi bisnis'

        }], 
        skills: [{
            skill_name: 'communications',
            level: 'intermediate'
        },{
            skill_name: 'cooking',
            level: 'intermediate'
        }, {
            skill_name: 'coding',
            level: 'beginner'
        }
        ], 
        interest_in_coding: true,
    }
}
let data = profile('Haninda Risbayanti Sukma', 23);
console.log(JSON.stringify(data));