const path = require('path');

const getAppPath = (platform) => {
    const basePath = 'C:/Users/ASUS/OneDrive/Desktop/sample/Test Project';
    switch (platform) {
        case 'android':
            return path.join(basePath, 'Android-MyDemoAppRN.1.3.0.build-244.apk');
        case 'ios':
            return path.join(basePath, 'iOS-Real-Device-MyRNDemoApp.1.3.0-162.ipa');
        default:
            throw new Error('Invalid platform specified.');
    }
};

module.exports = { getAppPath };
