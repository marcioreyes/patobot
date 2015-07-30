int LED = 13;
int inByte = 0;

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  if(Serial.available() > 0) {
     inByte = Serial.read() - '0';
     int i = 0;
     while(i < inByte) {
       digitalWrite(LED, HIGH);
       delay(1000);
       digitalWrite(LED, LOW);
       delay(1000);
       i++;
     }
  }
}
