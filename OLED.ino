void OLED_display(){
  display.setCursor(5,1); display.println(Humi_arr); display.display();
  delay(10);
  display.setCursor(5,2); display.println(Temp_arr); display.display();
  delay(10);
  display.setCursor(5,3); display.println(CO2_arr); display.display();
  delay(10);
  display.setCursor(5,4); display.println(O2_value_arr); display.display();
  delay(10);
  display.setCursor(5,5); display.println(rpmArr); display.display();
      
//  OzOled.printString(Humi_arr, 5, 1);
//  OzOled.printString(Temp_arr, 5, 2);
//  OzOled.printString(CO2_arr, 5, 3);
//  OzOled.printString(O2_value_arr, 5, 4);
//  OzOled.printString(rpmArr, 5, 5);
//  OzOled.printString(modeCheckArr, 5, 6);
  Serial.print("O2 ");
  Serial.println(O2_value_arr);
  Serial.print("Humi ");
  Serial.println(Humi_arr);
  Serial.print("Temp ");
  Serial.println(Temp_arr);
  Serial.print("CO2 : ");
  Serial.println(CO2_arr);
}
