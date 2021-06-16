package com.bankapp.BankApp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table
public class CDAccount extends BankAccount {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer id;

    @ManyToOne
    @JoinColumn(name = "offering_id")
    private CDOffering cdOffering;

    public CDAccount() {
        super();
    }
}
