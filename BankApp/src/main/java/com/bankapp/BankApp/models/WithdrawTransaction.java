package com.bankapp.BankApp.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity(name = "WithdrawTransaction")
@Table(name = "WithdrawTransaction")
public class WithdrawTransaction extends Transaction {

    public WithdrawTransaction() {
        super();
    }

    @Override
    public void processTxn() {

    }

    // TODO process the txn
}
