import {gql} from 'apollo-boost'

const loginMutation = gql`
    mutation ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        	id
            firstName
            lastName
            role
            token
        }
    }
`
const addUserMutation = gql`
	mutation ($firstName: String!, $lastName: String!, $age: Int!, $gender: String!, $address: String!, $contact: String!, $email: String!, $password: String!) {
		addUser(firstName: $firstName, lastName: $lastName, age: $age, gender: $gender, address: $address, contact: $contact, email: $email, password: $password){
			id
		}
	}
`
const addArtistMutation = gql`
    mutation ($name: String!, $art: String!, $address: String!, $contact: String!, $online: Int!, $home: Int!) {
        addArtist(name: $name, art: $art, address: $address, contact: $contact, online: $online, home: $home){
            id
        }
    }
`
const deleteArtistMutation = gql`
    mutation($id:ID!){
        deleteArtist(id: $id){
            id
        }
    }
`
const deleteUserMutation = gql`
    mutation($id:ID!){
        deleteUser(id: $id){
            id
        }
    }
`

const addTransactionMutation = gql`
    mutation ($category: String!, $userID: String!, $artistID: String!, $hours: Int!, $day: String!, $total: Int!) {
        addTransaction(category: $category, userID: $userID, artistID: $artistID, hours: $hours, day: $day, total: $total){
            id
        }
    }
`
const updateTransactionMutation = gql`
    mutation ($id: ID!, $status: Int!){
        updateTransaction(id: $id, status: $status){
            id
            status
        }
    }
`
const deleteTransactionMutation = gql`
    mutation($id:ID!){
        deleteTransaction(id: $id){
            id
        }
    }
`


export {
	loginMutation,
	addUserMutation,
    addArtistMutation,
    deleteUserMutation,
    updateTransactionMutation,
    deleteTransactionMutation,
    deleteArtistMutation,
    addTransactionMutation,
}