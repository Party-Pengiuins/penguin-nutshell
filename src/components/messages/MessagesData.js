/*
const remoteURL = "http://localhost:5002"

export default Object.create(null, {
   
    getAll: {
        value: function (resource) {
            return fetch(`${remoteURL}/${resource}`).then(e => e.json())
        }
    },

    getSingleEntry: {
        value: function (id) {
            return fetch(`${remoteURL}/${id}`).then(r => r.json())
        }
    },
/*
    delete: {
        value: function (resource, id) {
            //console.log(`${remoteURL}/animals/${id}`)
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            })
            //.then(e => e.json())
            .then(() => fetch(`${remoteURL}/${resource}`))
            .then(e => e.json())
        }

    },

    post: {
        value: function (resource, newEntry) {
            console.log(`${remoteURL}/${resource}`)
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntry)
            }).then(e => e.json())
        }
    },
    
    patch: {
        value: function (id, resource, newEntry) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntry)
            }).then(r => r.json())
        }
    }




})

*/