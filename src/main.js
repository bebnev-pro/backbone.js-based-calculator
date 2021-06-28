require.config({
  paths: {
    'jquery': '../node_modules/jquery/dist/jquery',
    'underscore': '../node_modules/underscore/underscore',
    'backbone': '../node_modules/backbone/backbone',
  }
});

require(['views/main'], function (Start) {
  let start =  new Start;
  $(window).on('resize', (e=>{
    start.newSumm();
  }));
  $(window).on('scroll', (e=>{
    start.newSumm();
  }));
});