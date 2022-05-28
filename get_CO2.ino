void get_CO2() {
  delay(20);
  CO2Serial.write(hexdata, 9);
  for (int i = 0; i < 9; i++) {
    if (CO2Serial.available() > 0) {
      long hi, lo;
      int ch = CO2Serial.read();
      if (i == 2) {hi = ch;}//High concentration
      if (i == 3) {lo = ch;}//Low concentration
      if (i == 8) {CO2_int = hi * 256 + lo;}//CO2 concentration
    }
  }
  delay(10);

  CO2_str = String(CO2_int);

  if (CO2_str.length() == 0 || CO2_str.length() == 1 || CO2_str.length() == 2) {
    CO2_str = " ERR1";
  }
  else if (CO2_str.length() == 3) {
    CO2_str = CO2_str + "  ";
  }
  else if (CO2_str.length() == 4) {
    CO2_str = CO2_str + " ";
  }
  else if (CO2_str.length() == 5) {
    CO2_str = CO2_str;
  }
  else {
    CO2_str = " ERR1";
  }
  CO2_str.toCharArray(CO2_arr, 10);
  delay(30);
}
