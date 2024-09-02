package com.example.ms_app.service;

import com.example.ms_app.data.Student;
import com.example.ms_app.data.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class StudentService {
    @Autowired
    public StudentRepository studentRepository;

    public List<Student> getStudents(){
        return studentRepository.findAll();
    }

    public Student getStudentById(int id){
        Optional<Student> student = studentRepository.findById(id);
        if (student.isPresent()){
            return student.get();
        }
        return null;
    }

    public Student createStudent(Student student){
        return studentRepository.save(student);
    }

    public Student updateStudent(Student student){
        return studentRepository.save(student);
    }
    public Student deleteStudent(int id){
        Optional<Student> student=studentRepository.findById(id);
        if (student.isPresent()){
            studentRepository.deleteById(id);
        }
        return null;
    }
}