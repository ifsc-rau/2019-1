#include "Ultrasonic.h"

const int trig = 6;
const int echo = 7;
const int rele = 12;
Ultrasonic sensor(trig, echo);

void setup() {
  pinMode(echo, INPUT);
  pinMode(trig, OUTPUT);
  pinMode(rele, OUTPUT);
}

void loop() {
  if (distancia() <= 15)
    digitalWrite(rele, LOW);
}

int distancia() {
  digitalWrite(trig, HIGH);
  digitalWrite(trig, LOW);
  return sensor.Ranging(CM);
}
