function highlightMe(event) {
    event.target.style.borderColor = "red";
}

function forgetMe(event, defaultColor) {
    event.target.style.borderColor = defaultColor;
}

function draw() {
    var calendarTable = document.createElement("table");
    for(var i = 0; i < 5; ++i) {
        var calendarRow = document.createElement("tr");
        for(j = 0; j < 7; ++j) {
            var calendarCell = document.createElement("td");
            var calendarCellContent = document.createElement("div");
            calendarCellContent.setAttribute("tabindex", "-1");
            var defaultColor = "gray";
            if((j * 7 + i + 1) % 7 === 0) {
                defaultColor = "blue";
            }
            calendarCellContent.onfocus = function(event) {highlightMe(event);};
            calendarCellContent.onblur = function(event) {forgetMe(event, defaultColor);};
            calendarCell.append(calendarCellContent);
            calendarRow.append(calendarCell);
        }
        calendarTable.append(calendarRow);
    }
    document.body.append(calendarTable);
}