async function byEmail(){
    await clearElements();
    let apiUrl = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=SMBsnIAyAMlxcTbWz2a9WUeJ6YraL9J4";
    let response = await fetch(apiUrl).catch(err => console.error(err));
    let json = await response.json();
    console.log(json);
    let entries = json.results;
    
    for(entry of entries){
        let listItem = document.createElement("li");
        listItem.innerHTML = `<h2>${entry.title} ${entry.byline} ${entry.published_date}</h2>` + `${entry.abstract}`;
        articlesToDisplay.appendChild(listItem);
    }

}

async function byShared(){
    await clearElements();
    let apiUrl = "https://api.nytimes.com/svc/mostpopular/v2/shared/7.json?api-key=SMBsnIAyAMlxcTbWz2a9WUeJ6YraL9J4";
    let response = await fetch(apiUrl).catch(err => console.error(err));
    let json = await response.json();
    console.log(json);
    let entries = json.results;
    
    for(entry of entries){
        let listItem = document.createElement("li");
        listItem.innerHTML = `<h2>${entry.title} ${entry.byline} ${entry.published_date}</h2>` + `${entry.abstract}`;
        articlesToDisplay.appendChild(listItem);
    }
    
}

async function byViewed(){
    await clearElements();
    let apiUrl = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=SMBsnIAyAMlxcTbWz2a9WUeJ6YraL9J4";
    let response = await fetch(apiUrl).catch(err => console.error(err));
    let json = await response.json();
    console.log(json);
    let entries = json.results;
    
    for(entry of entries){
        let listItem = document.createElement("li");
        listItem.innerHTML = `<h2>${entry.title} ${entry.byline} ${entry.published_date}</h2>` + `${entry.abstract}`;
        articlesToDisplay.appendChild(listItem);
    }
}

function clearElements(){
    let elements = document.getElementById("articlesToDisplay");
    elements.innerHTML = "";
}

emailButton.onclick = () => byEmail();
sharedButton.onclick = () => byShared();
viewedButton.onclick = () => byViewed();