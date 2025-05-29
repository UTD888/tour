// auth-guard.js
// ต้องโหลด Firebase SDK ก่อนหน้านี้แล้ว (firebase-app-compat.js, firebase-auth-compat.js)
// ตัวนี้จะคอยบังคับให้ redirect หน้า login ถ้าผู้ใช้ยังไม่ล็อกอิน
firebase.auth().onAuthStateChanged(user => {
  const path = window.location.pathname;
  const isLoginPage = path.endsWith('login.html');

  if (!user && !isLoginPage) {
    // ยังไม่ล็อกอิน + ไม่ใช่หน้า login → กลับไปหน้า login
    window.location.replace('login.html');
  }
  else if (user && isLoginPage) {
    // ล็อกอินอยู่แล้ว + อยู่หน้า login → ไปหน้า index
    window.location.replace('index.html');
  }
  // กรณีอื่น ๆ (user&&!isLoginPage หรือ !user&&isLoginPage) ไม่ต้องทำอะไร
});
