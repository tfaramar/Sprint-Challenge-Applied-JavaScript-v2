// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

//console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'));

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(object => {
    const items = object.data.articles.bootstrap
    //console.log(items);
    items.forEach(article => {
        cardContainer.append(createCard(article))
    })
    const jsitems = object.data.articles.javascript
    //console.log(jsitems);
    jsitems.forEach(article => {
        cardContainer.append(createCard(article))
    })
    const jqitems = object.data.articles.jquery
    //console.log(jqitems);
    jqitems.forEach(article => {
        cardContainer.append(createCard(article))
    })
    const techitems = object.data.articles.technology
    //console.log(techitems);
    techitems.forEach(article => {
        cardContainer.append(createCard(article))
    })
    const nodeitems = object.data.articles.node
    //console.log(nodeitems);
    nodeitems.forEach(article => {
        cardContainer.append(createCard(article))
    })
})
.catch(error => {
    console.log('There was a problem fetching data from the Lambda Times Articles API')
})

function createCard(object){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const photoContainer = document.createElement('div');
    const photo = document.createElement('img');
    const credit = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    photoContainer.classList.add('img-container');

    headline.textContent = object.headline;
    photo.src = object.authorPhoto;
    photo.alt = 'Photo of author';
    credit.textContent = `By ${object.authorName}`;


    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(photoContainer);
    photoContainer.appendChild(photo);
    author.appendChild(credit);

    return card;

}