import React from 'react';
import {ChatEngine} from "react-chat-engine";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { ChatFeed } from './component/ChatFeed';
import { Login } from './component/LoginForm';
import { Signin } from './component/SigninForm';




export function App() {
	if(!localStorage.getItem("username")) return (
		<Routes>
			<Route path='/' element={<Signin/>}></Route>
			<Route path='/login' element={<Login/>}></Route>
			
		</Routes>
	)
	return (
		<>
		<ChatEngine
		 	height='100vh'
		 	userName={localStorage.getItem("username")}
		 	userSecret={localStorage.getItem("password")}
		 	projectID='c8216b7b-ad64-4289-82a2-c1aed23818e7'
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		 	onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		 	/>
			
		 	
		
		
	</>
		
	);
}

// userName='Keshav Mandal'
// 			userSecret='Chat123@'
// userName='Keshav Mandal'
// 			userSecret='Chat123@'