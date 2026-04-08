import React, { createContext, useState } from "react";
import { patientsData } from "../data/Patients";
import { doctorsData } from "../data/Doctors";
import { appointmentsData } from "../data/Appointments";
import { staffData } from "../data/Staff";
import { bedsData } from "../data/Beds";
import { pharmacyData } from "../data/Pharmacy";
import { labReportsData } from "../data/LabReports";

export const AppContext = createContext();

const initialBills = [
  { id: 1, patient: "Amit Sharma", amount: 500, status: "Paid" },
  { id: 2, patient: "Neha Singh", amount: 1200, status: "Pending" },
];

export const AppProvider = ({ children }) => {
  const [patients, setPatients] = useState(patientsData);
  const [doctors] = useState(doctorsData);
  const [appointments, setAppointments] = useState(appointmentsData);
  const [bills, setBills] = useState(initialBills);
  const [staff, setStaff] = useState(staffData);
  const [beds, setBeds] = useState(bedsData);
  const [pharmacy, setPharmacy] = useState(pharmacyData);
  const [labReports, setLabReports] = useState(labReportsData);

  return (
    <AppContext.Provider
      value={{
        patients,
        setPatients,
        doctors,
        appointments,
        setAppointments,
        bills,
        setBills,
        staff,
        setStaff,
        beds,
        setBeds,
        pharmacy,
        setPharmacy,
        labReports,
        setLabReports,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};