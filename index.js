// Use the fetch function
// to grab some data
// from the LA Open Data API

// We're going to display that data on our index.html file
// Bootstrap as the primary styling library
// Materialize

function getLADataFromAPI(){
    var endpoint = 'https://data.lacity.org/resource/vugs-2e9n.json'
    
    fetch(endpoint) // returns a promise
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        // console.log(json)
        var resultDiv = document.getElementById('result')
        var finalHTML = ''
        
        var filteredData = json.filter(function(item){
            return item.organization
        })
        
        console.log(filteredData)
        
        filteredData.forEach(function(item){
            var cardItem = 
            `
                <div class="col s6 m4">
                  <div class="card">
                    <div class="card-image">
                      <img src="https://asktheimmigrationlawyer.com/wp-content/uploads/2016/03/donald-trump-presidency-mean-illegal-immigrants-1024x1024.jpg">
                      <span style="color: white" class="card-title">${item.organization}</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                      <p style="color: black">For more information contact ${item.contact}.</p>
                    </div>
                  </div>
                </div>
            
            `
            finalHTML += cardItem
        })
        resultDiv.innerHTML = finalHTML
        
        
        // resultDiv.innerHTML = JSON.stringify(json, undefined, 2)
        // var wantedData = json.map(function(item){
        //     var title = item.department_title
        //     var fSalary = item.female_average_salary
        //     var mSalary = item.male_average_salary
        //     return 'For the ' + title + ' department, men earn an average salary of ' + mSalary + ', and females earn an average salary of ' + fSalary + '.'
        // })
        // var htmlForWantedData = wantedData.map(function(string){
        //     return '<li>' + string + '</li>'
        // })
        // var finalHTML = ''
        // htmlForWantedData.forEach(function(listItem){
        //     finalHTML += listItem
        // })
        // resultDiv.innerHTML = finalHTML
    })
    .catch(function(error){
        console.log(error)
    })
}