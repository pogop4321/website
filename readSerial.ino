void readSerial(){
if(receive_str != "")
  {
    Serial.println(receive_str);
    String subStr1 = receive_str.substring(0, 1);
    String subStr2 = receive_str.substring(1, 3);
    int receive_length = receive_str.length();

    if (receive_length > 3){
    if (subStr1 == "*"){ // 온습도, CO2, O2 자동제어 세팅
      if(subStr2 == "TA"){
        pelMode = 1; ptcMode = 1;
        if(receive_length == 6){ // x.x 온도
          tempSet_float = receive_str.substring(3, 5).toFloat()/10; delay(1);
          Serial2.println("#TA" + receive_str.substring(3, 5) + "\n");
        }else if(receive_length == 7){ // xx.x 온도
          tempSet_float = receive_str.substring(3, 6).toFloat()/10; delay(1);
          Serial2.println("#TA" + receive_str.substring(3, 6) + "\n");
        }else{}
      }else if(subStr2 == "HA"){
        humiMode = 1;
        if(receive_length == 5){ // 1자리 습도
          humiSet_int = receive_str.substring(3, 4).toInt(); delay(1);
          Serial2.println("#HA" + receive_str.substring(3, 4) + "\n");
        }else if(receive_length == 6){ // 2자리 습도
          humiSet_int = receive_str.substring(3, 5).toInt(); delay(1);
          Serial2.println("#HA" + receive_str.substring(3, 5) + "\n");
        }else if(receive_length == 7){ // 3자리 습도(100)
          humiSet_int = receive_str.substring(3, 6).toInt(); delay(1);
          Serial2.println("#HA" + receive_str.substring(3, 6) + "\n");
        }else{}
      }else if(subStr2 == "CA"){
        co2Mode = 1;
        if(receive_length == 7){ // 3자리 CO2 농도
          co2Set_uint = receive_str.substring(3, 6).toInt(); delay(1);
          Serial2.println("#CA" + receive_str.substring(3, 6) + "\n");
        }
        else if(receive_length == 8){ // 4자리 CO2 농도
          co2Set_uint = receive_str.substring(3, 7).toInt(); delay(1);
          Serial2.println("#CA" + receive_str.substring(3, 7) + "\n");
        }
        else if(receive_length == 9){ // 5자리 CO2 농도
          co2Set_uint = receive_str.substring(3, 8).toInt(); delay(1);
          Serial2.println("#CA" + receive_str.substring(3, 8) + "\n");
        }
        else{}
        autoCo2();
      }else if(subStr2 == "OA"){
        o2Mode = 1;
        if(receive_length == 7){ // x.xx O2 농도
          o2Set_float = receive_str.substring(3, 6).toFloat()/100;
          Serial2.println("#OA" + receive_str.substring(3, 6) + "\n");
        }else if(receive_length == 8){ // xx.xx O2 농도
          o2Set_float = receive_str.substring(3, 7).toFloat()/100;
          Serial2.println("#OA" + receive_str.substring(3, 7) + "\n");
        }else{}
      }else if(subStr2 == "LM"){
        String lmCheck = receive_str.substring(3, 5);
        if(lmCheck == "WO"){}
        else if(lmCheck == "WF"){}
        else if(lmCheck == "BO"){}
        else if(lmCheck == "BF"){}
        else if(lmCheck == "RO"){}
        else if(lmCheck == "RF"){}

 // 밸브, 펠티어, PTC, 가습기 수동제어~
        else if(lmCheck == "CO"){co2Mode = 0; digitalWrite(valveCo2Pin,1);delay(10);Serial2.println("#LMCO\n");}
        else if(lmCheck == "CF"){co2Mode = 0; digitalWrite(valveCo2Pin,0);delay(10);Serial2.println("#LMCF\n");}
        else if(lmCheck == "OO"){o2Mode = 0; digitalWrite(valveO2Pin,1);delay(10);Serial2.println("#LMOO\n");}
        else if(lmCheck == "OF"){o2Mode = 0; digitalWrite(valveO2Pin,0);delay(10);Serial2.println("#LMOF\n");}     
        else if(lmCheck == "PO"){pelMode = 0; digitalWrite(pelPin,0); delay(10);Serial2.println("#LMPO\n");}
        else if(lmCheck == "PF"){pelMode = 0; digitalWrite(pelPin,1); delay(10);Serial2.println("#LMPF\n");}
        else if(lmCheck == "HO"){ptcMode = 0; digitalWrite(ptcPin,0); delay(10);Serial2.println("#LMHO\n");}
        else if(lmCheck == "HF"){ptcMode = 0; digitalWrite(ptcPin,1); delay(10);Serial2.println("#LMHF\n");} 
        else if(lmCheck == "DO"){humiMode = 0; digitalWrite(humiPin,0); delay(10);Serial2.println("#LMDO\n");}
        else if(lmCheck == "DF"){humiMode = 0; digitalWrite(humiPin,1); delay(10);Serial2.println("#LMDF\n");}   
// ~밸브, 펠티어, PTC, 가습기 수동제어
 
//FAN 속도 조절
        else if(lmCheck == "FP"){
          pwmVal += 5; if (pwmVal > 200) {pwmVal = 200;} getRpm();delay(10); Serial2.println("#LMRP" + rpmStr + "\n"); ledcWrite(fanPwmPin, pwmVal);}
        else if(lmCheck == "FL"){
          pwmVal += 25; if (pwmVal > 200) {pwmVal = 200;} getRpm();delay(10); Serial2.println("#LMRP" + rpmStr + "\n"); ledcWrite(fanPwmPin, pwmVal);}
        else if(lmCheck == "FU"){
          pwmVal = 200; getRpm();delay(10); Serial2.println("#LMRP" + rpmStr + "\n"); ledcWrite(fanPwmPin, pwmVal);}
        else if(lmCheck == "FM"){
          pwmVal -= 5; if (pwmVal < 8) {pwmVal = 0;} getRpm();delay(10); Serial2.println("#LMRP" + rpmStr + "\n"); ledcWrite(fanPwmPin, pwmVal);}
        else if(lmCheck == "FI"){
          pwmVal -= 25; if (pwmVal < 8) {pwmVal = 0;} getRpm();delay(10); Serial2.println("#LMRP" + rpmStr + "\n"); ledcWrite(fanPwmPin, pwmVal);}
        else if(lmCheck == "FN"){
          pwmVal = 0; getRpm();delay(10); Serial2.println("#LMRP" + rpmStr + "\n"); ledcWrite(fanPwmPin, pwmVal);}
        else{};  
      }
      else if(subStr2 == "OK"){feedback = 0;}
    }
    }
     receive_str = "";
  }  
}
