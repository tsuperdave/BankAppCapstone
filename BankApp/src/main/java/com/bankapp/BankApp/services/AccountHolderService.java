package com.bankapp.BankApp.services;

import com.bankapp.BankApp.models.*;

import java.util.List;

public interface AccountHolderService {
    public AccountHolder addAccountHolder(AccountHolder accountHolder);
    public AccountHolder getAccountHolderById(Integer id);
    public AccountHolder getAccountHolderByUsername(String username);
    public List<AccountHolder> getAccountHolders();
    public PersonalCheckingAccount getCheckingAccounts(Integer id);
    public SavingsAccount getSavingsAccounts(Integer id);
    public List<CDAccount> getCDAccounts(Integer id);
    public AccountHolderContactDetails addContactDetails(Integer id, AccountHolderContactDetails accountHolderContactDetails);
}
