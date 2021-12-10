
Vue.config.devtools = true;

const app = new Vue({
  el: '#root',
  data: {
    images: [
      {
        items: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },

      {
        items: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',
      },

      {
        items: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },

      {
        items: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
      },
      
      {
        items: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
      },
    ],
    currentSlide: 0,
  },
  methods: {
    imgUp: function() {
      if(this.currentSlide < this.images.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      };
    },

    imgDown: function() {
      if(this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.images.length - 1;
      };
    }
  },
  
});