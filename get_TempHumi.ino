void get_sht21() {
  Humi = sht.getHumidity();
//  Temp = sht.getTemperature();
  Humi_str = String(Humi);
  Humi_str.toCharArray(Humi_arr, 10);
//  Temp_str = String(Temp);
//  Temp_str.toCharArray(Temp_arr, 10);
  if (isnan(Temp) || isnan(Humi)) {
  } else {
  }
}

void get_DS18B20(){
  sensors.requestTemperatures(); 
  Temp = sensors.getTempCByIndex(0);
  Temp_str = String(Temp);
  Temp_str.toCharArray(Temp_arr, 10);
  delay(10);
}
