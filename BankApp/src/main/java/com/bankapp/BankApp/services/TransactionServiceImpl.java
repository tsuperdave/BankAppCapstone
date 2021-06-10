package com.bankapp.BankApp.services;

import com.bankapp.BankApp.models.BankAccount;
import com.bankapp.BankApp.models.PersonalCheckingAccount;
import com.bankapp.BankApp.models.WithdrawTransaction;
import com.bankapp.BankApp.repository.CheckingAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    CheckingAccountRepository checkingAccountRepository;

    @Override
    public BankAccount postPersonalWithdraw(HttpServletRequest request, WithdrawTransaction withdrawTransaction, String txnType) throws Exception {
        switch(txnType) {
            case "PersonalCheckingAccount":
                PersonalCheckingAccount tempCa;
                //TODO get checking account by ID
                Optional<PersonalCheckingAccount> ca = checkingAccountRepository.findById(withdrawTransaction.getPersonalCheckingAccount().getId());
                // TODO add txn to repo
                break;
            default:
                throw new Exception();

        }
        return null;
    }

}
