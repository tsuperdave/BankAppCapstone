package com.bankapp.BankApp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.*;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
public class CDOffering {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    Integer term;
    double interestRate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cdOffering", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<CDAccount> cdAccountList;

}

