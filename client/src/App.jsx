import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";

import Dashboard from "./pages/Admin/Dashboard.jsx";
import ManageTasks from "./pages/Admin/ManageTasks.jsx";
import CreateTask from "./pages/Admin/CreateTask.jsx";
import ManageUsers from "./pages/Admin/ManageUsers.jsx";

import UserDashboard from "./pages/User/UserDashboard.jsx";
import MyTasks from "./pages/User/MyTasks.jsx";
import ViewTaskDetails from "./pages/User/ViewTaskDetails.jsx";

import PrivateRoute from "./routes/PrivateRoute.jsx";

function App() {
  return (
    <>
     <Router>
       <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/signUp" element={<SignUp />} />

         {/* Admin Routes */}
         <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
           <Route path="/admin/dashboard" element={<Dashboard />} />
           <Route path="/admin/tasks" element={<ManageTasks />} />
           <Route path="/admin/create-task" element={<CreateTask />} />
           <Route path="/admin/users" element={<ManageUsers />} />
         </Route>

         {/* User Routes */}
         <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
           <Route path="/user/dashboard" element={<UserDashboard />} />
           <Route path="/user/tasks" element={<MyTasks />} />
           <Route
               path="/user/task-details/:id"
               element={<ViewTaskDetails />}
           />
         </Route>

         {/* Default Route */}
         {/*<Route path="/" element={<Root />} />*/}
       </Routes>
     </Router>
    </>
  )
}

export default App
