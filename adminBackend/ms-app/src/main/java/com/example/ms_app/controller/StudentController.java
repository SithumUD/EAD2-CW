package com.example.ms_app.controller;

import com.example.ms_app.data.Student;
import com.example.ms_app.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    //to find all students: (method)GET /students (endpoint)
    @GetMapping(path = "/students")
    public List<Student> findAllStudents(){
        return studentService.getStudents();
    }


    //
    @GetMapping(path = "/students/{id}")
    public Student findStudentById(@PathVariable int id){
        return studentService.getStudentById(id);
    }

    @PostMapping(path = "/students")
    public Student createStudent(@RequestBody Student student){
        return studentService.createStudent(student);
    }

    @PutMapping(path = "/students")
    public Student updateStudent(@RequestBody Student student){
        return studentService.updateStudent(student);
    }
    @DeleteMapping (path = "/students/{id}")
    public Student deleteStudent(@PathVariable int id){
        return studentService.deleteStudent(id);
    }
}