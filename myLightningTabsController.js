({
    next : function(component, event, helper)
    {
        var tabId = component.get('v.selectedTabId');
        switch(tabId)
        {
            case 'Tab1':
                tabId = 'Tab2';
                break;
            case 'Tab2':
                tabId = 'Tab3';
                break;
            case 'Tab3':
                tabId = 'Tab4';
                break;      
        }
        component.set('v.selectedTabId', tabId);
	},
    back : function(component, event, helper)
    {
        var tabId = component.get('v.selectedTabId');
        switch(tabId)
        {
            case 'Tab4':
                tabId = 'Tab3';
                break;
            case 'Tab3':
                tabId = 'Tab2';
                break;
            case 'Tab2':
                tabId = 'Tab1';
                break;
        }
        component.set('v.selectedTabId', tabId);
	},
})
