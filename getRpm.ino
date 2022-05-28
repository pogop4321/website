void getRpm() {
  if (pwmVal == 0) {
    rpmInt = 0;
  }
  else if (pwmVal < 25) {
    rpmInt = map(pwmVal, 1, 14, 0, 0);
  }
  else if (pwmVal < 40) {
    rpmInt = map(pwmVal, 15, 29, 1001, 1400);
  }
  else if (pwmVal < 45) {
    rpmInt = map(pwmVal, 30, 44, 1401, 2600);
  }
  else if (pwmVal < 60) {
    rpmInt = map(pwmVal, 45, 59, 2601, 3500);
  }
  else if (pwmVal < 75) {
    rpmInt = map(pwmVal, 60, 74, 3501, 4650);
  }
  else if (pwmVal < 90) {
    rpmInt = map(pwmVal, 75, 89, 4651, 5700);
  }
  else if (pwmVal < 105) {
    rpmInt = map(pwmVal, 90, 104,5701, 6750);
  }
  else if (pwmVal < 130) {
    rpmInt = map(pwmVal, 105, 129, 6751, 8000);
  }
  else if (pwmVal < 145) {
    rpmInt = map(pwmVal, 130, 144, 8001, 9300);
  }
  else if (pwmVal < 160) {
    rpmInt = map(pwmVal, 145, 159, 9301, 10900);
  }
  else if (pwmVal < 180) {
    rpmInt = map(pwmVal, 160, 179, 10901, 11800);
  }
  else if (pwmVal < 201) {
    rpmInt = map(pwmVal, 180, 199, 11801, 12800);
  }
  else {
    rpmInt = 0;
  }
  rpmStr = String(rpmInt);
  if (rpmInt == 0) {
    rpmStr = rpmStr + "    ";
  }
  else if (rpmInt < 100) {
    rpmStr = rpmStr + "   ";
  }
  else if (rpmInt < 1000) {
    rpmStr = rpmStr + "  ";
  }
  else if (rpmInt < 10000) {
    rpmStr = rpmStr + " ";
  }
  else {
    rpmStr = rpmStr;
  }
  rpmStr.toCharArray(rpmArr, 10);
}
