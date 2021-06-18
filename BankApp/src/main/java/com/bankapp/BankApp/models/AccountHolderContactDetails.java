package com.bankapp.BankApp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class AccountHolderContactDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    Integer id;

    String phoneNumber;
    String email;
    String address;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    @JsonIgnore
    private AccountHolder accountHolder;

}
