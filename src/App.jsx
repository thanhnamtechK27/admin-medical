import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";
import DoctorManagementPage from "@/pages/doctor-management";
import SpecializationManagementPage from "@/pages/specialization-management";
import MedicalRecordsPage from "@/pages/medical-records"; 
import ServiceManagement from "@/pages/service-management"; 
import ProfileManagement from "@/pages/profile-management"; 

import Layout from "@/pages/layout";
import DashboardPage from "./pages/dashboard";  

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "doctor-management",
                    element: <DoctorManagementPage />,
                },
                {
                    path: "specialization-management",
                    element: <SpecializationManagementPage />,
                },
                {
                    path: "medical-records",
                    element: <MedicalRecordsPage />,
                },
                {
                    path: "service-management",
                    element: <ServiceManagement />,
                },
                {
                    path: "profile-management",
                    element: <ProfileManagement/>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
