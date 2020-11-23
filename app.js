new Vue({
    el: '#vue-app',
    data: {
        name: 'Niloy Saha Roy',
        job: 'FullStack Developer',
        website: 'http://www.google.com',
        websiteTag: '<a href="http://www.facebook.com">Facebook</a>',
        age: 25,
        x: 0,
        y: 0
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
        updateXY: function (event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
