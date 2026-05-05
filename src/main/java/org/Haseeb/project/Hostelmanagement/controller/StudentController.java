package org.Haseeb.project.Hostelmanagement.controller;

import org.Haseeb.project.Hostelmanagement.Model.Student;
import org.Haseeb.project.Hostelmanagement.Service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAll();
    }
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.save(student);
    }
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
     studentService.delete(id);
    }
    /*@PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        student.setId(id);
        return studentService.save(student);
    }*/
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {

        System.out.println("UPDATE HIT");
        System.out.println("ID: " + id);
        System.out.println("Student: " + student.getName() + " " + student.getRoom());

        student.setId(id);
        return studentService.save(student);
    }
}