package co.arteesan.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SignupController {
    @RequestMapping(value = "signup")
    public String signup() {
        return "signup";
    }
}
