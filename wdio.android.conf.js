const { getAppPath } = require('./helpers/pathHelper');
const { config } = require('./config/wdio.shared.conf');

// Android-specific capabilities
config.capabilities = [{
    platformName: 'Android',
    automationName: 'UiAutomator2',
    app: getAppPath('android'),
    deviceName: 'Android Emulator',
    platformVersion: '11.0'
}];

exports.config = config;
