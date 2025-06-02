pipeline {
    agent any

    environment {
        NODE_OPTIONS = "--max_old_space_size=4096"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Shubhugunjal/ToDo-Application.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Android APK') {
            steps {
                dir('android') {
                    bat 'gradlew.bat assembleRelease'
                }
            }
        }

        stage('Archive APK') {
            steps {
                archiveArtifacts artifacts: 'android/app/build/outputs/apk/release/app-release.apk'
            }
        }
    }
}
