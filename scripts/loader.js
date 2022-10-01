function loadDomElements(elementList,shouldClear)
{
    if(!shouldClear){shouldClear=false;}
    let elementListArr = elementList.split(',');

    elementListArr.forEach(element => 
    {
        let [domElement,parent] = element.split('|');

        fetch(`./domElements/${domElement}.html`)
        .then(response=> response.text())
        .then
        (text=>{
            let rootElement = document.getElementById(parent)
            if(!rootElement){return;}

            if(shouldClear)
            {document.getElementById(parent).innerHTML = text}
            else
            {document.getElementById(parent).innerHTML += text}
        });
    });
}


function loadDefaults()
{
    loadDomElements("test|container");
    loadDomElements("sharedNodes/navBar|body");
    loadDomElements("sharedNodes/mainBannerLogo|body");
    loadDomElements("sharedNodes/container|body");
    loadDomElements("mainPageElements/whatIsSBWiki|container");
    loadDomElements("mainPageElements/featuredCarousel|container");
    loadDomElements("mainPageElements/allGuides|container");

    loadDomElements("sharedNodes/footer|body");
}