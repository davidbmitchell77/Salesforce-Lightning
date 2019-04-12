({
    handleAddProduct : function(component, event, helper)
    {
        var newProduct = event.getParam("products");
        var request = component.get("c.saveProduct");

        request.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                component.set("v.products", response.getReturnValue());
            }
            else
            {
                console.log('Failed with state: "' + state + '".');
            }
        });

        $A.enqueueAction(request);
    },
})