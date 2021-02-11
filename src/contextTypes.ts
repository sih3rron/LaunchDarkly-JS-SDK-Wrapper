import { LDUser } from 'launchdarkly-js-sdk-common';

type UserData = {
    ID: string;
}

class Context {
    userInfo!: UserData;

    known = (userInfo: UserData): LDUser => {
        return  {
            "key": userInfo.ID, 
            "custom": {
                groups: [],
                accountHolder: true,
            }
        }
    } 

    anonymous = (): LDUser => {
      return  {
          "anonymous": true,
            "custom": {
                groups: [],
                accountHolder: false,
            }
        }
    }

}

export default Context;