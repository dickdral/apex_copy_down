var htmldb_delete_message='"DELETE_CONFIRM_MSG"';

// APEX Copy Down
// Author: Dick Dral (Detora)
// Version: 0.1

// global namespace
var apexcopydown = {

  source_item : null,
  item_name : null,
  source_value : null,
  destination_item : null,
    
/*
 * bind actions copydown, up and down to keys
 */
init: function ()
{
$(document).keydown(function(e){

      if( e.which === 40 && e.shiftKey ){
         apexcopydown.copy('down');
      }
      if( e.which === 40 && !e.shiftKey){
         apexcopydown.down();
      }
      if( e.which === 38 && e.shiftKey ){
         apexcopydown.copy('up');
      }
      if( e.which === 38 && !e.shiftKey){
         apexcopydown.up();
      }
      if( e.which === 67 && e.shiftKey && e.ctrlKey ){
         apexcopydown.copy('down');
      }

}); 

},
/*
 * - get current item
 * - check whether it is a tabular form item, if not return false
 * - get value
 */
get_source_item: function ( )
{
  source_item = document.activeElement;
  item_name = $(source_item).attr('name');  

  // if item is not tabular form item return false
  if ( item_name.indexOf('f') != 0 || item_name.length != 3 ) { return false; }

  source_value = $(source_item).val();

  return true;
},
/* 
 * get the destination item
 * returns value false if not found
 */
get_destination_item: function ( direction)
{
  try 
  {
    // get row for current item
    var tr = $(source_item).closest('tr');
    
    // move to next row depending on direction ( up or down )
    if ( direction == "up" ) 
    { tr = tr.prev(); }
    else
    { tr = tr.next(); }
    
    // get destination item in row using name    
    destination_item = $(tr).find('[name="'+item_name+'"]');  
    
    // return true when item found
    return ( destination_item != null && destination_item != undefined );
    
  } catch (e) 
  { 
      console.log(e);
      return false; 
  }
},
/* 
 * moves the focus up or down if possible
 */
move: function (direction)
{
  if ( apexcopydown.get_source_item() && apexcopydown.get_destination_item(direction) )
  {
      $(destination_item).focus();
  }
},
/* 
 * moves the focus up
 */
up: function ( )
{
   apexcopydown.move('up');
},
/* 
 * moves the focus down
 */
down: function ( )
{
   apexcopydown.move('down');
},
/* 
 * moves the focus down and copies the current value to that element
 */
copy: function ( direction)
{
   apexcopydown.move(direction);
   $(destination_item).val(source_value);
},

// function that gets called from plugin
doIt: function() {
        // plugin attributes
        var daThis = this;
        apexcopydown.init();
    }
};
