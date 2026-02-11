 package com.example.fulllstackmanagement.service;

import com.example.fulllstackmanagement.model.User;
import com.example.fulllstackmanagement.repository.UserRepository;
import com.example.fulllstackmanagement.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // ✅ Register user
    public User register(User user) throws Exception {
        Optional<User> existing = userRepository.findByUsername(user.getUsername());
        if (existing.isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        // Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    // ✅ Login user, return JWT token
    public String login(String username, String rawPassword) throws Exception {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Check password
        if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }

        // Generate JWT token
        return jwtUtil.generateToken(username);
    }
}
