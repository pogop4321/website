#include <SPI.h>
#include <Wire.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH1106.h>
#include <SHT21.h>
#include <SoftwareSerial.h>

#define RXD2 16
#define TXD2 17
//#include "DHT.h"
//#define DHTPIN 21
//#define DHTTYPE DHT22
#define OLED_SDA 21
#define OLED_SCL 22
#define ONE_WIRE_BUS 0
const int fanPwmPin = 33;
const int freq = 25000;
const int Channel = 0;
const int resolution = 8;

OneWire oneWire(ONE_WIRE_BUS);  
DallasTemperature sensors(&oneWire);

SoftwareSerial CO2Serial(15, 18);
SoftwareSerial O2Serial(4, 5);

Adafruit_SH1106 display(21, 22);
SHT21 sht; 

void get_CO2();
void get_O2();
void get_sht21();
void get_DS18B20();
void readSerial();
void send_value();
void autoTemp();
void autoHumi();
void autoCo2();
void autoO2();
void feedbackF();
void OLED_display();
void fanApp();


//DHT dht(DHTPIN, DHTTYPE);

TaskHandle_t Task1;

unsigned int CO2_int;
String CO2_str;
char CO2_arr[10];
String O2_str;
char O2_arr[80];
String O2_value_str;
float get_O2_float;
char O2_value_arr[10];
float Humi;
String Humi_str;
char Humi_arr[10];
float Temp;
String Temp_str;
char Temp_arr[10];
String Temp_RF;
String Humi_RF;
String CO2_RF;
String O2_RF;
String receive_str;
//int ledWPin = 46;//int ledBPin = 47;//int ledRPin = 48;
const int valveO2Pin = 32;
const int valveCo2Pin = 23;
long co2Delay = 0;
long co2AutoOpen = 10; // 자동제어 CO2 밸브 열려 있는 시간 값*1/10 초
long co2AutoClose = 50; // 자동제어 CO2 밸브 닫혀 있는 시간 값*1/10 초
long co2Sum = co2AutoOpen + co2AutoClose;
long o2Delay = 0;
long o2AutoOpen = 10;  // 자동제어 O2 밸브 열려 있는 시간 값*1/10 초
long o2AutoClose = 50;   // 자동제어 O2 밸브 닫혀 있는 시간 값*1/10 초
long o2Sum = o2AutoOpen + o2AutoClose;

int pelPin = 25, ptcPin = 26, humiPin = 27;

int pelMode = 0, ptcMode = 0, humiMode = 0, co2Mode = 0, o2Mode = 0, fanMode = 0;

float tempSet_float = 0;
int humiSet_int = 0;
unsigned int co2Set_uint = 0;
float o2Set_float = 0;
unsigned long feedback = 0;
unsigned long now = 0;
unsigned long past = 0;
unsigned long past2 = 0;

int pwmVal = 0;
int dialValue;
char modeCheckArr[7];
int rpmInt;
String rpmStr = "   0";
char rpmArr[10];

int modeCheckPin = 7;
String modeCheckStr = "APP ";

unsigned char hexdata[9] = {0xFF, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79};

void Task1code(void * parameter)
{
  for(;;){
  int i = 0;
  while(i < 10){
    i++;
  }
  now = millis();
  if(feedback > 2)
  {
//    OzOled.printString("OFF", 0, 0);
    digitalWrite(valveO2Pin, 0); digitalWrite(valveCo2Pin, 0); digitalWrite(fanPwmPin, 0);
    digitalWrite(pelPin, 1); digitalWrite(ptcPin, 1); digitalWrite(humiPin, 1);
    o2Mode = 0;  co2Mode = 0; humiMode = 0; pelMode = 0; ptcMode = 0;
  }else{
//  OzOled.printString("ON ", 0, 0);
  get_CO2();
  get_O2();
  get_sht21();
  get_DS18B20();
  autoTemp();
  autoHumi();
  autoCo2();
  autoO2();
  feedbackF();
  fanApp();
  OLED_display();
  send_value();
  }
  }
}

void setup() {
  Serial.begin(115200);
  Serial2.begin(57600,SERIAL_8N1,RXD2, TXD2);
  O2Serial.begin(9600);
  CO2Serial.begin(9600);
//  dht.begin();

  delay(100);
  xTaskCreatePinnedToCore(
    Task1code,
    "Task1",
    10000,
    NULL,
    0,
    &Task1,
    0);

  pinMode(valveO2Pin, OUTPUT); pinMode(valveCo2Pin, OUTPUT);
  pinMode(pelPin, OUTPUT); pinMode(ptcPin, OUTPUT); pinMode(humiPin, OUTPUT);

  digitalWrite(valveO2Pin, 0); digitalWrite(valveCo2Pin, 0);
  digitalWrite(pelPin, 1); digitalWrite(ptcPin, 1); digitalWrite(humiPin, 1);
  pinMode(ONE_WIRE_BUS, INPUT);

  ledcSetup(Channel,freq,resolution);
  ledcAttachPin(fanPwmPin , Channel);
  delay(50);
 
  ledcWrite(Channel, 0);  
  sensors.begin();
  display.begin(SH1106_SWITCHCAPVCC, 0x3C);
  display.display();
  delay(500);
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(5,4);
  display.println("SAVERS");
  display.display();
  delay(1000);
  display.setCursor(0,1); display.println("Humi:"); display.display();
  display.setCursor(10,1); display.println("%"); display.display();
  display.setCursor(0,2); display.println("Temp:"); display.display();
  display.setCursor(10,2); display.println("*C"); display.display();
  display.setCursor(10,3); display.println("ppm"); display.display();
  display.setCursor(0,4); display.println("O2 :"); display.display();
  display.setCursor(10,4); display.println("%"); display.display();
  display.setCursor(0,5); display.println("FAN:"); display.display();
  display.setCursor(10,5); display.println("RPM"); display.display();  
}


void loop() {
  while(Serial2.available() > 0)
  {
    String input = Serial2.readString();
    receive_str = receive_str + input;
    readSerial();
  }
}
