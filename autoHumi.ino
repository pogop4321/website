void autoHumi()
{
  if(humiSet_int != 0 && humiMode == 1)
  {
    if(Humi >= humiSet_int)
    {
      digitalWrite(humiPin, 1);  
      Serial2.println("#LADFDF\n");     
      delay(5);
      Serial2.println("#LADFDF\n");   
    }else if(Humi < humiSet_int*0.98)
    {
      digitalWrite(humiPin, 0); 
      Serial2.println("#LADODO\n");   
      delay(5);
      Serial2.println("#LADODO\n");  
    }
  }   
}
