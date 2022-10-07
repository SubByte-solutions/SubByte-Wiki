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


async function loadDefaults()
{
    await loadDomElements("sharedNodes/navBar|body");
    await loadDomElements("sharedNodes/mainBannerLogo|body");
    await loadDomElements("sharedNodes/container|body");
    await loadDomElements("mainPageElements/whatIsSBWiki|container");
    await loadDomElements("mainPageElements/featuredCarousel|container");
    await loadDomElements("mainPageElements/allGuides|container");

    await loadDomElements("sharedNodes/footer|body");
}