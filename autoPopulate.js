//This is used to auto-populate a reference variable based on another reference variable.
function onChange(control, oldValue, newValue, isLoading) {
	// If tla is empty, clear all related values
	if (newValue == '') {
		g_form.setValue('tla_name', '');
	} else if (newValue != '') {
		// Otherwise, get the customer account from the record:
		var requestName = g_form.getReference('tla', getNameFrom);
	}
	//set customer account
	function getNameFrom(requestFrom) {
		g_form.setValue('tla_name', requestFrom.u_customer_account);
	}
}

//note for cheyenne: TLA reference is sys_user_group TLA Name reference is  core_company.
