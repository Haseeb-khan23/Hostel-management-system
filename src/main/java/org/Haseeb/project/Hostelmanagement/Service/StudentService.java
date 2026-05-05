package org.Haseeb.project.Hostelmanagement.Service;

import org.Haseeb.project.Hostelmanagement.Model.Student;
import org.Haseeb.project.Hostelmanagement.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student save(Student student) {
        return studentRepository.save(student);

    }
    public List<Student> getAll() {
        return studentRepository.findAll();
    }
    public void delete(Long id){
        studentRepository.deleteById(id);
    }
}