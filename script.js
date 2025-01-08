$(function(){
    console.log("Happy Valentine's Day!")
    $("form").on("submit", function(e){
        e.preventDefault();
        $(".trueLove1, .trueLove2, .math").empty();
        const barbie = $("#barbie").val();
        if (barbie === ""){
            alert("Don't forget to enter your name!")
        }
        else {
            $("#barbie").val("")
            $('.trueLove1').append(`
              <p>
                  <span class="userNames"></span>
                      ${barbie}
              </p>
              `)
        }
        const ken = $("#ken").val();
        if (ken === ""){
            alert("Don't forget to enter your crush's name!")
        }
        else {
            $("#ken").val("")
            $('.trueLove2').append(`
              <p>
                  <span class="userNames"></span>
                      ${ken}
              </p>
              `)
              math = (Math.floor(Math.random() * 101))
            $(".math").append(`
                <p>
                    = ${math}% true love!
                </p>
            `)
        }
    })

    });