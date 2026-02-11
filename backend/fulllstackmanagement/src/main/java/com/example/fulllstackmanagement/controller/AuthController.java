  package com.example.fulllstackmanagement.controller;

import com.example.fulllstackmanagement.model.User;
import com.example.fulllstackmanagement.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
 
public class AuthController {

    @Autowired
    private AuthService authService;

    
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) throws Exception {

        String rawPassword = user.getPassword();
        User savedUser = authService.register(user);
        String token = authService.login(savedUser.getUsername(), rawPassword);

        Map<String, Object> response = new HashMap<>();
        response.put("username", savedUser.getUsername());
        response.put("token", token);

        return ResponseEntity.ok(response);
    }

    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        try {
            String token = authService.login(username, password);

            Map<String, Object> response = new HashMap<>();
            response.put("username", username);
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
