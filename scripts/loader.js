export default function loadDomElements(elementList)
{
    elementList.forEach(obj=>
    {
        fetch(`./domElements/${obj.path}.html`)
            .then(response=> response.text())
            .then
            (input=>
            {
                let rootElement = document.getElementById(obj.root)
                if(!rootElement){return;}

                if(obj.clean)
                    {rootElement.innerHTML = ""}

                if(!document.getElementById(obj.id) || !obj.id)
                {rootElement.innerHTML += input}
            });
    })
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

export function loadIframe(obj)
{
    fetch(`./domElements/${obj.path}.html`)
            .then(response=> response.text())
            .then
            (input=>
            {
                let rootElement = document.getElementById(obj.root)
                if(!rootElement){return;}

                if(obj.clean)
                {rootElement.innerHTML = ""}

                let div = document.createElement("div");
                div.classList.add("frameWrapper");

                let frame = document.createElement("iframe");
                frame.setAttribute("src",`./domElements/${obj.path}.html`)
                frame.setAttribute("frameboarder","0");
                frame.setAttribute("scrolling","no");

                div.appendChild(frame);
                rootElement.appendChild(div);
            });
}

export async function updateContainerHeader(input)
{    
    let header = document.querySelector("#container h1");
    while(!header)
    {
        await sleep(200);
        header = document.querySelector("#container h1");
    }
    header.innerText = input;
}

export async function addSectionHeadder(input)
{    
    let header = document.querySelector("#container h1");
    while(!header)
    {
        await sleep(200);
        header = document.querySelector("#container h1");
    }
    header.innerText = input;
}

export function cleanNode(selector)
{document.querySelector(selector).innerHTML="";}