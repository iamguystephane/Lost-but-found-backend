pipeline {
    agent {
        docker {
            image 'node:lts'  // Official Node.js LTS image
            args '-u root'    // Optional: Run as root to avoid permission issues
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                     url: 'https://github.com/iamguystephane/lost-but-found-backend.git',
                     credentialsId: 'github-pat'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}