import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  

  const toggleMode = ()=>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode succefully applied!", "success");
      document.title="TextUtils - Light mode";
    
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode succefully applied!", "success");
      document.title="TextUtils - Dark mode"
    }
  };
 
 const showAlert=(message, type)=>{
        setAlert({ 
          message:message,
          type:type
        });
        setTimeout(() => {
          setAlert(null)
        }, 1500);
        
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //         <Navbar title="TextUtils" about="about us" mode={mode} toggle={toggleMode}/>
  //  <Alert alert={alert}/>
  //  <Form heading="Enter the text in the box below" mode={mode} showAlert={showAlert}/>
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "about",
  //     element: <div>
  //       <Navbar title="TextUtils" about="about us" mode={mode} toggle={toggleMode}/>
  //  <Alert alert={alert}/>
  //  <About/> 

  //     </div>,
  //   },
  // ]);

  // createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />
  // );

  

  return (
    <>
    <Router>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link> */}

      <Navbar title="TextUtils" about="about us" mode={mode} toggle={toggleMode}/>
      <Alert alert={alert}/>

      <Routes>
      <Route exact path='/' element={<Form heading="Enter the text in the box below" mode={mode} showAlert={showAlert}/>} />
      <Route exact path='/about' element={<About/>} />
    
      </Routes>
      </Router>
   {/* <Navbar title="TextUtils" about="about us" mode={mode} toggle={toggleMode}/>
   <Alert alert={alert}/>
   <About/> 
   <Form heading="Enter the text in the box below" mode={mode} showAlert={showAlert}/> */}
   </>
  );
}

export default App;
