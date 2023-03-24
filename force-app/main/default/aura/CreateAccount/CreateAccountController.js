({
    createAccount: function(component, event, helper) {
        var newAccount = component.get("v.account");
        var action = component.get("c.createAccount");
        action.setParams({ "acc": newAccount });
 
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var acc = response.getReturnValue();
                var event = $A.get("e.force:navigateToSObject");
                event.setParams({
                    "recordId": acc.Id,
                    "slideDevName": "detail"
                });
                event.fire();
            }
        });
        $A.enqueueAction(action);
    }
})
