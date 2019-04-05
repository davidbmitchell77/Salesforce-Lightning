({
    next : function(component, event, helper)
    {
        var tabId = component.get('v.selectedTabId');
        switch(tabId)
        {
            case 'tab1':
                tabId = 'tab2';
                break;
            case 'tab2':
                tabId = 'tab3';
                break;
            case 'tab3':
                tabId = 'tab4';
                break;      
        }
        component.set('v.selectedTabId', tabId);
    },
    back : function(component, event, helper)
    {
        var tabId = component.get('v.selectedTabId');
        switch(tabId)
        {
            case 'tab4':
                tabId = 'tab3';
                break;
            case 'tab3':
                tabId = 'tab2';
                break;
            case 'tab2':
                tabId = 'tab1';
                break;
        }
        component.set('v.selectedTabId', tabId);
    },
})
