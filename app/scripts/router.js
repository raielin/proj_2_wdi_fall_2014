'use-strict';

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'home': 'home',
    'menu': 'menu',
    'about': 'about',
    'contact': 'contact',
    'checkout': 'checkout',
    'cart': 'cart',
    'confirmation': 'confirmation'
  },

  home: function() {
    var template = Handlebars.templates['home'];
    $('template-content').html(template({}));
  }
})
