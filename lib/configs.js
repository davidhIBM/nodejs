var Agent = require('agentkeepalive');
module.exports = {
    LOG_LEVELS: ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL']
    , DEFAULT_REQUEST_HEADER: { 'Content-Type': 'application/json; charset=UTF-8' }
    , DEFAULT_REQUEST_TIMEOUT: 180000
    , MS_IN_A_DAY: 86400000
    , MAX_REQUEST_TIMEOUT: 300000
    , MAX_LINE_LENGTH: 32000
    , MAX_INPUT_LENGTH: 80
    , FLUSH_INTERVAL: 250
    , FLUSH_BYTE_LIMIT: (process.env.test === 'test') ? 320000 : 5000000
    , AGENT_SETTING: { maxSockets: 20, keepAliveTimeout: 60000 }
    , AGENT_PROTOCOL: (process.env.test === 'test') ? Agent : Agent.HttpsAgent
    , LOGDNA_URL: (process.env.test === 'test') ? 'http://localhost:1337' : 'https://logs.us-south.logging.cloud.ibm.com/logs/ingest'
    , MAC_ADDR_CHECK: /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/
    , IP_ADDR_CHECK: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    , REQUEST_WITH_CREDENTIALS: false
};
