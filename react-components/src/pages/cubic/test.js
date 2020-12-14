(function() {
    // Init
    var container = document.getElementById("container"),
        inner = document.getElementById("inner"),
        helper = document.getElementById("helper");

    console.log(container);

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //--------------------------------------------------

    var counter = 0;
    var updateRate = 1;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //--------------------------------------------------

    var onMouseEnterHandler = function(event) {
        helper.className = "";
        update(event);
    };

    var onMouseLeaveHandler = function() {
        inner.style = "";
        helper.className = "hidden";
    };

    var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
        displayMousePositionHelper(event);
    };

    //--------------------------------------------------

    var update = function(event) {
        mouse.updatePosition(event);
    };

    var displayMousePositionHelper = function(event) {
        var e = event || window.event;
        helper.innerHTML = mouse.show();
        helper.style = "top:"+(e.clientY-container.offsetTop)+"px;"
            + "left:"+(e.clientX-container.offsetLeft)+"px;";
    };

    //--------------------------------------------------

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
})();
