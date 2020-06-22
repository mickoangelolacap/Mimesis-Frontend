import React from 'react'
// import ReactDOM from 'react-dom'
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash'
import Footer from '../components/Footer'

import {getTransactionsQuery} from '../graphql/queries'

import {deleteTransactionMutation} from '../graphql/mutations'

import AppNavbar2 from '../components/AppNavBar2'



const TransactionPage = (props)=> {

	// console.log(localStorage.getItem('id'))
	const id = localStorage.getItem('id')

	// console.log(props.getTransactionsQuery.transactions)
	const transactions = props.getTransactionsQuery.transactions

	const deleteTransaction = (id) => {
		alert('Are you sure you want to cancel this appointment?')
		props.deleteTransactionMutation({
			variables: {id: id},
			refetchQueries: [{query: getTransactionsQuery}]
		})
	}

	let tbody
	if (transactions === undefined) {
		tbody = <tbody><tr><td><strong>Loading...</strong></td></tr></tbody>
	}
	else {
		tbody = transactions.map((transaction)=>{
					return <tbody key={transaction.id} id="myTable">
						{transaction.userID === id? <tr><td className="shelterOverflow grey py-4">{transaction.id}</td>
						<td className="py-4">{transaction.artist.name}</td>
						<td className="py-4">{transaction.artist.art}</td>
						<td className="py-4">{transaction.day}</td>
						<td className="py-4">{"₱ " + transaction.category}</td>
						<td className="py-4">{transaction.hours + " hr/s"}</td>
						<td className="py-4">{"₱ " + transaction.total}</td>
						<td className="py-4">{transaction.status === 0? <span className="text-warning">Pending</span> : transaction.status === 1? <span className="text-success">Active</span> : <span className="grey">Completed</span>}</td>
						<td className="py-4">
							<button className="btn btn-outline-warning btn-block"  onClick={()=> deleteTransaction(transaction.id)}>Remove</button>

							<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
							  <div className="modal-dialog modal-dialog-centered" role="document">
							    <div className="modal-content">
							      <div className="modal-body text-center p-4">
							        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true">&times;</span>
							        </button>
							        <h1>Are you sure you want to cancel appointment?</h1>
							        <button type="button" className="btn btn-outline-warning mt-4" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter">Yes, I want to cancel</button>
							      </div>
							    </div>
							  </div>
							</div>
						</td>
						</tr> : null}
						
					</tbody>
			  	})
	}


	return(
		
		<div id="transaction" className="container-fluid p-0">
		<AppNavbar2/>
			<div className="container pb-5 mb-5">
				<form className="form-inline my-2">
					<i className="fa fa-search search-icon mx-3 text-warning d-md-block d-none"></i>
			      	<input className="form-control" type="text" placeholder="Search" aria-label="Search" id="myInput"/>
			    </form>
				<table className="table table-hover mt-5">
				  <thead>
				    <tr>
				      <th scope="col" className="py-4">Reference</th>
				      <th scope="col" className="py-4">Artist</th>
				      <th scope="col" className="py-4">Field</th>
				      <th scope="col" className="py-4">Date</th>
				      <th scope="col" className="py-4">Rate per hr</th>
				      <th scope="col" className="py-4">Duration</th>
				      <th scope="col" className="py-4">Payment</th>
				      <th scope="col" className="py-4">Status</th>
				      <th scope="col" className="py-4">Action</th>
				    </tr>
				  </thead>
				  {
				  	tbody
				  }
				</table>
			</div>
			<Footer/>
		</div>

	)
}

export default compose(
	graphql(getTransactionsQuery, {name: 'getTransactionsQuery'}),
	graphql(deleteTransactionMutation, {name: 'deleteTransactionMutation'})
)(TransactionPage)