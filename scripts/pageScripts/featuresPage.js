import loadDomElements, { cleanNode, loadIframe, updateContainerHeader } from "../loader.js"

export default function loadFeaturesPage()
{
    loadIframe
    (
        {path:"pages/featuresPage",id:"",root:"container-inside",clean:true}
    );
    
    updateContainerHeader("SubByte's Server Features");

}