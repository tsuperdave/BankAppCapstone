package com.bankapp.BankApp.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.*;

@Data
@Entity
@Table
@NoArgsConstructor
public class AccountHolder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;

    @NotBlank(message = "First Name cannot be blank")
    @NotNull(message = "First name cannot be blank")
    String firstName;
    String middleName;
    @NotBlank(message = "First Name cannot be blank")
    @NotNull(message = "First name cannot be blank")
    String lastName;
    @NotBlank(message = "First Name cannot be blank")
    @NotNull(message = "First name cannot be blank")
    @Length(min = 9, max = 9)
    String ssn;

    @OneToOne(cascade = CascadeType.REMOVE, mappedBy = "accountHolder", fetch = FetchType.LAZY)
    private PersonalCheckingAccount personalCheckingAccount;
    @OneToOne(cascade = CascadeType.REMOVE, mappedBy = "accountHolder", fetch = FetchType.LAZY)
    private SavingsAccount savingsAccount;
    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "accountHolder", fetch = FetchType.LAZY)
    private List<CDAccount> cdAccountList = new ArrayList<>();

    @OneToOne (fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "accountHolder")
    @JoinColumn(name = "account_holder_contact_details_id")
    private AccountHolderContactDetails accountHolderContactDetails;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    private double combinedBal;
    private String username;

    public AccountHolder(String firstName, String middleName, String lastName, String ssn) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.ssn = ssn;
    }

    public double getPersonalCheckingBalance() {
        double total = 0;
        if(personalCheckingAccount != null) {
            total += personalCheckingAccount.getBalance();
            return total;
            }
        return 0;
    }

    public double getSavingsBalance() {
        double total = 0;
        if(savingsAccount != null) {
            total += savingsAccount.getBalance();
            return total;
        }
        return 0;
    }

    public double getCDBalance() {
        double total = 0;
        if(cdAccountList != null) {
            for(CDAccount cda: cdAccountList) {
                total += cda.getBalance();
            }
            return total;
        }
        return 0;
    }

    public double getCombinedAccountBalance() {
        combinedBal = getPersonalCheckingBalance() + getSavingsBalance() + getCDBalance();
        return combinedBal;
    }

    @Override
    public String toString() {
        return lastName + "," + middleName + "," + firstName + "," + ssn;
    }

}
