void autoCo2()
{
  if(co2Set_uint != 0 && co2Mode == 1)
  {
    if(CO2_int >= co2Set_uint*1.02) // co2 수치가 세팅 보다 높으면 팬을 불고, 밸브 닫는다.
    {
      fanMode = 1;   
      ledcWrite(Channel, pwmVal);
      digitalWrite(valveCo2Pin, 0);
      co2Delay = 0;
      Serial2.println("#LAFOFO\n");
      delay(5);
      Serial2.println("#LAFOFO\n");
      delay(5);
      Serial2.println("#LACFCF\n"); 
      delay(5);
      Serial2.println("#LACFCF\n");  
    }else if(CO2_int < co2Set_uint*0.98) // co2 수치가 세팅 보다 낮으면 팬을 끄고 밸브를 연다.
    {
      fanMode = 0;
      ledcWrite(Channel, 0);
      if(co2Delay >= 0 && co2Delay < co2AutoOpen)
      {
        digitalWrite(valveCo2Pin, 1);
        Serial2.println("#LACOCO\n"); 
        delay(5);
        Serial2.println("#LACOCO\n");  
      }else if(co2Delay >= co2AutoOpen && co2Delay <= co2Sum)
      {
        digitalWrite(valveCo2Pin, 0);
        Serial2.println("#LACFCF\n");
        delay(5);
        Serial2.println("#LACFCF\n");
      }else if(co2Delay > co2Sum)
      {
        co2Delay = 0;
      }else{}
      co2Delay++;
      Serial2.println("#LAFFFF\n");   
      delay(5);
      Serial2.println("#LAFFFF\n");    
    }
  } 
  else{}  
}
