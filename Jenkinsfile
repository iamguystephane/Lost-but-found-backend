pipeline {
    agent any

    tools {
        nodejs 'node-18' // Make sure this matches your NodeJS installation in Jenkins
    }
    triggers {
        githubPush() // Optional: only works if GitHub webhook is configured
    }

    environment {
        GIT_CREDENTIALS_ID = 'github-pat' // Make sure this matches your Jenkins credentials ID
        COVERAGE_THRESHOLD = 85 // Set your coverage threshold here
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], // or the appropriate branch
                    userRemoteConfigs: [[
                        url: 'https://github.com/iamguystephane/lost-but-found-backend.git',
                        credentialsId: "${GIT_CREDENTIALS_ID}"
                    ]]
                ])
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // adjust based on your project
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test -- --passWithNoTests' // or other test command
            }
        }
        state('Check Coverage') {
            steps {
               script {
                    // Assuming coverage is stored in coverage/coverage-summary.json
                    def coverage = readJSON(file: 'coverage/coverage-summary.json')
                    def totalCoverage = coverage.total.lines.pct

                    echo "Total Coverage: ${totalCoverage}%"

                    if (totalCoverage < env.COVERAGE_THRESHOLD.toInteger()) {
                        error "Code coverage is below the threshold: ${totalCoverage}%"
                    }
               }
            }
        }
    }

    post {
        failure {
            echo "❌ Build failed!"
        }
        success {
            echo "✅ Build passed!"
        }
    }
}
