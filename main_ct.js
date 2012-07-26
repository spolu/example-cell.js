/******************************/
/*   INITIALIZATION           */
/******************************/

var MAIN = {}; 

$(document).ready(function() {
    MAIN.main = main_ct({});
    MAIN.main.load({});
    MAIN.main.refresh();
});


/******************************/
/*   MAIN  CONTAINER          */
/******************************/
var main_ct = function(spec, my) {
  var _super = {}; 
  my = my || {}; 

  // public
  var load;
  var refresh;
  
  var that = CELL.container({ name: 'main' }, my);

  /****************************/
  /*   LOAD                   */
  /****************************/
  load = function() {
    var top = $('#example-top');

    my.children['input'] = input_c({ path: '/' + my.name + '/input', container: that }); 
    top.append(my.children['input'].build());

    my.children['input'].on('search', function(term) {
      $.getJSON('http://api.teleportd.com/search?user_key=1c603059495cfa4d1c54fa6b21b15baf&str=' + term)
        .success(function(data) {
          my.json.grid = {};
          data.hits.forEach(function(pic) {
            my.json.grid[pic.sha] = pic;
          });
          console.log('DONE: ' + data.hits.length);
          console.log(data);
          that.refresh();
        });
    });


    my.children['grid'] = grid_c({ path: '/' + my.name + '/grid', container: that }); 
    top.append(my.children['grid'].build());
  };


  /****************************/
  /*   REFRESH                */
  /****************************/
  refresh = function() {
    _super.refresh();
  }

  CELL.method(that, 'load', load, _super);
  CELL.method(that, 'refresh', refresh, _super);

  return that;
};

