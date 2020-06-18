import {gql} from 'apollo-boost'

const getUsersQuery = gql`
{
	users{
		id
		firstName
		lastName
		age
		gender
		address
		contact
		email
		role
	}
}`
const getSpecificUser = gql`
	query($id: ID!){
		user (id: $id){
			id
			firstName
			lastName
			age
			gender
			address
			contact
			email
			role
		}
}`

const getArtistsQuery = gql`
{
	artists{
		id
		name
		art
		address
		contact
		online
		home
		status
	}
}`
const getSpecificArtist = gql`
	query($id: ID!){
		artist (id: $id){
			id
			name
			art
			address
			contact
			online
			home
			status
		}
}`

const getTransactionsQuery = gql`
{
	transactions{
		id
		category
		userID
		artistID
		hours
		day
		total
		status
		user {
			id
			firstName
			lastName
			age
			gender
		}
		artist {
			id
			name
			art
			online
			home
		}
	}
}`
const getSpecificTransaction = gql`
	query($id: ID!){
		transaction (id: $id){
			id
			category
			userID
			artistID
			hours
			day
			total
			status
		}
}`

export {
	getUsersQuery,
	getSpecificUser,
	getArtistsQuery,
	getSpecificArtist,
	getTransactionsQuery,
	getSpecificTransaction
}