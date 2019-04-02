({
    getPicklistValues : function(component, fieldname)
    {
	var action = component.get('c.getPicklistValues');
        action.setParams({
            "objname": component.get('v.objname'),
            "fieldname": component.get('v.fieldname')
        });

        var options = [];

        action.setCallback(this, function(response)
        {
            var defaultLabel = ''
            var defaultValue = '';

            switch(response.getState())
            {
                case 'SUCCESS':
                    defaultLabel = '-- None --';
                    defaultValue = '';
                    break;
                case 'ERROR':
                    defaultLabel = '-- Error --';
                    defaultValue = '';
                    console.error(response.getError());
                    break;
                default:
                    defaultLabel = '-- None --';
                    defaultValue = '';
            }

            options.push({
                label: defaultLabel,
                value: defaultValue
            });

            var receivedValues = response.getReturnValue();
            if (receivedValues != undefined && receivedValues.length > 0)
            {
            	for (var i=0; i<receivedValues.length; i++)
                {
                    options.push({
                    	label: receivedValues[i],
                    	value: receivedValues[i]
                 	});
                }
            }

            component.set('v.options', options);
        });

        $A.enqueueAction(action);
    },
})