let statusMsg: 'active' | 'inactive' | 'pending' = 'active'

statusMsg = 'active' // ok
statusMsg = 'inactive' // ok
statusMsg = 'pending' // ok
// statusMsg = 'deleted' // error

let code: 400 | 200 | 300 = 200

code = 400 // ok
code = 200 // ok
code = 300 // ok
// code = 500 // error

enum Status {
	SUCCESS,
	ERROR,
}

function getStatus(status: Status): 'success' | 'error' {
	if (status === Status.SUCCESS) return 'success'
	return 'error'
}

function getStatusWithLiteralTypes(
	status: 'success' | 'error'
): 'success' | 'error' {
	if (status === 'success') return 'success'
	return 'error'
}
