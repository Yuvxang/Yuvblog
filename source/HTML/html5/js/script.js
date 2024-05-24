    var x1 = document.getElementById("one");
    var x2 = document.getElementById("two");
    var x3 = document.getElementById("three");
    var x4 = document.getElementById("four");

    function gululu(){
        const elem = document.createElement("img");
        var a = Math.floor((Math.random() * 10) + 1);
        var b = Math.floor((Math.random() * 10) + 1);

        if(a >= 5)
            elem.src = "hertaa1.gif";
        else
            elem.src = "hertaa2.gif";
            
        if(b >= 8)
            x1.play();
        else if(b >= 5)
            x4.play();
        else if(b >= 2)
            x3.play();
        else if(b >= 0)
            x2.play();
            
        elem.position = "absolute";
        elem.style.right = "-300px";
        elem.id = "herta";
        document.body.appendChild(elem);
        setTimeout(function () {
            document.body.removeChild(elem);
        }, 900);
    }