void autoO2()
{
  if(o2Set_float != 0 && o2Mode == 1)
  {
    if(get_O2_float >= o2Set_float*1.02) // o2 수치가 세팅보다 높으면 밸브를 닫는다.
    {
      digitalWrite(valveO2Pin, 0);
      Serial2.println("#LAOFOF\n");  
      delay(5);
      Serial2.println("#LAOFOF\n");    
    }else if(get_O2_float < o2Set_float*0.98) // o2 수치가 세팅보다 낮으면 밸브를 연다.
    {
      if(get_O2_float > 10){ // o2 수치가 10% 이상일 때만 밸브를 연다.
       if(o2Delay >= 0 && o2Delay < o2AutoOpen){  
        digitalWrite(valveO2Pin, 1);
        Serial2.println("#LAOOOO\n"); 
        delay(5);
        Serial2.println("#LAOOOO\n"); 
        }else if(o2Delay >= o2AutoOpen && o2Delay <= o2Sum)
        {        
        digitalWrite(valveO2Pin, 0);
        Serial2.println("#LAOFOF\n"); 
        delay(5);
        Serial2.println("#LAOFOF\n"); 
        }else if(o2Delay > co2Sum)
        {
        o2Delay = 0;
        }else{}
        o2Delay++;
      }
    }
    delay(10);
  }   
}
