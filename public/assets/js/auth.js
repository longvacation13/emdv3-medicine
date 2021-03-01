var firebaseConfig = {
    apiKey: "AIzaSyDNiTTcR9Sc-B1-ygZrVdQr76zR7fqWkDM",
    authDomain: "emdv-medicine.firebaseapp.com",
    databaseURL: "https://emdv-medicine-default-rtdb.firebaseio.com",
    projectId: "emdv-medicine",
    storageBucket: "emdv-medicine.appspot.com",
    messagingSenderId: "671139965238",
    appId: "1:671139965238:web:0635a62bfe66d9fc86eb97",
    measurementId: "G-4CRT22DJ2L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


  // 비동기 호출 ( 로그인 안됐을 경우)
  $(document).ready(function ($){       
    firebase.auth().onAuthStateChanged(function(user){
        // alert(2);
        if(user){
            console.log('login ok')
            location.href="https://emdv-medicine.web.app/#";
        } 
        else {
                // alert('유저 정보가 없습니다.')
                console.log('no user info')
                // alert(3)
            }
    })
  });
  
function go_loginPage()
{  
  cur_url = window.location.href; 
  cur_url = cur_url.replace('index.html','');  
  cur_url = cur_url+"/auth/login/index.html"
  location.href = cur_url;
  
}

function login(){  
  firebase.auth().signInWithEmailAndPassword($("#txtemail").val(), $("#txtpasswd").val() )
    .then((user) => {
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      //customizing 
      if(errorCode == 'auth/wrong-password') {
        alert("잘못된 비밀번호 입니다. ")        
      }
      else if(errorCode == 'auth/invalid-email') {
        alert("잘못된 메일 형식입니다.")
      }
      else if(errorCode == 'auth/user-not-found') { 
        alert("등록되지 않은 사용자 입니다.")
      }
      else {
        alert("[ "+errorCode+":"+ errorMessage+" ]");
      }

  });
}
