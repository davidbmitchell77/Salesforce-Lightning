({
    clickAddProduct : function(component, event, helper)
    {
        var products = component.get("v.products");
        var createEvent = component.getEvent("addProduct");
        createEvent.setParams
        ({
            "products" : products
        });
 
        createEvent.fire();
    },
})