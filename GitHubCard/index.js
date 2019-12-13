/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/swaCreates').then(function(response){
  // console.log(response.data);
  const res_Data= response.data;
  const newCard= cardCreator(res_Data);
  cardContainer.appendChild(newCard);
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



// adding friends to page AND github handles to the followersArray

axios.get('https://api.github.com/users/swaCreates/followers').then(function(response){
  response.data.forEach(function(item){
    const followerCard= cardCreator(item);
    cardContainer.appendChild(followerCard);

    followersArray.push(followerCard.textContent);

  })
})

const followersArray = [];

console.log(followersArray);




const cardContainer= document.querySelector('.cards');

function cardCreator(obj){

  // creating DOM elements

  const card= document.createElement('div');
  const image= document.createElement('img');
  const cardInfo= document.createElement('div');
  const h3Name= document.createElement('h3');
  const p_userName= document.createElement('p');
  const p_location= document.createElement('p');
  const p_profile= document.createElement('p');
  const address= document.createElement('a');
  const p_followers= document.createElement('p');
  const p_following= document.createElement('p');
  const p_bio= document.createElement('p');

  // creating classes

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3Name.classList.add('name');
  p_userName.classList.add('username');

  // appending content

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3Name);
  cardInfo.appendChild(p_userName);
  cardInfo.appendChild(p_location);
  cardInfo.appendChild(p_profile);
  p_profile.appendChild(address);
  cardInfo.appendChild(p_followers);
  cardInfo.appendChild(p_following);
  cardInfo.appendChild(p_bio);

  // adding text content

  image.src= obj.avatar_url;
  h3Name.textContent= obj.name;
  p_userName.textContent= obj.login;
  p_location.textContent= obj.location;
  address.textContent= obj.html_url;
  p_followers.textContent= obj.followers;
  p_following.textContent= obj.following;
  p_bio.textContent= obj.bio;

  // returning card because everything will be appended to it

  return card;

}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
