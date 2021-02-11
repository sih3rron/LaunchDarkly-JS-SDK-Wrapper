import { LDUser } from 'launchdarkly-js-sdk-common';

type UserData = {
    state: string,
    role: string,
    ID: string,
}

class LDContext {
    sBrowser!: string;
    sUsrAg: string;
    userInfo!: UserData; //Example type of retrieving user info from datastore
    navigator: Object

    constructor(navigator: any) {
        this.sBrowser, 
		this.sUsrAg = navigator.userAgent;
        this.navigator = navigator
    }

   OSVersion = () => {
        var OSName="Unknown OS";
        if (this.navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
        if (this.navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
        if (this.navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
        if (this.navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
        
        return OSName
    }
    
    loggedInUser = (userInfo: UserData): LDUser => {
        return  {
            "key": userInfo.ID, //Get the user ID to pass in as key
            "custom": {
              "role": userInfo.role,
              "browser": this.sBrowser,
              "userAgent": this.sUsrAg,
              "state": userInfo.state,
              "OS": this.OSVersion()
            }
        }
    }

    anonymousUser = (): LDUser => {
      return  {
          "anonymous": true,
          "custom": {
            "browser": this.sBrowser,
            "userAgent": this.sUsrAg,
            "OS": this.OSVersion()
          }
        }
    }
}