({
	init : function(component, event, helper)
    {
        component.set('v.frameWidth', (window.innerWidth - 10) + 'px');
        component.set('v.frameHeight', (window.innerHeight - 10) + 'px');
	},
})