function disneyTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("disney-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("disneytab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "";
    evt.currentTarget.className += " is-active";
} 