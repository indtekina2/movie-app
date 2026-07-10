// getting the lists of movies from the localStorage
let watchList = JSON.parse(localStorage.getItem("movies"));

if (!watchList || !Array.isArray(watchList)) {
    // console.log(!Array.isArray(watchList))
    watchList = [];
}

// Loading all the movies from wish list
document.getElementById("seen").innerHTML = "";
for(let i in watchList){
    showMovie(watchList[i], "seen");
}

document.addEventListener("click", (event)=>{

    if(event.target.classList.contains("later")){
        let id = event.target.parentElement.dataset.id;
        for(let i in movies){
            if(movies[i].imdbID==id){
                watchList.push(movies[i]);
                showMovie(movies[i], "seen");
                localStorage.setItem("movies", JSON.stringify(watchList));
                console.log(watchList);
                break;
            }
        }
        removeMovie(id);
    }
})