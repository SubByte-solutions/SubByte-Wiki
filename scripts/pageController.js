import loadMainPage from "./pageScripts/mainPage.js";
import loadDomElements from "./loader.js"
import loadFeaturesPage from "./pageScripts/featuresPage.js";

function getPageName() 
{
    if(window.location.href.split('#')[1])
    {return window.location.href.split('#')[1].toLowerCase()}

    return "mainpage";
}

let pageNavigation = 
{
    "mainpage": loadMainPage,
    "features": loadFeaturesPage
}

function loadPage(page)
{
    loadDomElements
    ([
        {path:"sharedNodes/video",id:"background-video",root:"body"},
        {path:"sharedNodes/navBar",id:"nav-bar",root:"wrapper"},
        {path:"sharedNodes/mainBannerLogo",id:"banner-logo",root:"wrapper"},
        {path:"sharedNodes/container",id:"container",root:"wrapper"}
    ]);

    if(page)
    {
        pageNavigation
        [
            page
            .split('#')[1]
            .toLowerCase()
        ]();
    }
    else
    {pageNavigation[getPageName()]();}

    loadDomElements([{path:"sharedNodes/footer",id:"footer",root:"wrapper"}]);
    scroll(0,450)
}

window.addEventListener('popstate', function() 
{loadPage(location.hash)});


window.addEventListener('DOMContentLoaded', (event) => 
{loadPage(location.hash);});

