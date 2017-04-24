jQuery(document).ready(function() {

  //Tabs
  $( function() {
    $( "#tabs" ).tabs();
  });

  //Draggable element
  $( function() {
    $( "#draggable1" ).draggable();
    $( "#draggable2" ).draggable();
    $( "#draggable3" ).draggable();
    $( "#draggable4" ).draggable();
    $( "#draggable5" ).draggable();
    $( "#draggable6" ).draggable();
  } );

  //Dropable element
  $( function() {
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  });

  //ControlGroup
  $( function() {
  $( ".controlgroup" ).controlgroup()
  $( ".controlgroup-vertical" ).controlgroup({
    "direction": "vertical"
  });
} );

  //DatePicker
  $( function() {
    $( "#datepicker" ).datepicker();
  });

  //DateRange
  $( function() {
    var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
  });

  function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
  });

  $("#doneOpt").click(function(){
    $("#doneOpt").css("background-color", "green");
    $("#doneOpt").css("color", "white");
  });


});
