package com.docutrace.user_service.controller;

import com.docutrace.user_service.dto.AuthRequest;
import com.docutrace.user_service.dto.AuthResponse;
import com.docutrace.user_service.dto.UserRegistrationRequest;
import com.docutrace.user_service.dto.UserResponse;
import com.docutrace.user_service.model.UserRole;
import com.docutrace.user_service.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;
    @MockBean
    private UserService userService;

    @Test
    void register() throws Exception {
        UserRegistrationRequest req = new UserRegistrationRequest();
        req.setEmail("a@test.com"); req.setPassword("password1"); req.setName("Alice"); req.setRole(UserRole.USER);
        Mockito.when(userService.register(any())).thenReturn(UserResponse.builder().id(UUID.randomUUID()).email("a@test.com").name("Alice").role(UserRole.USER).active(true).build());
        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(req)))
                .andExpect(status().isCreated());
    }

    @Test
    void login() throws Exception {
        AuthRequest req = new AuthRequest();
        req.setEmail("a@test.com"); req.setPassword("password1");
        Mockito.when(userService.authenticate(any())).thenReturn(AuthResponse.builder().accessToken("a").refreshToken("r").build());
        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(req)))
                .andExpect(status().isOk());
    }
}
