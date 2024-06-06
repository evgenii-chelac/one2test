// pipeline {
//    agent {  docker { image 'mcr.microsoft.com/playwright:v1.44.1-jammy' } }
//    environment {
//         PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"
//     }
//    stages {
//       stage('e2e-tests') {
//          steps {
//             sh 'docker --version'
//             sh 'npm ci'
//             sh 'npx playwright test'
//          }
//       }
//    }
// }
pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.44.1-jammy'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}


