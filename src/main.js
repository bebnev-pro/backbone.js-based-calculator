require.config({
  paths: {
    'jquery': '../node_modules/jquery/dist/jquery',
    'underscore': '../node_modules/underscore/underscore',
    'backbone': '../node_modules/backbone/backbone',
  }
});

require(['views/main'], function (Start) {
  let start =  new Start;
  $(window).resize(e=>{
    start.newSumm();
  });
  $(window).scroll(e=>{
    start.newSumm();
  });
});