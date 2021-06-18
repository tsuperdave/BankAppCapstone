package com.bankapp.BankApp.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Positive;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table
public class SavingsAccount extends BankAccount{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Positive(message = "Interest Rate must be above 0")
    @Max(value = 1, message = "Interest Rate must not be higher than 1%")
    double interestRate = 0.0005;

    public SavingsAccount() {
        super();
        accountType = "SavingsAccount";
    }

}
