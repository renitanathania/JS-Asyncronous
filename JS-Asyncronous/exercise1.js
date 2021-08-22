fetch("https://api.github.com/users/renitanathania")
    .then(function(result) {
        return result.json()
    })
    .then(function(result){
        console.log(result)
    })
    .catch(function(error) {
        console.log(error)
    })