new Vue({
    el: ".section",
    data: {
        YourName: 'Charlene Bendaña',
        YourAge: 21,
        YourAge2: 21+5,
        imgSrc: 'https://i.pinimg.com/originals/58/dd/24/58dd243bb566928a536142dcd874340f.jpg'
    },
    methods: {
        favNo(add1, add2){
            const randomNo = Math.random(add1, add2)
            return randomNo
        }

    },


})