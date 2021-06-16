package com.bankapp.BankApp.controller;

import com.bankapp.BankApp.models.AccountHolder;
import com.bankapp.BankApp.models.User;
import com.bankapp.BankApp.models.UserDTO;
import com.bankapp.BankApp.security.models.AuthenticationRequest;
import com.bankapp.BankApp.security.models.AuthenticationResponse;
import com.bankapp.BankApp.security.models.RegisterRequest;
import com.bankapp.BankApp.services.AccountHolderService;
import com.bankapp.BankApp.services.AuthService;
import com.bankapp.BankApp.services.MyUserDetailsService;
import com.bankapp.BankApp.security.util.JwtUtil;

import com.bankapp.BankApp.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private MyUserDetailsService myUserDetailsService;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtTokenUtil;
    @Autowired
    AuthService authService;

    @PostMapping(value = "/signin")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        System.out.println("Reached");
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsernameOrEmail(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException bce) {
            throw new Exception("Incorrect username or password", bce);
        }

        final UserDetails usernameOrEmail = myUserDetailsService.loadUserByUsername(authenticationRequest.getUsernameOrEmail());
        final Integer userId = userService.getUserByUserName(authenticationRequest.getUsernameOrEmail()).getId();
        final String jwt = jwtTokenUtil.generateToken(usernameOrEmail);
        final UserDTO user = new UserDTO(jwt, usernameOrEmail.getAuthorities().toString(), userId);

        return ResponseEntity.ok(user);
    }

    @PostMapping(value = "/registerUser")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasAuthority('admin')")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        return authService.registerUser(registerRequest);
    }

}
