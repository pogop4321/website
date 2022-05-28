void send_value(){
  if (now - past2 > 5000)
  {
    past2 = now;
    Temp_RF = "$T" + Temp_str;
    Humi_RF = "H" + Humi_str;
    CO2_RF = "C" + CO2_str;
    O2_RF = "O" + O2_value_str;
    String send_sensor = Temp_RF + Humi_RF + CO2_RF + O2_RF + "\n";
    Serial2.println(send_sensor);
    delay(10);
    Serial2.println("#LMRP" + rpmStr + "\n");
    delay(10);
    Serial2.println("#LMMA\n"); // "APP "
    //else if (modeCheckStr == "DIAL") {Serial2.println("#LMMD\n");}
    delay(10);
    Serial2.println("#LMOK\n");
  }
  
}
