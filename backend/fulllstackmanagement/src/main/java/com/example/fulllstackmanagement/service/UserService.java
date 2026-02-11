 
package com.example.fulllstackmanagement.service;

import com.example.fulllstackmanagement.exception.UserNotFoundException;
import com.example.fulllstackmanagement.model.User;
import com.example.fulllstackmanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(User user){
        if(userRepository.existsByUsername(user.getUsername())){
            throw new RuntimeException("Username already taken");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){ return userRepository.findAll(); }
    public User getUserById(Long id){
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }
    public User updateUser(Long id, User updatedUser){
        User user = getUserById(id);
        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        // Update username if changed
        if (updatedUser.getUsername() != null && !updatedUser.getUsername().isEmpty()) {
            user.setUsername(updatedUser.getUsername());
        }

        // Update password if provided
        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        return userRepository.save(user);
    
    }
    public void deleteUser(Long id){ userRepository.deleteById(id); }
}
