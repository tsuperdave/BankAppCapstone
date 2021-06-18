package com.bankapp.BankApp.models;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Positive;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table
public class DBACheckingAccount extends BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Positive(message = "Interest Rate must be above 0")
    @Max(value = 1, message = "Interest Rate must not be higher than 1%")
    double interestRate = 0.0001;

    public DBACheckingAccount() {
        super();
        accountType = "DBACheckingAccount";
    }
}
