import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Chats from "./Connect/Chats/Chats";
import ConnectHeader from "./components/ConnectHeader/ConnectHeader";
import Contacts from "./Connect/Contacts/Contacts";
import Drawer from "./containers/Drawer/Drawer";
import Groups from "./Connect/Groups/Groups";
import Calls from "./Connect/Calls/Calls";
import CreateGroup from "./Connect/Groups/CreateGroup/CreateGroup";
import PrivateChat from "./Connect/Chats/PrivateChat/PrivateChat";
import VideoCall from "./Connect/Chats/PrivateChat/VideoCall/VideoCall";
import VoiceCall from "./Connect/Chats/PrivateChat/VoiceCall/VoiceCall";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

class App extends Component {
  state = {
    privateChatOpened: false,
    lastSeen: "",
    username: "",
    avatar: "",
    createGroupOpened: false,
    openSharedItems: false,
    openMoreOverlay: false,
  }

  handleSharedItems = () => {
    this.setState(prevState => ({ openSharedItems: !prevState.openSharedItems, openMoreOverlay: false }))
  }

  handleMoreOverlay = e => {
    e.stopPropagation();
    this.setState(prevState => {
      return {
        openMoreOverlay: !prevState.openMoreOverlay
      };
    });
  };

  handlePrivateChat = (username, lastSeen, avatar) => {
    this.setState({privateChatOpened: true, lastSeen, username, avatar, openSharedItems: false});
    console.log(username, lastSeen, avatar)
  }

  handleCreateGroup = () => {
    this.setState(prevState => ({createGroupOpened: !prevState.createGroupOpened}))
  }

  render() {
    let privateChat = this.state.privateChatOpened ? (
      <PrivateChat 
        openMoreOverlay={this.state.openMoreOverlay} 
        openSharedItems={this.state.openSharedItems} 
        handleMoreOverlay={this.handleMoreOverlay} 
        handleSharedItems={this.handleSharedItems} 
        lastSeen={this.state.lastSeen} 
        username={this.state.username} 
        avatar={this.state.avatar} />
    ) : null;

    let createGroupOverlay = this.state.createGroupOpened ? (
      <CreateGroup handleCreateGroup={this.handleCreateGroup} />
    ) : null
    return (
      <div style={{ display: 'flex' }}>
        <BrowserRouter>
          <div className="main">
            <div>
              <ConnectHeader />
              <Drawer />
            </div>
            <div style={{flexGrow: '1', height: '80%'}}>
              <SimpleBar style={{ height: '100%' }}>
                <Switch>
                  <Route path={["/", "/chats"]} exact render={(props) => <Chats {...props} handlePrivateChat={this.handlePrivateChat} />} />
                  <Route path="/contacts" exact render={(props) => <Contacts {...props} handlePrivateChat={this.handlePrivateChat} />} />
                  <Route path="/groups" exact render={(props) => <Groups {...props} handleCreateGroup={this.handleCreateGroup} />} />
                  <Route path="/calls" exact render={(props) => <Calls {...props} handlePrivateChat={this.handlePrivateChat} />} />
                </Switch>
              </SimpleBar>
            </div>
          </div>
          <SimpleBar style={{flexGrow: 1, height: '100vh'}}>
            {privateChat}
            {createGroupOverlay}
          </SimpleBar>
          <Route path="/video-call" exact component={VideoCall} />
          <Route path="/voice-call" exact component={VoiceCall} />
          <Redirect to="/" />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
