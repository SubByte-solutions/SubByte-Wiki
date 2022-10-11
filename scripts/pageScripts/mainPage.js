import loadDomElements, { updateContainerHeader } from "../loader.js"

export default function loadMainPage()
{

    loadDomElements
    ([
        {path:"mainPageElements/whatIsSBWiki",root:"container-inside",clean:true},
        {path:"mainPageElements/featuredCarousel",root:"container-inside"},
        {path:"mainPageElements/allGuides",root:"container-inside"},
    ]);

    updateContainerHeader("Welcome to the SubByte Wiki!");
}

export async function loadMainPageAsync()
{await loadMainPage();}