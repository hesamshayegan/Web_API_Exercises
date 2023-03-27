console.log("Let's get this party started!");

const searchTerm = document.querySelector(".input-gif")
const container = document.querySelector(".container")
const removeBtn = document.querySelector(".remove-btn")

function addGif(res) {
    let numResults = res.data.length;

    if(numResults) {
        let randomIdx = Math.floor(Math.random() * numResults)
        console.log(numResults)
        
        let newDiv = document.createElement('div')
        newDiv.classList.add('div-gif')
        container.append(newDiv)
        
        let newGif = document.createElement('img')
        newGif.src = res.data[randomIdx].images.original.url;
        newDiv.append(newGif)
    }       
}
    
    const form = document.querySelector(".gif-form")

    form.addEventListener("submit", async function (e) {
    e.preventDefault();
   
    let url = `http://api.giphy.com/v1/gifs/search`;
    const response = await axios.get(url, {
    params: {
        q: searchTerm.value,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }    
    });

    addGif(response.data);
    searchTerm.value=""
    
});

removeBtn.addEventListener("click", function(e) {
    container.replaceChildren()
})