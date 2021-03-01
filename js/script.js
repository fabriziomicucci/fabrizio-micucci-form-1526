let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// Regular expression playground:
// https://regexr.com/

// Get the references to all HTML elements that 
// are involved in the process of form-validation
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let msg = document.getElementById('msg');

// This is the event-target object:
let fm = document.getElementById('collect-data'); 




fm.addEventListener('click',function(e) {
    
    e.preventDefault();
	
	// Create 2 empty 'buckets', one for collecting data and 
	// the other for error-messages
	let data = {};
	let errors = [];
	
	// 1. Validating fullname
	if (fn.value) {
		data.fullname = fn.value;
	} else {
		errors.push('First name has to be added!');
	}
	
	// 2. Validating email
	if (em.value) {
		if (pattern.test(em.value)) {
			data.email = em.value;
		} else {
			errors.push('Invalid email!');
		}

	} else {
		errors.push('Email has to be added!');
        
        
	}
    
		if (msg.value) {
		data.message = msg.value;
	} else {
		errors.push('You need to leave us a message!');
	}
    
	
	console.log(data, errors);
});
