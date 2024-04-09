console.log("...APP Started...");

function callAPI() {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-09&sortBy=publishedAt&apiKey=c57fdc7a995b4b42890279ad08b712d8")
   
    // fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c57fdc7a995b4b42890279ad08b712d8")
        .then((res) => {
            return res.json();
            
        })
        .then((data) => {
            renderUI(data.articles);
            console.log(data)
           
        })
        // console.log(data);
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
        
}

function renderUI(articles) {
    const root = document.getElementById('root');

    articles.forEach((article) => {
        const div = document.createElement('div');
        div.className = 'newa-card'; 

        const h3 = document.createElement('h3');
        h3.textContent = article.title;
        div.appendChild(h3);

        const img = document.createElement('img');
        img.src = article.urlToImage ? article.urlToImage : 'placeholder.jpg';
        img.alt = article.title;
        div.appendChild(img);

        const p = document.createElement('p');
        p.textContent = article.description;
        div.appendChild(p);





        const h6 = document.createElement('h6');
        h6.textContent = article.publishedAt;
        div.appendChild(h6)


        const a = document.createElement('a');
        a.textContent = "Read More";
        a.href = article.url; 
        a.target = "_blank"; 
        div.appendChild(a);




        root.appendChild(div);
    });
}

callAPI();
