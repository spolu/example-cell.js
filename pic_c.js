/******************************/
/*   EMPTY CELL                 */
/******************************/
var pic_c = function(spec, my) {
  var _super = {};
  my = my || {};

  my.sha = spec.sha;

  // public
  var build;   /* build(); */
  var refresh; /* refresh(); */

  // private
  var that = CELL.cell(spec, my);

  /****************************/
  /*   BUILD                  */
  /****************************/
  build = function() {
    my.element = $('<div/>').addClass('pic').attr('id', 'pic-' + my.sha);

    var fll = $('<div/>').addClass('fll').attr('id', 'fll-' + my.sha);
    my.element.append(fll);
    var usr = $('<div/>').addClass('usr').attr('id', 'usr-' + my.sha);
    my.element.append(usr);

    return my.element;
  };

  /****************************/
  /*   REFRESH                */
  /****************************/
  /**
   * @expects { }
   */
  refresh = function(json) { 
    $('#pic-' + my.sha + ' .fll').css({ "background-image": 'url(' + json.fll + ')' });
    $('#pic-' + my.sha + ' .usr').html(json.dsp);
    _super.refresh(json);
  };

  
  CELL.method(that, 'build', build, _super);
  CELL.method(that, 'refresh', refresh, _super);

  return that;
};
