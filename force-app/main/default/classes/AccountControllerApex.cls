public with sharing class AccountControllerApex {
        @AuraEnabled
    public static Account createAccount(Account acc) {
        insert acc;
        return acc;
    }
}