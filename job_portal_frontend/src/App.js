import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Applications from "./pages/Applications/Applications";
import CreateCategory from "./pages/Category/CreateCategory";
import EditCategory from "./pages/Category/EditCategory";
import CreateCompany from "./pages/Company/CreateCompany";
import EditCompany from "./pages/Company/EditCompany";
import CreateJob from "./pages/Jobs/CreateJob";
import EditJob from "./pages/Jobs/EditJob";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import { routeList } from "./routes/routeList";
import {
  APPLICATION_PAGE,
  CREATE_CATEGORY,
  CREATE_COMPANY,
  CREATE_JOB,
  EDIT_CATEGORY,
  EDIT_COMPANY,
  EDIT_JOB,
} from "./routes/routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
        <Routes>
          {routeList.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route
            path={CREATE_CATEGORY}
            element={
              <ProtectedRoute isAdmin={true}>
                <CreateCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path={EDIT_CATEGORY}
            element={
              <ProtectedRoute isAdmin={true}>
                <EditCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path={CREATE_COMPANY}
            element={
              <ProtectedRoute isAdmin={true}>
                <CreateCompany />
              </ProtectedRoute>
            }
          />
          <Route
            path={EDIT_COMPANY}
            element={
              <ProtectedRoute isAdmin={true}>
                <EditCompany />
              </ProtectedRoute>
            }
          />
          <Route
            path={CREATE_JOB}
            element={
              <ProtectedRoute isAdmin={true}>
                <CreateJob />
              </ProtectedRoute>
            }
          />
          <Route
            path={EDIT_JOB}
            element={
              <ProtectedRoute isAdmin={true}>
                <EditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path={APPLICATION_PAGE}
            element={
              <ProtectedRoute isAdmin={true}>
                <Applications />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
