new Vue({
    el: '#vue-app',
    data: {
        name: 'Niloy Saha Roy',
        job: 'FullStack Developer',
        website: 'http://www.google.com',
        websiteTag: '<a href="http://www.facebook.com">Facebook</a>',
        age: 25,
        x: 0,
        y: 0,
        nam: '',
        year: '',
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        clkA: false,
        clkB: false,
        skills: ['java', 'C', 'C++', 'PHP', 'Javascript'],
        managers: [
            {name:'niloy', age:26},
            {name:'rajon', age:27},
            {name:'john', age:28}
        ]
    },
    methods: {
        greet: function (dayTime) {
            return `Good ${dayTime} ${this.name}`;
        },
        add: function (inc) {
            this.age += inc;
        },
        sub: function (dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        logName: function () {
            console.log('keypressed for name field');
        },
        logYear: function () {
            console.log('keypressed for year field');
        },
        // addToA: function (){
        //     console.log('addToA');
        //     return this.a + this.age;
        // },
        // addToB: function (){
        //     console.log('addToB');
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA: function () {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB');
            return this.b + this.age;
        },
        computedClass: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
