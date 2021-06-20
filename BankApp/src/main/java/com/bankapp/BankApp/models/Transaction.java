package com.bankapp.BankApp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDate;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NotBlank(message = "Must specify account type")
    String txnType;
    @Positive(message = "Amount must be above 0")
    double amount;

    Integer accountOrigin;
    String account;
    LocalDate txnDate = LocalDate.now();

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

    @ManyToOne
    @JoinColumn(name = "sourceAccount_id")
    BankAccount sourceAccount;

    public abstract void processTxn();

    @JsonBackReference(value="personalCheckingAccount")
    public PersonalCheckingAccount getPersonalCheckingAccount() {
        return personalCheckingAccount;
    }

}
