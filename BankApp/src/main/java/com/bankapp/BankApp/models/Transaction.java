package com.bankapp.BankApp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Data
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    // TODO add many-to-ones for each type of account
    // also join columns
    // grab amount
    // field for type
    // source/target? possibly account ID
    // txn date
    // account id set for withdraw/deposits and maybe ATM since no need for target/source

    @ManyToOne
    @JoinColumn(name = "personalCheckingAccount_id")
    PersonalCheckingAccount personalCheckingAccount;

    public abstract void processTxn();

    @JsonBackReference(value="personalCheckingAccount")
    public PersonalCheckingAccount getPersonalCheckingAccount() {
        return personalCheckingAccount;
    }

}
