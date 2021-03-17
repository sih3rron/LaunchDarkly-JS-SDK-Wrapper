import { LDUser } from 'launchdarkly-js-sdk-common';

class Context {

    known = (userInfo) => {
        return  {
            "key": userInfo.ID, 
            "custom": {
                groups: [],
                accountHolder: true,
            }
        }
    } 

     anonymous = () => {
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