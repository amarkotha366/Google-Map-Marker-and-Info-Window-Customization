
function emailFunction(id) {
    var x;

    var statesdemo = {
        state0: {
            title: 'Please enter your Email Address',
            html: '<input type="text" name="email" value=""></label><br />',
            //buttons: { Submit: 1 },
            buttons: {Submit: 1, Unsubscribe: 0},
            //focus: "input[name='fname']",
            submit: function (e, v, m, f) {
                console.log(f);
                $.prompt.close();


                if (v === 1) {

                    if (f.email != null) {
                        $.ajax({
                            type: "POST",
                            url: "subscribe.php",
                            data: {email: f.email, id: id},
                            success: function (msg) {

                                if (msg === "success") {
                                    alert("Successfully added.");
                                }
                                if (msg === "Finished") {
                                    alert("You have already subscribed.");
                                }


                            }
                        });
                    }
                }
                else if (v === 0) {
                    if (f.email != null) {
                        $.ajax({
                            type: "POST",
                            url: "unsubscribe.php",
                            data: {email: f.email, id: id},
                            success: function (msg) {

                                if (msg === "success") {
                                    alert("Successfully Unsubscribe.");
                                }
                                if (msg === "error") {
                                    alert("Please Try Again ");
                                }


                            }
                        });
                    }

                }


                e.preventDefault();

            }
        },
    };

    $.prompt(statesdemo);
}


function mobileFunction(id) {
    var x;

    var statesdemo1 = {
        state0: {
            title: 'Please enter your Mobile number: ',
            html: '<input type="text" name="mobile" value=""></label><br />',
            //buttons: { Submit: 1 },
            buttons: {Submit: 1, Unsubscribe: 0},
            //focus: "input[name='fname']",
            submit: function (e, v, m, f) {
                console.log(f);

                $.prompt.close();
                if (v === 1) {
                    if (f.mobile != null) {
                        $.ajax({
                            type: "POST",
                            url: "addMobile.php",
                            data: {email: f.mobile, id: id},
                            success: function (msg) {

                                if (msg === "success") {
                                    alert("Successfully added.");
                                }
                                if (msg === "Finished") {
                                    alert("You have already subscribed.");
                                }

                            }
                        });
                    }
                }
                else if (v === 0) {
                    if (f.mobile != null) {
                        $.ajax({
                            type: "POST",
                            url: "unsubscribeMobile.php",
                            data: {email: f.mobile, id: id},
                            success: function (msg) {

                                if (msg === "success") {
                                    alert("Successfully Unsubscribe.");
                                }
                                if (msg === "error") {
                                    alert("Please Try Again ");
                                }


                            }
                        });
                    }

                }
                e.preventDefault();

            }
        },
    };

    $.prompt(statesdemo1);

}
