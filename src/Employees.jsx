import { useState } from "react";

const Employees = () => {
    const [employees, setEmployees] = useState ([
    {
        id: 1,
        fullName: "Chihuahua",
        designation: "Animal",
        gender: "Masculino",
        teamName: "México" 
    },
    {
        id: 2,
        fullName: "Bichon maltes",
        designation: "Animal",
        gender: "Masculino",
        teamName: "Italia" 
    },
    {
        id: 3,
        fullName: "Caniche",
        designation: "Animal",
        gender: "Masculino",
        teamName: "Francia, Alemania" 
    },
    {
        id: 4,
        fullName: "Carlino",
        designation: "Animal",
        gender: "Masculino",
        teamName: "China" 
    },
    {
        id: 5,
        fullName: "Bull terrier",
        designation: "Animal",
        gender: "Femenino",
        teamName: "Inglaterra" 
    },
    {
        id: 6,
        fullName: "Dalmata",
        designation: "Animal",
        gender: "Masculino",
        teamName: "Puerto Rico" 
    },
    {
        id: 7,
        fullName: "Galgo",
        designation: "Animal",
        gender: "Masculino",
        teamName: "España"
    },
    {
        id: 8,
        fullName: "Bobtail",
        designation: "Animal",
        gender: "Masculino",
        teamName: "Inglaterra"
    },
    {
        id: 9,
        fullName: "Shiba inu",
        designation: "Animal",
        gender: "Masculino",
        teamName: "Japón"
    },
    {
        id: 10,
        fullName: "Labrador",
        designation: "Animal",
        gender: "Masculino",
        teamName: "Canadá"
    },
    {
        id: 11,
        fullName: "Gran danes",
        designation: "Animal",
        gender: "Masculino",
        teamName: "Alemania"
    },
    {
        id: 12,
        fullName: "Dogo argentino",
        designation: "Animal",
        gender: "Masculino",
        teamName: "Argentino"
    }
]);
    return (
    <main>
            {
                employees.map((employee) => (
                    <p>{employee.fullName}</p>
                ))
            }
     </main>
    )
        
}
export default Employees ;