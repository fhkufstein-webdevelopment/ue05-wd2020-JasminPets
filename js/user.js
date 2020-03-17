$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        var element = document.getElementById("username"); //speicher username in "element"

        var newUser = element.value; //Wert des elements auslesen

        userListBody.push(newUser); //element zu Liste hinzufügen

        var currLengt = userListBody.length; //liste in var speichern

        var table = document.getElementById("table");

        var row = table.insertRow(-1); //Reihe zu Tablle hinzufügen

        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2); //Zeilen einfügen

        c1.innerHTML =  currLengt; //erste Zeile aktuelle Länge
        c2.innerHTML = newUser;
        c3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"delete\"><i class=\"fa fa-trash\"></i></button>";


        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        var index = document.getElementById("index").value;
        document.getElementById("table").deleteRow(index+1);

    });

    //maybe some code follows here

});