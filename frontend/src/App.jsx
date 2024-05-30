import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import PageWrapper from "./components/common/PageWrapper";
import MainLayout from "./components/layout/MainLayout";
import routes from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
    <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
       
      />
      <CssBaseline />
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {
          routes.map((route, index) => (
            route.index ? (
              <Route
                index
                key={index}
                element={route.state ? ( 
                  <PageWrapper state={route.state}>{route.element}</PageWrapper>
                ) : route.element}
              />
            ) : (
              <Route
                path={route.path}
                key={index}
                element={route.state ? (
                  <PageWrapper state={route.state}>{route.element}</PageWrapper>
                ) : route.element}
              />
            )
            
          ))
        }
      </Route>
    </Routes>
  </BrowserRouter>
  
   
     
    </>
  )
}

export default App
