const reviews = [
    {
        id: 1,
        name: "susan",
        job: "web developer",
        img: "//www.aljazeera.com/wp-content/uploads/2021/10/379888048.jpg?resize=770%2C513&quality=80",
        text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum maxime, omnis eos animi suscipit! In incidunt molestiae culpa perspiciatis autem dolore assumenda facilis nisi."
    },

    {
        id: 2,
        name: "anna",
        job: "web developer",
        img: "//www.aljazeera.com/wp-content/uploads/2021/10/379888048.jpg?resize=770%2C513&quality=80",
        text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum maxime, omnis eos animi suscipit! In incidunt molestiae culpa perspiciatis autem dolore assumenda facilis nisi."
    },

    {
        id: 3,
        name: "peter",
        job: "web developer",
        img: "//www.aljazeera.com/wp-content/uploads/2021/10/379888048.jpg?resize=770%2C513&quality=80",
        text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum maxime, omnis eos animi suscipit! In incidunt molestiae culpa perspiciatis autem dolore assumenda facilis nisi."
    }
]

const img = document.querySelector('.profil--img')
const author = document.querySelector('.author')
const job = document.querySelector('.job')
const info = document.querySelector('.author')
const buttons__left = document.querySelector('.buttons__left')
const buttons__right = document.querySelector('.buttons__right')

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    console.log("shake");
})

