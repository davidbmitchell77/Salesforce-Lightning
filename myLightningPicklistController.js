({
	init: function(component, event, helper)
    {
        helper.getPicklistValues(component);
    },
    onChange: function(component, event, helper)
    {
        alert('You selected the "' + event.getSource().get('v.value') + '" industry.');
    },
})