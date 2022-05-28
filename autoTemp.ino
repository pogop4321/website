void autoTemp()
{
  if(tempSet_float != 0 && pelMode == 1 && ptcMode == 1)
  {
    if(Temp > tempSet_float*1.05) // 온도가 세팅값의 105%보다 크면 펠티어를 켠다.
    {
      digitalWrite(pelPin, 0); 
      digitalWrite(ptcPin, 1);
      Serial2.println("#LAPOHF\n"); 
      delay(5);
      Serial2.println("#LAPOHF\n");     
    }else if(Temp < tempSet_float*0.95) // 온도가 세팅값의 95%보다 작으면 PTC를 켠다.
    {
      digitalWrite(pelPin, 1);
      digitalWrite(ptcPin, 0);
      Serial2.println("#LAPFHO\n"); 
      delay(5);
      Serial2.println("#LAPFHO\n");  
    }else // 펠티어 PTC 모두 꺼지는 구간
    {
      digitalWrite(pelPin, 1);
      digitalWrite(ptcPin, 1);
      Serial2.println("#LAPFHF\n");
      delay(5);
      Serial2.println("#LAPFHF\n");
    }
  } 
}
