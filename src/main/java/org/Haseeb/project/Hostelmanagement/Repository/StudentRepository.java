package org.Haseeb.project.Hostelmanagement.Repository;

import org.Haseeb.project.Hostelmanagement.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}