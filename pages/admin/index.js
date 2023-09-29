import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/css/style.css'

export default function Login() {

    return (
        <>
            <div class="main-wrapper login-body">
                <header class="log-header">
                    <a href="index.html"><img class="img-fluid logo-dark" src="assets/img/logo.svg" alt="Logo" /></a>
                </header>
                <div class="login-wrapper">
                    <div class="loginbox">
                        <div class="login-auth">
                            <div class="login-auth-wrap">
                                <div class="sign-group">
                                    <a href="index.html" class="btn sign-up"><span><i class="fe feather-corner-down-left" aria-hidden="true"></i></span> Back To Home</a>
                                </div>
                                <h1>Sign In</h1>
                                <p class="account-subtitle">We'll send a confirmation code to your email.</p>
                                <form action="index.html">
                                    <div class="form-group">
                                        <label class="form-label">Email <span class="text-danger">*</span></label>
                                        <input type="email" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Password <span class="text-danger">*</span></label>
                                        <div class="pass-group">
                                            <input type="password" class="form-control pass-input" placeholder="" />
                                            <span class="fas fa-eye toggle-password"></span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <a class="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                                    </div>
                                    <div class="form-group m-0">
                                        <label class="custom_check d-inline-flex"><span>Remember me</span>
                                            <input type="checkbox" name="remeber" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <a href="index.html" class="btn btn-outline-light w-100 btn-size mt-1">Sign In</a>
                                    <div class="login-or">
                                        <span class="or-line"></span>
                                        <span class="span-or-log">Or, log in with your email</span>
                                    </div>
                                    <div class="social-login">
                                        <a href="login.html#" class="d-flex align-items-center justify-content-center form-group btn google-login w-100"><span><img src="assets/img/icons/google.svg" class="img-fluid" alt="Google" /></span>Log
                                            in with Google</a>
                                    </div>
                                    <div class="social-login">
                                        <a href="login.html#" class="d-flex align-items-center justify-content-center form-group btn google-login w-100"><span><img src="assets/img/icons/facebook.svg" class="img-fluid" alt="Facebook" /></span>Log in with Facebook</a>
                                    </div>
                                    <div class="text-center dont-have">Don't have an account yet? <a href="register.html">Register</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="log-footer">
                    <div class="container-fluid">
                        <div class="copyright">
                            <div class="copyright-text">
                                <p>© 2023 Dreams Rent. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}