import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Amplify, { Auth, API } from "aws-amplify";

import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch/NoMatch";
import Navigation from "./components/Navigation";
import MenuModal from "./components/MenuModal";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Messages from "./pages/Messages/Messages";
import Calendar from "./pages/Calendar/Calendar";
import ClassPage from "./pages/ClassPage/ClassPage";
import CreateClass from "./pages/CreateClass/CreateClass";
import UserSettings from "./pages/UserSettings/UserSettings";
import FAQ from "./pages/FAQ/FAQ";
import { store } from "./store";
import * as queries from "./graphql/queries";

import awsconfig from "./aws-exports";

import "./App.css";

Amplify.configure(awsconfig);

function App() {
  const [userID, setUserID] = useState(store.getState().auth.id);
  const [user, setUser] = useState(store.getState().user.user);
  const [isAuthenticated, setIsAuthenticated] = useState(
    store.getState().auth.auth
  );
  const [userClasses, setUserClasses] = useState(
    store.getState().classes.classes
  );

  async function Authenticate() {
    var id = null;
    id = (await Auth.currentSession()).accessToken.payload.sub;

    console.log(store.getState().auth);

    try {
      if (await Auth.currentSession()) {
        setIsAuthenticated(true);
        await store.dispatch({
          type: "LOG_IN",
          id: id,
        });
      }
    } catch (error) {
      if (error !== "No current user") {
        alert("This error: ", error);
      }
    }
  }

  async function getUser() {
    var creds = (await Auth.currentSession()).accessToken.payload.sub;
    setUserID(creds);

    const { data } = await API.graphql({
      query: queries.getUser,
      variables: { id: userID },
    });

    const { getUser } = await { ...data };

    await presistUser(getUser);
    await presistClass(data.getUser.classes.items);
  }

  async function getClasses() {
    const { data } = await API.graphql({
      query: queries.getUser,
      variables: { id: user.id },
    });

    await presistClass(data.getUser.classes.items);
  }

  async function presistUser(userData) {
    await store.dispatch({
      type: "SET_USER",
      user: userData,
    });
  }

  async function presistClass(classData) {
    const userCourses = {};

    await classData.map((course) => {
      userCourses[course.classID] = course;
    });

    await store.dispatch({
      type: "USER_ADD_CLASS",
      classes: userCourses,
    });
  }

  useEffect(async () => {
    if (!isAuthenticated || !user || user == null) {
      await Authenticate();
      await getUser();

      window.location.reload();
    }

    await getClasses();
  }, [user, userID]);

  console.log(isAuthenticated.auth);

  return isAuthenticated ? (
    <div className="App d-flex flex-column justify-content-between">
      <Navigation />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home
                isAuthenticated={isAuthenticated}
                user={user}
                userClasses={userClasses}
                getUser={getUser}
              />
            }
          />
          <Route path="CreateClass" element={<CreateClass user={user} />} />
          <Route
            path="ClassPage/:id"
            element={<ClassPage user={user} userClasses={userClasses} />}
          />
          <Route path="UserSettings" element={<UserSettings />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <div className="menu-modal">
        <MenuModal />
      </div>

      <Footer />
    </div>
  ) : (
    <div className="App d-flex flex-column justify-content-between">
      <Navigation />
      <Routes>
        <Route path="/">
          <Route index element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
