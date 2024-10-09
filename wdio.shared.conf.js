exports.config = {
    runner: 'local',
    path: '/wd/hub',
    port: 4723,
    specs: ['./features/**/*.feature'],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        timeout: 60000
    },
    reporters: [
        ['allure', { outputDir: 'allure-results' }]
    ],
    services: ['appium'],
};
