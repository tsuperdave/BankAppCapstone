package com.bankapp.BankApp.models;

import lombok.Data;

import javax.persistence.*;

@Entity(name = "WithdrawTransaction")
@Table(name = "WithdrawTransaction")
public class WithdrawTransaction extends Transaction {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer id;

    public WithdrawTransaction() {
        super();
    }

    @Override
    public void processTxn() {
        txnType = "Withdraw";
        if(personalCheckingAccount != null) {
            account = "PersonalCheckingAccount";
            accountOrigin = personalCheckingAccount.getId();
            personalCheckingAccount.withdraw(amount);
        }
    }

    // TODO process the txn
}
