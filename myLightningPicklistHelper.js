({
    getPicklistValues : function(component, fieldname)
    {
        var action = component.get('c.getPicklistValues');
        action.setParams({
            "objname": component.get('v.objname'),
            "fieldname": component.get('v.fieldname')
        });

        action.setCallback(this, function(response)
        {
            var options = [];

            var status = response.getState();
            if (status === "SUCCESS")
            {
                options.push({
                    label: '-- None -- ',
                    value: ''
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
            }
            else if (status === "ERROR")
            {
                options.push({
                    label: '-- Error -- ',
                    value: ''
                });

                component.set('v.options', options);

                var errors = response.getError();
                console.error(errors);
            }
        });

        $A.enqueueAction(action);
    },
})
