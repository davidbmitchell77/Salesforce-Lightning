({
    update: function(component, evt, helper) {
      var expense = component.get("v.expense");
      // Note that updateExpense matches the name attribute in <aura:registerEvent>
      var updateEvent = component.getEvent("updateExpense");
      updateEvent.setParams({ "expense": expense }).fire();
    }
})