export function generateHtmlCards(name) {
    return (`<div class= "card" >
        <h1 class="name" > Name: ${name}</h1>
        <div class='cards-left--container'>
            <h2 > Cards Left: <span class='cards-left'>30</span></h2>
        </div>
        <div class="img-container" >
            <div class="img-stack" >
                <img src="img/deck.jpeg" alt = "" />
            </div>
            <div class="current-value--container" >
                <h3>Current Cards:<h3>
                <h2 class='current-value'>6</h2>
            </div>
        </div>
        </div>`);
}
