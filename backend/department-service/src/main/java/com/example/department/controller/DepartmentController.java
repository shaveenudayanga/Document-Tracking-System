package com.example.department.controller;



import com.example.department.model.Department;
import com.example.department.service.DepartmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/departments")
public class DepartmentController {

    private final DepartmentService service;

    public DepartmentController(DepartmentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Department> getAllDepartments() {
        return service.getAllDepartments();
    }

    @GetMapping("/{id}")
    public Optional<Department> getDepartmentById(@PathVariable Integer id) {
        return service.getDepartmentById(id);
    }

    @PostMapping
    public Department createDepartment(@RequestBody Department department) {
        return service.saveDepartment(department);
    }

    @DeleteMapping("/{id}")
    public String deleteDepartment(@PathVariable Integer id) {
        service.deleteDepartment(id);
        return "Department deleted with ID: " + id;
    }
}
