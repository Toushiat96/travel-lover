import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { Form } from 'react-bootstrap';
import { FormGroup } from '@material-ui/core';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value); ////regular expression /\S+@\S+\.\S+/ diye email validation
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value); //regular expression /\d{1}/ diye pass validation
            //console.log(isPasswordValid && passwordHasNumber);
            isFieldValid = (isPasswordValid && passwordHasNumber);
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[event.target.name] = event.target.value;
            setLoggedInUser(newUserInfo);
        }

    }
    const handleSubmit = (event) => {
       
        if (newUser && loggedInUser.email && loggedInUser.password){
            //console.log("submitting");
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res =>{
                console.log(res);
                const {displayName, email} = res.user;
                const emailUser = {name: displayName, email: email};
              //const newUserInfo = {...loggedInUser};
            //    newUserInfo.error = '';
            //    newUserInfo.success = true;
               setLoggedInUser(emailUser);
               updateUserName(loggedInUser.name);
            //     const signedInUser = {
            //    // isSignedIn: 'true',
            //     name: displayName,
            //     email: email
            //   };
             
             history.replace(from);
              
            })
            .catch(error => {
              // Handle Errors here.
              const newUserInfo = {...loggedInUser};
               newUserInfo.error = error.message;
               newUserInfo.success = false;
              setLoggedInUser(newUserInfo);
              // ...
            });
        }

            if (!newUser && loggedInUser.email && loggedInUser.password){
                //console.log("submitting");
                firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res =>{
                    const {displayName, email} = res.user;
                    const emailUser = {name: displayName, email: email};
                //   const newUserInfo = {...loggedInUser};
                //    newUserInfo.error = '';
                //    newUserInfo.success = true;
                   setLoggedInUser(emailUser);
                   updateUserName(loggedInUser.name);
            //     const signedInUser = {
            //        // isSignedIn: 'true',
            //         name: res.user.displayName,
            //         email: res.user.email
            //   };
            //     setLoggedInUser(signedInUser);
                history.replace(from);
                  
                  
                })
                .catch(error => {
                  // Handle Errors here.
                  const newUserInfo = {...loggedInUser};
                   newUserInfo.error = error.message;
                   newUserInfo.success = false;
                  setLoggedInUser(newUserInfo);
                  // ...
                });
            }
         
       event.preventDefault();
      
       
        }




const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
   } 



const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ..
    }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}
const handleFaceBookSignIn = () => {
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbprovider).then(function (result) {
        const { displayName, email } = result.user;
        const signedInuser = { displayName, email }
        setLoggedInUser(signedInuser);
        console.log(signedInuser);
        history.replace(from);
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

}
return (
    <div>
        <div className="homeimage">
            <div>
                <Header></Header>

            </div>


            <div className="container">
                <div className="row justify-content-center" style={{ marginTop: '90px', marginLeft: '290px', backgroundColor: 'white', border: '1px solid white', borderRadius: '20px', height: '440px', width: '500px' }}>
                    <div col-md-8>
                        <Form onSubmit={handleSubmit} style={{ width: '250px', color: 'gray' }}>

                            <Form.Group>
                                <Form.Check type="checkbox" onClick={() => setNewUser(!newUser)} label="Click for Sign up" />
                            </Form.Group>

                            <FormGroup>
                                {newUser && <Form.Control type="name" name="name" className="form-control" onBlur={handleBlur} placeholder="Your name" required />}
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onBlur={handleBlur} placeholder="Username or Email" required />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                            </FormGroup>
                            <br />

                            <input style={{ marginLeft: '75px', fontWeight: 'border', backgroundColor: '#ffc107' }} value="Submit" type="submit" />



                        </Form>

                        <br />
                        <button onClick={handleGoogleSignIn} style={{ borderRadius: '10px', marginLeft: '15px' }} >
                            Continue With Google
                  </button>
                        <br />
                        <br />
                        <button onClick={handleFaceBookSignIn} style={{ borderRadius: '10px', marginLeft: '15px' }}>

                            Continue With Facebook
                   </button>




                    </div>
                </div>
            </div>


        </div>

    </div>

);
};

export default Login;