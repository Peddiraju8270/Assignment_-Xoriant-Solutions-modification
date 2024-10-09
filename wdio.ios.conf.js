const { getAppPath } = require('./helpers/pathHelper');
const { config } = require('./config/wdio.shared.conf');

// iOS-specific capabilities
config.capabilities = [{
    platformName: 'iOS',
    automationName: 'XCUITest',
    app: getAppPath('ios'),
    deviceName: 'iPhone 12',
    platformVersion: '14.5'
}];

exports.config = config;
