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
            for (var key in receivedValues)
            {
                options.push({
                    label: key,
                    value: receivedValues[key] 
                });
            }

            component.set('v.options', options);
        });

        $A.enqueueAction(action);
    },
})
