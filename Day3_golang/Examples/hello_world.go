package main

import "fmt"

type student struct {
	Name string
	Rgno float64
	Dept string
}

func main() {
	// msg := "Hello"
	// var message string = "hello world"
	// fmt.Println(message)
	// fmt.Println(msg)
	//ifelsedemo()
	//forDemo()
	// var n1, n2, n3 int
	// fmt.Scanln(&n1, &n2, &n3)
	// ans := findGreat(n1, n2, n3)
	// fmt.Println(ans)
	//forCondDemo()
	// pythonStyle()
	st := student{Name: "Student1", Rgno: 12.2, Dept: "CS"}
	fmt.Println("Name: ", st.Name, "\nRegistration No: ", st.Rgno, "\nDepartment: ", st.Dept)

}
func findGreat(a int, b int, c int) int {
	if a > b && a > c {
		return a
	} else if b > a && b > c {
		return b
	} else {
		return c
	}

}
func ifelsedemo() {
	var age int
	fmt.Scanln(&age)
	if age > 18 {
		fmt.Println("Adult")
	} else {
		fmt.Println("Minor")
	}
}
func forDemo() {
	sum := 0
	for i := 1; i < 5; i++ {
		sum += i
	}
	fmt.Println(sum)
}
func forCondDemo() {
	n := 1
	for n < 5 {
		n *= 2
	}
	fmt.Println(n)
}
func forinfinitefor() {

}
func pythonStyle() {
	strings := []string{"Hello", "World", "Golang", "NIE"}
	for _, s := range strings {
		fmt.Println(s)
	}
}

//Structures
