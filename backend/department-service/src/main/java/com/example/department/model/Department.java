package com.example.department.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "department")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "department_id") // Keeps DB column name
    private Integer departmentId;

    @Column(name = "name", nullable = false)
    private String name;
}
