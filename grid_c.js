/******************************/
/*   EMPTY CELL                 */
/******************************/
var grid_c = function(spec, my) {
  var _super = {};
  my = my || {};

  // public
  var build;   /* build(); */
  var refresh; /* refresh(); */

  // private
  var pic;

  var that = CELL.cell(spec, my);


  /****************************/
  /*   BUILD                  */
  /****************************/
  build = function() {
    my.element = $('<div/>').addClass('grid');

    return my.element;
  };

  /****************************/
  /*   REFRESH                */
  /****************************/
  /**
   * @expects { }
   */
  refresh = function(json) {
    my.element.empty();

    for(var sha in json) {
      my.children[sha] = pic_c({ sha: sha,
                                 path: my.path + '/' + sha, 
                                 container: my.container});
      my.element.append(my.children[sha].build());
    }

    _super.refresh(json);
  };

  
  CELL.method(that, 'build', build, _super);
  CELL.method(that, 'refresh', refresh, _super);

  return that;
};
