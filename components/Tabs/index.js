// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabContainer = document.querySelector('.topics')

// console.log(axios.get('https://lambda-times-backend.herokuapp.com/topics'));

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        const topicsArr = data.data.topics
        topicsArr.forEach(topic => {
            tabContainer.appendChild(createTab(topic))
        })

    })
    .catch(error => {
        console.log('There was a problem fetching data from the Lambda Times Topics API')
    })



function createTab(topic){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;

    return tab;
}