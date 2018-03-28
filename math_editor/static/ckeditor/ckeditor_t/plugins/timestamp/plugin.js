CKEDITOR.plugins.add( 'timestamp', {

    // Register the icons. They must match command names.
    icons: 'timestamp',

    // The plugin initialization logic goes inside this method.
    init: function( editor ) {
        var t=0;
        // Define the editor command that inserts a timestamp.
        editor.addCommand( 'insertTimestamp', {

            // Define the function that will be fired when the command is executed.
            exec: function( editor ) {
                //var now = new Date();

                // Insert the timestamp into the document.
                //editor.insertHtml( 'ans <em>' + t.toString() + '</em>' );
                tt='ans'+t.toString();
                editor.insertHtml('<span style="color:#ffffff"><span style="background-color:#000000">'+tt+'</span></span>');
                t=t+1;
            }
        });

        // Create the toolbar button that executes the above command.
        editor.ui.addButton( 'Timestamp', {
            label: 'Insert Timestamp',
            command: 'insertTimestamp',
            toolbar: 'insert'
        });
    }
});