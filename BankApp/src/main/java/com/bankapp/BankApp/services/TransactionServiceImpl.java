package com.bankapp.BankApp.services;

import com.bankapp.BankApp.exceptions.TransactionFailureException;
import com.bankapp.BankApp.models.BankAccount;
import com.bankapp.BankApp.models.PersonalCheckingAccount;
import com.bankapp.BankApp.models.Transaction;
import com.bankapp.BankApp.models.WithdrawTransaction;
import com.bankapp.BankApp.repository.CheckingAccountRepository;
import com.bankapp.BankApp.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    CheckingAccountRepository checkingAccountRepository;
    @Autowired
    TransactionRepository transactionRepository;

    @Override
    public BankAccount postPersonalWithdraw(HttpServletRequest request, WithdrawTransaction withdrawTransaction, String txnType) throws Exception {
        switch(txnType) {
            case "PersonalCheckingAccount":
                PersonalCheckingAccount tempPca;
                Optional<PersonalCheckingAccount> pca = checkingAccountRepository.findById(withdrawTransaction.getPersonalCheckingAccount().getId());

                if (pca.isPresent()) {
                    tempPca = pca.get();
                    withdrawTransaction.setPersonalCheckingAccount(tempPca);
                    withdrawTransaction.processTxn();
                    checkingAccountRepository.save(tempPca);

                    transactionRepository.save(withdrawTransaction);
                    return tempPca;
                } else {
                    throw new TransactionFailureException("Cannot process transaction at this time");
                }
//                break;
            default:
                throw new TransactionFailureException("Cannot process transaction at this time");
        }
//        return null;
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return new ArrayList<>(transactionRepository.findAll());
    }

}
