// Product API & Product Responsive

let endpoint = 'https://api.jikan.moe/v4/top/anime';

let content = document.getElementById("productApi");

let datas = fetch(endpoint)
                .then((res) => res.json())
                .then((response) => {

                    response.data.forEach(element => {

                        let elemen = document.createElement("div");

                        // console.log(element);

                        if (element.year === null) {
                            element.year = "-";
                        }

                        elemen.innerHTML = `<div class="card">
                                                <div class="overflow-hidden">
                                                    <img src="${element.images.webp.image_url}">
                                                </div>
                                                <div class="card-body">
                                                    <h1> ${element.title} </h1>
                                                    <h2> Rank : ${element.rank} </h2>
                                                    <h3> Year : ${element.year} </h3>
                                                    <h4> Episodes : ${element.episodes} </h4>
                                                    <h5> Duration : ${element.duration} </h5>
                                                    <h6> Synopsis : </h6>
                                                    <p> ${element.synopsis} </p>
                                                </div>
                                            </div>`

                        content.appendChild(elemen);
                    });

                });