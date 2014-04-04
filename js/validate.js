var validate = (function(module){

	module.validateEmpty = function(resultObject){
		resultObject.append(' <p>* Required field</p>');
	};

	return module;
} (validate || {}));