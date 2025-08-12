package com.example.department.service;

import com.example.department.model.Department;
import com.example.department.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {

    private final DepartmentRepository repo;

    public DepartmentService(DepartmentRepository repo) {
        this.repo = repo;
    }

    public List<Department> getAllDepartments() {
        return repo.findAll();
    }

    public Optional<Department> getDepartmentById(Integer id) {
        return repo.findById(id);
    }

    public Department saveDepartment(Department department) {
        return repo.save(department);
    }

    public void deleteDepartment(Integer id) {
        repo.deleteById(id);
    }
}
