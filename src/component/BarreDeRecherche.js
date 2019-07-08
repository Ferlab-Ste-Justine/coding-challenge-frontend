import React from 'react'
const axios = require('axios');
var parseString = require('xml2js').parseString;

class BarreDeRecherche extends React.Component {
    RechercheImage(event){
    
        event.preventDefault();

        let Keyword = document.querySelector(".input-BarreRecherche").value
        let apiKey = "768940c202dec1c027456da40ccf1a5d"
        let method = "flickr.photos.search"

        let url ="https://www.flickr.com/services/rest/?method="+method+"&api_key="+apiKey+"&tags="+Keyword

        let node = document.querySelector(".lesImages")
        node.innerHTML = '';

         axios.get(url)
          .then(function (response) {

            var xml = response.data
            parseString(xml, function (err, result) {
                
            let size = result.rsp.photos[0].photo.length
            for (let index = 0; index < size; index++) {
                let farm = result.rsp.photos[0].photo[index].$.farm
                let serverID = result.rsp.photos[0].photo[index].$.server
                let id = result.rsp.photos[0].photo[index].$.id
                let secret =result.rsp.photos[0].photo[index].$.secret

                let source = "https://farm"+farm+".staticflickr.com/"+serverID+"/"+id+"_"+secret+".jpg"

                let node = document.querySelector(".lesImages")
                let img = document.createElement("img");
                img.setAttribute("class","uneImage")
                img.src = source;
                node.appendChild(img);
                
            }
            });
          })
          
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          }); 
    }

    render(){
        return(
            <React.Fragment>
                <h1>Coding Challenges - Claudia Roy</h1>
                <form action="" method="get" id="form-BarreDeRecherche" onSubmit={this.RechercheImage.bind(this)}>
                    <input className="input-BarreRecherche" type="text" placeholder="Keyword"></input>
                </form>

            </React.Fragment>
        ) ;
    }

}

export default BarreDeRecherche