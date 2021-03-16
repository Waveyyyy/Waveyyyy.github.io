function mvDown()
{
    nav = document.getElementById("navbar");
    main = document.getElementById("main");

    if (nav.className == "closed" || nav.className == "")
    {
        nav.className = "open";
        main.className = "open";
    }else
    {
        nav.className = "closed";
        main.className = "closed";
    }

}