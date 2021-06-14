package com.bankapp.BankApp.models;

import lombok.Data;

@Data
public class UserDTO {

    private String jwt;
    private String roles;

    public UserDTO(String jwt, String roles) {
        this.jwt = jwt;
        this.roles = roles;
    }
}
