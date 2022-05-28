void get_O2() {
  int i = 0;
//  O2_arr[80] = {};
  while (O2Serial.available()) {
    O2_arr[i] = O2Serial.read();
    delay(1);
    if (O2_arr[i] == 10) {
      O2_arr[i] = 10;
      break;
    }
    i++;
  }
  O2_str = O2_arr;
  String dotCheck = O2_str.substring(29, 30);
  if (dotCheck == ".")
  {
    O2_value_str = O2_str.substring(27, 32);
    O2_value_str.toCharArray(O2_value_arr, 10);
    get_O2_float = O2_value_str.toFloat();
  }
  else{}
  if (O2_value_str.length() == 0) {O2_value_str = " ERR1";}
  else if (O2_value_str.length() == 1) {O2_value_str = "0000" + O2_value_str;}
  else if (O2_value_str.length() == 2) {O2_value_str = "000" + O2_value_str;}
  else if (O2_value_str.length() == 3) {O2_value_str = "00" + O2_value_str;}
  else if (O2_value_str.length() == 4) {O2_value_str = "0" + O2_value_str;}
  else {}
  delay(5);
}
