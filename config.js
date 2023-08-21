/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "process.env.Cookie",
    "CookieArray": [],
    "Ip": "127.0.0.1",
    "Port": 8444,
    "BufferSize": 1,
    "SystemInterval": 3,
    "padtxt_placeholder": "",
    "PersonalityFormat": "{{CHAR}}'s personality: {{PERSONALITY}}",
    "ScenarioFormat": "Dialogue scenario: {{SCENARIO}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": true,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": 15000,
        "xmlPlot": true,
        "localtunnel": false,
        "Superfetch": true
    },
    "SuperfetchHost": "localhost",
    "SuperfetchPort": 8443,
    "SuperfetchTimeout": 120
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
